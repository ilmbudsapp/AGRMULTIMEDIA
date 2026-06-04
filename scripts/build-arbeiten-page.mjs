import fs from "fs";
import path from "path";

const indexPath = path.resolve("client/public/demo/tairovic-dark-verzija/index.html");
let html = fs.readFileSync(indexPath, "utf8").replace(/\r\n/g, "\n");

if (html.includes('id="arbeiten"')) {
  console.log("arbeiten section already present");
  process.exit(0);
}

const galleryStart = html.indexOf('<div class="kicker">Referenzen</div>\n        <h2>Galerie</h2>');
if (galleryStart < 0) throw new Error("Gallery marker not found");
const sectionStart = html.lastIndexOf('  <div class="section">', galleryStart);

const regionMarker =
  '<div class="kicker">Region</div>\n        <h2>Gebäudereinigung in Neuwied &amp; Umgebung</h2>';
const regionIdx = html.indexOf(regionMarker);
if (regionIdx < 0) throw new Error("Region marker not found");
const regionStart = html.lastIndexOf('<div class="section">', regionIdx);

const portfolioBlock = html.slice(sectionStart, regionStart);

const reinigungCta = `  <div class="section">
    <div class="container">
      <div class="card" style="text-align:center">
        <div class="kicker">Referenzen</div>
        <h2>Vorher-Nachher, Video &amp; Projektbeispiele</h2>
        <p style="color:#b9c3d0;line-height:1.75;max-width:560px;margin:0 auto 20px">Alle Fotos, Videos und Arbeitsergebnisse finden Sie auf unserer Übersichtsseite — Gebäudereinigung, Hausmeisterservice, Gartenpflege und Winterdienst.</p>
        <a href="/unsere-arbeiten" class="btn btn-primary navlink" data-page="arbeiten">Unsere Arbeiten ansehen</a>
      </div>
    </div>
  </div>
`;

html = html.slice(0, sectionStart) + reinigungCta + html.slice(regionStart);

function extractGrid(source, sectionId, gridClass) {
  const re = new RegExp(
    `<section id="${sectionId}"[\\s\\S]*?<div class="galerie-grid ${gridClass}">([\\s\\S]*?)</div>\\s*</div>\\s*</div>\\s*</div>`,
  );
  const m = source.match(re);
  return m ? m[1].trim() : "";
}

const hausmeisterFigures = extractGrid(html, "hausmeister", "hausmeister-grid");
const gartenFigures = extractGrid(html, "garten", "garten-grid");
const winterFigures = extractGrid(html, "winter", "winter-grid");

const sec2 = portfolioBlock.indexOf('  <div class="section">', 12);
const galerieSection = sec2 > 0 ? portfolioBlock.slice(0, sec2) : portfolioBlock;
const videoSection = sec2 > 0 ? portfolioBlock.slice(sec2) : "";

const galerieFixed = galerieSection
  .replace('<div class="kicker">Referenzen</div>', '<div class="kicker">Vorher / Nachher</div>')
  .replace("<h2>Galerie</h2>", "<h2>Reinigungsarbeiten</h2>");

const videoFixed = videoSection.replace("<h2>Video</h2>", "<h2>Video — Reinigung im Einsatz</h2>");

const arbeitenSection = `<section id="arbeiten" class="page">
  <div class="page-hero">
    <div class="container">
      <div class="kicker">Referenzen</div>
      <h1>Unsere Arbeiten</h1>
      <p>Fotos, Videos, Vorher-Nachher-Vergleiche und Projektbeispiele aus Gebäudereinigung, Hausmeisterservice, Gartenpflege und Winterdienst in Neuwied.</p>
    </div>
  </div>

  <div class="section">
    <div class="container">
      <div class="title">
        <div class="kicker">Überblick</div>
        <h2>Projektbeispiele &amp; Galerie</h2>
        <p class="page-hero-intro" style="margin-top:0">Ein Einblick in unsere Arbeit vor Ort. Klicken Sie auf ein Bild für die Vollansicht.</p>
      </div>
    </div>
  </div>

${galerieFixed}
${videoFixed}
  <div class="section">
    <div class="container">
      <div class="card galerie-card">
        <div class="kicker">Projektbeispiel</div>
        <h2>Hausmeisterservice</h2>
        <p>Objektkontrolle, Betreuung, Technik und Kleinreparaturen.</p>
        <p class="garten-grid-hint">Tipp: Klicken Sie auf ein Bild — es öffnet sich in voller Größe.</p>
        <div class="galerie-grid hausmeister-grid">
${hausmeisterFigures}
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="container">
      <div class="card galerie-card">
        <div class="kicker">Projektbeispiel</div>
        <h2>Gartenpflege</h2>
        <p>Rasen, Hecken, Beete und Außenanlagen in Neuwied.</p>
        <p class="garten-grid-hint">Tipp: Klicken Sie auf ein Bild — es öffnet sich in voller Größe.</p>
        <div class="galerie-grid garten-grid">
${gartenFigures}
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="container">
      <div class="card galerie-card">
        <div class="kicker">Projektbeispiel</div>
        <h2>Winterdienst</h2>
        <p>Schneeräumung und Streudienst — sichere Wege im Winter.</p>
        <p class="garten-grid-hint">Tipp: Klicken Sie auf ein Bild — es öffnet sich in voller Größe.</p>
        <div class="galerie-grid winter-grid">
${winterFigures}
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="container">
      <p class="seo-internal">Leistungen: <a href="/gebaeudereinigung" class="navlink text-link-gold" data-page="reinigung">Gebäudereinigung</a> · <a href="/hausmeisterservice" class="navlink text-link-gold" data-page="hausmeister">Hausmeisterservice</a> · <a href="/gartenpflege" class="navlink text-link-gold" data-page="garten">Gartenpflege</a> · <a href="/winterdienst" class="navlink text-link-gold" data-page="winter">Winterdienst</a> · <a href="/kontakt" class="navlink text-link-gold" data-page="kontakt">Angebot</a></p>
    </div>
  </div>
</section>

`;

html = html.replace('<section id="reinigung" class="page">', arbeitenSection + "\n<section id=\"reinigung\" class=\"page\">");

fs.writeFileSync(indexPath, html);
console.log("OK: section#arbeiten created, reinigung gallery moved");
