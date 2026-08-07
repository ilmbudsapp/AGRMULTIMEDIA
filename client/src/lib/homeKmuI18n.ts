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
  serviceLinks: {
    title: string;
    intro: string;
    items: { title: string; description: string; href: string }[];
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
      metrics?: string[];
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
    title: "Warum Firmen mit AGR Multimedia arbeiten",
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
    body: "Ich helfe lokalen Firmen in Geislingen, online Vertrauen aufzubauen und mehr Anfragen zu erhalten — mit klarer Struktur statt überladener Seiten.",
    items: [
      {
        title: "Mehr Sichtbarkeit",
        description: "Lokales SEO — damit Sie bei Google gefunden werden, wenn Kunden in der Region suchen.",
      },
      {
        title: "Mehr Vertrauen",
        description: "Professioneller Auftritt, der Ihre Qualität vor dem ersten Anruf vermittelt.",
      },
      {
        title: "Mehr Anfragen",
        description: "Klare CTAs — Besucher wissen sofort, wie sie Sie erreichen.",
      },
      {
        title: "Mobile Optimierung",
        description: "Perfekte Darstellung auf dem Smartphone — dort, wo die meisten suchen.",
      },
    ],
  },
  serviceLinks: {
    title: "Jede Leistung — eigene Seite, klarer Fokus",
    intro:
      "Homepage für den Überblick. Für Google und Ihre Kunden gibt es dedizierte Seiten — Webdesign, SEO/GEO/AEO, Video, Grafik und KI-Content.",
    items: [
      {
        title: "Webdesign & Webentwicklung",
        description: "Business-Websites für Handwerk und KMU — mobil, schnell, auf Anfragen ausgelegt.",
        href: "/webdesign-seo",
      },
      {
        title: "SEO, GEO & AEO",
        description: "Lokale Sichtbarkeit, Answer-Engine-Optimierung und strukturierte Inhalte für Google und KI-Suche.",
        href: "/webdesign-seo",
      },
      {
        title: "Video & Produktion",
        description: "Imagefilme, Social-Clips und Showreels — professionell produziert für Web und Marketing.",
        href: "/videoproduktion",
      },
      {
        title: "Grafikdesign & Branding",
        description: "Logo, Flyer und Markenvisuals — abgestimmt auf Ihre Website und Außenauftritt.",
        href: "/graphic-design",
      },
      {
        title: "KI Content & Multimedia",
        description: "KI-Bilder, Produktvisuals und Multimedia-Workflows für moderne Kampagnen.",
        href: "/ai-content-creation",
      },
    ],
  },
  portfolio: {
    title: "Referenzen — Projekte mit messbarem Nutzen",
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
        metrics: ["+32 % mehr Anfragen", "+18 % bessere Sichtbarkeit", "+50 % schnellere Ladezeit"],
        href: "https://www.tonis-autopflege-goeppingen.de/",
        image: "/portfolio/reinigung/01-vorher-nachher.jpg",
        imageAlt: "Toni's Autopflege Göppingen — Website-Vorschau",
      },
      {
        name: "Tairovic Gebäudeservice",
        branch: "Gebäudereinigung & Hausmeisterservice",
        goal: "Seriöser Mehrseiten-Auftritt für Gewerbe- und Privatkunden — Vertrauen schaffen und Leistungen verständlich präsentieren.",
        implementation:
          "Strukturierte Leistungsseiten, Referenzgalerie, Kontaktbereich sowie rechtssichere Impressum- und Datenschutzseiten — SEO-optimiert für lokale Suchanfragen.",
        result:
          "Vertrauenswürdiger Webauftritt, der die Vielfalt des Angebots professionell vermittelt und qualifizierte Anfragen generiert.",
        metrics: ["+28 % mehr Anfragen", "+18 % bessere Sichtbarkeit", "+45 % schnellere Ladezeit"],
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
        metrics: ["+32 % mehr Anfragen", "+22 % bessere Sichtbarkeit", "+50 % schnellere Ladezeit"],
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
        metrics: ["+25 % mehr Downloads", "+18 % bessere Sichtbarkeit", "+40 % schnellere Ladezeit"],
        href: "https://www.ilmbuds.com/",
        image: "/portfolio/ilmbuds/02-ilmbuds-google-play-listing.png",
        imageAlt: "IlmBuds — Website und App-Präsenz",
      },
      {
        name: "The Enchanted Chronicles",
        branch: "Fantasy-Literatur & Storytelling",
        goal: "Professioneller Webauftritt für eine magische Geschichtensammlung — Leser weltweit ansprechen und Geschichten entdeckbar machen.",
        implementation:
          "Mehrsprachige Website mit illustrierten Story-Seiten, SEO-, AEO- und GEO-Optimierung sowie strukturierten Inhalten für Google und KI-Suchen.",
        result:
          "Live unter eigener Domain — magische Atmosphäre, klare Navigation und starke Präsenz für Fantasy-Leser international.",
        metrics: ["+35 % mehr Seitenaufrufe", "+20 % bessere Sichtbarkeit", "+45 % schnellere Ladezeit"],
        href: "https://www.theenchantedchronicles.com/",
        image: "/demo/enchanted-chronicles/images/the-brave-knight.webp",
        imageAlt: "The Enchanted Chronicles — Fantasy-Geschichten Website",
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
    title: "Ihr Studio in Geislingen an der Steige",
    body: "AGR Multimedia ist kein anonymer Online-Dienstleister — sondern ein lokales Studio mit persönlichem Ansprechpartner. Sie sprechen direkt mit mir über Ziele, Budget und Zeitplan. Typische Antwortzeit: innerhalb von 24 Stunden.",
  },
  finalCta: {
    title: "Bereit für mehr Anfragen über Ihre Website?",
    body: "Kostenlose Erstberatung — ich schaue mir Ihr Projekt an und schlage einen klaren nächsten Schritt vor. Unverbindlich, ohne Druck.",
    button: "Kostenlose Erstberatung anfragen",
    meta: "Antwort in der Regel innerhalb von 24h · Studio Geislingen an der Steige",
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
  serviceLinks: {
    title: "Each service — its own page, clear focus",
    intro:
      "Homepage for overview. Dedicated pages for Google and your customers — web design, SEO/GEO/AEO, video, graphics and AI content.",
    items: [
      {
        title: "Web design & development",
        description: "Business websites for trades and SMEs — mobile-first, fast, built to convert.",
        href: "/webdesign-seo",
      },
      {
        title: "SEO, GEO & AEO",
        description: "Local visibility, answer-engine optimization and structured content for Google and AI search.",
        href: "/webdesign-seo",
      },
      {
        title: "Video & production",
        description: "Brand films, social clips and showreels — produced for web and marketing.",
        href: "/videoproduktion",
      },
      {
        title: "Graphic design & branding",
        description: "Logos, flyers and brand visuals aligned with your website.",
        href: "/graphic-design",
      },
      {
        title: "AI content & multimedia",
        description: "AI imagery, product visuals and multimedia workflows for modern campaigns.",
        href: "/ai-content-creation",
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
    title: "Your studio in Geislingen an der Steige",
    body: "AGR Multimedia is not an anonymous online provider — it's a local studio with a direct contact person. You speak with me about goals, budget and timeline. Typical reply time: within 24 hours.",
  },
  finalCta: {
    title: "Ready for more enquiries through your website?",
    body: "Free initial consultation — I'll review your project and suggest a clear next step. No obligation, no pressure.",
    button: "Request free consultation",
    meta: "Reply usually within 24h · Studio in Geislingen an der Steige",
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
      metrics: ["+32% more enquiries", "+18% better visibility", "+50% faster load time"],
      href: "https://www.tonis-autopflege-goeppingen.de/",
      image: "/portfolio/reinigung/01-vorher-nachher.jpg",
      imageAlt: "Toni's Autopflege Göppingen — website preview",
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
    {
      name: "The Enchanted Chronicles",
      branch: "Fantasy literature & storytelling",
      goal: "Professional web presence for a magical story collection — reach readers worldwide and make tales easy to discover.",
      implementation:
        "Multilingual site with illustrated story pages, SEO/AEO/GEO optimisation and structured content for Google and AI search.",
      result: "Live on its own domain — immersive atmosphere, clear navigation and strong visibility for fantasy readers globally.",
      href: "https://www.theenchantedchronicles.com/",
      image: "/demo/enchanted-chronicles/images/the-brave-knight.webp",
      imageAlt: "The Enchanted Chronicles — fantasy stories website",
    },
  ],
};

const COPY: Partial<Record<Language, HomeKmuCopy>> = { de, en };

export function getHomeKmuCopy(lang: Language): HomeKmuCopy {
  return COPY[lang] ?? COPY.de!;
}
