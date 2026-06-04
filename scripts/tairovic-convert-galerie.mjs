import fs from "fs";
import path from "path";
import sharp from "sharp";

const SRC = String.raw`C:\Users\User\Desktop\AJET MATERIJAL I SCREEN\FOTO`;
const OUT = path.resolve("client/public/demo/tairovic-dark-verzija/assets/galerie");

/** [webp filename, source jpg, tag: vorher|reinigung|nachher, label, alt] */
const GALLERY = [
  ["galerie-01-vorher-treppen-buerste.webp", "download (17).jpg"],
  ["galerie-02-nachher-treppen.webp", "download (16).jpg"],
  ["galerie-03-nachher-treppen-politur.webp", "download (96).jpg"],
  ["galerie-04-vorher-wand.webp", "download (43).jpg"],
  ["galerie-05-reinigung-wand.webp", "download (42).jpg"],
  ["galerie-06-nachher-wand.webp", "download (45).jpg"],
  ["galerie-07-vorher-balkon.webp", "download - 2026-06-03T173504.325.jpg"],
  ["galerie-08-nachher-balkon.webp", "download - 2026-06-03T173456.237.jpg"],
  ["galerie-09-vorher-tuer.webp", "download - 2026-06-03T173120.936.jpg"],
  ["galerie-10-nachher-tuer.webp", "download - 2026-06-03T173111.561.jpg"],
  ["galerie-11-vorher-ausgang.webp", "download (69).jpg"],
  ["galerie-12-reinigung-fenster.webp", "download (63).jpg"],
  ["galerie-13-nachher-fenster.webp", "download - 2026-06-03T173517.060.jpg"],
  ["galerie-14-nachher-aufzug.webp", "download (38).jpg"],
  ["galerie-15-nachher-flur-fliesen.webp", "download (34).jpg"],
  ["galerie-16-nachher-korridor.webp", "download (20).jpg"],
  ["galerie-17-nachher-flur-politur.webp", "download (66).jpg"],
  ["galerie-18-nachher-bad.webp", "download (64).jpg"],
  ["galerie-19-nachher-klassenzimmer.webp", "download - 2026-06-03T173106.729.jpg"],
  ["galerie-20-nachher-gemeinschaft.webp", "download - 2026-06-03T173050.674.jpg"],
];

const META = {
  "galerie-01-vorher-treppen-buerste.webp": { tag: "vorher", label: "Treppenhaus", alt: "Treppenhaus-Reinigung mit Maschine und Bürste — Vorher" },
  "galerie-02-nachher-treppen.webp": { tag: "nachher", label: "Treppenhaus", alt: "Gereinigtes Treppenhaus — Nachher" },
  "galerie-03-nachher-treppen-politur.webp": { tag: "nachher", label: "Treppenhaus", alt: "Poliertes Treppenhaus — Nachher" },
  "galerie-04-vorher-wand.webp": { tag: "vorher", label: "Wandfläche", alt: "Wand mit Flecken vor der Reinigung" },
  "galerie-05-reinigung-wand.webp": { tag: "arbeit", label: "Wandfläche", alt: "Manuelle Wandreinigung" },
  "galerie-06-nachher-wand.webp": { tag: "nachher", label: "Technikbereich", alt: "Saubere Wand nach der Reinigung" },
  "galerie-07-vorher-balkon.webp": { tag: "vorher", label: "Balkon", alt: "Balkonboden vor der Reinigung" },
  "galerie-08-nachher-balkon.webp": { tag: "nachher", label: "Balkon", alt: "Gereinigter Balkon" },
  "galerie-09-vorher-tuer.webp": { tag: "vorher", label: "Tür & Rahmen", alt: "Tür und Rahmen vor der Reinigung" },
  "galerie-10-nachher-tuer.webp": { tag: "nachher", label: "Tür & Rahmen", alt: "Gereinigte Tür" },
  "galerie-11-vorher-ausgang.webp": { tag: "vorher", label: "Ausgang", alt: "Ausgangstür und Boden vor der Reinigung" },
  "galerie-12-reinigung-fenster.webp": { tag: "arbeit", label: "Fenster", alt: "Fensterreinigung — Arbeit am Rahmen" },
  "galerie-13-nachher-fenster.webp": { tag: "nachher", label: "Fenster", alt: "Streifenfreies Fenster nach der Reinigung" },
  "galerie-14-nachher-aufzug.webp": { tag: "nachher", label: "Eingang & Aufzug", alt: "Gereinigter Eingangsbereich mit Aufzug" },
  "galerie-15-nachher-flur-fliesen.webp": { tag: "nachher", label: "Flur & Boden", alt: "Gereinigter Flur mit Fliesen" },
  "galerie-16-nachher-korridor.webp": { tag: "nachher", label: "Korridor", alt: "Polierter Korridorboden" },
  "galerie-17-nachher-flur-politur.webp": { tag: "nachher", label: "Flur", alt: "Hochglanz-polierter Flur" },
  "galerie-18-nachher-bad.webp": { tag: "nachher", label: "Sanitär", alt: "Gereinigtes Badezimmer" },
  "galerie-19-nachher-klassenzimmer.webp": { tag: "nachher", label: "Klassenzimmer", alt: "Gereinigter Klassenraum" },
  "galerie-20-nachher-gemeinschaft.webp": { tag: "nachher", label: "Gemeinschaftsraum", alt: "Gereinigter Gemeinschaftsraum" },
};

const TAG_CLASS = { vorher: "galerie-tag--vorher", arbeit: "galerie-tag--arbeit", nachher: "galerie-tag--nachher" };
const TAG_TEXT = { vorher: "Vorher", arbeit: "Reinigung", nachher: "Nachher" };

fs.mkdirSync(OUT, { recursive: true });

for (const [outName, srcName] of GALLERY) {
  const abs = path.join(SRC, srcName);
  if (!fs.existsSync(abs)) throw new Error(`Missing source: ${srcName}`);
  await sharp(abs)
    .rotate()
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(OUT, outName));
  console.log("ok", outName);
}

const base = "/demo/tairovic-dark-verzija/assets/galerie/";
const figures = GALLERY.map(([file]) => {
  const m = META[file];
  const tc = TAG_CLASS[m.tag];
  const tt = TAG_TEXT[m.tag];
  return `          <figure class="galerie-item">
            <button type="button" class="galerie-thumb" data-full="${base}${file}" aria-label="${m.label} ${tt} — Bild vergrößern">
              <img src="${base}${file}" alt="${m.alt}" width="320" height="108" loading="lazy" decoding="async">
            </button>
            <figcaption class="galerie-cap"><span>${m.label}</span><span class="galerie-tag ${tc}">${tt}</span></figcaption>
          </figure>`;
}).join("\n");

const fragmentPath = path.resolve(
  "client/public/demo/tairovic-dark-verzija/galerie-grid.fragment.html",
);
fs.writeFileSync(fragmentPath, figures + "\n");
console.log("Wrote", fragmentPath);
