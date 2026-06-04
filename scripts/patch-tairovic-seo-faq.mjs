import fs from "fs";
import path from "path";

const indexPath = path.resolve("client/public/demo/tairovic-dark-verzija/index.html");
const assets = path.resolve("client/public/demo/tairovic-dark-verzija/assets");

function insertBeforeNextSection(html, nextSectionId, insert) {
  const re = new RegExp(`(</section>\\s*<section id="${nextSectionId}")`);
  if (!re.test(html)) {
    throw new Error(`Could not find boundary before section id="${nextSectionId}"`);
  }
  return html.replace(re, `${insert.trim()}\n$1`);
}

let html = fs.readFileSync(indexPath, "utf8");

const reinigung = fs.readFileSync(path.join(assets, "faq-reinigung.html"), "utf8");
html = insertBeforeNextSection(html, "hausmeister", reinigung);

const hausmeister = fs.readFileSync(path.join(assets, "faq-hausmeister.html"), "utf8");
html = insertBeforeNextSection(html, "garten", hausmeister);

const garten = fs.readFileSync(path.join(assets, "faq-garten.html"), "utf8");
html = insertBeforeNextSection(html, "winter", garten);

fs.writeFileSync(indexPath, html);
console.log("Patched FAQ blocks into index.html");
