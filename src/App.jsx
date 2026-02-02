import { useEffect, useMemo, useState } from "react";

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

  // Simple “typing-like” rotation (JS effect)
  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(t);
  }, [roles.length]);

  return (
    <>
      {/* NAV */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Joseph Sfeir
          </a>

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
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

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
      <header className="hero-wrap">
        <div className="container hero-content">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="hero-badge">
                Available for Internship • Lebanon
              </div>

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
                <a className="btn btn-dark" href="#projects">
                  View Projects
                </a>
                <a className="btn btn-outline-dark" href="#contact">
                  Contact Me
                </a>
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
                <div className="col-6 col-md-4">
                  <div className="stat-card">
                    <div className="stat-number">2022</div>
                    <div className="stat-label">Started CS @ NDU</div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="stat-card">
                    <div className="stat-number">2025</div>
                    <div className="stat-label">Full-Stack Internship</div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="stat-card">
                    <div className="stat-number">AutoMatch</div>
                    <div className="stat-label">Senior Project</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right card */}
            <div className="col-lg-5">
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
                  <span className="tag">JavaScript</span>
                  <span className="tag">React</span>
                  <span className="tag">SQL</span>
                  <span className="tag">PHP</span>
                  <span className="tag">Python</span>
                  <span className="tag">C++</span>
                  <span className="tag">C#</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="section-pad" data-reveal>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <h2 className="fw-bold">About</h2>
              <p className="text-muted mt-3">
                I’m a Computer Science student currently working on my final year project.
                I enjoy building full-stack web apps, fixing real bugs, and improving UX.
                I’m team-oriented, adaptable, and focused on delivering clean results.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="soft-card">
                <h6 className="fw-bold mb-2">Experience</h6>
                <div className="timeline-item">
                  <div className="t-title">Full Stack Web Developer Intern</div>
                  <div className="t-sub text-muted">White Beard — 06/2025 to 07/2025</div>
                  <ul className="mt-2 mb-0">
                    <li>Built and maintained full-stack apps (HTML, CSS, JS, PHP, SQL).</li>
                    <li>Worked on responsive UI and back-end performance improvements.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-pad bg-light" data-reveal>
        <div className="container">
          <div className="d-flex justify-content-between align-items-end flex-wrap gap-2">
            <div>
              <h2 className="fw-bold mb-1">Projects</h2>
              <p className="text-muted mb-0">Real work — not just tutorials.</p>
            </div>
            <a
              className="btn btn-outline-dark btn-sm"
              href="/cv/Joseph-Sfeir-CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CV PDF
            </a>
          </div>

          <div className="row g-4 mt-3">
            <div className="col-lg-8">
              <div className="project-card shadow-sm">
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
                  <div className="col-md-6">
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

                  <div className="col-md-6">
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
                  <span className="tag">React (Vite)</span>
                  <span className="tag">Bootstrap</span>
                  <span className="tag">Laravel API</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">Sanctum</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="project-card shadow-sm h-100">
                <h5 className="fw-bold">This Portfolio</h5>
                <p className="text-muted mt-2">
                  Built with Bootstrap + custom CSS. Includes CV + projects. Deployed online soon.
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
      <section id="skills" className="section-pad" data-reveal>
        <div className="container">
          <h2 className="fw-bold">Skills</h2>
          <p className="text-muted mt-2">
            Based on coursework + internship + projects.
          </p>

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
              <div className="col-md-6 col-lg-3" key={name}>
                <div className="skill-card">
                  <div className="fw-semibold">{name}</div>
                  <div className="text-muted small mt-1">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-pad bg-light" data-reveal>
        <div className="container">
          <h2 className="fw-bold">Contact</h2>
          <div className="row g-3 mt-2">
            <div className="col-md-6">
              <div className="soft-card">
                <div className="text-muted small">Email</div>
                <div className="fw-semibold">
                  <a href="mailto:joesfeir2004@gmail.com">joesfeir2004@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="soft-card">
                <div className="text-muted small">Phone</div>
                <div className="fw-semibold">+961 71 589 505</div>
              </div>
            </div>
          </div>

          <div className="text-muted small mt-3">
            Arabic: Native • English: Intermediate • French: Intermediate
          </div>
        </div>
      </section>

      <footer className="py-4 text-center bg-white border-top">
        <button class="backtop" data-backtop type="button">↑</button>

        <button type="button" data-copy-email="joesfeir2004@gmail.com">
          Copy Email
        </button>

        <button type="button" data-theme-toggle>
        Toggle Theme
        </button>

                © {new Date().getFullYear()} Joseph Sfeir
      </footer>
    </>
  );
}
