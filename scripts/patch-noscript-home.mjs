#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(root, "client", "index.html");
const fragmentPath = path.join(root, "client", "static", "noscript-home.html");

const fragment = fs.readFileSync(fragmentPath, "utf8").trim();
let html = fs.readFileSync(indexPath, "utf8");

const re = /<noscript>[\s\S]*?<\/noscript>/;
if (!re.test(html)) {
  console.error("FAIL: no <noscript> block in index.html");
  process.exit(1);
}

html = html.replace(re, `<noscript>\n${fragment}\n    </noscript>`);
fs.writeFileSync(indexPath, html, "utf8");
console.log("OK: patched noscript block in client/index.html");
