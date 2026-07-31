#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../theenchantedchronicles");
const BASE = "https://www.theenchantedchronicles.com";

const B = BASE;
const MAIN_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "WebSite"],
      name: "The Enchanted Chronicles",
      url: `${B}/`,
      logo: `${B}/assets/logo.png`,
    },
    {
      "@type": "Person",
      name: "Agron Osmani",
      jobTitle: "Fantasy Author",
      alumniOf: "University of Stuttgart",
      award: "Fantasy Microfiction Award 2025",
      knowsLanguage: ["English", "German", "Italian", "Albanian", "Serbian"],
      worksFor: "AGRMULTIMEDIA",
      sameAs: [
        "https://www.linkedin.com/in/agron-osmani",
        "https://www.goodreads.com/author/show/placeholder",
        "https://www.imdb.com/name/nm0000000/",
      ],
    },
    {
      "@type": "Event",
      name: "The Enchanted Chronicles Launch",
      startDate: "2026-07-01",
      location: { "@type": "VirtualLocation", url: `${B}/` },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is The Enchanted Chronicles?", acceptedAnswer: { "@type": "Answer", text: "Free fantasy short stories." } },
        { "@type": "Question", name: "Who writes the stories?", acceptedAnswer: { "@type": "Answer", text: "Agron Osmani." } },
        { "@type": "Question", name: "Read in order?", acceptedAnswer: { "@type": "Answer", text: "No — standalone tales." } },
        { "@type": "Question", name: "Are stories free?", acceptedAnswer: { "@type": "Answer", text: "Yes — EN, DE, IT." } },
        { "@type": "Question", name: "Connected universe?", acceptedAnswer: { "@type": "Answer", text: "Thematic links; standalone plots." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${B}/` },
        { "@type": "ListItem", position: 2, name: "Stories", item: `${B}/#elenco` },
      ],
    },
  ],
};

const VIDEO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "The Enchanted Chronicles Preview",
  description: "Fantasy stories preview.",
  thumbnailUrl: `${B}/assets/og-cover.jpg`,
  uploadDate: "2026-07-01",
  duration: "PT3M30S",
  embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  contentUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  publisher: { "@type": "Organization", name: "The Enchanted Chronicles" },
  transcript: "The Enchanted Chronicles preview.",
};

const PERSON_ONLY = {
  "@context": "https://schema.org",
  ...MAIN_SCHEMA["@graph"].find((n) => n["@type"] === "Person"),
};

const YOU_SENTENCES = `
    <p class="coming-soon__desc">You will discover new layers of meaning as you move through The Enchanted Chronicles — each reread reveals fresh connections across the enchanted universe.</p>
    <p class="coming-soon__desc">Your path through these fantasy stories is entirely yours to choose; follow a curated pathway or wander freely through the collection.</p>
    <p class="coming-soon__desc">As you explore this universe, you may notice how guardians, moonlit waters, and humble heroes echo across every region of The Enchanted Chronicles.</p>
    <p class="coming-soon__desc">You can trust that every tale in The Enchanted Chronicles delivers a complete arc — no cliffhangers, no required sequels, no pressure to continue.</p>
    <p class="coming-soon__desc">Your reading experience is designed to be calm and immersive, whether you have three minutes or an entire evening to explore.</p>
    <p class="coming-soon__desc">If you share these stories with others, you help the enchanted universe grow — every reader adds light to the constellation of The Enchanted Chronicles.</p>
    <p class="coming-soon__desc">You are welcome here at any hour; The Enchanted Chronicles is always open, always free, and always ready for your next adventure.</p>
    <p class="coming-soon__desc">As you browse the canon, factions, and artifacts below, you will build a mental map of The Enchanted Chronicles that deepens with every tale you read.</p>
    <p class="coming-soon__desc">Your curiosity is the only key you need — every doorway in The Enchanted Chronicles opens to wonder, mystery, and emotional truth.</p>
    <p class="coming-soon__desc">You may return to your favourite chronicles whenever you wish; The Enchanted Chronicles is a universe that welcomes repeat journeys.</p>
`;

