import type { Language } from "@/lib/i18n";

export type HomeKmuCopy = {
  intro: {
    who: string;
    services: string;
    audience: string;
    why: string;
    landingLinkLabel: string;
  };
  audience: {
    title: string;
    cards: { label: string }[];
  };
  deliverables: {
    title: string;
    items: string[];
  };
  pricing: {
    title: string;
    packages: {
      name: string;
      price: string;
      description: string;
      includes: string[];
    }[];
  };
  portfolio: {
    title: string;
    branchLabel: string;
    workLabel: string;
    visitLabel: string;
    projects: {
      name: string;
      branch: string;
      work: string;
      href: string;
      image?: string;
      imageAlt?: string;
    }[];
  };
  process: {
    title: string;
    steps: string[];
  };
  finalCta: {
    title: string;
    body: string;
    button: string;
    meta: string;
  };
};

const de: HomeKmuCopy = {
  intro: {
    who: "AGR Multimedia ist mein kreatives Studio in Geislingen an der Steige. Ich, Agron Osmani, entwickle Websites und digitale Auftritte für kleine Unternehmen — persönlich, verständlich und ohne Agentur-Overhead.",
    services:
      "Mein Schwerpunkt liegt auf Webdesign, lokalem SEO und der Umsetzung moderner Business-Websites: von der Startseite über Leistungen bis Kontakt, WhatsApp und Google Maps.",
    audience:
      "Besonders häufig arbeite ich mit Handwerkern, Gebäudereinigern, Autopflege-Betrieben, Gartenbauern und lokalen Dienstleistern in Geislingen, Göppingen, Ulm und der Umgebung.",
    why: "Sie erhalten einen direkten Ansprechpartner, transparente Pakete ab 500 € und eine Website, die auf dem Smartphone funktioniert und bei lokalen Google-Suchen gefunden wird.",
    landingLinkLabel: "Mehr zum Webdesign in Geislingen an der Steige",
  },
  audience: {
    title: "Für wen erstelle ich Websites in der Region?",
    cards: [
      { label: "Gebäudereinigung" },
      { label: "Autopflege & KFZ" },
      { label: "Handwerker & Bau" },
      { label: "Gartenbau" },
      { label: "Transport & Kurierdienst" },
      { label: "Fahrradservice" },
      { label: "Restaurants & lokale Dienstleister" },
      { label: "Kleine Familienbetriebe" },
    ],
  },
  deliverables: {
    title: "Was bekommen Sie?",
    items: [
      "Moderne Startseite",
      "Leistungsseite",
      "Kontaktformular",
      "Google Maps Integration",
      "WhatsApp-Button",
      "Mobile Optimierung",
      "Basis-SEO: Titel und Beschreibungen",
      "Domain-Anbindung",
      "Online-Veröffentlichung",
    ],
  },
  pricing: {
    title: "Pakete für kleine Unternehmen",
    packages: [
      {
        name: "Start-Paket",
        price: "ab 500 €",
        description: "Einfache Website für kleine Firmen, die professionell online auftreten möchten.",
        includes: [
          "bis zu 3 Bereiche",
          "mobile Version",
          "Kontaktformular",
          "Google Maps",
          "Veröffentlichung auf Ihrer Domain",
        ],
      },
      {
        name: "Business-Paket",
        price: "ab 900 €",
        description: "Für Firmen, die einen seriöseren Auftritt und mehr Inhalte wünschen.",
        includes: [
          "bis zu 5 Seiten",
          "Leistungen",
          "Galerie",
          "Kontakt",
          "Basis-SEO",
          "WhatsApp-Button",
          "Online-Veröffentlichung",
        ],
      },
      {
        name: "Wartung",
        price: "ab 30 €/Monat",
        description: "Für kleinere Änderungen, Sicherheitsprüfungen und technischen Support.",
        includes: [],
      },
    ],
  },
  portfolio: {
    title: "Beispiele meiner Arbeiten",
    branchLabel: "Branche",
    workLabel: "Umgesetzt",
    visitLabel: "Website ansehen",
    projects: [
      {
        name: "Toni's Autopflege Göppingen",
        branch: "Autopflege & KFZ",
        work: "Moderne Website mit Leistungen, Kontaktformular, WhatsApp und Google Maps für lokale Kunden.",
        href: "https://www.tonis-autopflege-goeppingen.de/",
      },
      {
        name: "Tairovic Gebäudeservice",
        branch: "Gebäudereinigung & Hausmeisterservice",
        work: "Mehrseitige Website mit Leistungen, Galerie, Kontakt sowie Impressum und Datenschutz.",
        href: "https://www.tairovic-gebaeudeservice.de/",
        image: "/demo/tairovic-dark-verzija/assets/logo.webp",
        imageAlt: "Tairovic Gebäudeservice — Website-Vorschau",
      },
      {
        name: "FixBike",
        branch: "Fahrradservice",
        work: "Übersichtliche Website mit Serviceangebot, schnellem Kontakt und mobiler Optimierung.",
        href: "https://fixbike.online/",
        image: "/Case Studio FixBike/02.png",
        imageAlt: "FixBike — Fahrradservice Website",
      },
      {
        name: "IlmBuds",
        branch: "Bildungs-App & Online-Auftritt",
        work: "Webauftritt und Store-Präsenz für eine mehrsprachige Bildungs-App für Familien.",
        href: "https://www.ilmbuds.com/",
        image: "/portfolio/ilmbuds/02-ilmbuds-google-play-listing.png",
        imageAlt: "IlmBuds — Website und App-Präsenz",
      },
    ],
  },
  process: {
    title: "Wie läuft die Zusammenarbeit?",
    steps: [
      "Kurzes Gespräch über Ihr Unternehmen",
      "Vorschlag für Struktur und Inhalte",
      "Design und Umsetzung",
      "Korrekturen",
      "Domain-Anbindung und Online-Veröffentlichung",
    ],
  },
  finalCta: {
    title: "Möchten Sie eine professionelle Website für Ihr Unternehmen?",
    body: "Schreiben Sie mir — Sie erhalten eine kostenlose Einschätzung, was für Ihr Unternehmen am besten passt.",
    button: "Kontaktieren Sie mich",
    meta: "Kostenlose Einschätzung • Unverbindlich • Antwort innerhalb von 24h",
  },
};

