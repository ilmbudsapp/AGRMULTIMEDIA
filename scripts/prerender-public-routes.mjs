#!/usr/bin/env node
/**
 * Writes HTML shells for key public routes (Vercel serves these before SPA fallback).
 * Crawlers see route-specific content in #static-route-prerender.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "dist", "public");
const dataDir = path.join(root, "client", "src", "data");

if (!fs.existsSync(outDir)) {
  console.error("FAIL: dist/public missing — run vite build first");
  process.exit(1);
}

const indexHtml = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
const headMatch = indexHtml.match(/<head>[\s\S]*?<\/head>/i);
const head = headMatch ? headMatch[0] : '<head><meta charset="UTF-8" /></head>';

/** Parse slug + title from blogPostsDe*.ts */
function parseBlogPosts(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const src = fs.readFileSync(filePath, "utf8");
  const posts = [];
  const re = /slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?description:\s*\n?\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(src))) {
    posts.push({ slug: m[1], title: m[2], description: m[3] });
  }
  return posts;
}

const blogPosts = [
  ...parseBlogPosts(path.join(dataDir, "blogPostsDe.ts")),
  ...parseBlogPosts(path.join(dataDir, "blogPostsDeExtended.ts")),
];
// dedupe by slug
const seen = new Set();
const uniqueBlog = blogPosts.filter((p) => {
  if (seen.has(p.slug)) return false;
  seen.add(p.slug);
  return true;
});

