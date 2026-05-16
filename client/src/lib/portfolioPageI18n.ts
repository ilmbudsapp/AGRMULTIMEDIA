export type SpecLang = "de" | "en" | "it" | "sr" | "al";

export type PortfolioFilterId = "all" | "web" | "video" | "graphic";

export interface PortfolioProjectCopy {
  title: string;
  description: string;
  liveCta: string;
  gradeBadge: string;
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
    aiVideo: { title: string; description: string; cta: string };
    graphic: { title: string; intro: string };
    brandGraphics: { title: string; description: string };
    aiPhoto: { title: string; description: string };
    graphicCta: string;
    ux: { title: string; description: string; cta: string };
  };
  projects: {
    tonis: PortfolioProjectCopy;
    fixbike: PortfolioProjectCopy;
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
        "Promo edits, campaign clips and AI-assisted motion for social, ads and presentations — fast turnaround without agency overhead.",
    },
    aiVideo: {
      title: "AI video creation",
      description:
        "We produce advanced video clips with AI-assisted workflows for ads, social media, Kickstarter-style campaigns and brand stories — combining Premiere Pro, After Effects and generative tools.",
      cta: "Video production services",
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
    ux: {
      title: "UX/UI & full-stack engineering",
      description:
        "We unite graphic aesthetics with technical SEO, accessibility and performance — so sites look modern and earn Grade A visibility in search and AI answer engines.",
      cta: "Web design & SEO",
    },
  },
  projects: {
    tonis: {
      title: "Toni's Autopflege — Göppingen",
      description:
        "Full website transformation (Grade A). Content expanded from 3 words to 1,461 optimised words with SEO, AEO, GEO structures, Web App Manifest and PWA readiness.",
      liveCta: "View live website",
      gradeBadge: "Grade A · SEO 94",
    },
    fixbike: {
      title: "FixBike",
      description:
        "Professional bicycle repair and service website — fast load times, strong local GEO SEO and conversion-focused booking structure.",
      liveCta: "View live website",
      gradeBadge: "Grade A · GEO",
    },
    theirrealm: {
      title: "theirrealmtv CAT",
      subtitle: "Kickstarter campaign promo video",
      description:
        "Visually striking, high-converting, cost-effective video for a global crowdfunding campaign — delivered on a very tight timeline.",
      cta: "Video production",
      badge: "Kickstarter · Video",
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
        "Promo-Clips, Kampagnenvideos und KI-unterstützte Motion für Social Media, Ads und Präsentationen — schnell und ohne Agentur-Overhead.",
    },
    aiVideo: {
      title: "KI-Video-Kreation",
      description:
        "Wir erstellen fortschrittliche Videoclips mit KI-Workflows für Werbung, Social Media, Crowdfunding und Markenstorys — Premiere Pro, After Effects und generative Tools.",
      cta: "Videoproduktion",
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
    ux: {
      title: "UX/UI & komplettes Engineering",
      description:
        "Wir verbinden Grafik-Ästhetik mit technischem SEO, Barrierefreiheit und Performance — modern im Design, Grade A in Suche und KI-Antworten.",
      cta: "Webdesign & SEO",
    },
  },
  projects: {
    tonis: {
      title: "Toni's Autopflege — Göppingen",
      description:
        "Komplette Website-Transformation (Grade A). Inhalt von 3 Wörtern auf 1.461 optimierte Wörter mit SEO, AEO, GEO, Web App Manifest und PWA.",
      liveCta: "Website live ansehen",
      gradeBadge: "Grade A · SEO 94",
    },
    fixbike: {
      title: "FixBike",
      description:
        "Professionelle Webseite für Fahrradreparatur und Service — schnelle Ladezeiten, lokales GEO-SEO und conversion-starke Buchungsstruktur.",
      liveCta: "Website live ansehen",
      gradeBadge: "Grade A · GEO",
    },
    theirrealm: {
      title: "theirrealmtv CAT",
      subtitle: "Promo-Video für Kickstarter-Kampagne",
      description:
        "Visuell eindrucksvolles, hochkonvertierendes und kosteneffizientes Video für eine globale Crowdfunding-Kampagne — in sehr kurzer Zeit.",
      cta: "Videoproduktion",
      badge: "Kickstarter · Video",
    },
  },
  contactCta: "Angebot anfragen",
};

