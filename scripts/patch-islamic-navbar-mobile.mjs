import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "client",
  "public",
  "demo",
  "islamic-center"
);

const oldBlock =
  "                    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarCollapse\">\r\n" +
  "                        <span class=\"fa fa-bars text-primary\"></span>\r\n" +
  "                    </button>";

const newBlock =
  "                    <div class=\"lang-switcher lang-switcher--mobile d-flex d-lg-none align-items-center gap-1 ms-auto me-2\">\r\n" +
  "                                    <button type=\"button\" class=\"lang-btn btn btn-sm btn-outline-dark active\" data-lang=\"bs\">BS</button>\r\n" +
  "                                    <button type=\"button\" class=\"lang-btn btn btn-sm btn-outline-dark\" data-lang=\"sq\">AL</button>\r\n" +
  "                                    <button type=\"button\" class=\"lang-btn btn btn-sm btn-outline-dark\" data-lang=\"de\">DE</button>\r\n" +
  "                                    <button type=\"button\" class=\"lang-btn btn btn-sm btn-outline-dark\" data-lang=\"it\">IT</button>\r\n" +
  "                                </div>\r\n" +
  "                    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Meni\">\r\n" +
  "                        <span class=\"fa fa-bars text-primary fs-4\"></span>\r\n" +
  "                    </button>";

for (const name of fs.readdirSync(dir)) {
  if (!name.endsWith(".html")) continue;
  const filePath = path.join(dir, name);
  let html = fs.readFileSync(filePath, "utf8");
  if (html.includes("lang-switcher--mobile")) {
    console.log("skip", name);
    continue;
  }
  if (!html.includes(oldBlock)) {
    console.error("no match", name);
    process.exitCode = 1;
    continue;
  }
  html = html.replace(oldBlock, newBlock);
  fs.writeFileSync(filePath, html, "utf8");
  console.log("patched", name);
}
