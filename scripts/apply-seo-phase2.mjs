#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../theenchantedchronicles");
const BASE = "https://www.theenchantedchronicles.com";
const STORIES_DIR = path.join(ROOT, "locales/en/stories");
const CONTENT = fs.readFileSync(
  path.join(__dirname, "homepage-seo-content.html"),
  "utf8"
);

const PERSON_SCHEMA = `<script type="application/ld+json">{"@context":"https://schema.org","@type":"Person","name":"Agron Osmani","url":"${BASE}/","sameAs":[]}</script>`;

const HEAD_EXTRAS = `<meta name="robots" content="max-image-preview:large">
<link rel="alternate" type="application/rss+xml" href="/rss.xml" title="The Enchanted Chronicles RSS" />
<link rel="manifest" href="/manifest.json" />`;

const FOOTER_LEGAL = `<p class="footer-note__legal"><a href="/privacy">Privacy Policy</a> &middot; <a href="/terms">Terms of Service</a> &middot; <a href="/contact">Contact</a></p>`;

const SKIP_LINK = `<a href="#main-content" class="visually-hidden">Skip to main content</a>`;

function extractBlock(html, id) {
  const re = new RegExp(
    `<(?:nav|section)[^>]*id="${id}"[\\s\\S]*?</(?:nav|section)>`,
    "i"
  );
  return html.match(re)?.[0] || "";
}

function loadStories() {
  return fs
    .readdirSync(STORIES_DIR)
    .filter((f) => f.endsWith(".json") && f !== "_index.json")
    .map((f) => JSON.parse(fs.readFileSync(path.join(STORIES_DIR, f), "utf8")));
}

function addSrcset(html) {
  return html.replace(/<img([^>]*?)\ssrc="(\/images\/[^"]+)"([^>]*?)>/g, (m, a, src, b) => {
    if (m.includes("srcset=")) return m;
    const w = (a + b).match(/width="(\d+)"/)?.[1] || "800";
    return `<img${a} src="${src}" srcset="${src} ${w}w" sizes="(max-width: 600px) 100vw, ${w}px"${b}>`;
  });
}

function ensureHeadExtras(html) {
  if (html.includes("max-image-preview:large")) return html;
  return html.replace(
    /<meta name="theme-color"[^>]*>\r?\n/,
    (m) => m + HEAD_EXTRAS + "\n"
  );
}

function ensurePersonSchema(html) {
  if (html.includes('"@type":"Person"')) return html;
  return html.replace("</head>", `${PERSON_SCHEMA}\n</head>`);
}

function ensureSkipLink(html) {
  if (html.includes("Skip to main content")) return html;
  return html.replace("<body>", `<body>\n${SKIP_LINK}\n`);
}

function ensureFooterLegal(html) {
  if (html.includes('href="/privacy"')) return html;
  return html.replace(
    /<footer class="footer-note">/,
    (m) => m + `\n  <div class="footer-note__content glass-panel">\n  ${FOOTER_LEGAL}\n  </div>\n`
  ).replace(
    /(<footer class="footer-note">\s*<div class="footer-note__content glass-panel">)/,
    `$1\n  ${FOOTER_LEGAL}`
  );
  // simpler: insert before footer-note__copy or footer-note__cta
}

function patchFooter(html) {
  if (html.includes('href="/privacy"')) return html;
  return html.replace(
    /(<div class="footer-note__content glass-panel[^"]*">\s*)/,
    `$1<p class="footer-note__legal"><a href="/privacy">Privacy Policy</a> &middot; <a href="/terms">Terms of Service</a> &middot; <a href="/contact">Contact</a></p>\n  `
  );
}

