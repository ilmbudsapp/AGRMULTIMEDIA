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
      a: "Jedes Projekt ist individuell. Nach einem kostenlosen Erstgespräch erhalten Sie ein persönliches Angebot — ohne Festpreise auf der Website. So stimmen Umfang, Leistungen und Investition genau auf Ihr Unternehmen ab.",
    },
    {
      q: "Wie läuft die Zusammenarbeit?",
      a: "Kostenloses Erstgespräch, Planung und Strategie, Design und Entwicklung, dann Launch und Optimierung. Antwort auf Anfragen meist innerhalb von 24 Stunden.",
    },
    {
      q: "Was ist SEO, GEO und AEO?",
      a: "SEO optimiert Ihre Website für Google-Suchen in Geislingen und der Region. GEO und AEO sorgen zusätzlich dafür, dass Ihr Unternehmen in KI-Suchen wie ChatGPT und Google AI Overview gefunden und empfohlen wird.",
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
      a: "Every project is individual. After a free initial consultation you receive a personal quote — no fixed prices on the website.",
    },
    {
      q: "What does working together look like?",
      a: "Free initial consultation, planning and strategy, design and development, then launch and optimisation. We usually reply within 24 hours.",
    },
    {
      q: "What is SEO, GEO and AEO?",
      a: "SEO optimises your site for Google searches. GEO and AEO ensure your business is also found and recommended in AI search like ChatGPT and Google AI Overview.",
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
