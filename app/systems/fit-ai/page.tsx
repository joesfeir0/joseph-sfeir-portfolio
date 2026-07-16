import Image from "next/image";

import {
  ArchitectureFlow,
  CaseStudyHero,
  CaseStudyNavigation,
  CaseStudySection,
  NumberedList,
  StackList,
} from "@/components/case-study";
import { createProjectMetadata } from "@/lib/metadata";
import { projects } from "@/lib/site-data";

const project = projects.fitai;

const fitaiScreens = [
  {
    id: "workouts",
    src: "/images/fitai-workouts.jpg",
    alt: "FitAI workout library with three complete suggested programs and actions to start or view progress",
    label: "Plan",
    title: "Choose a workout structure",
    note: "Suggested programs turn a broad fitness goal into a session someone can actually start.",
  },
  {
    id: "calories",
    src: "/images/fitai-calories.jpg",
    alt: "FitAI daily calorie target, health profile estimates, and breakfast food log",
    label: "Track",
    title: "Log daily nutrition",
    note: "Profile-based estimates, food entries, calories, and macros live in one daily view.",
  },
  {
    id: "progress",
    src: "/images/fitai-progress.jpg",
    alt: "FitAI body progress view with weight, BMI, check-in action, and an honest early trend state",
    label: "Learn",
    title: "Turn check-ins into context",
    note: "The progress view is useful before a chart is impressive—it explains what the next check-in unlocks.",
  },
] as const;

export const metadata = createProjectMetadata(project);

export default function FitAIPage() {
  return (
    <main id="main-content" className="project-page project-page--fitai">
      <article className="case-shell">
        <CaseStudyHero project={project}>
          <div className="fitai-product-stage">
            <p>Current Flutter build</p>
            <div className="fitai-product-stage__screens">
              {fitaiScreens.map((screen) => (
                <figure
                  className={`fitai-product-stage__screen fitai-product-stage__screen--${screen.id}`}
                  key={screen.id}
                >
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    priority={screen.id === "calories"}
                    unoptimized
                    sizes="(max-width: 720px) 68vw, 24vw"
                  />
                </figure>
              ))}
            </div>
          </div>
        </CaseStudyHero>

        <aside className="project-disclosure">
          <span>Current status</span>
          <p>
            These screens come from the current Flutter build. Workout planning,
            calorie and food logging, profile-based estimates, and body check-ins
            are visible product surfaces. The AI Coach remains a planned milestone.
          </p>
        </aside>

        <CaseStudySection
          number="01"
          eyebrow="Product idea"
          title="Useful guidance starts with connected context."
          intro={project.summary}
        >
          <div className="two-column-story">
            <div>
              <h3>The problem</h3>
              <p>{project.problem}</p>
            </div>
            <div>
              <h3>The direction</h3>
              <p>{project.response}</p>
            </div>
          </div>
          <aside className="fitai-current-state">
            <span>Working build</span>
            <p>
              The current loop is plan → track → review. BMI, BMR, and calorie
              targets are profile-based product estimates, not medical advice.
            </p>
          </aside>
        </CaseStudySection>

        <CaseStudySection
          number="02"
          eyebrow="Product surface"
          title="Three screens, one continuous fitness loop."
          intro={project.contribution}
        >
          <div className="fitai-surface-grid">
            {fitaiScreens.map((screen, index) => (
              <figure className={`fitai-surface fitai-surface--${screen.id}`} key={screen.id}>
                <div>
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 720px) 86vw, 23vw"
                  />
                </div>
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")} / {screen.label}</span>
                  <strong>{screen.title}</strong>
                  <p>{screen.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <NumberedList items={project.features} label="FitAI product areas" />
        </CaseStudySection>

        <CaseStudySection
          number="03"
          eyebrow="Architecture"
          title="User-owned data with a deliberate future AI boundary."
          intro="Authentication and row-level policies are designed to keep records scoped to their owner. The planned coach boundary assembles only relevant context server-side and remains advisory."
        >
          <ArchitectureFlow steps={project.architecture} caption="FitAI context path" />
          <StackList items={project.stack} />
        </CaseStudySection>

        <CaseStudySection
          number="04"
          eyebrow="Product decisions"
          title="Coherence matters more than feature count."
        >
          <div className="split-lists">
            <div>
              <h3>Challenges</h3>
              <NumberedList items={project.challenges} label="FitAI challenges" />
            </div>
            <div>
              <h3>What I’m learning</h3>
              <NumberedList items={project.learnings} label="FitAI learnings" />
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection
          number="05"
          eyebrow="In progress"
          title="The next useful milestones."
        >
          <NumberedList items={project.nextSteps} label="FitAI next steps" />
        </CaseStudySection>

        <CaseStudyNavigation previous={projects.automatch} />
      </article>
    </main>
  );
}
