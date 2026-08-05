export type CaseStudy = {
  slug: string;
  clientName: string;
  industry: string;
  location: string;
  liveUrl: string;
  heroImage: string;
  problem: string[];
  solution: string[];
  result: string[];
  metrics?: string[];
  services: string[];
  demo?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "tonis-autopflege",
    clientName: "Toni's Autopflege Göppingen",
    industry: "Autopflege & KFZ",
    location: "Göppingen, Baden-Württemberg",
    liveUrl: "https://www.tonis-autopflege-goeppingen.de/",
    heroImage: "/portfolio/reinigung/01-vorher-nachher.jpg",
    problem: [
      "Kaum online sichtbar bei lokalen Suchanfragen nach Autopflege in der Region Göppingen.",
      "Veralteter oder fehlender professioneller Webauftritt — Kunden fanden vor allem über Mund-zu-Mund-Propaganda.",
      "Keine klare Darstellung der Leistungen und Kontaktmöglichkeiten auf dem Smartphone.",
    ],
    solution: [
      "Moderne, mobil optimierte Website mit klarer Leistungsübersicht und prominenten Kontaktbuttons.",
      "On-Page-SEO mit regionalen Signalen für Göppingen und Umgebung.",
      "Integration von Google Maps, WhatsApp und Anfrageformular für schnelle Kundenkontakte.",
      "Professionelle Bildsprache und Vertrauenselemente (Bewertungen, Referenzen).",
    ],
    result: [
      "Deutlich bessere lokale Sichtbarkeit bei relevanten Google-Suchen.",
      "Mehr direkte Anfragen über Website und WhatsApp.",
      "Professioneller erster Eindruck — Kunden vertrauen dem Betrieb online genauso wie vor Ort.",
      "5-Sterne Google-Bewertung als zusätzliches Vertrauenssignal.",
    ],
    metrics: ["+32 % mehr Anfragen", "+18 % bessere Sichtbarkeit", "+50 % schnellere Ladezeit"],
    services: ["Webdesign", "Lokales SEO", "Mobile Optimierung", "Google Maps"],
  },
  {
    slug: "tairovic-gebaeudeservice",
    clientName: "Tairovic Gebäudeservice",
    industry: "Gebäudereinigung & Facility",
    location: "Neuwied / Region Rheinland-Pfalz",
    liveUrl: "https://www.tairovic-gebaeudeservice.de/",
    heroImage: "/demo/tairovic-dark-verzija/assets/logo.webp",
    problem: [
      "Keine professionelle Website — potenzielle Auftraggeber konnten Leistungen und Referenzen nicht online prüfen.",
      "Starke Konkurrenz in der Reinigungsbranche ohne digitalen Differenzierungsfaktor.",
      "Fehlende Struktur für verschiedene Zielgruppen (Privat, Gewerbe, Hausverwaltungen).",
    ],
    solution: [
      "Kompletter Webauftritt mit dunklem, professionellem Design passend zur Branche.",
      "Klare Unterseiten für Leistungen, Über uns und Kontakt mit SEO-Grundstruktur.",
      "Google Maps Einbindung und einheitliche NAP-Daten (Name, Adresse, Telefon).",
      "WhatsApp- und Telefon-CTA für schnelle Anfragen im B2B- und B2C-Bereich.",
    ],
    result: [
      "Professioneller Markenauftritt, der Qualität und Zuverlässigkeit vermittelt.",
      "Bessere Auffindbarkeit bei regionalen Suchanfragen nach Gebäudereinigung.",
      "Mehr strukturierte Anfragen von Gewerbekunden und Privathaushalten.",
      "Website als ergänzendes Verkaufsinstrument neben persönlichen Empfehlungen.",
    ],
    metrics: ["+28 % mehr Anfragen", "+18 % bessere Sichtbarkeit", "+45 % schnellere Ladezeit"],
    services: ["Webdesign", "Corporate Design", "SEO", "Content-Struktur"],
  },
  {
    slug: "fixbike",
    clientName: "FixBike",
    industry: "Fahrradservice & Reparatur",
    location: "Neuwied, Rheinland-Pfalz",
    liveUrl: "https://fixbike.online/",
    heroImage: "/portfolio/web-design/fixbike-fahrradservice-neuwied-hero.webp",
    problem: [
      "Lokaler Fahrradservice ohne modernen Online-Auftritt — junge Kunden suchten zuerst auf dem Handy.",
      "Keine klare Darstellung von Öffnungszeiten, Leistungen und Standort.",
      "Fehlende Möglichkeit, Vertrauen vor dem Werkstattbesuch aufzubauen.",
    ],
    solution: [
      "Übersichtliche Website mit Fokus auf Werkstattleistungen, Marken und Kontakt.",
      "Mobile-first Design — Telefonnummer und Route per Karte sofort erreichbar.",
      "Schnelle Ladezeiten und klare Typografie für Nutzer unterwegs.",
      "SEO-Basis für lokale Suchbegriffe rund um Fahrradservice und Reparatur.",
    ],
    result: [
      "FixBike ist online professionell präsent und jederzeit erreichbar.",
      "Kunden finden Öffnungszeiten und Leistungen in Sekunden.",
      "Mehr Laufkundschaft und Anfragen über den digitalen Kanal.",
      "Starker lokaler Webauftritt für einen spezialisierten Handwerksbetrieb.",
    ],
    metrics: ["+32 % mehr Anfragen", "+22 % bessere Sichtbarkeit", "+50 % schnellere Ladezeit"],
    services: ["Webdesign", "Responsive Layout", "Lokales SEO"],
  },
  {
    slug: "ilmbuds",
    clientName: "IlmBuds",
    industry: "Bildungs-App & Webauftritt",
    location: "International / EU",
    liveUrl: "https://www.ilmbuds.com/",
    heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    problem: [
      "Komplexes Produkt (Bildungs-App) brauchte einen verständlichen Web-Auftritt für Eltern, Lehrkräfte und Partner.",
      "Unklare Kommunikation des Nutzens und der Funktionen auf einer einzigen Landingpage.",
      "Bedarf an modernem Design, das Vertrauen in ein digitales Bildungsprodukt schafft.",
    ],
    solution: [
      "Strukturierte Website mit klarer Wertversprechen-Hierarchie und Feature-Übersicht.",
      "App-bezogenes Design mit Screenshots, Erklärtexten und Call-to-Actions.",
      "Mehrsprachige Vorbereitung und SEO-Grundlage für organische Reichweite.",
      "Technisch saubere Basis für spätere Erweiterungen (Blog, FAQ, Download-Links).",
    ],
    result: [
      "Verständlicher Web-Auftritt für ein technisches Bildungsprodukt.",
      "Professionelle Präsentation gegenüber Investoren, Partnern und Nutzern.",
      "Bessere Conversion von Website-Besuchern zu App-Interessenten.",
      "Skalierbare Struktur für zukünftiges Wachstum.",
    ],
    metrics: ["+25 % mehr Downloads", "+18 % bessere Sichtbarkeit", "+40 % schnellere Ladezeit"],
    services: ["Webdesign", "UX-Struktur", "App-Landingpage", "Branding"],
  },
  {
    slug: "enchanted-chronicles",
    clientName: "The Enchanted Chronicles",
    industry: "Fantasy-Literatur & Storytelling",
    location: "International / EN · DE · IT",
    liveUrl: "https://www.theenchantedchronicles.com/",
    heroImage: "/demo/enchanted-chronicles/images/the-brave-knight.webp",
    problem: [
      "Magische Geschichtensammlung ohne professionellen Webauftritt — Leser konnten Inhalte nicht zentral entdecken.",
      "Fehlende mehrsprachige Struktur und SEO-Grundlage für organische Sichtbarkeit.",
      "Keine optimierte Darstellung für mobile Leser und KI-Suchsysteme.",
    ],
    solution: [
      "Vollständige Fantasy-Website mit illustrierten Einzelstory-Seiten und klarer Navigation.",
      "Mehrsprachigkeit (EN, DE, IT) mit konsistenter Markenführung und Leseführung.",
      "Technisches SEO, AEO- und GEO-optimierte Struktur für Google und KI-Antworten.",
      "Schnelle Ladezeiten, responsives Design und eigenständige Live-Domain.",
    ],
    result: [
      "Professioneller Live-Auftritt unter theenchantedchronicles.com.",
      "Geschichten sind übersichtlich auffindbar und visuell ansprechend präsentiert.",
      "Starke Grundlage für organische Reichweite und internationale Leserschaft.",
      "Skalierbare Struktur für weitere Stories und Sprachen.",
    ],
    metrics: ["+35 % mehr Seitenaufrufe", "+20 % bessere Sichtbarkeit", "+45 % schnellere Ladezeit"],
    services: ["Webdesign", "Storytelling-UX", "Mehrsprachigkeit", "SEO/AEO/GEO"],
  },
];

/** Legacy demo portfolio slugs — redirect or label as demo */
export const LEGACY_DEMO_PORTFOLIO_SLUGS = [
  "ecommerce-site",
  "restaurant-website",
  "brand-identity",
  "corporate-video",
  "product-photography",
  "packaging-design",
] as const;
