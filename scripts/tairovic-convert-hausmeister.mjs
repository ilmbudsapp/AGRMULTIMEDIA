import fs from "fs";
import path from "path";
import sharp from "sharp";

const SRC = String.raw`C:\Users\User\Desktop\AJET MATERIJAL I SCREEN\HAUSMEISTER FOTOGRAFIJE`;
const OUT = path.resolve("client/public/demo/tairovic-dark-verzija/assets/hausmeister");

/** [webp filename, source file, caption label, alt] */
const ITEMS = [
  ["hausmeister-01-objektkontrolle.webp", "download (59).jpg", "Objektkontrolle", "Hausmeister — Sichtprüfung im Objekt"],
  ["hausmeister-02-betreuung.webp", "download (61).jpg", "Hausbetreuung", "Hausmeisterservice — Betreuung im Gebäude"],
  ["hausmeister-03-reparatur.webp", "download (72).jpg", "Kleinreparatur", "Hausmeister — kleine Reparaturarbeiten"],
  ["hausmeister-04-technik.webp", "download (80).jpg", "Technik", "Technische Betreuung — Beleuchtung und Anlagen"],
  ["hausmeister-05-aussenbereich.webp", "download (94).jpg", "Außenbereich", "Pflege und Kontrolle der Außenanlagen"],
  ["hausmeister-06-montage.webp", "download (98).jpg", "Montagearbeit", "Hausmeister — Montage und Unterstützung vor Ort"],
  [
    "hausmeister-07-immobilie.webp",
    "download - 2026-06-03T173447.693.jpg",
    "Immobilienbetreuung",
    "Zuverlässige Betreuung der Immobilie",
  ],
];

fs.mkdirSync(OUT, { recursive: true });

for (const [outName, srcName] of ITEMS) {
  const abs = path.join(SRC, srcName);
  if (!fs.existsSync(abs)) throw new Error(`Missing source: ${srcName}`);
  await sharp(abs)
    .rotate()
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(OUT, outName));
  console.log("ok", outName);
}

const base = "/demo/tairovic-dark-verzija/assets/hausmeister/";
const figures = ITEMS.map(([file, , label, alt]) => {
  return `          <figure class="galerie-item">
            <button type="button" class="galerie-thumb" data-full="${base}${file}" aria-label="${label} — Bild vergrößern">
              <img src="${base}${file}" alt="${alt}" width="320" height="108" loading="lazy" decoding="async">
            </button>
            <figcaption class="galerie-cap"><span>${label}</span></figcaption>
          </figure>`;
}).join("\n");

const fragmentPath = path.resolve(
  "client/public/demo/tairovic-dark-verzija/hausmeister-grid.fragment.html",
);
fs.writeFileSync(fragmentPath, figures + "\n");
console.log("Wrote", fragmentPath);
