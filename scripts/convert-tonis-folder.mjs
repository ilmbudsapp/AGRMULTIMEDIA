/**
 * Converts all JPEG/JPG in client/public/demo/tonis-autopflege to gallery-01.webp …
 * Regenerates hero-poster.webp from "Tony Video Klip kompresovan.mp4" if present.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ffmpeg from "ffmpeg-static";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "client", "public", "demo", "tonis-autopflege");
const VIDEO_NAME = "Tony Video Klip kompresovan.mp4";

async function main() {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const jpegs = entries
    .filter((e) => e.isFile() && /\.jpe?g$/i.test(e.name))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  let n = 0;
  for (const name of jpegs) {
    n += 1;
    const stem = `gallery-${String(n).padStart(2, "0")}`;
    const out = path.join(dir, `${stem}.webp`);
    await sharp(path.join(dir, name))
      .rotate()
      .resize(1400, 1400, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(out);
    console.log("Wrote", out);
  }

  const videoPath = path.join(dir, VIDEO_NAME);
  try {
    await fs.access(videoPath);
  } catch {
    console.warn("Video not found:", VIDEO_NAME);
    return;
  }
  const tmpPng = path.join(dir, "_hero-frame.png");
  execFileSync(ffmpeg, ["-y", "-i", videoPath, "-ss", "00:00:00.8", "-frames:v", "1", tmpPng], { stdio: "inherit" });
  await sharp(tmpPng)
    .resize(1920, 1080, { fit: "cover", position: "centre" })
    .webp({ quality: 76 })
    .toFile(path.join(dir, "hero-poster.webp"));
  await fs.unlink(tmpPng).catch(() => {});
  console.log("Wrote hero-poster.webp from", VIDEO_NAME);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
