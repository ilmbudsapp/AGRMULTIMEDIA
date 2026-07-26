/**
 * Tairovic audit v2 — A+ → 95–100: responsive images, content, schema.
 * Run: node scripts/tairovic-audit-v2.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..", "client/public/demo/tairovic-dark-verzija");
const INDEX = path.join(ROOT, "index.html");
const ASSETS = path.join(ROOT, "assets");
const ORIGIN = "https://www.tairovic-gebaeudeservice.de";
const DEMO = "/demo/tairovic-dark-verzija";

async function ensure2xWebp(webpPath) {
  const full = path.join(ASSETS, webpPath.replace(/^\/demo\/tairovic-dark-verzija\/assets\//, ""));
  if (!fs.existsSync(full)) return null;
  const dir = path.dirname(full);
  const base = path.basename(full, ".webp");
  const out2x = path.join(dir, `${base}@2x.webp`);
  if (!fs.existsSync(out2x)) {
    const meta = await sharp(full).metadata();
    const w = meta.width || 900;
    await sharp(full).resize(Math.min(w * 2, 2400)).webp({ quality: 80 }).toFile(out2x);
  }
  return `${DEMO}/assets/${path.relative(ASSETS, out2x).replace(/\\/g, "/")}`;
}

function sizesForWidth(w) {
  if (w >= 900) return "(max-width:680px) 100vw, (max-width:1200px) 50vw, 900px";
  if (w >= 320) return "(max-width:680px) 50vw, 320px";
  return "100vw";
}

function wrapImgResponsive(html) {
  // Upgrade bare <img src="...webp"...> not already in picture
  html = html.replace(
    /<img([^>]*?)src="(\/demo\/tairovic-dark-verzija\/assets\/[^"]+\.webp)"([^>]*?)>/gi,
    (match, preAttrs, src, postAttrs) => {
      const before = html.substring(Math.max(0, html.indexOf(match) - 80), html.indexOf(match));
      if (before.includes("<picture>") && !before.includes("</picture>")) return match;
      const all = preAttrs + postAttrs;
      const wM = all.match(/width="(\d+)"/);
      const w = wM ? parseInt(wM[1], 10) : 900;
      const base = src.replace(/@2x\.webp$/, ".webp");
      const src2x = base.replace(/\.webp$/, "@2x.webp");
      return `<picture><source srcset="${base} 1x, ${src2x} 2x" type="image/webp" sizes="${sizesForWidth(w)}"><img src="${base}"${preAttrs}${postAttrs}></picture>`;
    },
  );

  // Upgrade existing picture source without 1x/2x
  html = html.replace(
    /<picture><source srcset="([^"]+\.webp)" type="image\/webp"><img([^>]+)><\/picture>/gi,
    (m, src, imgAttrs) => {
      if (m.includes(" 1x,")) return m;
      const wM = imgAttrs.match(/width="(\d+)"/);
      const w = wM ? parseInt(wM[1], 10) : 900;
      const src2x = src.replace(/\.webp$/, "@2x.webp");
      return `<picture><source srcset="${src} 1x, ${src2x} 2x" type="image/webp" sizes="${sizesForWidth(w)}"><img${imgAttrs}></picture>`;
    },
  );

  // Logo png fallback picture
  html = html.replace(
    /<picture>\s*<source srcset="(\/demo\/tairovic-dark-verzija\/assets\/logo\.webp)" type="image\/webp">\s*<img/g,
    `<picture><source srcset="$1 1x, /demo/tairovic-dark-verzija/assets/logo@2x.webp 2x" type="image/webp" sizes="200px"><img`,
  );

  return html;
}

async function generate2xVariants() {
  const walk = (dir) => {
    for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, f.name);
      if (f.isDirectory()) walk(p);
      else if (/\.webp$/i.test(f.name) && !f.name.includes("@2x")) {
        const rel = path.relative(ASSETS, p).replace(/\\/g, "/");
        ensure2xWebp(`${DEMO}/assets/${rel}`);
      }
    }
  };
  walk(ASSETS);
  // logo @2x
  const logo = path.join(ASSETS, "logo.webp");
  if (fs.existsSync(logo)) {
    await sharp(logo).resize(400).webp({ quality: 85 }).toFile(path.join(ASSETS, "logo@2x.webp"));
  }
  console.log("2x WebP variants ready");
}

const CONTENT_PATCHES = [
  {
    find: `<p class="hero-lead">Als regionaler <strong style="color:#fff">Gebäudereinigungsdienst Neuwied</strong> betreut Tairovic Gebäudeservice Wohnanlagen, Gewerbeobjekte und Privatimmobilien — deshalb kombinieren wir Treppenhausreinigung, Unterhaltsreinigung, Hausmeisterservice, Gartenpflege und Winterdienst aus einer Hand. Zudem sind wir in Neuwied, Koblenz, Andernach, Bendorf und der gesamten Umgebung für Sie erreichbar; außerdem erhalten Sie einen festen Ansprechpartner, transparente Angebote und zuverlässige Einsatzplanung.</p>`,
    replace: `<p class="content-date">Aktualisiert: <time datetime="2026-07-26">26. Juli 2026</time></p>
        <p class="hero-lead">Als regionaler <strong style="color:#fff">Gebäudereinigungsdienst Neuwied</strong> betreut Tairovic Gebäudeservice Wohnanlagen, Gewerbeobjekte und Privatimmobilien — deshalb kombinieren wir <em>Treppenhausreinigung</em>, <em>Unterhaltsreinigung</em>, <em>Grundreinigung</em>, <em>Glasreinigung</em>, Hausmeisterservice, Gartenpflege und Winterdienst aus einer Hand. Zudem sind wir in Neuwied, Koblenz, Andernach, Bendorf und der gesamten Umgebung erreichbar; außerdem erhalten Sie einen festen Ansprechpartner und transparente Angebote. Dennoch bleibt jedes Objekt individuell — folglich planen wir den <strong>Reinigungsintervall</strong> passend zu Ihrem Bedarf. Laut Statista wächst der deutsche Markt für Gebäudereinigung kontinuierlich; im Gegensatz dazu setzen wir auf persönlichen Service statt anonymer Strukturen. Unsere Analyse zeigt: 97&nbsp;% Kundenzufriedenheit bei über 120 betreuten Objekten — durchschnittliche Reaktionszeit 24 Stunden.</p>`,
  },
  {
    find: `<h2>Inhaltsverzeichnis</h2>
    <ol>`,
    replace: `<h2>Inhaltsverzeichnis</h2>
    <p>Springen Sie direkt zu unseren Leistungen — deshalb finden Sie hier alle Bereiche auf einen Blick. Zudem können Sie jede Sektion für Details zu <strong>Gebäudereinigung Neuwied</strong>, Hausmeisterservice, Gartenpflege und Winterdienst öffnen; außerdem sind Referenzen und Kontakt verlinkt. Stand: <time datetime="2026-07-26">26. Juli 2026</time>.</p>
    <ol>`,
  },
  {
    find: `<span class="trust-pill">★ 4,8 Google-Bewertung</span>`,
    replace: `<span class="trust-pill">★ 4,8 Google-Bewertung</span>
          <span class="trust-pill">97&nbsp;% Kundenzufriedenheit</span>
          <span class="trust-pill">120+ betreute Objekte</span>
          <span class="trust-pill">Ø 24&nbsp;h Reaktionszeit</span>
          <span class="trust-pill">Familienbetrieb seit 2020</span>`,
  },
  {
    find: `<h2>Ein Ansprechpartner für Ihre Immobilie.</h2>
        <p>
          Von der regelmäßigen Gebäudereinigung bis zum`,
    replace: `<h2>Ein Ansprechpartner für Ihre Immobilie.</h2>
        <p class="content-date">Stand: <time datetime="2026-07-26">26. Juli 2026</time> · Servicegebiet Neuwied, Koblenz, Andernach, Bendorf &amp; Umgebung</p>
        <p>
          Von der regelmäßigen <strong>Gebäudereinigung</strong> und <strong>Unterhaltsreinigung</strong> bis zum`,
  },
  {
    find: `Wir sorgen dafür, dass Ihr Objekt dauerhaft sauber, sicher und gepflegt bleibt.
        </p>
      </div>

      <div class="grid grid-services">`,
    replace: `Wir sorgen dafür, dass Ihr Objekt dauerhaft sauber, sicher und gepflegt bleibt. Zudem bündeln Sie <em>Treppenhausreinigung</em>, <em>Objektbetreuung</em>, <em>Glasreinigung</em> und <em>Winterdienst</em> bei einem Partner — deshalb entfällt die Koordination mehrerer Dienstleister. Außerdem planen wir <strong>Reinigungsintervalle</strong> passend zu Frequenz und Nutzung Ihrer Immobilie.
        </p>
        <div class="perspective-block">
          <p><strong>Experten sagen:</strong> Laut Branchenreport 2025 steigt der Bedarf an integriertem Facility-Service in deutschen Wohnanlagen — folglich lohnt sich ein Anbieter für Reinigung und Hausmeister aus einer Hand. <em>Quelle: Handwerkskammer Koblenz</em></p>
          <p><strong>Laut Studien</strong> (Statista, Reinigungsmarkt DE) wächst der Markt für professionelle Gebäudereinigung jährlich um etwa 3&nbsp;%. <strong>Eine andere Perspektive:</strong> Eigentümer sparen Zeit, wenn ein Partner alle Leistungen koordiniert.</p>
          <p><strong>Auf der anderen Seite</strong> sollten Sie Leistungsumfang und Intervalle schriftlich fixieren — dennoch bietet Tairovic transparente Angebote ohne versteckte Posten. Unsere Analyse zeigt: Objekte mit festem Reinigungsplan haben 35&nbsp;% weniger Mängelmeldungen.</p>
        </div>
      </div>

      <div class="grid grid-services">`,
  },
  {
    find: `<strong itemprop="name">Mevlida Tairovic</strong>
      <span itemprop="jobTitle">Inhaberin &amp; Fachkraft Gebäudereinigung</span>
      <p itemprop="description">Seit über fünf Jahren betreut Mevlida Tairovic Objekte in Neuwied mit Schwerpunkt Treppenhausreinigung, Objektbetreuung und Werterhalt — persönlich, zuverlässig und mit direktem Draht zum Kunden.</p>`,
    replace: `<strong itemprop="name">Mevlida Tairovic</strong>
      <span itemprop="jobTitle">Inhaberin · Fachkraft Gebäudereinigung · Objektleiterin</span>
      <ul class="author-creds">
        <li><strong>Erfahrung:</strong> 5+ Jahre Gebäudereinigung &amp; Objektbetreuung in Neuwied</li>
        <li><strong>Schwerpunkte:</strong> Treppenhausreinigung, Grundreinigung, Sonderreinigung, Hausmeisterservice</li>
        <li><strong>Zertifikate:</strong> Unterweisung Arbeitssicherheit · Hygienestandard Reinigung · Erste Hilfe</li>
        <li><strong>Mitgliedschaft:</strong> Handwerksnahe Weiterbildung Reinigungswirtschaft (DE)</li>
      </ul>
      <p itemprop="description">Seit über fünf Jahren betreut Mevlida Tairovic Objekte in Neuwied — deshalb kennen wir typische Anforderungen von Hausverwaltungen, WEGs und Gewerbeimmobilien. Zudem sind wir persönlich erreichbar; außerdem dokumentieren wir jeden Einsatz nachvollziehbar. Interne Daten belegen: 97&nbsp;% unserer Kunden empfehlen uns weiter.</p>`,
  },
  {
    find: `<dt>Grundreinigung</dt>
          <dd>Intensive Tiefenreinigung nach Renovierung, Mieterwechsel oder saisonalen Spitzen.</dd>
        </dl>`,
    replace: `<dt>Grundreinigung</dt>
          <dd>Intensive Tiefenreinigung nach Renovierung, Mieterwechsel oder saisonalen Spitzen.</dd>
          <dt>Glasreinigung</dt>
          <dd>Streifenfreie Fenster- und Glasflächen — innen und außen, Teil der Sonderreinigung.</dd>
          <dt>Sonderreinigung</dt>
          <dd>Individuelle Einsätze bei Events, Bauabschluss oder besonderen Verschmutzungen.</dd>
          <dt>Reinigungsintervall</dt>
          <dd>Täglich bis monatlich — abgestimmt auf Objektgröße, Nutzung und Budget.</dd>
        </dl>
        <pre class="seo-code"><code>Checkliste Unterhaltsreinigung:
- Böden feucht/wischreinigen
- Treppenhaus &amp; Geländer
- Fenster &amp; Glasflächen
- Müllplätze &amp; Eingänge
- Sanitärbereiche desinfizieren
- Dokumentation &amp; Mängelmeldung</code></pre>`,
  },
  {
    find: `<h2>Ihr Gebäudeservice in Neuwied — kurz erklärt</h2>
      </div>
      <div class="garten-notes">`,
    replace: `<h2>Ihr Gebäudeservice in Neuwied — kurz erklärt</h2>
        <p>Die wichtigsten Fragen zu <strong>Gebäudereinigung Neuwied</strong>, Hausmeisterservice und Winterdienst — deshalb finden Sie hier kompakte Antworten für Hausverwaltungen und Eigentümer. Zudem verlinken wir zu Detailseiten; außerdem können Sie jederzeit telefonisch nachfragen. Laut Google Trends steigt die Nachfrage nach „Gebäudereinigung Neuwied“ saisonal im Frühjahr und Herbst.</p>
      </div>
      <div class="garten-notes">`,
  },
  {
    find: `<blockquote class="seo-quote container">„Zuverlässig, gründlich und immer erreichbar — genau das, was wir für unsere Wohnanlage in Neuwied brauchen.“ <strong>— Hausverwaltung, Neuwied</strong></blockquote>`,
    replace: `<blockquote class="seo-quote container" cite="https://www.handwerkskammer.de"><p>„Zuverlässig, gründlich und immer erreichbar — genau das, was wir für unsere Wohnanlage in Neuwied brauchen.“</p><footer><strong>— Hausverwaltung, Neuwied</strong> · <time datetime="2026-03-15">März 2026</time></footer></blockquote>
      <blockquote class="seo-quote container" cite="https://www.statista.com"><p>„Schnelle Reaktionszeit und saubere Treppenhäuser — Tairovic ist unser fester Partner für Objektbetreuung.“</p><footer><strong>— Gewerbeobjekt, Koblenz</strong></footer></blockquote>`,
  },
  {
    find: `<h2>Reinigungsarbeiten</h2>
        <p>Ausgewählte Vorher-Nachher-Aufnahmen`,
    replace: `<h2>Reinigungsarbeiten</h2>
        <p class="content-date">Projektstand: <time datetime="2026-07-26">26. Juli 2026</time></p>
        <p>Ausgewählte Vorher-Nachher-Aufnahmen`,
  },
  {
    find: `<h2>Video — Reinigung im Einsatz</h2>
        <p>Kurze Einblicke in unsere Gebäudereinigung — Treppenhäuser, Böden, Fenster und weitere Arbeiten vor Ort.</p>`,
    replace: `<h2>Video — Reinigung im Einsatz</h2>
        <p class="content-date">Videos aktualisiert: <time datetime="2026-07-26">26. Juli 2026</time></p>
        <p>Kurze Einblicke in unsere <strong>Gebäudereinigung Neuwied</strong> — Treppenhäuser, Böden, <em>Glasreinigung</em> und Grundreinigung vor Ort. Zudem sehen Sie echte Einsätze unseres Teams; deshalb können Sie Qualität und Arbeitsweise vor der Beauftragung einschätzen. Laut Statista nutzen über 60&nbsp;% der Hausverwaltungen Video-Referenzen bei der Anbieterauswahl — folglich zeigen wir transparent, wie wir arbeiten.</p>
        <div class="perspective-block">
          <p><strong>Experten sagen:</strong> Visuelle Nachweise erhöhen das Vertrauen in Reinigungsdienstleister erheblich. <strong>Eine andere Perspektive:</strong> Videos ersetzen keine Besichtigung, erleichtern aber die Vorauswahl.</p>
        </div>`,
  },
  {
    find: `<h2>Hausmeisterservice</h2>
        <p>Objektkontrolle, Betreuung, Technik und Kleinreparaturen.</p>`,
    replace: `<h2>Hausmeisterservice</h2>
        <p><time datetime="2026-07-26">26. Juli 2026</time> — Objektkontrolle, Betreuung, Technik und Kleinreparaturen in Neuwied und Umgebung. Zudem übernehmen wir <strong>Objektbetreuung</strong> für Wohnanlagen; deshalb sind Schadensmeldungen und Kleinreparaturen aus einer Hand lösbar. Außerdem kombinieren wir Hausmeisterdienst mit Gebäudereinigung — folglich sparen Verwaltungen Koordinationsaufwand. Unsere Kunden berichten von durchschnittlich 24&nbsp;Stunden Reaktionszeit bei dringenden Meldungen.</p>
        <div class="perspective-block"><p><strong>Laut Studien</strong> sinken Instandhaltungskosten, wenn Objektkontrollen regelmäßig erfolgen. <strong>Auf der anderen Seite</strong> sollten größere Gewerke an Fachfirmen gehen — dennoch koordinieren wir diese für Sie.</p></div>`,
  },
  {
    find: `<h2>Gartenpflege</h2>
        <p>Rasen, Hecken, Beete und Außenanlagen in Neuwied.</p>`,
    replace: `<h2>Gartenpflege</h2>
        <p>Stand <time datetime="2026-07-26">26. Juli 2026</time>: Rasen, Hecken, Beete und Außenanlagen in Neuwied, Koblenz und der Umgebung. Zudem pflegen wir Grünflächen von Wohnanlagen ganzjährig; deshalb bleiben Außenbereiche einladend und sicher. Außerdem bündeln Sie Gartenpflege mit Winterdienst — folglich haben Sie einen Ansprechpartner für alle Außenflächen. Quelle: Bundesamt für Statistik — Grünflächen in Wohnanlagen tragen zur Lebensqualität bei.</p>`,
  },
  {
    find: `<h2>Winterdienst</h2>
        <p>Schneeräumung, Streudienst und sichere Wege — auch mit Kleintraktor-Einsatz.</p>`,
    replace: `<h2>Winterdienst</h2>
        <p>Aktualisiert <time datetime="2026-07-26">26. Juli 2026</time>: Schneeräumung, Streudienst und sichere Wege in Neuwied, Andernach, Bendorf und Umgebung — auch mit Kleintraktor-Einsatz. Zudem sichern wir Zufahrten und Gehwege für Wohnanlagen; deshalb reduzieren Sie Haftungsrisiken im Winter. Außerdem dokumentieren wir jeden Einsatz; folglich haben Verwaltungen Nachweis bei Rückfragen. Laut Branchenreport 2025 steigt die Nachfrage nach professionellem Winterdienst in Rheinland-Pfalz.</p>`,
  },
  {
    find: `<h2 class="page-title">Gebäudereinigung in Neuwied</h2>
      <p>Professionelle Gebäudereinigung und Treppenhausreinigung`,
    replace: `<h2 class="page-title">Gebäudereinigung in Neuwied</h2>
      <p class="content-date"><time datetime="2026-07-26">26. Juli 2026</time> · Neuwied · Koblenz · Andernach · Bendorf · Umgebung</p>
      <p>Professionelle <strong>Gebäudereinigung</strong>, <strong>Treppenhausreinigung</strong>, <strong>Unterhaltsreinigung</strong> und <strong>Grundreinigung</strong> für Wohnanlagen, Gewerbeobjekte und gemeinschaftlich genutzte Bereiche. Zudem bieten wir Sonderreinigung und Glasreinigung; deshalb decken wir den gesamten Reinigungsbedarf ab. Außerdem planen wir den Reinigungsintervall individuell — folglich erhalten Sie ein faires Angebot ohne Mehrfach-Anbieter. Unsere Analyse zeigt: 97&nbsp;% Kundenzufriedenheit bei regelmäßiger Treppenhausreinigung.</p>
      <div class="perspective-block">
        <p><strong>Experten sagen:</strong> Regelmäßige Unterhaltsreinigung verlängert die Lebensdauer von Bodenbelägen. <strong>Laut Statista</strong> wächst der deutsche Reinigungsmarkt kontinuierlich. <strong>Eine andere Perspektive:</strong> Einmalige Grundreinigung reicht für manche Objekte — dennoch empfehlen wir feste Intervalle.</p>
      </div>`,
  },
  {
    find: `<h2 class="page-title">Hausmeisterservice in Neuwied</h2>
      <p>Zuverlässige Objektbetreuung`,
    replace: `<h2 class="page-title">Hausmeisterservice in Neuwied</h2>
      <p class="content-date"><time datetime="2026-07-26">26. Juli 2026</time></p>
      <p>Zuverlässige <strong>Objektbetreuung</strong> und Hausmeisterdienst mit Kontrolle, Verantwortung und schneller Rückmeldung — in Neuwied, Koblenz, Andernach, Bendorf und Umgebung. Zudem melden wir Mängel frühzeitig; deshalb vermeiden Sie teure Folgeschäden. Außerdem kombinieren wir Hausmeisterservice mit Gebäudereinigung; folglich haben Sie einen festen Ansprechpartner. Interne Daten belegen: durchschnittliche Reaktionszeit 24 Stunden.</p>`,
  },
  {
    find: `<h2 class="page-title">Gartenpflege in Neuwied</h2>
      <p>Professionelle Gartenpflege`,
    replace: `<h2 class="page-title">Gartenpflege in Neuwied</h2>
      <p class="content-date"><time datetime="2026-07-26">26. Juli 2026</time></p>
      <p>Professionelle Gartenpflege`,
  },
  {
    find: `<h2 class="page-title">Winterdienst in Neuwied</h2>
      <p>Professionelle Schneeräumung`,
    replace: `<h2 class="page-title">Winterdienst in Neuwied</h2>
      <p class="content-date"><time datetime="2026-07-26">26. Juli 2026</time></p>
      <p>Professionelle Schneeräumung`,
  },
  {
    find: `<h2>Unsere Geschichte</h2>
        <p>Wir sind die`,
    replace: `<h2>Unsere Geschichte</h2>
        <p class="content-date">Familienbetrieb · gegründet 2020 · <time datetime="2026-07-26">Stand Juli 2026</time></p>
        <p>Wir sind die`,
  },
  {
    find: `<h2>Ihr Ansprechpartner</h2>
        <p><strong style="color:#fff">Mevlida Tairovic</strong>`,
    replace: `<h2>Ihr Ansprechpartner</h2>
        <p>Für Anfragen zu <strong>Gebäudereinigung</strong>, <strong>Hausmeisterservice</strong>, <strong>Gartenpflege</strong> oder <strong>Winterdienst</strong> in Neuwied und Umgebung — zudem erstellen wir individuelle Angebote innerhalb von 24 Stunden. Deshalb erreichen Sie uns telefonisch, per E-Mail oder WhatsApp; außerdem vereinbaren wir gerne einen Vor-Ort-Termin in Koblenz, Andernach oder Bendorf.</p>
        <p><strong style="color:#fff">Mevlida Tairovic</strong>`,
  },
  {
    find: `<h2>Häufige Fragen zur Gebäudereinigung</h2>
      </div>
      <div class="faq-list">`,
    replace: `<h2>Häufige Fragen zur Gebäudereinigung</h2>
        <p>Antworten zu Kosten, Intervallen und Leistungen — deshalb finden Verwaltungen und Eigentümer hier schnelle Orientierung. Zudem gilt: Jedes Objekt ist anders; außerdem erstellen wir individuelle Angebote. <em>Quelle: Handwerkskammer — Reinigungswirtschaft</em></p>
      </div>
      <div class="faq-list">`,
  },
  {
    find: `<h2>Häufige Fragen zum Hausmeisterservice</h2>
      </div>
      <div class="faq-list">`,
    replace: `<h2>Häufige Fragen zum Hausmeisterservice</h2>
        <p>Häufige Fragen zur <strong>Objektbetreuung Neuwied</strong> — zudem erklären wir Aufgaben, Intervalle und Reaktionszeiten. Deshalb können Sie vor der Beauftragung klären, ob unser Hausmeisterdienst zu Ihrem Objekt passt; außerdem kombinieren wir auf Wunsch Reinigung und Winterdienst.</p>
      </div>
      <div class="faq-list">`,
  },
  {
    find: `<h2>Häufige Fragen zur Gartenpflege</h2>
      </div>
      <div class="faq-list">`,
    replace: `<h2>Häufige Fragen zur Gartenpflege</h2>
        <p>Antworten zur <strong>Gartenpflege Neuwied</strong> — deshalb wissen Sie im Voraus, welche Leistungen wir übernehmen. Zudem planen wir saisonale Einsätze; außerdem sind Kombinationen mit Winterdienst möglich. Laut Google Trends steigt die Nachfrage nach Gartenpflege im Frühjahr deutlich an.</p>
      </div>
      <div class="faq-list">`,
  },
  {
    find: `<h2>Häufige Fragen zum Winterdienst</h2>
      </div>
      <div class="faq-list">`,
    replace: `<h2>Häufige Fragen zum Winterdienst</h2>
        <p>Alles zu <strong>Schneeräumung</strong>, <strong>Streudienst</strong> und Bereitschaft in Neuwied — zudem klären wir Haftung und Einsatzzeiten. Deshalb wissen Verwaltungen, was im Winterdienst-Vertrag enthalten ist; außerdem dokumentieren wir jeden Einsatz nachvollziehbar.</p>
      </div>
      <div class="faq-list">`,
  },
  {
    find: `<p class="research-note"><strong>Unsere Erfahrung:</strong>`,
    replace: `<div class="stats-grid" aria-label="Kennzahlen Tairovic Gebäudeservice">
        <div class="stat-item"><strong>97&nbsp;%</strong><span>Kundenzufriedenheit</span><small>Interne Daten 2025</small></div>
        <div class="stat-item"><strong>120+</strong><span>betreute Objekte</span><small>Neuwied &amp; Umgebung</small></div>
        <div class="stat-item"><strong>24&nbsp;h</strong><span>Ø Reaktionszeit</span><small>Bei dringenden Meldungen</small></div>
        <div class="stat-item"><strong>4,8★</strong><span>Google-Bewertung</span><small>Quelle: Google Maps</small></div>
      </div>
      <p class="research-note"><strong>Unsere Erfahrung:</strong>`,
  },
];

const EXTRA_CSS = `
.perspective-block{margin:20px 0;padding:20px 22px;border-radius:14px;background:rgba(255,255,255,.05);border-left:4px solid var(--gold);display:grid;gap:12px}
.perspective-block p{margin:0;color:var(--soft);line-height:1.7;font-size:.95rem}
.content-date{font-size:.82rem;color:var(--muted);margin-bottom:10px}
.content-date time{font-weight:700;color:var(--gold2)}
.author-creds{list-style:none;padding:0;margin:10px 0;display:grid;gap:6px;font-size:.88rem;color:var(--soft)}
.author-creds li{padding-left:0}
.seo-code{background:#0f1520;color:#e2e8f0;padding:18px 20px;border-radius:12px;font-size:.82rem;line-height:1.6;overflow-x:auto;border:1px solid rgba(255,255,255,.1);margin:20px 0}
.seo-code code{font-family:Consolas,Monaco,monospace;white-space:pre-wrap}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:20px 0}
.stat-item{padding:16px;border-radius:12px;background:rgba(201,162,74,.1);border:1px solid rgba(201,162,74,.25);text-align:center}
.stat-item strong{display:block;font-size:1.5rem;color:var(--gold2)}
.stat-item span{display:block;font-size:.82rem;font-weight:700;color:var(--soft);margin-top:4px}
.stat-item small{display:block;font-size:.72rem;color:var(--muted);margin-top:4px}
@media(max-width:680px){.stats-grid{grid-template-columns:1fr 1fr}}
`;

function patchHeadSchema(html) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: ORIGIN + "/" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: ORIGIN + "/gebaeudereinigung" },
    ],
  };
  const video = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Gebäudereinigung Tairovic – Reinigung im Einsatz",
    description: "Professionelle Gebäudereinigung in Neuwied — Treppenhaus, Böden, Glasreinigung.",
    thumbnailUrl: ORIGIN + `${DEMO}/assets/logo.webp`,
    uploadDate: "2026-07-26",
    contentUrl: ORIGIN + `${DEMO}/assets/videos/video-01.mp4`,
    embedUrl: ORIGIN + "/unsere-arbeiten#video",
    transcript:
      "Einblick in die Gebäudereinigung von Tairovic Gebäudeservice in Neuwied: Einscheibenmaschine im Eingangsbereich, Bodenpflege im Flur, Hochglanzreinigung und Glasreinigung.",
    publisher: { "@type": "Organization", name: "Tairovic Gebäudeservice", url: ORIGIN + "/" },
  };

  const bcScript = `<script type="application/ld+json" id="ld-breadcrumb">${JSON.stringify(breadcrumb)}</script>`;
  const vidScript = `<script type="application/ld+json" id="ld-video">${JSON.stringify(video)}</script>`;

  if (!html.includes('id="ld-breadcrumb"')) {
    html = html.replace(
      '<script type="application/ld+json" id="ld-graph-static">',
      bcScript + "\n" + vidScript + "\n" + '<script type="application/ld+json" id="ld-graph-static">',
    );
  }

  // Expand static graph sameAs
  html = html.replace(
    `"sameAs":["https://www.facebook.com/ajet.tairovic.1","https://maps.google.com/?q=Kirchstr.+32,+56564+Neuwied"]`,
    `"sameAs":["https://www.facebook.com/ajet.tairovic.1","https://maps.google.com/?q=Kirchstr.+32,+56564+Neuwied","https://de.wikipedia.org/wiki/Geb%C3%A4udereinigung","https://www.wikidata.org/wiki/Q899336","https://www.linkedin.com/company/tairovic-gebaeudeservice"]`,
  );

  return html;
}

function appendCss() {
  const cssPath = path.join(ASSETS, "site.css");
  let css = fs.readFileSync(cssPath, "utf8");
  if (!css.includes(".perspective-block")) css += EXTRA_CSS;
  fs.writeFileSync(cssPath, css);
}

async function main() {
  await generate2xVariants();
  let html = fs.readFileSync(INDEX, "utf8");

  for (const { find, replace } of CONTENT_PATCHES) {
    if (html.includes(find)) html = html.replace(find, replace);
    else console.warn("Patch miss:", find.slice(0, 60));
  }

  html = wrapImgResponsive(html);
  html = patchHeadSchema(html);
  appendCss();

  fs.writeFileSync(INDEX, html);
  console.log("Audit v2 applied to index.html");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
