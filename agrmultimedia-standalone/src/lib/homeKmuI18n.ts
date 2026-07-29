import type { Language } from "@/lib/i18n";

export type HomeKmuCopy = {
  whyUs: {
    title: string;
    cards: { title: string; description: string }[];
  };
  moreThanDesign: {
    title: string;
    body: string;
    items: { title: string; description: string }[];
  };
  portfolio: {
    title: string;
    branchLabel: string;
    goalLabel: string;
    implementationLabel: string;
    resultLabel: string;
    visitLabel: string;
    projects: {
      name: string;
      branch: string;
      goal: string;
      implementation: string;
      result: string;
      href: string;
      image?: string;
      imageAlt?: string;
    }[];
  };
  process: {
    title: string;
    steps: { title: string; description: string }[];
  };
  trustPartner: {
    title: string;
    body: string;
  };
  finalCta: {
    title: string;
    body: string;
    button: string;
    meta: string;
  };
};

const de: HomeKmuCopy = {
  whyUs: {
    title: "Warum Unternehmen mit AGR Multimedia arbeiten",
    cards: [
      {
        title: "SEO Optimiert",
        description: "Bessere Sichtbarkeit bei Google — damit lokale Kunden Sie finden, wenn sie nach Ihrer Leistung suchen.",
      },
      {
        title: "GEO & AEO Optimiert",
        description:
          "Sichtbarkeit in KI-Suchen wie ChatGPT, Google AI Overview und zukünftigen Suchsystemen — Ihre Firma wird dort empfohlen, wo Kunden heute recherchieren.",
      },
      {
        title: "Schnelle Umsetzung",
        description: "Professionelle Ergebnisse ohne lange Wartezeiten — strukturiert, effizient und mit klarem Zeitplan.",
      },
      {
        title: "Persönlicher Ansprechpartner",
        description: "Direkter Kontakt ohne Agentur-Hierarchie — ein Ansprechpartner von der Planung bis zum Launch.",
      },
    ],
  },
  moreThanDesign: {
    title: "Mehr als nur eine schöne Website",
    body: "Eine moderne Webseite ist kein reines Design-Projekt — sie ist Ihr wichtigstes Werkzeug, um Vertrauen aufzubauen, Anfragen zu generieren und Ihr Unternehmen professionell online zu präsentieren. Als Webdesigner in Geislingen an der Steige richte ich jede Seite auf messbare Ergebnisse aus: mehr Sichtbarkeit, mehr Vertrauen und mehr Kundenkontakte.",
    items: [
      {
        title: "Mehr Sichtbarkeit",
        description: "Lokales SEO und strukturierte Inhalte — damit Sie bei Google und in KI-Suchen gefunden werden.",
      },
      {
        title: "Mehr Vertrauen",
        description: "Professioneller Auftritt, der handwerkliche Qualität und Seriosität Ihrer Firma widerspiegelt.",
      },
      {
        title: "Mehr Anfragen",
        description: "Klare Struktur und überzeugende CTAs — Besucher wissen sofort, wie sie Sie erreichen.",
      },
      {
        title: "Mobile Optimierung",
        description: "Perfekte Darstellung auf Smartphone und Tablet — dort, wo die meisten Kunden heute suchen.",
      },
    ],
  },
  portfolio: {
    title: "Referenzen — Projekte, die Ergebnisse liefern",
    branchLabel: "Branche",
    goalLabel: "Ziel",
    implementationLabel: "Umsetzung",
    resultLabel: "Ergebnis",
    visitLabel: "Website ansehen",
    projects: [
      {
        name: "Toni's Autopflege Göppingen",
        branch: "Autopflege & KFZ",
        goal: "Mehr lokale Kundenanfragen und ein professioneller Online-Auftritt, der Qualität und Vertrauen vermittelt.",
        implementation:
          "Moderne Website mit übersichtlicher Leistungspräsentation, Kontaktformular, WhatsApp-Button und Google Maps — optimiert für mobile Nutzer in der Region Göppingen.",
        result:
          "Klare Darstellung aller Services, einfache Kontaktaufnahme und stärkere lokale Präsenz bei Google-Suchen nach Autopflege.",
        href: "https://www.tonis-autopflege-goeppingen.de/",
      },
      {
        name: "Tairovic Gebäudeservice",
        branch: "Gebäudereinigung & Hausmeisterservice",
        goal: "Seriöser Mehrseiten-Auftritt für Gewerbe- und Privatkunden — Vertrauen schaffen und Leistungen verständlich präsentieren.",
        implementation:
          "Strukturierte Leistungsseiten, Referenzgalerie, Kontaktbereich sowie rechtssichere Impressum- und Datenschutzseiten — SEO-optimiert für lokale Suchanfragen.",
        result:
          "Vertrauenswürdiger Webauftritt, der die Vielfalt des Angebots professionell vermittelt und qualifizierte Anfragen generiert.",
        href: "https://www.tairovic-gebaeudeservice.de/",
        image: "/demo/tairovic-dark-verzija/assets/logo.webp",
        imageAlt: "Tairovic Gebäudeservice — Website-Vorschau",
      },
      {
        name: "FixBike",
        branch: "Fahrradservice",
        goal: "Schnelle Service-Anfragen und maximale Nutzerfreundlichkeit für mobile Besucher in der Region.",
        implementation:
          "Übersichtliche Servicepräsentation, direkter Kontaktweg, mobile Optimierung und SEO-Struktur für lokale Fahrradservice-Suchen.",
        result:
          "Besucher finden sofort die passende Leistung und können unkompliziert Kontakt aufnehmen — weniger Absprünge, mehr Anfragen.",
        href: "https://fixbike.online/",
        image: "/Case Studio FixBike/02.png",
        imageAlt: "FixBike — Fahrradservice Website",
      },
      {
        name: "IlmBuds",
        branch: "Bildungs-App & Online-Präsenz",
        goal: "Professionelle App- und Web-Präsenz für eine internationale Zielgruppe — Glaubwürdigkeit und Vertrauen aufbauen.",
        implementation:
          "Webauftritt und Store-Präsenz für eine mehrsprachige Bildungs-App — klare Botschaft, professionelles Design und optimierte Nutzerführung.",
        result:
          "Glaubwürdige Online-Präsenz, die Vertrauen bei Familien und Nutzern schafft und die App-Installation unterstützt.",
        href: "https://www.ilmbuds.com/",
        image: "/portfolio/ilmbuds/02-ilmbuds-google-play-listing.png",
        imageAlt: "IlmBuds — Website und App-Präsenz",
      },
    ],
  },
  process: {
    title: "So läuft die Zusammenarbeit ab",
    steps: [
      {
        title: "Kostenloses Erstgespräch",
        description:
          "Wir besprechen Ihr Unternehmen, Ihre Ziele und was Sie von Ihrer Website erwarten — unverbindlich und persönlich.",
      },
      {
        title: "Planung & Strategie",
        description:
          "Gemeinsam definieren wir Struktur, Inhalte und SEO-Strategie — abgestimmt auf Ihre Branche und lokale Zielgruppe in Geislingen und Umgebung.",
      },
      {
        title: "Design & Entwicklung",
        description:
          "Professionelle Umsetzung mit modernem Design, mobile Optimierung und technischer SEO-, GEO- und AEO-Grundlage.",
      },
      {
        title: "Launch & Optimierung",
        description:
          "Veröffentlichung auf Ihrer Domain, Feinschliff und laufende Optimierung — damit Ihre Seite von Anfang an Ergebnisse liefert.",
      },
    ],
  },
  trustPartner: {
    title: "Ihr Partner für professionelles Webdesign",
    body: "AGR Multimedia unterstützt lokale Unternehmen in Geislingen an der Steige und der Region mit Webdesign, SEO, GEO- und AEO-Optimierung. Mein Ziel ist nicht nur eine schöne Webseite — sondern eine professionelle Online-Präsenz, die Vertrauen schafft, Sie bei Google und in KI-Suchen sichtbar macht und neue Geschäftsanfragen bringt. Ob Handwerker, Dienstleister oder Familienbetrieb: Ich helfe Ihnen, online so professionell aufzutreten, wie Sie es offline sind. Lassen Sie uns Ihre Website erstellen lassen — individuell, ergebnisorientiert und mit persönlicher Betreuung.",
  },
  finalCta: {
    title: "Bereit für eine professionelle Website?",
    body: "Lassen Sie uns über Ihr Projekt sprechen und gemeinsam Ihre Online-Präsenz auf das nächste Niveau bringen.",
    button: "Kostenlose Beratung anfragen",
    meta: "Unverbindlich • Individuelles Angebot • Antwort innerhalb von 24h",
  },
};

