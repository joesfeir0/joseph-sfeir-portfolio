import type { MetadataRoute } from "next";

const baseUrl = "https://josephsfeir.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/systems/automatch",
    "/systems/fit-ai",
    "/background",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route.startsWith("/systems/") ? 0.8 : 0.7,
  }));
}
