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

const project = projects.automatch;

export const metadata = createProjectMetadata(project);

export default function AutoMatchPage() {
  return (
    <main id="main-content" className="project-page project-page--automatch">
      <article className="case-shell">
        <CaseStudyHero project={project}>
          <div className="case-product-stage case-product-stage--automatch">
            <p>One connected buying journey</p>
            <figure className="case-product-stage__main">
              <Image
                src="/images/automatch-detail-prediction.png"
                alt="AutoMatch vehicle page with a five-year price prediction, seller chat, and appointment booking"
                fill
                priority
                unoptimized
                sizes="(max-width: 800px) 92vw, 78vw"
              />
            </figure>
            <figure className="case-product-stage__inset">
              <Image
                src="/images/automatch-ai-assistant.png"
                alt="AutoMatch AI assistant returning matching Mercedes inventory"
                fill
                unoptimized
                sizes="(max-width: 800px) 40vw, 20vw"
              />
            </figure>
          </div>
        </CaseStudyHero>

        <aside className="project-disclosure">
          <span>Team context</span>
          <p>{project.teamNote}</p>
        </aside>

        <CaseStudySection
          number="01"
          eyebrow="Overview"
          title="A marketplace designed around the decision, not only the listing."
          intro={project.summary}
        >
          <div className="two-column-story">
            <div>
              <h3>The problem</h3>
              <p>{project.problem}</p>
            </div>
            <div>
              <h3>Our response</h3>
              <p>{project.response}</p>
            </div>
          </div>
          <figure className="case-wide-media">
            <Image
              src="/images/automatch-inventory.png"
              alt="AutoMatch inventory page showing a structured grid of available vehicles"
              fill
              unoptimized
              sizes="(max-width: 800px) 92vw, 74vw"
            />
            <figcaption>Inventory browsing with real listing data and clear comparison points.</figcaption>
          </figure>
        </CaseStudySection>

        <CaseStudySection
          number="02"
          eyebrow="Contribution"
          title="Following the buyer’s next question through the system."
          intro={project.contribution}
        >
          <NumberedList items={project.features} label="AutoMatch product capabilities" />
          <div className="case-feature-proof">
            <figure>
              <Image
                src="/images/automatch-ai-assistant.png"
                alt="AutoMatch assistant applying a Mercedes filter and returning inventory-backed suggestions"
                fill
                unoptimized
                sizes="(max-width: 800px) 80vw, 28vw"
              />
            </figure>
            <div>
              <p className="kicker">Inventory-grounded assistance</p>
              <h3>The conversation ends in cars a buyer can actually open.</h3>
              <p>
                The assistant interprets a natural-language request, applies a
                useful filter, and returns matching vehicles with prices and
                listing context instead of inventing a generic answer.
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection
          number="03"
          eyebrow="Architecture"
          title="A marketplace core with a focused machine-learning boundary."
          intro="The web product owns users, inventory, communication, and operations. The Python service stays focused on valuation requests."
        >
          <ArchitectureFlow steps={project.architecture} caption="AutoMatch request path" />
          <StackList items={project.stack} />
          <figure className="case-presentation-media">
            <Image
              src="/images/automatch-presentation.jpg"
              alt="Joseph presenting the end-to-end AutoMatch system architecture"
              fill
              unoptimized
              sizes="(max-width: 800px) 92vw, 54vw"
            />
            <figcaption>Presenting the request flow behind the finished senior project.</figcaption>
          </figure>
        </CaseStudySection>

        <CaseStudySection
          number="04"
          eyebrow="Operations"
          title="The storefront had an operational backbone."
          intro="Inventory, sales, appointments, audit trails, and reporting were treated as part of the product—not as an afterthought behind the demo."
        >
          <figure className="case-wide-media case-wide-media--analytics">
            <Image
              src="/images/automatch-analytics.png"
              alt="AutoMatch admin analytics with monthly sales, expenses, profit metrics, and a profitability chart"
              fill
              unoptimized
              sizes="(max-width: 800px) 92vw, 74vw"
            />
            <figcaption>Admin analytics shown with seeded demonstration data, not live business results.</figcaption>
          </figure>
        </CaseStudySection>

        <CaseStudySection
          number="05"
          eyebrow="Reflection"
          title="The hard part was keeping every layer connected."
          intro="There are no invented launch metrics here. The useful proof is the breadth of the working system, the decisions behind it, and what I would test next."
        >
          <div className="split-lists">
            <div>
              <h3>Challenges</h3>
              <NumberedList items={project.challenges} label="AutoMatch challenges" />
            </div>
            <div>
              <h3>What I learned</h3>
              <NumberedList items={project.learnings} label="AutoMatch learnings" />
            </div>
          </div>
          <div className="case-next-steps">
            <h3>Another release would focus on</h3>
            <NumberedList items={project.nextSteps} label="Potential AutoMatch next steps" />
          </div>
        </CaseStudySection>

        <CaseStudyNavigation next={projects.fitai} />
      </article>
    </main>
  );
}
