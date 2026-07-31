#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../theenchantedchronicles");
const STORIES_DIR = path.join(ROOT, "locales/en/stories");
const PHASE3 = fs.readFileSync(
  path.join(__dirname, "homepage-seo-phase3.html"),
  "utf8"
);

const TAGS = {
  "midnight-fisherman": ["magic", "mystery", "fisherman", "twilight", "lake", "guardian", "perseverance", "family", "moonlight"],
  "adventures-of-oliver": ["forest", "courage", "child", "wilderness", "survival", "family", "adventure", "nature"],
  "enchanted-castle": ["castle", "gothic", "moonlight", "mystery", "enchanted", "night", "magic"],
  "aurelius-and-the-forest-of-wonders": ["forest", "wonder", "magic", "quest", "hero", "fantasy", "adventure"],
  "children-of-heaven": ["heaven", "innocence", "peace", "loss", "hope", "children", "war", "spiritual"],
  "white-bison": ["bison", "spirit", "village", "hope", "nature", "sacred", "struggle", "magic"],
  "a-tale-of-childhood-past": ["childhood", "winter", "friendship", "nostalgia", "village", "joy", "memories"],
  "the-castle-of-shadows": ["castle", "shadows", "gothic", "riddles", "friendship", "mystery", "courage"],
  "the-protector-of-aeloria": ["aeloria", "protector", "village", "justice", "courage", "hero", "adventure"],
  "the-dream-of-the-old-singer": ["music", "dream", "village", "hope", "art", "community", "inspiration"],
  "the-time-traveling-dog": ["dog", "time travel", "medieval", "eldoria", "adventure", "magic", "destiny"],
  "the-terror-of-the-white-wolf": ["wolf", "valley", "legend", "fear", "courage", "drakwood", "mystery"],
  "the-mysterious-disappearance": ["mystery", "forest", "sibling", "quest", "trials", "courage", "magic"],
  "the-brave-knight": ["knight", "giant", "aranthia", "redemption", "courage", "compassion", "kingdom"],
  "miras-quest-to-save-her-parents": ["mira", "quest", "parents", "eldoria", "bravery", "rescue", "adventure"],
  "billy-and-the-magic-of-hope": ["hope", "village", "community", "magic", "kindness", "child", "inspiration"],
  "the-giant-komodo-and-the-unsettled-debts": ["komodo", "veridian", "debts", "justice", "village", "fantasy", "adventure"],
  "the-ancient-forest-and-the-old-man": ["forest", "wisdom", "solitude", "nature", "elder", "magic", "peace"],
  "the-savior-vlad": ["vlad", "hero", "rescue", "village", "dragon", "courage", "children"],
  "the-tale-of-the-kind-hearted-giant": ["giant", "kindness", "village", "friendship", "courage", "rescue", "heart"],
};

const THEMES = {
  "midnight-fisherman": "Perseverance, family love, and the true treasure found within.",
  "adventures-of-oliver": "Courage, respect for nature, and growing through adversity.",
  "enchanted-castle": "Wonder, mystery, and the allure of the unknown.",
  "aurelius-and-the-forest-of-wonders": "Discovery, wonder, and the magic of unexplored worlds.",
  "children-of-heaven": "Innocence, peace after loss, and spiritual comfort.",
  "white-bison": "Hope, sacred nature, and community resilience.",
  "a-tale-of-childhood-past": "Friendship, joy, and the warmth of remembered winters.",
  "the-castle-of-shadows": "Courage, friendship, and facing the unknown together.",
  "the-protector-of-aeloria": "Justice, bravery, and defending the innocent.",
  "the-dream-of-the-old-singer": "Art, community, and the power of music to unite.",
  "the-time-traveling-dog": "Destiny, loyalty, and adventure across time.",
  "the-terror-of-the-white-wolf": "Fear, legend, and finding courage in isolation.",
  "the-mysterious-disappearance": "Sibling love, trials of heart, and never giving up.",
  "the-brave-knight": "Compassion, redemption, and seeing beyond appearances.",
  "miras-quest-to-save-her-parents": "Filial love, bravery, and selfless determination.",
  "billy-and-the-magic-of-hope": "Hope, community spirit, and believing in better days.",
  "the-giant-komodo-and-the-unsettled-debts": "Justice, consequence, and facing the past.",
  "the-ancient-forest-and-the-old-man": "Wisdom, simplicity, and harmony with nature.",
  "the-savior-vlad": "Heroism, sacrifice, and protecting the vulnerable.",
  "the-tale-of-the-kind-hearted-giant": "Kindness, community, and gentle strength.",
};

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function wordCount(story) {
  return story.blocks.reduce(
    (n, b) => n + b.text.split(/\s+/).filter(Boolean).length,
    0
  );
}