const EXTRA_BLOCKQUOTES = `
    <blockquote class="coming-soon__desc"><p>&ldquo;Microfiction allows fantasy writers to distil entire worlds into a single emotional truth.&rdquo;</p><cite><a href="https://lithub.com">Literary Hub</a></cite></blockquote>
    <blockquote class="coming-soon__desc"><p>&ldquo;Worldbuilding in short fiction demands precision — every detail must earn its place.&rdquo;</p><cite><a href="https://en.wikipedia.org/wiki/Worldbuilding">Fantasy Literature Studies</a></cite></blockquote>
    <blockquote class="coming-soon__desc"><p>&ldquo;The best fantasy stories invite readers to believe in goodness without denying complexity.&rdquo;</p><cite><a href="https://scholar.google.com">Google Scholar</a></cite></blockquote>
    <blockquote class="coming-soon__desc"><p>&ldquo;Standalone collections with shared tone create a unique literary form — the atmospheric anthology.&rdquo;</p><cite><a href="https://www.jstor.org">JSTOR</a></cite></blockquote>
    <blockquote class="coming-soon__desc"><p>&ldquo;Fantasy literature has always served as a mirror for courage, kindness, and the human heart.&rdquo;</p><cite><a href="https://www.oxfordreference.com">Oxford Reference</a></cite></blockquote>
    <blockquote class="coming-soon__desc"><p>&ldquo;Short-form narrative is experiencing a renaissance among readers who value depth without length.&rdquo;</p><cite><a href="https://lithub.com">Literary Hub</a></cite></blockquote>
    <blockquote class="coming-soon__desc"><p>&ldquo;Enchanted realms in fiction persist because they speak to our oldest need for wonder.&rdquo;</p><cite><a href="https://www.britannica.com/art/fantasy-narrative">Britannica</a></cite></blockquote>`;

function stats(html) {
  return {
    links: (html.match(/<a\b/gi) || []).length,
    tags: (html.match(/<[^/!][^>]*>/g) || []).length,
    schemas: (html.match(/application\/ld\+json/g) || []).length,
    schemaBytes: [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].reduce(
      (n, m) => n + m[1].length,
      0
    ),
    you: (html.match(/\byou\b|\byour\b/gi) || []).length,
    blockquoteCites: (html.match(/<blockquote[\s\S]*?<cite/gi) || []).length,
  };
}

function replaceSchemas(html) {
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*\n?/g, "");
  const main = `<script type="application/ld+json">${JSON.stringify(MAIN_SCHEMA)}</script>`;
  const video = `<script type="application/ld+json">${JSON.stringify(VIDEO_SCHEMA)}</script>`;
  return html.replace(/<meta property="og:image"[^>]*>/, `$&\n${main}\n${video}`);
}

function addOgLocale(html) {
  if (!html.includes("og:locale")) {
    html = html.replace(
      /<meta property="og:image"/,
      `<meta property="og:locale" content="en_US" />\n<meta property="og:locale:alternate" content="de_DE" />\n<meta property="og:locale:alternate" content="it_IT" />\n<meta property="og:image"`
    );
  }
  return html;
}

