import type { Language } from "@/lib/i18n";

export type AboutExtended = {
  storyTitle: string;
  storyParagraphs: string[];
  whyTitle: string;
  whyBullets: string[];
  projectsTitle: string;
  projects: { name: string; desc: string; url?: string }[];
  languagesTitle: string;
  languagesText: string;
  specializationTitle: string;
  specializationText: string;
  educationTitle: string;
  educationItems: string[];
  photoAlt: string;
};

const AUTHOR_PHOTO = "/portfolio/vizit-kartice/04-agron-osmani-ao-minimal.webp";

export { AUTHOR_PHOTO };

const de: AboutExtended = {
  photoAlt: "Agron Osmani — Gründer von AGR Multimedia, Webdesigner in Geislingen",
  storyTitle: "Meine Geschichte",
  storyParagraphs: [
    "Ich bin Agron Osmani, Gründer von AGR Multimedia in Geislingen an der Steige. Seit 2015 arbeite ich als freiberuflicher Grafikdesigner, Video-Editor und Webentwickler — zunächst mit Fokus auf Visuals und Branding, später zunehmend mit Websites und lokalem SEO für kleine Unternehmen.",
    "Was mich antreibt: Betriebe, die offline exzellente Arbeit leisten, sollen online genauso professionell wirken. Viele Handwerker und Dienstleister in der Region haben jahrelang ohne Website oder mit veralteten Seiten gearbeitet — und dabei Kunden verloren, die zuerst bei Google suchen.",
    "Heute entwickle ich Websites persönlich und direkt mit Ihnen. Kein Callcenter, keine wechselnden Projektmanager. Sie wissen immer, wer Ihr Projekt umsetzt — von der ersten Skizze bis zum Launch und darüber hinaus.",
    "Meine Kunden sind vor allem KMU, Handwerksbetriebe und Dienstleister in Geislingen, Göppingen, dem Landkreis Göppingen und der weiteren Region — sowie Projekte in ganz Deutschland, Österreich und der Schweiz.",
  ],
  whyTitle: "Warum AGR Multimedia?",
  whyBullets: [
    "Persönliche Betreuung — ein Ansprechpartner von Anfang bis Ende",
    "Lokales Webdesign + SEO für Handwerk und KMU in der Region",
    "SEO-, GEO- und AEO-Grundlage für Google und KI-Suchen",
    "Transparente Angebote nach kostenlosem Erstgespräch",
    "Schnelle Umsetzung ohne Agentur-Overhead",
    "Mehrsprachige Kommunikation (DE, EN, SR, IT, SQ)",
  ],
  projectsTitle: "Ausgewählte Projekte",
  projects: [
    {
      name: "Toni's Autopflege Göppingen",
      desc: "Webdesign und lokales SEO für Autopflege — mehr Sichtbarkeit und Anfragen.",
      url: "https://www.tonis-autopflege-goeppingen.de/",
    },
    {
      name: "Tairovic Gebäudeservice",
      desc: "Professioneller Webauftritt für Gebäudereinigung mit Google Maps und Vertrauenssignalen.",
      url: "https://www.tairovic-gebaeudeservice.de/",
    },
    {
      name: "FixBike",
      desc: "Mobile Website für Fahrradservice — schnell erreichbar, klar strukturiert.",
      url: "https://fixbike.online/",
    },
    {
      name: "IlmBuds",
      desc: "Webauftritt für Bildungs-App — verständliche Präsentation komplexer Produkte.",
      url: "https://www.ilmbuds.com/",
    },
  ],
  languagesTitle: "Sprachen",
  languagesText:
    "Ich kommuniziere mit Kunden auf Deutsch, Englisch, Serbisch, Italienisch und Albanisch. Die Website agrmultimedia.eu ist mehrsprachig — für KMU in der Region ist Deutsch die Hauptsprache, internationale Projekte sind willkommen.",
  specializationTitle: "Spezialisierung",
  specializationText:
    "Mein Schwerpunkt liegt auf lokalem Webdesign und SEO für kleine und mittlere Unternehmen in Geislingen an der Steige, Göppingen und Umgebung — Handwerk, Dienstleister, Autopflege, Reinigung, Beratung. Ergänzend: Grafikdesign, Videoproduktion und KI-gestützte Inhalte mit menschlicher Qualitätskontrolle.",
  educationTitle: "Erfahrung & Weiterbildung",
  educationItems: [
    "Langjährige Praxis in Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro, After Effects)",
    "WordPress, moderne Web-Stacks und Performance-Optimierung",
    "On-Page-SEO, Local SEO, Schema.org und AEO/GEO-Grundlagen",
    "KI-Tools für Bild, Video und Automatisierung — mit menschlicher Endkontrolle",
    "Selbstständiger Grafikdesigner & Webentwickler in Deutschland (Steuernummer & USt-ID hinterlegt)",
  ],
};

