#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(repoRoot, "dist", "public");
const requiredRootFiles = ["index.html", "sitemap.xml", "robots.txt"];
const requiredDemoIndexes = [
  path.join(outputDir, "demo", "aisa-osmani", "index.html"),
  path.join(outputDir, "demo", "porro-lidia", "index.html"),
];

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

const indexHtml = fs.readFileSync(path.join(outputDir, "index.html"), "utf8");
if (!indexHtml.includes("static-crawler-home")) {
  console.error("FAIL: dist/public/index.html missing static-crawler-home prerender block");
  process.exit(1);
}
if (!indexHtml.includes("CRAWLER_HOME_START")) {
  console.error("FAIL: dist/public/index.html missing CRAWLER_HOME markers");
  process.exit(1);
}

for (const demoIndex of requiredDemoIndexes) {
  if (!fs.existsSync(demoIndex)) {
    console.error(`FAIL: missing ${demoIndex}`);
    process.exit(1);
  }
}

console.log(`OK: production static files are deployed from ${outputDir}`);
console.log("OK: root sitemap.xml is published at /sitemap.xml");
console.log("OK: homepage crawler HTML present in index.html");
