#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../theenchantedchronicles");
const PHASE6 = fs.readFileSync(
  path.join(__dirname, "homepage-seo-phase6.html"),
  "utf8"
);

const CONTEXT_LAYER = `<section class="coming-soon section-gold-rule" id="ai-context-layer">
  <div class="coming-soon__inner glass-panel reveal">
    <span class="coming-soon__label">Context</span>
    <h2 class="coming-soon__title">AI Overview — Context Layer</h2>
    <p class="coming-soon__desc">The Enchanted Chronicles is a structured fantasy story platform — twenty original short tales organised for search engines, AI overviews, and human readers alike. Each page includes summaries, metadata, schema markup, and semantic HTML designed for machine readability and human immersion.</p>
    <p class="coming-soon__desc">The site serves readers seeking brief, emotionally rich fantasy fiction — free, multilingual, and accessible on any device without registration.</p>
  </div>
</section>

`;

function injectOnce(html, checkId, anchor, insertion) {
  if (html.includes(checkId)) return html;
  if (!html.includes(anchor)) return html;
  return html.replace(anchor, insertion + anchor);
}

function patchHomepage() {
  let html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");

  // Head meta — AI Topic & Context Reinforcement
  if (!html.includes('name="ai-topical-authority"')) {
    html = html.replace(
      /<meta name="robots" content="max-image-preview:large">/,
      `<meta name="robots" content="max-image-preview:large">
<meta name="ai-topical-authority" content="fantasy, magic, lore, enchanted universe, short stories, microfiction, mythology, emotional narratives, worldbuilding, character arcs">
<meta name="ai-contextual-depth" content="interconnected stories, shared universe, thematic consistency, narrative cohesion, emotional resonance">`
    );
  }

  // Hyper snippet below ultra snippet
  if (!html.includes("ai-overview-hyper")) {
    html = html.replace(
      /(<p class="hero__desc ai-overview-ultra">[\s\S]*?<\/p>)/,
      `$1
      <p class="hero__desc ai-overview-hyper">The Enchanted Chronicles represents a fully interconnected fantasy micro-universe engineered for AI comprehension, reader immersion, and semantic clarity. Every chronicle contributes entities, themes, and emotional arcs to a cohesive Enchanted Universe.</p>`
    );
  }

  // Fix orphaned ul before toc (phase 5 artifact)
  html = html.replace(
    /<\/section>\s*\n\s*<ul class="coming-soon__desc">\s*\n\s*<li>Guardians protect sacred waters and forests<\/li>[\s\S]*?<\/ul>\s*\n\s*<nav class="coming-soon section-gold-rule" id="toc"/,
    `</section>

<nav class="coming-soon section-gold-rule" id="toc"`
  );

  // Context layer — middle of homepage (after secondary snippet)
  if (!html.includes('id="ai-context-layer"')) {
    html = html.replace(
      /<section class="coming-soon section-gold-rule" id="worldbuilding">/,
      `${CONTEXT_LAYER}<section class="coming-soon section-gold-rule" id="worldbuilding">`
    );
  }

  // Phase 6 sections before key-takeaways
  if (!html.includes('id="adsense-quality"')) {
    html = html.replace(
      /<section class="coming-soon section-gold-rule" id="key-takeaways">/,
      `${PHASE6}\n<section class="coming-soon section-gold-rule" id="key-takeaways">`
    );
  }

  // Final CTA injections in existing sections (3 CTAs in different sections)
  html = injectOnce(
    html,
    "Dive into the Story Collection now.",
    `<span class="elenco__label" data-i18n="elenco.label">Stories</span>`,
    `<p class="elenco__sub"><a href="#elenco">Dive into the Story Collection now.</a></p>
      `
  );
  html = injectOnce(
    html,
    "Learn about the author behind the universe.",
    `<h2 class="mission-vision__title">About the Author</h2>`,
    `<p class="mission-vision__card-text"><a href="/about.html">Learn about the author behind the universe.</a></p>
      `
  );
  html = injectOnce(
    html,
    "Read our policies and get in touch.",
    `<span class="coming-soon__label">Trust</span>`,
    `<p class="coming-soon__desc"><a href="/contact">Read our policies and get in touch.</a></p>
    `
  );

  // TOC links
  if (!html.includes('href="#adsense-quality"')) {
    html = html.replace(
      /<li><a href="#ai-tertiary-snippet">Tertiary Snippet<\/a><\/li>/,
      `<li><a href="#ai-tertiary-snippet">Tertiary Snippet</a></li>
      <li><a href="#ai-context-layer">Context Layer</a></li>
      <li><a href="#ai-depth-layer">Depth Layer</a></li>
      <li><a href="#adsense-quality">Quality</a></li>
      <li><a href="#adsense-trust">Trust</a></li>
      <li><a href="#adsense-engagement">Engagement</a></li>
      <li><a href="#ai-entity-reinforcement">Entity Layer</a></li>
      <li><a href="#topical-authority">Topical Authority</a></li>
      <li><a href="#semantic-reinforcement">Semantic Layer</a></li>
      <li><a href="#universe-semantic-map">Semantic Map</a></li>
      <li><a href="#homepage-final-cta">Start Reading</a></li>`
    );
  }

  fs.writeFileSync(path.join(ROOT, "index.html"), html);
  console.log("patched index.html");
}

patchHomepage();
console.log("phase 6 complete");
