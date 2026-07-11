const projects = [
  {
    id: "automatch",
    title: "AutoMatch",
    category: "Senior Project · Full-Stack Web Application",
    description:
      "A full-stack used-car marketplace that connects buyers and sellers while providing intelligent vehicle search, price estimation, appointment booking, messaging, and administrative tools.",
    highlights: [
      "Complete marketplace workflow for listings, favorites, buyer–seller messaging, reports, and appointments",
      "Inventory-grounded AI chatbot that recommends only real cars available in the platform",
      "Machine-learning vehicle valuation with current-price estimates and five-year value forecasts",
    ],
    primaryTech: ["Laravel 12", "React 19", "MySQL", "Python", "FastAPI", "XGBoost"],
    secondaryTech: ["Vite", "Laravel Sanctum", "Ollama", "Gemini"],
    details: [
      "Admin analytics, listing approval, and profit and brand-performance reporting",
      "Stock-diversification analysis plus branch and staff appointment management",
      "Laravel communicates with the Python ML service through an HTTP API",
      "Expert valuation rules can identify vehicles that may hold or appreciate in value",
    ],
    accent: "automatch",
    featured: true,
  },
  {
    id: "fit-ai",
    title: "Fit AI",
    category: "Independent Project · Flutter Mobile Application",
    description:
      "A personal fitness application for creating workout programs, logging gym sessions, tracking calories and body progress, and receiving context-aware AI fitness guidance.",
    highlights: [
      "Custom workout programs with exercise, set, repetition, and weight logging",
      "Calorie, BMI, health-profile, body-progress, and gym-performance tracking",
      "Personalized AI Coach that uses the user’s recent fitness data to provide relevant guidance",
    ],
    primaryTech: [
      "Flutter",
      "Dart",
      "Supabase",
      "PostgreSQL",
      "OpenAI Responses API",
      "Material 3",
    ],
    secondaryTech: [
      "Row Level Security",
      "Supabase Edge Functions",
      "TypeScript",
      "fl_chart",
    ],
    details: [
      "Supabase authentication with user-owned data protected by Row Level Security",
      "Progress charts for body measurements, calories, and gym performance",
      "Food database with calories and macronutrients plus saved AI conversation history",
      "Server-side AI requests run through an Edge Function; the coach is advisory and does not modify user data",
    ],
    accent: "fitai",
  },
];

const skills = [
  ["Front end", "React, JavaScript, HTML, CSS, Flutter, Dart"],
  ["Back end", "Laravel, PHP, FastAPI, MySQL, PostgreSQL, Supabase"],
  ["AI & ML", "Python, XGBoost, Ollama, Gemini, OpenAI API"],
];

function ProjectCard({ project }) {
  const cardClasses = [
    "project-card",
    `project-card--${project.accent}`,
    project.featured ? "project-card--featured" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClasses}>
      <header className="project-card__header">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </header>

      <ol className="project-highlights" aria-label={`${project.title} highlights`}>
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ol>

      <div className="project-stack">
        <p className="project-stack__label">Core stack</p>
        <ul className="project-tech" aria-label={`${project.title} core technologies`}>
          {project.primaryTech.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>

      <details className="project-more">
        <summary>More tools & implementation details</summary>
        <div className="project-more__content">
          <p className="secondary-tools">
            <strong>More tools:</strong> {project.secondaryTech.join(" · ")}
          </p>
          <ul className="project-notes">
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </details>
    </article>
  );
}

export default function App() {
  const cvPath = `${import.meta.env.BASE_URL}cv/Joseph-Sfeir_CV.pdf`;

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="container nav" aria-label="Primary navigation">
          <a className="brand" href="#home">
            Joseph Sfeir
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a className="nav-cv" href={cvPath} target="_blank" rel="noreferrer">
              View CV
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="home">
          <div className="container hero-content">
            <p className="availability">
              <span aria-hidden="true" /> Open to software opportunities in Lebanon
            </p>
            <h1>
              Hi, I’m Joseph.
              <span>I build practical web and mobile products.</span>
            </h1>
            <p className="hero-text">
              I’m a computer science student at NDU and a full-stack developer. I work across user
              interfaces, backend systems, data, and machine learning to turn useful ideas into
              working applications.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                See my work
              </a>
              <a className="button button-secondary" href="mailto:joesfeir2004@gmail.com">
                Email me
              </a>
            </div>
            <div className="quick-info" aria-label="Quick information">
              <span>Sehaileh, Lebanon</span>
              <span>Web · Mobile · Backend · Machine learning</span>
              <span>Full-stack internship at White Beard</span>
            </div>
          </div>
        </section>

        <section className="section work" id="work" aria-labelledby="work-title">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="kicker">Projects</p>
                <h2 id="work-title">Selected Work</h2>
              </div>
              <p>
                A selection of applications I designed and developed across web, mobile, backend,
                and machine learning.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div>
              <p className="kicker">About me</p>
              <h2 id="about-title">I like solving the whole problem.</h2>
              <p className="about-text">
                I enjoy moving between interface details, backend logic, data design, and the tools
                that connect them. In June and July 2025, I interned at White Beard, where I worked
                on full-stack web applications, improved responsive interfaces, and fixed real
                software issues.
              </p>
            </div>

            <div className="skills" aria-label="Technical skills">
              {skills.map(([title, list]) => (
                <div className="skill-row" key={title}>
                  <strong>{title}</strong>
                  <span>{list}</span>
                </div>
              ))}
              <div className="skill-row">
                <strong>Education</strong>
                <span>Bachelor of Computer Science · NDU</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div className="container contact-card">
            <div>
              <p className="kicker">Contact</p>
              <h2 id="contact-title">Let’s build something useful.</h2>
              <p>
                I’m interested in internships, software roles, and projects where I can contribute
                across the stack and keep learning.
              </p>
            </div>
            <div className="contact-actions">
              <a className="contact-email" href="mailto:joesfeir2004@gmail.com">
                joesfeir2004@gmail.com
              </a>
              <div>
                <a href="tel:+96171589505">+961 71 589 505</a>
                <a href="https://github.com/joesfeir0" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={cvPath} target="_blank" rel="noreferrer">
                  View CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <span>© {new Date().getFullYear()} Joseph Sfeir</span>
          <span>Built with React</span>
        </div>
      </footer>
    </>
  );
}
