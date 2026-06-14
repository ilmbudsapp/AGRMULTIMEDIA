import type { Language } from "@/lib/i18n";

type FaqPair = { q: string; a: string };

const FAQ_BY_LANG: Record<Language, FaqPair[]> = {
  de: [
    {
      q: "Bieten Sie Webdesign in Geislingen an der Steige an?",
      a: "Ja — AGR Multimedia ist in Geislingen an der Steige ansässig und erstellt Websites für lokale Firmen in der Region, darunter Handwerk, Dienstleister und kleine Unternehmen.",
    },
    {
      q: "Für wen erstellen Sie Websites?",
      a: "Vor allem für kleine Unternehmen — Gebäudereinigung, Autopflege, Handwerk, Gartenbau, Transport, Fahrradservice, Restaurants und Familienbetriebe mit professionellem Online-Auftritt.",
    },
    {
      q: "Was ist in einer Website enthalten?",
      a: "Moderne Startseite, Leistungsseite, Kontaktformular, Google Maps, WhatsApp-Button, mobile Optimierung, Basis-SEO mit Titeln und Beschreibungen, Domain-Anbindung und Online-Veröffentlichung.",
    },
    {
      q: "Was kostet eine Website?",
      a: "Start-Paket ab 500 € für eine einfache Seite, Business-Paket ab 900 € für mehr Seiten und Inhalte, Wartung ab 30 €/Monat für kleine Änderungen und Support. Den genauen Umfang klären wir nach einem kurzen Gespräch.",
    },
    {
      q: "Wie läuft die Zusammenarbeit?",
      a: "Kurzes Gespräch, Strukturvorschlag, Design und Umsetzung, Korrekturen, dann Domain-Anbindung und Veröffentlichung. Antwort auf Anfragen meist innerhalb von 24 Stunden.",
    },
    {
      q: "Ist lokales SEO für Google-Suchen enthalten?",
      a: "Ja — die Pakete umfassen klare Titel, Beschreibungen und Seitenstruktur für lokale Google-Suchen in Geislingen, Göppingen und der Umgebung.",
    },
  ],
  en: [
    {
      q: "Do you offer web design in Geislingen an der Steige?",
      a: "Yes — AGR Multimedia is based in Geislingen an der Steige and builds websites for local businesses including trades, service providers and small companies.",
    },
    {
      q: "Who do you build websites for?",
      a: "Mainly small businesses — cleaning, car care, trades, landscaping, transport, bicycle service, restaurants and family-run companies that want a professional online presence.",
    },
    {
      q: "What does a website project include?",
      a: "Modern homepage, services page, contact form, Google Maps, WhatsApp button, mobile optimisation, basic SEO titles and descriptions, domain setup and online launch.",
    },
    {
      q: "How much does a website cost?",
      a: "Start package from €500 for a simple site, Business package from €900 for more pages and content, and maintenance from €30/month for small updates and support.",
    },
    {
      q: "What does working together look like?",
      a: "Short call about your business, structure proposal, design and build, revisions, then domain setup and launch. We usually reply within 24 hours.",
    },
    {
      q: "Is local SEO for Google searches included?",
      a: "Yes — packages include clear titles, descriptions and page structure aimed at local Google searches in Geislingen, Göppingen and the surrounding area.",
    },
  ],
};

export function getHomeFaqJsonLd(lang: Language) {
  const pairs = FAQ_BY_LANG[lang] ?? FAQ_BY_LANG.de;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pairs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
