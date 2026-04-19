/**
 * Re-encode VP9/non-mobile-safe MP4s to H.264 + AAC + faststart for iOS Safari / Android Chrome.
 * Run from repo root: node scripts/transcode-video-editing-mobile-friendly.mjs
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegPath from "ffmpeg-static";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const videoDir = path.join(root, "client", "public", "Video editing");

/** Files that were VP9 or need broad mobile compatibility */
/** Re-encode VP9 (or any) to H.264 + AAC; `5-osoba` was renamed from `5 osoba` after first transcode. */
const FILES = ["5-osoba.mp4", "10.mp4", "11.mp4", "12.mp4"];

if (!ffmpegPath) {
  console.error("ffmpeg-static: binary not found");
  process.exit(1);
}

function transcode(filename) {
  const input = path.join(videoDir, filename);
  if (!fs.existsSync(input)) {
    console.warn("skip missing", input);
    return;
  }
  const tmp = path.join(videoDir, `.tmp-${filename.replace(/\s+/g, "_")}`);
  console.log("Transcoding", filename, "→ H.264/AAC …");
  execFileSync(
    ffmpegPath,
    [
      "-y",
      "-i",
      input,
      "-c:v",
      "libx264",
      "-profile:v",
      "high",
      "-pix_fmt",
      "yuv420p",
      "-crf",
      "21",
      "-preset",
      "medium",
      "-c:a",
      "aac",
      "-b:a",
      "160k",
      "-ac",
      "2",
      "-movflags",
      "+faststart",
      "-brand",
      "mp42",
      tmp,
    ],
    { stdio: "inherit" },
  );
  fs.renameSync(tmp, input);
  console.log("OK", filename);
}

for (const f of FILES) {
  transcode(f);
}

console.log("Done.");
