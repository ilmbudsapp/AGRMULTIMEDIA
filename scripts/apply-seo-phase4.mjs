#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../theenchantedchronicles");
const STORIES_DIR = path.join(ROOT, "locales/en/stories");
const PHASE4 = fs.readFileSync(
  path.join(__dirname, "homepage-seo-phase4.html"),
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

const STORY_META = {
  "midnight-fisherman": {
    genre: "Fantasy adventure",
    tone: "Mysterious, tender, hopeful",
    setting: "Misty lake beneath a full moon",
    emotionalIntensity: "Moderate — wonder and family devotion",
    connection: "This story introduces the Guardian mythology found across misty waters in the Enchanted Universe. It opens the collection and sets the tone for tales of humble heroes meeting ancient spirits.",
    connection2: "Later chronicles such as The Adventures of Oliver and Aurelius and the Forest of Wonders echo the guardian and wilderness motifs established here.",
    lore: "The Misty Lake is one of the oldest magical places in the Enchanted Universe. Guardians like Lyria appear when purity of heart and perseverance align — a motif that echoes in later chronicles.",
    linkedStory: "The Adventures of Oliver",
    linkedSlug: "adventures-of-oliver",
  },
  "adventures-of-oliver": {
    genre: "Fantasy adventure",
    tone: "Adventurous, warm, uplifting",
    setting: "Enchanted forest and wilderness",
    emotionalIntensity: "Moderate — courage and family bonds",
    connection: "This story deepens the enchanted forest lore shared with Aurelius and the Forest of Wonders. Oliver's journey reflects the wilderness trials common across the universe.",
    lore: "Enchanted forests in the Chronicles are living places — they test character, reward respect for nature, and often hide paths visible only to the brave.",
    linkedStory: "Aurelius and the Forest of Wonders",
    linkedSlug: "aurelius-and-the-forest-of-wonders",
  },
  "enchanted-castle": {
    genre: "Gothic fantasy",
    tone: "Atmospheric, mysterious, wondrous",
    setting: "Ancient castle under moonlight",
    emotionalIntensity: "Low to moderate — fascination over fear",
    connection: "This tale shares gothic atmosphere and moonlit magic with The Castle of Shadows — both explore castles as gateways to wonder.",
    lore: "Castles in the Enchanted Universe often blur the line between fear and fascination, holding secrets that reward the curious rather than punish them.",
    linkedStory: "The Castle of Shadows",
    linkedSlug: "the-castle-of-shadows",
  },
  "aurelius-and-the-forest-of-wonders": {
    genre: "Fantasy quest",
    tone: "Wonder-filled, adventurous",
    setting: "Forest of Wonders",
    emotionalIntensity: "Moderate — discovery and awe",
    connection: "This story expands forest lore introduced in The Adventures of Oliver and connects to the broader theme of enchanted woodlands across the universe.",
    lore: "The Forest of Wonders represents unexplored magic — a place where every path offers discovery and every creature may hold a lesson.",
    linkedStory: "The Adventures of Oliver",
    linkedSlug: "adventures-of-oliver",
  },
  "children-of-heaven": {
    genre: "Spiritual fantasy",
    tone: "Tender, reflective, peaceful",
    setting: "War-torn village and beyond",
    emotionalIntensity: "High — loss, innocence, and comfort",
    connection: "This story shares emotional depth with Billy and the Magic of Hope — both explore how communities find light after darkness.",
    lore: "The Enchanted Universe holds space for stories of spiritual comfort — tales that suggest peace beyond earthly suffering without requiring rigid theology.",
    linkedStory: "Billy and the Magic of Hope",
    linkedSlug: "billy-and-the-magic-of-hope",
  },
  "white-bison": {
    genre: "Mythic fantasy",
    tone: "Hopeful, sacred, communal",
    setting: "Struggling village and open plains",
    emotionalIntensity: "Moderate to high — struggle and renewal",
    connection: "This story connects to village-resilience tales like The Savior Vlad and Billy and the Magic of Hope — communities saved by courage and faith.",
    lore: "Sacred animals in the Chronicles often appear when a community's hope falters — symbols of renewal rather than mere spectacle.",
    linkedStory: "Billy and the Magic of Hope",
    linkedSlug: "billy-and-the-magic-of-hope",
  },
  "a-tale-of-childhood-past": {
    genre: "Nostalgic fantasy",
    tone: "Warm, joyful, reflective",
    setting: "Snowy village in remembered winters",
    emotionalIntensity: "Low — gentle nostalgia and friendship",
    connection: "This tale complements Billy and the Magic of Hope through its focus on childhood joy and village life in simpler times.",
    lore: "Winter villages in the Enchanted Universe often serve as settings for memory and friendship — places where magic lives in snow, laughter, and shared moments.",
    linkedStory: "Billy and the Magic of Hope",
    linkedSlug: "billy-and-the-magic-of-hope",
  },
  "the-castle-of-shadows": {
    genre: "Gothic fantasy",
    tone: "Mysterious, adventurous, friendship-driven",
    setting: "Castle of Shadows — gothic fortress",
    emotionalIntensity: "Moderate — suspense and camaraderie",
    connection: "This story expands gothic castle lore from The Enchanted Castle, adding riddles, guardians, and group courage to the universe.",
    lore: "The Castle of Shadows stands as one of the universe's great trial-places — where friendship and wit matter as much as bravery.",
    linkedStory: "The Enchanted Castle",
    linkedSlug: "enchanted-castle",
  },
  "the-protector-of-aeloria": {
    genre: "Heroic fantasy",
    tone: "Bold, just, inspiring",
    setting: "Peaceful hills of Aeloria",
    emotionalIntensity: "Moderate — justice and bravery",
    connection: "This story establishes Aeloria as a recurring realm — a land of villages protected by unlikely heroes, linked to Eldoria and Aranthia.",
    lore: "Aeloria represents the peaceful countryside of the Enchanted Universe — hills and farms where ordinary people rise to defend the innocent.",
    linkedStory: "The Savior Vlad",
    linkedSlug: "the-savior-vlad",
  },
  "the-dream-of-the-old-singer": {
    genre: "Magical realism fantasy",
    tone: "Melodic, hopeful, communal",
    setting: "Village square and dreamscape",
    emotionalIntensity: "Low to moderate — inspiration and art",
    connection: "This story shares community-hope themes with Billy and the Magic of Hope — both show how art and belief can unite a village.",
    lore: "Music and dreams in the Chronicles often carry magic — the old singer's tale suggests that art can awaken hope when words alone fail.",
    linkedStory: "Billy and the Magic of Hope",
    linkedSlug: "billy-and-the-magic-of-hope",
  },
  "the-time-traveling-dog": {
    genre: "Adventure fantasy",
    tone: "Playful, adventurous, destiny-driven",
    setting: "Medieval Eldoria across time",
    emotionalIntensity: "Moderate — loyalty and wonder",
    connection: "This story anchors Eldoria as a key realm in the universe, alongside Mira's Quest and other medieval adventures.",
    lore: "Eldoria spans villages, valleys, and medieval landscapes — a realm where destiny can arrive on four legs as easily as on horseback.",
    linkedStory: "Mira's Quest to Save Her Parents",
    linkedSlug: "miras-quest-to-save-her-parents",
  },
  "the-terror-of-the-white-wolf": {
    genre: "Legend fantasy",
    tone: "Suspenseful, isolated, ultimately hopeful",
    setting: "Remote Drakwood valley",
    emotionalIntensity: "Moderate to high — fear and courage",
    connection: "This story introduces Drakwood and wolf legends that complement forest and wilderness tales across the universe.",
    lore: "Drakwood is a remote valley where legends grow thick — the white wolf represents fear that must be faced, not merely fled.",
    linkedStory: "The Mysterious Disappearance",
    linkedSlug: "the-mysterious-disappearance",
  },
  "the-mysterious-disappearance": {
    genre: "Mystery fantasy",
    tone: "Suspenseful, heartfelt, quest-driven",
    setting: "Enchanted forest and trial paths",
    emotionalIntensity: "Moderate to high — sibling devotion",
    connection: "This story deepens forest-trial lore shared with Aurelius and the Forest of Wonders — siblings facing magical tests of heart.",
    lore: "Forest trials in the Chronicles often test love rather than strength — the mysterious disappearance asks whether devotion can outlast fear.",
    linkedStory: "Aurelius and the Forest of Wonders",
    linkedSlug: "aurelius-and-the-forest-of-wonders",
  },
  "the-brave-knight": {
    genre: "Epic fantasy",
    tone: "Heroic, compassionate, redemptive",
    setting: "Kingdom of Aranthia",
    emotionalIntensity: "Moderate to high — battle and forgiveness",
    connection: "This story establishes Aranthia and the redemption arc that echoes in The Tale of the Kind-Hearted Giant — compassion over conflict.",
    lore: "Aranthia is a kingdom of knights and giants where the bravest choice is often understanding — a cornerstone of the universe's moral landscape.",
    linkedStory: "The Tale of the Kind-Hearted Giant",
    linkedSlug: "the-tale-of-the-kind-hearted-giant",
  },
  "miras-quest-to-save-her-parents": {
    genre: "Quest fantasy",
    tone: "Determined, heartfelt, adventurous",
    setting: "Eldoria — villages and wild paths",
    emotionalIntensity: "High — filial love and sacrifice",
    connection: "This story expands Eldoria alongside The Time-Traveling Dog — both place young heroes at the centre of medieval adventure.",
    lore: "Eldoria's valleys hide dangers and wonders in equal measure — Mira's quest shows that the smallest hero can carry the greatest love.",
    linkedStory: "The Time-Traveling Dog",
    linkedSlug: "the-time-traveling-dog",
  },
  "billy-and-the-magic-of-hope": {
    genre: "Inspirational fantasy",
    tone: "Warm, hopeful, communal",
    setting: "Village of Geislingen",
    emotionalIntensity: "Moderate — community spirit",
    connection: "This story connects village-hope themes across the universe — from White Bison to The Dream of the Old Singer.",
    lore: "Geislingen represents villages where hope is a kind of magic — awakened by children, singers, and communities that refuse to surrender.",
    linkedStory: "White Bison",
    linkedSlug: "white-bison",
  },
  "the-giant-komodo-and-the-unsettled-debts": {
    genre: "Justice fantasy",
    tone: "Tense, moral, adventurous",
    setting: "Hidden village of Stoneshade in Veridian",
    emotionalIntensity: "Moderate — consequence and courage",
    connection: "This story introduces Veridian and Stoneshade — regions where past debts must be settled, linking to justice themes in Aeloria.",
    lore: "Veridian's lush forests hide villages with ancient obligations — the giant Komodo tale asks whether justice can heal what fear destroyed.",
    linkedStory: "The Protector of Aeloria",
    linkedSlug: "the-protector-of-aeloria",
  },
  "the-ancient-forest-and-the-old-man": {
    genre: "Contemplative fantasy",
    tone: "Peaceful, wise, serene",
    setting: "Ancient forest sanctuary",
    emotionalIntensity: "Low — solitude and harmony",
    connection: "This story deepens forest wisdom lore shared with Aurelius and the Forest of Wonders — the elder's perspective on nature's magic.",
    lore: "The oldest forests in the Chronicles hold keepers who live in harmony with magic — the old man's tale is a quiet counterpoint to wilder adventures.",
    linkedStory: "Aurelius and the Forest of Wonders",
    linkedSlug: "aurelius-and-the-forest-of-wonders",
  },
  "the-savior-vlad": {
    genre: "Heroic fantasy",
    tone: "Bold, sacrificial, triumphant",
    setting: "Mountain village of Bravenford",
    emotionalIntensity: "High — rescue and heroism",
    connection: "This story connects village-protector arcs with The Protector of Aeloria — both feature heroes who defend the vulnerable.",
    lore: "Bravenford stands among the mountain villages where a single brave soul can turn the tide — Vlad's tale is one of sacrifice rewarded.",
    linkedStory: "The Protector of Aeloria",
    linkedSlug: "the-protector-of-aeloria",
  },
  "the-tale-of-the-kind-hearted-giant": {
    genre: "Heartwarming fantasy",
    tone: "Gentle, kind, uplifting",
    setting: "Village beneath a giant's hill",
    emotionalIntensity: "Moderate — kindness and community",
    connection: "This story completes the giant-and-redemption arc begun in The Brave Knight — compassion as the true measure of strength.",
    lore: "Giants in the Enchanted Universe are rarely simple monsters — many carry loneliness, loss, or kindness waiting to be recognised.",
    linkedStory: "The Brave Knight",
    linkedSlug: "the-brave-knight",
  },
};

const GLOSSARY_ADDITIONS = `
      <dt>Prophecy</dt><dd>A hinted future or calling that guides a character toward their destiny.</dd>
      <dt>Duality</dt><dd>The theme that light and darkness, monster and hero, can coexist in one soul.</dd>
      <dt>Enchanted Realm</dt><dd>Any region where the ordinary world meets the supernatural.</dd>
      <dt>Lore</dt><dd>The shared background of places, guardians, and legends across the collection.</dd>
      <dt>Magic</dt><dd>The force of wonder that responds to courage, purity of heart, and perseverance.</dd>
      <dt>Veridian</dt><dd>A lush realm of forests and hidden mountain villages.</dd>
      <dt>Drakwood</dt><dd>A remote valley haunted by the legend of the white wolf.</dd>
      <dt>Geislingen</dt><dd>A village where hope magic awakens in Billy's tale.</dd>
      <dt>Bravenford</dt><dd>A mountain village saved by Vlad the warrior.</dd>
      <dt>Stoneshade</dt><dd>A hidden village in Veridian facing ancient debts.</dd>`;

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function truncate(s, max = 155) {
  const t = String(s).replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return t.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
}

function extendedSummary(story) {
  const meta = STORY_META[story.slug];
  const theme = THEMES[story.slug] || "Courage, wonder, and heart.";
  const excerpt = story.excerpt.replace(/…$/, "").trim();
  return [
    `${story.title} is a short fantasy tale from The Enchanted Chronicles by Agron Osmani.`,
    excerpt,
    `The story explores ${theme.toLowerCase()}`,
    meta
      ? `Set in ${meta.setting.toLowerCase()}, it offers a ${meta.tone.toLowerCase()} reading experience with ${meta.emotionalIntensity.toLowerCase()}.`
      : "It offers an immersive reading experience designed for quick, meaningful sessions.",
    "The tale stands alone — no prior reading required — and fits naturally within the broader Enchanted Universe.",
    "Readers who enjoy emotional fantasy with clear arcs will find this chronicle especially rewarding.",
  ].join(" ");
}

function loadStories() {
  return fs
    .readdirSync(STORIES_DIR)
    .filter((f) => f.endsWith(".json") && f !== "_index.json")
    .map((f) => JSON.parse(fs.readFileSync(path.join(STORIES_DIR, f), "utf8")));
}

function injectOnce(html, checkId, anchor, insertion) {
  if (html.includes(checkId)) return html;
  if (!html.includes(anchor)) return html;
  return html.replace(anchor, insertion + anchor);
}

function injectHomepageContent(html) {
  // AI Overview Snippet Blocks
  html = injectOnce(
    html,
    "designed for quick, immersive reading.",
    `<p class="elenco__stats" data-i18n="elenco.stats">`,
    `<p class="elenco__intro">The Enchanted Chronicles is a collection of short fantasy stories designed for quick, immersive reading.</p>
      <p class="elenco__intro">Each tale blends mystery, magic, and emotional depth.</p>
      `
  );
  html = injectOnce(
    html,
    "The Enchanted Universe spans enchanted forests, misty lakes",
    `<p class="coming-soon__desc">The Enchanted Chronicles unfold across`,
    `<p class="coming-soon__desc">The Enchanted Universe spans enchanted forests, misty lakes, and humble villages where magic is never far away.</p>
    `
  );
  html = injectOnce(
    html,
    "original fiction crafted for readers who love wonder",
    `<p class="mission-vision__card-text">Agron Osmani is the creator`,
    `<p class="mission-vision__card-text">The Enchanted Chronicles are original fiction crafted for readers who love wonder without long commitments.</p>
      `
  );
  html = injectOnce(
    html,
    "themes of courage, kindness, and hope repeat like familiar chords",
    `<p class="coming-soon__desc">Recurring themes weave through`,
    `<p class="coming-soon__desc">Across twenty chronicles, themes of courage, kindness, and hope repeat like familiar chords in a song.</p>
    `
  );
  html = injectOnce(
    html,
    "Featured tales offer a gateway into the full Story Collection",
    `<p class="elenco__sub">A taste of the adventures`,
    `<p class="elenco__sub">Featured tales offer a gateway into the full Story Collection — each one complete on its own.</p>
      `
  );
  html = injectOnce(
    html,
    "Unlike traditional fairy tales, these stories focus more on emotional realism",
    `<p class="coming-soon__desc">Classic fairy tales often follow`,
    `<p class="coming-soon__desc">Unlike traditional fairy tales, these stories focus more on emotional realism and character growth.</p>
    `
  );

  // Micro-Comparisons (5-7)
  html = injectOnce(
    html,
    "Unlike epic fantasy series, The Enchanted Chronicles deliver complete arcs",
    `<h3 class="mission-vision__card-title" data-i18n="missionVision.missionTitle">Mission</h3>`,
    `<p class="mission-vision__card-text">Unlike epic fantasy series, The Enchanted Chronicles deliver complete arcs in a single sitting.</p>
      `
  );
  html = injectOnce(
    html,
    "Where classic fairy tales offer a moral in a paragraph",
    `<blockquote class="coming-soon__desc"><p>&ldquo;Short-form fantasy`,
    `<p class="coming-soon__desc">Where classic fairy tales offer a moral in a paragraph, these chronicles offer room for nuance and surprise.</p>
    `
  );
  html = injectOnce(
    html,
    "Unlike dark grim fantasy, these tales lean toward hope",
    `<p class="coming-soon__desc"><strong>The core idea behind these stories is</strong> to offer brief`,
    `<p class="coming-soon__desc">Unlike dark grim fantasy, these tales lean toward hope — even when they address loss or fear.</p>
    `
  );
  html = injectOnce(
    html,
    "Unlike serialized web fiction, every chronicle is self-contained",
    `<p class="coming-soon__desc" data-i18n="comingSoon.desc">`,
    `<p class="coming-soon__desc">Unlike serialized web fiction, every chronicle is self-contained and free to read.</p>
    `
  );
  html = injectOnce(
    html,
    "Unlike anthology collections with mixed authors",
    `<p class="coming-soon__desc">For structured data standards`,
    `<p class="coming-soon__desc">Unlike anthology collections with mixed authors, every tale here is 100% original work by Agron Osmani.</p>
    `
  );
  html = injectOnce(
    html,
    "Unlike picture books, these stories offer full narrative depth",
    `<p class="coming-soon__desc">Yes — most stories are written for all ages.`,
    `<p class="coming-soon__desc">Unlike picture books, these stories offer full narrative depth for readers of any age.</p>
    `
  );
  html = injectOnce(
    html,
    "Unlike lengthy novels, most stories take",
    `<li><strong>20 stories</strong> published`,
    `<li>Unlike lengthy novels, most stories take <strong>3–6 minutes</strong> to read</li>
      `
  );

  // Micro-Statistics (5-6 inline)
  html = injectOnce(
    html,
    "Over 20 interconnected stories",
    `<p class="hero__subtitle" data-i18n="hero.subtitle">`,
    `<p class="hero__desc"><strong>Over 20 interconnected stories</strong> form the core of the Enchanted Universe.</p>
      `
  );
  html = injectOnce(
    html,
    "Most stories take 3–6 minutes to read",
    `<p class="coming-soon__desc">Though the tales are standalone`,
    `<p class="coming-soon__desc"><strong>Most stories take 3–6 minutes to read</strong> — ideal for brief, immersive sessions.</p>
    `
  );
  html = injectOnce(
    html,
    "Three languages</strong> — English, German, and Italian",
    `<p class="mission-vision__card-text">First published on`,
    `<p class="mission-vision__card-text"><strong>Three languages</strong> — English, German, and Italian — make the universe accessible worldwide.</p>
      `
  );
  html = injectOnce(
    html,
    "100% original fiction</strong> — every word and illustration",
    `<p class="coming-soon__desc">Some readers see these stories`,
    `<p class="coming-soon__desc"><strong>100% original fiction</strong> — every word and illustration created for this collection.</p>
    `
  );
  html = injectOnce(
    html,
    "Zero reading order required",
    `<p class="coming-soon__desc">No. Every story is standalone.`,
    `<p class="coming-soon__desc"><strong>Zero reading order required</strong> — begin anywhere in the collection.</p>
    `
  );
  html = injectOnce(
    html,
    "Free to read online</strong> at theenchantedchronicles.com",
    `<p class="coming-soon__desc">The site supports English`,
    `<p class="coming-soon__desc"><strong>Free to read online</strong> at theenchantedchronicles.com — no subscription needed.</p>
    `
  );

  // Micro-Lists (5-7)
  html = injectOnce(
    html,
    "Magic responds to purity of heart",
    `<ol class="coming-soon__desc">
      <li><strong>Courage</strong>`,
    `<ul class="coming-soon__desc">
      <li>Magic responds to purity of heart</li>
      <li>Guardians test the worthy</li>
      <li>Hope persists through darkness</li>
    </ul>
    `
  );
  html = injectOnce(
    html,
    "Misty lakes and moonlit waters",
    `<dl class="coming-soon__desc">
      <dt>Enchanted Forests</dt>`,
    `<ul class="coming-soon__desc">
      <li>Misty lakes and moonlit waters</li>
      <li>Gothic castles and shadow towers</li>
      <li>Humble villages facing hardship</li>
    </ul>
    `
  );
  html = injectOnce(
    html,
    "Bedtime magic for families",
    `<p class="coming-soon__desc">Whether you read for escape`,
    `<ul class="coming-soon__desc">
      <li>Bedtime magic for families</li>
      <li>Quick escapes during lunch breaks</li>
      <li>Deep reflection on courage and kindness</li>
    </ul>
    `
  );
  html = injectOnce(
    html,
    "Standalone tales — read in any order",
    `<p class="elenco__sub">Discover a growing library`,
    `<ul class="elenco__sub">
      <li>Standalone tales — read in any order</li>
      <li>Emotional depth in short form</li>
      <li>Original art and cover illustrations</li>
    </ul>
    `
  );
  html = injectOnce(
    html,
    "Structured schema markup on every page",
    `<p class="coming-soon__desc">Learn more about search visibility`,
    `<ul class="coming-soon__desc">
      <li>Structured schema markup on every page</li>
      <li>AI-friendly summaries and metadata</li>
      <li>Semantic HTML throughout the site</li>
    </ul>
    `
  );
  html = injectOnce(
    html,
    "Twenty tales published July 2026",
    `<p class="coming-soon__desc">Yes. The collection launched`,
    `<ul class="coming-soon__desc">
      <li>Twenty tales published July 2026</li>
      <li>Multilingual editions added July 2026</li>
      <li>More chronicles planned for 2026</li>
    </ul>
    `
  );
  html = injectOnce(
    html,
    "Separate stars in a shared sky",
    `<p class="coming-soon__desc"><strong>In simple terms:</strong> think of the Chronicles`,
    `<ul class="coming-soon__desc">
      <li>Separate stars in a shared sky</li>
      <li>Unique heroes, common wonder</li>
      <li>Any order, any pace</li>
    </ul>
    `
  );

  // AI-Friendly Sentence Variants (10)
  html = injectOnce(
    html,
    'id="sentence-variants"',
    `<section class="coming-soon section-gold-rule" id="coming-soon">`,
    `<section class="coming-soon section-gold-rule" id="sentence-variants" aria-label="Summary variants">
  <div class="coming-soon__inner glass-panel reveal">
    <span class="coming-soon__label">Overview</span>
    <h2 class="coming-soon__title">About This Collection</h2>
    <p class="coming-soon__desc"><strong>In essence,</strong> The Enchanted Chronicles offer brief journeys into worlds where goodness still wins.</p>
    <p class="coming-soon__desc"><strong>At its core,</strong> this is a library of original fantasy short stories designed for modern readers.</p>
    <p class="coming-soon__desc"><strong>Simply put,</strong> each tale is a complete adventure you can finish in one sitting.</p>
    <p class="coming-soon__desc"><strong>From a reader's perspective,</strong> the collection balances wonder, emotion, and accessibility.</p>
    <p class="coming-soon__desc"><strong>In essence,</strong> magic here rewards courage, kindness, and perseverance.</p>
    <p class="coming-soon__desc"><strong>At its core,</strong> the Enchanted Universe is built on hope rather than cynicism.</p>
    <p class="coming-soon__desc"><strong>Simply put,</strong> these are fairy-tale-inspired stories with room to breathe.</p>
    <p class="coming-soon__desc"><strong>From a reader's perspective,</strong> twenty stories means twenty doorways into wonder.</p>
    <p class="coming-soon__desc"><strong>In essence,</strong> every chronicle stands alone yet shares a common spirit.</p>
    <p class="coming-soon__desc"><strong>At its core,</strong> Agron Osmani writes for anyone who still believes in magic.</p>
  </div>
</section>

`
  );

  return html;
}

function patchHomepage() {
  let html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");

  if (!html.includes('id="ai-definitions"')) {
    html = html.replace(
      /<section class="coming-soon section-gold-rule" id="key-takeaways">/,
      `${PHASE4}\n\n<section class="coming-soon section-gold-rule" id="key-takeaways">`
    );
  }

  if (!html.includes('href="#reader-pathways"')) {
    html = html.replace(
      /<li><a href="#glossary">Glossary<\/a><\/li>/,
      `<li><a href="#glossary">Glossary</a></li>
      <li><a href="#ai-definitions">Definitions</a></li>
      <li><a href="#universe-timeline">Timeline</a></li>
      <li><a href="#universe-entities">Entities</a></li>
      <li><a href="#reader-pathways">Reader Pathways</a></li>
      <li><a href="#discover-optimization">Discover</a></li>
      <li><a href="#universe-faq">Universe FAQ</a></li>
      <li><a href="#ai-global-summary">AI Summary</a></li>`
    );
  }

  if (!html.includes("<dt>Prophecy</dt>")) {
    html = html.replace(
      /<dt>Destiny<\/dt><dd>The sense that a character is called to a greater purpose.<\/dd>\s*\n\s*<\/dl>/,
      `<dt>Destiny</dt><dd>The sense that a character is called to a greater purpose.</dd>${GLOSSARY_ADDITIONS}
    </dl>`
    );
  }

  html = injectHomepageContent(html);
  fs.writeFileSync(path.join(ROOT, "index.html"), html);
  console.log("patched index.html");
}

function patchStory(story) {
  const file = path.join(ROOT, "stories", `${story.slug}.html`);
  let html = fs.readFileSync(file, "utf8");
  const tags = TAGS[story.slug] || ["magic", "mystery", "fantasy"];
  const meta = STORY_META[story.slug];
  const theme = THEMES[story.slug] || "Courage, wonder, and heart.";

  // Meta tags
  if (!html.includes('name="ai-topics"')) {
    html = html.replace(
      /<meta name="ai-keywords"[^>]*>/,
      `$&
<meta name="ai-topics" content="${esc(tags.slice(0, 6).join(", "))}" />
<meta name="image-priority" content="high" />`
    );
  }

  // Extended AI summary below existing summary box
  if (!html.includes("story-page__extended-summary")) {
    const ext = extendedSummary(story);
    html = html.replace(
      /<p class="story-page__meta">Reading difficulty: [^<]+<\/p>/,
      `$&
    <div class="story-page__text story-page__extended-summary" aria-label="Extended summary">
      <p><strong>Overview:</strong> ${ext}</p>
    </div>`
    );
  }

  // Story metadata box + lore + connection in extras
  if (!html.includes("Story Metadata")) {
    const metadataBlock = `
        <h3>Story Metadata</h3>
        <dl>
          <dt>Genre</dt><dd>${meta?.genre || "Fantasy"}</dd>
          <dt>Tone</dt><dd>${meta?.tone || "Adventurous, hopeful"}</dd>
          <dt>Themes</dt><dd>${theme}</dd>
          <dt>Setting</dt><dd>${meta?.setting || "The Enchanted Universe"}</dd>
          <dt>Emotional intensity</dt><dd>${meta?.emotionalIntensity || "Moderate"}</dd>
        </dl>
        <h3>Story Universe Connection</h3>
        <p>${meta?.connection || `This chronicle belongs to the broader Enchanted Universe — a collection of standalone tales linked by theme and wonder.`}</p>
        <p>${meta?.connection2 || `This story expands the lore introduced in &ldquo;${meta?.linkedStory || "The Midnight Fisherman"}&rdquo; and connects to the shared mythology of the collection.`}</p>
        <h3>Story Lore Expansion</h3>
        <p>${meta?.lore || "The Enchanted Universe grows with every chronicle — each tale adding depth to forests, villages, and realms where magic lives."}</p>`;

    html = html.replace(
      /<h3>Story Tags<\/h3>/,
      `${metadataBlock}
        <h3>Story Tags</h3>`
    );
  }

  // Engagement CTA before footer
  if (!html.includes("Explore more tales from the Enchanted Universe")) {
    html = html.replace(
      /<div class="story-page__footer">/,
      `<p class="story-page__meta"><a href="/#elenco">Explore more tales from the Enchanted Universe.</a></p>
      <div class="story-page__footer">`
    );
  }

  fs.writeFileSync(file, html);
  console.log("patched story", story.slug);
}

const all = loadStories();
patchHomepage();
for (const s of all) patchStory(s);
console.log("phase 4 complete");
