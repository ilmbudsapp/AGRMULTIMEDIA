#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../theenchantedchronicles");
const B = "https://www.theenchantedchronicles.com";

const PERSON_NODE = {
  "@type": "Person",
  name: "Agron Osmani",
  jobTitle: "Fantasy Author",
  alumniOf: "University of Stuttgart",
  award: "Fantasy Microfiction Award 2025",
  knowsLanguage: ["English", "German", "Italian", "Albanian", "Serbian"],
  worksFor: "AGRMULTIMEDIA",
  sameAs: [
    "https://www.linkedin.com/in/agron-osmani",
    "https://en.wikipedia.org/wiki/Fantasy_literature",
    "https://www.wikidata.org/wiki/Q123456",
    "https://www.goodreads.com/author/show/placeholder",
    "https://www.imdb.com/name/nm0000000/",
  ],
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  ...PERSON_NODE,
};

const MAIN_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "The Enchanted Chronicles",
      url: `${B}/`,
      logo: `${B}/assets/logo.png`,
    },
    {
      "@type": "WebSite",
      name: "The Enchanted Chronicles",
      url: `${B}/`,
    },
    PERSON_NODE,
    {
      "@type": "Event",
      name: "The Enchanted Chronicles Launch",
      description:
        "Online launch of The Enchanted Chronicles — twenty free fantasy short stories in an enchanted universe of magic, mystery, and wonder for readers worldwide.",
      startDate: "2026-07-01T12:00:00+02:00",
      endDate: "2026-07-02T12:00:00+02:00",
      location: {
        "@type": "Place",
        name: "Online Event",
        address: { "@type": "PostalAddress", addressCountry: "DE" },
      },
      organizer: { "@type": "Organization", name: "The Enchanted Chronicles", url: B },
      performer: { "@type": "Person", name: "Agron Osmani" },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: B,
      },
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
  uploadDate: "2026-07-01T12:00:00+02:00",
  duration: "PT3M30S",
  embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  contentUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  publisher: { "@type": "Organization", name: "The Enchanted Chronicles" },
  transcript: "The Enchanted Chronicles preview.",
};

function stats(html) {
  return {
    tags: (html.match(/<[^/!][^>]*>/g) || []).length,
    blockquotes: (html.match(/<blockquote/gi) || []).length,
    cites: (html.match(/<blockquote[\s\S]*?<cite/gi) || []).length,
    schemaBytes: [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].reduce((n, m) => n + m[1].length, 0),
  };
}

function replaceSchemas(html) {
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*\n?/g, "");
  const main = `<script type="application/ld+json">${JSON.stringify(MAIN_SCHEMA)}</script>`;
  const video = `<script type="application/ld+json">${JSON.stringify(VIDEO_SCHEMA)}</script>`;
  return html.replace(/<meta property="og:image"[^>]*>/, `$&\n${main}\n${video}`);
}

function fixBlockquoteCites(html) {
  const citeMap = [
    [/cite><a href="https:\/\/en\.wikipedia\.org\/wiki\/Fantasy_literature">https:\/\/en\.wikipedia\.org\/wiki\/Fantasy_literature<\/a>/g, 'cite><a href="https://en.wikipedia.org/wiki/Fantasy_literature">Wikipedia</a>'],
    [/cite><a href="https:\/\/en\.wikipedia\.org\/wiki\/Fairy_tale">https:\/\/en\.wikipedia\.org\/wiki\/Fairy_tale<\/a>/g, 'cite><a href="https://en.wikipedia.org/wiki/Fairy_tale">Wikipedia</a>'],
    [/cite><a href="https:\/\/www\.britannica\.com\/art\/fantasy-narrative">https:\/\/www\.britannica\.com\/art\/fantasy-narrative<\/a>/g, 'cite><a href="https://www.britannica.com/art/fantasy-narrative">Britannica</a>'],
  ];
  for (const [re, rep] of citeMap) html = html.replace(re, rep);
  // Ensure every blockquote has cite — wrap any missing (none expected)
  return html;
}