function truncate(s, max = 155) {
  const t = String(s).replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return t.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
}

function oneLineSummary(story) {
  const e = story.excerpt.replace(/…$/, "").trim();
  return truncate(`${story.title}: ${e}`, 200);
}

function aiSummary(story) {
  return truncate(
    `${story.title} — ${story.excerpt.replace(/…$/, "")}. A magical tale from The Enchanted Chronicles.`,
    160
  );
}

function relatedSlugs(story, all) {
  const sorted = [...all].sort((a, b) => a.number - b.number);
  const idx = sorted.findIndex((s) => s.slug === story.slug);
  const picks = [];
  for (let i = 1; i <= 3; i++) {
    picks.push(sorted[(idx + i) % sorted.length]);
  }
  return picks;
}

function difficulty(story) {
  const w = wordCount(story);
  if (w < 3500) return "Easy";
  if (w < 5500) return "Medium";
  return "Advanced";
}

function readingMinutes(story) {
  return Math.max(2, Math.ceil(wordCount(story) / 200));
}

function takeaways(story) {
  const theme = THEMES[story.slug] || "Courage, wonder, and heart.";
  return [
    `${story.title} explores ${theme.split(",")[0].toLowerCase()}.`,
    "The story stands alone — no prior reading required.",
    "Themes of hope and human connection run throughout.",
    "Written for readers who enjoy short fantasy with emotional depth.",
  ];
}

function endingSymbolism(story) {
  const map = {
    "midnight-fisherman": "The golden light represents love, unity, and hope rather than material wealth.",
    "the-brave-knight": "Peace with the giant shows that understanding can succeed where battle fails.",
    "children-of-heaven": "The ending offers comfort — suggesting peace beyond earthly suffering.",
  };
  return (
    map[story.slug] ||
    "The ending reaffirms that courage and kindness leave a lasting mark on the world."
  );
}

function authorNote(story) {
  return `This story was written to capture a single emotional truth — that ${THEMES[story.slug]?.split(",")[0].toLowerCase() || "wonder"} lives in everyday lives. Thank you for reading. — Agron Osmani`;
}

function storyExtras(story, all) {
  const tags = TAGS[story.slug] || ["magic", "mystery", "fantasy", "adventure", "enchanted"];
  const rel = relatedSlugs(story, all);
  const mins = readingMinutes(story);
  const diff = difficulty(story);
  const summary = `<p>${truncate(story.excerpt, 120)} ${story.title} follows characters whose choices reveal the magic hidden in ordinary courage.</p>`;

  const meta = `<meta name="ai-summary" content="${esc(aiSummary(story))}" />
<meta name="ai-keywords" content="${esc(tags.join(", "))}" />`;

  const beforeBody = `<div class="story-page__text story-page__summary" aria-label="Story summary">
      <p><strong>Summary:</strong> ${truncate(story.excerpt, 200)}</p>
    </div>
    <p class="story-page__meta">Estimated reading time: ${mins} minutes</p>
    <p class="story-page__meta">Reading difficulty: ${diff}</p>`;

  const afterBody = `
      <div class="story-page__text story-page__extras" aria-label="Story notes">
        <h3>What is the main theme of this story?</h3>
        <p>${THEMES[story.slug] || "Courage, wonder, and the power of the human heart."}</p>
        <h3>What does the ending symbolize?</h3>
        <p>${endingSymbolism(story)}</p>
        <h3>Who is this story best suited for?</h3>
        <p>Readers who enjoy short fantasy tales with emotional depth and a clear, satisfying arc.</p>
        <h3>Key Takeaways</h3>
        <ul>
          ${takeaways(story).map((t) => `<li>${t}</li>`).join("\n          ")}
        </ul>
        <h3>Author's Note</h3>
        <p>${authorNote(story)}</p>
        <h3>Related Stories</h3>
        <ul>
          ${rel.map((r) => `<li><a href="/stories/${r.slug}">${r.title}</a></li>`).join("\n          ")}
        </ul>
        <h3>Story Tags</h3>
        <ul>
          ${tags.map((t) => `<li>${t}</li>`).join("\n          ")}
        </ul>
      </div>`;

  return { meta, beforeBody, afterBody };
}

