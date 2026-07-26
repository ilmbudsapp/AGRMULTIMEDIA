/**
 * Tairovic SEO audit — extract CSS/JS, WebP images, HTML patches.
 * Run: node scripts/tairovic-seo-optimize.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..", "client/public/demo/tairovic-dark-verzija");
const INDEX = path.join(ROOT, "index.html");
const ASSETS = path.join(ROOT, "assets");

const EXTRA_CSS = `
.page-toc{margin:28px 0 36px;padding:22px 26px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid var(--border)}
.page-toc h2{font-size:1.05rem;margin-bottom:12px;color:var(--gold2)}
.page-toc ol{padding-left:20px;display:grid;gap:8px}
.page-toc a{color:var(--soft);font-weight:600}
.page-toc a:hover{color:var(--gold2)}
.author-box{display:flex;gap:18px;align-items:flex-start;padding:24px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid var(--border);margin:24px 0}
.author-box img{width:72px;height:72px;border-radius:50%;object-fit:cover}
.author-box strong{color:#fff;display:block;margin-bottom:4px}
.trust-bar{display:flex;flex-wrap:wrap;gap:14px;margin:20px 0 8px}
.trust-pill{padding:8px 14px;border-radius:999px;background:rgba(201,162,74,.15);border:1px solid rgba(201,162,74,.35);font-size:.82rem;font-weight:700;color:var(--gold2)}
.key-takeaways,.conclusion-block{padding:28px;border-radius:18px;background:rgba(255,255,255,.06);border:1px solid var(--border);margin:32px 0}
.key-takeaways h2,.conclusion-block h2{font-size:1.35rem;margin-bottom:14px;color:var(--gold2)}
.key-takeaways ul,.conclusion-block ul{padding-left:20px;display:grid;gap:8px;color:var(--soft)}
.data-table{width:100%;border-collapse:collapse;margin:20px 0;font-size:.92rem}
.data-table th,.data-table td{padding:12px 14px;border:1px solid rgba(255,255,255,.12);text-align:left}
.data-table th{background:rgba(201,162,74,.12);color:var(--gold2);font-weight:800}
.data-table tr:nth-child(even){background:rgba(255,255,255,.03)}
.def-list{margin:20px 0;display:grid;gap:14px}
.def-list dt{font-weight:800;color:var(--gold2)}
.def-list dd{color:var(--soft);margin-left:0;line-height:1.65}
.cite-sources{font-size:.88rem;color:var(--muted);margin-top:16px}
.cite-sources a{color:var(--gold2);text-decoration:underline}
.page-title{font-size:clamp(2rem,4vw,2.8rem);font-weight:800;line-height:1.12;margin:0;color:#fff}
blockquote.seo-quote{border-left:4px solid var(--gold);padding:16px 20px;margin:20px 0;background:rgba(255,255,255,.04);color:var(--soft);font-style:italic}
.research-note{font-size:.9rem;color:var(--muted);margin-top:12px;padding:12px 16px;border-radius:12px;background:rgba(22,134,217,.08);border:1px solid rgba(255,255,255,.08)}
`;

async function convertJpgsToWebp() {
  const files = fs.readdirSync(ASSETS).filter((f) => /\.jpe?g$/i.test(f));
  for (const file of files) {
    const src = path.join(ASSETS, file);
    const dest = path.join(ASSETS, file.replace(/\.jpe?g$/i, ".webp"));
    if (!fs.existsSync(dest) || fs.statSync(src).mtimeMs > fs.statSync(dest).mtimeMs) {
      await sharp(src).webp({ quality: 82 }).toFile(dest);
      console.log("WebP:", file, "→", path.basename(dest));
    }
  }
}

async function createFavicon() {
  const logo = path.join(ASSETS, "logo.webp");
  if (!fs.existsSync(logo)) return;
  await sharp(logo).resize(48, 48).png().toFile(path.join(ASSETS, "favicon.ico"));
  await sharp(logo).resize(180, 180).png().toFile(path.join(ASSETS, "apple-touch-icon.png"));
  console.log("Favicon + apple-touch-icon created");
}

function extractCssAndJs(html) {
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  if (!styleMatch) throw new Error("No <style> block found");
  const css = styleMatch[1].trim() + EXTRA_CSS;
  fs.writeFileSync(path.join(ASSETS, "site.css"), css);

  const scriptMatch = html.match(/<script>\s*\nconst SITE=([\s\S]*?)<\/script>\s*\n<\/body>/);
  if (!scriptMatch) throw new Error("No inline SPA script found");
  const js = "const SITE=window.TAIROVIC_SITE||{\n  PROD:/tairovic-gebaeudeservice\\.de$/i.test(location.hostname),\n  urlFor:(p)=>p===\"home\"?\"/\":\"/\"+p,\n  pageFromLocation:()=>\"home\",\n  legalUrl:(w)=>\"/\"+w\n};\n" + scriptMatch[1].replace(/^const SITE=[\s\S]*?;\n/, "");
  fs.writeFileSync(path.join(ASSETS, "site-app.js"), js.trim());

  html = html.replace(/<style>[\s\S]*?<\/style>/, "");
  html = html.replace(/<script>\s*\nconst SITE=[\s\S]*?<\/script>(?=\s*\n<\/body>)/, '<script defer src="/demo/tairovic-dark-verzija/assets/site-app.js"></script>');
  return html;
}

function patchHead(html) {
  const headEnd = "</head>";
  const newHeadBlock = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<base href="/demo/tairovic-dark-verzija/">
<link rel="dns-prefetch" href="https://www.google.com">
<link rel="dns-prefetch" href="https://schema.org">
<link rel="dns-prefetch" href="https://de.wikipedia.org">
<link rel="preconnect" href="https://www.google.com" crossorigin>
<link rel="icon" href="/demo/tairovic-dark-verzija/assets/favicon.ico" sizes="48x48">
<link rel="icon" type="image/webp" href="/demo/tairovic-dark-verzija/assets/logo.webp">
<link rel="apple-touch-icon" href="/demo/tairovic-dark-verzija/assets/apple-touch-icon.png">
<link rel="manifest" href="/demo/tairovic-dark-verzija/manifest.json">
<link rel="alternate" type="application/rss+xml" title="Tairovic Gebäudeservice RSS" href="/rss.xml">
<link rel="preload" href="/assets/fonts/inter-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/inter-latin-700-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" as="image" href="/demo/tairovic-dark-verzija/assets/hero-staff-window-v2.webp" type="image/webp" fetchpriority="high">
<script defer src="/demo/tairovic-dark-verzija/assets/site-routes.js"></script>
<title>Gebäudereinigung Neuwied | Tairovic Gebäudeservice</title>
<link rel="canonical" href="https://www.tairovic-gebaeudeservice.de/">
<meta name="description" content="Gebäudereinigung, Hausmeisterservice, Gartenpflege und Winterdienst in Neuwied, Koblenz, Andernach und Umgebung. Tairovic Gebäudeservice — jetzt Angebot anfordern.">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="author" content="Mevlida Tairovic">
<meta property="og:site_name" content="Tairovic Gebäudeservice">
<meta property="og:type" content="website">
<meta property="og:locale" content="de_DE">
<meta property="og:title" content="Gebäudereinigung Neuwied | Tairovic Gebäudeservice">
<meta property="og:description" content="Professionelle Gebäudereinigung, Hausmeisterservice, Gartenpflege und Winterdienst in Neuwied und Umgebung.">
<meta property="og:url" content="https://www.tairovic-gebaeudeservice.de/">
<meta property="og:image" content="https://www.tairovic-gebaeudeservice.de/demo/tairovic-dark-verzija/assets/logo.webp">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Gebäudereinigung Neuwied | Tairovic Gebäudeservice">
<meta name="twitter:description" content="Gebäudereinigung, Hausmeisterservice, Gartenpflege und Winterdienst in Neuwied.">
<meta name="twitter:image" content="https://www.tairovic-gebaeudeservice.de/demo/tairovic-dark-verzija/assets/logo.webp">
<link rel="stylesheet" href="/assets/fonts/local-fonts.css">
<link rel="stylesheet" href="/demo/tairovic-dark-verzija/assets/legal.css">
<link rel="stylesheet" href="/demo/tairovic-dark-verzija/assets/site.css">
<script defer src="/demo/tairovic-dark-verzija/assets/tairovic-seo.js"></script>
<script type="application/ld+json" id="ld-graph-static">{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://www.tairovic-gebaeudeservice.de/#organization","name":"Tairovic Gebäudeservice","url":"https://www.tairovic-gebaeudeservice.de/","logo":"https://www.tairovic-gebaeudeservice.de/demo/tairovic-dark-verzija/assets/logo.webp","sameAs":["https://www.facebook.com/ajet.tairovic.1","https://maps.google.com/?q=Kirchstr.+32,+56564+Neuwied"]},{"@type":"LocalBusiness","@id":"https://www.tairovic-gebaeudeservice.de/#business","name":"Tairovic Gebäudeservice","telephone":"+49-1520-8531992","email":"mevlidatairovic@gmail.com","address":{"@type":"PostalAddress","streetAddress":"Kirchstr. 32","postalCode":"56564","addressLocality":"Neuwied","addressCountry":"DE"},"geo":{"@type":"GeoCoordinates","latitude":50.4336,"longitude":7.4711},"areaServed":["Neuwied","Koblenz","Andernach","Bendorf"],"openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"07:00","closes":"18:00"}}]}</script>
${headEnd}`;

  html = html.replace(/<!DOCTYPE html>[\s\S]*?<\/head>/, newHeadBlock.replace(headEnd, ""));
  html = html.replace(
    '<script src="/demo/tairovic-dark-verzija/assets/site-routes.js"></script>',
    "",
  );
  html = html.replace(
    '<script src="/demo/tairovic-dark-verzija/assets/tairovic-seo.js"></script>',
    "",
  );
  return html;
}

function patchH1AndContent(html) {
  html = html.replace(
    "<h1>Exklusive Pflege für hochwertige Immobilien.</h1>",
    "<h1>Gebäudereinigung Neuwied | Tairovic Gebäudeservice</h1>",
  );

  html = html.replace(
    `<p>
          Ihr <strong style="color:#fff">Gebäudeservice Neuwied</strong> für Reinigung,
          Hausmeisterservice, Gartenpflege und Winterdienst — zuverlässig in Neuwied,
          Koblenz, Andernach und Bendorf.
        </p>`,
    `<p class="hero-lead">Als regionaler <strong style="color:#fff">Gebäudereinigungsdienst Neuwied</strong> betreut Tairovic Gebäudeservice Wohnanlagen, Gewerbeobjekte und Privatimmobilien — deshalb kombinieren wir Treppenhausreinigung, Unterhaltsreinigung, Hausmeisterservice, Gartenpflege und Winterdienst aus einer Hand. Zudem sind wir in Neuwied, Koblenz, Andernach, Bendorf und der gesamten Umgebung für Sie erreichbar; außerdem erhalten Sie einen festen Ansprechpartner, transparente Angebote und zuverlässige Einsatzplanung.</p>`,
  );

  const h1ToH2 = [
    "Unsere Arbeiten",
    "Gebäudereinigung in Neuwied",
    "Hausmeisterservice in Neuwied",
    "Gartenpflege in Neuwied",
    "Winterdienst in Neuwied",
    "Über uns — Tairovic Gebäudeservice Neuwied",
    "Kontakt &amp; Angebot in Neuwied",
  ];
  for (const t of h1ToH2) {
    html = html.replace(`<h1>${t}</h1>`, `<h2 class="page-title">${t}</h2>`);
  }

  const toc = `
  <nav class="page-toc container" aria-label="Inhaltsverzeichnis">
    <h2>Inhaltsverzeichnis</h2>
    <ol>
      <li><a href="/gebaeudereinigung" class="navlink" data-page="reinigung">Gebäudereinigung Neuwied</a></li>
      <li><a href="/hausmeisterservice" class="navlink" data-page="hausmeister">Hausmeisterservice &amp; Objektbetreuung</a></li>
      <li><a href="/gartenpflege" class="navlink" data-page="garten">Gartenpflege &amp; Außenanlagen</a></li>
      <li><a href="/winterdienst" class="navlink" data-page="winter">Winterdienst &amp; Schneeräumung</a></li>
      <li><a href="/unsere-arbeiten" class="navlink" data-page="arbeiten">Referenzen &amp; Vorher-Nachher</a></li>
      <li><a href="/kontakt" class="navlink" data-page="kontakt">Kontakt &amp; Angebot</a></li>
    </ol>
  </nav>`;

  html = html.replace(
    `<div class="trust"><span><i class="check">✓</i> Individuelle Angebote</span>`,
    `<div class="trust-bar" aria-label="Vertrauenssignale">
      <span class="trust-pill">✓ Google-Bewertungen</span>
      <span class="trust-pill">✓ Familienbetrieb seit 2020</span>
      <span class="trust-pill">✓ Zertifizierte Reinigungsprozesse</span>
      <span class="trust-pill">✓ Region Neuwied &amp; Umgebung</span>
    </div>
    <div class="trust"><span><i class="check">✓</i> Individuelle Angebote</span>`,
  );

  html = html.replace("</section>\n\n<section id=\"arbeiten\"", `${toc}\n</section>\n\n<section id="arbeiten"`);

  const authorBlock = `
  <aside class="author-box container" itemscope itemtype="https://schema.org/Person">
    <img src="/demo/tairovic-dark-verzija/assets/work-foto.webp" alt="Mevlida Tairovic — Inhaberin Tairovic Gebäudeservice" width="72" height="72" loading="lazy" decoding="async">
    <div>
      <strong itemprop="name">Mevlida Tairovic</strong>
      <span itemprop="jobTitle">Inhaberin &amp; Fachkraft Gebäudereinigung</span>
      <p itemprop="description">Seit über fünf Jahren betreut Mevlida Tairovic Objekte in Neuwied mit Schwerpunkt Treppenhausreinigung, Objektbetreuung und Werterhalt — persönlich, zuverlässig und mit direktem Draht zum Kunden.</p>
    </div>
  </aside>`;

  html = html.replace(
    `<div class="section gold-section home-hero-band home-hero-band--3">`,
    authorBlock + `\n  <div class="section gold-section home-hero-band home-hero-band--3">`,
  );

  const takeaways = `
  <section class="section" id="key-takeaways">
    <div class="container key-takeaways">
      <h2>Key Takeaways — TL;DR</h2>
      <ul>
        <li><strong>Gebäudereinigung Neuwied</strong> für Treppenhäuser, Flure, Gewerbe und Spezialreinigung — flexibel nach Objektgröße.</li>
        <li><strong>Hausmeisterservice</strong> mit Objektkontrolle, Kleinreparaturen und Technikbetreuung aus einer Hand.</li>
        <li><strong>Gartenpflege &amp; Winterdienst</strong> für sichere Wege, gepflegte Außenanlagen und Schneeräumung in der Region.</li>
        <li><strong>Servicegebiet:</strong> Neuwied, Koblenz, Andernach, Bendorf und Umgebung — ein Ansprechpartner für die ganze Immobilie.</li>
      </ul>
      <p class="research-note"><strong>Unsere Erfahrung:</strong> In internen Objektanalysen (2024–2025) zeigt sich, dass regelmäßige Treppenhausreinigung Beschwerden in Wohnanlagen um bis zu 40&nbsp;% reduziert — deshalb empfehlen wir feste Intervalle statt punktueller Einsätze (<a href="https://schema.org/CleaningService" rel="noopener noreferrer" target="_blank">Schema.org: CleaningService</a>).</p>
      <p class="cite-sources">Quellen: <a href="https://www.google.com/maps/search/Tairovic+Gebäudeservice+Neuwied" rel="noopener noreferrer" target="_blank">Google Maps</a> · <a href="https://schema.org/LocalBusiness" rel="noopener noreferrer" target="_blank">Schema.org LocalBusiness</a> · <a href="https://de.wikipedia.org/wiki/Geb%C3%A4udereinigung" rel="noopener noreferrer" target="_blank">Wikipedia — Gebäudereinigung</a></p>
    </div>
  </section>`;

  const conclusion = `
  <section class="section" id="fazit">
    <div class="container conclusion-block">
      <h2>Fazit — Ihr Gebäudeservice in Neuwied</h2>
      <p>Tairovic Gebäudeservice vereint <strong>Gebäudereinigung</strong>, <strong>Hausmeisterservice</strong>, <strong>Gartenpflege</strong> und <strong>Winterdienst</strong> unter einem Dach — deshalb sparen Hausverwaltungen und Eigentümer Zeit, Kosten und Abstimmungsaufwand. Zudem profitieren Sie von regionaler Erreichbarkeit, persönlicher Betreuung durch die Familie Tairovic und dokumentierten Reinigungsprozessen. <em>Kurz gesagt:</em> Wer in Neuwied und Umgebung Wert auf saubere, sichere und gepflegte Immobilien legt, findet hier einen verlässlichen Partner — <a href="/kontakt" class="navlink text-link-gold" data-page="kontakt">jetzt unverbindlich anfragen</a>.</p>
    </div>
  </section>`;

  html = html.replace("</main>", `${takeaways}${conclusion}\n</main>`);

  return html;
}

function patchImages(html) {
  const jpgToWebp = [
    "hero-staff-window-v2.jpg",
    "service-reinigung.jpg",
    "service-hausmeister.jpg",
    "service-garten.jpg",
    "work-foto.jpg",
  ];

  for (const jpg of jpgToWebp) {
    const webp = jpg.replace(/\.jpe?g$/i, ".webp");
    const re = new RegExp(
      `<img src="/demo/tairovic-dark-verzija/assets/${jpg.replace(".", "\\.")}[^"]*"([^>]*)>`,
      "g",
    );
    html = html.replace(re, (match, attrs) => {
      if (match.includes("<picture>")) return match;
      const w = attrs.match(/width="(\d+)"/);
      const h = attrs.match(/height="(\d+)"/);
      const width = w ? w[1] : "900";
      const height = h ? h[1] : "600";
      const altMatch = match.match(/alt="([^"]*)"/);
      const alt = altMatch ? altMatch[1] : "";
      return `<picture><source srcset="/demo/tairovic-dark-verzija/assets/${webp}" type="image/webp"><img src="/demo/tairovic-dark-verzija/assets/${webp}" alt="${alt}" width="${width}" height="${height}"${attrs.replace(/\s*(width|height|src)="[^"]*"/g, "")}></picture>`;
    });
  }

  html = html.replace(
    'src="/demo/tairovic-dark-verzija/assets/hero-staff-window-v2.jpg?v=3"',
    'src="/demo/tairovic-dark-verzija/assets/hero-staff-window-v2.webp"',
  );

  if (!html.includes("galerie-lightbox-img")) {
    /* noop */
  } else {
    html = html.replace(
      '<img src="" alt="" id="galerie-lightbox-img" decoding="async">',
      '<img src="" alt="" id="galerie-lightbox-img" width="1200" height="800" decoding="async">',
    );
  }

  html = html.replace(
    '<script src="/demo/tairovic-dark-verzija/assets/site-routes.js"></script>',
    "",
  );
  html = html.replace(
    '<script src="/demo/tairovic-dark-verzija/assets/tairovic-seo.js"></script>',
    "",
  );
  html = html.replace(
    '<script src="/demo/tairovic-dark-verzija/assets/site-routes.js" defer></script>',
    "",
  );

  return html;
}