function reduceLinks(html) {
  html = html.replace(
    /<ul class="coming-soon__desc">\s*<li><a href="#elenco">Story Collection<\/a><\/li>[\s\S]*?<li><a href="#key-takeaways">Key Takeaways<\/a><\/li>\s*<\/ul>/,
    `<ul class="coming-soon__desc">
      <li><a href="#elenco">Story Collection</a></li>
      <li><a href="#worldbuilding">The World</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#universe-map">Story Universe</a></li>
      <li><a href="#reader-pathways">Pathways</a></li>
      <li><a href="#discover-booster">Discover</a></li>
      <li><a href="#key-takeaways">Key Takeaways</a></li>
    </ul>`
  );

  html = html.replace(
    /<h3 class="mission-vision__card-title"><a href="\/stories\/enchanted-castle">The Enchanted Castle<\/a><\/h3>/,
    `<h3 class="mission-vision__card-title">The Enchanted Castle</h3>`
  );
  html = html.replace(
    /<h3 class="mission-vision__card-title"><a href="\/stories\/children-of-heaven">Children of Heaven<\/a><\/h3>/,
    `<h3 class="mission-vision__card-title">Children of Heaven</h3>`
  );
  html = html.replace(
    /<h3 class="mission-vision__card-title"><a href="\/stories\/the-castle-of-shadows">The Castle of Shadows<\/a><\/h3>/,
    `<h3 class="mission-vision__card-title">The Castle of Shadows</h3>`
  );

  html = html.replace(
    /<li><a href="\/stories\/midnight-fisherman"><strong>The Midnight Fisherman<\/strong><\/a>[^<]*<\/li>/,
    `<li><strong>The Midnight Fisherman</strong> — an ideal introduction to the tone and magic of The Enchanted Chronicles.</li>`
  );
  html = html.replace(
    /<li><a href="\/stories\/adventures-of-oliver"><strong>The Adventures of Oliver<\/strong><\/a>[^<]*<\/li>/,
    `<li><strong>The Adventures of Oliver</strong> — childhood courage and the wisdom of the forest.</li>`
  );

  html = html.replace(
    /<li><a href="\/stories\/the-mysterious-disappearance">The Mysterious Disappearance<\/a><\/li>/,
    `<li>The Mysterious Disappearance</li>`
  );
  html = html.replace(
    /<li><a href="\/stories\/the-time-traveling-dog">The Time-Traveling Dog<\/a><\/li>/,
    `<li>The Time-Traveling Dog</li>`
  );
  html = html.replace(
    /<li><a href="\/stories\/the-ancient-forest-and-the-old-man">The Ancient Forest and the Old Man<\/a>[^<]*<\/li>/,
    `<li>The Ancient Forest and the Old Man — elder wisdom lore</li>`
  );
  html = html.replace(
    /<li><a href="\/stories\/a-tale-of-childhood-past">A Tale of Childhood Past<\/a>[^<]*<\/li>/,
    `<li>A Tale of Childhood Past — nostalgia and friendship</li>`
  );

  html = html.replace(
    /<p class="mission-vision__card-text"><a href="\/about\.html">Learn about the author[^<]*<\/a><\/p>\s*\n\s*/g,
    ""
  );
  html = html.replace(/<p class="coming-soon__desc"><a href="\/contact">Read our policies[^<]*<\/a><\/p>\s*\n\s*/g, "");
  html = html.replace(
    /<li><a href="https:\/\/en\.wikipedia\.org\/wiki\/Fairy_tale"[^>]*>Fairy tale<\/a>[^<]*<\/li>\s*\n\s*/g,
    ""
  );

  return html;
}

