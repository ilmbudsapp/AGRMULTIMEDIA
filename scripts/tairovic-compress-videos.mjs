import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import ffmpegStatic from "ffmpeg-static";

const SRC = String.raw`C:\Users\User\Desktop\AJET MATERIJAL I SCREEN\VIDEO`;
const OUT = path.resolve("client/public/demo/tairovic-dark-verzija/assets/videos");
const ffmpeg = ffmpegStatic;

if (!ffmpeg) throw new Error("ffmpeg-static not found");

function probe(file) {
  const r = spawnSync(ffmpeg, ["-hide_banner", "-i", file], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  const err = r.stderr || "";
  const res = err.match(/,\s*(\d{2,5})x(\d{2,5})/);
  const width = res ? Number(res[1]) : 0;
  const height = res ? Number(res[2]) : 0;
  const hasAudio = err.includes("Audio:");
  return { width, height, hasAudio };
}

function remuxCopy(input, output) {
  const r = spawnSync(
    ffmpeg,
    ["-y", "-i", input, "-c", "copy", "-movflags", "+faststart", output],
    { stdio: "inherit" },
  );
  if (r.status !== 0) throw new Error(`Copy failed: ${input}`);
}

function compress(input, output, { hasAudio }) {
  const args = [
    "-y",
    "-i",
    input,
    "-c:v",
    "libx264",
    "-crf",
    "24",
    "-preset",
    "medium",
    "-vf",
    "scale='min(1280,iw)':-2:flags=lanczos",
    "-movflags",
    "+faststart",
    "-pix_fmt",
    "yuv420p",
  ];
  if (hasAudio) args.push("-c:a", "aac", "-b:a", "96k", "-ac", "2");
  else args.push("-an");
  args.push(output);
  const r = spawnSync(ffmpeg, args, { stdio: "inherit" });
  if (r.status !== 0) throw new Error(`Encode failed: ${input}`);
}

fs.mkdirSync(OUT, { recursive: true });

for (let i = 1; i <= 10; i++) {
  const num = String(i).padStart(2, "0");
  const input = path.join(SRC, `${num}.mp4`);
  const output = path.join(OUT, `video-${num}.mp4`);
  const tmp = path.join(OUT, `_tmp-${num}.mp4`);
  const inSize = fs.statSync(input).size;
  const meta = probe(input);

  if (meta.width > 1280) {
    compress(input, tmp, meta);
  } else {
    remuxCopy(input, tmp);
  }

  const tmpSize = fs.statSync(tmp).size;
  if (tmpSize <= inSize * 1.08) {
    fs.renameSync(tmp, output);
    console.log(`video-${num}.mp4`, `${(inSize / 1024 / 1024).toFixed(2)} → ${(tmpSize / 1024 / 1024).toFixed(2)} MB (kept)`);
  } else {
    remuxCopy(input, output);
    fs.unlinkSync(tmp);
    const outSize = fs.statSync(output).size;
    console.log(`video-${num}.mp4`, `${(inSize / 1024 / 1024).toFixed(2)} → ${(outSize / 1024 / 1024).toFixed(2)} MB (copy, better quality)`);
  }
}

console.log("Done:", OUT);
