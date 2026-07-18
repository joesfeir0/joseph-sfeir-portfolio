export const siteLinks = {
  email: "mailto:joesfeir2004@gmail.com",
  phone: "tel:+96171589505",
  github: "https://github.com/joesfeir0",
  linkedin: "https://www.linkedin.com/in/joseph-sfeir-18b542322",
  resume: "/resume/Joseph-Sfeir_CV.pdf",
} as const;

export const siteIdentity = {
  name: "Joseph Sfeir",
  role: "Software engineer",
  location: "Sehaile, Lebanon",
  headline: "I follow ideas all the way through.",
  introduction:
    "I’m a recent Computer Science graduate building thoughtful products across web, mobile, AI, and the systems underneath.",
  availability: "Open to junior and entry-level opportunities",
} as const;

export const primaryNavigation = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Journey", href: "/#journey" },
] as const;

export const contactLinks = [
  {
    label: "Email",
    value: "joesfeir2004@gmail.com",
    href: siteLinks.email,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/joseph-sfeir-18b542322",
    href: siteLinks.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/joesfeir0",
    href: siteLinks.github,
    external: true,
  },
  {
    label: "Phone",
    value: "+961 71 589 505",
    href: siteLinks.phone,
    external: false,
  },
] as const;

export type ProjectId = "automatch" | "fitai";

export type ArchitectureStep = {
  label: string;
  detail: string;
};

export type ProjectRecord = {
  id: ProjectId;
  index: string;
  title: string;
  eyebrow: string;
  statement: string;
  summary: string;
  path: string;
  status: string;
  year: string;
  projectType: string;
  role: string;
  teamNote?: string;
  contribution: string;
  problem: string;
  response: string;
  stack: readonly string[];
  features: readonly string[];
  architecture: readonly ArchitectureStep[];
  challenges: readonly string[];
  learnings: readonly string[];
  nextSteps: readonly string[];
};

export const projects: Record<ProjectId, ProjectRecord> = {
  automatch: {
    id: "automatch",
    index: "01",
    title: "AutoMatch",
    eyebrow: "Flagship case study",
    statement: "A car marketplace where recommendations end in real inventory.",
    summary:
      "A team-built final-year project connecting vehicle discovery, messaging, appointments, administration, AI-assisted matching, and price prediction in one marketplace.",
    path: "/systems/automatch",
    status: "Completed · Team senior project",
    year: "2026",
    projectType: "Web platform + machine learning",
    role: "Full-stack contributor",
    teamNote:
      "AutoMatch was built as a collaborative final-year project. The work shown here describes the shared product and the areas I directly contributed to.",
    contribution:
      "I contributed across the marketplace and admin flows, the inventory-grounded chatbot, and the vehicle price-prediction integration.",
    problem:
      "Used-car discovery is fragmented. Browsing, valuation, seller communication, appointments, and the operational work behind a marketplace often live in separate tools.",
    response:
      "We treated those steps as one connected product. A buyer can move from a need to an available vehicle, then continue into the conversations and appointments required to act on that decision.",
    stack: [
      "Laravel 12",
      "React 19",
      "MySQL",
      "Python",
      "FastAPI",
      "XGBoost",
      "Laravel Sanctum",
      "Ollama",
      "Gemini",
    ],
    features: [
      "Vehicle listings, favorites, buyer-seller messaging, reports, and appointment booking",
      "A chatbot that interprets buyer needs and recommends vehicles from active inventory",
      "Current-price estimates and five-year value forecasts based on vehicle data",
      "Listing approval, inventory management, sales tracking, and profit reporting",
      "Branch and staff appointment administration",
    ],
    architecture: [
      { label: "React", detail: "Marketplace and administration interfaces" },
      {
        label: "Laravel",
        detail: "Domain logic, authentication, messaging, and appointments",
      },
      {
        label: "MySQL",
        detail: "Users, vehicles, listings, and operational records",
      },
      { label: "FastAPI", detail: "HTTP boundary for valuation requests" },
      {
        label: "XGBoost",
        detail: "Vehicle price estimation and forecast flow",
      },
    ],
    challenges: [
      "Keeping conversational recommendations grounded in vehicles that actually exist in the marketplace",
      "Coordinating marketplace workflows with a separate Python machine-learning service",
      "Designing the operational tools behind the storefront, not only the buyer-facing interface",
    ],
    learnings: [
      "An AI feature is only useful when its output connects cleanly to the rest of the product.",
      "The admin experience, data model, and service boundaries shape the customer experience just as much as the visible interface.",
    ],
    nextSteps: [
      "Broaden model evaluation across more varied vehicle data",
      "Strengthen recommendation testing and ranking quality",
      "Polish the buyer, seller, and appointment flows with more user feedback",
    ],
  },
  fitai: {
    id: "fitai",
    index: "02",
    title: "FitAI",
    eyebrow: "Evolving mobile product",
    statement:
      "One place for training, nutrition, progress, and useful context.",
    summary:
      "A Flutter fitness product in progress, designed to connect workout planning, food tracking, and body progress, with a planned advisory AI coach.",
    path: "/systems/fit-ai",
    status: "In progress · Independent project",
    year: "2026",
    projectType: "Flutter mobile product",
    role: "Product design + mobile engineering",
    contribution:
      "I’m designing and building the product end to end, from the Flutter interface and workout flows to user-owned data and the planned server-side AI boundary.",
    problem:
      "Workout history, food entries, body measurements, and progress views are often spread across unrelated tools, leaving each one without the context of the others.",
    response:
      "FitAI brings those signals into one user-owned system. The goal is not to automate every decision, but to make progress easier to understand and guidance more relevant.",
    stack: [
      "Flutter",
      "Dart",
      "Material 3",
      "Supabase Auth",
      "PostgreSQL",
      "Row Level Security",
      "Edge Functions (planned)",
      "OpenAI Responses API (planned)",
      "fl_chart",
    ],
    features: [
      "Suggested workout programs with clear start and progress actions",
      "Daily calorie targets, food entries, macros, and profile-based estimates",
      "Body check-ins and progress views across body, gym, and calories",
      "A planned advisory coach grounded in relevant user-owned context",
    ],
    architecture: [
      {
        label: "Flutter",
        detail: "Workout, nutrition, and progress experiences",
      },
      { label: "Supabase Auth", detail: "Identity and session management" },
      { label: "PostgreSQL + RLS", detail: "User-owned fitness records" },
      {
        label: "Edge Function",
        detail: "Planned server-side assembly of coach context",
      },
      { label: "OpenAI", detail: "Planned advisory response generation" },
    ],
    challenges: [
      "Keeping a multi-area product coherent instead of building four unrelated trackers",
      "Protecting user-owned records while still assembling relevant coach context",
      "Drawing a clear boundary between useful advice and silent automation",
    ],
    learnings: [
      "Context is a product decision before it is an AI capability.",
      "A mobile data model has to support today’s simple action and tomorrow’s progress view at the same time.",
    ],
    nextSteps: [
      "Continue refining the active-workout and food-entry flows",
      "Test progress views with realistic long-term data",
      "Build and test the advisory coach boundary with transparent context",
    ],
  },
};

