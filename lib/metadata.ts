import type { Metadata } from "next";

import type { ProjectRecord } from "@/lib/site-data";

export function createProjectMetadata(project: ProjectRecord): Metadata {
  const canonical = `https://josephsfeir.dev${project.path}`;
  const description = `${project.statement} ${project.summary}`;

  return {
    title: project.title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: `${project.title} — Joseph Sfeir`,
      description,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Joseph Sfeir — Software Engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Joseph Sfeir`,
      description,
      images: ["/og.png"],
    },
  };
}
