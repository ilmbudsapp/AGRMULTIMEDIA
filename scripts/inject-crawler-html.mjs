#!/usr/bin/env node
/**
 * Injects client/static/crawler-home.html into index.html between markers
 * so "View Page Source" contains crawlable homepage content (SPA fix).
 *
 * Usage:
 *   node scripts/inject-crawler-html.mjs           → client/index.html
 *   node scripts/inject-crawler-html.mjs --dist    → dist/public/index.html
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const fragmentPath = path.join(root, "client", "static", "crawler-home.html");
const START = "<!-- CRAWLER_HOME_START -->";
const END = "<!-- CRAWLER_HOME_END -->";

const distMode = process.argv.includes("--dist");
const indexPath = distMode
  ? path.join(root, "dist", "public", "index.html")
  : path.join(root, "client", "index.html");

if (!fs.existsSync(fragmentPath)) {
  console.error(`FAIL: missing ${fragmentPath}`);
  process.exit(1);
}
if (!fs.existsSync(indexPath)) {
  console.error(`FAIL: missing ${indexPath}${distMode ? " (run vite build first)" : ""}`);
  process.exit(1);
}

const fragment = fs.readFileSync(fragmentPath, "utf8").trim();
let html = fs.readFileSync(indexPath, "utf8");

const block = `${START}\n${fragment}\n${END}`;

if (html.includes(START) && html.includes(END)) {
  const re = new RegExp(
    `${START.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?${END.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`,
  );
  html = html.replace(re, block);
} else if (html.includes('<div id="root"></div>')) {
  html = html.replace('<div id="root"></div>', `${block}\n    <div id="root"></div>`);
} else if (html.includes('<div id="root">')) {
  console.error("FAIL: #root is not empty — expected <div id=\"root\"></div>");
  process.exit(1);
} else {
  console.error("FAIL: no injection point in index.html");
  process.exit(1);
}

fs.writeFileSync(indexPath, html, "utf8");
console.log(`OK: injected crawler-home into ${path.relative(root, indexPath)}`);