const staticRoutes = [
  {
    dir: "about",
    title: "Über AGR Multimedia — Webdesign & SEO in Geislingen",
    description:
      "Agron Osmani — Gründer von AGR Multimedia. Webdesign, SEO und Multimedia für KMU in Geislingen, Göppingen und Region.",
    h1: "Über AGR Multimedia — Webdesign, KI-Multimedia & Marketing in Geislingen",
    lead: "Agron Osmani entwickelt Websites, SEO und Multimedia für Handwerk, Dienstleister und kleine Unternehmen in Geislingen an der Steige.",
    canonical: "https://www.agrmultimedia.eu/about",
    bodyHtml: `<section><h2>Warum AGR Multimedia?</h2><ul><li>Persönliche Betreuung in Geislingen</li><li>Lokales Webdesign + SEO für KMU</li><li>Referenzen: Toni's Autopflege, Tairovic, FixBike, IlmBuds</li></ul></section><p><a href="/kontakt">Kontakt</a> · <a href="/webdesign-geislingen-an-der-steige">Webdesign Geislingen</a></p>`,
  },
  {
    dir: "blog",
    title: "Blog — Webdesign, SEO & Marketing | AGR Multimedia",
    description: "Ratgeber zu Webdesign, lokalem SEO und Conversion für KMU in Geislingen und Göppingen.",
    h1: "Blog — Webdesign & lokales SEO für KMU",
    lead: "Praxisartikel zu Webdesign, SEO, Google Maps und Conversion für Unternehmen in Geislingen und der Region.",
    canonical: "https://www.agrmultimedia.eu/blog",
    bodyHtml: `<ul>${uniqueBlog
      .slice(0, 20)
      .map((p) => `<li><a href="/blog/${p.slug}">${p.title}</a></li>`)
      .join("")}</ul>`,
  },
  {
    dir: "portfolio",
    title: "Portfolio — AGR Multimedia",
    h1: "Portfolio AGR Multimedia",
    lead: "Case Studies: Toni's Autopflege, Tairovic Gebäudeservice, FixBike, IlmBuds — Webdesign und SEO für KMU.",
    canonical: "https://www.agrmultimedia.eu/portfolio",
    bodyHtml: `<ul><li><a href="/portfolio/tonis-autopflege">Toni's Autopflege</a></li><li><a href="/portfolio/tairovic-gebaeudeservice">Tairovic Gebäudeservice</a></li><li><a href="/portfolio/fixbike">FixBike</a></li><li><a href="/portfolio/ilmbuds">IlmBuds</a></li></ul>`,
  },
  {
    dir: "kontakt",
    title: "Kontakt — AGR Multimedia",
    h1: "Kontakt — AGR Multimedia",
    lead: "Kostenlose Einschätzung für Webdesign, Grafik und Video. Geislingen an der Steige.",
    canonical: "https://www.agrmultimedia.eu/kontakt",
  },
  {
    dir: "webdesign-seo",
    title: "Webdesign & SEO — AGR Multimedia",
    description:
      "Webdesign und SEO für KMU in Geislingen — ab 890 € Basis, ab 1.490 € SEO-Paket. Individuelles Angebot nach Erstgespräch.",
    h1: "Webdesign und SEO für kleine Unternehmen",
    lead: "Business-Websites mit On-Page-SEO für Geislingen, Göppingen und Region — persönlich umgesetzt von AGR Multimedia.",
    canonical: "https://www.agrmultimedia.eu/webdesign-seo",
    bodyHtml: `<section><h2>Preise ab</h2><p>Basis-Website ab 890 € · SEO-Website ab 1.490 € · Komplettpaket ab 2.290 €</p></section><p><a href="/kontakt">Angebot anfragen</a> · <a href="/webdesign-geislingen-an-der-steige">Guide Webdesign Geislingen</a></p>`,
  },
  {
    dir: "videoproduktion",
    title: "Videoproduktion — AGR Multimedia",
    h1: "Professionelle Videoproduktion & AI Motion Design",
    lead: "Video Production Geislingen — Social Media Cuts, Corporate Videos, AI Post-Production für KMU.",
    canonical: "https://www.agrmultimedia.eu/videoproduktion",
    bodyHtml: `<p><a href="https://www.youtube.com/@AGRMultimedia">YouTube Kanal</a> · <a href="/kontakt">Anfrage</a></p>`,
  },
  {
    dir: "digital-marketing",
    title: "Digital Marketing — AGR Multimedia",
    h1: "Digital Marketing für kleine Unternehmen",
    lead: "Online-Marketing, SEO und Content für KMU in Geislingen und der Region.",
    canonical: "https://www.agrmultimedia.eu/digital-marketing",
  },
  {
    dir: "ai-content-creation",
    title: "KI Content Creation — AGR Multimedia",
    h1: "KI-gestützte Inhaltserstellung mit Qualitätskontrolle",
    lead: "AI Content für Websites, Social Media und Marketing — mit menschlicher Prüfung.",
    canonical: "https://www.agrmultimedia.eu/ai-content-creation",
  },
  {
    dir: "bewertungen",
    title: "Bewertungen — AGR Multimedia",
    h1: "Bewertungen und Google Maps",
    lead: "Verifizierte Kundenstimmen zu AGR Multimedia.",
    canonical: "https://www.agrmultimedia.eu/bewertungen",
  },
  {
    dir: "graphic-design",
    title: "Grafikdesign für kleine Unternehmen — AGR Multimedia",
    description: "Logo, Corporate Design, Branding — AGR Multimedia Geislingen.",
    h1: "Grafikdesign für kleine Unternehmen",
    lead: "Corporate Design, Branding, Visitenkarten und visuelle Systeme.",
    canonical: "https://www.agrmultimedia.eu/graphic-design",
  },
  {
    dir: "webdesign-geislingen-an-der-steige",
    title: "Webdesign Geislingen an der Steige | Websites & SEO — AGR Multimedia",
    description:
      "Professionelles Webdesign in Geislingen: Business-Websites, lokales SEO, responsive Design für Handwerk und KMU.",
    h1: "Webdesign Geislingen an der Steige — professionelle Websites für lokale Unternehmen",
    lead: "Moderne Business-Websites mit lokalem SEO für Handwerk, Dienstleister und kleine Firmen in Geislingen.",
    canonical: "https://www.agrmultimedia.eu/webdesign-geislingen-an-der-steige",
    bodyHtml: `
    <section><h2>Professionelles Webdesign in Geislingen</h2>
    <p>Eine Website ist oft der erste Kontaktpunkt zwischen Ihrem Unternehmen und potenziellen Kunden. Professionelles Webdesign vermittelt Vertrauen und führt Besucher zum Kontakt.</p>
    <p>Basis ab 890 € · SEO-Paket ab 1.490 € · Komplettpaket ab 2.290 € — individuelles Angebot nach Erstgespräch.</p></section>
    <section><h2>FAQ</h2>
    <p><strong>Für welche Branchen?</strong> Handwerk, Reinigung, Autopflege, Dienstleister.</p>
    <p><strong>Was kostet eine Website?</strong> Transparentes Angebot nach kurzem Gespräch.</p></section>
    <p><a href="/kontakt">Beratung</a> · <a href="/webdesign-seo">Webdesign &amp; SEO</a> · <a href="/blog">Blog</a></p>`,
  },
];

