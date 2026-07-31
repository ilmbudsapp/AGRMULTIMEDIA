#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../theenchantedchronicles");
const STORIES_DIR = path.join(ROOT, "locales/en/stories");
const PHASE5 = fs.readFileSync(
  path.join(__dirname, "homepage-seo-phase5.html"),
  "utf8"
);

const TITLES = {
  "midnight-fisherman": "The Midnight Fisherman",
  "adventures-of-oliver": "The Adventures of Oliver",
  "enchanted-castle": "The Enchanted Castle",
  "aurelius-and-the-forest-of-wonders": "Aurelius and the Forest of Wonders",
  "children-of-heaven": "Children of Heaven",
  "white-bison": "White Bison",
  "a-tale-of-childhood-past": "A Tale of Childhood Past",
  "the-castle-of-shadows": "The Castle of Shadows",
  "the-protector-of-aeloria": "The Protector of Aeloria",
  "the-dream-of-the-old-singer": "The Dream of the Old Singer",
  "the-time-traveling-dog": "The Time-Traveling Dog",
  "the-terror-of-the-white-wolf": "The Terror of the White Wolf",
  "the-mysterious-disappearance": "The Mysterious Disappearance",
  "the-brave-knight": "The Brave Knight",
  "miras-quest-to-save-her-parents": "Mira's Quest to Save Her Parents",
  "billy-and-the-magic-of-hope": "Billy and the Magic of Hope",
  "the-giant-komodo-and-the-unsettled-debts": "The Giant Komodo and the Unsettled Debts",
  "the-ancient-forest-and-the-old-man": "The Ancient Forest and the Old Man",
  "the-savior-vlad": "The Savior Vlad",
  "the-tale-of-the-kind-hearted-giant": "The Tale of the Kind-Hearted Giant",
};

