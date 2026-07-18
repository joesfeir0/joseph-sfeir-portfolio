import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  capabilities,
  education,
  experience,
  projects,
  siteLinks,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: "Joseph Sfeir — Software Engineer & Systems Thinker" },
  description:
    "Joseph Sfeir is a software engineer in Lebanon connecting interface, systems, data, and practical AI into useful products.",
  alternates: { canonical: "/" },
};

const featuredTools = Array.from(
  new Set(capabilities.flatMap((capability) => capability.tools)),
).slice(0, 18);

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="main-content" className="signal-home">
      <section className="signal-hero" aria-labelledby="home-title">
        <div className="signal-hero__media">
          <Image
            src="/images/joseph-hero-formal.jpg"
            alt="Joseph Sfeir standing in a white shirt and brown tie in a university corridor"
            fill
            priority
            unoptimized
            sizes="100vw"
          />
        </div>
        <div className="signal-hero__shade" aria-hidden="true" />
        <div className="signal-hero__grid" aria-hidden="true" />

        <div className="signal-hero__content section-shell">
          <div className="signal-hero__copy">
            <h1 id="home-title">
              <span>Joseph</span>
              <span>Sfeir.</span>
            </h1>
            <p className="signal-hero__eyebrow">
              Software engineer / curious systems thinker
            </p>
            <p className="signal-hero__intro">
              I build useful software where interface, data, and intelligence
              have to work as one system.
            </p>
            <div className="signal-hero__actions">
              <a className="signal-button signal-button--accent" href="#work">
                Open the build log <span aria-hidden="true">↓</span>
              </a>
              <a
                className="signal-link"
                href={siteLinks.resume}
                target="_blank"
                rel="noreferrer"
              >
                Résumé <Arrow />
              </a>
            </div>
          </div>

          <div className="signal-hero__meta">
            <span className="signal-hero__status">
              <i aria-hidden="true" /> Available for junior software
              opportunities
            </span>
          </div>
        </div>
      </section>

      <section
        className="signal-trace"
        id="journey"
        aria-labelledby="trace-title"
      >
        <div className="section-shell">
          <header className="signal-trace__header">
            <p className="signal-label">Trace / experience + education</p>
            <h2 id="trace-title">The path so far, in commits.</h2>
          </header>

          <div className="signal-timeline">
            <article>
              <span className="signal-timeline__index">01</span>
              <time>{experience[0].period}</time>
              <div>
                <small>{experience[0].organization}</small>
                <h3>{experience[0].role}</h3>
                <p>{experience[0].summary}</p>
              </div>
            </article>
            <article>
              <span className="signal-timeline__index">02</span>
              <time>{education.period}</time>
              <div>
                <small>{education.institution}</small>
                <h3>{education.credential}</h3>
                <p>
                  Completed in 2026 with a focus on building connected products.
                </p>
              </div>
            </article>
            <article>
              <span className="signal-timeline__index">03</span>
              <time>{experience[1].period}</time>
              <div>
                <small>{experience[1].organization}</small>
                <h3>{experience[1].role}</h3>
                <p>{experience[1].summary}</p>
              </div>
            </article>
          </div>

          <div className="signal-stack">
            <p>Current toolbox</p>
            <ul aria-label="Technologies Joseph works with">
              {featuredTools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="signal-work" id="work" aria-labelledby="work-title">
        <div className="section-shell">
          <header className="signal-work__header">
            <p className="signal-label">Build log / selected systems</p>
            <h2 id="work-title">
              Two products. One habit: follow the whole loop.
            </h2>
            <p>
              The screenshots matter, but so do the services, workflows, and
              product decisions that make them useful.
            </p>
          </header>

          <div className="signal-projects">
            <article className="signal-project signal-project--automatch">
              <div className="signal-project__copy">
                <div className="signal-project__number">01</div>
                <p className="signal-label">{projects.automatch.role} / 2026</p>
                <h3>{projects.automatch.title}</h3>
                <h4>{projects.automatch.statement}</h4>
                <p>{projects.automatch.summary}</p>
                <ul className="signal-tags" aria-label="AutoMatch focus areas">
                  <li>Marketplace</li>
                  <li>AI assistance</li>
                  <li>Price prediction</li>
                </ul>
                <Link className="signal-button" href={projects.automatch.path}>
                  Read the case file <Arrow />
                </Link>
              </div>

              <div className="signal-project__stage signal-project__stage--automatch">
                <div className="signal-stage__coordinates" aria-hidden="true">
                  SYS / AUTO / 01
                </div>
                <div className="automatch-gallery">
                  <figure className="automatch-screen automatch-screen--detail">
                    <Image
                      src="/images/automatch-detail-prediction.png"
                      alt="AutoMatch vehicle page with price prediction, seller chat, and appointment booking"
                      fill
                      unoptimized
                      sizes="(max-width: 760px) 88vw, 48vw"
                    />
                    <figcaption>Valuation + booking</figcaption>
                  </figure>
                  <figure className="automatch-screen automatch-screen--inventory">
                    <Image
                      src="/images/automatch-inventory.png"
                      alt="AutoMatch inventory page showing vehicle listing cards and search tools"
                      fill
                      unoptimized
                      sizes="(max-width: 760px) 52vw, 28vw"
                    />
                    <figcaption>Live inventory</figcaption>
                  </figure>
                  <figure className="automatch-screen automatch-screen--analytics">
                    <Image
                      src="/images/automatch-analytics.png"
                      alt="AutoMatch administration analytics with sales, profit, and brand performance charts"
                      fill
                      unoptimized
                      sizes="(max-width: 760px) 52vw, 32vw"
                    />
                    <figcaption>Business analytics</figcaption>
                  </figure>
                  <figure className="automatch-screen automatch-screen--assistant">
                    <Image
                      src="/images/automatch-ai-assistant.png"
                      alt="AutoMatch AI assistant returning matching Mercedes inventory"
                      fill
                      unoptimized
                      sizes="(max-width: 760px) 34vw, 15vw"
                    />
                    <figcaption>AI buying assistant</figcaption>
                  </figure>
                </div>
              </div>
            </article>

            <article className="signal-project signal-project--fitai">
              <div className="signal-project__copy">
                <div className="signal-project__number">02</div>
                <p className="signal-label">
                  {projects.fitai.role} / In progress
                </p>
                <h3>{projects.fitai.title}</h3>
                <h4>{projects.fitai.statement}</h4>
                <p>{projects.fitai.summary}</p>
                <ul className="signal-tags" aria-label="FitAI focus areas">
                  <li>Workout plans</li>
                  <li>Food logging</li>
                  <li>Progress tracking</li>
                </ul>
                <Link className="signal-button" href={projects.fitai.path}>
                  Read the case file <Arrow />
                </Link>
              </div>

              <div className="signal-project__stage signal-project__stage--fitai">
                <div className="signal-stage__coordinates" aria-hidden="true">
                  APP / FIT / 02
                </div>
                <figure className="fitai-screen fitai-screen--workouts">
                  <Image
                    src="/images/fitai-workouts.jpg"
                    alt="FitAI workout plans with start-workout and progress actions"
                    fill
                    unoptimized
                    sizes="(max-width: 760px) 42vw, 18vw"
                  />
                </figure>
                <figure className="fitai-screen fitai-screen--calories">
                  <Image
                    src="/images/fitai-calories.jpg"
                    alt="FitAI calorie target, health profile estimates, and food log"
                    fill
                    unoptimized
                    sizes="(max-width: 760px) 52vw, 21vw"
                  />
                </figure>
                <figure className="fitai-screen fitai-screen--progress">
                  <Image
                    src="/images/fitai-progress.jpg"
                    alt="FitAI body progress dashboard with check-in and early trend state"
                    fill
                    unoptimized
                    sizes="(max-width: 760px) 42vw, 18vw"
                  />
                </figure>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="signal-field"
        id="about"
        aria-labelledby="field-title"
      >
        <div className="section-shell">
          <header className="signal-field__header">
            <p className="signal-label">Off the clock</p>
            <h2 id="field-title">
              A little more
              <br />
              than my
              <br />
              <em>résumé.</em>
            </h2>
            <div className="signal-field__intro">
              <p>
                I like things with momentum: a product taking shape, a trail
                opening up, or one more rep when the easy answer is to stop.
              </p>
              <p>
                The same instinct follows me into engineering. Learn by moving,
                notice what feels wrong, adjust, and go again.
              </p>
            </div>
          </header>

          <div className="signal-field__grid">
            <figure className="signal-photo signal-photo--graduation">
              <Image
                src="/images/joseph-graduation.jpg"
                alt="Joseph at his Computer Science graduation"
                fill
                unoptimized
                sizes="(max-width: 760px) 88vw, 38vw"
              />
              <figcaption>One chapter finished.</figcaption>
            </figure>

            <aside className="signal-field__note">
              <strong>Code / gym / trail</strong>
              <p>Repeat in whichever order the week allows.</p>
            </aside>

            <figure className="signal-photo signal-photo--trail">
              <Image
                src="/images/joseph-hiking.jpg"
                alt="Joseph hiking through a narrow rocky canyon"
                fill
                unoptimized
                sizes="(max-width: 760px) 74vw, 28vw"
              />
              <figcaption>Best debugging environment I know.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section
        className="signal-manifesto section-shell"
        id="what-i-do"
        aria-labelledby="manifesto-title"
      >
        <header className="signal-section-head">
          <p className="signal-label">Operating principle / 01</p>
          <span>Interface → system → outcome</span>
        </header>

        <div className="signal-manifesto__lead">
          <h2 id="manifesto-title">
            I like the moment when the pieces start
            <em> talking to each other.</em>
          </h2>
          <p>
            Recent Computer Science graduate, naturally curious, and happiest
            when I can follow an idea from the visible screen to the logic,
            data, and decisions underneath it.
          </p>
        </div>

        <div className="signal-chain" aria-label="Joseph's product approach">
          <article>
            <span>01</span>
            <h3>Interface</h3>
            <p>Make the next action obvious and the hard parts feel calm.</p>
          </article>
          <article>
            <span>02</span>
            <h3>System</h3>
            <p>
              Connect the services, rules, and data without losing the plot.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Outcome</h3>
            <p>Ship something useful, observe what changes, and improve it.</p>
          </article>
        </div>
      </section>

      <section className="signal-contact" aria-labelledby="contact-cta-title">
        <div className="section-shell signal-contact__inner">
          <p className="signal-label">Open channel / available for work</p>
          <h2 id="contact-cta-title">
            Need a builder who asks why before how?
          </h2>
          <p>
            I’m looking for a junior software role where I can contribute, learn
            quickly, and stay close to the product.
          </p>
          <div className="signal-contact__actions">
            <a
              className="signal-button signal-button--accent"
              href={siteLinks.email}
            >
              Start a conversation <Arrow />
            </a>
            <a
              className="signal-link"
              href={siteLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Arrow />
            </a>
          </div>
          <aside>
            <span aria-hidden="true" />
            Sehaile, Lebanon · Remote and on-site conversations welcome
          </aside>
        </div>
      </section>
    </main>
  );
}
