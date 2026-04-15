/**
 * Extract JPG posters from MP4s in client/public/Video Ai/
 * Run: node scripts/extract-video-posters.mjs
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegPath from "ffmpeg-static";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const videoDir = path.join(root, "client", "public", "Video Ai");
const posterDir = path.join(videoDir, "posters");

if (!ffmpegPath) {
  console.error("ffmpeg-static: binary not found");
  process.exit(1);
}

fs.mkdirSync(posterDir, { recursive: true });

/** Seek ~5s in — many clips fade in from black in the first seconds. */
const SEEK = "00:00:05";

for (let i = 1; i <= 7; i++) {
  const num = String(i).padStart(2, "0");
  const input = path.join(videoDir, `${num}.mp4`);
  const output = path.join(posterDir, `${num}.jpg`);
  if (!fs.existsSync(input)) {
    console.warn("skip missing", input);
    continue;
  }
  console.log("Extracting poster", `${num}.jpg`, "from", `${num}.mp4`);
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