const STORY5 = {
  "midnight-fisherman": {
    hook: "Beneath a full moon, an old fisherman's perseverance will summon a guardian from the depths.",
    aiLore: "Opens the Enchanted Universe by establishing Guardian mythology at the Misty Lake.",
    aiContext: "Humble hero, sacred waters, family devotion, and the true treasure within.",
    crosslinks: ["adventures-of-oliver", "white-bison", "the-ancient-forest-and-the-old-man"],
    loreBlock: "The Misty Lake predates every kingdom in the Chronicles. Scholars of the universe note that Lyria's appearance marks the moment magic officially enters the published canon. Waters guarded by spirits recur in later tales as thresholds between ordinary life and wonder.",
    characters: "Sabin is the archetypal Humble Hero — a fisherman whose quiet devotion echoes in Oliver's forest courage, Billy's village hope, and the old man's woodland wisdom.",
    location: "The Misty Lake sits at the northern edge of the known Enchanted Universe — a moonlit basin beneath misty mountains where guardians rise when perseverance meets purity of heart.",
  },
  "adventures-of-oliver": {
    hook: "A lost child in an enchanted forest discovers that the wildest paths lead to the truest self.",
    aiLore: "Deepens enchanted forest lore and wilderness trial mythology shared across the universe.",
    aiContext: "Childhood courage, respect for nature, survival, and family reunion.",
    crosslinks: ["aurelius-and-the-forest-of-wonders", "the-mysterious-disappearance", "midnight-fisherman"],
    loreBlock: "Enchanted forests in the Chronicles are sentient in spirit if not in voice — they test character rather than strength. Oliver's journey establishes the wilderness trial as a core universe mechanic.",
    characters: "Oliver represents the Child Hero archetype shared with Billy and Mira — young protagonists whose innocence carries more power than any sword.",
    location: "The enchanted forest bordering Oliver's village connects geographically to the Forest of Wonders and the trial-woods of The Mysterious Disappearance — one vast woodland seen from different paths.",
  },
  "enchanted-castle": {
    hook: "Warm light in gothic towers promises secrets that blur the line between fear and fascination.",
    aiLore: "Establishes gothic castle lore and moonlit mystery within the Enchanted Universe.",
    aiContext: "Atmospheric wonder, gothic mystery, and the allure of the unknown.",
    crosslinks: ["the-castle-of-shadows", "midnight-fisherman", "the-brave-knight"],
    loreBlock: "Castles in the Chronicles are never merely ruins — they are invitations. The Enchanted Castle introduces the gothic register that The Castle of Shadows expands with riddles and spectral guardians.",
    characters: "The castle's unseen inhabitants belong to the Gothic Order motif — mysterious presences that challenge curiosity rather than punish it, much like the guardians of the Misty Lake.",
    location: "This castle stands in the twilight borderlands between Aeloria's peaceful hills and Aranthia's knightly kingdoms — a neutral ground where moonlight magic is strongest.",
  },
  "aurelius-and-the-forest-of-wonders": {
    hook: "Every unexplored path in the Forest of Wonders hides a discovery that changes the seeker forever.",
    aiLore: "Expands forest exploration lore and the Wonder motif across the Enchanted Universe.",
    aiContext: "Discovery, expansive fantasy adventure, and the magic of unexplored worlds.",
    crosslinks: ["adventures-of-oliver", "the-ancient-forest-and-the-old-man", "the-mysterious-disappearance"],
    loreBlock: "The Forest of Wonders is the largest enchanted woodland in the published canon — a place where every creature may hold a lesson and every clearing offers a new revelation.",
    characters: "Aurelius joins Oliver and the old forest keeper as the universe's great forest walkers — seekers who find magic by wandering rather than conquering.",
    location: "The Forest of Wonders spans the heart of the Enchanted Universe, connecting Oliver's wilderness, the old man's sanctuary, and the sibling trials of The Mysterious Disappearance.",
  },
  "children-of-heaven": {
    hook: "Through innocent eyes, a war-torn world reveals a peace that surpasses understanding.",
    aiLore: "Anchors spiritual comfort and innocence lore within the Enchanted Universe canon.",
    aiContext: "Innocence, loss, peace beyond suffering, and spiritual tenderness.",
    crosslinks: ["billy-and-the-magic-of-hope", "a-tale-of-childhood-past", "white-bison"],
    loreBlock: "The Chronicles hold space for spiritual narratives without rigid theology — Children of Heaven establishes that the universe acknowledges peace beyond earthly suffering as canon truth.",
    characters: "Marko and Ana embody the Innocent Child archetype alongside Oliver and Billy — souls whose purity reveals truths adults have forgotten.",
    location: "The unnamed war-torn village exists in the borderlands of the universe — a place where earthly suffering meets the suggestion of something beyond, much like Geislingen's hope awakening.",
  },
  "white-bison": {
    hook: "When a village loses hope, a sacred spirit walks the plains to remind them they are not alone.",
    aiLore: "Establishes sacred animal mythology and village renewal lore in the canon.",
    aiContext: "Sacred nature, community resilience, hope after struggle, and spiritual renewal.",
    crosslinks: ["billy-and-the-magic-of-hope", "the-savior-vlad", "the-terror-of-the-white-wolf"],
    loreBlock: "Sacred animals in the Chronicles — the white bison, the white wolf — appear when communal hope falters. They are not weapons but witnesses, signalling that renewal is still possible.",
    characters: "The white bison connects to the white wolf of Drakwood as paired spirit-animals — one bringing hope to villages, the other challenging fear in isolation.",
    location: "The struggling village on the open plains lies south of Aeloria's hills and east of Bravenford's mountains — a grassland region where spirit-animals are most often seen.",
  },
  "a-tale-of-childhood-past": {
    hook: "Snow, laughter, and remembered friendship — a winter village holds magic in the simplest moments.",
    aiLore: "Adds nostalgic village lore and childhood joy to the Enchanted Universe canon.",
    aiContext: "Friendship, winter nostalgia, village warmth, and the joy of remembered innocence.",
    crosslinks: ["billy-and-the-magic-of-hope", "children-of-heaven", "the-dream-of-the-old-singer"],
    loreBlock: "Winter villages in the Chronicles preserve memory as a form of magic — the warmth of friendship persisting through decades like embers that never fully die.",
    characters: "The children of this tale share the Innocent Child lineage with Marko, Ana, Oliver, and Billy — proof that joy is as much a universe theme as courage.",
    location: "The snowy village sits in the northern reaches of the universe — a counterpart to Geislingen's hope-filled south, both proving that village life is the collection's emotional anchor.",
  },
  "the-castle-of-shadows": {
    hook: "Three friends answer a mysterious invitation — and enter a fortress where riddles outrank swords.",
    aiLore: "Expands gothic castle canon with riddles, friendship trials, and spectral guardians.",
    aiContext: "Gothic adventure, group courage, riddles, and friendship tested together.",
    crosslinks: ["enchanted-castle", "the-brave-knight", "the-mysterious-disappearance"],
    loreBlock: "The Castle of Shadows is the universe's greatest trial-by-riddle — where wit and camaraderie matter as much as bravery. It completes the gothic arc begun in The Enchanted Castle.",
    characters: "The three friends mirror Sir Agron's companionship with the giant — both tales prove that facing the unknown together transforms fear into understanding.",
    location: "The Castle of Shadows rises on a crag overlooking Eldoria's valleys — visible from Mira's quest-path and Cubi's time-travel routes across the medieval landscape.",
  },
  "the-protector-of-aeloria": {
    hook: "When injustice threatens a peaceful village, an unlikely protector rises from the hills.",
    aiLore: "Establishes Aeloria as a canonical realm of village protectors and quiet justice.",
    aiContext: "Justice, defending the innocent, unlikely heroism, and peaceful lands under threat.",
    crosslinks: ["the-savior-vlad", "billy-and-the-magic-of-hope", "the-giant-komodo-and-the-unsettled-debts"],
    loreBlock: "Aeloria's protector tradition proves that heroism in the Chronicles requires no crown — only the willingness to stand between the innocent and harm.",
    characters: "The protector shares the Village Hero lineage with Vlad of Bravenford and Billy of Geislingen — ordinary people who become extraordinary when their community needs them.",
    location: "Aeloria's peaceful hills lie west of Aranthia and north of Geislingen — a green heartland where farming communities thrive until darkness forces unlikely heroes to act.",
  },
  "the-dream-of-the-old-singer": {
    hook: "A melody in a village square awakens a dream that unites a community on the edge of despair.",
    aiLore: "Adds music-as-magic and community art lore to the Enchanted Universe canon.",
    aiContext: "Music, dreams, community unity, and art as a force for hope.",
    crosslinks: ["billy-and-the-magic-of-hope", "a-tale-of-childhood-past", "the-ancient-forest-and-the-old-man"],
    loreBlock: "Music in the Chronicles carries magic when spoken words fail — the old singer's melody is an artifact of hope, echoing Billy's community awakening and the old man's quiet wisdom.",
    characters: "The old singer belongs to the Elder Wisdom lineage alongside the forest keeper — elders whose gifts (music, solitude, patience) guide villages through darkness.",
    location: "The village square where the singer dreams sits in the central plains between Aeloria and Geislingen — a crossroads where art and community intersect.",
  },
  "the-time-traveling-dog": {
    hook: "A loyal dog awakens in medieval Eldoria — and discovers that destiny has four legs and a wagging tail.",
    aiLore: "Anchors Eldoria as a canonical medieval realm with time-magic mechanics.",
    aiContext: "Loyalty, time travel, medieval adventure, and destiny arriving unexpectedly.",
    crosslinks: ["miras-quest-to-save-her-parents", "the-brave-knight", "the-savior-vlad"],
    loreBlock: "Eldoria's time-magic is unique in the canon — Cubi's journey proves that destiny in the Chronicles can arrive through any form, not only through knights and questers.",
    characters: "Cubi joins Mira as Eldoria's great adventurers — young heroes (human and canine) whose loyalty drives the medieval storylines of the universe.",
    location: "Eldoria spans medieval villages, valleys, and time-fractured paths — the same region where Mira quests, Vlad rescues, and Sir Agron's legend echoes from neighbouring Aranthia.",
  },
  "the-terror-of-the-white-wolf": {
    hook: "In a remote valley, a legend of terror hides a truth about courage and the loneliness of fear.",
    aiLore: "Introduces Drakwood valley and white wolf legend into the Enchanted Universe canon.",
    aiContext: "Fear, legend, isolation, and courage found in facing the unknown.",
    crosslinks: ["white-bison", "the-mysterious-disappearance", "the-ancient-forest-and-the-old-man"],
    loreBlock: "Drakwood's white wolf pairs with the white bison as spirit-animals of the canon — one challenging isolated fear, the other renewing communal hope.",
    characters: "The valley's protagonist shares the Isolated Hero archetype with the old forest keeper — souls who confront fear alone before discovering they were never truly alone.",
    location: "Drakwood is a remote valley in the eastern reaches of the universe — bordered by ancient forest to the west and open plains to the south where the white bison once walked.",
  },
  "the-mysterious-disappearance": {
    hook: "When a sibling vanishes into the enchanted forest, love becomes the only map that matters.",
    aiLore: "Deepens forest trial lore and sibling devotion within the Enchanted Universe.",
    aiContext: "Sibling love, forest trials, mystery, and devotion that refuses to surrender.",
    crosslinks: ["aurelius-and-the-forest-of-wonders", "adventures-of-oliver", "the-castle-of-shadows"],
    loreBlock: "Forest trials in the canon test love before strength — the mysterious disappearance establishes that sibling devotion can navigate paths invisible to warriors.",
    characters: "The searching sibling joins Mira in the Filial Love lineage — heroes driven not by glory but by love for family, the universe's most powerful motivator.",
    location: "The trial-forest of this chronicle is the eastern arm of the Forest of Wonders — the same woodland Oliver survived and Aurelius explored from different directions.",
  },
  "the-brave-knight": {
    hook: "A knight rides to slay a giant — and discovers the monster's rage hides a story of loss and loneliness.",
    aiLore: "Establishes Aranthia, knightly honour, and redemption as core Enchanted Universe canon.",
    aiContext: "Compassion, redemption, seeing beyond appearances, and peace over battle.",
    crosslinks: ["the-tale-of-the-kind-hearted-giant", "the-protector-of-aeloria", "the-savior-vlad"],
    loreBlock: "Sir Agron's choice to understand rather than destroy the giant is canon law in Aranthia — redemption through compassion becomes a universe-defining moral principle.",
    characters: "Sir Agron and the giant he befriends anchor the Redemption Seeker and Knight archetypes — mirrored later by the kind-hearted giant and Vlad the saviour.",
    location: "Aranthia is a knightly kingdom in the western heartland — bordered by Aeloria's hills to the east and visible from the Castle of Shadows across Eldoria's valleys.",
  },
  "miras-quest-to-save-her-parents": {
    hook: "A young girl enters danger alone — because love for her parents outweighs every fear.",
    aiLore: "Anchors filial love and Eldoria quest lore as canonical universe themes.",
    aiContext: "Filial devotion, bravery, rescue quest, and selfless determination.",
    crosslinks: ["the-time-traveling-dog", "the-savior-vlad", "the-mysterious-disappearance"],
    loreBlock: "Mira's quest proves the canon principle that the smallest hero can carry the greatest love — a theme that echoes across every child protagonist in the universe.",
    characters: "Mira stands alongside Oliver, Billy, and the searching sibling as the Child Hero archetype — young protagonists whose love drives the universe's most moving chronicles.",
    location: "Mira's quest-path winds through central Eldoria — the same medieval landscape where Cubi time-travels and Vlad's mountain village of Bravenford stands to the north.",
  },
  "billy-and-the-magic-of-hope": {
    hook: "In a village that forgot how to dream, a child awakens magic simply by refusing to stop believing.",
    aiLore: "Establishes hope-as-magic and Geislingen village lore in the Enchanted Universe canon.",
    aiContext: "Community hope, child heroism, village renewal, and belief in better days.",
    crosslinks: ["white-bison", "the-dream-of-the-old-singer", "the-protector-of-aeloria"],
    loreBlock: "Geislingen's hope awakening is canon proof that communities can regenerate — Billy's magic requires no spell, only collective belief that better days return.",
    characters: "Billy joins Oliver and Mira in the Child Hero lineage and connects to the old singer's community art — both prove that villages heal through innocence and creativity.",
    location: "Geislingen sits in the southern heartland between Aeloria's protector hills and the plains where the white bison appeared — a village crossroads of hope in the universe.",
  },
  "the-giant-komodo-and-the-unsettled-debts": {
    hook: "Ancient debts surface in a hidden village — and justice demands the past be faced, not buried.",
    aiLore: "Introduces Veridian, Stoneshade, and justice-through-consequence into universe canon.",
    aiContext: "Justice, facing the past, village secrets, and moral consequence.",
    crosslinks: ["the-protector-of-aeloria", "the-brave-knight", "the-savior-vlad"],
    loreBlock: "Stoneshade's unsettled debts establish that the Chronicles acknowledge consequence — actions in the past shape the present, and justice requires courage to confront old wrongs.",
    characters: "The village defenders share the Justice Hero lineage with Aeloria's protector and Sir Agron — heroes who face uncomfortable truths rather than flee them.",
    location: "Stoneshade is a hidden village deep in Veridian's lush forests — east of Aeloria, south of Drakwood, and west of the open plains where spirit-animals roam.",
  },
  "the-ancient-forest-and-the-old-man": {
    hook: "In the oldest forest, a solitary keeper holds wisdom the world has forgotten — until someone listens.",
    aiLore: "Deepens ancient forest and elder wisdom lore within the Enchanted Universe canon.",
    aiContext: "Solitude, nature harmony, elder wisdom, and peaceful magic.",
    crosslinks: ["aurelius-and-the-forest-of-wonders", "adventures-of-oliver", "the-terror-of-the-white-wolf"],
    loreBlock: "The oldest forests in the canon have keepers who live in harmony with magic rather than wielding it — the old man's tale is the universe's quiet counterpoint to wild adventure.",
    characters: "The old man anchors the Elder Wisdom lineage with the old singer — elders whose patience, solitude, and gentle power guide the universe's most reflective moments.",
    location: "The ancient forest sanctuary occupies the deepest woodland in the universe — the root-system beneath Oliver's forest, Aurelius's wonders, and Drakwood's eastern edge.",
  },
  "the-savior-vlad": {
    hook: "When a dragon threatens a mountain village, one warrior chooses sacrifice over survival.",
    aiLore: "Establishes Bravenford, dragon lore, and sacrificial heroism in the universe canon.",
    aiContext: "Heroism, sacrifice, protecting children, and warrior courage.",
    crosslinks: ["the-protector-of-aeloria", "miras-quest-to-save-her-parents", "the-brave-knight"],
    loreBlock: "Vlad's sacrifice establishes that the Chronicles honour heroes who protect the vulnerable — Bravenford becomes a symbol of mountain villages saved by single acts of extraordinary courage.",
    characters: "Vlad joins the protector of Aeloria and Sir Agron in the Warrior Hero lineage — fighters whose greatest strength is choosing others' safety over their own.",
    location: "Bravenford is a mountain village in northern Eldoria — overlooking valleys where Mira quested and within sight of Aranthia's knightly borderlands.",
  },
  "the-tale-of-the-kind-hearted-giant": {
    hook: "The village fears the giant on the hill — until a boy discovers that gentleness is the greatest strength.",
    aiLore: "Completes the giant-and-redemption arc established in The Brave Knight as universe canon.",
    aiContext: "Kindness, gentle strength, community acceptance, and misunderstood beings.",
    crosslinks: ["the-brave-knight", "the-savior-vlad", "billy-and-the-magic-of-hope"],
    loreBlock: "Giants in the canon are never simple monsters — the kind-hearted giant completes the redemption arc Sir Agron began, proving compassion is the universe's ultimate power.",
    characters: "Ewan and the giant mirror Sir Agron and his redeemed foe — both pairs prove that understanding transforms enemies into allies across the Chronicles.",
    location: "The village beneath the giant's hill sits in the foothills between Aranthia and Aeloria — a borderland where knightly kingdoms meet peaceful farming communities.",
  },
};

