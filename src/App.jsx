import { useEffect, useMemo, useRef, useState } from "react";

export default function App() {
  const roles = useMemo(
    () => [
      "Computer Science Student @ NDU",
      "Full-Stack Web Developer Intern (White Beard)",
      "Building AutoMatch (Senior Project)",
      "JavaScript • React • PHP • SQL",
    ],
    []
  );

  const [roleIndex, setRoleIndex] = useState(0);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  const sectionsRef = useRef([]);

  // JS #1: rotating role text
  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(t);
  }, [roles.length]);

  // JS #2: smooth scroll + scroll progress + back-to-top visibility
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const p = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(p);
      setShowTop(scrollTop > 500);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // JS #3: active section highlight + reveal animations using IntersectionObserver
  useEffect(() => {
    const nodes = sectionsRef.current.filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.getAttribute("id");
            if (id) setActive(id);

            // reveal animation
            e.target.classList.add("reveal-in");
          }
        });
      },
      { root: null, threshold: 0.18 }
    );

    nodes.forEach((n) => io.observe(n));

    // also reveal cards
    const revealItems = document.querySelectorAll(".reveal");
    const io2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("reveal-item-in");
        });
      },
      { threshold: 0.15 }
    );
    revealItems.forEach((el) => io2.observe(el));

    return () => {
      io.disconnect();
      io2.disconnect();
    };
  }, []);

  // Helper: smooth scroll to section
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const setSectionRef = (el) => {
    if (!el) return;
    if (!sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  return (
    <>
      {/* JS progress bar */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      {/* NAV */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom nav-blur">
        <div className="container">
          <button
            className="navbar-brand fw-bold btn btn-link p-0 m-0 text-decoration-none"
            onClick={() => goTo("home")}
            type="button"
          >
            Joseph Sfeir
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              {[
                ["home", "Home"],
                ["about", "About"],
                ["projects", "Projects"],
                ["skills", "Skills"],
                ["contact", "Contact"],
              ].map(([id, label]) => (
                <li className="nav-item" key={id}>
                  <button
                    className={`nav-link btn btn-link ${
                      active === id ? "active-link" : ""
                    }`}
                    onClick={() => goTo(id)}
                    type="button"
                  >
                    {label}
                  </button>
                </li>
              ))}

              <li className="nav-item ms-lg-2">
                <a
                  className="btn btn-dark btn-sm"
                  href="/cv/Joseph-Sfeir-CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="home" ref={setSectionRef} className="hero-wrap section-root">
        <div className="container hero-content">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="hero-badge">Available for Internship • Lebanon</div>

              <h1 className="display-5 fw-bold mt-3 mb-2">
                Building real projects.
                <br />
                Learning by shipping.
              </h1>

              <div className="hero-rotator mt-2">
                <span className="dot" />
                <span className="rotating-text">{roles[roleIndex]}</span>
              </div>

              <p className="lead text-muted mt-3">
                CS student at <strong>NDU</strong>. Hands-on experience in full-stack
                development and problem solving. Currently developing{" "}
                <strong>AutoMatch</strong> as my senior project.
              </p>

              <div className="d-flex flex-wrap gap-2 mt-4">
                <button className="btn btn-dark" onClick={() => goTo("projects")}>
                  View Projects
                </button>
                <button className="btn btn-outline-dark" onClick={() => goTo("contact")}>
                  Contact Me
                </button>
                <a
                  className="btn btn-outline-secondary"
                  href="/cv/Joseph-Sfeir-CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View CV (PDF)
                </a>
              </div>

              <div className="hero-stats row g-3 mt-4">
                <div className="col-6 col-md-4 reveal">
                  <div className="stat-card">
                    <div className="stat-number">2022</div>
                    <div className="stat-label">Started CS @ NDU</div>
                  </div>
                </div>
                <div className="col-6 col-md-4 reveal">
                  <div className="stat-card">
                    <div className="stat-number">2025</div>
                    <div className="stat-label">Full-Stack Internship</div>
                  </div>
                </div>
                <div className="col-12 col-md-4 reveal">
                  <div className="stat-card">
                    <div className="stat-number">AutoMatch</div>
                    <div className="stat-label">Senior Project</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right card */}
            <div className="col-lg-5 reveal">
              <div className="glass-card">
                <h5 className="fw-bold mb-3">Quick Profile</h5>

                <div className="small text-muted">Location</div>
                <div className="mb-3">Sehaileh, Lebanon</div>

                <div className="small text-muted">Email</div>
                <div className="mb-3">
                  <a href="mailto:joesfeir2004@gmail.com">joesfeir2004@gmail.com</a>
                </div>

                <div className="small text-muted">Phone</div>
                <div className="mb-3">+961 71 589 505</div>

                <div className="small text-muted">Education</div>
                <div className="mb-3">
                  Bachelor of Computer Science — Notre Dame University (NDU)
                </div>

                <hr />

                <div className="d-flex flex-wrap gap-2">
                  {["JavaScript", "React", "SQL", "PHP", "Python", "C++", "C#"].map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" ref={setSectionRef} className="section-pad section-root">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7 reveal">
              <h2 className="fw-bold">About</h2>
              <p className="text-muted mt-3">
                I’m a Computer Science student who enjoys building full-stack web apps,
                fixing real bugs, and improving UX. I’m team-oriented, adaptable, and
                focused on delivering clean results.
              </p>
            </div>

            <div className="col-lg-5 reveal">
              <div className="soft-card">
                <h6 className="fw-bold mb-2">Experience</h6>
                <div className="timeline-item">
                  <div className="t-title">Full Stack Web Developer Intern</div>
                  <div className="t-sub text-muted">White Beard — 06/2025 to 07/2025</div>
                  <ul className="mt-2 mb-0">
                    <li>Built and maintained full-stack apps (HTML, CSS, JS, PHP, SQL).</li>
                    <li>Worked on responsive UI and performance improvements.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" ref={setSectionRef} className="section-pad bg-light section-root">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end flex-wrap gap-2">
            <div className="reveal">
              <h2 className="fw-bold mb-1">Projects</h2>
              <p className="text-muted mb-0">Real work — not just tutorials.</p>
            </div>

            <div className="reveal">
              <a
                className="btn btn-outline-dark btn-sm"
                href="/cv/Joseph-Sfeir-CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                CV PDF
              </a>
            </div>
          </div>

          <div className="row g-4 mt-3">
            <div className="col-lg-8 reveal">
              <div className="project-card shadow-sm hover-lift">
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                  <div>
                    <h4 className="fw-bold mb-1">AutoMatch</h4>
                    <span className="badge bg-warning text-dark">In Progress</span>
                  </div>

                  <div className="d-flex gap-2">
                    <button className="btn btn-dark btn-sm" disabled>
                      Live Demo (soon)
                    </button>
                    <button className="btn btn-outline-dark btn-sm" disabled>
                      GitHub (soon)
                    </button>
                  </div>
                </div>

                <p className="text-muted mt-3">
                  Car marketplace platform: browse listings, view details, favorite cars,
                  message sellers, and admin approval/moderation.
                </p>

                <div className="row g-3">
                  <div className="col-md-6 reveal">
                    <div className="mini-card">
                      <div className="fw-semibold mb-2">What’s done</div>
                      <ul className="mb-0">
                        <li>Auth (login/register)</li>
                        <li>Listings + details</li>
                        <li>Favorites</li>
                        <li>Conversations / messages</li>
                        <li>Admin approval tools</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6 reveal">
                    <div className="mini-card">
                      <div className="fw-semibold mb-2">Next</div>
                      <ul className="mb-0">
                        <li>Better UI + polish</li>
                        <li>Finalize image uploads</li>
                        <li>Deploy online</li>
                        <li>AI modules (finder + price prediction)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-3 d-flex flex-wrap gap-2">
                  {["React (Vite)", "Bootstrap", "Laravel API", "MySQL", "Sanctum"].map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4 reveal">
              <div className="project-card shadow-sm h-100 hover-lift">
                <h5 className="fw-bold">This Portfolio</h5>
                <p className="text-muted mt-2">
                  Bootstrap + custom CSS + JS interactions (scroll animations, progress, active nav).
                </p>

                <div className="mini-card mt-3">
                  <div className="fw-semibold mb-2">Goal</div>
                  <p className="mb-0 text-muted">
                    One clean link to share with recruiters: CV, skills, projects, contact.
                  </p>
                </div>

                <a
                  className="btn btn-dark w-100 mt-3"
                  href="/cv/Joseph-Sfeir-CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" ref={setSectionRef} className="section-pad section-root">
        <div className="container">
          <div className="reveal">
            <h2 className="fw-bold">Skills</h2>
            <p className="text-muted mt-2">Based on coursework + internship + projects.</p>
          </div>

          <div className="row g-3 mt-2">
            {[
              ["JavaScript", "Interactive front-end apps & university projects"],
              ["React", "SPA components, hooks, state management"],
              ["SQL", "Relational database design & management"],
              ["PHP", "Back-end development for dynamic websites"],
              ["Python", "Scripting, automation, data analysis basics"],
              ["C++", "Data structures, algorithms, system-level"],
              ["C#", "OOP projects (Windows Forms)"],
              ["HTML & CSS", "Responsive UI and layouts"],
            ].map(([name, desc]) => (
              <div className="col-md-6 col-lg-3 reveal" key={name}>
                <div className="skill-card hover-lift">
                  <div className="fw-semibold">{name}</div>
                  <div className="text-muted small mt-1">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={setSectionRef} className="section-pad bg-light section-root">
        <div className="container">
          <div className="reveal">
            <h2 className="fw-bold">Contact</h2>
          </div>

          <div className="row g-3 mt-2">
            <div className="col-md-6 reveal">
              <div className="soft-card">
                <div className="text-muted small">Email</div>
                <div className="fw-semibold">
                  <a href="mailto:joesfeir2004@gmail.com">joesfeir2004@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 reveal">
              <div className="soft-card">
                <div className="text-muted small">Phone</div>
                <div className="fw-semibold">+961 71 589 505</div>
              </div>
            </div>
          </div>

          <div className="text-muted small mt-3 reveal">
            Arabic: Native • English: Intermediate • French: Intermediate
          </div>
        </div>
      </section>

      <footer className="py-4 text-center bg-white border-top">
        © {new Date().getFullYear()} Joseph Sfeir
      </footer>

      {/* JS back-to-top */}
      <button
        className={`back-top ${showTop ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        type="button"
      >
        ↑
      </button>
    </>
  );
}
