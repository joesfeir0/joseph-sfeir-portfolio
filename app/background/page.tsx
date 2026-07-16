import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  education,
  experience,
  siteIdentity,
  siteLinks,
} from "@/lib/site-data";

const canonical = "https://josephsfeir.dev/background";

export const metadata: Metadata = {
  title: "About",
  description:
    "Joseph Sfeir is a recent Computer Science graduate in Lebanon who enjoys building complete products and learning across the stack.",
  alternates: { canonical },
  openGraph: {
    title: "About Joseph Sfeir",
    description:
      "A recent Computer Science graduate with a wide-angle approach to product engineering.",
    url: canonical,
    type: "profile",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Joseph Sfeir — Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Joseph Sfeir",
    description:
      "A recent Computer Science graduate with a wide-angle approach to product engineering.",
    images: ["/og.png"],
  },
};

export default function BackgroundPage() {
  return (
    <main id="main-content" className="background-page">
      <section className="background-hero section-shell" aria-labelledby="background-title">
        <p className="kicker">About / Joseph Sfeir</p>
        <h1 id="background-title">
          I like knowing how
          <br />
          <em>the pieces talk.</em>
        </h1>
        <div className="background-hero__intro">
          <p>
            I’m a recent Computer Science graduate from Notre Dame University,
            based in Sehaile, Lebanon.
          </p>
          <p>
            I enjoy moving across interface, backend, data, mobile, and AI—not
            because every project needs everything, but because understanding
            the connections helps me build more complete products.
          </p>
        </div>
        <p className="availability-note">
          <span aria-hidden="true" /> {siteIdentity.availability}
        </p>
      </section>

      <section className="background-story" aria-labelledby="background-story-title">
        <div className="section-shell background-story__grid">
          <header>
            <p className="kicker">01 / How I work</p>
            <h2 id="background-story-title">
              Curious first.
              <br />
              <em>Specific after.</em>
            </h2>
          </header>
          <div className="background-story__copy">
            <p>
              I’m comfortable saying when something is still in progress. I
              would rather understand the constraint, test the next useful step,
              and explain the trade-off than dress unfinished work up as a win.
            </p>
            <p>
              That mindset shaped AutoMatch, where marketplace operations and
              machine learning had to work together, and FitAI, where the value
              of an AI coach depends on careful product and data decisions.
            </p>
          </div>
          <div className="principle-list">
            <article>
              <span>01</span>
              <h3>Follow the thread</h3>
              <p>Understand what happens before and after the feature.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Keep claims honest</h3>
              <p>Show the real scope, especially when the work is evolving.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Stay coachable</h3>
              <p>Ask better questions, absorb feedback, and keep improving.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="education-band" aria-labelledby="education-title">
        <div className="section-shell education-band__grid">
          <p className="kicker">02 / Education</p>
          <div>
            <h2 id="education-title">{education.credential}</h2>
            <p>{education.institution}</p>
          </div>
          <dl>
            <div>
              <dt>Period</dt>
              <dd>{education.period}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{education.location}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="background-experience section-shell" aria-labelledby="background-experience-title">
        <header className="section-heading-inline">
          <p className="kicker">03 / Experience</p>
          <h2 id="background-experience-title">Work that taught me how to show up.</h2>
          <p>
            Development experience, plus the discipline and accuracy I learned
            in a role outside tech.
          </p>
        </header>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article key={item.role}>
              <p className="experience-list__index">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <p className="experience-list__period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="experience-list__org">{item.organization}</p>
              </div>
              <p className="experience-list__summary">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="beyond-screen" aria-labelledby="beyond-title">
        <div className="section-shell beyond-screen__grid">
          <figure className="hiking-photo">
            <Image
              src="/images/joseph-hiking.jpg"
              alt="Joseph hiking through a narrow rocky canyon"
              fill
              sizes="(max-width: 800px) 92vw, 42vw"
            />
            <figcaption>Outside the screen / somewhere on the trail</figcaption>
          </figure>
          <div>
            <p className="kicker">04 / Beyond the screen</p>
            <h2 id="beyond-title">
              A bit of distance
              <br />
              <em>helps the thinking.</em>
            </h2>
            <p>
              Away from code, I’m usually hiking, training at the gym, following
              sports, or finding another subject to learn about. The common
              thread is simple: I like progress I can feel and understand.
            </p>
            <ul className="personal-ledger" aria-label="Life beyond the screen">
              <li>
                <span>Reset</span>
                Hiking
              </li>
              <li>
                <span>Train</span>
                Gym
              </li>
              <li>
                <span>Follow</span>
                Sports
              </li>
            </ul>
            <Link className="text-link" href="/contact">
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="background-resume section-shell">
        <p>Prefer the one-page version?</p>
        <a className="button button--ink" href={siteLinks.resume} target="_blank" rel="noreferrer">
          View résumé <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