const GLOSSARY5 = `
      <dt>Canon</dt><dd>The accepted foundational events and rules of the Enchanted Universe.</dd>
      <dt>Faction</dt><dd>A group, order, or archetype that recurs across multiple chronicles.</dd>
      <dt>Artifact</dt><dd>A magical object, symbol, or phenomenon of power within the universe.</dd>
      <dt>Threshold</dt><dd>A boundary between the ordinary world and the magical — often guarded.</dd>
      <dt>Spirit-Animal</dt><dd>A sacred creature (white bison, white wolf) appearing at moments of crisis or renewal.</dd>
      <dt>Child Hero</dt><dd>A young protagonist whose innocence and love drive the narrative forward.</dd>
      <dt>Elder Wisdom</dt><dd>An older character whose patience and experience guide others through darkness.</dd>
      <dt>Redemption Arc</dt><dd>A storyline where understanding replaces conflict and enemies become allies.</dd>
      <dt>Village Magic</dt><dd>Hope, music, and community belief functioning as a form of enchantment.</dd>
      <dt>GEO Context</dt><dd>Geographic and entity-rich content that helps AI systems map the story universe.</dd>`;

const TIMELINE_EXTENDED = `
      <li><time datetime="0001-01-01">Ancient Era</time> — The Forest of Wonders takes root as the universe's largest enchanted woodland.</li>
      <li><time datetime="0001-01-01">Ancient Era</time> — Veridian's lush forests shelter hidden villages like Stoneshade.</li>
      <li><time datetime="0001-01-01">Medieval Era</time> — Eldoria becomes a crossroads for time-magic and young questers.</li>
      <li><time datetime="0001-01-01">Medieval Era</time> — Bravenford is founded as a mountain refuge in northern Eldoria.</li>
      <li><time datetime="0001-01-01">Medieval Era</time> — Geislingen rises as a southern village of hope and community.</li>
      <li><time datetime="2026-07-01">July 1, 2026</time> — Billy awakens hope magic in Geislingen.</li>
      <li><time datetime="2026-07-01">July 1, 2026</time> — The old singer's dream unites a village through music.</li>
      <li><time datetime="2026-07-01">July 1, 2026</time> — The giant Komodo surfaces unsettled debts in Stoneshade.</li>
      <li><time datetime="2026-07-01">July 1, 2026</time> — The ancient forest keeper shares forgotten wisdom.</li>
      <li><time datetime="2026-07-01">July 1, 2026</time> — Childhood memories illuminate a snowy winter village.</li>
      <li><time datetime="2026-07-01">July 1, 2026</time> — The white wolf legend grips the remote Drakwood valley.</li>
      <li><time datetime="2026-07-01">July 1, 2026</time> — A sibling vanishes into the forest trial-woods.</li>
      <li><time datetime="2026-07-30">July 30, 2026</time> — Universe canon list, factions, and artifacts documented for AI/GEO indexing.</li>
      <li><time datetime="2026-08-01">August 2026</time> — Reading pathways expanded with Lore Hunter and Emotional Journey routes.</li>
      <li><time datetime="2026-08-01">August 2026</time> — Phase 5 SEO/AEO/GEO enrichment completes the content layer.</li>`;