const caseStudies = [
  { dir: "portfolio/tonis-autopflege", slug: "tonis-autopflege", name: "Toni's Autopflege Göppingen" },
  { dir: "portfolio/tairovic-gebaeudeservice", slug: "tairovic-gebaeudeservice", name: "Tairovic Gebäudeservice" },
  { dir: "portfolio/fixbike", slug: "fixbike", name: "FixBike Fahrradservice" },
  { dir: "portfolio/ilmbuds", slug: "ilmbuds", name: "IlmBuds Bildungs-App" },
];

function writeShell({ dir, title, description, h1, lead, canonical, bodyHtml = "" }) {
  const routeDir = path.join(outDir, dir);
  fs.mkdirSync(routeDir, { recursive: true });
  const scripts =
    indexHtml.match(/<script[^>]+src="\/assets\/[^"]+"[^>]*><\/script>/g)?.join("\n    ") ?? "";
  const moduleScript = indexHtml.match(/<script type="module"[^>]*><\/script>/)?.[0] ?? "";
  let headBlock = head
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
    .replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`);
  if (description) {
    headBlock = headBlock.replace(
      /<meta name="description" id="meta-description" content="[^"]*"/i,
      `<meta name="description" id="meta-description" content="${description.replace(/"/g, "&quot;")}"`,
    );
  }
  const page = `<!DOCTYPE html>
<html lang="de">
${headBlock}
<body>
<main id="static-route-prerender" lang="de">
  <h1>${h1}</h1>
  <p>${lead}</p>
  ${bodyHtml}
</main>
<div id="root"></div>
    ${scripts}
    ${moduleScript}
</body>
</html>`;
  fs.writeFileSync(path.join(routeDir, "index.html"), page, "utf8");
}

for (const r of staticRoutes) writeShell(r);

for (const cs of caseStudies) {
  writeShell({
    dir: cs.dir,
    title: `Case Study ${cs.name} — AGR Multimedia`,
    h1: `Case Study: ${cs.name}`,
    lead: `Webdesign und SEO Projekt von AGR Multimedia — ${cs.name}.`,
    canonical: `https://www.agrmultimedia.eu/portfolio/${cs.slug}`,
    bodyHtml: `<p><a href="/portfolio">Portfolio</a> · <a href="/kontakt">Anfrage</a></p>`,
  });
}

for (const post of uniqueBlog) {
  writeShell({
    dir: `blog/${post.slug}`,
    title: `${post.title} | AGR Multimedia Blog`,
    description: post.description,
    h1: post.title,
    lead: post.description,
    canonical: `https://www.agrmultimedia.eu/blog/${post.slug}`,
    bodyHtml: `<p>Autor: Agron Osmani · <a href="/webdesign-geislingen-an-der-steige">Webdesign Geislingen</a> · <a href="/webdesign-seo">Webdesign &amp; SEO</a> · <a href="/kontakt">Kontakt</a></p>`,
  });
}

console.log(
  `OK: prerender ${staticRoutes.length} routes, ${caseStudies.length} case studies, ${uniqueBlog.length} blog posts`,
);
