/**
 * Translations for the modernized portfolio spec (DE, EN, IT, SR, AL).
 * Used alongside main i18n for new sections and copy.
 */
import { portfolioPageByLang, type PortfolioPageCopy } from "./portfolioPageI18n";

export type SpecLang = 'de' | 'en';

/** Home flip-card: front copy + back headline (no public pricing) */
export interface ServiceFlipCardCopy {
  title: string;
  description: string;
  flipHeadline: string;
  flipIncludes: string;
}

export interface SpecTranslations {
  // Hero
  hero: {
    h1: string;
    /** With `h1Typed`, static part before the typing animation (must match start of `h1`). */
    h1Prefix?: string;
    /** Animated suffix; full visible H1 = h1Prefix + h1Typed. */
    h1Typed?: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    availableIn: string;
  };
  // SEO (overrides for title/meta/OG/Twitter)
  seo: {
    title: string;
    description: string;
  };
  // Featured projects under hero
  heroProjects: {
    heading: string;
    projects: {
      title: string;
      description: string;
      result?: string;
    }[];
  };
  // Strong CTA under featured projects
  heroCta: {
    heading: string;
    text: string;
    button: string;
  };
  /** Homepage About teaser */
  homeAbout: {
    lead: string;
    moreAbout: string;
  };
  // Nav (blog removed from UI; keys kept for legacy strings)
  nav: {
    home: string;
    services: string;
    webdesignSeo: string;
    graphicDesign: string;
    videoProduction: string;
    portfolio: string;
    about: string;
    /** Google Maps reviews anchor on home */
    reviews: string;
    blog: string;
    contact: string;
    /** Primary header CTA → #contact */
    ctaQuote: string;
  };
  /** Real Google Maps quotes (review body stays original in data file) */
  reviewsSection: {
    title: string;
    subtitle: string;
    /** aria-label for semantic section / role=region */
    ariaRegion: string;
    platformGoogleMaps: string;
    /** Screen reader text for the 5-star row (all listed reviews are 5/5) */
    ratingScreenReader: string;
    /** Secondary CTA: official Google Business Profile */
    mapsCta: string;
    mapsCtaAriaLabel: string;
  };
  // Services preview (4 flip cards on home)
  servicesPreview: {
    title: string;
    subtitle: string;
    flipOrderCta: string;
    flipDetailsLink: string;
    flipBackLabel: string;
    webUi: ServiceFlipCardCopy;
    graphicBranding: ServiceFlipCardCopy;
    videoMotion: ServiceFlipCardCopy;
    aiContent: ServiceFlipCardCopy;
  };
  /** Homepage services grid: Video editing card (Premiere / AE) */
  servicesVideoEditing: {
    cardTitle: string;
    cardDescription: string;
    toolsHint: string;
    videoAriaLabel: string;
  };
  // Featured portfolio
  featuredPortfolio: {
    heading: string;
    /** One line under heading on homepage featured grid */
    featuredIntro: string;
    filterAll: string;
    filterWeb: string;
    filterGraphic: string;
    filterPhoto: string;
    filterVideo: string;
    filterAi: string;
    viewDetails: string;
    backToPortfolio: string;
  };
  /** Dedicated /portfolio page — classified multimedia portfolio */
  portfolioPage: PortfolioPageCopy;
  // Why work with me
  whyMe: {
    heading: string;
    subtitle: string;
    benefit1: string;
    benefit2: string;
    benefit3: string;
    benefit4: string;
  };
  // Testimonials
  testimonials: {
    heading: string;
    subtitle: string;
    card1: { quote: string; author: string; role: string };
    card2: { quote: string; author: string; role: string };
    card3: { quote: string; author: string; role: string };
  };
  // Final CTA on home
  finalCta: {
    title: string;
    text: string;
    button: string;
  };
  // Services page
  servicesPage: {
    intro: string;
    webUi: { title: string; description: string; deliverables: string[]; startingFrom: string };
    graphicBranding: { title: string; description: string; deliverables: string[]; startingFrom: string };
    videoMotion: { title: string; description: string; deliverables: string[]; startingFrom: string };
    aiServices: { title: string; description: string; deliverables: string[]; startingFrom: string };
    cta: string;
  };
  // About page
  aboutPage: {
    /** Single visible H1 for the About route */
    pageH1: string;
    intro: string;
    skillsTitle: string;
    tools: string[];
    timelineTitle: string;
    milestone1: string;
    milestone2: string;
    milestone3: string;
    ctaTitle: string;
    ctaButton: string;
  };
  // Contact page
  contactPage: {
    intro: string;
    name: string;
    email: string;
    serviceNeeded: string;
    serviceOptions: { web: string; graphic: string; video: string; ai: string; other: string };
    budgetRange: string;
    budgetOptions: string[];
    message: string;
    submit: string;
    successMessage: string;
    locationLabel: string;
    locationValue: string;
    socialTitle: string;
  };
}

