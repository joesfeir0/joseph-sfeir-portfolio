import Link from "next/link";
import type { ReactNode } from "react";

import type { ArchitectureStep, ProjectRecord } from "@/lib/site-data";

export function CaseStudyHero({
  project,
  children,
}: {
  project: ProjectRecord;
  children?: ReactNode;
}) {
  return (
    <header className="case-hero">
      <div className="case-hero__topline">
        <Link href="/#work">← Selected work</Link>
        <span>
          {project.index} / {project.year}
        </span>
      </div>
      <div className="case-hero__heading">
        <p className="kicker">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p>{project.statement}</p>
      </div>
      <dl className="case-meta">
        <div>
          <dt>Status</dt>
          <dd>{project.status}</dd>
        </div>
        <div>
          <dt>Type</dt>
          <dd>{project.projectType}</dd>
        </div>
        <div>
          <dt>My role</dt>
          <dd>{project.role}</dd>
        </div>
      </dl>
      {children ? <div className="case-hero__visual">{children}</div> : null}
    </header>
  );
}

export function CaseStudySection({
  number,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  number: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  const headingId = `section-${number.replace(/[^a-z0-9]/gi, "-")}`;
  return (
    <section
      className={`case-section ${className}`.trim()}
      aria-labelledby={headingId}
    >
      <header className="case-section__header">
        <p className="kicker">
          {number} / {eyebrow}
        </p>
        <h2 id={headingId}>{title}</h2>
        {intro ? <p className="case-section__intro">{intro}</p> : null}
      </header>
      <div className="case-section__body">{children}</div>
    </section>
  );
}

export function ArchitectureFlow({
  steps,
  caption = "System flow",
}: {
  steps: readonly ArchitectureStep[];
  caption?: string;
}) {
  return (
    <figure className="architecture-flow">
      <figcaption>{caption}</figcaption>
      <ol>
        {steps.map((step, index) => (
          <li key={step.label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step.label}</strong>
            <p>{step.detail}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function NumberedList({
  items,
  label,
}: {
  items: readonly string[];
  label: string;
}) {
  return (
    <ol className="numbered-list" aria-label={label}>
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{item}</p>
        </li>
      ))}
    </ol>
  );
}

export function StackList({ items }: { items: readonly string[] }) {
  return (
    <ul className="stack-list" aria-label="Technologies used">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function CaseStudyNavigation({
  previous,
  next,
}: {
  previous?: Pick<ProjectRecord, "path" | "title">;
  next?: Pick<ProjectRecord, "path" | "title">;
}) {
  return (
    <nav className="case-navigation" aria-label="Case studies">
      {previous ? (
        <Link href={previous.path}>
          <span>Previous</span>
          <strong>← {previous.title}</strong>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.path}>
          <span>Next</span>
          <strong>{next.title} →</strong>
        </Link>
      ) : (
        <Link href="/contact">
          <span>Next</span>
          <strong>Start a conversation →</strong>
        </Link>
      )}
    </nav>
  );
}
