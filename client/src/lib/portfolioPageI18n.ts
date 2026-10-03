export type SpecLang = "de" | "en";

export type PortfolioFilterId = "all" | "web" | "video" | "graphic";

export interface PortfolioProjectCopy {
  title: string;
  description: string;
  liveCta: string;
  gradeBadge: string;
  mediaTitle?: string;
  mediaIntro?: string;
}

export interface PortfolioPageCopy {
  pageTitle: string;
  pageLead: string;
  filters: {
    all: string;
    web: string;
    video: string;
    graphic: string;
  };
  categories: {
    web: { title: string; intro: string };
    video: { title: string; intro: string };
    videoEditing: { title: string; description: string; badge: string; cta: string; clipAriaLabel: string };
    aiVideo: { title: string; description: string; cta: string; clipAriaLabel: string };
    graphic: { title: string; intro: string };
    brandGraphics: { title: string; description: string };
    aiPhoto: { title: string; description: string };
    graphicCta: string;
    galleryClose: string;
    ux: { title: string; description: string; cta: string };
  };
  projects: {
    tonisAutopflege: PortfolioProjectCopy;
    tairovicDarkVerzija: PortfolioProjectCopy;
    aisaOsmani: PortfolioProjectCopy;
    fixbike: PortfolioProjectCopy;
    enchantedChronicles: PortfolioProjectCopy;
    theirrealm: {
      title: string;
      subtitle: string;
      description: string;
      cta: string;
      badge: string;
    };
  };
  contactCta: string;
}

const en: PortfolioPageCopy = {
  pageTitle: "Portfolio",
  pageLead:
    "AGR Multimedia — web design, video, graphic design and UX engineering. Explore our work by discipline: measurable SEO results, campaign video, brand identity and AI visuals.",
  filters: { all: "All", web: "Web design", video: "Video & AI", graphic: "Graphics & AI" },
  categories: {
    web: {
      title: "Web design & SEO",
      intro:
        "Business websites with technical SEO, AEO, GEO and conversion-focused structure — from local SMEs to service brands in Germany.",
    },
    video: {
      title: "Video editing & AI video production",
      intro:
        "Classic Premiere Pro edits on one side, AI-generated clips on the other — clearly separated so you see exactly how each project was made.",
    },
    videoEditing: {
      title: "Video editing",
      description:
        "High-end video editing with Adobe Premiere Pro — 100% handcrafted storytelling, pacing and dynamics.",
      badge: "Adobe Premiere Pro",
      cta: "Request video editing",
      clipAriaLabel: "Premiere Pro editing clip {n}",
    },
    aiVideo: {
      title: "AI video creation",
      description:
        "Forward-looking AI video generation for commercials, social media and modern brand presentations.",
      cta: "Request AI video",
      clipAriaLabel: "AI-generated video clip {n}",
    },
    graphic: {
      title: "Graphic design & AI photo creation",
      intro:
        "Brand identity, print, web graphics and photorealistic AI imagery — unique visuals beyond stock libraries.",
    },
    brandGraphics: {
      title: "Brand identity & web graphics",
      description:
        "Logos, branding systems, flyers, packaging, stationery and web-ready graphics tailored to each client's market and website.",
    },
    aiPhoto: {
      title: "AI photo creation & upscaling",
      description:
        "High-resolution, photorealistic images generated with AI models (e.g. Gemini), plus retouching and upscaling — unique scenes you will not find on stock sites.",
    },
    graphicCta: "Graphic design services",
    galleryClose: "Close preview",
    ux: {
      title: "UX/UI & full-stack engineering",
      description:
        "We unite graphic aesthetics with technical SEO, accessibility and performance — so sites look modern and earn Grade A visibility in search and AI answer engines.",
      cta: "Web design & SEO",
    },
  },
  projects: {
    tonisAutopflege: {
      title: "Toni's Autopflege Göppingen",
      description:
        "Professional car care website for Göppingen — service overview, WhatsApp contact, Google Maps and local SEO for mobile customers.",
      liveCta: "View live website",
      gradeBadge: "Live · Local SEO",
    },
    tairovicDarkVerzija: {
      title: "Tairovic Gebäudeservice",
      description:
        "Dark elegant website for building cleaning, caretaker, garden and property care — client-approved design, ready for production domain.",
      liveCta: "View website",
      gradeBadge: "Client project · Dark",
    },
    aisaOsmani: {
      title: "Aisa Osmani — Portfolio",
      description:
        "Premium student portfolio: Growli mobile app, FROOZ cross-media, web design, corporate publishing, illustration and audiovisual projects.",
      liveCta: "Open demo",
      gradeBadge: "Demo · Multimedia",
    },
    fixbike: {
      title: "FixBike",
      description:
        "Professional bicycle repair and service website — fast load times, strong local GEO SEO and conversion-focused booking structure.",
      liveCta: "View live website",
      gradeBadge: "Grade A · GEO",
    },
    enchantedChronicles: {
      title: "The Enchanted Chronicles",
      description:
        "Multilingual fantasy storytelling website — illustrated tales, SEO/AEO/GEO structure and live at theenchantedchronicles.com.",
      liveCta: "View live website",
      gradeBadge: "Live · Storytelling",
    },
    theirrealm: {
      title: "theirrealmtv CAT",
      subtitle: "Kickstarter campaign promo video",
      description:
        "Cut entirely in Adobe Premiere Pro — no AI in the edit. Visually striking, high-converting promo for a global crowdfunding campaign on a tight timeline.",
      cta: "Request video editing",
      badge: "Kickstarter · Premiere Pro",
    },
  },
  contactCta: "Request a quote",
};

