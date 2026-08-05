#!/usr/bin/env node
/** Regenerates root sitemap.xml from blog data + static routes. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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

const staticUrls = [
  { loc: "https://www.agrmultimedia.eu/", priority: "1.0", changefreq: "weekly" },
  { loc: "https://www.agrmultimedia.eu/webdesign-geislingen-an-der-steige", priority: "0.95", changefreq: "monthly" },
  { loc: "https://www.agrmultimedia.eu/webdesign-seo", priority: "0.95", changefreq: "weekly" },
  { loc: "https://www.agrmultimedia.eu/videoproduktion", priority: "0.95", changefreq: "weekly" },
  { loc: "https://www.agrmultimedia.eu/portfolio", priority: "0.9", changefreq: "weekly" },
  { loc: "https://www.agrmultimedia.eu/portfolio/tonis-autopflege", priority: "0.85", changefreq: "monthly" },
  { loc: "https://www.agrmultimedia.eu/portfolio/tairovic-gebaeudeservice", priority: "0.85", changefreq: "monthly" },
  { loc: "https://www.agrmultimedia.eu/portfolio/fixbike", priority: "0.85", changefreq: "monthly" },
  { loc: "https://www.agrmultimedia.eu/portfolio/ilmbuds", priority: "0.85", changefreq: "monthly" },
  { loc: "https://www.agrmultimedia.eu/bewertungen", priority: "0.9", changefreq: "weekly" },
  { loc: "https://www.agrmultimedia.eu/kontakt", priority: "0.9", changefreq: "monthly" },
  { loc: "https://www.agrmultimedia.eu/services", priority: "0.8", changefreq: "weekly" },
  { loc: "https://www.agrmultimedia.eu/graphic-design", priority: "0.85", changefreq: "weekly" },
  { loc: "https://www.agrmultimedia.eu/ai-content-creation", priority: "0.85", changefreq: "weekly" },
  { loc: "https://www.agrmultimedia.eu/digital-marketing", priority: "0.85", changefreq: "weekly" },
  { loc: "https://www.agrmultimedia.eu/about", priority: "0.8", changefreq: "monthly" },
  { loc: "https://www.agrmultimedia.eu/blog", priority: "0.75", changefreq: "weekly" },
  { loc: "https://www.agrmultimedia.eu/impresum", priority: "0.3", changefreq: "yearly" },
  { loc: "https://www.agrmultimedia.eu/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { loc: "https://www.agrmultimedia.eu/terms", priority: "0.3", changefreq: "yearly" },
  { loc: "https://www.agrmultimedia.eu/cookies", priority: "0.3", changefreq: "yearly" },
];

const lastmod = "2026-06-09";

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const u of staticUrls) {
  xml += `  <url><loc>${u.loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>\n`;
}

for (const slug of uniqueBlog) {
  xml += `  <url><loc>https://www.agrmultimedia.eu/blog/${slug}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.65</priority></url>\n`;
}

xml += `</urlset>\n`;
fs.writeFileSync(out, xml, "utf8");
console.log(`OK: sitemap.xml — ${staticUrls.length} static + ${uniqueBlog.length} blog URLs`);
