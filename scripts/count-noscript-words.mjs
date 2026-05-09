import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexPath = path.join(__dirname, "..", "client", "index.html");
const html = fs.readFileSync(indexPath, "utf8");
const bodyStart = html.indexOf("<body>");
const body = html.slice(bodyStart);
const nsStart = body.indexOf("<noscript>");
const nsEnd = body.indexOf("</noscript>");
const inner = body.slice(nsStart + "<noscript>".length, nsEnd);
const plain = inner
  .replace(/<script[\s\S]*?<\/script>/gi, " ")
  .replace(/<style[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;/g, " ")
  .replace(/\s+/g, " ")
  .trim();
const words = plain.split(/\s+/).filter(Boolean);
console.log("noscript words:", words.length);
