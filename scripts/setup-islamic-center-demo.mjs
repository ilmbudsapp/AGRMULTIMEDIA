/**
 * Copies the mosque website template into client/public/demo/islamic-center.
 * Run after editing the template on Desktop:
 *   node scripts/setup-islamic-center-demo.mjs
 */
import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const defaultSrc = join(
  process.env.HOME || process.env.USERPROFILE || "",
  "Desktop",
  "TEMPATE SA WEB SAJTOVI",
  "mosque-website-template"
);
const src = process.env.MOSQUE_TEMPLATE_DIR || defaultSrc;
const dst = join(root, "client", "public", "demo", "islamic-center");

if (!existsSync(src)) {
  console.error("Source template not found:", src);
  console.error("Set MOSQUE_TEMPLATE_DIR to the mosque-website-template folder.");
  process.exit(1);
}

mkdirSync(dst, { recursive: true });
const keepBanner = existsSync(join(dst, "js", "demo-agr-banner.js"))
  ? readFileSync(join(dst, "js", "demo-agr-banner.js"))
  : null;

for (const name of readdirSync(src)) {
  if (name === "scss") continue;
  cpSync(join(src, name), join(dst, name), { recursive: true, force: true });
}

if (keepBanner) {
  mkdirSync(join(dst, "js"), { recursive: true });
  writeFileSync(join(dst, "js", "demo-agr-banner.js"), keepBanner);
}

console.log("OK: islamic-center demo synced to", dst);