const sr: HomeKmuCopy = {
  audience: {
    title: "Za koga izrađujem web stranice?",
    cards: [
      { label: "Gebäudereinigung" },
      { label: "Autopflege & KFZ" },
      { label: "Handwerker & Bau" },
      { label: "Gartenbau" },
      { label: "Transport & Kurierdienst" },
      { label: "Fahrradservice" },
      { label: "Restorani i lokalne usluge" },
      { label: "Male porodične firme" },
    ],
  },
  deliverables: {
    title: "Šta dobijate?",
    items: [
      "Moderna početna stranica",
      "Stranica usluga",
      "Kontakt forma",
      "Google Maps integracija",
      "WhatsApp dugme",
      "Mobilna optimizacija",
      "Osnovni SEO naslovi i opisi",
      "Povezivanje sa domenom",
      "Objavljivanje online",
    ],
  },
  pricing: {
    title: "Paketi za male firme",
    packages: [
      {
        name: "Start paket",
        price: "od 500 €",
        description: "Jednostavna web stranica za male firme koje žele profesionalan online nastup.",
        includes: [
          "do 3 sekcije",
          "mobilna verzija",
          "kontakt forma",
          "Google Maps",
          "objava na domeni",
        ],
      },
      {
        name: "Business paket",
        price: "od 900 €",
        description: "Za firme koje žele ozbiljniji nastup i više sadržaja.",
        includes: [
          "do 5 stranica",
          "usluge",
          "galerija",
          "kontakt",
          "osnovni SEO",
          "WhatsApp dugme",
          "objava online",
        ],
      },
      {
        name: "Održavanje",
        price: "od 30 €/mjesečno",
        description: "Za manje izmjene, sigurnosne provjere i tehničku podršku.",
        includes: [],
      },
    ],
  },
  portfolio: {
    title: "Primjeri mojih radova",
    branchLabel: "Branša",
    workLabel: "Šta je urađeno",
    visitLabel: "Pogledajte sajt",
    projects: [
      {
        name: "Toni's Autopflege Göppingen",
        branch: "Autopflege & KFZ",
        work: "Moderna stranica sa uslugama, kontakt formom, WhatsApp-om i Google Maps za lokalne klijente.",
        href: "https://www.tonis-autopflege-goeppingen.de/",
      },
      {
        name: "Tairovic Gebäudeservice",
        branch: "Gebäudereinigung",
        work: "Višejezični sajt sa uslugama, galerijom, kontaktom te impressum i datenschutz stranicama.",
        href: "https://www.tairovic-gebaeudeservice.de/",
        image: "/demo/tairovic-dark-verzija/assets/logo.webp",
        imageAlt: "Tairovic Gebäudeservice — pregled sajta",
      },
      {
        name: "FixBike",
        branch: "Fahrradservice",
        work: "Pregledan sajt sa ponudom usluga, brzim kontaktom i mobilnom optimizacijom.",
        href: "https://fixbike.online/",
        image: "/Case Studio FixBike/02.png",
        imageAlt: "FixBike — sajt za servis bicikala",
      },
      {
        name: "IlmBuds",
        branch: "Obrazovna aplikacija i web prisutnost",
        work: "Web prisutnost i store materijali za višejezičnu obrazovnu aplikaciju za porodice.",
        href: "https://www.ilmbuds.com/",
        image: "/portfolio/ilmbuds/02-ilmbuds-google-play-listing.png",
        imageAlt: "IlmBuds — web i aplikacija",
      },
    ],
  },
  process: {
    title: "Kako izgleda saradnja?",
    steps: [
      "Kratak razgovor o vašoj firmi",
      "Prijedlog strukture i sadržaja",
      "Izrada dizajna",
      "Korekcije",
      "Povezivanje domene i objava online",
    ],
  },
  finalCta: {
    title: "Želite profesionalnu web stranicu za vašu firmu?",
    body: "Pošaljite mi poruku i dobićete besplatnu procjenu šta bi bilo najbolje za vašu firmu.",
    button: "Kontaktirajte me",
    meta: "Besplatna procjena • Bez obaveza • Odgovor u roku od 24h",
  },
};

