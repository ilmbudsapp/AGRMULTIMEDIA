#!/usr/bin/env node
/** Regenerates root sitemap.xml from blog data + static routes. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_ORIGIN } from "./site-origin.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dataDir = path.join(root, "client", "src", "data");
const out = path.join(root, "sitemap.xml");

function parseSlugs(file) {
  if (!fs.existsSync(file)) return [];
  const src = fs.readFileSync(file, "utf8");
  return [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
}

const blogSlugs = [
  ...parseSlugs(path.join(dataDir, "blogPostsDe.ts")),
  ...parseSlugs(path.join(dataDir, "blogPostsDeExtended.ts")),
  "digital-marketing-trends-2024",
  "website-conversion-optimization",
  "video-marketing-power",
  "food-truck-web-500",
];
const uniqueBlog = [...new Set(blogSlugs)];

const staticPaths = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/webdesign-geislingen-an-der-steige", priority: "0.95", changefreq: "monthly" },
  { path: "/webdesign-seo", priority: "0.95", changefreq: "weekly" },
  { path: "/videoproduktion", priority: "0.95", changefreq: "weekly" },
  { path: "/portfolio", priority: "0.9", changefreq: "weekly" },
  { path: "/portfolio/tonis-autopflege", priority: "0.85", changefreq: "monthly" },
  { path: "/portfolio/tairovic-gebaeudeservice", priority: "0.85", changefreq: "monthly" },
  { path: "/portfolio/fixbike", priority: "0.85", changefreq: "monthly" },
  { path: "/portfolio/ilmbuds", priority: "0.85", changefreq: "monthly" },
  { path: "/bewertungen", priority: "0.9", changefreq: "weekly" },
  { path: "/kontakt", priority: "0.9", changefreq: "monthly" },
  { path: "/services", priority: "0.8", changefreq: "weekly" },
  { path: "/graphic-design", priority: "0.85", changefreq: "weekly" },
  { path: "/ai-content-creation", priority: "0.85", changefreq: "weekly" },
  { path: "/digital-marketing", priority: "0.85", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.75", changefreq: "weekly" },
  { path: "/impresum", priority: "0.3", changefreq: "yearly" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
  { path: "/cookies", priority: "0.3", changefreq: "yearly" },
];

const lastmod = new Date().toISOString().slice(0, 10);

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const u of staticPaths) {
  const loc = u.path === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${u.path}`;
  xml += `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>\n`;
}

for (const slug of uniqueBlog) {
  xml += `  <url><loc>${SITE_ORIGIN}/blog/${slug}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.65</priority></url>\n`;
}

xml += `</urlset>\n`;
fs.writeFileSync(out, xml, "utf8");
console.log(`OK: sitemap.xml — ${staticPaths.length} static + ${uniqueBlog.length} blog URLs (${SITE_ORIGIN})`);