function patchIndex() {
  let html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  html = ensureHeadExtras(html);
  html = ensurePersonSchema(html);
  html = ensureSkipLink(html);

  if (!html.includes('id="main-content"')) {
    html = html.replace("</header>", "</header>\n\n<main id=\"main-content\">");
    html = html.replace("<footer class=\"footer-note\">", "</main>\n\n<footer class=\"footer-note\">");
  }

  const toc = extractBlock(CONTENT, "toc");
  if (toc && !html.includes('id="toc"')) {
    html = html.replace(
      /<\/section>\r?\n\r?\n<section class="elenco section-gold-rule" id="elenco">/,
      `</section>\n\n${toc}\n\n<section class="elenco section-gold-rule" id="elenco">`
    );
  }

  const midBlocks = ["worldbuilding", "about-author", "themes", "story-teasers", "comparison"]
    .map((id) => extractBlock(CONTENT, id))
    .filter(Boolean)
    .join("\n\n");

  if (midBlocks && !html.includes('id="worldbuilding"')) {
    html = html.replace(
      /<section class="mission-vision section-gold-rule" id="mission">/,
      `${midBlocks}\n\n<section class="mission-vision section-gold-rule" id="mission">`
    );
  }

  const faq = extractBlock(CONTENT, "faq");
  if (faq) {
    html = html.replace(
      /<section class="coming-soon section-gold-rule" id="seo-faq"[\s\S]*?<\/section>/,
      faq
    );
  }

  const takeaways = extractBlock(CONTENT, "key-takeaways");
  if (takeaways && !html.includes('id="key-takeaways"')) {
    html = html.replace(
      /<footer class="footer-note">/,
      `${takeaways}\n\n<footer class="footer-note">`
    );
  }

  html = patchFooter(html);
  html = addSrcset(html);
  fs.writeFileSync(path.join(ROOT, "index.html"), html);
  console.log("patched index.html");
}

function breadcrumbSchema(title, url) {
  return `<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${BASE}/"},{"@type":"ListItem","position":2,"name":"Stories","item":"${BASE}/#elenco"},{"@type":"ListItem","position":3,"name":${JSON.stringify(title)},"item":${JSON.stringify(url)}}]}</script>`;
}

function patchStory(story) {
  const file = path.join(ROOT, "stories", `${story.slug}.html`);
  let html = fs.readFileSync(file, "utf8");
  const url = `${BASE}/stories/${story.slug}`;
  const title = story.title;

  html = ensureHeadExtras(html);
  if (!html.includes("BreadcrumbList")) {
    html = html.replace("</head>", `${breadcrumbSchema(title, url)}\n${PERSON_SCHEMA}\n</head>`);
  } else if (!html.includes('"@type":"Person"')) {
    html = html.replace("</head>", `${PERSON_SCHEMA}\n</head>`);
  }

  html = ensureSkipLink(html);

  const crumb = `<nav class="story-page__breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> &gt; <a href="/#elenco">Stories</a> &gt; <span>${title}</span></nav>`;
  if (!html.includes("story-page__breadcrumb")) {
    html = html.replace(
      /<main class="story-page">\s*<div class="story-page__top">/,
      `<main class="story-page" id="main-content">\n  ${crumb}\n  <div class="story-page__top">`
    );
  }

  if (!html.includes("<time datetime")) {
    html = html.replace(
      /<h1 class="story-page__title"[^>]*><\/h1>/,
      `<h1 class="story-page__title" data-i18n-story="title"></h1>\n      <p class="story-page__date"><time datetime="2026-07-01">July 1, 2026</time></p>`
    );
    // if h1 already has content from i18n, fix differently
    html = html.replace(
      /(<h1 class="story-page__title" data-i18n-story="title"><\/h1>)(?!\s*<p class="story-page__date">)/,
      `$1\n      <p class="story-page__date"><time datetime="2026-07-01">July 1, 2026</time></p>`
    );
  }

  html = patchFooter(html);
  html = addSrcset(html);
  fs.writeFileSync(file, html);
  console.log("patched story", story.slug);
}

function patchAbout() {
  let html = fs.readFileSync(path.join(ROOT, "about.html"), "utf8");
  html = ensureSkipLink(html);
  if (!html.includes('id="main-content"')) {
    html = html.replace('<main class="static-page">', '<main id="main-content" class="static-page">');
  }
  html = patchFooter(html);
  fs.writeFileSync(path.join(ROOT, "about.html"), html);
  console.log("patched about.html");
}

function patchLegalPages() {
  for (const name of ["privacy.html", "terms.html", "contact.html"]) {
    let html = fs.readFileSync(path.join(ROOT, name), "utf8");
    html = addSrcset(html);
    fs.writeFileSync(path.join(ROOT, name), html);
  }
}

function patchSitemap() {
  const file = path.join(ROOT, "sitemap.xml");
  let xml = fs.readFileSync(file, "utf8");
  for (const p of ["/privacy", "/terms", "/contact"]) {
    if (xml.includes(p)) continue;
    xml = xml.replace(
      "</urlset>",
      `  <url>\n    <loc>${BASE}${p}</loc>\n    <lastmod>2026-07-30</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.3</priority>\n  </url>\n</urlset>`
    );
  }
  fs.writeFileSync(file, xml);
  console.log("patched sitemap.xml");
}

patchIndex();
for (const s of loadStories()) patchStory(s);
patchAbout();
patchLegalPages();
patchSitemap();
console.log("phase 2 complete");
