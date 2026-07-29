import type { Language } from "@/lib/i18n";

type LangKey = "sr" | "en" | "de" | "it" | "al";

function langKey(lang: Language): LangKey {
  if (lang === "sq" || lang === "al") return "al";
  if (lang === "sr" || lang === "en" || lang === "de" || lang === "it") return lang;
  return "en";
}

export type HomeExperienceCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  fixbikeTitle: string;
  fixbikeBody: string;
  agrTitle: string;
  agrBody: string;
  sourcesTitle: string;
  sources: { label: string; url: string }[];
};

const en: HomeExperienceCopy = {
  eyebrow: "Experience",
  title: "What we see in real client work",
  lead:
    "In our work with small businesses we often start with the same issue: the site looks fine, but machines cannot quote you. Therefore we fix structure before we polish decoration.",
  fixbikeTitle: "Example: fixbike.online (measured audit, May 2026)",
  fixbikeBody:
    "On fixbike.online a before/after audit snapshot showed overall Grade F (49) moving to Grade A (88) in under 24 hours, with GEO 24→90 and AEO 31→85. That is one domain and one tool run — not a guarantee for every project, but it shows how we prioritize crawlable answers and generative signals.",
  agrTitle: "Our own site: agrmultimedia.eu",
  agrBody:
    "On www.agrmultimedia.eu a public audit on May 9, 2026 reported SEO 92, AEO 83, GEO 78, overall Grade A. We apply the same checklist to client launches. The audit tool suggested a SaaS-style site classification as a hypothesis — we mention it only as a technical-depth signal, not as a claim about your business model.",
  sourcesTitle: "Sources we link when we cite performance",
  sources: [
    { label: "Google Search Central — Core Web Vitals", url: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
    { label: "Google Search Central — structured data", url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
    { label: "HTTP Archive — Web Almanac", url: "https://almanac.httparchive.org/en/2024/" },
  ],
};

const sr: HomeExperienceCopy = {
  eyebrow: "Iskustvo",
  title: "Šta često vidimo u radu sa klijentima",
  lead:
    "U našem radu sa malim biznisima često počinjemo od istog problema: sajt izgleda uredno, ali mašine ne mogu da vas citiraju. Zato prvo popravljamo strukturu, pa tek onda „šminku“.",
  fixbikeTitle: "Primer: fixbike.online (meren audit, maj 2026.)",
  fixbikeBody:
    "Na fixbike.online snimak pre/posle pokazuje ukupno Grade F (49) prema Grade A (88) za manje od 24 sata, sa GEO 24→90 i AEO 31→85. To je jedan domen i jedan prolaz alata — nije garancija za svaki projekat, ali pokazuje kako prioritetizujemo citatljive odgovore.",
  agrTitle: "Naš sajt: agrmultimedia.eu",
  agrBody:
    "Na www.agrmultimedia.eu javni audit 9. maja 2026. beleži SEO 92, AEO 83, GEO 78, ukupno Grade A. Isti checklist primenjujemo na klijentske objave. Alat je predložio SaaS klasifikaciju kao hipotezu — pominjemo je samo kao signal tehničke dubine, ne kao tvrdnju o vašem modelu poslovanja.",
  sourcesTitle: "Izvori koje linkujemo kada citiramo performanse",
  sources: [
    { label: "Google Search Central — Core Web Vitals", url: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
    { label: "Google Search Central — strukturisani podaci", url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
    { label: "HTTP Archive — Web Almanac", url: "https://almanac.httparchive.org/en/2024/" },
  ],
};

const de: HomeExperienceCopy = {
  eyebrow: "Erfahrung",
  title: "Was wir in echter Kundenarbeit sehen",
  lead:
    "In unserer Arbeit mit KMU beginnen wir oft gleich: die Seite wirkt ordentlich, aber Maschinen können Sie nicht zitieren. Deshalb zuerst Struktur, dann Dekoration.",
  fixbikeTitle: "Beispiel: fixbike.online (gemessenes Audit, Mai 2026)",
  fixbikeBody:
    "Bei fixbike.online zeigte ein Vorher/Nachher-Snapshot insgesamt Grade F (49) zu Grade A (88) in unter 24 Stunden, GEO 24→90, AEO 31→85. Ein Domain-Fall — keine Garantie für jedes Projekt.",
  agrTitle: "Eigene Seite: agrmultimedia.eu",
  agrBody:
    "Auf www.agrmultimedia.eu meldete ein öffentliches Audit am 9. Mai 2026 SEO 92, AEO 83, GEO 78, gesamt Grade A. SaaS-Klassifikation nur als technische Hypothese, nicht als Aussage über Ihr Geschäftsmodell.",
  sourcesTitle: "Quellen für Performance-Aussagen",
  sources: [
    { label: "Google Search Central — Core Web Vitals", url: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
    { label: "Google Search Central — strukturierte Daten", url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
    { label: "HTTP Archive — Web Almanac", url: "https://almanac.httparchive.org/en/2024/" },
  ],
};

const it: HomeExperienceCopy = { ...en, eyebrow: "Esperienza", title: "Cosa vediamo nel lavoro reale con i clienti" };
const al: HomeExperienceCopy = { ...en, eyebrow: "Përvojë", title: "Çfarë shohim në punën reale me klientët" };

const BY_LANG: Record<LangKey, HomeExperienceCopy> = { en, de, sr, it, al };

export function getHomeExperienceCopy(lang: Language): HomeExperienceCopy {
  return BY_LANG[langKey(lang)] ?? en;
}
