import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

async function main() {
  const pub = path.join(root, "client", "public");
  await sharp(path.join(pub, "hero-workspace.png")).webp({ quality: 84 }).toFile(path.join(pub, "hero-workspace.webp"));
  await sharp(path.join(pub, "agr-logo-white.png")).webp({ quality: 90 }).toFile(path.join(pub, "agr-logo-white.webp"));

  const assets = path.join(root, "client", "src", "assets");
  await sharp(path.join(assets, "branding-image.jpg")).webp({ quality: 82 }).toFile(path.join(assets, "branding-image.webp"));

  console.log("Wrote hero-workspace.webp, agr-logo-white.webp, branding-image.webp");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
