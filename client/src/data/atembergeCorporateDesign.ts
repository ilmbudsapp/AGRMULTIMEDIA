import type { ServiceLang } from "@/lib/servicePageI18n";

const BASE = "/portfolio/corporate-design/atemberge";

export type AtembergeCaseCopy = {
  h3: string;
  intro: string;
  includes: string[];
  toolsPlaceholder: string;
  gallery: { src: string; alt: string }[];
};

const galleryDe: AtembergeCaseCopy["gallery"] = [
  {
    src: `${BASE}/01-moodboard.jpg`,
    alt: "Moodboard Atemberge — Outdoor-Wandermarke mit Natur, modernem Lifestyle und Markenästhetik.",
  },
  {
    src: `${BASE}/02-farbwelt.jpg`,
    alt: "Farbwelt Atemberge — Himbeerrosa, Lavendel, Mitternachtsblau und Smaragdgrün mit HEX- und CMYK-Werten.",
  },
  {
    src: `${BASE}/03-logo-herleitung.jpg`,
    alt: "Herleitung des finalen Atemberge-Logos — Verschmelzung der Buchstaben A und B für Atem und Berge.",
  },
  {
    src: `${BASE}/04-logo-kernidee.jpg`,
    alt: "Logo-Kernidee Atemberge — minimalistische Verbindung von Modernität, Natur und Generationen.",
  },
  {
    src: `${BASE}/05-logo-groessen.jpg`,
    alt: "Atemberge-Logo in drei Größen — 100 %, 70 % und 50 % für skalierbare Markenanwendung.",
  },
  {
    src: `${BASE}/06-logo-positiv-negativ.jpg`,
    alt: "Atemberge-Logo in Positiv- und Negativversion auf hellen und dunklen Hintergründen.",
  },
  {
    src: `${BASE}/07-visitenkarte-final.jpg`,
    alt: "Finale Visitenkarte Atemberge — Corporate Design mit Logo, Typografie Poppins und Markenfarben.",
  },
];

const galleryEn: AtembergeCaseCopy["gallery"] = [
  {
    src: `${BASE}/01-moodboard.jpg`,
    alt: "Atemberge moodboard — outdoor hiking brand combining nature, modern lifestyle and brand aesthetics.",
  },
  {
    src: `${BASE}/02-farbwelt.jpg`,
    alt: "Atemberge colour palette — raspberry pink, lavender, midnight blue and emerald green with HEX values.",
  },
  {
    src: `${BASE}/03-logo-herleitung.jpg`,
    alt: "Final Atemberge logo rationale — merging letters A and B for breath (Atem) and mountains (Berge).",
  },
  {
    src: `${BASE}/04-logo-kernidee.jpg`,
    alt: "Atemberge logo core idea — minimal fusion of modernity, nature and cross-generational appeal.",
  },
  {
    src: `${BASE}/05-logo-groessen.jpg`,
    alt: "Atemberge logo at three sizes — 100 %, 70 % and 50 % for scalable brand use.",
  },
  {
    src: `${BASE}/06-logo-positiv-negativ.jpg`,
    alt: "Atemberge logo in positive and negative versions on light and dark backgrounds.",
  },
  {
    src: `${BASE}/07-visitenkarte-final.jpg`,
    alt: "Final Atemberge business card — corporate design with logo, Poppins typography and brand colours.",
  },
];

export const atembergeCaseByLang: Record<ServiceLang, AtembergeCaseCopy> = {
  de: {
    h3: "Corporate Design — Outdoor-Marke „Atemberge“",
    intro:
      "Konzeption und Finalisierung einer Wanderausrüstungs-Marke: von Brainstorming und Moodboard über Farbwelt und Typografie bis zum finalen Logo und der Visitenkarte. Atemberge verbindet Natur, modernen Lifestyle und funktionale Outdoor-Bekleidung für alle Generationen.",
    includes: [
      "Markenpersona & Konzepttext (Outdoor / Wandern / Lifestyle)",
      "Moodboard und visuelle Bildideen (Natur, Modernität, Nachhaltigkeit)",
      "Farbwelt: Himbeerrosa #d7416c, Lavendel #917ab5, Mitternachtsblau #323a45, Smaragdgrün #4b7f70",
      "Hausschriften: Poppins (Regular, Medium, Bold) und Caviar Dreams",
      "Logo-Entwicklung: Scribbles, Varianten, Kernidee A+B, Positiv/Negativ",
      "Finale Visitenkarte im Corporate-Design-System",
    ],
    toolsPlaceholder: "Adobe Illustrator, Adobe InDesign, strukturierte Corporate-Design-Dokumentation (Grafikdesign Creative Lab).",
    gallery: galleryDe,
  },
  en: {
    h3: "Corporate design — outdoor brand „Atemberge“",
    intro:
      "Concept and finalisation of a hiking/outdoor equipment brand: from brainstorming and moodboard through colour system and typography to the final logo and business card. Atemberge connects nature, modern lifestyle and functional outdoor apparel for all generations.",
    includes: [
      "Brand persona & concept copy (outdoor / hiking / lifestyle)",
      "Moodboard and visual themes (nature, modernity, sustainability)",
      "Colour palette: raspberry pink #d7416c, lavender #917ab5, midnight blue #323a45, emerald green #4b7f70",
      "Type system: Poppins (Regular, Medium, Bold) and Caviar Dreams",
      "Logo process: scribbles, variants, A+B core idea, positive/negative lockups",
      "Final business card within the corporate design system",
    ],
    toolsPlaceholder: "Adobe Illustrator, Adobe InDesign, structured corporate design documentation (Graphic Design Creative Lab).",
    gallery: galleryEn,
  },
  it: {
    h3: "Corporate design — marchio outdoor „Atemberge“",
    intro:
      "Concept e finalizzazione di un marchio outdoor: moodboard, palette colori, tipografia, logo finale e biglietto da visita per un brand di abbigliamento da trekking moderno.",
    includes: [
      "Persona del marchio e testo concettuale",
      "Moodboard e direzione visiva",
      "Palette colori e tipografia Poppins",
      "Sviluppo logo e versioni positivo/negativo",
      "Biglietto da visita finale",
    ],
    toolsPlaceholder: "Adobe Illustrator, Adobe InDesign.",
    gallery: galleryEn,
  },
  sr: {
    h3: "Corporate design — outdoor brend „Atemberge“",
    intro:
      "Koncept i finalizacija outdoor brenda za planinarenje: moodboard, paleta boja, tipografija, finalni logo i vizit kartica.",
    includes: [
      "Persona brenda i koncept tekst",
      "Moodboard i vizuelni pravac",
      "Paleta boja i Poppins tipografija",
      "Razvoj logotipa i pozitiv/negativ verzije",
      "Finalna vizit kartica",
    ],
    toolsPlaceholder: "Adobe Illustrator, Adobe InDesign.",
    gallery: galleryEn,
  },
  al: {
    h3: "Corporate design — markë outdoor „Atemberge“",
    intro:
      "Koncept dhe finalizim i një marke outdoor për ecje në natyrë: moodboard, paletë ngjyrash, tipografi, logo finale dhe kartvizitë.",
    includes: [
      "Persona e markës dhe tekst koncepti",
      "Moodboard dhe drejtim vizual",
      "Paletë ngjyrash dhe tipografi Poppins",
      "Zhvillim logo dhe versione pozitive/negative",
      "Kartvizitë finale",
    ],
    toolsPlaceholder: "Adobe Illustrator, Adobe InDesign.",
    gallery: galleryEn,
  },
};