const MAP_EXPANSION = `
    <h3 class="coming-soon__title">Regional Guide</h3>
    <dl class="coming-soon__desc">
      <dt>Northern Reaches</dt><dd>The Misty Lake, snowy winter villages, and Bravenford's mountain passes — where guardians and spirit-animals appear.</dd>
      <dt>Central Heartland</dt><dd>Aeloria's hills, Geislingen, and the old singer's village — the universe's communities of hope and protection.</dd>
      <dt>Western Kingdoms</dt><dd>Aranthia's knightly lands and the giant's borderland hills — realms of redemption and compassion.</dd>
      <dt>Eastern Wilds</dt><dd>Drakwood valley, Stoneshade in Veridian, and the open plains — frontiers of fear, justice, and renewal.</dd>
      <dt>Deep Woodlands</dt><dd>The Forest of Wonders, Oliver's wilderness, and the ancient keeper's sanctuary — living trials of character.</dd>
      <dt>Gothic Borderlands</dt><dd>The Enchanted Castle and the Castle of Shadows — moonlit fortresses of mystery and riddles.</dd>
    </dl>
    <p class="coming-soon__desc">Every region is reachable through standalone chronicles — the map grows with each new tale published.</p>`;

const PATHWAYS_EXTENDED = `
    <h3 class="coming-soon__title">Lore Hunter Pathway</h3>
    <p class="coming-soon__desc">For readers who want to map the Enchanted Universe — canon events, factions, artifacts, and cross-story connections.</p>
    <ul class="coming-soon__desc">
      <li><a href="/stories/midnight-fisherman">The Midnight Fisherman</a> — Guardian mythology origin</li>
      <li><a href="/stories/the-brave-knight">The Brave Knight</a> — Redemption canon in Aranthia</li>
      <li><a href="/stories/the-giant-komodo-and-the-unsettled-debts">The Giant Komodo and the Unsettled Debts</a> — Veridian justice lore</li>
      <li><a href="/stories/the-time-traveling-dog">The Time-Traveling Dog</a> — Eldoria time-magic</li>
      <li><a href="/stories/the-ancient-forest-and-the-old-man">The Ancient Forest and the Old Man</a> — Elder wisdom lore</li>
    </ul>
    <h3 class="coming-soon__title">Emotional Journey Pathway</h3>
    <p class="coming-soon__desc">For readers seeking the most moving, reflective, and heart-driven chronicles in the collection.</p>
    <ul class="coming-soon__desc">
      <li><a href="/stories/children-of-heaven">Children of Heaven</a> — Innocence and peace beyond loss</li>
      <li><a href="/stories/billy-and-the-magic-of-hope">Billy and the Magic of Hope</a> — Community hope reborn</li>
      <li><a href="/stories/the-tale-of-the-kind-hearted-giant">The Tale of the Kind-Hearted Giant</a> — Gentleness as strength</li>
      <li><a href="/stories/the-dream-of-the-old-singer">The Dream of the Old Singer</a> — Music that unites</li>
      <li><a href="/stories/a-tale-of-childhood-past">A Tale of Childhood Past</a> — Nostalgia and friendship</li>
    </ul>`;

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function injectOnce(html, checkId, anchor, insertion) {
  if (html.includes(checkId)) return html;
  if (!html.includes(anchor)) return html;
  return html.replace(anchor, insertion + anchor);
}

