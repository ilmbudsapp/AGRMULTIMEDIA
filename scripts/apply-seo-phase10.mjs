#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STORIES_DIR = path.resolve(__dirname, "../../theenchantedchronicles/stories");

function hideStoryMeta(html) {
  if (html.includes('class="story-meta-hidden"')) return html;

  return html.replace(
    /(<h1 class="story-page__title"[^>]*>[\s\S]*?<\/h1>)\s*\n([\s\S]*?)(\n\s*<div class="story-page__text" data-story-body>)/,
    (_, h1, metaBlock, bodyStart) => {
      if (!metaBlock.includes("story-page__hook") && !metaBlock.includes("story-page__summary")) {
        return _ + metaBlock + bodyStart;
      }
      return `${h1}
      <div class="story-meta-hidden" style="display:none !important;">
${metaBlock}      </div>${bodyStart}`;
    }
  );
}

let count = 0;
for (const file of fs.readdirSync(STORIES_DIR).filter((f) => f.endsWith(".html"))) {
  const filePath = path.join(STORIES_DIR, file);
  const next = hideStoryMeta(fs.readFileSync(filePath, "utf8"));
  if (next.includes('class="story-meta-hidden"')) {
    fs.writeFileSync(filePath, next);
    count++;
    console.log("patched", file);
  } else {
    console.warn("skipped (no match)", file);
  }
}
console.log(`phase 10 complete: ${count}/20 stories`);
