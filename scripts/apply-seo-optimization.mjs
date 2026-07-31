#!/usr/bin/env node
/**
 * Apply SEO/AEO/GEO head tags and homepage content blocks.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../theenchantedchronicles");
const BASE = "https://www.theenchantedchronicles.com";
const STORIES_DIR = path.join(ROOT, "locales/en/stories");
const IMAGE_MAP = {
  "aurelius-and-the-forest-of-wonders": "aurelius-forest-of-wonders.webp",
};

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function escJson(s) {
  return JSON.stringify(String(s));
}

function truncate(s, max = 160) {
  const t = String(s).replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return t.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
}

function loadStories() {
  const stories = [];
  for (const file of fs.readdirSync(STORIES_DIR)) {
    if (!file.endsWith(".json") || file === "_index.json") continue;
    const data = JSON.parse(fs.readFileSync(path.join(STORIES_DIR, file), "utf8"));
    stories.push(data);
  }
  return stories.sort((a, b) => a.number - b.number);
}

function storyImageFile(slug) {
  return IMAGE_MAP[slug] || `${slug}.webp`;
}

function ensureOgAssets(stories) {
  const assetsDir = path.join(ROOT, "assets");
  const storiesAssets = path.join(assetsDir, "stories");
  fs.mkdirSync(storiesAssets, { recursive: true });

  const cover = path.join(ROOT, "images/cover1.webp");
  if (fs.existsSync(cover)) {
    fs.copyFileSync(cover, path.join(assetsDir, "og-cover.jpg"));
    fs.copyFileSync(cover, path.join(assetsDir, "logo.png"));
  }

  for (const s of stories) {
    const src = path.join(ROOT, "images", storyImageFile(s.slug));
    const dest = path.join(storiesAssets, `${s.slug}-cover.jpg`);
    if (fs.existsSync(src)) fs.copyFileSync(src, dest);
  }
}

function insertAfterDescription(head, block) {
  if (head.includes(block.trim().split("\n")[0])) return head;
  return head.replace(
    /(<meta name="description"[^>]*>\r?\n)/,
    `$1${block}\n`
  );
}

function insertBeforeThemeColor(head, block) {
  const marker = '<meta name="theme-color"';
  if (head.includes(block.trim().split("\n")[0])) return head;
  return head.replace(marker, `${block}\n${marker}`);
}

function patchHomepage() {
  const file = path.join(ROOT, "index.html");
  let html = fs.readFileSync(file, "utf8");

  html = html.replace(
    /<meta name="description"[^>]*>/,
    '<meta name="description" data-i18n-description="meta.homeDescription" content="Discover The Enchanted Chronicles – magical short stories of mystery, wonder, and timeless adventures." />'
  );

  const headBlock = `<link rel="canonical" href="${BASE}/" />
<meta property="og:title" content="The Enchanted Chronicles | Tales of Magic and Mystery" />
<meta property="og:description" content="Discover magical short stories filled with mystery, wonder, and timeless adventures." />
<meta property="og:url" content="${BASE}/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="The Enchanted Chronicles" />
<meta property="og:image" content="${BASE}/assets/og-cover.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="The Enchanted Chronicles | Tales of Magic and Mystery" />
<meta name="twitter:description" content="Discover magical short stories filled with mystery, wonder, and timeless adventures." />
<meta name="twitter:image" content="${BASE}/assets/og-cover.jpg" />
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"The Enchanted Chronicles","url":"${BASE}/","logo":"${BASE}/assets/logo.png","sameAs":[]}</script>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","name":"The Enchanted Chronicles","url":"${BASE}/"}</script>`;

  const headEnd = html.indexOf("</head>");
  const head = html.slice(0, headEnd);
  let newHead = head;
  if (!head.includes('rel="canonical"')) {
    newHead = insertAfterDescription(newHead, headBlock);
  }
  html = newHead + html.slice(headEnd);

  const aeoSection = `
<section class="coming-soon section-gold-rule" id="seo-faq" aria-label="About The Enchanted Chronicles">
  <div class="coming-soon__inner glass-panel reveal">
    <h2 class="coming-soon__title">What are The Enchanted Chronicles?</h2>
    <p class="coming-soon__desc">The Enchanted Chronicles is a growing collection of original fantasy short stories — tales of courage, mystery, magic, and wonder written to inspire readers of every age.</p>
    <h2 class="coming-soon__title">How should you read these magical stories?</h2>
    <p class="coming-soon__desc">Start with any story that catches your eye, read at your own pace, and return whenever you want a brief escape into enchanted worlds — each tale stands on its own.</p>
    <h2 class="coming-soon__title">Why do these tales matter in a modern world?</h2>
    <p class="coming-soon__desc">In a fast, noisy age, short fantasy stories offer pause, empathy, and imagination — reminders that kindness, bravery, and wonder still belong in everyday life.</p>
    <h2 class="coming-soon__title">Who are these stories written for?</h2>
    <p class="coming-soon__desc">Anyone who loves adventure — children, teens, and adults alike. If you enjoy heroes, mythical places, and heartfelt endings, this collection is for you.</p>
    <h2 class="coming-soon__title">Where can you find new stories?</h2>
    <p class="coming-soon__desc">New tales are added to the Story Collection on this site. Bookmark the homepage or subscribe to stay updated as the chronicles grow.</p>
    <p class="coming-soon__desc">Some readers see these stories as pure escapism, while others find reflections of real-world emotions and struggles.</p>
    <p class="coming-soon__desc">According to literary enthusiasts, short fantasy tales can offer both comfort and critical insight into human nature.</p>
    <p class="coming-soon__desc">On the other hand, casual readers might simply enjoy the magic without searching for deeper meaning — and that's perfectly fine.</p>
  </div>
</section>`;

  if (!html.includes('id="seo-faq"')) {
    html = html.replace(
      '<section class="newsletter section-gold-rule" id="newsletter">',
      `${aeoSection}\n\n<section class="newsletter section-gold-rule" id="newsletter">`
    );
  }

  fs.writeFileSync(file, html);
  console.log("patched index.html");
}

function patchAbout() {
  const file = path.join(ROOT, "about.html");
  let html = fs.readFileSync(file, "utf8");
  const block = `<link rel="canonical" href="${BASE}/about" />`;
  if (!html.includes('rel="canonical"')) {
    html = insertAfterDescription(html, block);
  }
  fs.writeFileSync(file, html);
  console.log("patched about.html");
}

function patchStory(story) {
  const file = path.join(ROOT, "stories", `${story.slug}.html`);
  if (!fs.existsSync(file)) {
    console.warn("missing", file);
    return;
  }
  let html = fs.readFileSync(file, "utf8");
  const url = `${BASE}/stories/${story.slug}`;
  const title = story.title;
  const desc = truncate(story.excerpt || story.metaDescription, 160);
  const ogImage = `${BASE}/assets/stories/${story.slug}-cover.jpg`;

  const block = `<link rel="canonical" href="${url}" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(desc)}" />
<meta property="og:url" content="${url}" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="The Enchanted Chronicles" />
<meta property="og:image" content="${ogImage}" />
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":${escJson(title)},"description":${escJson(desc)},"author":{"@type":"Person","name":"Agron Osmani"},"publisher":{"@type":"Organization","name":"The Enchanted Chronicles"},"datePublished":"2026-07-01","dateModified":"2026-07-01","mainEntityOfPage":{"@type":"WebPage","@id":${escJson(url)}}}</script>`;

  if (!html.includes('rel="canonical"')) {
    html = insertBeforeThemeColor(html, block);
  }
  fs.writeFileSync(file, html);
  console.log("patched", story.slug);
}

function writeRobots() {
  fs.writeFileSync(
    path.join(ROOT, "robots.txt"),
    `User-agent: *\nDisallow:\nSitemap: ${BASE}/sitemap.xml\n`
  );
  console.log("wrote robots.txt");
}

function patchVercel() {
  const file = path.join(ROOT, "vercel.json");
  const cfg = JSON.parse(fs.readFileSync(file, "utf8"));
  cfg.headers = [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
        {
          key: "Content-Security-Policy",
          value:
            "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'",
        },
      ],
    },
  ];
  fs.writeFileSync(file, JSON.stringify(cfg, null, 2) + "\n");
  console.log("patched vercel.json");
}

const stories = loadStories();
ensureOgAssets(stories);
writeRobots();
patchHomepage();
patchAbout();
for (const s of stories) patchStory(s);
patchVercel();
console.log("done", stories.length, "stories");