function loadStories() {
  return fs
    .readdirSync(STORIES_DIR)
    .filter((f) => f.endsWith(".json") && f !== "_index.json")
    .map((f) => JSON.parse(fs.readFileSync(path.join(STORIES_DIR, f), "utf8")));
}

function patchHomepage() {
  let html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");

  // Ultra snippet + hero hooks after h1
  if (!html.includes("ai-overview-ultra")) {
    html = html.replace(
      /(<h1 class="hero__title"[^>]*>[\s\S]*?<\/h1>)/,
      `$1
      <p class="hero__desc ai-overview-ultra">The Enchanted Chronicles is a unified collection of short fantasy stories designed for fast reading, deep immersion, and emotional resonance. Each tale stands alone yet contributes to a shared universe of magic, mystery, and wonder.</p>`
    );
  }
    html = html.replace(
      /(<p class="hero__desc ai-overview-ultra">[\s\S]*?<\/p>)/,
      `$1
      <p class="hero__desc">A world where every story reveals a hidden truth.</p>
      <p class="hero__desc">Every doorway leads to courage, kindness, or redemption.</p>
      <p class="hero__desc">Magic lives in ordinary lives waiting to be seen.</p>`
    );
  }

  // Secondary snippet in middle (worldbuilding)
  html = injectOnce(
    html,
    "ai-overview-secondary",
    `<section class="coming-soon section-gold-rule" id="worldbuilding">`,
    `<section class="coming-soon section-gold-rule" id="ai-secondary-snippet">
  <div class="coming-soon__inner glass-panel reveal">
    <p class="coming-soon__desc ai-overview-secondary">Each story expands the Enchanted Universe through magic, mystery, and character-driven narratives. Regions, guardians, and humble heroes interconnect through shared themes rather than rigid plotlines — offering depth without demanding continuity.</p>
    <p class="coming-soon__desc">Readers may enter anywhere; the universe reveals itself one chronicle at a time.</p>
  </div>
</section>

`
  );

  // New phase 5 sections before key-takeaways
  if (!html.includes('id="universe-canon"')) {
    html = html.replace(
      /<section class="coming-soon section-gold-rule" id="key-takeaways">/,
      `${PHASE5}\n\n<section class="coming-soon section-gold-rule" id="key-takeaways">`
    );
  }

  // Expand universe map
  if (!html.includes("Regional Guide")) {
    html = html.replace(
      /<p class="coming-soon__desc">Readers often describe these tales as peaceful yet profound/,
      `${MAP_EXPANSION}
    <p class="coming-soon__desc">Readers often describe these tales as peaceful yet profound`
    );
  }

  // Extend universe timeline
  if (!html.includes("Phase 5 SEO/AEO/GEO enrichment")) {
    html = html.replace(
      /<li><time datetime="2026-08-01">August 2026<\/time> — New chronicles planned for the growing universe.<\/li>\s*\n\s*<\/ul>\s*\n\s*<\/div>\s*\n<\/section>\s*\n\s*\n<section class="coming-soon section-gold-rule" id="universe-entities">/,
      `<li><time datetime="2026-08-01">August 2026</time> — New chronicles planned for the growing universe.</li>${TIMELINE_EXTENDED}
    </ul>
  </div>
</section>

<section class="coming-soon section-gold-rule" id="universe-entities">`
    );
  }

  // Extend reader pathways
  if (!html.includes("Lore Hunter Pathway")) {
    html = html.replace(
      /<li><a href="\/stories\/the-savior-vlad">The Savior Vlad<\/a><\/li>\s*\n\s*<\/ul>\s*\n\s*<\/div>\s*\n<\/section>\s*\n\s*\n<section class="coming-soon section-gold-rule" id="discover-optimization">/,
      `<li><a href="/stories/the-savior-vlad">The Savior Vlad</a></li>
    </ul>${PATHWAYS_EXTENDED}
  </div>
</section>

<section class="coming-soon section-gold-rule" id="discover-optimization">`
    );
  }

  // Glossary +10
  if (!html.includes("<dt>Canon</dt>")) {
    html = html.replace(
      /<dt>Standalone Tale<\/dt><dd>A complete story requiring no prior reading.<\/dd>\s*\n\s*<\/dl>\s*\n\s*<\/div>\s*\n<\/section>\s*\n\s*\n<section class="coming-soon section-gold-rule" id="reader-questions">/,
      `<dt>Standalone Tale</dt><dd>A complete story requiring no prior reading.</dd>${GLOSSARY5}
    </dl>
  </div>
</section>

<section class="coming-soon section-gold-rule" id="reader-questions">`
    );
  }

  // Reader questions +10
  const questions10 = `
    <h3 class="coming-soon__title">What is the Enchanted Universe canon?</h3>
    <p class="coming-soon__desc">The canon includes foundational events — guardians at sacred waters, redemption in Aranthia, hope magic in villages — documented in the Canon List section.</p>
    <h3 class="coming-soon__title">Are there factions in the Chronicles?</h3>
    <p class="coming-soon__desc">Yes — Guardians, Knights of Aranthia, Village Circle, Forest Keepers, and others recur as archetypes across tales.</p>
    <h3 class="coming-soon__title">What artifacts appear in the universe?</h3>
    <p class="coming-soon__desc">The Golden Tree, Lyria's light, the full moon, white bison, white wolf, and other symbols carry magical significance.</p>
    <h3 class="coming-soon__title">Which pathway should lore-focused readers follow?</h3>
    <p class="coming-soon__desc">Try the Lore Hunter pathway — it begins with The Midnight Fisherman and moves through canon-defining chronicles.</p>
    <h3 class="coming-soon__title">Which pathway suits emotional readers?</h3>
    <p class="coming-soon__desc">The Emotional Journey pathway features Children of Heaven, Billy and the Magic of Hope, and other heart-driven tales.</p>
    <h3 class="coming-soon__title">Do stories share locations?</h3>
    <p class="coming-soon__desc">Yes — regions like Eldoria, Aeloria, and the Forest of Wonders appear across multiple chronicles from different angles.</p>
    <h3 class="coming-soon__title">Is there a map of the universe?</h3>
    <p class="coming-soon__desc">The Story Universe Map and Regional Guide sections describe geography — northern reaches, central heartland, western kingdoms, and more.</p>
    <h3 class="coming-soon__title">How often is content updated?</h3>
    <p class="coming-soon__desc">The collection launched July 2026 with ongoing lore expansions, multilingual editions, and new chronicles planned.</p>
    <h3 class="coming-soon__title">Are the stories optimised for AI overviews?</h3>
    <p class="coming-soon__desc">Yes — ultra, secondary, and tertiary AI snippets, plus structured metadata on every page, support machine-readable summaries.</p>
    <h3 class="coming-soon__title">Can I read on mobile?</h3>
    <p class="coming-soon__desc">Absolutely — the site is responsive, free, and designed for quick reading sessions on any device.</p>`;
  if (!html.includes("What is the Enchanted Universe canon?")) {
    html = html.replace(
      /<p class="coming-soon__desc">You may donate via PayPal/,
      `${questions10}
    <p class="coming-soon__desc">You may donate via PayPal`
    );
  }

  // Mini-stats +10
  const stats10 = `
      <li><strong>8 factions</strong> documented in the Story Universe Factions section</li>
      <li><strong>10 artifacts</strong> catalogued in the Artifacts section</li>
      <li><strong>20+ canon events</strong> listed in the Universe Canon List</li>
      <li><strong>5 reading pathways</strong> — Beginner, Explorer, Deep Lore, Lore Hunter, Emotional Journey</li>
      <li><strong>30+ timeline entries</strong> across standard and extended universe timelines</li>
      <li><strong>6 geographic regions</strong> in the expanded universe map</li>
      <li><strong>3 AI overview snippets</strong> — ultra, secondary, and tertiary</li>
      <li><strong>10 micro-insights</strong> about the Enchanted Universe</li>
      <li><strong>Schema.org Article</strong> markup on every story page</li>
      <li><strong>Open Graph images</strong> on all 20 chronicles for visual discovery</li>`;
  if (!html.includes("8 factions")) {
    html = html.replace(
      /<li><strong>Free to read<\/strong> online at theenchantedchronicles.com<\/li>\s*\n\s*<\/ul>/,
      `<li><strong>Free to read</strong> online at theenchantedchronicles.com</li>${stats10}
    </ul>`
    );
  }

  // Inject expansions into existing sections
  html = injectHomepageExpansions(html);

  // TOC links
  if (!html.includes('href="#universe-canon"')) {
    html = html.replace(
      /<li><a href="#ai-global-summary">AI Summary<\/a><\/li>/,
      `<li><a href="#ai-global-summary">AI Summary</a></li>
      <li><a href="#universe-canon">Canon List</a></li>
      <li><a href="#universe-factions">Factions</a></li>
      <li><a href="#universe-artifacts">Artifacts</a></li>
      <li><a href="#discover-booster">Discover Booster</a></li>
      <li><a href="#micro-insights">Insights</a></li>
      <li><a href="#ai-tertiary-snippet">Tertiary Snippet</a></li>`
    );
  }

  fs.writeFileSync(path.join(ROOT, "index.html"), html);
  console.log("patched index.html");
}