const en: AboutExtended = {
  photoAlt: "Agron Osmani — Founder of AGR Multimedia, web designer in Geislingen",
  storyTitle: "My story",
  storyParagraphs: [
    "I'm Agron Osmani, founder of AGR Multimedia in Geislingen an der Steige. Since 2015 I've worked as a freelance graphic designer, video editor and web developer — first focused on visuals and branding, later increasingly on websites and local SEO for small businesses.",
    "What drives me: businesses that deliver excellent work offline should look just as professional online. Many trades and service providers in the region worked for years without a website or with outdated pages — and lost customers who search on Google first.",
    "Today I build websites personally and directly with you. No call centre, no rotating project managers. You always know who delivers your project — from first sketch to launch and beyond.",
    "My clients are mainly SMEs, trades and service providers in Geislingen, Göppingen and the wider region — as well as projects across Germany, Austria and Switzerland.",
  ],
  whyTitle: "Why AGR Multimedia?",
  whyBullets: [
    "Personal contact — one point of contact start to finish",
    "Local web design + SEO for trades and SMEs in the region",
    "SEO, GEO and AEO foundation for Google and AI search",
    "Transparent quotes after a free initial consultation",
    "Fast delivery without agency overhead",
    "Multilingual communication (DE, EN, SR, IT, SQ)",
  ],
  projectsTitle: "Selected projects",
  projects: [
    {
      name: "Toni's Autopflege Göppingen",
      desc: "Web design and local SEO for car care — more visibility and enquiries.",
      url: "https://www.tonis-autopflege-goeppingen.de/",
    },
    {
      name: "Tairovic Gebäudeservice",
      desc: "Professional website for building cleaning with Google Maps and trust signals.",
      url: "https://www.tairovic-gebaeudeservice.de/",
    },
    { name: "FixBike", desc: "Mobile website for bike service — fast to reach, clear structure.", url: "https://fixbike.online/" },
    { name: "IlmBuds", desc: "Website for education app — clear presentation of a complex product.", url: "https://www.ilmbuds.com/" },
  ],
  languagesTitle: "Languages",
  languagesText:
    "I work with clients in German, English, Serbian, Italian and Albanian. The site is multilingual — German is primary for local SMEs; international projects are welcome.",
  specializationTitle: "Specialisation",
  specializationText:
    "I focus on local web design and SEO for SMEs in Geislingen, Göppingen and the surrounding area — trades, services, car care, cleaning, consulting. Also graphic design, video production and AI-assisted content with human quality control.",
  educationTitle: "Experience & training",
  educationItems: [
    "Long-term practice in Adobe Creative Suite",
    "WordPress, modern web stacks and performance optimisation",
    "On-page SEO, local SEO, Schema.org and AEO/GEO basics",
    "AI tools for image, video and automation — with human final review",
    "Self-employed graphic designer & web developer in Germany",
  ],
};

const byLang: Partial<Record<Language, AboutExtended>> = { de, en, sr: de, it: en, sq: de, al: de };

export function getAboutExtended(lang: Language): AboutExtended {
  return byLang[lang] ?? en;
}
