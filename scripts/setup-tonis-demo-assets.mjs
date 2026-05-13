/**
 * Generates WebP assets for /demo/tonis-autopflege (logo, gallery placeholders, video poster).
 * Re-run after replacing hero.mp4 or when adding new JPG/PNG sources to convert.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ffmpeg from "ffmpeg-static";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "client", "public", "demo", "tonis-autopflege");
const heroMp4 = path.join(outDir, "hero.mp4");

const GOLD = "#c9a227";
const GOLD_DIM = "#8a7019";
const BG = "#050508";

function logoSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="280" viewBox="0 0 960 280">
  <rect width="100%" height="100%" fill="${BG}"/>
  <rect x="40" y="40" width="880" height="200" fill="none" stroke="${GOLD}" stroke-width="2" opacity="0.35"/>
  <text x="480" y="125" text-anchor="middle" font-family="Georgia,Times New Roman,serif" font-size="52" fill="${GOLD}" font-weight="600">Toni's Autopflege</text>
  <text x="480" y="185" text-anchor="middle" font-family="system-ui,sans-serif" font-size="22" fill="#a89f8c" letter-spacing="0.35em">GÖPPINGEN</text>
</svg>`;
}

function gallerySvg(index, label) {
  const seed = index * 47;
  const g1 = `hsl(${38 + seed % 8}, 42%, ${12 + (index % 3)}%)`;
  const g2 = `hsl(${48 + seed % 12}, 35%, 6%)`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${g1}"/>
      <stop offset="100%" stop-color="${g2}"/>
    </linearGradient>
    <radialGradient id="r" cx="70%" cy="20%" r="60%">
      <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect width="100%" height="100%" fill="url(#r)"/>
  <rect x="36" y="36" width="828" height="828" fill="none" stroke="${GOLD}" stroke-width="1.5" opacity="0.22"/>
  <text x="450" y="470" text-anchor="middle" font-family="Georgia,serif" font-size="38" fill="${GOLD}" opacity="0.85">${label}</text>
</svg>`;
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  await sharp(Buffer.from(logoSvg()))
    .webp({ quality: 88, effort: 5 })
    .toFile(path.join(outDir, "TONI LOGO WEBP.webp"));

  const labels = [
    "Innenreinigung",
    "Lackaufbereitung",
    "Keramikversiegelung",
    "Felgenreinigung",
    "Politur",
    "Detailing",
  ];
  for (let i = 0; i < labels.length; i++) {
    const n = String(i + 1).padStart(2, "0");
    await sharp(Buffer.from(gallerySvg(i + 1, labels[i])))
      .webp({ quality: 82, effort: 5 })
      .toFile(path.join(outDir, `gallery-${n}.webp`));
  }

  try {
    await fs.access(heroMp4);
  } catch {
    console.warn("hero.mp4 missing; skip poster extraction.");
    return;
  }
  const tmpPng = path.join(outDir, "_hero-frame.png");
  execFileSync(ffmpeg, ["-y", "-i", heroMp4, "-ss", "00:00:00.6", "-vframes", "1", tmpPng], {
    stdio: "inherit",
  });
  await sharp(tmpPng)
    .resize(1920, 1080, { fit: "cover", position: "centre" })
    .webp({ quality: 76 })
    .toFile(path.join(outDir, "hero-poster.webp"));
  await fs.unlink(tmpPng).catch(() => {});

  console.log("Toni demo WebP assets + hero-poster.webp written to", outDir);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