export const projectList = [projects.automatch, projects.fitai];

export const capabilities = [
  {
    area: "Frontend / Product UI",
    tools: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Responsive UI"],
    note: "Interfaces with clear hierarchy, useful states, and careful responsive behavior.",
  },
  {
    area: "Backend / Systems",
    tools: [
      "PHP",
      "Laravel",
      "REST APIs",
      "Authentication",
      "Validation",
      "Python APIs",
    ],
    note: "Application logic, service boundaries, secure flows, and the work behind the interface.",
  },
  {
    area: "Data",
    tools: ["SQL", "MySQL", "PostgreSQL", "Supabase", "Database design"],
    note: "Data models that support the product rather than simply store its output.",
  },
  {
    area: "Mobile",
    tools: ["Flutter", "Dart", "Material 3"],
    note: "Connected mobile experiences across interaction, local state, and hosted data.",
  },
  {
    area: "AI / Experimentation",
    tools: [
      "Python",
      "ML integration",
      "XGBoost",
      "FastAPI",
      "AI-assisted flows",
    ],
    note: "Practical AI features connected to real product data and clear user actions.",
  },
] as const;

export const experience = [
  {
    role: "Full Stack Web Developer Intern",
    organization: "White Beard Lebanon",
    period: "Jun — Jul 2025",
    summary:
      "Developed and maintained responsive web applications across HTML, CSS, JavaScript, PHP, and SQL, while collaborating through development and testing.",
    primary: true,
  },
  {
    role: "Junior Accountant",
    organization: "Cheese on Top",
    period: "Jun 2023 — Sep 2024",
    summary:
      "Managed financial records, transactions, and reporting—a practical lesson in accuracy, responsibility, and organized data.",
    primary: false,
  },
] as const;

export const education = {
  institution: "Notre Dame University (NDU)",
  credential: "Bachelor of Computer Science",
  period: "2022 — 2026",
  location: "Zouk Mosbeh, Lebanon",
} as const;