const en: SpecTranslations = {
  homeAbout: {
    lead: 'AGR Multimedia is a freelance creative studio focused on clear positioning, refined visuals, and measurable outcomes—not noise.',
    moreAbout: 'Full profile & background',
  },
  hero: {
    h1: 'Web design in Geislingen an der Steige — modern websites that win clients',
    subheadline:
      'Your studio in Geislingen an der Steige: modern websites, SEO, GEO/AEO, video and graphics for trades and SMEs.',
    ctaPrimary: 'Get a quote',
    ctaSecondary: 'Selected work',
    availableIn: 'DE · EN',
  },
  seo: {
    title: "Web design Geislingen an der Steige | AGR Multimedia",
    description:
      "Web design studio in Geislingen an der Steige: websites, SEO, GEO/AEO, video & graphics for trades and SMEs. Free consultation — reply within 24h.",
  },
  heroProjects: {
    heading: 'Featured projects',
    projects: [
      {
        title: 'AI Video Campaign',
        description: 'Created short-form AI videos for social media marketing.',
        result: 'Increased engagement and reach.',
      },
      {
        title: 'Business Website',
        description: 'Designed and developed a modern website for a local business.',
      },
      {
        title: 'Branding & Content',
        description: 'Full branding and content creation for online presence.',
      },
    ],
  },
  heroCta: {
    heading: 'Ready to grow your business?',
    text: 'Let's create something powerful together using AI, design and strategy.',
    button: 'Get a free consultation',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    webdesignSeo: 'Web Design & SEO',
    graphicDesign: 'Graphic Design',
    videoProduction: 'Video Production',
    portfolio: 'Portfolio',
    about: 'About',
    reviews: 'Reviews',
    blog: 'Blog',
    contact: 'Contact',
    ctaQuote: 'Get a quote',
  },
  reviewsSection: {
    title: 'Google reviews',
    subtitle: 'What our clients say — original quotes as published on Google Maps.',
    ariaRegion: 'Google Maps customer reviews for AGR Multimedia',
    platformGoogleMaps: 'Google Maps',
    ratingScreenReader: 'Rating: 5 out of 5 stars',
    mapsCta: 'All reviews on Google Maps',
    mapsCtaAriaLabel: 'Open AGR Multimedia on Google Maps in a new tab',
  },
  servicesPreview: {
    title: 'What I do',
    subtitle: 'Four focused areas—structured for small businesses and creators who need a premium presence without complexity.',
    flipOrderCta: 'Request now',
    flipDetailsLink: 'Service details',
    flipBackLabel: 'Your project',
    webUi: {
      title: 'Web Design & Development',
      description: 'Business websites, landing pages and UI/UX that feel clear and modern.',
      flipHeadline: 'Individual quote',
      flipIncludes: 'Portfolio · SEO · Contact · Mobile-first',
    },
    graphicBranding: {
      title: 'Graphic & Branding',
      description: 'Logo, print assets and brand guidelines that look sharp and trustworthy.',
      flipHeadline: 'Individual quote',
      flipIncludes: 'Logo · Brand kit · Print-ready files',
    },
    videoMotion: {
      title: 'AI Content & Video',
      description: 'Short-form videos, AI-generated content and social visuals for your brand.',
      flipHeadline: 'Individual quote',
      flipIncludes: 'Social cuts · AI visuals · Motion basics',
    },
    aiContent: {
      title: 'Projects built with AI — photo / video',
      description: 'AI-assisted photo and video production for campaigns, social media, and brand storytelling.',
      flipHeadline: 'Individual quote',
      flipIncludes: 'AI visuals · Photo · Video',
    },
  },
  servicesVideoEditing: {
    cardTitle: 'Video editing',
    cardDescription: 'Adobe Premiere Pro and After Effects.',
    toolsHint: 'Premiere Pro · After Effects',
    videoAriaLabel: 'Edited video clip',
  },
  featuredPortfolio: {
    heading: 'Selected work',
    featuredIntro: 'A curated set of projects—full portfolio available on request.',
    filterAll: 'All',
    filterWeb: 'Web',
    filterGraphic: 'Graphic',
    filterPhoto: 'Photo',
    filterVideo: 'Video',
    filterAi: 'AI',
    viewDetails: 'View details',
    backToPortfolio: 'Back to portfolio',
  },
  portfolioPage: portfolioPageByLang.en,
  whyMe: {
    heading: 'Why work with me',
    subtitle:
      'Adobe Creative Cloud, modern AI-assisted workflows, and multilingual communication—structured delivery without agency overhead.',
    benefit1: 'Multilingual communication: I speak German, English, Italian, Serbian and Albanian.',
    benefit2: 'Specialized in small businesses and creators who need fast and reliable delivery.',
    benefit3: 'End-to-end support: from first idea to final website, design or video.',
    benefit4: 'AI-enhanced workflows for more creative options in less time.',
  },
  testimonials: {
    heading: 'Client feedback',
    subtitle:
      'Honest impressions from clients who wanted modern visuals and marketing materials—without confusion, and with on-time delivery.',
    card1: {
      quote: 'Agron delivered exactly what we needed. Professional, fast, and great to work with. We will definitely hire again.',
      author: 'Placeholder Client',
      role: 'Small business owner',
    },
    card2: {
      quote: 'The video and branding work exceeded our expectations. Highly recommend for anyone looking for quality and creativity.',
      author: 'Placeholder Client',
      role: 'Content creator',
    },
    card3: {
      quote: 'From concept to final design, the process was smooth and the result was outstanding. Thank you!',
      author: 'Placeholder Client',
      role: 'Startup founder',
    },
  },
  finalCta: {
    title: 'Ready to bring your idea to life?',
    text: "Tell me about your project and I'll suggest the best combination of design, video and AI.",
    button: 'Send a message',
  },
  servicesPage: {
    intro: 'All services are clearly structured — after an initial consultation you receive an individual quote tailored to your project.',
    webUi: {
      title: 'Web Design & Development',
      description: 'Modern, responsive websites and landing pages that present your business clearly.',
      deliverables: ['Business websites', 'Landing pages', 'UI/UX design'],
      startingFrom: '',
    },
    graphicBranding: {
      title: '',
      description: '',
      deliverables: [],
      startingFrom: '',
    },
    videoMotion: {
      title: 'AI Content & Video',
      description: 'Short-form videos and AI-powered content tailored for social media and marketing.',
      deliverables: ['Short-form videos (Reels, TikTok)', 'AI-generated content', 'Social media visuals'],
      startingFrom: '',
    },
    aiServices: {
      title: 'Custom AI Solutions',
      description: 'Tailor-made AI tools and automations that support your daily work.',
      deliverables: ['AI apps', 'Automation tools', 'Custom digital solutions'],
      startingFrom: '',
    },
    cta: "Not sure which package fits your project? Send me a short message and I'll help you choose the right setup.",
  },
  aboutPage: {
    pageH1: "About AGR Multimedia — Web design, AI multimedia & digital marketing in Geislingen",
    intro: "I'm Agron Osmani, a freelance graphic designer, video editor and AI enthusiast based in Geislingen an der Steige. I create visuals, websites and videos that help small businesses and creators communicate clearly and look professional online.",
    skillsTitle: 'Skills & tools',
    tools: [
      'Adobe Photoshop',
      'Adobe Lightroom',
      'Adobe Illustrator',
      'Adobe Premiere Pro',
      'Adobe After Effects',
      'Other video and color tools',
      'AI tools for image generation and automation',
    ],
    timelineTitle: 'Timeline',
    milestone1: '2015–2018 – First freelance projects in graphic design and photo editing.',
    milestone2: '2019–2022 – Expanded into video editing and motion graphics.',
    milestone3: '2023–today – Combining design, video and AI for clients in Europe and abroad.',
    ctaTitle: "Want to know if I'm the right fit for your project? Send me a message and let's talk.",
    ctaButton: 'Send a message',
  },
  contactPage: {
    intro: "Tell me a bit about your project and I'll get back to you with ideas and next steps.",
    name: 'Name',
    email: 'Email',
    serviceNeeded: 'Service needed',
    serviceOptions: {
      web: 'Web & UI Design',
      graphic: 'Graphic Design & Branding',
      video: 'Video Editing & Motion',
      ai: 'AI Services',
      other: 'Other',
    },
    budgetRange: 'Project scope',
    budgetOptions: ['Small project', 'Medium project', 'Larger project', 'Not sure yet', 'To be discussed in consultation'],
    message: 'Message',
    submit: 'Send message',
    successMessage: "Thank you! I'll reply within 24 hours.",
    locationLabel: 'Location',
    locationValue: 'Geislingen an der Steige',
    socialTitle: 'Social',
  },
};

