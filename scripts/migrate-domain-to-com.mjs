#!/usr/bin/env node
/** Replace legacy .eu domain with .com across source files (keeps intentional legacy redirect config). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SKIP_DIRS = new Set(["node_modules", "dist", ".git", "demos"]);
const SKIP_FILES = new Set(["scripts/migrate-domain-to-com.mjs", "vercel.json", "scripts/site-origin.mjs"]);

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const rel = path.relative(root, full).replace(/\\/g, "/");
    if (SKIP_FILES.has(rel)) continue;
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      if (!SKIP_DIRS.has(name)) walk(full, out);
    } else {
      out.push(full);
    }
  }
  return out;
}

const TEXT_EXT =
  /\.(html|tsx?|jsx?|mjs|cjs|json|xml|txt|md|css|env\.example)$/i;

let changed = 0;
for (const file of walk(root)) {
  if (!TEXT_EXT.test(file)) continue;
  const src = fs.readFileSync(file, "utf8");
  if (!src.includes("agrmultimedia.eu")) continue;
  const next = src
    .replaceAll("https://www.agrmultimedia.eu", "https://www.agrmultimedia.com")
    .replaceAll("https://agrmultimedia.eu", "https://www.agrmultimedia.com")
    .replaceAll("agrmultimedia.eu", "agrmultimedia.com");
  if (next !== src) {
    fs.writeFileSync(file, next, "utf8");
    console.log("updated:", path.relative(root, file));
    changed++;
  }
}
console.log(`OK: ${changed} file(s) updated`);
