import Image from "next/image";
import Link from "next/link";

import {
  contactLinks,
  primaryNavigation,
  siteIdentity,
  siteLinks,
} from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-header__inner">
        <Link className="site-brand" href="/" aria-label="Joseph Sfeir, home">
          <span className="site-brand__mark" aria-hidden="true">
            <Image
              src="/images/joseph-hero-formal.jpg"
              alt=""
              width={48}
              height={48}
              unoptimized
            />
          </span>
          <span className="site-brand__name">
            <strong>Joseph</strong>
            <small>Software engineer</small>
          </span>
        </Link>

        <nav className="site-navigation" aria-label="Primary navigation">
          <ul>
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <a className="availability-link" href={siteLinks.email}>
          Say hi <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {primaryNavigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href={siteLinks.resume} target="_blank" rel="noreferrer">
              Résumé ↗
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__eyebrow">
            <i aria-hidden="true" /> Open to junior software opportunities
          </p>
          <strong>
            Let&apos;s build something <em>useful.</em>
          </strong>
          <p>
            Interface, systems, data, and practical AI—connected with intent.
            If you have a role or a product worth talking about, my inbox is open.
          </p>
          <a className="site-footer__cta" href={siteLinks.email}>
            Email Joseph <span aria-hidden="true">↗</span>
          </a>
        </div>
        <nav className="site-footer__links" aria-label="Contact and social links">
          {contactLinks.slice(0, 3).map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {item.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
          <a href={siteLinks.resume} target="_blank" rel="noreferrer">
            Résumé <span aria-hidden="true">↗</span>
          </a>
          <a href="#main-content">Back to top <span aria-hidden="true">↑</span></a>
        </nav>
        <div className="site-footer__meta">
          <span>© {new Date().getFullYear()} Joseph Sfeir</span>
          <span>{siteIdentity.location}</span>
          <span>Designed and built with care</span>
        </div>
      </div>
    </footer>
  );
}
