import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found section-shell">
      <p className="kicker">404 / Wrong turn</p>
      <h1>
        Nothing lives
        <br />
        <em>on this path.</em>
      </h1>
      <p>The useful route is back home.</p>
      <Link className="button button--ink" href="/">
        Return home <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
