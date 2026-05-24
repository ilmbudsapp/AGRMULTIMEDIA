export type SpecLang = "de" | "en" | "it" | "sr" | "al";

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
    porroLidia: PortfolioProjectCopy;
    aisaOsmani: PortfolioProjectCopy;
    fixbike: PortfolioProjectCopy;
    reinigung: PortfolioProjectCopy;
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
    porroLidia: {
      title: "Porro Lidia Fotografin",
      description:
        "Bilingual demo site (German, Italian): weddings, birthdays, family celebrations and events — elegant photography portfolio template.",
      liveCta: "Open demo",
      gradeBadge: "Demo · DE / IT",
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
    reinigung: {
      title: "Premium textile & interior cleaning",
      description:
        "A modern, conversion-focused web design for professional deep cleaning of furniture, upholstery and vehicles in Stuttgart — fresh visuals, clear services and WhatsApp booking.",
      liveCta: "Request a similar project",
      gradeBadge: "Web design · Demo",
      mediaTitle: "Project gallery",
      mediaIntro: "Photos and videos from the concept — click any item for full-screen preview.",
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
    porroLidia: {
      title: "Porro Lidia Fotografin",
      description:
        "Zweisprachige Demo (Deutsch, Italienisch): Hochzeiten, Geburtstage, Familienfeste und Events — elegantes Fotografie-Portfolio.",
      liveCta: "Demo öffnen",
      gradeBadge: "Demo · DE / IT",
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
    reinigung: {
      title: "Premium Textil- & Innenreinigung",
      description:
        "Ein modernes, optimiertes Webdesign für professionelle Tiefenreinigung in Stuttgart — Möbel, Polster und Kfz mit klaren Leistungen und WhatsApp-Termin.",
      liveCta: "Ähnliches Projekt anfragen",
      gradeBadge: "Webdesign · Demo",
      mediaTitle: "Projekt-Galerie",
      mediaIntro: "Fotos und Videos aus dem Konzept — Klick für Vollbild-Vorschau.",
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
        "Klasična montaža u Premiere Pro levo, AI generisani klipovi desno — jasno razdvojeno da odmah vidite kako je svaki projekat nastao.",
    },
    videoEditing: {
      title: "Video montaža",
      description:
        "High-end video montaža u Adobe Premiere Pro — 100% ručni rad, storytelling i dinamika.",
      badge: "Adobe Premiere Pro",
      cta: "Zatraži video montažu",
      clipAriaLabel: "Premiere Pro montaža {n}",
    },
    aiVideo: {
      title: "AI video kreacija",
      description:
        "Vrhunska AI generacija videa za reklame, društvene mreže i moderne prezentacije brenda.",
      cta: "Zatraži AI video",
      clipAriaLabel: "AI generisani video klip {n}",
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
    galleryClose: "Zatvori pregled",
    ux: {
      title: "UX/UI i kompletan inženjering",
      description:
        "Spajamo estetiku grafike sa tehničkim SEO-om, pristupačnošću i performansama — modern izgled i Grade A vidljivost u pretrazi i AI odgovorima.",
      cta: "Web dizajn i SEO",
    },
  },
  projects: {
    porroLidia: {
      title: "Porro Lidia Fotografin",
      description:
        "Demo sajt na 2 jezika (DE, IT): venčanja, rođendani, porodične proslave i eventi — elegantan portfolio za fotografe.",
      liveCta: "Otvori demo",
      gradeBadge: "Demo · DE / IT",
    },
    aisaOsmani: {
      title: "Aisa Osmani — Portfolio",
      description:
        "Premium studentski portfolio: Growli mobilna app, FROOZ cross-media, web dizajn, corporate publishing, ilustracija i audiovizuelni radovi.",
      liveCta: "Otvori demo",
      gradeBadge: "Demo · Multimedia",
    },
    fixbike: {
      title: "FixBike",
      description:
        "Profesionalni sajt za popravku i servis bicikala — brzo učitavanje, lokalni GEO SEO i struktura za maksimalnu konverziju.",
      liveCta: "Pogledaj live sajt",
      gradeBadge: "Grade A · GEO",
    },
    reinigung: {
      title: "Premium tekstilna i unutrašnja čišćenja",
      description:
        "Moderan, optimizovan web dizajn za profesionalnu dubinsku čišćenje u Štutgartu — nameštaj, tapacirani komadi i vozila sa jasnim uslugama i WhatsApp terminom.",
      liveCta: "Zatraži sličan projekat",
      gradeBadge: "Web dizajn · Demo",
      mediaTitle: "Galerija projekta",
      mediaIntro: "Fotografije i video snimci iz koncepta — klik za prikaz preko celog ekrana.",
    },
    theirrealm: {
      title: "theirrealmtv CAT",
      subtitle: "Promo video za Kickstarter kampanju",
      description:
        "Montaža isključivo u Adobe Premiere Pro — bez AI. Vizuelno snažan, visokokonvertujući promo za globalnu crowdfunding kampanju u kratkom roku.",
      cta: "Zatraži video montažu",
      badge: "Kickstarter · Premiere Pro",
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
        "Montaggio classico in Premiere Pro a sinistra, clip generate con IA a destra — separazione chiara per ogni tipo di progetto.",
    },
    videoEditing: {
      title: "Montaggio video",
      description:
        "Montaggio video high-end con Adobe Premiere Pro — storytelling, ritmo e dinamica al 100% artigianali.",
      badge: "Adobe Premiere Pro",
      cta: "Richiedi montaggio video",
      clipAriaLabel: "Montaggio Premiere Pro {n}",
    },
    aiVideo: {
      title: "Creazione video con IA",
      description:
        "Generazione video con IA all'avanguardia per spot, social media e presentazioni di marca moderne.",
      cta: "Richiedi video IA",
      clipAriaLabel: "Clip video generato con IA {n}",
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
    galleryClose: "Chiudi anteprima",
    ux: {
      title: "UX/UI e ingegneria completa",
      description:
        "Uniamo estetica grafica, SEO tecnico, accessibilità e performance — aspetto moderno e visibilità Grade A su ricerca e motori di risposta IA.",
      cta: "Web design e SEO",
    },
  },
  projects: {
    porroLidia: {
      title: "Porro Lidia Fotografin",
      description:
        "Sito demo bilingue (DE, IT): matrimoni, compleanni, feste di famiglia ed eventi — portfolio elegante per fotografi.",
      liveCta: "Apri demo",
      gradeBadge: "Demo · DE / IT",
    },
    aisaOsmani: {
      title: "Aisa Osmani — Portfolio",
      description:
        "Portfolio studentesco premium: app Growli, cross-media FROOZ, web design, editorial, illustrazione e progetti audiovisivi.",
      liveCta: "Apri demo",
      gradeBadge: "Demo · Multimedia",
    },
    fixbike: {
      title: "FixBike",
      description:
        "Sito professionale per riparazione e servizio biciclette — caricamento rapido, GEO SEO locale e struttura per conversione.",
      liveCta: "Sito live",
      gradeBadge: "Grade A · GEO",
    },
    reinigung: {
      title: "Premium pulizia tessuti e interni",
      description:
        "Un web design moderno e ottimizzato per la pulizia professionale a Stuttgart — mobili, tessuti e auto con servizi chiari e prenotazione WhatsApp.",
      liveCta: "Richiedi un progetto simile",
      gradeBadge: "Web design · Demo",
      mediaTitle: "Galleria progetto",
      mediaIntro: "Foto e video dal concept — clic per anteprima a schermo intero.",
    },
    theirrealm: {
      title: "theirrealmtv CAT",
      subtitle: "Video promo campagna Kickstarter",
      description:
        "Montato interamente in Adobe Premiere Pro — senza IA. Promo visivamente forte e ad alta conversione per crowdfunding globale in tempi stretti.",
      cta: "Richiedi montaggio video",
      badge: "Kickstarter · Premiere Pro",
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
        "Montazh klasik në Premiere Pro majtas, klipa të gjeneruara me AI djathtas — ndarje e qartë për çdo lloj projekti.",
    },
    videoEditing: {
      title: "Montazh video",
      description:
        "Montazh video high-end me Adobe Premiere Pro — 100% punë manuale, storytelling dhe dinamikë.",
      badge: "Adobe Premiere Pro",
      cta: "Kërko montazh video",
      clipAriaLabel: "Montazh Premiere Pro {n}",
    },
    aiVideo: {
      title: "Krijim video me AI",
      description:
        "Gjenerim video me AI për reklama, media sociale dhe prezantime moderne të markës.",
      cta: "Kërko video AI",
      clipAriaLabel: "Klip video i gjeneruar me AI {n}",
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
    galleryClose: "Mbyll pamjen",
    ux: {
      title: "UX/UI dhe inxhinieri e plotë",
      description:
        "Lidhim estetikën grafike me SEO teknik, aksesueshmëri dhe performancë — pamje moderne dhe dukshmëri Grade A në kërkim dhe motorë përgjigjesh AI.",
      cta: "Web design dhe SEO",
    },
  },
  projects: {
    porroLidia: {
      title: "Porro Lidia Fotografin",
      description:
        "Faqe demo dygjuhëshe (DE, IT): dasma, ditëlindje, festa familjare dhe evente — portfolio elegant për fotografë.",
      liveCta: "Hap demo",
      gradeBadge: "Demo · DE / IT",
    },
    aisaOsmani: {
      title: "Aisa Osmani — Portfolio",
      description:
        "Portfolio studentor premium: aplikacioni Growli, FROOZ cross-media, web design, botim korporativ, ilustrim dhe projekte audiovizive.",
      liveCta: "Hap demo",
      gradeBadge: "Demo · Multimedia",
    },
    fixbike: {
      title: "FixBike",
      description:
        "Faqe profesionale për riparim dhe servis biçikletash — ngarkim i shpejtë, GEO SEO lokal dhe strukturë konvertimi.",
      liveCta: "Shiko faqen live",
      gradeBadge: "Grade A · GEO",
    },
    reinigung: {
      title: "Pastrim premium tekstili & interior",
      description:
        "Web design modern dhe i optimizuar për pastrim profesional në Stuttgart — mobilje, tapiceri dhe automjete me shërbime të qarta dhe termin WhatsApp.",
      liveCta: "Kërko projekt të ngjashëm",
      gradeBadge: "Web design · Demo",
      mediaTitle: "Galeria e projektit",
      mediaIntro: "Foto dhe video nga koncepti — kliko për pamje në ekran të plotë.",
    },
    theirrealm: {
      title: "theirrealmtv CAT",
      subtitle: "Video promo për fushatën Kickstarter",
      description:
        "Montuar plotësisht në Adobe Premiere Pro — pa AI. Promo vizualisht i fortë dhe me konvertim të lartë për crowdfunding global në afat të shkurtër.",
      cta: "Kërko montazh video",
      badge: "Kickstarter · Premiere Pro",
    },
  },
  contactCta: "Kërko ofertë",
};

export const portfolioPageByLang: Record<SpecLang, PortfolioPageCopy> = { de, en, it, sr, al };

export function getPortfolioPageCopy(lang: string): PortfolioPageCopy {
  const key = (["de", "en", "it", "sr", "al"].includes(lang) ? lang : "en") as SpecLang;
  return portfolioPageByLang[key] ?? en;
}
