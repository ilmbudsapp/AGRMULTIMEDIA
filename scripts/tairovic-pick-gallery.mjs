/**
 * Heuristic filter: skip document photos (lots of flat white/paper),
 * pick diverse cleaning/work shots for Tairovic gallery.
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const SRC = process.env.TAIROVIC_FOTO_SRC || String.raw`C:\Users\User\Desktop\AJET MATERIJAL I SCREEN\FOTO`;

const files = fs
  .readdirSync(SRC)
  .filter((f) => /\.jpe?g$/i.test(f))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

async function scoreFile(file) {
  const abs = path.join(SRC, file);
  const { width, height } = await sharp(abs).metadata();
  const { data, info } = await sharp(abs)
    .rotate()
    .resize(320, 320, { fit: "inside", withoutEnlargement: true })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const n = info.width * info.height;
  let white = 0;
  let dark = 0;
  let sumR = 0;
  let sumG = 0;
  let sumB = 0;
  const bins = new Uint32Array(8);

  for (let i = 0; i < data.length; i += 3) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    sumR += r;
    sumG += g;
    sumB += b;
    const lum = (r + g + b) / 3;
    if (lum > 210 && Math.abs(r - g) < 25 && Math.abs(g - b) < 25) white++;
    if (lum < 55) dark++;
    const edge = Math.max(r, g, b) - Math.min(r, g, b);
    bins[Math.min(7, (edge / 32) | 0)]++;
  }

  const whiteRatio = white / n;
  const darkRatio = dark / n;
  const avgR = sumR / n;
  const avgG = sumG / n;
  const avgB = sumB / n;
  const lowSat = Math.abs(avgR - avgG) + Math.abs(avgG - avgB);
  const edgeRatio = 1 - bins[0] / n;

  // Documents: high white, low edge, low saturation spread
  const docScore = whiteRatio * 2.2 + (lowSat < 30 ? 0.4 : 0) + (edgeRatio < 0.22 ? 0.5 : 0);
  const isDoc = docScore > 1.35 || (whiteRatio > 0.52 && edgeRatio < 0.18);

  // Prefer cleaning shots: some dark (dirt), decent edges, not tiny
  const workScore =
    (isDoc ? -10 : 0) +
    edgeRatio * 2 +
    Math.min(darkRatio * 4, 1.2) +
    (whiteRatio > 0.15 && whiteRatio < 0.45 ? 0.5 : 0) +
    Math.min((width * height) / 400000, 1);

  return { file, width, height, whiteRatio, darkRatio, edgeRatio, isDoc, workScore };
}

const scored = [];
for (const f of files) {
  scored.push(await scoreFile(f));
}

const cleaning = scored.filter((s) => !s.isDoc).sort((a, b) => b.workScore - a.workScore);

console.log("DOCUMENTS (skip):", scored.filter((s) => s.isDoc).map((s) => s.file).join("\n"));
console.log("\nTOP CLEANING CANDIDATES:");
for (const s of cleaning.slice(0, 24)) {
  console.log(s.workScore.toFixed(2), s.file, `w=${s.whiteRatio.toFixed(2)} d=${s.darkRatio.toFixed(2)}`);
}