const en: HomeKmuCopy = {
  intro: {
    who: "AGR Multimedia is my creative studio in Geislingen an der Steige. I'm Agron Osmani — I build websites and digital presence for small businesses, with personal support and no agency overhead.",
    services:
      "My focus is web design, local SEO and modern business websites: homepage, services, contact, WhatsApp and Google Maps integration.",
    audience:
      "I often work with trades, cleaning companies, car care businesses, landscapers and local service providers in Geislingen, Göppingen, Ulm and the surrounding area.",
    why: "You get one direct contact, transparent packages from €500, and a site that works on mobile and shows up in local Google searches.",
    landingLinkLabel: "More about web design in Geislingen an der Steige",
  },
  audience: {
    title: "Who do I build websites for in the region?",
    cards: [
      { label: "Building cleaning" },
      { label: "Car care & automotive" },
      { label: "Trades & construction" },
      { label: "Landscaping" },
      { label: "Transport & courier" },
      { label: "Bicycle service" },
      { label: "Restaurants & local services" },
      { label: "Small family businesses" },
    ],
  },
  deliverables: {
    title: "What do you get?",
    items: [
      "Modern homepage",
      "Services page",
      "Contact form",
      "Google Maps integration",
      "WhatsApp button",
      "Mobile optimisation",
      "Basic SEO titles and descriptions",
      "Domain setup",
      "Online launch",
    ],
  },
  pricing: {
    title: "Packages for small businesses",
    packages: [
      {
        name: "Start package",
        price: "from €500",
        description: "A simple website for small businesses that want a professional online presence.",
        includes: [
          "up to 3 sections",
          "mobile version",
          "contact form",
          "Google Maps",
          "launch on your domain",
        ],
      },
      {
        name: "Business package",
        price: "from €900",
        description: "For businesses that want a stronger presence and more content.",
        includes: [
          "up to 5 pages",
          "services",
          "gallery",
          "contact",
          "basic SEO",
          "WhatsApp button",
          "online launch",
        ],
      },
      {
        name: "Maintenance",
        price: "from €30/month",
        description: "Small updates, security checks and technical support.",
        includes: [],
      },
    ],
  },
  portfolio: {
    title: "Examples of my work",
    branchLabel: "Industry",
    workLabel: "Delivered",
    visitLabel: "View website",
    projects: [
      {
        name: "Toni's Autopflege Göppingen",
        branch: "Car care & automotive",
        work: "Modern site with services, contact form, WhatsApp and Google Maps for local customers.",
        href: "https://www.tonis-autopflege-goeppingen.de/",
      },
      {
        name: "Tairovic Gebäudeservice",
        branch: "Building cleaning & caretaker services",
        work: "Multi-page site with services, gallery, contact plus legal pages (imprint & privacy).",
        href: "https://www.tairovic-gebaeudeservice.de/",
        image: "/demo/tairovic-dark-verzija/assets/logo.webp",
        imageAlt: "Tairovic Gebäudeservice — website preview",
      },
      {
        name: "FixBike",
        branch: "Bicycle service",
        work: "Clear site with service overview, fast contact and mobile optimisation.",
        href: "https://fixbike.online/",
        image: "/Case Studio FixBike/02.png",
        imageAlt: "FixBike — bicycle service website",
      },
      {
        name: "IlmBuds",
        branch: "Education app & web presence",
        work: "Web presence and store materials for a multilingual family education app.",
        href: "https://www.ilmbuds.com/",
        image: "/portfolio/ilmbuds/02-ilmbuds-google-play-listing.png",
        imageAlt: "IlmBuds — website and app presence",
      },
    ],
  },
  process: {
    title: "How does working together look?",
    steps: [
      "Short call about your business",
      "Proposal for structure and content",
      "Design and build",
      "Revisions",
      "Domain setup and online launch",
    ],
  },
  finalCta: {
    title: "Want a professional website for your business?",
    body: "Send me a message and get a free assessment of what would work best for your company.",
    button: "Contact me",
    meta: "Free assessment • No obligation • Reply within 24h",
  },
};

