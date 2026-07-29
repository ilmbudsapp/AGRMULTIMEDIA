import type { Language } from "@/lib/i18n";

type LangKey = "sr" | "en" | "de" | "it" | "al";

function langKey(lang: Language): LangKey {
  if (lang === "sq" || lang === "al") return "al";
  if (lang === "sr" || lang === "en" || lang === "de" || lang === "it") return lang;
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

const sr: HomeComparisonsCopy = {
  eyebrow: "Kako biramo pristup",
  title: "SEO vs AEO vs GEO — i kada prilagođen sajt pobedi šablon",
  lead:
    "Mi objašnjavamo kompromise jednostavnim jezikom jer budžet i rok treba da prate cilj. Međutim, nema jednog pobednika za svaki biznis — prvo mapiramo opcije prema vašem cilju.",
  seoAeoGeoTitle: "Koja je razlika između SEO, AEO i GEO?",
  tableCaption: "Tri sloja koja primenjujemo na javnim stranicama",
  colTopic: "Sloj",
  colFocus: "Fokus",
  colBestFor: "Najbolje za",
  rows: [
    ["SEO", "Indeksiranje, brzina, klasično rangiranje", "Svaki javni URL"],
    ["AEO", "Odgovor ispod naslova, FAQ, liste", "Početna, usluge, kontakt"],
    ["GEO", "Definicije, izvori, više perspektiva", "Studije, tvrdnje, blog"],
  ],
  templateTitle: "Prilagođen sajt vs šablon",
  templateBody:
    "Šablon štedi novac na početku. S druge strane, ako vam je cilj da se izdvojite na lokalnom tržištu u Nemačkoj, prilagođen layout i fotografija obično bolje konvertuju. U nekim slučajevima preporučujemo prvo jednu landing stranicu, pa širenje — stoga niste zaključani u pogrešan obim.",
  aiSiteTitle: "Brzina vs struktura spremna za AI",
  aiSiteBody:
    "Brz statički ili edge sajt je naš podrazumevani izbor za performanse. To znači da i dalje pišemo naslove i uvode koje LLM može citirati. Na primer, dodajemo definicije i statistike sa izvorima gde tvrdnje imaju težinu. Ako želite samo lep ekran bez strukture, reći ćemo vam — jer AI vidljivost i SEO dele isti temelj.",
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

const it: HomeComparisonsCopy = {
  eyebrow: "Come scegliamo",
  title: "SEO vs AEO vs GEO — e quando il sito su misura batte il template",
  lead:
    "Spieghiamo i compromessi in modo chiaro perché budget e tempi devono seguire l’obiettivo. Tuttavia non esiste un’unica soluzione per tutti — mappiamo prima le opzioni.",
  seoAeoGeoTitle: "Qual è la differenza tra SEO, AEO e GEO?",
  tableCaption: "Tre livelli sulle pagine pubbliche",
  colTopic: "Livello",
  colFocus: "Focus",
  colBestFor: "Ideale per",
  rows: [
    ["SEO", "Crawl, velocità, ranking classico", "Ogni URL pubblico"],
    ["AEO", "Risposta iniziale, FAQ, elenchi", "Home, servizi, contatto"],
    ["GEO", "Definizioni, fonti, prospettive", "Case study, blog"],
  ],
  templateTitle: "Sito su misura vs template",
  templateBody:
    "Un template costa meno all’inizio. D’altra parte, per distinguersi sul mercato tedesco, layout e foto dedicati convertono spesso meglio. In alcuni casi partiamo da una landing — quindi non siete bloccati nel scope sbagliato.",
  aiSiteTitle: "Performance vs struttura pronta per l’AI",
  aiSiteBody:
    "Sito veloce statico o edge è il nostro default. Significa comunque titoli e lead citabili dai LLM, con definizioni e dati con fonte dove servono.",
};

const al: HomeComparisonsCopy = {
  eyebrow: "Si vendosim",
  title: "SEO vs AEO vs GEO — dhe kur sajt i personalizuar fiton ndaj shabllonit",
  lead:
    "Ne shpjegojmë kompromiset qartë sepse buxheti dhe afati duhet të përputhen me qëllimin. Megjithatë nuk ka një fitues për çdo biznes — së pari mapojmë opsionet.",
  seoAeoGeoTitle: "Cila është ndryshimi midis SEO, AEO dhe GEO?",
  tableCaption: "Tre shtresa në faqet publike",
  colTopic: "Shtresë",
  colFocus: "Fokus",
  colBestFor: "Ideal për",
  rows: [
    ["SEO", "Indeksim, shpejtësi, renditje klasike", "Çdo URL publike"],
    ["AEO", "Përgjigje e parë, FAQ, lista", "Kryefaqja, shërbime, kontakt"],
    ["GEO", "Përkufizime, burime, perspektiva", "Case study, blog"],
  ],
  templateTitle: "Sajt i personalizuar vs shabllon",
  templateBody:
    "Shablloni kursen në fillim. Nga ana tjetër, për treg lokal gjerman, layout dhe foto të dedikuara shpesh konvertojnë më mirë. Në disa raste fillojmë me një landing — prandaj nuk jeni të bllokuar.",
  aiSiteTitle: "Performancë vs strukturë gati për AI",
  aiSiteBody:
    "Sajti i shpejtë statik ose edge është default-i ynë. Kjo nuk heq tituj dhe lead që LLM mund të citojë, me burime ku pretendimet kanë peshë.",
};

const BY_LANG: Record<LangKey, HomeComparisonsCopy> = { en, de, sr, it, al };

export function getHomeComparisonsCopy(lang: Language): HomeComparisonsCopy {
  return BY_LANG[langKey(lang)] ?? en;
}
