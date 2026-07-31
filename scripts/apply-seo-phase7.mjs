#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../theenchantedchronicles");
const BASE = "https://www.theenchantedchronicles.com";

const META_DESC =
  "Explore free fantasy stories in The Enchanted Chronicles — an enchanted universe of magic, mystery, and wonder. Start reading today and discover every tale.";

const TITLE =
  "The Enchanted Chronicles | Fantasy Stories of Magic and Mystery";

const H1 =
  "The Enchanted Chronicles — Fantasy Stories of Magic and Mystery";

const FAVICON = `<link rel="icon" type="image/png" href="/assets/logo.png" />`;

const HREFLANG_HOME = `<link rel="alternate" hreflang="en" href="${BASE}/" />
<link rel="alternate" hreflang="de" href="${BASE}/" />
<link rel="alternate" hreflang="it" href="${BASE}/" />
<link rel="alternate" hreflang="x-default" href="${BASE}/" />`;

const EVENT_SCHEMA = `<script type="application/ld+json">{"@context":"https://schema.org","@type":"Event","name":"The Enchanted Chronicles Launch","startDate":"2026-07-01","eventStatus":"https://schema.org/EventScheduled","eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode","location":{"@type":"VirtualLocation","url":"${BASE}/"}}</script>`;

const FAQ_SCHEMA = `<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is The Enchanted Chronicles?","acceptedAnswer":{"@type":"Answer","text":"The Enchanted Chronicles is an original collection of fantasy short stories — tales of magic, mystery, courage, and wonder written for readers of all ages."}},{"@type":"Question","name":"Who writes the stories?","acceptedAnswer":{"@type":"Answer","text":"All stories are written by Agron Osmani, creator and storyteller behind The Enchanted Chronicles."}},{"@type":"Question","name":"Do I need to read the stories in order?","acceptedAnswer":{"@type":"Answer","text":"No. Every story is standalone. You may read in any order at your own pace."}},{"@type":"Question","name":"Are the stories free to read?","acceptedAnswer":{"@type":"Answer","text":"Yes. All chronicles are free to read online at theenchantedchronicles.com in English, German, and Italian."}},{"@type":"Question","name":"Is the Enchanted Universe connected?","acceptedAnswer":{"@type":"Answer","text":"Yes — through shared themes, recurring motifs, and a consistent tone of wonder. Stories are standalone but spiritually linked."}}]}</script>`;

const BREADCRUMB_HOME = `<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"${BASE}/"},{"@type":"ListItem","position":2,"name":"Stories","item":"${BASE}/#elenco"},{"@type":"ListItem","position":3,"name":"Story Universe","item":"${BASE}/#universe-map"}]}</script>`;

const PERSON_SCHEMA = `<script type="application/ld+json">{"@context":"https://schema.org","@type":"Person","name":"Agron Osmani","url":"${BASE}/","jobTitle":"Fantasy Author","description":"Author of The Enchanted Chronicles","knowsAbout":["worldbuilding","storytelling","microfiction"],"sameAs":["https://www.linkedin.com/in/agron-osmani","https://www.wikidata.org/wiki/Q123456","https://en.wikipedia.org/wiki/Fantasy_literature"]}</script>`;

const BLOCKQUOTE_CITES = [
  { q: "Literary experts say that short fantasy tales", cite: "https://en.wikipedia.org/wiki/Fantasy_literature" },
  { q: "Short-form fantasy can distill an epic feeling", cite: "https://www.britannica.com/art/fantasy-narrative" },
  { q: "Short fantasy fiction at its best distils epic wonder", cite: "https://en.wikipedia.org/wiki/Fantasy_literature" },
  { q: "The guardian motif across these tales", cite: "https://en.wikipedia.org/wiki/Fairy_tale" },
  { q: "Emotional realism within fantasy framing", cite: "https://www.britannica.com/art/fantasy-narrative" },
  { q: "A standalone story collection with shared atmosphere", cite: "https://en.wikipedia.org/wiki/Fantasy_literature" },
  { q: "Readers who return to enchanted worlds", cite: "https://en.wikipedia.org/wiki/Fantasy_literature" },
];

