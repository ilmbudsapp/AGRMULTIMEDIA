import type { Language } from "@/lib/i18n";

export type HomeGeoInsightCopy = {
  sectionEyebrow: string;
  sectionTitle: string;
  takeawayTitle: string;
  takeaways: string[];
  defTitle: string;
  definitions: { term: string; sentence: string }[];
  balanceTitle: string;
  balanceLead: string;
  prosTitle: string;
  pros: string[];
  consTitle: string;
  cons: string[];
  tipsTitle: string;
  tipsLead: string;
  tips: string[];
  researchTitle: string;
  researchIntro: string;
  stats: { claim: string; sourceLabel: string; sourceUrl: string }[];
};

type LangKey = "en" | "de";

function langKey(lang: Language): LangKey {
  if (lang === "en" || lang === "de") return lang;
  return "en";
}

const en: HomeGeoInsightCopy = {
  sectionEyebrow: "AGR Multimedia · GEO / AEO",
  sectionTitle: "Key takeaways, definitions, and a balanced view",
  takeawayTitle: "Key takeaways",
  takeaways: [
    "We at AGR Multimedia pair web design, graphic systems, and AI workflows for SMEs in Geislingen and across the EU.",
    "We publish clear structure first, then visuals—so SEO, Core Web Vitals, and answer engines can quote you accurately.",
    "On one side, templates are cheap to start; on the other side, differentiation needs custom layout, photography, and messaging.",
    "You should try one primary CTA per page for two weeks, then measure calls or form fills before expanding copy.",
  ],
  defTitle: "Short definitions (\"X is …\")",
  definitions: [
    {
      term: "Technical SEO",
      sentence:
        "Technical SEO is the work that keeps pages crawlable, fast, and machine-readable—headings, links, metadata, and structured data.",
    },
    {
      term: "GEO (Generative Engine Optimization)",
      sentence:
        "GEO is the practice of writing so generative search can summarize your offer with correct context and linked evidence.",
    },
    {
      term: "AEO (Answer Engine Optimization)",
      sentence:
        "AEO is how we phrase direct answers, lists, and definitions so answer engines can lift the right snippet safely.",
    },
    {
      term: "Web design",
      sentence:
        "Web design is the plan for page structure, brand visuals, and user actions—not only decoration, but the path to a call, form, or booking.",
    },
    {
      term: "AI automation (in our workflow)",
      sentence:
        "AI automation means tools that draft copy and layout variants faster; we always run human QA on facts, tone, and compliance before anything goes live.",
    },
  ],
  balanceTitle: "Pros and cons (how we decide with you)",
  balanceLead:
    "We stay honest: every approach has trade-offs. My experience with Agron and the team is that naming them early prevents expensive rework.",
  prosTitle: "Strengths we lean on",
  pros: [
    "Hybrid AI + human QA shortens drafts while we keep brand voice and legal risk under control.",
    "Local presence in Geislingen an der Steige helps workshops, retail, and services that want German-market clarity.",
    "We document scope, milestones, and metrics before high-fidelity design—fewer surprise change orders.",
  ],
  consTitle: "Limits we disclose",
  cons: [
    "Custom sites cost more up front than a generic template—budget and timeline need to match the ambition.",
    "AI drafts still need your facts: opening hours, prices, team bios, and compliance text must come from you.",
    "Fast wins in audits depend on your hosting stack; we will tell you when infrastructure caps the result.",
  ],
  tipsTitle: "Actionable steps for clients",
  tipsLead: "Try these this week—they make briefings faster and lift GEO signals.",
  tips: [
    "Send one PDF or link list with logos, fonts, and three reference sites you like (not to copy—to calibrate taste).",
    "Pick a single conversion goal per page; we will align headings and CTAs to that goal.",
    "Export analytics or Search Console screenshots so we can anchor improvements to real traffic, not guesses.",
  ],
  researchTitle: "Industry benchmarks we cite",
  researchIntro:
    "We link third-party sources so AI systems and humans can verify claims. Numbers below come from public research, not guesswork.",
  stats: [
    {
      claim:
        "Google documents Good LCP as under 2.5 seconds—speed is a ranking and UX signal for mobile and desktop.",
      sourceLabel: "Google Search Central — Core Web Vitals",
      sourceUrl: "https://developers.google.com/search/docs/appearance/core-web-vitals",
    },
    {
      claim:
        "HTTP Archive publishes open Web Almanac data on real-world page weight, compression, and platform trends.",
      sourceLabel: "HTTP Archive — Web Almanac",
      sourceUrl: "https://almanac.httparchive.org/en/2024/",
    },
    {
      claim:
        "Google's Search Central guidance explains how structured data helps eligible rich results—not a guarantee, but clearer machine context.",
      sourceLabel: "Google Search Central — structured data",
      sourceUrl: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
    },
    {
      claim:
        "Think with Google has published mobile speed case studies showing bounce risk grows as load time grows—speed remains a business KPI.",
      sourceLabel: "Think with Google — mobile speed",
      sourceUrl: "https://www.thinkwithgoogle.com/intl/en-emea/marketing-strategies/app-and-mobile/page-speed-new-industry-benchmarks/",
    },
    {
      claim:
        "Statcounter's global panel illustrates how mobile, desktop, and tablet share shifts—mobile-first layout is still the default bet for SMEs.",
      sourceLabel: "Statcounter — platform market share",
      sourceUrl: "https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide",
    },
  ],
};