const de: PortfolioPageCopy = {
  pageTitle: "Portfolio",
  pageLead:
    "AGR Multimedia — Webdesign, Video, Grafikdesign und UX-Engineering. Unsere Arbeiten nach Disziplin: messbare SEO-Ergebnisse, Kampagnenvideo, Branding und KI-Visuals.",
  filters: { all: "Alle", web: "Webdesign", video: "Video & KI", graphic: "Grafik & KI" },
  categories: {
    web: {
      title: "Webdesign & SEO",
      intro:
        "Business-Websites mit technischem SEO, AEO, GEO und conversion-orientierter Struktur — für KMU und Dienstleister in Deutschland.",
    },
    video: {
      title: "Video-Schnitt & KI-Videoproduktion",
      intro:
        "Klassischer Premiere-Pro-Schnitt links, KI-generierte Clips rechts — klar getrennt, damit Sie die Herkunft jedes Projekts sofort erkennen.",
    },
    videoEditing: {
      title: "Video-Schnitt",
      description:
        "High-End Videoschnitt mit Adobe Premiere Pro (100% Handarbeit, Storytelling & Dynamik).",
      badge: "Adobe Premiere Pro",
      cta: "Video-Schnitt anfragen",
      clipAriaLabel: "Premiere-Pro-Schnitt {n}",
    },
    aiVideo: {
      title: "KI-Video-Kreation",
      description:
        "Zukunftsweisende KI-Video-Generierung für Werbespots, Social Media und moderne Markenpräsentationen.",
      cta: "KI-Video anfragen",
      clipAriaLabel: "KI-generierter Videoclip {n}",
    },
    graphic: {
      title: "Grafikdesign & KI-Fotokreation",
      intro:
        "Markenidentität, Print, Web-Grafiken und fotorealistische KI-Bilder — einzigartige Visuals jenseits von Stock-Fotos.",
    },
    brandGraphics: {
      title: "Brand Identity & Web-Grafiken",
      description:
        "Logos, Branding-Systeme, Flyer, Verpackungen, Briefpapier und weboptimierte Grafiken — abgestimmt auf Markt und Website des Kunden.",
    },
    aiPhoto: {
      title: "KI-Fotokreation & Upscaling",
      description:
        "Hochauflösende, fotorealistische Bilder mit KI-Modellen (z. B. Gemini), Retusche und Upscaling — Szenen, die es auf Stock-Seiten nicht gibt.",
    },
    graphicCta: "Grafikdesign-Leistungen",
    galleryClose: "Vorschau schließen",
    ux: {
      title: "UX/UI & komplettes Engineering",
      description:
        "Wir verbinden Grafik-Ästhetik mit technischem SEO, Barrierefreiheit und Performance — modern im Design, Grade A in Suche und KI-Antworten.",
      cta: "Webdesign & SEO",
    },
  },
  projects: {
    tonisAutopflege: {
      title: "Toni's Autopflege Göppingen",
      description:
        "Professionelle Autopflege-Website für Göppingen — Leistungsübersicht, WhatsApp-Kontakt, Google Maps und lokales SEO für mobile Kunden.",
      liveCta: "Website live ansehen",
      gradeBadge: "Live · Lokales SEO",
    },
    tairovicDarkVerzija: {
      title: "Tairovic Gebäudeservice",
      description:
        "Dark-Elegant Webauftritt: Gebäudereinigung, Hausmeister, Garten- und Objektpflege — vom Kunden gewählt, Vorbereitung für Live-Domain.",
      liveCta: "Webseite öffnen",
      gradeBadge: "Kundenprojekt · Dark",
    },
    aisaOsmani: {
      title: "Aisa Osmani — Portfolio",
      description:
        "Premium-Studentenportfolio: Growli App, FROOZ Cross-Media, Webdesign, Corporate Publishing, Illustration und audiovisuelle Projekte.",
      liveCta: "Demo öffnen",
      gradeBadge: "Demo · Multimedia",
    },
    fixbike: {
      title: "FixBike",
      description:
        "Professionelle Webseite für Fahrradreparatur und Service — schnelle Ladezeiten, lokales GEO-SEO und conversion-starke Buchungsstruktur.",
      liveCta: "Website live ansehen",
      gradeBadge: "Grade A · GEO",
    },
    enchantedChronicles: {
      title: "The Enchanted Chronicles",
      description:
        "Mehrsprachige Fantasy-Website mit magischen Geschichten — SEO, AEO und GEO optimiert, live unter theenchantedchronicles.com.",
      liveCta: "Website live ansehen",
      gradeBadge: "Live · Storytelling",
    },
    theirrealm: {
      title: "theirrealmtv CAT",
      subtitle: "Promo-Video für Kickstarter-Kampagne",
      description:
        "Komplett in Adobe Premiere Pro geschnitten — ohne KI. Visuell starkes, hochkonvertierendes Promo für eine globale Crowdfunding-Kampagne in kurzer Zeit.",
      cta: "Video-Schnitt anfragen",
      badge: "Kickstarter · Premiere Pro",
    },
  },
  contactCta: "Angebot anfragen",
};

export const portfolioPageByLang: Record<SpecLang, PortfolioPageCopy> = { de, en };

export function getPortfolioPageCopy(lang: string): PortfolioPageCopy {
  const key = (["de", "en"].includes(lang) ? lang : "en") as SpecLang;
  return portfolioPageByLang[key] ?? en;
}