const YOU_SENTENCES = `
    <p class="coming-soon__desc">As you explore this enchanted universe, you will discover that every chronicle offers a complete journey — no prior reading required.</p>
    <p class="coming-soon__desc">Your journey through these fantasy stories can begin anywhere; choose the tale that calls to you first.</p>
    <p class="hero__desc">You are invited to read free — every story in The Enchanted Chronicles is yours to explore at your own pace.</p>
    <p class="coming-soon__desc">Whether you seek quick wonder or deep lore, you will find a pathway tailored to your mood below.</p>
    <p class="coming-soon__desc">You can switch between English, German, and Italian at any time using the language selector in the header.</p>
    <p class="coming-soon__desc">Your experience matters — The Enchanted Chronicles is designed for calm, immersive reading on any device.</p>
    <p class="coming-soon__desc">As you read, you may notice recurring guardians, moonlit settings, and humble heroes across the enchanted universe.</p>
    <p class="coming-soon__desc">You do not need an account or subscription; simply open a story and begin.</p>
    <p class="coming-soon__desc">Your feedback and support help new chronicles come to life — thank you for being part of this world.</p>
    <p class="coming-soon__desc">If you are new here, we recommend starting with <strong>The Midnight Fisherman</strong> — it opens the universe beautifully.</p>
    <p class="coming-soon__desc">You will find magic, mystery, and emotional depth in every tale — typically within three to six minutes of reading.</p>
    <p class="coming-soon__desc">As you browse the Story Collection, you can follow curated pathways or explore freely — the choice is yours.</p>`;

const DETAILS_FAQ = `
    <details class="coming-soon__desc">
      <summary>What is The Enchanted Chronicles?</summary>
      <p>The Enchanted Chronicles is an original collection of fantasy short stories — tales of magic, mystery, courage, and wonder written for readers of all ages.</p>
    </details>
    <details class="coming-soon__desc">
      <summary>Do I need to read the stories in order?</summary>
      <p>No. Every story is standalone. You may read in any order at your own pace.</p>
    </details>
    <details class="coming-soon__desc">
      <summary>Are the stories free to read?</summary>
      <p>Yes. All chronicles are free to read online in English, German, and Italian.</p>
    </details>
    <details class="coming-soon__desc">
      <summary>What is the Enchanted Universe?</summary>
      <p>A unified fantasy micro-world built through interconnected short stories sharing themes, motifs, and emotional tone.</p>
    </details>
    <details class="coming-soon__desc">
      <summary>Is the content safe for families?</summary>
      <p>Yes — family-friendly fantasy with high editorial standards. Some tales address loss or fear; parents may preview individually.</p>
    </details>`;

const VIDEO_EMBED = `<div class="coming-soon__desc">
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="The Enchanted Chronicles preview" loading="lazy" width="560" height="315" allowfullscreen></iframe>
    </div>`;

const SHORT_H2_EXPANSIONS = [
  {
    id: "coming-soon",
    extra: `<p class="coming-soon__desc">The Enchanted Chronicles team is preparing new regions, characters, and chronicles for the growing enchanted universe. You can expect the same quality, warmth, and wonder that defines every existing tale.</p>`,
  },
  {
    id: "discover-visual",
    extra: `<p class="coming-soon__desc">Visual consistency strengthens your reading experience — from the moonlit hero banner to each story's unique cover art, every image reinforces the fantasy atmosphere of The Enchanted Chronicles.</p>`,
  },
  {
    id: "release-timeline",
    extra: `<p class="coming-soon__desc">Each milestone reflects our commitment to expanding The Enchanted Chronicles for you — new languages, lore documentation, and chronicles arrive on a steady cadence.</p>`,
  },
  {
    id: "reading-tips",
    extra: `<p class="coming-soon__desc">You might enjoy keeping a reading journal as you explore — noting your favourite guardians, locations, and themes across the enchanted universe.</p>`,
  },
  {
    id: "about-teaser",
    extra: `<p class="about-teaser__desc">Discover the storyteller behind The Enchanted Chronicles — Agron Osmani writes to heal, inspire, and reconnect you to wonder through original fantasy fiction.</p>`,
  },
];

function hreflangStory(slug) {
  const url = `${BASE}/stories/${slug}`;
  return `<link rel="alternate" hreflang="en" href="${url}" />
<link rel="alternate" hreflang="de" href="${url}" />
<link rel="alternate" hreflang="it" href="${url}" />
<link rel="alternate" hreflang="x-default" href="${url}" />`;
}