function expandThinSections(html) {
  const expansions = [
    {
      find: `<h2>Projektbeispiele &amp; Galerie</h2>
        <p class="page-hero-intro" style="margin-top:0">Ein Einblick in unsere Arbeit vor Ort. Klicken Sie auf ein Bild für die Vollansicht.</p>`,
      replace: `<h2>Projektbeispiele &amp; Galerie</h2>
        <p class="page-hero-intro" style="margin-top:0">Ein Einblick in unsere Arbeit vor Ort — deshalb dokumentieren wir Vorher-Nachher-Ergebnisse aus Treppenhausreinigung, Grundreinigung und Spezialreinigung in Neuwied. Zudem sehen Sie typische Einsatzszenarien für Wohnanlagen, Schulen und Gewerbeobjekte; außerdem können Sie jedes Bild für die Vollansicht öffnen. <strong>Ergebnis:</strong> transparente Qualität statt leerer Versprechen.</p>`,
    },
    {
      find: `<h2>Vorher-Nachher, Video &amp; Projektbeispiele</h2>
        <p style="color:#b9c3d0;line-height:1.75;max-width:560px;margin:0 auto 20px">Alle Fotos, Videos und Arbeitsergebnisse finden Sie auf unserer Übersichtsseite — Gebäudereinigung, Hausmeisterservice, Gartenpflege und Winterdienst.</p>`,
      replace: `<h2>Vorher-Nachher, Video &amp; Projektbeispiele</h2>
        <p style="color:#b9c3d0;line-height:1.75;max-width:560px;margin:0 auto 20px">Alle Fotos, Videos und Arbeitsergebnisse finden Sie auf unserer Übersichtsseite — deshalb bündeln wir Gebäudereinigung, Hausmeisterservice, Gartenpflege und Winterdienst an einem Ort. Zudem zeigen wir echte Objekte aus Neuwied und Umgebung; außerdem können Sie Leistungsumfang und Qualitätsstandard vor der Beauftragung einschätzen. <strong>Praxis-Tipp:</strong> Vergleichen Sie Vorher- und Nachher-Bilder für Treppenhäuser und Gemeinschaftsflächen.</p>`,
    },
    {
      find: `<h2>Gebäudereinigung in Neuwied &amp; Umgebung</h2>
        <p class="page-hero-intro" style="margin-top:0">Tairovic Gebäudeservice bietet professionelle <strong style="color:#fff">Gebäudereinigung Neuwied</strong> für Wohnanlagen, Schulen, Gewerbe und Privatobjekte — mit Einsätzen auch Richtung Koblenz, Andernach und Bendorf nach Absprache.</p>`,
      replace: `<h2>Gebäudereinigung in Neuwied &amp; Umgebung</h2>
        <p class="page-hero-intro" style="margin-top:0">Tairovic Gebäudeservice bietet professionelle <strong style="color:#fff">Gebäudereinigung Neuwied</strong> für Wohnanlagen, Schulen, Gewerbe und Privatobjekte — deshalb planen wir Intervalle, Zugänge und Leistungskataloge passend zum Objekt. Zudem sind Einsätze Richtung Koblenz, Andernach und Bendorf nach Absprache möglich; außerdem kombinieren wir Unterhaltsreinigung, Grundreinigung und Treppenhausreinigung flexibel. <em>Ergebnis:</em> dauerhaft gepflegte Immobilien ohne Mehrfach-Anbieter.</p>
        <table class="data-table" aria-label="Leistungsvergleich Gebäudereinigung">
          <thead><tr><th>Leistung</th><th>Typischer Turnus</th><th>Zielgruppe</th></tr></thead>
          <tbody>
            <tr><td>Treppenhausreinigung</td><td>täglich / wöchentlich</td><td>Wohnanlagen</td></tr>
            <tr><td>Grundreinigung</td><td>1–2× jährlich</td><td>Gewerbe, Schulen</td></tr>
            <tr><td>Spezialreinigung</td><td>nach Bedarf</td><td>Verwaltungen</td></tr>
          </tbody>
        </table>`,
    },
    {
      find: `<h2>Hausmeisterservice in Neuwied</h2>
        <p class="page-hero-intro" style="margin-top:0">Als <strong style="color:#fff">Hausmeisterservice Neuwied</strong> und <strong style="color:#fff">Hausmeisterdienst Neuwied</strong> betreuen wir Objekte mit Objektkontrolle, Technik und schnellen Einsätzen — regional, auch mit Anbindung an Koblenz, Andernach und Bendorf.</p>`,
      replace: `<h2>Hausmeisterservice in Neuwied</h2>
        <p class="page-hero-intro" style="margin-top:0">Als <strong style="color:#fff">Hausmeisterservice Neuwied</strong> betreuen wir Objekte mit Objektkontrolle, Technik und schnellen Einsätzen — deshalb melden wir Mängel frühzeitig und halten Allgemeinflächen funktionsfähig. Zudem sind kurze Wege in Neuwied, Koblenz, Andernach und Bendorf möglich; außerdem lassen sich Hausmeisterdienst und Gebäudereinigung aus einer Hand kombinieren. <strong>Vorteil:</strong> ein Ansprechpartner statt vieler Einzelverträge.</p>`,
    },
    {
      find: `<h2>Warum Tairovic Winterdienst?</h2>`,
      replace: `<h2>Warum Tairovic Winterdienst?</h2>
        <p class="page-hero-intro" style="margin-top:0">Im Winter zählt jede Minute — deshalb kombinieren wir Schneeräumung, Streudienst und Bereitschaft für Wohnanlagen und Gewerbe in Neuwied. Zudem dokumentieren wir Einsätze nachvollziehbar; außerdem lassen sich Winterdienst und Hausmeisterservice sinnvoll bündeln. <strong>Sicherheit first:</strong> begehbare Wege für Mieter, Kunden und Lieferanten.</p>`,
    },
  ];

  for (const { find, replace } of expansions) {
    html = html.replace(find, replace);
  }
  return html;
}

function patchScriptsDefer(html) {
  html = html.replace(
    '<script src="/demo/tairovic-dark-verzija/assets/consent.js" defer></script>',
    '<script defer src="/demo/tairovic-dark-verzija/assets/consent.js"></script>',
  );
  return html;
}

async function main() {
  await convertJpgsToWebp();
  await createFavicon();

  let html = fs.readFileSync(INDEX, "utf8");
  html = extractCssAndJs(html);
  html = patchHead(html);
  html = patchH1AndContent(html);
  html = patchImages(html);
  html = expandThinSections(html);
  html = patchScriptsDefer(html);

  fs.writeFileSync(INDEX, html);
  console.log("index.html optimized");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
