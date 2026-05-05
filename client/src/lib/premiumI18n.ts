import type { Language } from "@/lib/i18n";

type CaseStudy = {
  title: string;
  problem: string;
  solution: string;
  result: string;
};

type PremiumTranslations = {
  hero: {
    heading: string;
    subheading: string;
    primaryCta: string;
    secondaryCta: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    description: string;
    items: { title: string; description: string }[];
  };
  caseStudies: {
    heading: string;
    description: string;
    problemLabel: string;
    solutionLabel: string;
    resultLabel: string;
    cards: CaseStudy[];
  };
  legal: {
    impressum: string;
    datenschutz: string;
  };
};

const en: PremiumTranslations = {
  hero: {
    heading: "High-Impact Video Ads that Drive Sales & Engagement.",
    subheading:
      "Transforming your brand's message into high-converting video content. 20 years of expertise in visual storytelling.",
    primaryCta: "Start a Project",
    secondaryCta: "View My Case Studies",
  },
  services: {
    eyebrow: "Capabilities",
    heading: "Premium production and digital execution",
    description: "End-to-end creative systems tailored for growth-focused brands.",
    items: [
      { title: "Video Ads", description: "Paid social creatives with platform-specific hooks." },
      { title: "Web Design", description: "Conversion-driven pages with premium visual direction." },
      { title: "Brand Design", description: "Identity systems that increase trust and recall." },
      { title: "AI Content", description: "Scalable visual content pipelines for campaigns." },
    ],
  },
  caseStudies: {
    heading: "Case Studies",
    description: "Each project shows a clear path from challenge to measurable outcome.",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    resultLabel: "Result",
    cards: [
      {
        title: "Local Service Brand Campaign",
        problem: "Low attention and weak ad retention in paid traffic.",
        solution: "Produced short-form ad variations with stronger visual hooks.",
        result: "Higher engagement and better lead quality within 30 days.",
      },
      {
        title: "Business Website Redesign",
        problem: "Outdated site with poor mobile conversion flow.",
        solution: "Rebuilt architecture, messaging hierarchy, and visual trust signals.",
        result: "Improved contact requests and reduced bounce rate.",
      },
      {
        title: "Brand + Content Refresh",
        problem: "Inconsistent visuals across social and web channels.",
        solution: "Created unified brand system and reusable content templates.",
        result: "Stronger brand recognition and faster campaign launches.",
      },
    ],
  },
  legal: {
    impressum: "Impressum",
    datenschutz: "Datenschutz",
  },
};

const de: PremiumTranslations = {
  hero: {
    heading: "High-Impact Video Ads that Drive Sales & Engagement.",
    subheading:
      "Transforming your brand's message into high-converting video content. 20 years of expertise in visual storytelling.",
    primaryCta: "Projekt starten",
    secondaryCta: "Case Studies ansehen",
  },
  services: {
    eyebrow: "Leistungen",
    heading: "Premium Produktion und digitale Umsetzung",
    description: "Ganzheitliche Kreativsysteme fur wachstumsorientierte Marken.",
    items: [
      { title: "Video Ads", description: "Paid-Social Creatives mit starken Einstiegen." },
      { title: "Webdesign", description: "Conversion-orientierte Seiten mit Premium-Look." },
      { title: "Brand Design", description: "Markensysteme fur mehr Vertrauen und Wiedererkennung." },
      { title: "AI Content", description: "Skalierbare visuelle Inhalte fur Kampagnen." },
    ],
  },
  caseStudies: {
    heading: "Case Studies",
    description: "Jedes Projekt zeigt den klaren Weg vom Problem zum messbaren Ergebnis.",
    problemLabel: "Problem",
    solutionLabel: "Losung",
    resultLabel: "Ergebnis",
    cards: [
      {
        title: "Kampagne fur lokalen Dienstleister",
        problem: "Wenig Aufmerksamkeit und schwache Anzeigenbindung.",
        solution: "Kurze Werbevarianten mit starkeren visuellen Hooks erstellt.",
        result: "Mehr Engagement und bessere Leads innerhalb von 30 Tagen.",
      },
      {
        title: "Business-Website Redesign",
        problem: "Veraltete Seite mit schwacher mobiler Conversion-Strecke.",
        solution: "Struktur, Botschaften und Vertrauenselemente neu aufgebaut.",
        result: "Mehr Kontaktanfragen und geringere Absprungrate.",
      },
      {
        title: "Brand- und Content-Refresh",
        problem: "Uneinheitliche Visuals uber Social und Website hinweg.",
        solution: "Einheitliches Brand-System und Content-Templates entwickelt.",
        result: "Starkere Wiedererkennung und schnellere Kampagnenstarts.",
      },
    ],
  },
  legal: {
    impressum: "Impressum",
    datenschutz: "Datenschutz",
  },
};

const sr: PremiumTranslations = {
  hero: {
    heading: "High-Impact Video Ads that Drive Sales & Engagement.",
    subheading:
      "Transforming your brand's message into high-converting video content. 20 years of expertise in visual storytelling.",
    primaryCta: "Pokreni projekat",
    secondaryCta: "Pogledaj case studies",
  },
  services: {
    eyebrow: "Usluge",
    heading: "Premium produkcija i digitalna realizacija",
    description: "Kompletan kreativni sistem za brendove koji zele rast.",
    items: [
      { title: "Video oglasi", description: "Placeni social formati sa jakim prvim sekundama." },
      { title: "Web dizajn", description: "Stranice koje podizu konverzije i poverenje." },
      { title: "Brending", description: "Vizuelni identitet koji je dosledan i prepoznatljiv." },
      { title: "AI sadrzaj", description: "Skalabilna vizuelna produkcija za kampanje." },
    ],
  },
  caseStudies: {
    heading: "Case Studies",
    description: "Svaki projekat prikazuje Problem, Resenje i Rezultat.",
    problemLabel: "Problem",
    solutionLabel: "Resenje",
    resultLabel: "Rezultat",
    cards: [
      {
        title: "Kampanja za lokalni servis",
        problem: "Niska paznja korisnika i slab retention oglasa.",
        solution: "Napravljene kratke ad varijacije sa jacim vizuelnim hookovima.",
        result: "Veci engagement i kvalitetniji leadovi u prvih 30 dana.",
      },
      {
        title: "Redizajn poslovnog sajta",
        problem: "Zastareo sajt i slab mobilni conversion flow.",
        solution: "Nova struktura, poruke i trust elementi kroz ceo funnel.",
        result: "Porast upita i manje bounce stope.",
      },
      {
        title: "Osvezenje brenda i sadrzaja",
        problem: "Nedosledan vizuelni identitet kroz kanale.",
        solution: "Definisan brend sistem i reusable content template-i.",
        result: "Bolja prepoznatljivost i brze lansiranje kampanja.",
      },
    ],
  },
  legal: {
    impressum: "Impressum",
    datenschutz: "Datenschutz",
  },
};

const it: PremiumTranslations = {
  ...en,
  services: {
    ...en.services,
    eyebrow: "Servizi",
    heading: "Produzione premium ed esecuzione digitale",
  },
};

const al: PremiumTranslations = {
  ...en,
  services: {
    ...en.services,
    eyebrow: "Sherbime",
    heading: "Prodhim premium dhe zbatim digjital",
  },
};

const byLang: Record<string, PremiumTranslations> = { en, de, sr, it, al, sq: al };

export function getPremiumTranslations(language: Language): PremiumTranslations {
  return byLang[language] ?? en;
}