const en: HomeKmuCopy = {
  whyUs: {
    title: "Why businesses work with AGR Multimedia",
    cards: [
      {
        title: "SEO Optimised",
        description: "Better visibility on Google — so local customers find you when they search for your services.",
      },
      {
        title: "GEO & AEO Optimised",
        description:
          "Visibility in AI search like ChatGPT, Google AI Overview and future search systems — your business gets recommended where customers research today.",
      },
      {
        title: "Fast Delivery",
        description: "Professional results without long waits — structured, efficient and with a clear timeline.",
      },
      {
        title: "Personal Contact",
        description: "Direct contact without agency hierarchy — one person from planning through launch.",
      },
    ],
  },
  moreThanDesign: {
    title: "More than just a beautiful website",
    body: "A modern website is not just a design project — it is your most important tool to build trust, generate enquiries and present your business professionally online. Every site I build in Geislingen an der Steige is focused on measurable results: more visibility, more trust and more customer contacts.",
    items: [
      {
        title: "More Visibility",
        description: "Local SEO and structured content — so you are found on Google and in AI search.",
      },
      {
        title: "More Trust",
        description: "A professional presence that reflects the quality and reliability of your business.",
      },
      {
        title: "More Enquiries",
        description: "Clear structure and compelling CTAs — visitors know immediately how to reach you.",
      },
      {
        title: "Mobile Optimisation",
        description: "Perfect display on smartphone and tablet — where most customers search today.",
      },
    ],
  },
  portfolio: {
    title: "References — projects that deliver results",
    branchLabel: "Industry",
    goalLabel: "Goal",
    implementationLabel: "Implementation",
    resultLabel: "Result",
    visitLabel: "View website",
    projects: [],
  },
  process: {
    title: "How working together works",
    steps: [
      {
        title: "Free initial consultation",
        description: "We discuss your business, goals and what you expect from your website — no obligation.",
      },
      {
        title: "Planning & strategy",
        description: "Together we define structure, content and SEO strategy — tailored to your industry and local audience.",
      },
      {
        title: "Design & development",
        description: "Professional build with modern design, mobile optimisation and technical SEO, GEO and AEO foundation.",
      },
      {
        title: "Launch & optimisation",
        description: "Publication on your domain, fine-tuning and ongoing optimisation — so your site delivers results from day one.",
      },
    ],
  },
  trustPartner: {
    title: "Your partner for professional web design",
    body: "AGR Multimedia supports local businesses in Geislingen an der Steige and the region with web design, SEO, GEO and AEO optimisation. My goal is not just a beautiful website — but a professional online presence that builds trust, makes you visible on Google and in AI search, and brings new business enquiries.",
  },
  finalCta: {
    title: "Ready for a professional website?",
    body: "Let's talk about your project and take your online presence to the next level together.",
    button: "Request a free consultation",
    meta: "No obligation • Individual quote • Reply within 24h",
  },
};

