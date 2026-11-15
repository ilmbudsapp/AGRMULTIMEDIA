import type { MetadataRoute } from "next";
import { nav, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-16");
  const pages = nav.map((item) => ({
    url: item.href === "/" ? site.url : `${site.url}${item.href}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));
  return [
    ...pages,
    { url: `${site.url}/impressum`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/datenschutz`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
