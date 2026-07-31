import fs from "node:fs";
import path from "node:path";

const dir = path.resolve("../theenchantedchronicles/stories");
const link = `<p class="footer-note__legal"><a href="/privacy">Privacy Policy</a> &middot; <a href="/terms">Terms of Service</a> &middot; <a href="/contact">Contact</a></p>`;

for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".html"))) {
  let c = fs.readFileSync(path.join(dir, f), "utf8");
  c = c.replace(
    /<footer class="footer-note">\s*<div class="footer-note__content glass-panel">\s*<p class="footer-note__legal"><a href="\/privacy">[\s\S]*?<\/p>\s*<\/div>\s*/,
    `<footer class="footer-note">\n  ${link}\n  `
  );
  if (!c.includes('href="/privacy"')) {
    c = c.replace('<footer class="footer-note">', `<footer class="footer-note">\n  ${link}`);
  }
  fs.writeFileSync(path.join(dir, f), c);
  console.log("fixed", f);
}