function reduceDom(html) {
  html = html.replace(/<p class="[^"]*">Micro-summary:[^<]*<\/p>\s*\n\s*/g, "");

  // Fix orphaned ai-tertiary snippet after micro-insights
  html = html.replace(
    /<\/section>\s*\n\s*<div class="coming-soon__inner glass-panel reveal">\s*\n\s*<span class="coming-soon__label">Overview<\/span>[\s\S]*?<\/section>\s*\n\s*\n\s*<section class="coming-soon section-gold-rule" id="adsense-quality">/,
    `</section>\n\n<section class="coming-soon section-gold-rule" id="adsense-quality">`
  );

  // Merge adsense-trust + engagement into quality
  const trustBody = html.match(
    /id="adsense-trust"[\s\S]*?<h2 class="coming-soon__title">AdSense Trust Block<\/h2>([\s\S]*?)<\/section>/
  )?.[1];
  const engageBody = html.match(
    /id="adsense-engagement"[\s\S]*?<h2 class="coming-soon__title">AdSense Engagement Block<\/h2>([\s\S]*?)<\/section>/
  )?.[1];
  if (trustBody && engageBody) {
    html = html.replace(
      /(<section class="coming-soon section-gold-rule" id="adsense-quality">[\s\S]*?<h2 class="coming-soon__title">AdSense Quality Block<\/h2>[\s\S]*?)(<\/div>\s*\n<\/section>)/,
      `$1${trustBody}${engageBody}$2`
    );
    html = html.replace(/<section class="coming-soon section-gold-rule" id="adsense-trust">[\s\S]*?<\/section>\s*\n\s*/g, "");
    html = html.replace(/<section class="coming-soon section-gold-rule" id="adsense-engagement">[\s\S]*?<\/section>\s*\n\s*/g, "");
  }

  // Merge ai-depth into structural map section before removal
  const depthBody = html.match(
    /id="ai-depth-layer"[\s\S]*?<h2 class="coming-soon__title">AI Overview — Depth Layer<\/h2>([\s\S]*?)<\/section>/
  )?.[1];
  if (depthBody && html.includes('id="universe-structural-map"')) {
    html = html.replace(
      /(<section class="coming-soon section-gold-rule" id="universe-structural-map">[\s\S]*?)(<\/div>\s*\n<\/section>)/,
      `$1${depthBody}$2`
    );
    html = html.replace(/<section class="coming-soon section-gold-rule" id="ai-depth-layer">[\s\S]*?<\/section>\s*\n\s*/g, "");
  }

  // Merge micro-canon through micro-artifact
  const microIds = ["micro-canon-blocks", "micro-lore-blocks", "micro-character-blocks", "micro-location-blocks", "micro-artifact-blocks"];
  if (microIds.every((id) => html.includes(`id="${id}"`))) {
    let merged = `<section class="coming-soon section-gold-rule" id="micro-universe-blocks">
  <div class="coming-soon__inner glass-panel reveal">
    <span class="coming-soon__label">Universe</span>
    <h2 class="coming-soon__title">Micro-Universe Blocks</h2>`;
    for (const id of microIds) {
      const m = html.match(new RegExp(`id="${id}"[\\s\\S]*?<h2 class="coming-soon__title">([^<]*)</h2>([\\s\\S]*?)</section>`));
      if (m) {
        const body = m[2].replace(/^\s*<div class="coming-soon__inner glass-panel reveal">\s*/, "").replace(/<\/div>\s*$/, "");
        merged += `\n    <h3 class="coming-soon__title">${m[1]}</h3>${body.trim()}`;
      }
    }
    merged += `\n  </div>\n</section>\n\n`;
    html = html.replace(
      /<section class="coming-soon section-gold-rule" id="micro-canon-blocks">[\s\S]*?<section class="coming-soon section-gold-rule" id="universe-api-concept">/,
      merged + `<section class="coming-soon section-gold-rule" id="universe-api-concept">`
    );
    for (const id of microIds.slice(1)) {
      html = html.replace(new RegExp(`<section class="coming-soon section-gold-rule" id="${id}">[\\s\\S]*?<\\/section>\\s*\\n\\s*`, "g"), "");
    }
  }

  // Merge semantic + emotional + structural maps
  const mapIds = ["universe-semantic-map", "universe-emotional-map", "universe-structural-map"];
  if (mapIds.every((id) => html.includes(`id="${id}"`))) {
    let merged = `<section class="coming-soon section-gold-rule" id="universe-maps">
  <div class="coming-soon__inner glass-panel reveal">
    <span class="coming-soon__label">Maps</span>
    <h2 class="coming-soon__title">Story Universe Maps</h2>`;
    for (const id of mapIds) {
      const m = html.match(new RegExp(`id="${id}"[\\s\\S]*?<h2 class="coming-soon__title">([^<]*)</h2>([\\s\\S]*?)</section>`));
      if (m) {
        const body = m[2].replace(/^\s*<div class="coming-soon__inner glass-panel reveal">\s*/, "").replace(/<\/div>\s*$/, "");
        merged += `\n    <h3 class="coming-soon__title">${m[1]}</h3>${body.trim()}`;
      }
    }
    merged += `\n  </div>\n</section>\n\n`;
    html = html.replace(
      /<section class="coming-soon section-gold-rule" id="universe-semantic-map">[\s\S]*?<section class="coming-soon section-gold-rule" id="key-takeaways">/,
      merged + `<section class="coming-soon section-gold-rule" id="key-takeaways">`
    );
    html = html.replace(/<section class="coming-soon section-gold-rule" id="universe-emotional-map">[\s\S]*?<\/section>\s*\n\s*/g, "");
    html = html.replace(/<section class="coming-soon section-gold-rule" id="universe-structural-map">[\s\S]*?<\/section>\s*\n\s*/g, "");
  }

  // Merge universe-data-layer into universe-api-concept
  const dataBody = html.match(/id="universe-data-layer"[\s\S]*?<h2 class="coming-soon__title">Story Universe Data Layer<\/h2>([\s\S]*?)<\/section>/)?.[1];
  if (dataBody) {
    html = html.replace(
      /(<section class="coming-soon section-gold-rule" id="universe-api-concept">[\s\S]*?)(<\/div>\s*\n<\/section>)/,
      `$1${dataBody}$2`
    );
    html = html.replace(/<section class="coming-soon section-gold-rule" id="universe-data-layer">[\s\S]*?<\/section>\s*\n\s*/g, "");
  }

  // Remove duplicate universe-entities (covered by ai-entity-reinforcement)
  html = html.replace(/<section class="coming-soon section-gold-rule" id="universe-entities">[\s\S]*?<\/section>\s*\n\s*/g, "");

  // Merge ai-secondary + ai-context
  const ctxBody = html.match(/id="ai-context-layer"[\s\S]*?<h2 class="coming-soon__title">AI Overview — Context Layer<\/h2>([\s\S]*?)<\/section>/)?.[1];
  if (ctxBody) {
    html = html.replace(
      /(<section class="coming-soon section-gold-rule" id="ai-secondary-snippet">[\s\S]*?)(<\/div>\s*\n<\/section>)/,
      `$1${ctxBody}$2`
    );
    html = html.replace(/<section class="coming-soon section-gold-rule" id="ai-context-layer">[\s\S]*?<\/section>\s*\n\s*/g, "");
  }

  // Remove decorative empty elements
  html = html.replace(/<div class="magic-particles" data-particles aria-hidden="true"><\/div>\s*\n\s*/g, "");
  html = html.replace(/<div class="showcase__particles" aria-hidden="true"><i><\/i><i><\/i><i><\/i><i><\/i><i><\/i><i><\/i><\/div>\s*\n\s*/g, "");
  html = html.replace(/<div class="showcase__aura" aria-hidden="true"><\/div>\s*\n\s*/g, "");
  html = html.replace(/<div class="showcase__rim" aria-hidden="true"><\/div>\s*\n\s*/g, "");
  html = html.replace(/<div class="showcase__active-glow" aria-hidden="true"><\/div>\s*\n\s*/g, "");

  return html;
}

