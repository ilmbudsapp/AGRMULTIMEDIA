/**
 * Convert LIBRO cover JPGs → WebP for Enchanted Chronicles demo.
 * Run: node scripts/enchanted-chronicles-images.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = "C:/Users/User/Desktop/LIBRO WEB SAJT/COVER";
const OUT_DIR = path.join(__dirname, "..", "client/public/demo/enchanted-chronicles/images");

const MAP = [
  {
    src: "01.COVER D AVANTI The Enchanted Chronicles Tales of Magic and Mystery.jpg",
    dest: "cover1.webp",
  },
  {
    src: "02.COVER DIETRO The Enchanted Chronicles Tales of Magic and Mystery.jpg",
    dest: "cover2.webp",
  },
];

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const { src, dest } of MAP) {
  const input = path.join(SRC_DIR, src);
  const output = path.join(OUT_DIR, dest);
  if (!fs.existsSync(input)) {
    console.error("Missing:", input);
    process.exit(1);
  }
  await sharp(input).rotate().webp({ quality: 86 }).toFile(output);
  const stat = fs.statSync(output);
  console.log(dest, "→", Math.round(stat.size / 1024), "KB");
}

console.log("Done:", OUT_DIR);