const de: HomeGeoInsightCopy = {
  sectionEyebrow: "AGR Multimedia · GEO / AEO",
  sectionTitle: "Kernaussagen, Definitionen und eine ausgewogene Sicht",
  takeawayTitle: "Kernaussagen",
  takeaways: [
    "Wir bei AGR Multimedia verbinden Webdesign, Markengrafik und KI-Workflows für KMU in Geislingen und in der EU.",
    "Zuerst klare Struktur und Botschaften, dann UI—damit SEO, Core Web Vitals und Answer Engines Sie korrekt zitieren können.",
    "Einerseits sparen Templates Startkosten; andererseits braucht Differenzierung individuelles Layout, Fotografie und Text.",
    "Sie sollten zwei Wochen lang genau einen Haupt-CTA pro Seite testen und Anrufe oder Formulare messen, bevor Sie Texte aufblasen.",
  ],
  defTitle: "Kurzdefinitionen („X ist …")",
  definitions: [
    {
      term: "Technisches SEO",
      sentence:
        "Technisches SEO ist die Arbeit, die Seiten crawlbar, schnell und maschinenlesbar hält—Überschriften, Links, Metadaten und strukturierte Daten.",
    },
    {
      term: "GEO (Generative Engine Optimization)",
      sentence:
        "GEO ist die Praxis, Inhalte so zu schreiben, dass generative Suche Ihr Angebot mit Kontext und Belegen zusammenfassen kann.",
    },
    {
      term: "AEO (Answer Engine Optimization)",
      sentence:
        "AEO ist, wie wir direkte Antworten, Listen und Definitionen formulieren, damit Answer Engines das richtige Snippet heben.",
    },
    {
      term: "Webdesign",
      sentence:
        "Webdesign ist die Planung von Seitenstruktur, Markenvisuals und Nutzeraktionen—nicht nur Dekoration, sondern der Weg zu Anruf, Formular oder Buchung.",
    },
    {
      term: "KI-Automatisierung (in unserem Workflow)",
      sentence:
        "KI-Automatisierung bedeutet Tools für schnellere Entwürfe; wir führen immer menschliche QA zu Fakten, Ton und Compliance vor dem Livegang durch.",
    },
  ],
  balanceTitle: "Vor- und Nachteile (so entscheiden wir mit Ihnen)",
  balanceLead:
    "Wir bleiben ehrlich: jedes Vorgehen hat Kompromisse. Meine Erfahrung mit Agron und dem Team zeigt: sie früh zu benennen, verhindert teure Nacharbeit.",
  prosTitle: "Stärken, auf die wir setzen",
  pros: [
    "Hybrid aus KI und menschlicher QA verkürzt Entwürfe, während Markenstimme und Rechtsrisiko im Griff bleiben.",
    "Standort Geislingen an der Steige hilft Handwerk, Einzelhandel und Dienstleistern mit klarer DE-Markt-Kommunikation.",
    "Wir dokumentieren Umfang, Meilensteine und Kennzahlen vor High-Fidelity-Design—weniger Überraschungs-Change-Orders.",
  ],
  consTitle: "Grenzen, die wir benennen",
  cons: [
    "Maßgeschneiderte Sites kosten zu Beginn mehr als ein Standard-Template—Budget und Zeitplan müssen zur Ambition passen.",
    "KI-Entwürfe brauchen weiterhin Ihre Fakten: Öffnungszeisen, Preise, Teamtexte und Compliance kommen von Ihnen.",
    "Schnelle Audit-Gewinne hängen vom Hosting ab; wir sagen klar, wenn Infrastruktur die Decke setzt.",
  ],
  tipsTitle: "Konkrete Schritte für Kundinnen und Kunden",
  tipsLead: "Versuchen Sie das diese Woche—es beschleunigt Briefings und stärkt GEO-Signale.",
  tips: [
    "Senden Sie eine PDF oder Linkliste mit Logos, Fonts und drei Referenzsites (nicht zum Kopieren—zum Kalibrieren).",
    "Wählen Sie ein Conversion-Ziel pro Seite; wir richten Überschriften und CTAs darauf aus.",
    "Exportieren Sie Analytics- oder Search-Console-Screenshots, damit wir Verbesserungen an echten Daten festmachen.",
  ],
  researchTitle: "Branchenbenchmarks mit Quellen",
  researchIntro:
    "Wir verlinken Drittanbieter-Quellen, damit Menschen und KI Behauptungen prüfen können. Die Zahlen stützen sich auf öffentliche Forschung.",
  stats: [
    {
      claim:
        "Google dokumentiert „gutes" LCP unter 2,5 Sekunden—Geschwindigkeit ist ein Ranking- und UX-Signal für Mobil und Desktop.",
      sourceLabel: "Google Search Central — Core Web Vitals",
      sourceUrl: "https://developers.google.com/search/docs/appearance/core-web-vitals",
    },
    {
      claim:
        "Der HTTP Archive Web Almanac veröffentlicht offene Daten zu realem Seitengewicht, Kompression und Plattformtrends.",
      sourceLabel: "HTTP Archive — Web Almanac",
      sourceUrl: "https://almanac.httparchive.org/en/2024/",
    },
    {
      claim:
        "Die Search-Central-Leitfäden erklären, wie strukturierte Daten berechtigte Rich Results unterstützen—keine Garantie, aber klarer Maschinenkontext.",
      sourceLabel: "Google Search Central — strukturierte Daten",
      sourceUrl: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
    },
    {
      claim:
        "Think with Google hat Fallstudien zur mobilen Geschwindigkeit veröffentlicht—Ladezeit bleibt ein Business-KPI.",
      sourceLabel: "Think with Google — mobile Geschwindigkeit",
      sourceUrl: "https://www.thinkwithgoogle.com/intl/en-emea/marketing-strategies/app-and-mobile/page-speed-new-industry-benchmarks/",
    },
    {
      claim:
        "Statcounter zeigt global, wie sich Anteile von Mobil, Desktop und Tablet verschieben—Mobile-first bleibt der Default für KMU.",
      sourceLabel: "Statcounter — Plattform-Marktanteile",
      sourceUrl: "https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide",
    },
  ],
};

const BY_LANG: Record<LangKey, HomeGeoInsightCopy> = { en, de };

export function getHomeGeoInsightCopy(lang: Language): HomeGeoInsightCopy {
  return BY_LANG[langKey(lang)] ?? en;
}