const it: HomeKmuCopy = {
  ...en,
  audience: {
    title: "Per chi realizzo siti web?",
    cards: [
      { label: "Pulizia edifici" },
      { label: "Autolavaggio & auto" },
      { label: "Artigiani & edilizia" },
      { label: "Giardinaggio" },
      { label: "Trasporti & corriere" },
      { label: "Servizio biciclette" },
      { label: "Ristoranti e servizi locali" },
      { label: "Piccole imprese familiari" },
    ],
  },
  deliverables: {
    title: "Cosa ricevete?",
    items: en.deliverables.items.map((item) => item),
  },
  pricing: {
    title: "Pacchetti per piccole imprese",
    packages: [
      {
        name: "Pacchetto Start",
        price: "da 500 €",
        description: "Sito semplice per piccole imprese che vogliono una presenza online professionale.",
        includes: [
          "fino a 3 sezioni",
          "versione mobile",
          "modulo contatti",
          "Google Maps",
          "pubblicazione sul dominio",
        ],
      },
      {
        name: "Pacchetto Business",
        price: "da 900 €",
        description: "Per imprese che vogliono una presenza più solida e più contenuti.",
        includes: [
          "fino a 5 pagine",
          "servizi",
          "galleria",
          "contatti",
          "SEO di base",
          "pulsante WhatsApp",
          "pubblicazione online",
        ],
      },
      {
        name: "Manutenzione",
        price: "da 30 €/mese",
        description: "Piccole modifiche, controlli di sicurezza e supporto tecnico.",
        includes: [],
      },
    ],
  },
  portfolio: {
    ...en.portfolio,
    title: "Esempi dei miei lavori",
    branchLabel: "Settore",
    workLabel: "Realizzato",
    visitLabel: "Vedi il sito",
  },
  process: {
    title: "Come funziona la collaborazione?",
    steps: [
      "Breve conversazione sulla vostra attività",
      "Proposta di struttura e contenuti",
      "Design e realizzazione",
      "Correzioni",
      "Collegamento dominio e pubblicazione online",
    ],
  },
  finalCta: {
    title: "Volete un sito professionale per la vostra attività?",
    body: "Scrivetemi — riceverete una valutazione gratuita su cosa conviene alla vostra impresa.",
    button: "Contattatemi",
    meta: "Valutazione gratuita • Senza impegno • Risposta entro 24h",
  },
};

