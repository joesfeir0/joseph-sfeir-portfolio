import type { Metadata } from "next";

import { contactLinks, siteIdentity, siteLinks } from "@/lib/site-data";

const canonical = "https://josephsfeir.dev/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Joseph Sfeir about junior software engineering, full-stack, mobile, or AI-enabled product opportunities.",
  alternates: { canonical },
  openGraph: {
    title: "Contact Joseph Sfeir",
    description: "Let’s talk about a useful product, role, or problem.",
    url: canonical,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Joseph Sfeir — Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Joseph Sfeir",
    description: "Let’s talk about a useful product, role, or problem.",
    images: ["/og.png"],
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page">
      <section className="contact-hero section-shell" aria-labelledby="contact-title">
        <div>
          <p className="kicker">Contact / Sehaile, Lebanon</p>
          <h1 id="contact-title">
            Let’s find the useful
            <br />
            <em>thing to build next.</em>
          </h1>
        </div>
        <div className="contact-hero__intro">
          <p>
            I’m open to junior and entry-level opportunities across software
            engineering, full-stack, mobile, and thoughtful AI-enabled products.
          </p>
          <p>
            The simplest way to reach me is email. I’m also happy to connect on
            LinkedIn.
          </p>
          <a className="button button--ink" href={siteLinks.email}>
            Send an email <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="contact-directory section-shell" aria-label="Contact methods">
        {contactLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{link.label}</strong>
            <p>{link.value}</p>
            <i aria-hidden="true">↗</i>
          </a>
        ))}
        <a href={siteLinks.resume} target="_blank" rel="noreferrer">
          <span>05</span>
          <strong>Résumé</strong>
          <p>One-page background and experience</p>
          <i aria-hidden="true">↗</i>
        </a>
      </section>

      <section className="contact-note section-shell">
        <p className="availability-note">
          <span aria-hidden="true" /> {siteIdentity.availability}
        </p>
        <p>Friendly messages welcome. Clear context appreciated.</p>
      </section>
    </main>
  );
}
