import fs from "fs";
import path from "path";
import sharp from "sharp";

const SRC = String.raw`C:\Users\User\Desktop\AJET MATERIJAL I SCREEN\FOTO`;
const OUT = path.resolve("client/public/demo/tairovic-dark-verzija/assets/galerie");

const PAIRS = [
  ["galerie-01-vorher-treppen.webp", "download (16).jpg"],
  ["galerie-02-reinigung-treppen.webp", "download (17).jpg"],
  ["galerie-03-nachher-flur.webp", "download (34).jpg"],
  ["galerie-04-vorher-wand.webp", "download (43).jpg"],
  ["galerie-05-reinigung-wand.webp", "download (42).jpg"],
  ["galerie-06-nachher-wand.webp", "download (45).jpg"],
  ["galerie-07-nachher-aufzug.webp", "download (38).jpg"],
  ["galerie-08-nachher-korridor.webp", "download (20).jpg"],
  ["galerie-09-vorher-balkon.webp", "download - 2026-06-03T173504.325.jpg"],
  ["galerie-10-nachher-balkon.webp", "download - 2026-06-03T173456.237.jpg"],
  ["galerie-11-vorher-tuer.webp", "download - 2026-06-03T173120.936.jpg"],
  ["galerie-12-nachher-gemeinschaft.webp", "download - 2026-06-03T173050.674.jpg"],
];

fs.mkdirSync(OUT, { recursive: true });

for (const [outName, srcName] of PAIRS) {
  const abs = path.join(SRC, srcName);
  if (!fs.existsSync(abs)) throw new Error(`Missing source: ${srcName}`);
  const dest = path.join(OUT, outName);
  await sharp(abs)
    .rotate()
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dest);
  const stat = fs.statSync(dest);
  console.log(outName, `${(stat.size / 1024).toFixed(0)} KB`);
}

console.log("Done:", PAIRS.length, "images ->", OUT);
