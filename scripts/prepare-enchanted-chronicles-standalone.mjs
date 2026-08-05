#!/usr/bin/env node
/**
 * Prepare Enchanted Chronicles as standalone site for theenchantedchronicles.com
 * Copies from monorepo demo and rewrites /demo/enchanted-chronicles/ → /
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, "../client/public/demo/enchanted-chronicles");
const OUT = path.resolve(__dirname, "../../theenchantedchronicles");

const SKIP_DIRS = new Set(["node_modules", ".git", ".next", "out", "scripts"]);
const TEXT_EXT = new Set([".html", ".css", ".js", ".json", ".py", ".md"]);

function rmExceptGit(dir) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    if (name === ".git") continue;
    const p = path.join(dir, name);
    fs.rmSync(p, { recursive: true, force: true });
  }
}

function shouldRewrite(file) {
  return TEXT_EXT.has(path.extname(file).toLowerCase());
}

function rewriteContent(text) {
  return text
    .replaceAll("/demo/enchanted-chronicles/", "/")
    .replaceAll("/demo/enchanted-chronicles", "");
}

function copyTree(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyTree(s, d);
    } else if (shouldRewrite(entry.name)) {
      fs.writeFileSync(d, rewriteContent(fs.readFileSync(s, "utf8")), "utf8");
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

console.log("Preparing standalone Enchanted Chronicles...");
rmExceptGit(OUT);
copyTree(SRC, OUT);

// Vercel static site config
fs.writeFileSync(
  path.join(OUT, "vercel.json"),
  JSON.stringify(
    {
      framework: null,
      buildCommand: "",
      outputDirectory: ".",
      installCommand: "",
      cleanUrls: true,
      trailingSlash: false,
    },
    null,
    2
  ) + "\n"
);

fs.writeFileSync(
  path.join(OUT, "package.json"),
  JSON.stringify(
    {
      name: "theenchantedchronicles",
      private: true,
      description: "The Enchanted Chronicles — standalone stories site",
      scripts: {
        build: "echo Static site — no build step",
      },
    },
    null,
    2
  ) + "\n"
);

fs.writeFileSync(
  path.join(OUT, ".gitignore"),
  "node_modules\n.env\n.DS_Store\n*.log\n"
);

fs.writeFileSync(
  path.join(OUT, "README.md"),
  `# The Enchanted Chronicles

Standalone static site — 20 fantasy stories, EN/DE i18n.

Deployed at **theenchantedchronicles.com**

## Local preview

\`\`\`bash
npx serve .
\`\`\`

## Vercel

- Framework: **Other**
- Build Command: *(empty)* or \`echo ok\`
- Output Directory: **/** *(root)*
`
);

console.log("Done:", OUT);