function injectHomepageExpansions(html) {
  // 10 micro-comparisons
  html = injectOnce(html, "Compared to long-form fantasy novels", `<p class="elenco__intro">The Enchanted Chronicles is`, `<p class="elenco__intro">Compared to long-form fantasy novels, these chronicles offer complete emotional arcs without multi-book commitment.</p>
      `);
  html = injectOnce(html, "Compared to serialized fiction", `<p class="coming-soon__desc">Unlike serialized web fiction`, `<p class="coming-soon__desc">Compared to serialized fiction, there are no cliffhangers — every tale resolves satisfyingly.</p>
    `);
  html = injectOnce(html, "Compared to grimdark fantasy", `<p class="coming-soon__desc">Unlike dark grim fantasy`, `<p class="coming-soon__desc">Compared to grimdark fantasy, the tone here favours hope, redemption, and kindness.</p>
    `);
  html = injectOnce(html, "Compared to classic fairy tales", `<p class="coming-soon__desc">Unlike traditional fairy tales`, `<p class="coming-soon__desc">Compared to classic fairy tales, characters here grow and endings may surprise with nuance.</p>
    `);
  html = injectOnce(html, "Compared to epic series", `<p class="mission-vision__card-text">Unlike epic fantasy series`, `<p class="mission-vision__card-text">Compared to epic series like multi-volume sagas, each chronicle is a complete world in miniature.</p>
      `);
  html = injectOnce(html, "Compared to picture-book fantasy", `<p class="coming-soon__desc">Unlike picture books`, `<p class="coming-soon__desc">Compared to picture-book fantasy, these stories offer full narrative depth for all ages.</p>
    `);
  html = injectOnce(html, "Compared to anthology collections", `<p class="coming-soon__desc">Unlike anthology collections with mixed authors`, `<p class="coming-soon__desc">Compared to mixed-author anthologies, every tale shares one voice, one vision, and one universe.</p>
    `);
  html = injectOnce(html, "Compared to web novels", `<section class="coming-soon section-gold-rule" id="faq"`, `<p class="coming-soon__desc">Compared to web novels with hundreds of chapters, each chronicle respects your time with a complete arc in minutes.</p>
    `);
  html = injectOnce(html, "Compared to children's-only fiction", `<p class="coming-soon__desc">Yes — most stories are written for all ages`, `<p class="coming-soon__desc">Compared to children's-only fiction, these tales offer emotional complexity adults appreciate equally.</p>
    `);
  html = injectOnce(html, "Compared to visual-only media", `<p class="coming-soon__desc">The Enchanted Chronicles features rich cover visuals`, `<p class="coming-soon__desc">Compared to visual-only media, reading these chronicles engages imagination through prose and illustration together.</p>
    `);

  // 5 micro-summaries
  html = injectOnce(html, "Micro-summary: the collection at a glance", `<header class="elenco__head glass-panel reveal">`, `<p class="elenco__sub">Micro-summary: the collection at a glance — twenty original fantasy tales, free online, readable in any order, united by wonder.</p>
      `);
  html = injectOnce(html, "Micro-summary: the author", `<span class="mission-vision__label">Author</span>`, `<p class="mission-vision__card-text">Micro-summary: Agron Osmani writes short fantasy that heals, inspires, and reconnects readers to wonder.</p>
      `);
  html = injectOnce(html, "Micro-summary: the universe", `<span class="coming-soon__label">Universe</span>`, `<p class="coming-soon__desc">Micro-summary: one atmospheric universe of forests, lakes, castles, and villages linked by theme and emotional truth.</p>
    `);
  html = injectOnce(html, "Micro-summary: reading experience", `<span class="coming-soon__label">Tips</span>`, `<p class="coming-soon__desc">Micro-summary: most tales take 3–6 minutes — perfect for bedtime, lunch breaks, or quiet reflection.</p>
    `);
  html = injectOnce(html, "Micro-summary: discovery", `<span class="coming-soon__label">Discover</span>`, `<p class="coming-soon__desc">Micro-summary: visually rich, semantically structured, and updated regularly for search and AI discoverability.</p>
    `);

  // 10 micro-lists (3 items each)
  html = injectOnce(html, "Heroes rise from fishermen", `<div class="hero__actions">`, `<ul class="hero__desc">
        <li>Heroes rise from fishermen, children, and singers</li>
        <li>Magic rewards courage, not power</li>
        <li>Every story is a complete journey</li>
      </ul>
      `);
  html = injectOnce(html, "Guardians protect sacred waters", `<nav class="coming-soon section-gold-rule" id="toc"`, `<ul class="coming-soon__desc">
      <li>Guardians protect sacred waters and forests</li>
      <li>Villages rebuild through hope and unity</li>
      <li>Knights choose compassion over conquest</li>
    </ul>
    `);
  html = injectOnce(html, "Moonlight unlocks hidden magic", `<span class="coming-soon__label">Worldbuilding</span>`, `<ul class="coming-soon__desc">
      <li>Moonlight unlocks hidden magic</li>
      <li>Forests test character, not strength</li>
      <li>Giants may be lonely, not evil</li>
    </ul>
    `);
  html = injectOnce(html, "Redemption is always possible", `<span class="coming-soon__label">Highlights</span>`, `<ul class="elenco__sub">
      <li>Redemption is always possible</li>
      <li>Children carry the bravest love</li>
      <li>Elders hold forgotten wisdom</li>
    </ul>
    `);
  html = injectOnce(html, "Gothic castles hold riddles", `<span class="coming-soon__label">Comparison</span>`, `<ul class="coming-soon__desc">
      <li>Gothic castles hold riddles, not just monsters</li>
      <li>Spirit-animals signal renewal</li>
      <li>Music and art awaken village hope</li>
    </ul>
    `);
  html = injectOnce(html, "Justice requires facing the past", `<span class="mission-vision__label" data-i18n="missionVision.label">`, `<ul class="coming-soon__desc">
      <li>Justice requires facing the past</li>
      <li>Sacrifice protects the vulnerable</li>
      <li>Kindness is the greatest strength</li>
    </ul>
    `);
  html = injectOnce(html, "Eldoria spans medieval valleys", `<span class="coming-soon__label">Geography</span>`, `<ul class="coming-soon__desc">
      <li>Eldoria spans medieval valleys and time-magic</li>
      <li>Aranthia honours knights who show mercy</li>
      <li>Veridian hides villages with ancient debts</li>
    </ul>
    `);
  html = injectOnce(html, "Canon events shape the lore", `<span class="coming-soon__label">Timeline</span>`, `<ul class="coming-soon__desc">
      <li>Canon events shape the lore</li>
      <li>Multilingual editions expand reach</li>
      <li>New chronicles grow the map outward</li>
    </ul>
    `);
  html = injectOnce(html, "Free reading on any device", `<span class="coming-soon__label">Resources</span>`, `<ul class="coming-soon__desc">
      <li>Free reading on any device</li>
      <li>Structured data on every page</li>
      <li>Pathways guide every reader type</li>
    </ul>
    `);
  html = injectOnce(html, "AI snippets support machine summaries", `<span class="coming-soon__label">Lore FAQ</span>`, `<ul class="coming-soon__desc">
      <li>AI snippets support machine summaries</li>
      <li>Crosslinks connect thematic chronicles</li>
      <li>Lore blocks expand universe depth</li>
    </ul>
    `);

  // 3 micro-CTAs
  html = injectOnce(html, "Begin your first chronicle today.", `<a class="btn btn-primary" href="/stories/midnight-fisherman.html"`, `<p class="hero__desc"><a href="/stories/midnight-fisherman">Begin your first chronicle today.</a></p>
        `);
  html = injectOnce(html, "Follow a reading pathway", `<span class="coming-soon__label">Pathways</span>`, `<p class="coming-soon__desc"><a href="#reader-pathways">Follow a reading pathway</a> tailored to your mood — beginner, explorer, lore hunter, or emotional journey.</p>
    `);
  html = injectOnce(html, "Discover the full universe map", `<span class="coming-soon__label">Canon</span>`, `<p class="coming-soon__desc"><a href="#universe-map">Discover the full universe map</a> and explore canon, factions, and artifacts.</p>
    `);

  return html;
}

