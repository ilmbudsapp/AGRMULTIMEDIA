import type { Language } from "@/lib/i18n";

type LangKey = "en" | "de";

function langKey(lang: Language): LangKey {
  if (lang === "en" || lang === "de") return lang;
  return "en";
}

export type HomeComparisonsCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  seoAeoGeoTitle: string;
  tableCaption: string;
  colTopic: string;
  colFocus: string;
  colBestFor: string;
  rows: [string, string, string][];
  templateTitle: string;
  templateBody: string;
  aiSiteTitle: string;
  aiSiteBody: string;
};

const en: HomeComparisonsCopy = {
  eyebrow: "How we choose",
  title: "SEO vs AEO vs GEO — and when a custom site beats a template",
  lead:
    "We explain trade-offs in plain language because your budget and timeline should match the approach. However, there is no single winner for every business — we map options to your goal first.",
  seoAeoGeoTitle: "What is the difference between SEO, AEO, and GEO?",
  tableCaption: "Three layers we apply on public pages",
  colTopic: "Layer",
  colFocus: "Focus",
  colBestFor: "Best for",
  rows: [
    ["SEO", "Crawlability, speed, classic rankings", "Every public URL"],
    ["AEO", "Answer-first copy, FAQ, lists", "Home, services, contact"],
    ["GEO", "Definitions, sources, balanced views", "Case studies, claims, blog"],
  ],
  templateTitle: "Custom website vs template website",
  templateBody:
    "A template saves money at the start. On the other hand, if your goal is to stand out in a local German market, a tailored layout and photography usually convert better. In some cases we recommend a lean landing page first, then expand — therefore you are not locked into the wrong scope.",
  aiSiteTitle: "Static performance vs AI-ready structure",
  aiSiteBody:
    "A fast static or edge-hosted site is our default for performance. That means we still write headings and leads so LLMs can quote you. For example, we add definitions and sourced stats where claims matter. If you only want a pretty page without structure, we will tell you — because AI visibility and SEO share the same foundation.",
};

const de: HomeComparisonsCopy = {
  eyebrow: "So entscheiden wir",
  title: "SEO vs AEO vs GEO — und wann Individual-Website dem Template schlägt",
  lead:
    "Wir erklären Kompromisse in klarer Sprache, weil Budget und Zeitplan zum Ziel passen müssen. Allerdings gibt es keinen Einheitsansatz — zuerst ordnen wir Optionen Ihrem Ziel zu.",
  seoAeoGeoTitle: "Was ist der Unterschied zwischen SEO, AEO und GEO?",
  tableCaption: "Drei Ebenen auf öffentlichen Seiten",
  colTopic: "Ebene",
  colFocus: "Fokus",
  colBestFor: "Ideal für",
  rows: [
    ["SEO", "Crawlability, Geschwindigkeit, klassisches Ranking", "Jede öffentliche URL"],
    ["AEO", "Antwort-zuerst, FAQ, Listen", "Start, Leistungen, Kontakt"],
    ["GEO", "Definitionen, Quellen, Perspektiven", "Cases, Aussagen, Blog"],
  ],
  templateTitle: "Individuelle Website vs Template",
  templateBody:
    "Ein Template spart Startkosten. Andererseits konvertiert bei lokalem DE-Markt oft individuelles Layout und Fotografie besser. In manchen Fällen empfehlen wir zuerst eine Landingpage — daher sind Sie nicht im falschen Umfang gefangen.",
  aiSiteTitle: "Performance vs KI-taugliche Struktur",
  aiSiteBody:
    "Schnelle statische oder Edge-Auslieferung ist unser Performance-Default. Das heißt: wir schreiben trotzdem Überschriften und Leads, die LLMs zitieren können. Zum Beispiel Definitionen und belegte Kennzahlen, wo Aussagen zählen.",
};

const BY_LANG: Record<LangKey, HomeComparisonsCopy> = { en, de };

export function getHomeComparisonsCopy(lang: Language): HomeComparisonsCopy {
  return BY_LANG[langKey(lang)] ?? en;
}
