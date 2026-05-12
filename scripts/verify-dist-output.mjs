#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(repoRoot, "dist", "public");
const requiredRootFiles = ["index.html", "sitemap.xml", "robots.txt"];

if (!fs.existsSync(outputDir)) {
  console.error(`FAIL: missing build output directory ${outputDir}`);
  process.exit(1);
}

for (const fileName of requiredRootFiles) {
  const filePath = path.join(outputDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.error(`FAIL: missing ${filePath}`);
    process.exit(1);
  }
}

const sitemap = fs.readFileSync(path.join(outputDir, "sitemap.xml"), "utf8").replace(/^\uFEFF/, "");
if (!sitemap.startsWith("<?xml")) {
  console.error("FAIL: dist/public/sitemap.xml does not start with an XML declaration");
  process.exit(1);
}

console.log(`OK: client/public assets are deployed from ${outputDir}`);
console.log("OK: sitemap.xml is available at /sitemap.xml on the production host");