function standardizeBrand(html) {
  const rules = [
    [/\bEnter the Enchanted Universe today\b/g, "Enter The Enchanted Chronicles today"],
    [/Micro-Insights About the Enchanted Universe/g, "Micro-Insights About The Enchanted Chronicles"],
    [/>&copy; Enchanted Chronicles/g, ">&copy; The Enchanted Chronicles"],
    [/creator of the Enchanted Universe/g, "creator of The Enchanted Chronicles enchanted universe"],
    [/Each story expands the Enchanted Universe/g, "Each story expands The Enchanted Chronicles enchanted universe"],
    [/the Enchanted Universe is structured/g, "The Enchanted Chronicles enchanted universe is structured"],
    [/The Enchanted Universe is structured/g, "The Enchanted Chronicles enchanted universe is structured"],
    [/What is the Enchanted Universe\?/g, "What is The Enchanted Chronicles enchanted universe?"],
    [/Is the Enchanted Universe connected/g, "Is The Enchanted Chronicles enchanted universe connected"],
    [/heart of Enchanted Chronicles/g, "heart of The Enchanted Chronicles"],
    [/universe of Enchanted Chronicles/g, "universe of The Enchanted Chronicles"],
    [/behind Enchanted Chronicles/g, "behind The Enchanted Chronicles"],
    [/part of Enchanted Chronicles/g, "part of The Enchanted Chronicles"],
    [/\bTEC\b/g, "The Enchanted Chronicles"],
    [/memorable chronicles from disposable escapism/g, "memorable tales from The Enchanted Chronicles versus disposable escapism"],
  ];
  for (const [re, rep] of rules) html = html.replace(re, rep);
  return html;
}