const sr: PortfolioPageCopy = {
  pageTitle: "Portfolio",
  pageLead:
    "AGR Multimedia — web dizajn, video, grafički dizajn i UX inženjering. Radovi po disciplinama: merljiv SEO, kampanjski video, brending i AI vizuali.",
  filters: { all: "Sve", web: "Web dizajn", video: "Video i AI", graphic: "Grafika i AI" },
  categories: {
    web: {
      title: "Web dizajn i SEO",
      intro:
        "Biznis sajtovi sa tehničkim SEO, AEO, GEO i strukturom za konverziju — za mala preduzeća i uslužne brendove u Nemačkoj.",
    },
    video: {
      title: "Video montaža i AI video produkcija",
      intro:
        "Promo klipovi, kampanjski video i AI motion za društvene mreže, reklame i prezentacije — brza isporuka bez agencijskog overhead-a.",
    },
    aiVideo: {
      title: "AI video kreacija",
      description:
        "Kreiramo napredne video klipove pomoću AI workflow-a za reklame, društvene mreže, crowdfunding kampanje i brand priče — Premiere Pro, After Effects i generativni alati.",
      cta: "Video produkcija",
    },
    graphic: {
      title: "Grafički dizajn i AI fotografija",
      intro:
        "Brend identitet, štampa, web grafika i fotorealistične AI slike — jedinstveni vizuali van stock biblioteka.",
    },
    brandGraphics: {
      title: "Brand identity i web grafika",
      description:
        "Logotipi, brend sistemi, flajeri, pakovanja, stationery i grafika optimizovana za sajtove — prilagođeno tržištu i brendu klijenta.",
    },
    aiPhoto: {
      title: "AI fotokreacija i upscaling",
      description:
        "Fotorealistične slike visoke rezolucije generisane AI modelima (npr. Gemini), retuš i upscaling — scene koje ne postoje na stock sajtovima.",
    },
    graphicCta: "Grafički dizajn usluge",
    ux: {
      title: "UX/UI i kompletan inženjering",
      description:
        "Spajamo estetiku grafike sa tehničkim SEO-om, pristupačnošću i performansama — modern izgled i Grade A vidljivost u pretrazi i AI odgovorima.",
      cta: "Web dizajn i SEO",
    },
  },
  projects: {
    tonis: {
      title: "Toni's Autopflege — Göppingen",
      description:
        "Kompletna transformacija sajta (Grade A). Sadržaj sa 3 reči na 1.461 optimizovane reči sa SEO, AEO, GEO, Web App Manifest i PWA podrškom.",
      liveCta: "Pogledaj live sajt",
      gradeBadge: "Grade A · SEO 94",
    },
    fixbike: {
      title: "FixBike",
      description:
        "Profesionalni sajt za popravku i servis bicikala — brzo učitavanje, lokalni GEO SEO i struktura za maksimalnu konverziju.",
      liveCta: "Pogledaj live sajt",
      gradeBadge: "Grade A · GEO",
    },
    theirrealm: {
      title: "theirrealmtv CAT",
      subtitle: "Promo video za Kickstarter kampanju",
      description:
        "Vizuelno upečatljiv, visokokonvertujući i kostenefikasan video za globalnu crowdfunding kampanju u veoma kratkom roku.",
      cta: "Video produkcija",
      badge: "Kickstarter · Video",
    },
  },
  contactCta: "Zatraži ponudu",
};

const it: PortfolioPageCopy = {
  pageTitle: "Portfolio",
  pageLead:
    "AGR Multimedia — web design, video, grafica e ingegneria UX. Lavori per disciplina: SEO misurabile, video campagne, branding e visual AI.",
  filters: { all: "Tutti", web: "Web design", video: "Video e IA", graphic: "Grafica e IA" },
  categories: {
    web: {
      title: "Web design e SEO",
      intro:
        "Siti business con SEO tecnico, AEO, GEO e struttura orientata alla conversione — per PMI e servizi in Germania.",
    },
    video: {
      title: "Montaggio video e produzione video IA",
      intro:
        "Clip promo, video campagna e motion assistito da IA per social, ads e presentazioni — consegna rapida senza overhead da agenzia.",
    },
    aiVideo: {
      title: "Creazione video con IA",
      description:
        "Clip video avanzati con workflow IA per pubblicità, social, crowdfunding e brand story — Premiere Pro, After Effects e strumenti generativi.",
      cta: "Servizi video",
    },
    graphic: {
      title: "Grafica e creazione foto IA",
      intro:
        "Identità di marca, print, grafica web e immagini fotorealistiche IA — visual unici oltre gli stock.",
    },
    brandGraphics: {
      title: "Brand identity e grafica web",
      description:
        "Loghi, sistemi di brand, flyer, packaging, stationery e grafiche web — su misura per mercato e sito del cliente.",
    },
    aiPhoto: {
      title: "Fotocreazione IA e upscaling",
      description:
        "Immagini fotorealistiche ad alta risoluzione con modelli IA (es. Gemini), ritocco e upscaling — scene non disponibili sugli stock.",
    },
    graphicCta: "Servizi grafica",
    ux: {
      title: "UX/UI e ingegneria completa",
      description:
        "Uniamo estetica grafica, SEO tecnico, accessibilità e performance — aspetto moderno e visibilità Grade A su ricerca e motori di risposta IA.",
      cta: "Web design e SEO",
    },
  },
  projects: {
    tonis: {
      title: "Toni's Autopflege — Göppingen",
      description:
        "Trasformazione completa del sito (Grade A). Da 3 parole a 1.461 parole ottimizzate con SEO, AEO, GEO, Web App Manifest e PWA.",
      liveCta: "Sito live",
      gradeBadge: "Grade A · SEO 94",
    },
    fixbike: {
      title: "FixBike",
      description:
        "Sito professionale per riparazione e servizio biciclette — caricamento rapido, GEO SEO locale e struttura per conversione.",
      liveCta: "Sito live",
      gradeBadge: "Grade A · GEO",
    },
    theirrealm: {
      title: "theirrealmtv CAT",
      subtitle: "Video promo campagna Kickstarter",
      description:
        "Video visivamente d'impatto, ad alta conversione ed economico per campagna crowdfunding globale — tempi molto stretti.",
      cta: "Produzione video",
      badge: "Kickstarter · Video",
    },
  },
  contactCta: "Richiedi preventivo",
};

