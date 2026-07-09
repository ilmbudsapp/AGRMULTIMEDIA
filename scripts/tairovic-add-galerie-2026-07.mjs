import fs from "fs";
import path from "path";
import sharp from "sharp";

const SRC = String.raw`C:\Users\User\Desktop\AJET MATERIJAL I SCREEN\NOVE FOTO 09 07 2026`;
const OUT = path.resolve("client/public/demo/tairovic-dark-verzija/assets/galerie");

const items = [
  ["galerie-21-vorher-aufenthaltsraum.webp", "01.jpeg"],
  ["galerie-22-nachher-aufenthaltsraum.webp", "02.jpeg"],
  ["galerie-23-vorher-personalraum.webp", "03.jpeg"],
  ["galerie-24-nachher-personalraum.webp", "04.jpeg"],
];

fs.mkdirSync(OUT, { recursive: true });

for (const [outName, srcName] of items) {
  const abs = path.join(SRC, srcName);
  if (!fs.existsSync(abs)) throw new Error(`Missing source: ${abs}`);
  await sharp(abs)
    .rotate()
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(OUT, outName));
  const stat = fs.statSync(path.join(OUT, outName));
  console.log("ok", outName, `${Math.round(stat.size / 1024)}KB`);
}
