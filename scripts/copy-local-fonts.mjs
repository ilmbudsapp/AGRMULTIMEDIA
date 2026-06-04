#!/usr/bin/env node
/**
 * Copies latin woff2 font files to client/public/assets/fonts for static demo pages.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "client", "public", "assets", "fonts");

const copies = [
  {
    pkg: "@fontsource/inter",
    files: [
      "inter-latin-300-normal.woff2",
      "inter-latin-400-normal.woff2",
      "inter-latin-500-normal.woff2",
      "inter-latin-600-normal.woff2",
      "inter-latin-700-normal.woff2",
      "inter-latin-800-normal.woff2",
      "inter-latin-900-normal.woff2",
    ],
  },
  {
    pkg: "@fontsource/playfair-display",
    files: [
      "playfair-display-latin-500-normal.woff2",
      "playfair-display-latin-600-normal.woff2",
      "playfair-display-latin-700-normal.woff2",
    ],
  },
  {
    pkg: "@fontsource/plus-jakarta-sans",
    files: [
      "plus-jakarta-sans-latin-500-normal.woff2",
      "plus-jakarta-sans-latin-600-normal.woff2",
      "plus-jakarta-sans-latin-700-normal.woff2",
      "plus-jakarta-sans-latin-800-normal.woff2",
    ],
  },
];

fs.mkdirSync(outDir, { recursive: true });

for (const { pkg, files } of copies) {
  const srcDir = path.join(root, "node_modules", pkg, "files");
  for (const file of files) {
    const src = path.join(srcDir, file);
    const dest = path.join(outDir, file);
    if (!fs.existsSync(src)) {
      console.error(`FAIL: missing ${src}`);
      process.exit(1);
    }
    fs.copyFileSync(src, dest);
  }
}

const css = `/* Self-hosted fonts for static demo pages — DSGVO-compliant, no Google Fonts CDN */
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-display: swap;
  font-weight: 300;
  src: url("./inter-latin-300-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url("./inter-latin-400-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: url("./inter-latin-500-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-display: swap;
  font-weight: 600;
  src: url("./inter-latin-600-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: url("./inter-latin-700-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-display: swap;
  font-weight: 800;
  src: url("./inter-latin-800-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-display: swap;
  font-weight: 900;
  src: url("./inter-latin-900-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Playfair Display";
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: url("./playfair-display-latin-500-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Playfair Display";
  font-style: normal;
  font-display: swap;
  font-weight: 600;
  src: url("./playfair-display-latin-600-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Playfair Display";
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: url("./playfair-display-latin-700-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: url("./plus-jakarta-sans-latin-500-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-display: swap;
  font-weight: 600;
  src: url("./plus-jakarta-sans-latin-600-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: url("./plus-jakarta-sans-latin-700-normal.woff2") format("woff2");
}
@font-face {
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-display: swap;
  font-weight: 800;
  src: url("./plus-jakarta-sans-latin-800-normal.woff2") format("woff2");
}
`;

fs.writeFileSync(path.join(outDir, "local-fonts.css"), css, "utf8");
console.log(`OK: copied demo fonts to ${outDir}`);