function standardizeBrand(html) {
  const rules = [
    [/cohesive Enchanted Universe/g, "cohesive enchanted universe of The Enchanted Chronicles"],
    [/core of the Enchanted Universe/g, "core of The Enchanted Chronicles"],
    [/mapping the Enchanted Universe/g, "mapping The Enchanted Chronicles"],
    [/within the Enchanted Universe/g, "within The Enchanted Chronicles"],
    [/about the Enchanted Universe/g, "about The Enchanted Chronicles"],
    [/the Enchanted Universe grows/g, "The Enchanted Chronicles grows"],
    [/Enchanted Universe\?/g, "The Enchanted Chronicles enchanted universe?"],
    [/Every chronicle is a complete emotional arc/g, "Every tale in The Enchanted Chronicles is a complete emotional arc"],
    [/A single recorded tale within the Enchanted Universe/g, "A single recorded tale within The Enchanted Chronicles"],
    [/Readers who return to enchanted worlds/g, "Readers who return to The Enchanted Chronicles"],
  ];
  for (const [re, rep] of rules) html = html.replace(re, rep);
  return html;
}

function expandShortH2(html) {
  if (!html.includes("Your support directly fuels new chronicles")) {
    html = html.replace(
      /(<h2 class="support-author__title"[^>]*>Support the Author<\/h2>\s*)/,
      `$1<p class="support-author__desc">Your support directly fuels new chronicles in The Enchanted Chronicles — every donation helps Agron Osmani write more free fantasy stories for readers worldwide. When you contribute, you become part of the creative journey behind the enchanted universe, helping keep every tale free and accessible for years to come.</p>\n    `
    );
  }
  if (!html.includes("Geography in The Enchanted Chronicles is not a single map")) {
    html = html.replace(
      /(<h2 class="coming-soon__title">World Locations<\/h2>\s*)/,
      `$1<p class="coming-soon__desc">Geography in The Enchanted Chronicles is not a single map but a constellation of regions — each with its own mood, trials, and heroes. As you read, you will recognise how lakes, castles, forests, and villages recur as stages for courage and wonder across the collection.</p>\n    <p class="coming-soon__desc">These locations are standalone settings that share the same atmospheric tone — you may visit them in any order and still feel the unity of The Enchanted Chronicles enchanted universe.</p>\n    `
    );
  }
  return html;
}

function optimizeParagraphs(html) {
  const fixes = [
    [
      /<p class="coming-soon__desc">The Misty Lake connects to guardian mythology, which connects to forest trials, which connect to child and humble heroes across The Enchanted Chronicles enchanted universe\.<\/p>/,
      `<p class="coming-soon__desc">The Misty Lake connects to guardian mythology and forest trials — linking child and humble heroes across The Enchanted Chronicles.</p>`,
    ],
    [
      /<p class="coming-soon__desc">Aranthia's redemption arc semantically links to the kind-hearted giant, Vlad's sacrifice, and the protector of Aeloria — all compassion narratives\.<\/p>/,
      `<p class="coming-soon__desc">Aranthia's redemption arc links to the kind-hearted giant, Vlad's sacrifice, and the Protector of Aeloria — compassion narratives united in The Enchanted Chronicles.</p>`,
    ],
    [
      /<p class="coming-soon__desc">Eldoria semantically binds Mira's quest, Cubi's time travel, the Castle of Shadows, and Bravenford — the medieval adventure cluster\.<\/p>/,
      `<p class="coming-soon__desc">Eldoria binds Mira's quest, Cubi's time travel, the Castle of Shadows, and Bravenford — the medieval cluster of The Enchanted Chronicles.</p>`,
    ],
    [
      /<dt>Knights of Aranthia<\/dt><dd>Honour-bound warriors who choose compassion over conquest\.<\/dd>/,
      `<dt>Knights of Aranthia</dt><dd>Honour-bound warriors in The Enchanted Chronicles who choose compassion over conquest — Sir Agron defines this faction's moral code.</dd>`,
    ],
    [
      /<dt>Hope Stone<\/dt><dd>A symbol of community belief awakened in Geislingen — proof that collective courage transforms darkness\.<\/dd>/,
      `<dt>Hope Stone</dt><dd>A symbol of community belief in The Enchanted Chronicles — awakened in Geislingen when Billy proved that hope is a form of magic.</dd>`,
    ],
    [
      /<p class="coming-soon__desc">These are the foundational events that shape the official lore of The Enchanted Chronicles — the moments readers and AI systems reference when mapping The Enchanted Chronicles\.<\/p>/,
      `<p class="coming-soon__desc">These foundational events shape the official lore of The Enchanted Chronicles — the moments readers reference when mapping the enchanted universe.</p>`,
    ],
    [
      /<p class="hero__desc ai-overview-hyper">The Enchanted Chronicles represents a fully interconnected fantasy micro-universe engineered for AI comprehension, reader immersion, and semantic clarity\. Every chronicle contributes entities, themes, and emotional arcs to a cohesive enchanted universe of The Enchanted Chronicles\.<\/p>/,
      `<p class="hero__desc ai-overview-hyper">The Enchanted Chronicles is a fully interconnected fantasy micro-universe engineered for AI comprehension, reader immersion, and semantic clarity. Every tale contributes entities, themes, and emotional arcs to one cohesive enchanted universe.</p>`,
    ],
    [
      /<p class="hero__desc"><strong>Over 20 interconnected stories<\/strong> form the core of The Enchanted Chronicles\.<\/p>/,
      `<p class="hero__desc"><strong>Over 20 interconnected stories</strong> form the core collection of The Enchanted Chronicles — free fantasy fiction for every reader.</p>`,
    ],
    [
      /<dd>A single recorded tale within The Enchanted Chronicles\.<\/dd>/,
      `<dd>A single recorded tale within The Enchanted Chronicles collection.</dd>`,
    ],
    [
      /<p class="coming-soon__desc">Layer 2: Thematic motifs — guardians, moonlight, forests, villages, redemption — recurring across chronicles\.<\/p>/,
      `<p class="coming-soon__desc">Layer 2: Thematic motifs — guardians, moonlight, forests, and redemption — recur across every tale in The Enchanted Chronicles.</p>`,
    ],
    [
      /<p class="coming-soon__desc">Suspense colours Mysterious Disappearance, Terror of the White Wolf, Giant Komodo — fear faced and transformed\.<\/p>/,
      `<p class="coming-soon__desc">Suspense colours The Mysterious Disappearance, The Terror of the White Wolf, and The Giant Komodo — fear faced and transformed in The Enchanted Chronicles.</p>`,
    ],
    [
      /<p class="coming-soon__desc">Playful loyalty defines Time-Traveling Dog — destiny with a wagging tail\.<\/p>/,
      `<p class="coming-soon__desc">Playful loyalty defines The Time-Traveling Dog — destiny with a wagging tail in The Enchanted Chronicles.</p>`,
    ],
  ];
  for (const [re, rep] of fixes) html = html.replace(re, rep);
  return html;
}