const al: HomeKmuCopy = {
  ...en,
  audience: {
    title: "Për kë krijoj faqe web?",
    cards: [
      { label: "Pastrim ndërtesash" },
      { label: "Kujdes automjeti & KFZ" },
      { label: "Zanate & ndërtim" },
      { label: "Kopshtari" },
      { label: "Transport & korrier" },
      { label: "Servis biçikletash" },
      { label: "Restorante dhe shërbime lokale" },
      { label: "Biznese të vogla familjare" },
    ],
  },
  deliverables: {
    title: "Çfarë merrni?",
    items: [
      "Faqe kryesore moderne",
      "Faqe shërbimesh",
      "Formular kontakti",
      "Integrim Google Maps",
      "Buton WhatsApp",
      "Optimizim mobil",
      "SEO bazë: tituj dhe përshkrime",
      "Lidhje me domenin",
      "Publikim online",
    ],
  },
  pricing: {
    title: "Paketa për biznese të vogla",
    packages: [
      {
        name: "Paketa Start",
        price: "nga 500 €",
        description: "Faqe e thjeshtë për biznese të vogla që duan prani profesionale online.",
        includes: [
          "deri në 3 seksione",
          "version mobil",
          "formular kontakti",
          "Google Maps",
          "publikim në domen",
        ],
      },
      {
        name: "Paketa Business",
        price: "nga 900 €",
        description: "Për firmat që duan prani më serioze dhe më shumë përmbajtje.",
        includes: [
          "deri në 5 faqe",
          "shërbime",
          "galeri",
          "kontakt",
          "SEO bazë",
          "buton WhatsApp",
          "publikim online",
        ],
      },
      {
        name: "Mirëmbajtje",
        price: "nga 30 €/muaj",
        description: "Ndryshime të vogla, kontrolle sigurie dhe mbështetje teknike.",
        includes: [],
      },
    ],
  },
  portfolio: {
    ...en.portfolio,
    title: "Shembuj të punëve të mia",
    branchLabel: "Sektori",
    workLabel: "Çfarë u bë",
    visitLabel: "Shiko faqen",
  },
  process: {
    title: "Si duket bashkëpunimi?",
    steps: [
      "Bisedë e shkurtër për biznesin tuaj",
      "Propozim strukture dhe përmbajtjeje",
      "Dizajn dhe realizim",
      "Korrigjime",
      "Lidhje domeni dhe publikim online",
    ],
  },
  finalCta: {
    title: "Dëshironi një faqe profesionale për biznesin tuaj?",
    body: "Më shkruani — do të merrni një vlerësim falas për çfarë i përshtatet firmës suaj.",
    button: "Më kontaktoni",
    meta: "Vlerësim falas • Pa detyrim • Përgjigje brenda 24 orëve",
  },
};

const COPY: Partial<Record<Language, HomeKmuCopy>> = { de, en };

export function getHomeKmuCopy(lang: Language): HomeKmuCopy {
  return COPY[lang] ?? COPY.de!;
}
