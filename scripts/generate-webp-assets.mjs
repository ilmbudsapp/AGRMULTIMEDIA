import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SOURCE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }
    files.push(fullPath);
  }
  return files;
}

async function convertTree(baseDir) {
  const files = await walk(baseDir);
  let converted = 0;
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!SOURCE_EXTENSIONS.has(ext)) continue;
    const out = file.slice(0, -ext.length) + ".webp";
    await sharp(file).webp({ quality: 84 }).toFile(out);
    converted += 1;
  }
  return converted;
}

async function main() {
  const pub = path.join(root, "client", "public");
  const assets = path.join(root, "client", "src", "assets");
  const convertedPublic = await convertTree(pub);
  const convertedAssets = await convertTree(assets);
  console.log(`Converted ${convertedPublic} images in public and ${convertedAssets} in src/assets to WebP.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