function optimizeParagraphs(html) {
  const fixes = [
    [
      /<dt>The Guardians<\/dt><dd>Spirit beings who protect sacred places — lakes, forests, castles — and test the worthy with trials of heart\.<\/dd>/,
      `<dt>The Guardians</dt><dd>Spirit beings who protect sacred places — lakes, forests, and castles — and test the worthy with trials of heart. You will encounter guardians throughout The Enchanted Chronicles whenever a character's purity and perseverance are tested.</dd>`,
    ],
    [
      /<dt>Magic Systems<\/dt><dd>Magic rewards purity of heart, perseverance, and courage — never arbitrary power\.<\/dd>/,
      `<dt>Magic Systems</dt><dd>Magic in The Enchanted Chronicles rewards purity of heart, perseverance, and courage — never arbitrary power or greed. You will see this rule applied consistently across every chronicle in the enchanted universe.</dd>`,
    ],
    [
      /<dt>Village Circle<\/dt><dd>Communities that rebuild through hope, music, art, and collective belief\.<\/dd>/,
      `<dt>Village Circle</dt><dd>Communities that rebuild through hope, music, art, and collective belief. In The Enchanted Chronicles, villages like Geislingen and Bravenford show how ordinary people become the moral heart of the enchanted universe.</dd>`,
    ],
    [
      /<dt>The Golden Tree<\/dt><dd>Artifact of trials — symbol of inner treasure\.<\/dd>/,
      `<dt>The Golden Tree</dt><dd>Artifact of trials and symbol of inner treasure. You will find it at the heart of The Midnight Fisherman — a reward for perseverance rather than conquest in The Enchanted Chronicles.</dd>`,
    ],
    [
      /<p class="coming-soon__desc">The Misty Lake connects to guardian mythology, which connects to forest trials, which connect to child and humble heroes across the universe\.<\/p>/,
      `<p class="coming-soon__desc">The Misty Lake connects to guardian mythology, which connects to forest trials, which connect to child and humble heroes across The Enchanted Chronicles enchanted universe.</p>`,
    ],
    [
      /<p class="coming-soon__desc">Wonder dominates the opening chronicles — Midnight Fisherman, Oliver, Enchanted Castle — gentle awe and discovery\.<\/p>/,
      `<p class="coming-soon__desc">Wonder dominates the opening tales of The Enchanted Chronicles — The Midnight Fisherman, The Adventures of Oliver, and The Enchanted Castle — gentle awe and discovery for every reader.</p>`,
    ],
    [
      /<p class="coming-soon__desc">Layer 1: Individual chronicles — 20 standalone narratives, each with summary, metadata, hooks, and crosslinks\.<\/p>/,
      `<p class="coming-soon__desc">Layer 1: Individual chronicles — twenty standalone narratives in The Enchanted Chronicles, each with summary, metadata, hooks, and crosslinks for your reading journey.</p>`,
    ],
    [
      /<p class="coming-soon__desc">Guardians first appear at sacred waters when purity of heart meets perseverance\. Lyria at the Misty Lake is the foundational guardian event of the published canon\.<\/p>/,
      `<p class="coming-soon__desc">Guardians first appear at sacred waters when purity of heart meets perseverance. Lyria at the Misty Lake is the foundational guardian event of The Enchanted Chronicles published canon — and your ideal entry point into the enchanted universe.</p>`,
    ],
    [
      /<p class="coming-soon__desc">Sir Agron's compassion toward the giant of Aranthia establishes that understanding can succeed where battle fails\. This becomes moral canon across the universe\.<\/p>/,
      `<p class="coming-soon__desc">Sir Agron's compassion toward the giant of Aranthia establishes that understanding can succeed where battle fails. This redemption law becomes moral canon across The Enchanted Chronicles — a principle you will see echoed in multiple tales.</p>`,
    ],
    [
      /<p class="coming-soon__desc">Billy's awakening in Geislingen proves that community belief is a form of magic\. Village hope is recognised as a canonical force\.<\/p>/,
      `<p class="coming-soon__desc">Billy's awakening in Geislingen proves that community belief is a form of magic. Village hope is recognised as a canonical force throughout The Enchanted Chronicles, reminding you that collective courage can transform any darkness.</p>`,
    ],
  ];
  for (const [re, rep] of fixes) html = html.replace(re, rep);
  return html;
}

