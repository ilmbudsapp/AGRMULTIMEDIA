/**
 * Extract JPG posters from MP4s in client/public/Video editing/
 * Slot 5 uses source file `5-osoba.mp4` (H.264; poster `posters/5.jpg`).
 * Run: npm run extract-video-editing-posters
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegPath from "ffmpeg-static";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const videoDir = path.join(root, "client", "public", "Video editing");
const posterDir = path.join(videoDir, "posters");

if (!ffmpegPath) {
  console.error("ffmpeg-static: binary not found");
  process.exit(1);
}

fs.mkdirSync(posterDir, { recursive: true });

/** Seek into clip — adjust if thumbnails are black */
const SEEK = "00:00:02";

for (let i = 1; i <= 12; i++) {
  const sourceFile = i === 5 ? "5-osoba.mp4" : `${i}.mp4`;
  const input = path.join(videoDir, sourceFile);
  const output = path.join(posterDir, `${i}.jpg`);
  if (!fs.existsSync(input)) {
    console.warn("skip missing", input);
    continue;
  }
  console.log("Extracting poster", `${i}.jpg`, "from", sourceFile);
  execFileSync(
    ffmpegPath,
    [
      "-y",
      "-ss",
      SEEK,
      "-i",
      input,
      "-an",
      "-frames:v",
      "1",
      "-vf",
      "scale=1280:-2",
      "-q:v",
      "2",
      "-update",
      "1",
      output,
    ],
    { stdio: "inherit" },
  );
}

console.log("Done. Posters in:", posterDir);
