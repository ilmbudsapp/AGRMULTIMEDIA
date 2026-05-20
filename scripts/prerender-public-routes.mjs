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
    title: "Portfolio — AGR Multimedia",
    h1: "Portfolio AGR Multimedia",
    lead: "Web dizajn (Toni's Autopflege, FixBike), video, grafika i UX/SEO inženjering — projekti za mala preduzeća u EU.",
    canonical: "https://www.agrmultimedia.eu/portfolio",
  },
  {
    dir: "kontakt",
    title: "Kontakt — AGR Multimedia",
    h1: "Kontaktirajte AGR Multimedia",
    lead: "Besplatna konsultacija za web, grafiku i video. Odgovor obično u roku od 24 sata. Geislingen an der Steige.",
    canonical: "https://www.agrmultimedia.eu/kontakt",
  },
  {
    dir: "webdesign-seo",
    title: "Webdesign & SEO — AGR Multimedia",
    h1: "Webdesign i SEO za mala preduzeća",
    lead: "Brzi sajtovi sa tehničkim SEO, AEO i GEO — od osnovnog paketa do A-GRADE optimizacije po dogovoru.",
    canonical: "https://www.agrmultimedia.eu/webdesign-seo",
  },
  {
    dir: "bewertungen",
    title: "Google recenzije — AGR Multimedia",
    h1: "Bewertungen i Google Maps recenzije",
    lead: "Verifikovane recenzije klijenata AGR Multimedia — poverenje za lokalne biznise u Nemačkoj.",
    canonical: "https://www.agrmultimedia.eu/bewertungen",
  },
];

for (const r of routes) {
  const routeDir = path.join(outDir, r.dir);
  fs.mkdirSync(routeDir, { recursive: true });
  const scripts =
    indexHtml.match(/<script[^>]+src="\/assets\/[^"]+"[^>]*><\/script>/g)?.join("\n    ") ?? "";
  const moduleScript = indexHtml.match(/<script type="module"[^>]*><\/script>/)?.[0] ?? "";
  const headBlock = head
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${r.title}</title>`)
    .replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${r.canonical}" />`);
  const page = `<!DOCTYPE html>
<html lang="sr">
${headBlock}
<body>
<main id="static-route-prerender" lang="sr">
  <h1>${r.h1}</h1>
  <p>${r.lead}</p>
  <p><a href="/">Početna</a> · <a href="${r.canonical.replace("https://www.agrmultimedia.eu", "")}">Puna stranica</a></p>
</main>
<div id="root"></div>
    ${scripts}
    ${moduleScript}
</body>
</html>`;
  fs.writeFileSync(path.join(routeDir, "index.html"), page, "utf8");
}

console.log(`OK: prerender shells for ${routes.map((r) => r.dir).join(", ")}`);