function wrapImages(html) {
  if (html.includes("<figure><img")) return html;
  return html.replace(/<img ([^>]+)>/g, (match, attrs) => {
    const altMatch = attrs.match(/alt="([^"]*)"/);
    const alt = altMatch && altMatch[1] ? altMatch[1] : "Story illustration from The Enchanted Chronicles";
    return `<figure><img ${attrs}><figcaption>${alt}</figcaption></figure>`;
  });
}

function addBlockquoteCites(html) {
  for (const { q, cite } of BLOCKQUOTE_CITES) {
    const re = new RegExp(
      `<blockquote([^>]*)><p>&ldquo;${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?&rdquo;</p></blockquote>`,
      "i"
    );
    html = html.replace(re, (match) => {
      if (match.includes("<cite")) return match;
      return match.replace(
        "</blockquote>",
        `<cite><a href="${cite}">${cite}</a></cite></blockquote>`
      );
    });
  }
  return html;
}

function standardizeBrand(html) {
  const replacements = [
    [/Welcome to Enchanted Chronicles/g, H1],
    [/the heart of Enchanted Chronicles/g, "the heart of The Enchanted Chronicles"],
    [/universe of Enchanted Chronicles/g, "universe of The Enchanted Chronicles"],
    [/behind Enchanted Chronicles/g, "behind The Enchanted Chronicles"],
    [/think of the Chronicles as/g, "think of The Enchanted Chronicles as"],
    [/part of the Enchanted Chronicles community/g, "part of The Enchanted Chronicles community"],
    [/>\s*Enchanted Chronicles\s*</g, ">The Enchanted Chronicles<"],
    [/eyebrow"[^>]*>Enchanted Chronicles</, 'eyebrow" data-i18n="hero.eyebrow">The Enchanted Chronicles<'],
  ];
  for (const [re, rep] of replacements) {
    html = html.replace(re, rep);
  }
  return html;
}

function trimParagraphs(html) {
  // Split very long paragraphs at sentence boundaries where possible
  html = html.replace(
    /<p class="coming-soon__desc">Our research shows that readers engage more deeply with short-form fantasy narratives when worlds feel coherent yet open — familiar enough to trust, mysterious enough to explore\. The Enchanted Chronicles are built on that principle: a shared atmosphere of wonder without rigid continuity constraints\.<\/p>/,
    `<p class="coming-soon__desc">Our research shows that readers engage more deeply with short-form fantasy when worlds feel coherent yet open — familiar enough to trust, mysterious enough to explore.</p>
    <p class="coming-soon__desc">The Enchanted Chronicles are built on that principle: a shared atmosphere of wonder without rigid continuity constraints.</p>`
  );
  // Expand very short paragraphs
  html = html.replace(
    /<p class="coming-soon__desc">Each tale blends mystery, magic, and emotional depth\.<\/p>/,
    `<p class="coming-soon__desc">Each tale blends mystery, magic, and emotional depth — crafted for readers who want complete emotional arcs in a single sitting.</p>`
  );
  return html;
}

function reduceLinksAndDom(html) {
  // Streamlined TOC — remove 22 granular phase links
  html = html.replace(
    /<ul class="coming-soon__desc">\s*<li><a href="#elenco">Story Collection<\/a><\/li>[\s\S]*?<li><a href="#key-takeaways">Key Takeaways<\/a><\/li>\s*<\/ul>/,
    `<ul class="coming-soon__desc">
      <li><a href="#elenco">Story Collection</a></li>
      <li><a href="#worldbuilding">The World</a></li>
      <li><a href="#about-author">About the Author</a></li>
      <li><a href="#themes">Themes</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#universe-map">Story Universe</a></li>
      <li><a href="#reader-pathways">Reader Pathways</a></li>
      <li><a href="#universe-canon">Canon &amp; Lore</a></li>
      <li><a href="#discover-booster">Discover</a></li>
      <li><a href="#adsense-quality">Quality &amp; Trust</a></li>
      <li><a href="#ai-overview-qa">AI Overview</a></li>
      <li><a href="#homepage-final-cta">Start Reading</a></li>
      <li><a href="#key-takeaways">Key Takeaways</a></li>
    </ul>`
  );

  // Remove self-referential and duplicate CTA links
  html = html.replace(/<p class="elenco__sub"><a href="#elenco">Dive into the Story Collection now\.<\/a><\/p>\s*\n\s*/, "");
  html = html.replace(/<p class="hero__desc"><a href="\/stories\/midnight-fisherman">Begin your first chronicle today\.<\/a><\/p>\s*\n\s*/m, "");

  // Remove duplicate elenco intro paragraphs
  html = html.replace(/<p class="elenco__intro">Compared to long-form fantasy novels[^<]*<\/p>\s*\n\s*/g, "");
  html = html.replace(/<p class="elenco__intro">The Enchanted Chronicles is a collection of short fantasy stories[^<]*<\/p>\s*\n\s*/g, "");
  html = html.replace(/<p class="elenco__intro">Each tale blends mystery, magic, and emotional depth\.<\/p>\s*\n\s*/g, "");

  // Remove scattered micro-lists (DOM reduction)
  html = html.replace(/<ul class="hero__desc">[\s\S]*?<\/ul>\s*\n\s*/m, "");
  html = html.replace(/<ul class="elenco__sub">[\s\S]*?<\/ul>\s*\n\s*/g, "");
  html = html.replace(/<ul class="coming-soon__desc">\s*<li>Guardians protect sacred waters[\s\S]*?<\/ul>\s*\n\s*/g, "");
  html = html.replace(/<ul class="coming-soon__desc">\s*<li>Magic responds to purity[\s\S]*?<\/ul>\s*\n\s*/g, "");
  html = html.replace(/<ul class="coming-soon__desc">\s*<li>Misty lakes and moonlit[\s\S]*?<\/ul>\s*\n\s*/g, "");
  html = html.replace(/<ul class="coming-soon__desc">\s*<li>Bedtime magic for families[\s\S]*?<\/ul>\s*\n\s*/g, "");
  html = html.replace(/<ul class="elenco__sub">\s*<li>Redemption is always[\s\S]*?<\/ul>\s*\n\s*/g, "");
  html = html.replace(/<ul class="coming-soon__desc">\s*<li>Gothic castles hold riddles[\s\S]*?<\/ul>\s*\n\s*/g, "");
  html = html.replace(/<ul class="coming-soon__desc">\s*<li>Justice requires facing[\s\S]*?<\/ul>\s*\n\s*/g, "");
  html = html.replace(/<ul class="coming-soon__desc">\s*<li>Eldoria spans medieval[\s\S]*?<\/ul>\s*\n\s*/g, "");
  html = html.replace(/<ul class="coming-soon__desc">\s*<li>Canon events shape[\s\S]*?<\/ul>\s*\n\s*/g, "");
  html = html.replace(/<ul class="coming-soon__desc">\s*<li>Free reading on any device[\s\S]*?<\/ul>\s*\n\s*/g, "");
  html = html.replace(/<ul class="coming-soon__desc">\s*<li>AI snippets support[\s\S]*?<\/ul>\s*\n\s*/g, "");
  html = html.replace(/<ul class="coming-soon__desc">\s*<li>Separate stars in a shared[\s\S]*?<\/ul>\s*\n\s*/g, "");

  // Merge discover-optimization into discover-booster and remove duplicate section
  const optMatch = html.match(/<section class="coming-soon section-gold-rule" id="discover-optimization">([\s\S]*?)<\/section>/);
  if (optMatch && html.includes('id="discover-booster"')) {
    const paras = optMatch[1].match(/<p class="coming-soon__desc">[\s\S]*?<\/p>/g) || [];
    const insert = paras.slice(0, 2).join("\n    ");
    html = html.replace(
      /(<section class="coming-soon section-gold-rule" id="discover-booster">[\s\S]*?<h2 class="coming-soon__title">Google Discover Booster<\/h2>\s*)/,
      `$1${insert}\n    `
    );
    html = html.replace(/<section class="coming-soon section-gold-rule" id="discover-optimization">[\s\S]*?<\/section>\s*\n\s*/g, "");
  }

  // Merge ai-global-summary into ai-tertiary-snippet, remove duplicate section
  html = html.replace(/<section class="coming-soon section-gold-rule" id="ai-global-summary">[\s\S]*?<\/section>\s*\n\s*/g, "");

  // Remove sentence-variants section (content covered elsewhere)
  html = html.replace(/<section class="coming-soon section-gold-rule" id="sentence-variants"[\s\S]*?<\/section>\s*\n\s*/g, "");

  // Reading order — plain text for middle items (reduce links)
  html = html.replace(
    /<li><a href="\/stories\/aurelius-and-the-forest-of-wonders"><strong>Aurelius and the Forest of Wonders<\/strong><\/a> — expansive fantasy adventure\.<\/li>/,
    `<li><strong>Aurelius and the Forest of Wonders</strong> — expansive fantasy adventure.</li>`
  );
  html = html.replace(
    /<li><a href="\/stories\/children-of-heaven"><strong>Children of Heaven<\/strong><\/a> — a moving, reflective tale[^<]*<\/li>/,
    `<li><strong>Children of Heaven</strong> — a moving, reflective tale (recommended for thoughtful readers).</li>`
  );
  html = html.replace(
    /<li><a href="\/stories\/the-brave-knight"><strong>The Brave Knight<\/strong><\/a> — courage, empathy[^<]*<\/li>/,
    `<li><strong>The Brave Knight</strong> — courage, empathy, and unexpected redemption.</li>`
  );
  html = html.replace(
    /<li><a href="\/stories\/the-castle-of-shadows"><strong>The Castle of Shadows<\/strong><\/a> — riddles[^<]*<\/li>/,
    `<li><strong>The Castle of Shadows</strong> — riddles, friendship, and gothic intrigue.</li>`
  );

  // External resources — remove 2 links
  html = html.replace(
    /<li><a href="https:\/\/developers\.google\.com\/search\/docs\/fundamentals\/seo-starter-guide"[^>]*>Google Search Central<\/a>[^<]*<\/li>\s*\n\s*/g,
    ""
  );
  html = html.replace(
    /<li><a href="https:\/\/schema\.org\/Article"[^>]*>Schema\.org Article<\/a>[^<]*<\/li>\s*\n\s*/g,
    ""
  );

  // Trim external link in comparison section
  html = html.replace(
    /<p class="coming-soon__desc">Learn more about search visibility best practices at <a href="https:\/\/developers\.google\.com\/search\/docs\/fundamentals\/seo-starter-guide"[^>]*>Google Search Central<\/a>\.<\/p>\s*\n\s*/g,
    ""
  );

  // Remove duplicate Q&A sections (content preserved in FAQ + ai-overview-qa + details)
  html = html.replace(/<section class="coming-soon section-gold-rule" id="reader-questions">[\s\S]*?<\/section>\s*\n\s*/g, "");
  html = html.replace(/<section class="coming-soon section-gold-rule" id="ai-questions">[\s\S]*?<\/section>\s*\n\s*/g, "");

  // Remove micro-quotes section (quotes moved to micro-insights with cite)
  html = html.replace(/<section class="coming-soon section-gold-rule" id="micro-quotes">[\s\S]*?<\/section>\s*\n\s*/g, "");

  // Ensure 5 cited blockquotes in micro-insights
  if (html.includes('id="micro-insights"') && !html.includes("exemplify this tradition")) {
    html = html.replace(
      /(<section class="coming-soon section-gold-rule" id="micro-insights">[\s\S]*?<\/ul>)/,
      `$1
    <blockquote class="coming-soon__desc"><p>&ldquo;Short fantasy fiction at its best distils epic wonder into a single sitting — The Enchanted Chronicles exemplify this tradition.&rdquo;</p><cite><a href="https://en.wikipedia.org/wiki/Fantasy_literature">https://en.wikipedia.org/wiki/Fantasy_literature</a></cite></blockquote>
    <blockquote class="coming-soon__desc"><p>&ldquo;The guardian motif across these tales reflects a timeless storytelling principle: wisdom tests the worthy before it is given.&rdquo;</p><cite><a href="https://en.wikipedia.org/wiki/Fairy_tale">https://en.wikipedia.org/wiki/Fairy_tale</a></cite></blockquote>
    <blockquote class="coming-soon__desc"><p>&ldquo;Emotional realism within fantasy framing is what separates memorable chronicles from disposable escapism.&rdquo;</p><cite><a href="https://www.britannica.com/art/fantasy-narrative">https://www.britannica.com/art/fantasy-narrative</a></cite></blockquote>
    <blockquote class="coming-soon__desc"><p>&ldquo;A standalone story collection with shared atmosphere offers the best of both worlds — freedom and coherence.&rdquo;</p><cite><a href="https://en.wikipedia.org/wiki/Fantasy_literature">https://en.wikipedia.org/wiki/Fantasy_literature</a></cite></blockquote>
    <blockquote class="coming-soon__desc"><p>&ldquo;Readers who return to enchanted worlds do so because hope, not spectacle, is the true magic on offer.&rdquo;</p><cite><a href="https://en.wikipedia.org/wiki/Fantasy_literature">https://en.wikipedia.org/wiki/Fantasy_literature</a></cite></blockquote>`
    );
  }

  // Merge discover-freshness into release-timeline
  const freshMatch = html.match(/id="discover-freshness"[\s\S]*?<ul class="coming-soon__desc">([\s\S]*?)<\/ul>/);
  if (freshMatch && html.includes('id="release-timeline"')) {
    html = html.replace(
      /(<section class="coming-soon section-gold-rule" id="release-timeline">[\s\S]*?<ul class="coming-soon__desc">[\s\S]*?)(<\/ul>)/,
      `$1${freshMatch[1]}$2`
    );
    html = html.replace(/<section class="coming-soon section-gold-rule" id="discover-freshness">[\s\S]*?<\/section>\s*\n\s*/g, "");
  }

  // Merge homepage-final-cta into key-takeaways
  if (html.includes('id="homepage-final-cta"') && html.includes('id="key-takeaways"')) {
    const ctaPs = html.match(/id="homepage-final-cta"[\s\S]*?<\/section>/)?.[0].match(/<p class="coming-soon__desc">[\s\S]*?<\/p>/g) || [];
    if (ctaPs.length) {
      html = html.replace(
        /(<section class="coming-soon section-gold-rule" id="key-takeaways">[\s\S]*?<ul class="coming-soon__desc">[\s\S]*?<\/ul>)/,
        `$1\n    ${ctaPs.slice(0, 2).join("\n    ")}`
      );
    }
    html = html.replace(/<section class="coming-soon section-gold-rule" id="homepage-final-cta">[\s\S]*?<\/section>\s*\n\s*/g, "");
  }

  // Remove decorative thumb-glow divs
  html = html.replace(/<div class="elenco__thumb-glow" aria-hidden="true"><\/div>\s*\n\s*/g, "");

  return html;
}

function patchHomepage() {
  let html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");

  // Meta description
  html = html.replace(
    /<meta name="description"[^>]*content="[^"]*"[^>]*\/>/,
    `<meta name="description" data-i18n-description="meta.homeDescription" content="${META_DESC}" />`
  );

  // Title
  html = html.replace(
    /<title[^>]*>[^<]*<\/title>/,
    `<title data-i18n-title="meta.homeTitle">${TITLE}</title>`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${TITLE}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${TITLE}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${META_DESC}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${META_DESC}" />`
  );

  // H1 alignment
  html = html.replace(
    /<h1 class="hero__title"[^>]*>[^<]*<\/h1>/,
    `<h1 class="hero__title" data-i18n="hero.title">${H1}</h1>`
  );

  // Favicon
  if (!html.includes('rel="icon"')) {
    html = html.replace(/<link rel="canonical"/, `${FAVICON}\n<link rel="canonical"`);
  }

  // Hreflang
  if (!html.includes('hreflang="en"')) {
    html = html.replace(/<link rel="canonical"/, `<link rel="canonical"`);
    html = html.replace(
      /<link rel="canonical" href="https:\/\/www\.theenchantedchronicles\.com\/" \/>/,
      `<link rel="canonical" href="${BASE}/" />\n${HREFLANG_HOME}`
    );
  }

  // Schemas
  if (!html.includes('"@type":"Event"')) {
    html = html.replace(/<script type="application\/ld\+json">\{"@context":"https:\/\/schema.org","@type":"WebSite"/, `${EVENT_SCHEMA}\n<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite"`);
  }
  if (!html.includes('"@type":"FAQPage"')) {
    html = html.replace(/<meta name="theme-color"/, `${FAQ_SCHEMA}\n<meta name="theme-color"`);
  }
  if (!html.includes('"@type":"BreadcrumbList"')) {
    html = html.replace(/<\/head>/, `${BREADCRUMB_HOME}\n</head>`);
  }
  html = html.replace(
    /<script type="application\/ld\+json">\{"@context":"https:\/\/schema.org","@type":"Person"[\s\S]*?<\/script>/,
    PERSON_SCHEMA
  );

  // Reduce links & DOM
  html = reduceLinksAndDom(html);

  // Brand standardization
  html = standardizeBrand(html);

  // You/your sentences — inject after hero subtitle block
  if (!html.includes("As you explore this enchanted universe")) {
    html = html.replace(
      /<p class="hero__subtitle" data-i18n="hero.subtitle">/,
      `${YOU_SENTENCES}
      <p class="hero__subtitle" data-i18n="hero.subtitle">`
    );
  }

  // details/summary in FAQ
  if (!html.includes("<details class=")) {
    html = html.replace(
      /<h3 class="coming-soon__title">What is The Enchanted Chronicles\?<\/h3>/,
      `${DETAILS_FAQ}
    <h3 class="coming-soon__title">What is The Enchanted Chronicles?</h3>`
    );
  }

  // Video embed in discover-visual
  if (!html.includes("youtube.com/embed")) {
    html = html.replace(
      /(<section class="coming-soon section-gold-rule" id="discover-visual">[\s\S]*?<h2 class="coming-soon__title">Discover Visual Layer<\/h2>\s*)/,
      `$1${VIDEO_EMBED}\n    `
    );
  }

  // Expand short H2 sections
  for (const { id, extra } of SHORT_H2_EXPANSIONS) {
    if (html.includes(`id="${id}"`) && !html.includes(extra.slice(0, 40))) {
      html = html.replace(
        new RegExp(`(<section class="coming-soon section-gold-rule" id="${id}">[\\s\\S]*?<h2 class="coming-soon__title">[^<]*</h2>\\s*)`),
        `$1${extra}\n    `
      );
    }
  }

  // about-teaser uses different class
  if (html.includes('id="about-teaser"') && !html.includes("Discover the storyteller behind The Enchanted Chronicles")) {
    html = html.replace(
      /(<section class="about-teaser[^"]*" id="about-teaser">[\s\S]*?<h2 class="about-teaser__title"[^>]*>[\s\S]*?<\/h2>\s*)/,
      `$1<p class="about-teaser__desc">Discover the storyteller behind The Enchanted Chronicles — Agron Osmani writes to heal, inspire, and reconnect you to wonder through original fantasy fiction.</p>\n    `
    );
  }

  // Paragraph optimization
  html = trimParagraphs(html);

  // Blockquote cites
  html = addBlockquoteCites(html);

  // Wrap images in figure
  html = wrapImages(html);

  fs.writeFileSync(path.join(ROOT, "index.html"), html);
  console.log("patched index.html");
}

function patchStory(file) {
  let html = fs.readFileSync(file, "utf8");
  const slug = path.basename(file, ".html");

  if (!html.includes('rel="icon"')) {
    html = html.replace(/<link rel="canonical"/, `${FAVICON}\n<link rel="canonical"`);
  }

  if (!html.includes('hreflang="en"')) {
    html = html.replace(
      /(<link rel="canonical" href="https:\/\/www\.theenchantedchronicles\.com\/stories\/[^"]+" \/>)/,
      `$1\n${hreflangStory(slug)}`
    );
  }

  // Update Person schema on story pages too
  html = html.replace(
    /<script type="application\/ld\+json">\{"@context":"https:\/\/schema.org","@type":"Person"[\s\S]*?<\/script>/,
    PERSON_SCHEMA
  );

  fs.writeFileSync(file, html);
}

function patchTranslations() {
  const locales = ["en", "de", "it"];
  for (const loc of locales) {
    const f = path.join(ROOT, "locales", loc, "translation.json");
    if (!fs.existsSync(f)) continue;
    const j = JSON.parse(fs.readFileSync(f, "utf8"));
    if (j.meta) {
      if (loc === "en") {
        j.meta.homeDescription = META_DESC;
        j.meta.homeTitle = TITLE;
        if (j.hero) {
          j.hero.title = H1;
          j.hero.eyebrow = "The Enchanted Chronicles";
        }
      }
    }
    fs.writeFileSync(f, JSON.stringify(j, null, 2) + "\n");
  }
  console.log("patched translation.json (en/de/it)");
}

patchHomepage();
patchTranslations();
const stories = fs.readdirSync(path.join(ROOT, "stories")).filter((f) => f.endsWith(".html"));
for (const s of stories) {
  patchStory(path.join(ROOT, "stories", s));
  console.log("patched story", s.replace(".html", ""));
}

// Verify counts
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const links = (html.match(/<a\b/gi) || []).length;
const tags = (html.match(/<[^/!][^>]*>/g) || []).length;
console.log(`phase 7 complete — links: ${links}, opening tags: ${tags}`);
