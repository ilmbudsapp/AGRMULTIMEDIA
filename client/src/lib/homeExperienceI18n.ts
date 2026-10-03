import type { Language } from "@/lib/i18n";

type LangKey = "en" | "de";

function langKey(lang: Language): LangKey {
  if (lang === "en" || lang === "de") return lang;
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
  agrTitle: "Our own site: agrmultimedia.com",
  agrBody:
    "On www.agrmultimedia.com a public audit on May 9, 2026 reported SEO 92, AEO 83, GEO 78, overall Grade A. We apply the same checklist to client launches. The audit tool suggested a SaaS-style site classification as a hypothesis — we mention it only as a technical-depth signal, not as a claim about your business model.",
  sourcesTitle: "Sources we link when we cite performance",
  sources: [
    { label: "Google Search Central — Core Web Vitals", url: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
    { label: "Google Search Central — structured data", url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
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
  agrTitle: "Eigene Seite: agrmultimedia.com",
  agrBody:
    "Auf www.agrmultimedia.com meldete ein öffentliches Audit am 9. Mai 2026 SEO 92, AEO 83, GEO 78, gesamt Grade A. SaaS-Klassifikation nur als technische Hypothese, nicht als Aussage über Ihr Geschäftsmodell.",
  sourcesTitle: "Quellen für Performance-Aussagen",
  sources: [
    { label: "Google Search Central — Core Web Vitals", url: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
    { label: "Google Search Central — strukturierte Daten", url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
    { label: "HTTP Archive — Web Almanac", url: "https://almanac.httparchive.org/en/2024/" },
  ],
};

const BY_LANG: Record<LangKey, HomeExperienceCopy> = { en, de };

export function getHomeExperienceCopy(lang: Language): HomeExperienceCopy {
  return BY_LANG[langKey(lang)] ?? en;
}