// English portfolio with translated project descriptions
en.portfolio = {
  ...en.portfolio,
  projects: [
    {
      name: "Toni's Autopflege Göppingen",
      branch: "Car care & automotive",
      goal: "More local customer enquiries and a professional online presence that conveys quality and trust.",
      implementation:
        "Modern website with clear service overview, contact form, WhatsApp button and Google Maps — optimised for mobile users in the Göppingen area.",
      result: "Clear presentation of all services, easy contact and stronger local presence in Google searches for car care.",
      href: "https://www.tonis-autopflege-goeppingen.de/",
    },
    {
      name: "Tairovic Gebäudeservice",
      branch: "Building cleaning & caretaker services",
      goal: "A serious multi-page presence for commercial and private clients — building trust and presenting services clearly.",
      implementation:
        "Structured service pages, reference gallery, contact area plus compliant legal pages — SEO-optimised for local search queries.",
      result: "Trustworthy web presence that professionally communicates the range of services and generates qualified enquiries.",
      href: "https://www.tairovic-gebaeudeservice.de/",
      image: "/demo/tairovic-dark-verzija/assets/logo.webp",
      imageAlt: "Tairovic Gebäudeservice — website preview",
    },
    {
      name: "FixBike",
      branch: "Bicycle service",
      goal: "Fast service enquiries and maximum usability for mobile visitors in the region.",
      implementation:
        "Clear service presentation, direct contact path, mobile optimisation and SEO structure for local bicycle service searches.",
      result: "Visitors find the right service immediately and can contact you easily — fewer bounces, more enquiries.",
      href: "https://fixbike.online/",
      image: "/Case Studio FixBike/02.png",
      imageAlt: "FixBike — bicycle service website",
    },
    {
      name: "IlmBuds",
      branch: "Education app & online presence",
      goal: "Professional app and web presence for an international audience — building credibility and trust.",
      implementation:
        "Web presence and store materials for a multilingual education app — clear message, professional design and optimised user flow.",
      result: "Credible online presence that builds trust with families and users and supports app installs.",
      href: "https://www.ilmbuds.com/",
      image: "/portfolio/ilmbuds/02-ilmbuds-google-play-listing.png",
      imageAlt: "IlmBuds — website and app presence",
    },
  ],
};

const COPY: Partial<Record<Language, HomeKmuCopy>> = { de, en };

export function getHomeKmuCopy(lang: Language): HomeKmuCopy {
  return COPY[lang] ?? COPY.de!;
}
