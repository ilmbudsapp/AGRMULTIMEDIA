#!/usr/bin/env node
/**
 * Writes minimal HTML shells for key public routes (Vercel serves these before SPA fallback).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "dist", "public");

if (!fs.existsSync(outDir)) {
  console.error("FAIL: dist/public missing — run vite build first");
  process.exit(1);
}

const indexHtml = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
const headMatch = indexHtml.match(/<head>[\s\S]*?<\/head>/i);
const head = headMatch ? headMatch[0] : "<head><meta charset=\"UTF-8\" /></head>";

const routes = [
  {
    dir: "portfolio",
    lang: "de",
    title: "Portfolio — AGR Multimedia",
    h1: "Portfolio AGR Multimedia",
    lead: "Webdesign (Toni's Autopflege, FixBike), Video, Grafik und SEO — Projekte für kleine Unternehmen in der Region.",
    canonical: "https://www.agrmultimedia.eu/portfolio",
  },
  {
    dir: "kontakt",
    lang: "de",
    title: "Kontakt — AGR Multimedia",
    h1: "Kontakt — AGR Multimedia",
    lead: "Kostenlose Einschätzung für Webdesign, Grafik und Video. Antwort meist innerhalb von 24 Stunden. Geislingen an der Steige.",
    canonical: "https://www.agrmultimedia.eu/kontakt",
  },
  {
    dir: "webdesign-seo",
    lang: "de",
    title: "Webdesign & SEO — AGR Multimedia",
    h1: "Webdesign und SEO für kleine Unternehmen",
    lead: "Schnelle Websites mit technischem SEO — individuelles Angebot nach kostenlosem Erstgespräch.",
    canonical: "https://www.agrmultimedia.eu/webdesign-seo",
  },
  {
    dir: "bewertungen",
    lang: "de",
    title: "Bewertungen — AGR Multimedia",
    h1: "Bewertungen und Google Maps",
    lead: "Verifizierte Kundenstimmen zu AGR Multimedia — Vertrauen für lokale Betriebe in Deutschland.",
    canonical: "https://www.agrmultimedia.eu/bewertungen",
  },
  {
    dir: "graphic-design",
    lang: "de",
    title: "Grafikdesign für kleine Unternehmen — AGR Multimedia",
    description:
      "Logo, Corporate Design, Branding und Visitenkarten — u. a. Fallstudie Atemberge: Outdoor-Marke mit Moodboard, Farbwelt und finalem Logo.",
    h1: "Grafikdesign für kleine Unternehmen",
    lead: "Corporate Design, Branding, Visitenkarten und visuelle Systeme — inkl. Atemberge Outdoor-Wandermarke (Moodboard, Logo, Visitenkarte).",
    canonical: "https://www.agrmultimedia.eu/graphic-design",
    bodyHtml: `<p><a href="/graphic-design#corporate-design">Atemberge Corporate Design ansehen</a> · <a href="/kontakt">Angebot anfragen</a></p>`,
  },
  {
    dir: "webdesign-geislingen-an-der-steige",
    lang: "de",
    title: "Webdesign Geislingen an der Steige | Websites & SEO — AGR Multimedia",
    description:
      "Professionelles Webdesign in Geislingen an der Steige: moderne Business-Websites, lokales SEO und responsive Design für Handwerk und kleine Firmen. Individuelles Angebot nach Erstgespräch.",
    h1: "Webdesign Geislingen an der Steige — professionelle Websites für lokale Unternehmen",
    lead: "Moderne Business-Websites mit lokalem SEO für Handwerk, Dienstleister und kleine Firmen — persönlich umgesetzt von AGR Multimedia in Geislingen an der Steige.",
    canonical: "https://www.agrmultimedia.eu/webdesign-geislingen-an-der-steige",
    bodyHtml: `
    <section>
      <h2>Professionelles Webdesign in Geislingen an der Steige</h2>
      <p>Eine Website ist oft der erste Kontaktpunkt zwischen Ihrem Unternehmen und potenziellen Kunden. Professionelles Webdesign vermittelt Vertrauen, erklärt Ihre Leistungen verständlich und führt Besucher zum Kontakt.</p>
      <p>Jedes Projekt ist individuell. Nach einem kurzen Erstgespräch erhalten Sie ein transparentes Angebot passend zu Umfang, Ziel und Anforderungen.</p>
    </section>
    <section>
      <h2>Häufige Fragen</h2>
      <p><strong>Für welche Branchen?</strong> Handwerk, Reinigung, Autopflege, Gartenbau, Transport, Fahrradservice und kleine Familienbetriebe.</p>
      <p><strong>Was kostet eine Website?</strong> Jedes Projekt ist individuell. Nach einem kurzen Erstgespräch erhalten Sie ein transparentes Angebot passend zu Umfang, Ziel und Anforderungen.</p>
    </section>
    <p><a href="/kontakt">Kostenlose Beratung anfragen</a> · <a href="/kontakt">Individuelles Angebot erhalten</a> · <a href="/webdesign-seo">Webdesign &amp; SEO</a> · <a href="/">Startseite</a></p>`,
  },
];

for (const r of routes) {
  const routeDir = path.join(outDir, r.dir);
  fs.mkdirSync(routeDir, { recursive: true });
  const scripts =
    indexHtml.match(/<script[^>]+src="\/assets\/[^"]+"[^>]*><\/script>/g)?.join("\n    ") ?? "";
  const moduleScript = indexHtml.match(/<script type="module"[^>]*><\/script>/)?.[0] ?? "";
  let headBlock = head
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${r.title}</title>`)
    .replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${r.canonical}" />`);
  if (r.description) {
    headBlock = headBlock.replace(
      /<meta name="description" id="meta-description" content="[^"]*"/i,
      `<meta name="description" id="meta-description" content="${r.description.replace(/"/g, "&quot;")}"`,
    );
  }
  const lang = r.lang ?? "de";
  const bodyExtra = r.bodyHtml ?? "";
  const page = `<!DOCTYPE html>
<html lang="${lang}">
${headBlock}
<body>
<main id="static-route-prerender" lang="${lang}">
  <h1>${r.h1}</h1>
  <p>${r.lead}</p>
  ${bodyExtra}
</main>
<div id="root"></div>
    ${scripts}
    ${moduleScript}
</body>
</html>`;
  fs.writeFileSync(path.join(routeDir, "index.html"), page, "utf8");
}

console.log(`OK: prerender shells for ${routes.map((r) => r.dir).join(", ")}`);
