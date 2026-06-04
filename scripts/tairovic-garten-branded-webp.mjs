import fs from "fs";
import path from "path";
import sharp from "sharp";

const SRC = path.resolve(
  process.env.USERPROFILE || "",
  ".cursor/projects/c-Users-User-Desktop-CURSOR-Ai-AGRMULTIMEDIA/assets",
);
const OUT = path.resolve("client/public/demo/tairovic-dark-verzija/assets/gartenpflege");

const MAP = [
  ["garten-01-rasenmaehen-mann.png", "garten-01-rasenmaehen.webp"],
  ["garten-02-heckenschnitt-mann.png", "garten-02-heckenschnitt.webp"],
  ["garten-05-laubpflege-mann.png", "garten-05-laubpflege.webp"],
];

for (const [src, dest] of MAP) {
  const abs = path.join(SRC, src);
  if (!fs.existsSync(abs)) throw new Error(`Missing ${abs}`);
  await sharp(abs)
    .rotate()
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(path.join(OUT, dest));
  console.log("ok", dest);
}
