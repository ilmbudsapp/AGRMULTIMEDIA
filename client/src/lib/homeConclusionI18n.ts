import type { Language } from "@/lib/i18n";

type LangKey = "en" | "de";

function langKey(lang: Language): LangKey {
  if (lang === "en" || lang === "de") return lang;
  return "en";
}

export type HomeConclusionCopy = {
  takeawaysTitle: string;
  takeaways: string[];
  conclusionTitle: string;
  conclusion: string;
  actionTitle: string;
  actions: string[];
  whoTitle: string;
  whoFor: string;
  whatTitle: string;
  whatWeDo: string;
};

const en: HomeConclusionCopy = {
  takeawaysTitle: "Key takeaways",
  takeaways: [
    "We combine web design, graphics, and AI workflows with technical SEO, AEO, and GEO.",
    "You get answer-first structure, sourced claims where it matters, and human QA before launch.",
    "We usually reply within 24 hours on business days with a clear written scope.",
  ],
  conclusionTitle: "Conclusion",
  conclusion:
    "In short, we help SMEs in Germany and the EU look credible online and get found by both search engines and AI systems. Therefore the next step is simple: tell us your goal and we propose a realistic path — no obligation.",
  actionTitle: "What you should do next",
  actions: [
    "Send one message with your goal (calls, forms, bookings) and your deadline.",
    "Share two or three reference sites and any logo or photo files you already have.",
    "Book a free consultation — we align structure before visual design.",
  ],
  whoTitle: "Who this is for",
  whoFor:
    "Small businesses, local services, crafts, retail, and founders who want a professional site without agency overhead. If your goal is only a placeholder page, we will say so honestly.",
  whatTitle: "What we do",
  whatWeDo:
    "Service: web design · Focus: SEO, AEO, GEO · Ideal for: SMEs in DE/EU · Location: Geislingen an der Steige · Languages: de, en.",
};

const de: HomeConclusionCopy = {
  takeawaysTitle: "Kernaussagen",
  takeaways: [
    "Wir verbinden Webdesign, Grafik und KI-Workflows mit technischem SEO, AEO und GEO.",
    "Sie erhalten Antwort-zuerst-Struktur, belegte Aussagen wo nötig und menschliche QA vor dem Launch.",
    "Auf Anfragen antworten wir werktags meist innerhalb von 24 Stunden mit klarem schriftlichem Umfang.",
  ],
  conclusionTitle: "Fazit",
  conclusion:
    "Kurz: Wir helfen KMU in Deutschland und der EU, online glaubwürdig zu wirken und von Suchmaschinen und KI gefunden zu werden. Der nächste Schritt: Ziel nennen — wir schlagen einen realistischen Weg vor, unverbindlich.",
  actionTitle: "Ihre nächsten Schritte",
  actions: [
    "Eine Nachricht mit Ziel (Anrufe, Formulare, Buchungen) und Termin senden.",
    "Zwei bis drei Referenzsites plus vorhandene Logos oder Fotos teilen.",
    "Kostenlose Beratung buchen — Struktur vor Visual Design.",
  ],
  whoTitle: "Für wen",
  whoFor:
    "Kleine Unternehmen, lokale Dienste, Handwerk, Einzelhandel und Gründer ohne Agentur-Overhead. Brauchen Sie nur eine Platzhalter-Seite, sagen wir das ehrlich.",
  whatTitle: "Was wir tun",
  whatWeDo:
    "Leistung: Webdesign · Fokus: SEO, AEO, GEO · Ideal für: KMU in DE/EU · Standort: Geislingen an der Steige · Sprachen: de, en.",
};

const BY_LANG: Record<LangKey, HomeConclusionCopy> = { en, de };

export function getHomeConclusionCopy(lang: Language): HomeConclusionCopy {
  return BY_LANG[langKey(lang)] ?? en;
}
