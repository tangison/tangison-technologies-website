import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.siteUrl;

  const routes = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/technology", changeFrequency: "monthly", priority: 0.9 },
    { path: "/company", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/careers", changeFrequency: "monthly", priority: 0.7 },
    { path: "/brand", changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/sitemap", changeFrequency: "monthly", priority: 0.4 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: route.priority,
  }));
}