function patchStory(story) {
  const file = path.join(ROOT, "stories", `${story.slug}.html`);
  let html = fs.readFileSync(file, "utf8");
  const s5 = STORY5[story.slug];
  if (!s5) return;

  // ai-lore and ai-context meta
  if (!html.includes('name="ai-lore"')) {
    html = html.replace(
      /<meta name="image-priority"[^>]*>/,
      `$&
<meta name="ai-lore" content="${esc(s5.aiLore)}" />
<meta name="ai-context" content="${esc(s5.aiContext)}" />`
    );
  }

  // Story hook after title
  if (!html.includes("story-page__hook")) {
    html = html.replace(
      /<h1 class="story-page__title"[^>]*><\/h1>/,
      `$&
      <p class="story-page__meta story-page__hook">${s5.hook}</p>`
    );
  }

  // Phase 5 extras in story-page__extras
  if (!html.includes("Story Universe Crosslinks")) {
    const crosslinkHtml = s5.crosslinks
      .map(
        (slug) =>
          `<li><a href="/stories/${slug}">${TITLES[slug]}</a></li>`
      )
      .join("\n          ");
    const block = `
        <h3>Story Universe Crosslinks</h3>
        <ul>
          ${crosslinkHtml}
        </ul>
        <h3>Story Universe Lore Block</h3>
        <p>${s5.loreBlock}</p>
        <h3>Story Universe Character Connections</h3>
        <p>${s5.characters}</p>
        <h3>Story Universe Location Notes</h3>
        <p>${s5.location}</p>`;

    html = html.replace(/<h3>Story Tags<\/h3>/, `${block}
        <h3>Story Tags</h3>`);
  }

  fs.writeFileSync(file, html);
  console.log("patched story", story.slug);
}

const all = loadStories();
patchHomepage();
for (const s of all) patchStory(s);
console.log("phase 5 complete");
