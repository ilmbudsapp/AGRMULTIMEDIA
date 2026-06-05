import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "attached_assets", "agr-logo-2026-source.png");

const outWebp = path.join(root, "client/public/agr-logo-white.webp");
const outPng = path.join(root, "client/public/agr-logo-white.png");

const meta = await sharp(src).metadata();
await sharp(src).webp({ quality: 88, effort: 6 }).toFile(outWebp);
await sharp(src).png({ compressionLevel: 9 }).toFile(outPng);

console.log(`Converted ${meta.width}x${meta.height}`);
console.log(`webp: ${fs.statSync(outWebp).size} bytes`);
console.log(`png: ${fs.statSync(outPng).size} bytes`);
