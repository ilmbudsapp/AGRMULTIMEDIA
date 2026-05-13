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

/** Responsive WebP variants for large audit screenshots (referenced with srcset in OptimizationExcellence). */
async function writeAuditWebpWidths(pubDir) {
  const files = ["agrmultimedia-benchmark.jpg", "fixbike-before.jpg", "fixbike-after.jpg"];
  const widths = [640, 960];
  let n = 0;
  for (const rel of files) {
    const abs = path.join(pubDir, rel);
    try {
      await fs.access(abs);
    } catch {
      continue;
    }
    const stem = rel.replace(/\.(jpe?g|png)$/i, "");
    for (const w of widths) {
      const out = path.join(pubDir, `${stem}-${w}.webp`);
      await sharp(abs).resize({ width: w, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
      n += 1;
    }
  }
  return n;
}

async function main() {
  const pub = path.join(root, "client", "public");
  const assets = path.join(root, "client", "src", "assets");
  const convertedPublic = await convertTree(pub);
  const convertedAssets = await convertTree(assets);
  const auditWidths = await writeAuditWebpWidths(pub);
  console.log(
    `Converted ${convertedPublic} images in public and ${convertedAssets} in src/assets to WebP; wrote ${auditWidths} audit width variants.`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