const de: SpecTranslations = {
  homeAbout: {
    lead: 'AGR Multimedia ist ein kreatives Studio mit Fokus auf klare Positionierung und ruhige, professionelle Umsetzung.',
    moreAbout: 'Zum vollständigen Profil',
  },
  hero: {
    h1: 'Webdesign in Geislingen an der Steige — moderne Websites, die Kunden bringen',
    subheadline:
      'Ihr Studio in Geislingen an der Steige: moderne Websites, SEO, GEO/AEO, Video und Grafik für Handwerk, Dienstleister und KMU.',
    ctaPrimary: 'Angebot anfragen',
    ctaSecondary: 'Ausgewählte Arbeiten',
    availableIn: 'DE · EN',
  },
  seo: {
    title: "Webdesign Geislingen an der Steige | AGR Multimedia",
    description:
      "Webdesign-Studio in Geislingen an der Steige: Websites, SEO, GEO/AEO, Video & Grafik für Handwerk und KMU. Kostenlose Erstberatung — Antwort in 24h.",
  },
  heroProjects: {
    heading: 'Ausgewählte Projekte',
    projects: [
      {
        title: 'AI-Video-Kampagne',
        description: 'Erstellung von kurzen AI-Videos für Social-Media-Marketing.',
        result: 'Höheres Engagement und größere Reichweite.',
      },
      {
        title: 'Business-Website',
        description: 'Konzeption und Umsetzung einer modernen Website für ein lokales Unternehmen.',
      },
      {
        title: 'Branding & Content',
        description: 'Komplettes Branding und Content-Erstellung für den Online-Auftritt.',
      },
    ],
  },
  heroCta: {
    heading: 'Bereit dein Business zu skalieren?',
    text: 'Lass uns gemeinsam etwas Starkes mit AI, Design und Strategie aufbauen.',
    button: 'Kostenlose Beratung',
  },
  nav: {
    home: 'Home',
    services: 'Leistungen',
    webdesignSeo: 'Webdesign & SEO',
    graphicDesign: 'Grafikdesign',
    videoProduction: 'Videoproduktion',
    portfolio: 'Portfolio',
    about: 'Über mich',
    reviews: 'Bewertungen',
    blog: 'Blog',
    contact: 'Kontakt',
    ctaQuote: 'Angebot anfragen',
  },
  reviewsSection: {
    title: 'Google-Bewertungen',
    subtitle: 'Was unsere Kunden sagen — Originaltexte wie auf Google Maps veröffentlicht.',
    ariaRegion: 'Kundenbewertungen aus Google Maps für AGR Multimedia',
    platformGoogleMaps: 'Google Maps',
    ratingScreenReader: 'Bewertung: 5 von 5 Sternen',
    mapsCta: 'Alle Bewertungen auf Google Maps',
    mapsCtaAriaLabel: 'AGR Multimedia auf Google Maps öffnen — neuer Tab',
  },
  servicesPreview: {
    title: 'Schwerpunkte',
    subtitle: 'Vier Bereiche—für kleine Unternehmen, die Qualität ohne Überladung suchen.',
    flipOrderCta: 'Jetzt anfragen',
    flipDetailsLink: 'Leistung ansehen',
    flipBackLabel: 'Ihr Projekt',
    webUi: {
      title: 'Webdesign & Entwicklung',
      description: 'Business-Websites, Landingpages und UI/UX-Design mit klarem Aufbau.',
      flipHeadline: 'Individuelles Angebot',
      flipIncludes: 'Portfolio · SEO · Kontakt · Mobile-first',
    },
    graphicBranding: {
      title: 'Grafik & Branding',
      description: 'Logo, Print und Markenrichtlinien, die professionell und vertrauenswürdig wirken.',
      flipHeadline: 'Individuelles Angebot',
      flipIncludes: 'Logo · Brand-Kit · Druckfertige Dateien',
    },
    videoMotion: {
      title: 'AI Content & Video',
      description: 'Kurzvideos, AI-generierte Inhalte und Visuals für Ihre Social-Media-Kanäle.',
      flipHeadline: 'Individuelles Angebot',
      flipIncludes: 'Social-Formate · AI-Visuals · Motion-Basics',
    },
    aiContent: {
      title: 'Mit KI umgesetzte Projekte — Foto / Video',
      description: 'KI-gestützte Foto- und Videoproduktion für Kampagnen, Social Media und Markenauftritt.',
      flipHeadline: 'Individuelles Angebot',
      flipIncludes: 'KI-Visuals · Foto · Video',
    },
  },
  servicesVideoEditing: {
    cardTitle: 'Videobearbeitung',
    cardDescription: 'Adobe Premiere Pro und After Effects.',
    toolsHint: 'Premiere Pro · After Effects',
    videoAriaLabel: 'Bearbeiteter Videoclip',
  },
  featuredPortfolio: {
    heading: 'Ausgewählte Arbeiten',
    featuredIntro: 'Eine kuratierte Auswahl—das vollständige Portfolio auf Anfrage.',
    filterAll: 'Alle',
    filterWeb: 'Web',
    filterGraphic: 'Grafik',
    filterPhoto: 'Foto',
    filterVideo: 'Video',
    filterAi: 'KI',
    viewDetails: 'Details ansehen',
    backToPortfolio: 'Zurück zum Portfolio',
  },
  portfolioPage: portfolioPageByLang.de,
  whyMe: {
    heading: 'Warum mit mir arbeiten',
    subtitle:
      'Adobe Creative Cloud, moderne KI-Workflows und mehrsprachige Abstimmung—ohne Agentur-Overhead.',
    benefit1: 'Mehrsprachige Kommunikation: Ich spreche Deutsch, Englisch, Italienisch, Serbisch und Albanisch.',
    benefit2: 'Spezialisiert auf kleine Unternehmen und Creator mit Bedarf an schneller und zuverlässiger Lieferung.',
    benefit3: 'End-to-End-Betreuung: von der ersten Idee bis zur fertigen Website, zum Design oder Video.',
    benefit4: 'KI-gestützte Workflows für mehr kreative Optionen in kürzerer Zeit.',
  },
  testimonials: {
    heading: 'Kundenstimmen',
    subtitle:
      'Echte Rückmeldungen von Kunden, die moderne Inhalte und Marketing wollten—ohne Stress, mit klarer Kommunikation und pünktlicher Lieferung.',
    card1: {
      quote: 'Agron hat genau geliefert, was wir brauchten. Professionell, schnell, angenehme Zusammenarbeit. Wir werden definitiv wieder buchen.',
      author: 'Platzhalter Kunde',
      role: 'Inhaber Kleinunternehmen',
    },
    card2: {
      quote: 'Die Video- und Branding-Arbeit hat unsere Erwartungen übertroffen. Sehr empfehlenswert für Qualität und Kreativität.',
      author: 'Platzhalter Kunde',
      role: 'Content Creator',
    },
    card3: {
      quote: 'Von der Idee bis zum fertigen Design – der Prozess war reibungslos und das Ergebnis hervorragend. Danke!',
      author: 'Platzhalter Kunde',
      role: 'Startup-Gründer',
    },
  },
  finalCta: {
    title: 'Bereit, Ihre Idee umzusetzen?',
    text: 'Erzählen Sie mir von Ihrem Projekt – ich schlage die beste Kombination aus Design, Video und KI vor.',
    button: 'Nachricht senden',
  },
  servicesPage: {
    intro: 'Alle Leistungen sind klar strukturiert — nach einem Erstgespräch erhalten Sie ein individuelles Angebot passend zu Ihrem Projekt.',
    webUi: {
      title: 'Webdesign & Entwicklung',
      description: 'Moderne, responsive Websites und Landingpages, die Ihr Unternehmen klar präsentieren.',
      deliverables: ['Business-Websites', 'Landingpages', 'UI/UX-Design'],
      startingFrom: '',
    },
    graphicBranding: {
      title: '',
      description: '',
      deliverables: [],
      startingFrom: '',
    },
    videoMotion: {
      title: 'AI Content & Video',
      description: 'Kurzvideos und AI-gestützte Inhalte für Social Media und Marketing.',
      deliverables: ['Kurzvideos (Reels, TikTok)', 'AI-generierte Inhalte', 'Social-Media-Visuals'],
      startingFrom: '',
    },
    aiServices: {
      title: 'Custom AI Solutions',
      description: 'Individuelle AI-Tools und Automatisierungen, die Ihren Arbeitsalltag unterstützen.',
      deliverables: ['AI-Apps', 'Automatisierungs-Tools', 'Individuelle digitale Lösungen'],
      startingFrom: '',
    },
    cta: 'Unsicher, welches Paket zu Ihrem Projekt passt? Schreiben Sie mir kurz – ich helfe bei der passenden Lösung.',
  },
  aboutPage: {
    pageH1: "Über AGR Multimedia — Webdesign, KI-Multimedia & Marketing in Geislingen",
    intro: 'Ich bin Agron Osmani, freiberuflicher Grafikdesigner, Video-Editor und KI-Enthusiast in Geislingen an der Steige. Ich erstelle Visuals, Websites und Videos, mit denen kleine Unternehmen und Creator klar kommunizieren und online professionell auftreten.',
    skillsTitle: 'Skills & Tools',
    tools: [
      'Adobe Photoshop',
      'Adobe Lightroom',
      'Adobe Illustrator',
      'Adobe Premiere Pro',
      'Adobe After Effects',
      'Weitere Video- und Farb-Tools',
      'KI-Tools für Bildgenerierung und Automatisierung',
    ],
    timelineTitle: 'Meilensteine',
    milestone1: '2015–2018 – Erste Freelance-Projekte in Grafikdesign und Fotobearbeitung.',
    milestone2: '2019–2022 – Ausweitung auf Video-Schnitt und Motion Graphics.',
    milestone3: '2023–heute – Kombination aus Design, Video und KI für Kunden in Europa und international.',
    ctaTitle: 'Möchten Sie wissen, ob ich zu Ihrem Projekt passe? Schreiben Sie mir – wir sprechen darüber.',
    ctaButton: 'Nachricht senden',
  },
  contactPage: {
    intro: 'Erzählen Sie mir kurz von Ihrem Projekt – ich melde mich mit Ideen und nächsten Schritten.',
    name: 'Name',
    email: 'E-Mail',
    serviceNeeded: 'Gewünschte Leistung',
    serviceOptions: {
      web: 'Web & UI Design',
      graphic: 'Grafikdesign & Branding',
      video: 'Video Editing & Motion',
      ai: 'KI-Services',
      other: 'Sonstiges',
    },
    budgetRange: 'Projektumfang',
    budgetOptions: ['Kleines Projekt', 'Mittleres Projekt', 'Größeres Projekt', 'Noch unklar', 'Im Gespräch klären'],
    message: 'Nachricht',
    submit: 'Nachricht senden',
    successMessage: 'Vielen Dank! Ich antworte innerhalb von 24 Stunden.',
    locationLabel: 'Standort',
    locationValue: 'Geislingen an der Steige',
    socialTitle: 'Social',
  },
};

const specByLang: Record<SpecLang, SpecTranslations> = { en, de };

/** Map main i18n language code to spec language (e.g. 'sq' -> 'al' for Albanian). */
export function toSpecLang(lang: string): SpecLang {
  if (lang === 'en') return 'en';
  return 'de';
}

export function getSpecTranslations(lang: string): SpecTranslations {
  return specByLang[toSpecLang(lang)] ?? en;
}

/** Display codes for language switcher: DE | EN */
export const specLangCodes: SpecLang[] = ['de', 'en'];
export const specLangDisplay: Record<SpecLang, string> = {
  de: 'DE',
  en: 'EN',
};
