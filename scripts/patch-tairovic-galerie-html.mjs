import fs from "fs";
import path from "path";

const indexPath = path.resolve("client/public/demo/tairovic-dark-verzija/index.html");
const fragmentPath = path.resolve(
  "client/public/demo/tairovic-dark-verzija/galerie-grid.fragment.html",
);
const html = fs.readFileSync(indexPath, "utf8");
const fragment = fs.readFileSync(fragmentPath, "utf8").trim();
const start = html.indexOf('        <div class="galerie-grid">');
const gridClose = html.indexOf("\n        </div>", start + 30);
const end = gridClose >= 0 ? gridClose : -1;
if (start < 0 || end < 0) throw new Error("Gallery markers not found");
const updated =
  html.slice(0, start) +
  '        <div class="galerie-grid">\n' +
  fragment +
  "\n" +
  html.slice(end);
fs.writeFileSync(indexPath, updated);
fs.unlinkSync(fragmentPath);
console.log("Patched index.html gallery (20 items)");