const al: PortfolioPageCopy = {
  pageTitle: "Portfolio",
  pageLead:
    "AGR Multimedia — web design, video, dizajn grafik dhe inxhinieri UX. Punë sipas disiplinave: SEO i matshëm, video fushatash, branding dhe vizualë AI.",
  filters: { all: "Të gjitha", web: "Web design", video: "Video & AI", graphic: "Grafikë & AI" },
  categories: {
    web: {
      title: "Web design dhe SEO",
      intro:
        "Faqe biznesi me SEO teknik, AEO, GEO dhe strukturë për konvertim — për SME dhe shërbime në Gjermani.",
    },
    video: {
      title: "Montazh video dhe prodhim video AI",
      intro:
        "Klipa promo, video fushatash dhe motion me AI për rrjete sociale, reklama dhe prezantime — dorëzim i shpejtë pa overhead agjencie.",
    },
    aiVideo: {
      title: "Krijim video me AI",
      description:
        "Krijojmë klipa video të avancuara me workflow AI për reklama, social media, crowdfunding dhe histori marke — Premiere Pro, After Effects dhe mjete generative.",
      cta: "Produksion video",
    },
    graphic: {
      title: "Dizajn grafik dhe krijim foto AI",
      intro:
        "Identitet marke, print, grafikë web dhe imazhe fotorealiste AI — vizualë unikë përtej bibliotekave stock.",
    },
    brandGraphics: {
      title: "Brand identity dhe grafikë web",
      description:
        "Logo, sisteme marke, flyer, paketim, stationery dhe grafikë për web — të përshtatura për tregun dhe faqen e klientit.",
    },
    aiPhoto: {
      title: "Fotokreacion AI dhe upscaling",
      description:
        "Imazhe fotorealiste me rezolucion të lartë me modele AI (p.sh. Gemini), retush dhe upscaling — skena që nuk gjenden në stock.",
    },
    graphicCta: "Shërbime dizajni grafik",
    ux: {
      title: "UX/UI dhe inxhinieri e plotë",
      description:
        "Lidhim estetikën grafike me SEO teknik, aksesueshmëri dhe performancë — pamje moderne dhe dukshmëri Grade A në kërkim dhe motorë përgjigjesh AI.",
      cta: "Web design dhe SEO",
    },
  },
  projects: {
    tonis: {
      title: "Toni's Autopflege — Göppingen",
      description:
        "Transformim i plotë i faqes (Grade A). Nga 3 fjalë në 1.461 fjalë të optimizuara me SEO, AEO, GEO, Web App Manifest dhe PWA.",
      liveCta: "Shiko faqen live",
      gradeBadge: "Grade A · SEO 94",
    },
    fixbike: {
      title: "FixBike",
      description:
        "Faqe profesionale për riparim dhe servis biçikletash — ngarkim i shpejtë, GEO SEO lokal dhe strukturë konvertimi.",
      liveCta: "Shiko faqen live",
      gradeBadge: "Grade A · GEO",
    },
    theirrealm: {
      title: "theirrealmtv CAT",
      subtitle: "Video promo për fushatën Kickstarter",
      description:
        "Video vizualisht i fuqishëm, me konvertim të lartë dhe kosto-efektiv për fushatë global crowdfunding — afat shumë i shkurtër.",
      cta: "Produksion video",
      badge: "Kickstarter · Video",
    },
  },
  contactCta: "Kërko ofertë",
};

export const portfolioPageByLang: Record<SpecLang, PortfolioPageCopy> = { de, en, it, sr, al };

export function getPortfolioPageCopy(lang: string): PortfolioPageCopy {
  const key = (["de", "en", "it", "sr", "al"].includes(lang) ? lang : "en") as SpecLang;
  return portfolioPageByLang[key] ?? en;
}
