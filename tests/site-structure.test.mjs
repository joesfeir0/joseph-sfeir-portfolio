import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

const requiredPages = [
  "app/page.tsx",
  "app/systems/automatch/page.tsx",
  "app/systems/fit-ai/page.tsx",
  "app/background/page.tsx",
  "app/contact/page.tsx",
];

test("includes every portfolio route and SEO surface", async () => {
  await Promise.all(
    [
      ...requiredPages,
      "app/sitemap.ts",
      "app/robots.ts",
      "app/not-found.tsx",
      "next.config.ts",
    ].map((path) => access(new URL(path, root))),
  );

  const sources = await Promise.all(
    requiredPages.map((path) => readFile(new URL(path, root), "utf8")),
  );

  for (const source of sources) {
    assert.match(source, /id="main-content"/);
  }

  await assert.rejects(
    access(new URL("app/systems/llm-from-scratch/page.tsx", root)),
  );

  const nextConfig = await readFile(new URL("next.config.ts", root), "utf8");
  assert.match(nextConfig, /source: "\/systems\/llm-from-scratch"/);
  assert.match(nextConfig, /destination: "\/#work"/);
});

test("ships the real resume, social artwork, photos, and product evidence", async () => {
  await Promise.all(
    [
      "public/resume/Joseph-Sfeir_CV.pdf",
      "public/og.png",
      "public/images/automatch-presentation.jpg",
      "public/images/joseph-graduation.jpg",
      "public/images/joseph-hiking.jpg",
      "public/images/joseph-hero-formal.jpg",
      "public/images/automatch-detail-prediction.png",
      "public/images/automatch-ai-assistant.png",
      "public/images/automatch-inventory.png",
      "public/images/automatch-analytics.png",
      "public/images/fitai-workouts.jpg",
      "public/images/fitai-calories.jpg",
      "public/images/fitai-progress.jpg",
    ].map((path) => access(new URL(path, root))),
  );

  const [home, layout, siteData, resumePdf] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("lib/site-data.ts", root), "utf8"),
    readFile(new URL("public/resume/Joseph-Sfeir_CV.pdf", root)),
  ]);

  assert.match(home, /<span>Joseph<\/span>[\s\S]*?<span>Sfeir\.<\/span>/);
  assert.match(home, /signal-hero__media/);
  assert.match(home, /signal-hero__shade/);
  assert.match(home, /src="\/images\/joseph-hero-formal\.jpg"/);
  assert.match(home, /fill[\s\S]*?priority[\s\S]*?sizes="100vw"/);
  assert.match(home, /Software engineer \/ curious systems thinker/);
  assert.match(
    home,
    /I build useful software where interface, data, and intelligence/,
  );
  assert.match(home, /Open the build log/);
  assert.doesNotMatch(home, /Profile \/ 001|UTC \+03|signal-ticker/);
  assert.doesNotMatch(home, /joseph-editorial-hero\.webp/);
  assert.match(home, /Build log \/ selected systems/);
  assert.match(home, /signal-trace/);
  assert.match(home, /signal-manifesto/);
  assert.match(home, /signal-projects/);
  assert.match(home, /signal-field/);
  assert.match(home, /A little more[\s\S]*than my[\s\S]*résumé/);
  assert.match(home, /Code \/ gym \/ trail/);
  assert.match(home, /One chapter finished/);
  assert.match(home, /Best debugging environment I know/);
  assert.match(home, /The path so far, in commits/);
  assert.match(home, /<h3>Interface<\/h3>|<h3>System<\/h3>|<h3>Outcome<\/h3>/);
  assert.match(
    home,
    /I like the moment when the pieces start[\s\S]*?<em>\s*talking to each other\.<\/em>/,
  );
  assert.equal(
    home.match(/I like the moment when the pieces start/g)?.length,
    1,
  );
  assert.equal(home.match(/id="journey"/g)?.length, 1);
  assert.ok(home.indexOf('id="journey"') < home.indexOf('id="work"'));
  assert.ok(home.indexOf('id="work"') < home.indexOf('id="about"'));
  assert.ok(home.indexOf('id="about"') < home.indexOf("signal-manifesto"));
  assert.ok(home.indexOf("signal-manifesto") < home.indexOf("signal-contact"));
  assert.match(home, /Recent Computer Science graduate/i);
  assert.match(home, /automatch-detail-prediction\.png/);
  assert.match(home, /automatch-ai-assistant\.png/);
  assert.match(home, /automatch-inventory\.png/);
  assert.match(home, /automatch-analytics\.png/);
  assert.match(home, /fitai-workouts\.jpg/);
  assert.match(home, /fitai-calories\.jpg/);
  assert.match(home, /fitai-progress\.jpg/);
  assert.match(layout, /Software Engineer/);
  assert.match(layout, /structuredData/);
  assert.match(
    `${home}\n${layout}`,
    /https:\/\/www\.linkedin\.com\/in\/joseph-sfeir-18b542322/,
  );
  assert.match(
    siteData,
    /linkedin: "https:\/\/www\.linkedin\.com\/in\/joseph-sfeir-18b542322"/,
  );
  assert.match(
    resumePdf.toString("latin1"),
    /https:\/\/www\.linkedin\.com\/in\/joseph-sfeir-18b542322/,
  );
  assert.doesNotMatch(`${home}\n${layout}`, /Systems in Motion|codex-preview/);
  assert.doesNotMatch(
    home,
    /Personal operating system|operating-system|joseph-editorial-laptop/,
  );
  assert.doesNotMatch(
    home,
    /portfolio-hero|Built for <em>real use|Across the stack|You bring the problem/,
  );
});