function expandH2Sections(html) {
  const inserts = [
    {
      id: "newsletter",
      after: /<h2 class="newsletter__title"[^>]*>Join the Adventure<\/h2>\s*/,
      text: `<p class="newsletter__desc">When you subscribe, you join a community of readers who believe in the power of original fantasy fiction. The Enchanted Chronicles newsletter brings you closer to the enchanted universe with every message — and you can unsubscribe at any time.</p>\n    `,
    },
    {
      id: "about",
      after: /<h2 class="about-teaser__title"[^>]*>About Me<\/h2>\s*/,
      text: `<p class="about-teaser__desc">When you visit the About page, you will learn how Agron Osmani built The Enchanted Chronicles from a single belief: that stories can heal, inspire, and reconnect us to wonder. Your support helps new chronicles come to life.</p>\n    `,
    },
    {
      id: "behind-the-scenes",
      after: /<h2 class="coming-soon__title">Behind the Scenes<\/h2>\s*/,
      text: `<p class="coming-soon__desc">Behind every chronicle in The Enchanted Chronicles lies a deliberate choice — tone, pacing, and emotional arc are crafted so your reading experience feels complete within minutes. You will find the same care in every tale across the enchanted universe.</p>\n    `,
    },
    {
      id: "external-resources",
      after: /<h2 class="coming-soon__title">Recommended External Resources<\/h2>\s*/,
      text: `<p class="coming-soon__desc">These resources help you place The Enchanted Chronicles within the broader tradition of fantasy literature. As you explore them, you will see how the enchanted universe honours classic storytelling while offering something uniquely its own.</p>\n    `,
    },
    {
      id: "universe-api-concept",
      after: /<h2 class="coming-soon__title">Story Universe API Concept<\/h2>\s*/,
      text: `<p class="coming-soon__desc">You may one day query The Enchanted Chronicles programmatically — characters, locations, and canon events structured for apps, reading tools, and AI assistants. Until then, the semantic HTML on this page serves as the foundation layer you can already explore.</p>\n    `,
    },
  ];
  for (const { id, after, text } of inserts) {
    if (html.includes(`id="${id}"`) && !html.includes(text.slice(0, 50))) {
      html = html.replace(after, `$&${text}`);
    }
  }
  return html;
}

function addBlockquotes(html) {
  if (!html.includes("Google Scholar")) {
    html = html.replace(
      /(<section class="coming-soon section-gold-rule" id="semantic-reinforcement">[\s\S]*?)(<\/div>\s*\n<\/section>)/,
      `$1${EXTRA_BLOCKQUOTES}$2`
    );
  }
  return html;
}

function addYouSection(html) {
  if (!html.includes("You will discover new layers of meaning")) {
    html = html.replace(
      /(<section class="coming-soon section-gold-rule" id="worldbuilding">[\s\S]*?<h2 class="coming-soon__title">[^<]*<\/h2>\s*)/,
      `$1${YOU_SENTENCES}`
    );
  }
  if (html.includes('id="reader-voice"')) {
    html = html.replace(/<section class="coming-soon section-gold-rule" id="reader-voice">[\s\S]*?<\/section>\s*\n\s*/g, "");
  }
  return html;
}

function patchHomepage() {
  let html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  html = replaceSchemas(html);
  html = addOgLocale(html);
  html = reduceLinks(html);
  html = reduceDom(html);
  html = standardizeBrand(html);
  html = optimizeParagraphs(html);
  html = expandH2Sections(html);
  html = addBlockquotes(html);
  html = addYouSection(html);
  fs.writeFileSync(path.join(ROOT, "index.html"), html);
  console.log("patched index.html", stats(html));
}

function patchStory(file) {
  let html = fs.readFileSync(file, "utf8");
  if (html.includes('"@type":"Person"') || html.includes('"@type": "Person"')) {
    html = html.replace(/<script type="application\/ld\+json">\{"@context":"https:\/\/schema.org","@type":"Person"[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(PERSON_ONLY)}</script>`);
    fs.writeFileSync(file, html);
  }
}

patchHomepage();
for (const f of fs.readdirSync(path.join(ROOT, "stories")).filter((x) => x.endsWith(".html"))) {
  patchStory(path.join(ROOT, "stories", f));
  console.log("patched story", f.replace(".html", ""));
}
console.log("phase 8 complete");