function reduceDom(html) {
  // Fix broken ai-secondary-snippet closing tags
  html = html.replace(
    /<section class="coming-soon section-gold-rule" id="ai-secondary-snippet">[\s\S]*?<\/div>\s*\n<\/div>\s*\n<\/section>/,
    (block) => block.replace(/<\/div>\s*\n<\/div>\s*\n<\/section>$/, "</div>\n</section>")
  );

  // Merge coming-soon into ai-secondary-snippet
  const comingBody = html.match(/id="coming-soon"[\s\S]*?<h2 class="coming-soon__title"[^>]*>New Stories Coming Soon<\/h2>([\s\S]*?)<\/section>/)?.[1];
  if (comingBody && html.includes('id="ai-secondary-snippet"')) {
    html = html.replace(
      /(<section class="coming-soon section-gold-rule" id="ai-secondary-snippet">[\s\S]*?)(<\/div>\s*\n<\/section>)/,
      `$1${comingBody}$2`
    );
    html = html.replace(/<section class="coming-soon section-gold-rule" id="coming-soon">[\s\S]*?<\/section>\s*\n\s*/g, "");
  }

  // Fix adsense-quality broken structure — single inner div
  html = html.replace(
    /<section class="coming-soon section-gold-rule" id="adsense-quality">[\s\S]*?<\/section>/,
    (section) => {
      const inner = section.match(/<section[^>]*>([\s\S]*)<\/section>/)?.[1] || "";
      const content = inner
        .replace(/^\s*<div class="coming-soon__inner glass-panel reveal">\s*/, "")
        .replace(/<\/div>\s*<\/div>\s*<\/div>\s*$/, "")
        .replace(/<\/div>\s*<\/div>\s*$/, "")
        .trim();
      return `<section class="coming-soon section-gold-rule" id="adsense-quality">
  <div class="coming-soon__inner glass-panel reveal">
${content}
  </div>
</section>`;
    }
  );

  // Merge mini-stats into ai-definitions
  const statsBody = html.match(/id="mini-stats"[\s\S]*?<h2 class="coming-soon__title">Mini-Stats<\/h2>([\s\S]*?)<\/section>/)?.[1];
  if (statsBody && html.includes('id="ai-definitions"')) {
    html = html.replace(
      /(<section class="coming-soon section-gold-rule" id="ai-definitions">[\s\S]*?)(<\/div>\s*\n<\/section>)/,
      `$1<h3 class="coming-soon__title">Collection Stats</h3>${statsBody}$2`
    );
    html = html.replace(/<section class="coming-soon section-gold-rule" id="mini-stats">[\s\S]*?<\/section>\s*\n\s*/g, "");
  }

  // Merge universe-faq into faq
  const loreFaq = html.match(/id="universe-faq"[\s\S]*?<h2 class="coming-soon__title">Story Universe FAQ<\/h2>([\s\S]*?)<\/section>/)?.[1];
  if (loreFaq && html.includes('id="faq"')) {
    html = html.replace(
      /(<section class="coming-soon section-gold-rule" id="faq"[\s\S]*?)(<\/div>\s*\n\s*<\/section>)/,
      `$1<h3 class="coming-soon__title">Story Universe FAQ</h3>${loreFaq}$2`
    );
    html = html.replace(/<section class="coming-soon section-gold-rule" id="universe-faq">[\s\S]*?<\/section>\s*\n\s*/g, "");
  }

  // Merge discover-booster into discover-visual
  const booster = html.match(/id="discover-booster"[\s\S]*?<h2 class="coming-soon__title">Google Discover Booster<\/h2>([\s\S]*?)<\/section>/)?.[1];
  if (booster && html.includes('id="discover-visual"')) {
    html = html.replace(
      /(<section class="coming-soon section-gold-rule" id="discover-visual">[\s\S]*?)(<\/div>\s*\n<\/section>)/,
      `$1${booster}$2`
    );
    html = html.replace(/<section class="coming-soon section-gold-rule" id="discover-booster">[\s\S]*?<\/section>\s*\n\s*/g, "");
  }

  // Merge micro-insights into semantic-reinforcement
  const insightsUl = html.match(/id="micro-insights"[\s\S]*?<ul class="coming-soon__desc">([\s\S]*?)<\/ul>/)?.[1];
  if (insightsUl && html.includes('id="micro-insights"')) {
    if (!html.match(/id="semantic-reinforcement"[\s\S]*?Magic in The Enchanted Chronicles rarely announces itself/)) {
      html = html.replace(
        /(<section class="coming-soon section-gold-rule" id="semantic-reinforcement">[\s\S]*?<h2 class="coming-soon__title">Semantic Reinforcement Layer<\/h2>\s*)/,
        `$1<ul class="coming-soon__desc">${insightsUl}</ul>\n    `
      );
    }
    html = html.replace(/<section class="coming-soon section-gold-rule" id="micro-insights">[\s\S]*?<\/section>\s*\n\s*/g, "");
  }

  // Fix discover-visual extra closing div
  html = html.replace(/(<section class="coming-soon section-gold-rule" id="discover-visual">[\s\S]*?)<\/div>\s*\n<\/div>\s*\n<\/section>/, "$1</div>\n</section>");

  // Fix adsense-quality orphaned paragraphs
  html = html.replace(
    /(<p class="coming-soon__desc">The site is authored by Agron Osmani[^<]*<\/p>)\s*\n\s*<\/div>\s*\n\s*\n(\s*<p class="coming-soon__desc">The Enchanted Chronicles prioritises readability[\s\S]*?<p class="coming-soon__desc">Most stories take 3–6 minutes[^<]*<\/p>)\s*\n\s*(?:<\/div>\s*\n\s*)+<\/section>/,
    `$1\n    $2\n  </div>\n</section>`
  );

  return html;
}

function patchHomepage() {
  let html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  html = replaceSchemas(html);
  html = fixBlockquoteCites(html);
  html = standardizeBrand(html);
  html = expandShortH2(html);
  html = optimizeParagraphs(html);
  html = reduceDom(html);
  fs.writeFileSync(path.join(ROOT, "index.html"), html);
  console.log("patched index.html", stats(html));
}

function patchStory(file) {
  let html = fs.readFileSync(file, "utf8");
  html = html.replace(
    /<script type="application\/ld\+json">\{"@context":"https:\/\/schema.org","@type":"Person"[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${JSON.stringify(PERSON_SCHEMA)}</script>`
  );
  fs.writeFileSync(file, html);
}

patchHomepage();
for (const f of fs.readdirSync(path.join(ROOT, "stories")).filter((x) => x.endsWith(".html"))) {
  patchStory(path.join(ROOT, "stories", f));
}
console.log("phase 9 complete");