test("keeps project claims honest and status-aware", async () => {
  const [data, automatch, fitai] = await Promise.all([
    readFile(new URL("lib/site-data.ts", root), "utf8"),
    readFile(new URL("app/systems/automatch/page.tsx", root), "utf8"),
    readFile(new URL("app/systems/fit-ai/page.tsx", root), "utf8"),
  ]);

  assert.match(data, /Completed · Team senior project/);
  assert.match(data, /Full-stack contributor/);
  assert.match(automatch, /Team context/);
  assert.match(automatch, /seeded (?:demo|demonstration) data/i);
  assert.match(data, /In progress · Independent project/);
  assert.match(fitai, /current Flutter build/i);
  assert.match(fitai, /AI Coach remains a planned milestone/i);
  assert.match(fitai, /not medical advice/i);
  assert.match(data, /Planned advisory response generation/);
});

test("uses one shared content model, two projects, and no former learning lab", async () => {
  const [home, automatch, fitai, data, sitemap, packageJson] =
    await Promise.all([
      readFile(new URL("app/page.tsx", root), "utf8"),
      readFile(new URL("app/systems/automatch/page.tsx", root), "utf8"),
      readFile(new URL("app/systems/fit-ai/page.tsx", root), "utf8"),
      readFile(new URL("lib/site-data.ts", root), "utf8"),
      readFile(new URL("app/sitemap.ts", root), "utf8"),
      readFile(new URL("package.json", root), "utf8"),
    ]);

  for (const source of [home, automatch, fitai]) {
    assert.match(source, /@\/lib\/site-data/);
  }

  assert.doesNotMatch(
    `${home}\n${automatch}\n${fitai}\n${data}\n${sitemap}`,
    /Learning Lab|projects\.llm|llm-from-scratch|LlmConceptMap/i,
  );

  await Promise.all([
    assert.rejects(access(new URL("components/system-orbit-3d.tsx", root))),
    assert.rejects(
      access(new URL("components/system-orbit-3d-loader.tsx", root)),
    ),
    assert.rejects(access(new URL("components/interactive-demos.tsx", root))),
    assert.rejects(access(new URL("components/project-visuals.tsx", root))),
    assert.rejects(access(new URL("app/_sites-preview", root))),
  ]);

  assert.doesNotMatch(packageJson, /@react-three\/fiber|"three"|@types\/three/);
});

test("keeps accessibility and reduced-motion fundamentals visible in source", async () => {
  const [
    shell,
    effects,
    layout,
    home,
    background,
    baseStyles,
    responsiveStyles,
    identityStyles,
  ] = await Promise.all([
    readFile(new URL("components/site-shell.tsx", root), "utf8"),
    readFile(new URL("components/portfolio-effects.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/background/page.tsx", root), "utf8"),
    readFile(new URL("app/styles/base.css", root), "utf8"),
    readFile(new URL("app/styles/responsive.css", root), "utf8"),
    readFile(new URL("app/styles/identity.css", root), "utf8"),
  ]);

  assert.match(shell, /Skip to content/);
  assert.match(shell, /aria-label="Primary navigation"/);
  assert.match(
    home,
    /alt="Joseph Sfeir standing in a white shirt and brown tie in a university corridor/,
  );
  assert.match(home, /alt="AutoMatch vehicle page with price prediction/);
  assert.match(
    home,
    /alt="FitAI calorie target, health profile estimates, and food log"/,
  );
  assert.match(background, /alt="Joseph hiking through a narrow rocky canyon"/);
  assert.match(baseStyles, /:focus-visible/);
  assert.match(responsiveStyles, /prefers-reduced-motion/);
  assert.match(layout, /PortfolioEffects/);
  assert.match(effects, /prefers-reduced-motion/);
  assert.match(effects, /IntersectionObserver/);
  assert.match(effects, /--page-progress/);
  assert.match(effects, /hero-nav-hidden/);
  assert.match(identityStyles, /site-progress/);
  assert.match(identityStyles, /hero-nav-hidden/);
  assert.match(responsiveStyles, /\.case-hero\s*>\s*\*/);
  assert.match(responsiveStyles, /overscroll-behavior-inline:\s*contain/);
});
