import fs from "fs";
import path from "path";
import sharp from "sharp";

const SRC = path.resolve(
  process.env.USERPROFILE || "",
  ".cursor/projects/c-Users-User-Desktop-CURSOR-Ai-AGRMULTIMEDIA/assets",
);
const OUT = path.resolve("client/public/demo/tairovic-dark-verzija/assets/winterdienst");

const MAP = [
  ["winter-hero-hintergrund.png", "winter-hero.webp", 1600],
  ["winter-schnee-vorne-logo.png", "winter-01-schaufel-vorne.webp", 1400],
  ["winter-schnee-hinten-logo.png", "winter-02-schaufel-hinten.webp", 1400],
  ["winter-traktor-schnee-logo.png", "winter-03-traktor-schnee.webp", 1400],
];

fs.mkdirSync(OUT, { recursive: true });

for (const [srcName, dest, width] of MAP) {
  const abs = path.join(SRC, srcName);
  if (!fs.existsSync(abs)) throw new Error(`Missing ${abs}`);
  await sharp(abs)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(path.join(OUT, dest));
  console.log("ok", dest);
}