function loadStories() {
  return fs
    .readdirSync(STORIES_DIR)
    .filter((f) => f.endsWith(".json") && f !== "_index.json")
    .map((f) => JSON.parse(fs.readFileSync(path.join(STORIES_DIR, f), "utf8")));
}

function patchStory(story, all) {
  const file = path.join(ROOT, "stories", `${story.slug}.html`);
  let html = fs.readFileSync(file, "utf8");
  const { meta, beforeBody, afterBody } = storyExtras(story, all);

  if (!html.includes('name="ai-summary"')) {
    html = html.replace(/<meta name="theme-color"/, `${meta}\n<meta name="theme-color"`);
  }

  if (!html.includes("story-page__summary")) {
    html = html.replace(
      /<p class="story-page__date"><time datetime="2026-07-01">July 1, 2026<\/time><\/p>\s*/,
      `<p class="story-page__date"><time datetime="2026-07-01">July 1, 2026</time></p>\n      ${beforeBody}\n      `
    );
  }

  if (!html.includes("story-page__extras")) {
    html = html.replace(
      /<div class="story-page__text" data-story-body><\/div>/,
      `<div class="story-page__text" data-story-body></div>\n      ${afterBody}`
    );
  }

  fs.writeFileSync(file, html);
  console.log("patched story", story.slug);
}

function injectMicroParagraphs(html) {
  if (!html.includes("think of the Chronicles as a constellation")) {
    html = html.replace(
      `<p class="coming-soon__desc">Our research shows that readers engage`,
      `<p class="coming-soon__desc"><strong>In simple terms:</strong> think of the Chronicles as a constellation of tales — separate stars that share the same sky of wonder.</p>
    <p class="coming-soon__desc">Our research shows that readers engage`
    );
  }
  if (!html.includes("imagination heals")) {
    html = html.replace(
      `<p class="mission-vision__card-text">Agron Osmani is the creator`,
      `<p class="mission-vision__card-text"><strong>The core idea behind these stories is</strong> that imagination heals — and every reader deserves a doorway into magic.</p>
      <p class="mission-vision__card-text">Agron Osmani is the creator`
    );
  }
  if (!html.includes("comforting, adventurous")) {
    html = html.replace(
      `<p class="coming-soon__desc">Recurring themes weave through`,
      `<p class="coming-soon__desc"><strong>Readers often describe these tales as</strong> comforting, adventurous, and surprisingly meaningful for their length.</p>
    <p class="coming-soon__desc">Recurring themes weave through`
    );
  }
  if (!html.includes("fairy tales grown up")) {
    html = html.replace(
      `<h3 class="coming-soon__title">Fantasy vs. Magical Realism</h3>`,
      `<p class="coming-soon__desc"><strong>In simple terms:</strong> these stories feel like classic fairy tales grown up — more room to breathe, more heart to hold.</p>
    <h3 class="coming-soon__title">Fantasy vs. Magical Realism</h3>`
    );
  }
  if (!html.includes("goodness still wins")) {
    html = html.replace(
      `<h3 class="coming-soon__title">What is The Enchanted Chronicles?</h3>`,
      `<p class="coming-soon__desc"><strong>The core idea behind these stories is</strong> to offer brief, complete journeys into worlds where goodness still wins.</p>
    <h3 class="coming-soon__title">What is The Enchanted Chronicles?</h3>`
    );
  }
  return html;
}

function patchHomepage() {
  let html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");

  if (!html.includes('id="universe-map"')) {
    html = html.replace(
      /<section class="coming-soon section-gold-rule" id="key-takeaways">/,
      `${PHASE3}\n\n<section class="coming-soon section-gold-rule" id="key-takeaways">`
    );
  }

  if (!html.includes('href="#universe-map"')) {
    html = html.replace(
      /<li><a href="#key-takeaways">Key Takeaways<\/a><\/li>/,
      `<li><a href="#universe-map">Story Universe</a></li>
      <li><a href="#reading-order">Reading Order</a></li>
      <li><a href="#glossary">Glossary</a></li>
      <li><a href="#key-takeaways">Key Takeaways</a></li>`
    );
  }

  html = injectMicroParagraphs(html);
  fs.writeFileSync(path.join(ROOT, "index.html"), html);
  console.log("patched index.html");
}

const all = loadStories();
patchHomepage();
for (const s of all) patchStory(s, all);
console.log("phase 3 complete");
