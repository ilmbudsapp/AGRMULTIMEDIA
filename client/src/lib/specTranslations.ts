/**
 * Translations for the modernized portfolio spec (DE, EN, IT, SR, AL).
 * Used alongside main i18n for new sections and copy.
 */
export type SpecLang = 'de' | 'en' | 'it' | 'sr' | 'al';

/** Home flip-card: front copy + back (price) line */
export interface ServiceFlipCardCopy {
  title: string;
  description: string;
  flipPrice: string;
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
    keywords: string;
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
    portfolio: string;
    about: string;
    blog: string;
    contact: string;
    /** Primary header CTA → #contact */
    ctaQuote: string;
  };
  // Services preview (4 flip cards on home)
  servicesPreview: {
    title: string;
    subtitle: string;
    flipOrderCta: string;
    flipDetailsLink: string;
    webUi: ServiceFlipCardCopy;
    graphicBranding: ServiceFlipCardCopy;
    videoMotion: ServiceFlipCardCopy;
    aiContent: ServiceFlipCardCopy;
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
    h1: 'Web design, AI multimedia & digital marketing — Geislingen studio, worldwide clients',
    subheadline:
      'Websites, branding, AI-assisted content, and SEO—delivered with a clear process from Geislingen an der Steige.',
    ctaPrimary: 'Get a quote',
    ctaSecondary: 'Selected work',
    availableIn: 'DE · EN · IT · SR · AL',
  },
  seo: {
    title: "AGR Multimedia Geislingen | Web Design, AI Multimedia & Digital Marketing",
    description:
      "Web design, AI multimedia, graphic design & SEO for small businesses — studio in Geislingen an der Steige, Germany. Free consultation: agron6922@gmail.com",
    keywords:
      "web design Geislingen, AI multimedia, digital marketing, SEO, graphic design, small business website, AGR Multimedia",
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
    text: 'Let’s create something powerful together using AI, design and strategy.',
    button: 'Get a free consultation',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
    ctaQuote: 'Get a quote',
  },
  servicesPreview: {
    title: 'What I do',
    subtitle: 'Four focused areas—structured for small businesses and creators who need a premium presence without complexity.',
    flipOrderCta: 'Request now',
    flipDetailsLink: 'Service details',
    webUi: {
      title: 'Web Design & Development',
      description: 'Business websites, landing pages and UI/UX that feel clear and modern.',
      flipPrice: 'from €1,200',
      flipIncludes: 'Portfolio · SEO · Contact · Mobile-first',
    },
    graphicBranding: {
      title: 'Graphic & Branding',
      description: 'Logo, print assets and brand guidelines that look sharp and trustworthy.',
      flipPrice: 'from €650',
      flipIncludes: 'Logo · Brand kit · Print-ready files',
    },
    videoMotion: {
      title: 'AI Content & Video',
      description: 'Short-form videos, AI-generated content and social visuals for your brand.',
      flipPrice: 'from €890',
      flipIncludes: 'Social cuts · AI visuals · Motion basics',
    },
    aiContent: {
      title: 'SEO optimisation',
      description: 'Technical SEO, content structure, and ongoing improvements so the right people find you.',
      flipPrice: 'from €450',
      flipIncludes: 'Audits · On-page · Reporting',
    },
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
    intro: 'All services are grouped into three clear packages so you can quickly see how I can support your business with AI, video and web.',
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
    budgetRange: 'Budget range',
    budgetOptions: ['Under €500', '€500 – €1,500', '€1,500 – €3,000', '€3,000 – €5,000', '€5,000+', 'To be discussed'],
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
    h1: 'Webdesign, KI-Multimedia & digitales Marketing — Studio Geislingen, Kunden weltweit',
    subheadline:
      'Websites, Branding, KI-Inhalte und SEO—klarer Prozess aus Geislingen an der Steige.',
    ctaPrimary: 'Angebot anfragen',
    ctaSecondary: 'Ausgewählte Arbeiten',
    availableIn: 'DE · EN · IT · SR · AL',
  },
  seo: {
    title: "AGR Multimedia Geislingen | Webdesign, KI-Multimedia & digitales Marketing",
    description:
      "Webdesign, KI-Multimedia, Grafikdesign & SEO für Kleinunternehmen — Studio in Geislingen an der Steige. Kostenlose Beratung: agron6922@gmail.com",
    keywords:
      "Webdesign Geislingen, KI Multimedia, digitales Marketing, SEO, Grafikdesign, Website erstellen, AGR Multimedia",
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
    portfolio: 'Portfolio',
    about: 'Über mich',
    blog: 'Blog',
    contact: 'Kontakt',
    ctaQuote: 'Angebot anfragen',
  },
  servicesPreview: {
    title: 'Schwerpunkte',
    subtitle: 'Vier Bereiche—für kleine Unternehmen, die Qualität ohne Überladung suchen.',
    flipOrderCta: 'Jetzt anfragen',
    flipDetailsLink: 'Leistung ansehen',
    webUi: {
      title: 'Webdesign & Entwicklung',
      description: 'Business-Websites, Landingpages und UI/UX-Design mit klarem Aufbau.',
      flipPrice: 'ab 1.200 €',
      flipIncludes: 'Portfolio · SEO · Kontakt · Mobile-first',
    },
    graphicBranding: {
      title: 'Grafik & Branding',
      description: 'Logo, Print und Markenrichtlinien, die professionell und vertrauenswürdig wirken.',
      flipPrice: 'ab 650 €',
      flipIncludes: 'Logo · Brand-Kit · Druckfertige Dateien',
    },
    videoMotion: {
      title: 'AI Content & Video',
      description: 'Kurzvideos, AI-generierte Inhalte und Visuals für Ihre Social-Media-Kanäle.',
      flipPrice: 'ab 890 €',
      flipIncludes: 'Social-Formate · AI-Visuals · Motion-Basics',
    },
    aiContent: {
      title: 'SEO-Optimierung',
      description: 'Technisches SEO, Content-Struktur und laufende Verbesserungen für bessere Sichtbarkeit.',
      flipPrice: 'ab 450 €',
      flipIncludes: 'Audits · On-Page · Reporting',
    },
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
    intro: 'Alle Leistungen sind in drei klare Pakete gebündelt, damit Sie schnell sehen, wie ich Ihr Business mit AI, Video und Web unterstützen kann.',
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
    budgetRange: 'Budgetrahmen',
    budgetOptions: ['Unter 500 €', '500 € – 1.500 €', '1.500 € – 3.000 €', '3.000 € – 5.000 €', 'Über 5.000 €', 'Noch offen'],
    message: 'Nachricht',
    submit: 'Nachricht senden',
    successMessage: 'Vielen Dank! Ich antworte innerhalb von 24 Stunden.',
    locationLabel: 'Standort',
    locationValue: 'Geislingen an der Steige',
    socialTitle: 'Social',
  },
};

const it: SpecTranslations = {
  homeAbout: {
    lead: 'AGR Multimedia è uno studio creativo indipendente: chiarezza visiva, identità curata e risultati misurabili.',
    moreAbout: 'Profilo completo',
  },
  hero: {
    h1: 'Web design, AI multimedia e digital marketing — Geislingen e clienti globali',
    subheadline:
      'Siti, branding, contenuti AI e SEO—processo chiaro da Geislingen an der Steige.',
    ctaPrimary: 'Richiedi un preventivo',
    ctaSecondary: 'Lavori selezionati',
    availableIn: 'DE · EN · IT · SR · AL',
  },
  seo: {
    title: "AGR Multimedia Geislingen | Web Design, AI Multimedia & Digital Marketing",
    description:
      "Web design, AI multimedia, grafica e SEO per piccole imprese — studio a Geislingen an der Steige, Germania. Consulenza gratuita: agron6922@gmail.com",
    keywords:
      "web design Geislingen, AI multimedia, digital marketing, SEO, grafica, piccole imprese, AGR Multimedia",
  },
  heroProjects: {
    heading: 'Progetti in evidenza',
    projects: [
      {
        title: 'Campagna video con AI',
        description: 'Creazione di video brevi basati sull’AI per il marketing sui social.',
        result: 'Aumento di engagement e copertura.',
      },
      {
        title: 'Sito web aziendale',
        description: 'Design e sviluppo di un sito moderno per un’azienda locale.',
      },
      {
        title: 'Branding & Content',
        description: 'Branding completo e creazione di contenuti per la presenza online.',
      },
    ],
  },
  heroCta: {
    heading: 'Pronto a far crescere il tuo business?',
    text: 'Creiamo insieme qualcosa di potente con AI, design e strategia.',
    button: 'Consulenza gratuita',
  },
  nav: {
    home: 'Home',
    services: 'Servizi',
    portfolio: 'Portfolio',
    about: 'Chi sono',
    blog: 'Blog',
    contact: 'Contatti',
    ctaQuote: 'Richiedi un preventivo',
  },
  servicesPreview: {
    title: 'Cosa faccio',
    subtitle: 'Quattro aree focali—per piccole imprese che cercano qualità senza rumore.',
    flipOrderCta: 'Richiedi ora',
    flipDetailsLink: 'Dettagli servizio',
    webUi: {
      title: 'Siti web e sviluppo',
      description: 'Siti web business, landing page e UI/UX dal design chiaro e moderno.',
      flipPrice: 'da 1.200 €',
      flipIncludes: 'Portfolio · SEO · Contatti · Mobile-first',
    },
    graphicBranding: {
      title: 'Grafica & Branding',
      description: 'Logo, materiali stampa e linee guida brand professionali e coerenti.',
      flipPrice: 'da 650 €',
      flipIncludes: 'Logo · Brand kit · File stampa',
    },
    videoMotion: {
      title: 'Contenuti IA e video',
      description: 'Video brevi, contenuti generati con AI e visual per i social.',
      flipPrice: 'da 890 €',
      flipIncludes: 'Formati social · Visual AI · Motion base',
    },
    aiContent: {
      title: 'Ottimizzazione SEO',
      description: 'SEO tecnica, struttura dei contenuti e miglioramenti continui per farti trovare.',
      flipPrice: 'da 450 €',
      flipIncludes: 'Audit · On-page · Report',
    },
  },
  featuredPortfolio: {
    heading: 'Lavori selezionati',
    featuredIntro: 'Una selezione curata—portfolio completo su richiesta.',
    filterAll: 'Tutti',
    filterWeb: 'Web',
    filterGraphic: 'Grafica',
    filterPhoto: 'Foto',
    filterVideo: 'Video',
    filterAi: 'AI',
    viewDetails: 'Dettagli',
    backToPortfolio: 'Torna al portfolio',
  },
  whyMe: {
    heading: 'Perché lavorare con me',
    subtitle:
      'Adobe Creative Cloud, workflow AI moderni e comunicazione multilingue—senza overhead da agenzia.',
    benefit1: 'Comunicazione multilingue: parlo tedesco, inglese, italiano, serbo e albanese.',
    benefit2: 'Specializzato in piccole imprese e creator che cercano consegne veloci e affidabili.',
    benefit3: 'Supporto end-to-end: dalla prima idea al sito, design o video finale.',
    benefit4: 'Workflow potenziati dall\'AI per più opzioni creative in meno tempo.',
  },
  testimonials: {
    heading: 'Recensioni',
    subtitle:
      'Feedback reale di clienti che cercavano contenuti moderni e materiali marketing—con comunicazione chiara e consegna puntuale.',
    card1: {
      quote: 'Agron ha consegnato esattamente ciò che ci serviva. Professionale, veloce, ottimo lavorarci. Lo contatteremo di nuovo.',
      author: 'Cliente (esempio)',
      role: 'Titolare piccolo business',
    },
    card2: {
      quote: 'Il lavoro su video e branding ha superato le aspettative. Consigliatissimo per qualità e creatività.',
      author: 'Cliente (esempio)',
      role: 'Content creator',
    },
    card3: {
      quote: 'Dall\'idea al design finale, il processo è stato fluido e il risultato eccellente. Grazie!',
      author: 'Cliente (esempio)',
      role: 'Fondatore startup',
    },
  },
  finalCta: {
    title: 'Pronto a dare vita alla tua idea?',
    text: 'Raccontami il tuo progetto e ti suggerirò la migliore combinazione di design, video e AI.',
    button: 'Invia messaggio',
  },
  servicesPage: {
    intro: 'Tutti i servizi sono organizzati in tre pacchetti chiari, così puoi capire subito come posso aiutare il tuo business con AI, video e web.',
    webUi: {
      title: 'Siti web e sviluppo',
      description: 'Siti moderni e responsive che raccontano chiaramente il tuo business.',
      deliverables: ['Siti web business', 'Landing page', 'UI/UX design'],
      startingFrom: '',
    },
    graphicBranding: {
      title: 'Grafica e branding',
      description: 'Logo, materiali stampa e linee guida per un’identità coerente e professionale.',
      deliverables: ['Logo', 'Brand kit', 'File per stampa'],
      startingFrom: '',
    },
    videoMotion: {
      title: 'Contenuti IA e video',
      description: 'Video brevi e contenuti spinti dall’IA per social e campagne marketing.',
      deliverables: ['Video brevi (Reels, TikTok)', 'Contenuti generati con IA', 'Visual per social media'],
      startingFrom: '',
    },
    aiServices: {
      title: 'Soluzioni IA su misura',
      description: 'Soluzioni IA su misura e automazioni che supportano il tuo lavoro quotidiano.',
      deliverables: ['Applicazioni IA', 'Strumenti di automazione', 'Soluzioni digitali personalizzate'],
      startingFrom: '',
    },
    cta: 'Non sei sicuro quale pacchetto si adatti al tuo progetto? Scrivimi e ti aiuto a scegliere la soluzione giusta.',
  },
  aboutPage: {
    pageH1: "Chi è AGR Multimedia — Web design, AI multimedia e marketing a Geislingen",
    intro: 'Sono Agron Osmani, graphic designer, video editor e appassionato di AI con base a Geislingen an der Steige. Creo visual, siti e video che aiutano piccole imprese e creator a comunicare con chiarezza e a apparire professionali online.',
    skillsTitle: 'Competenze e strumenti',
    tools: [
      'Adobe Photoshop',
      'Adobe Lightroom',
      'Adobe Illustrator',
      'Adobe Premiere Pro',
      'Adobe After Effects',
      'Altri strumenti video e colore',
      'Strumenti AI per generazione immagini e automazione',
    ],
    timelineTitle: 'Tappe',
    milestone1: '2015–2018 – Primi progetti da freelance in graphic design e fotoritocco.',
    milestone2: '2019–2022 – Espansione in video editing e motion graphics.',
    milestone3: '2023–oggi – Combinazione di design, video e AI per clienti in Europa e all\'estero.',
    ctaTitle: 'Vuoi capire se sono la persona giusta per il tuo progetto? Scrivimi e ne parliamo.',
    ctaButton: 'Invia messaggio',
  },
  contactPage: {
    intro: 'Raccontami un po\' del tuo progetto e ti risponderò con idee e prossimi passi.',
    name: 'Nome',
    email: 'Email',
    serviceNeeded: 'Servizio richiesto',
    serviceOptions: {
      web: 'Web & UI Design',
      graphic: 'Graphic Design & Branding',
      video: 'Video Editing & Motion',
      ai: 'Servizi AI',
      other: 'Altro',
    },
    budgetRange: 'Fascia di budget',
    budgetOptions: ['Sotto €500', '€500 – €1.500', '€1.500 – €3.000', '€3.000 – €5.000', 'Oltre €5.000', 'Da definire'],
    message: 'Messaggio',
    submit: 'Invia messaggio',
    successMessage: 'Grazie! Risponderò entro 24 ore.',
    locationLabel: 'Dove sono',
    locationValue: 'Geislingen an der Steige',
    socialTitle: 'Social',
  },
};

const sr: SpecTranslations = {
  homeAbout: {
    lead: 'AGR Multimedia je kreativni studio usmeren na jasno pozicioniranje, uredan dizajn i merljive rezultate.',
    moreAbout: 'Kompletan profil',
  },
  hero: {
    h1: 'Web dizajn, AI multimedija i digitalni marketing — studio Geislingen, klijenti globalno',
    subheadline:
      'Sajtovi, brending, AI sadržaj i SEO—jasan proces iz Geislingen an der Steige.',
    ctaPrimary: 'Zatraži ponudu',
    ctaSecondary: 'Izabrani radovi',
    availableIn: 'DE · EN · IT · SR · AL',
  },
  seo: {
    title: "AGR Multimedia Geislingen | Web dizajn, AI multimedija i digitalni marketing",
    description:
      "Web dizajn, AI multimedija, grafički dizajn i SEO za mala preduzeća — studio u Geislingen an der Steige, Nemačka. Besplatne konsultacije: agron6922@gmail.com",
    keywords:
      "web dizajn Geislingen, AI multimedija, digitalni marketing, SEO, grafički dizajn, izrada sajta, AGR Multimedia",
  },
  heroProjects: {
    heading: 'Izdvojeni projekti',
    projects: [
      {
        title: 'AI video kampanja',
        description: 'Kreiranje kratkih AI videa za marketing na društvenim mrežama.',
        result: 'Povećano angažovanje i veći doseg.',
      },
      {
        title: 'Biznis veb sajt',
        description: 'Dizajn i razvoj modernog sajta za lokalni biznis.',
      },
      {
        title: 'Brending i sadržaj',
        description: 'Potpuni brending i kreiranje sadržaja za online prisustvo.',
      },
    ],
  },
  heroCta: {
    heading: 'Spreman da unaprediš svoj biznis?',
    text: 'Hajde da zajedno napravimo nešto moćno uz AI, dizajn i strategiju.',
    button: 'Besplatne konsultacije',
  },
  nav: {
    home: 'Početna',
    services: 'Usluge',
    portfolio: 'Portfolio',
    about: 'O meni',
    blog: 'Blog',
    contact: 'Kontakt',
    ctaQuote: 'Zatraži ponudu',
  },
  servicesPreview: {
    title: ' Oblasti rada',
    subtitle: 'Četiri fokusa—za mala preduzeća koja žele kvalitet bez pretrpanosti.',
    flipOrderCta: 'Poruči sada',
    flipDetailsLink: 'Detalji usluge',
    webUi: {
      title: 'Web dizajn i razvoj',
      description: 'Biznis sajtovi, landing stranice i UI/UX sa jasnom strukturom.',
      flipPrice: 'od 1.200 €',
      flipIncludes: 'Portfolio · SEO · Kontakt · Mobile-first',
    },
    graphicBranding: {
      title: 'Grafika i brending',
      description: 'Logo, štampa i smernice brenda koje deluju profesionalno i pouzdano.',
      flipPrice: 'od 650 €',
      flipIncludes: 'Logo · Brend kit · Fajlovi za štampu',
    },
    videoMotion: {
      title: 'AI sadržaj i video',
      description: 'Kratki video formati, AI sadržaj i vizuali za društvene mreže.',
      flipPrice: 'od 890 €',
      flipIncludes: 'Social formati · AI vizuali · Osnovna animacija',
    },
    aiContent: {
      title: 'SEO optimizacija',
      description: 'Tehnički SEO, struktura sadržaja i kontinuirana poboljšanja za bolju vidljivost.',
      flipPrice: 'od 450 €',
      flipIncludes: 'Audit · On-page · Izveštaji',
    },
  },
  featuredPortfolio: {
    heading: 'Izabrani radovi',
    featuredIntro: 'Kuratirani izbor—ceo portfolio na zahtev.',
    filterAll: 'Sve',
    filterWeb: 'Web',
    filterGraphic: 'Grafika',
    filterPhoto: 'Foto',
    filterVideo: 'Video',
    filterAi: 'AI',
    viewDetails: 'Detalji',
    backToPortfolio: 'Nazad na portfolio',
  },
  whyMe: {
    heading: 'Zašto da radite sa mnom',
    subtitle:
      'Adobe Creative Cloud, savremeni AI workflow i višejezična komunikacija—bez agencijskog overhead-a.',
    benefit1: 'Višejezična komunikacija: govorim nemački, engleski, italijanski, srpski i albanski.',
    benefit2: 'Specijalizovan za male biznise i kreatore kojima treba brza i pouzdana isporuka.',
    benefit3: 'Podrška od ideje do finalnog sajta, dizajna ili videa.',
    benefit4: 'AI poboljšani workflow-ovi za više kreativnih opcija za kraće vreme.',
  },
  testimonials: {
    heading: 'Utisci klijenata',
    subtitle:
      'Pravi utisci klijenata koji su želeli moderne vizuale i marketing materijale—bez konfuzije, uz jasnu komunikaciju i isporuku na vreme.',
    card1: {
      quote: 'Agron je isporučio tačno ono što nam je trebalo. Profesionalno, brzo, odlična saradnja. Sigurno ćemo ponovo angažovati.',
      author: 'Klijent (primer)',
      role: 'Vlasnik malog biznisa',
    },
    card2: {
      quote: 'Rad na videu i brendingu je nadmašio očekivanja. Toplo preporučujem za kvalitet i kreativnost.',
      author: 'Klijent (primer)',
      role: 'Kreator sadržaja',
    },
    card3: {
      quote: 'Od koncepta do finalnog dizajna, proces je bio gladak a rezultat odličan. Hvala!',
      author: 'Klijent (primer)',
      role: 'Osnivač startapa',
    },
  },
  finalCta: {
    title: 'Spremni da oživite svoju ideju?',
    text: 'Recite mi o svom projektu i predložiću najbolju kombinaciju dizajna, videa i AI-a.',
    button: 'Pošalji poruku',
  },
  servicesPage: {
    intro: 'Sve usluge su grupisane u tri jasne kategorije kako biste brzo videli kako mogu da podržim vaš biznis kroz AI, video i web.',
    webUi: {
      title: 'Web dizajn i razvoj',
      description: 'Moderni, responsive sajtovi i landing stranice koji jasno predstavljaju vaš biznis.',
      deliverables: ['Biznis sajtovi', 'Landing stranice', 'UI/UX dizajn'],
      startingFrom: '',
    },
    graphicBranding: {
      title: '',
      description: '',
      deliverables: [],
      startingFrom: '',
    },
    videoMotion: {
      title: 'AI sadržaj i video',
      description: 'Kratki video formati i AI sadržaji prilagođeni društvenim mrežama i marketingu.',
      deliverables: ['Kratki video (Reels, TikTok)', 'AI-generisani sadržaj', 'Vizuali za društvene mreže'],
      startingFrom: '',
    },
    aiServices: {
      title: 'Custom AI Solutions',
      description: 'Prilagođeni AI alati i automatizacije koje olakšavaju svakodnevni rad.',
      deliverables: ['AI aplikacije', 'Alati za automatizaciju', 'Custom digitalna rešenja'],
      startingFrom: '',
    },
    cta: 'Niste sigurni koji paket je najbolji za vaš projekat? Pošaljite kratku poruku i pomoći ću vam da izaberete pravo rešenje.',
  },
  aboutPage: {
    pageH1: "O AGR Multimedia — Web dizajn, AI multimedija i marketing u Geislingenu",
    intro: 'Ja sam Agron Osmani, slobodni grafički dizajner, video editor i entuzijasta za AI sa sedištem u Geislingen an der Steige. Kreiram vizuale, sajtove i video koji pomažu malim biznisima i kreatorima da jasno komuniciraju i izgledaju profesionalno na mreži.',
    skillsTitle: 'Veštine i alati',
    tools: [
      'Adobe Photoshop',
      'Adobe Lightroom',
      'Adobe Illustrator',
      'Adobe Premiere Pro',
      'Adobe After Effects',
      'Ostali video i color alati',
      'AI alati za generisanje slika i automatizaciju',
    ],
    timelineTitle: 'Vremenska linija',
    milestone1: '2015–2018 – Prvi freelance projekti u grafičkom dizajnu i obradi fotografija.',
    milestone2: '2019–2022 – Proširenje na video montažu i motion grafiku.',
    milestone3: '2023–danas – Kombinacija dizajna, videa i AI-a za klijente u Evropi i inostranstvu.',
    ctaTitle: 'Želite da znate da li sam prava osoba za vaš projekat? Pošaljite poruku i razgovarajmo.',
    ctaButton: 'Pošalji poruku',
  },
  contactPage: {
    intro: 'Recite mi nešto o svom projektu i javiću vam se sa idejama i sledećim koracima.',
    name: 'Ime',
    email: 'Email',
    serviceNeeded: 'Potrebna usluga',
    serviceOptions: {
      web: 'Web & UI dizajn',
      graphic: 'Grafički dizajn i brending',
      video: 'Video montaža i motion',
      ai: 'AI usluge',
      other: 'Ostalo',
    },
    budgetRange: 'Raspon budžeta',
    budgetOptions: ['Do 500 €', '500 – 1.500 €', '1.500 – 3.000 €', '3.000 – 5.000 €', 'Preko 5.000 €', 'Da se dogovorimo'],
    message: 'Poruka',
    submit: 'Pošalji poruku',
    successMessage: 'Hvala! Odgovoriću u roku od 24 sata.',
    locationLabel: 'Lokacija',
    locationValue: 'Geislingen an der Steige',
    socialTitle: 'Društvene mreže',
  },
};

const al: SpecTranslations = {
  homeAbout: {
    lead: 'AGR Multimedia është një studio krijuese e fokusuar në pozicionim të qartë dhe prezencë profesionale.',
    moreAbout: 'Profili i plotë',
  },
  hero: {
    h1: 'Web design, AI multimedia dhe marketing digjital — studio Geislingen, klientë globalisht',
    subheadline:
      'Faqe, branding, përmbajtje AI dhe SEO—proces i qartë nga Geislingen an der Steige.',
    ctaPrimary: 'Kërko ofertë',
    ctaSecondary: 'Punë të zgjedhura',
    availableIn: 'DE · EN · IT · SR · AL',
  },
  seo: {
    title: "AGR Multimedia Geislingen | Web design, AI multimedia dhe marketing digjital",
    description:
      "Web design, AI multimedia, dizajn grafik dhe SEO për biznese të vogla — studio në Geislingen an der Steige, Gjermani. Konsultë falas: agron6922@gmail.com",
    keywords:
      "dizajn web Geislingen, AI multimedia, marketing digjital, SEO, dizajn grafik, faqe interneti, AGR Multimedia",
  },
  heroProjects: {
    heading: 'Projektet e veçuara',
    projects: [
      {
        title: 'Fushatë video me AI',
        description: 'Krijim videosh të shkurtra me AI për marketing në rrjete sociale.',
        result: 'Rritje e angazhimit dhe shtrirjes.',
      },
      {
        title: 'Faqe web biznesi',
        description: 'Dizajnim dhe zhvillim i një faqeje moderne për një biznes lokal.',
      },
      {
        title: 'Branding & Content',
        description: 'Branding i plotë dhe krijim përmbajtjeje për praninë online.',
      },
    ],
  },
  heroCta: {
    heading: 'Gati për të rritur biznesin tënd?',
    text: 'Le të krijojmë diçka të fuqishme së bashku me AI, dizajn dhe strategji.',
    button: 'Konsultë falas',
  },
  nav: {
    home: 'Kryefaqja',
    services: 'Shërbime',
    portfolio: 'Portfolio',
    about: 'Rreth meje',
    blog: 'Blog',
    contact: 'Kontakt',
    ctaQuote: 'Kërko ofertë',
  },
  servicesPreview: {
    title: 'Fokusi im',
    subtitle: 'Katër fusha—për biznese të vogla që duan cilësi pa mbingarkesë.',
    flipOrderCta: 'Porosit tani',
    flipDetailsLink: 'Detajet e shërbimit',
    webUi: {
      title: 'Dizajn ueb-i dhe zhvillim',
      description: 'Faqe biznesi, landing faqe dhe UI/UX me strukturë të qartë.',
      flipPrice: 'nga 1.200 €',
      flipIncludes: 'Portfolio · SEO · Kontakt · Mobile-first',
    },
    graphicBranding: {
      title: 'Grafikë & branding',
      description: 'Logo, print dhe udhëzime marke që duken profesionale dhe të besueshme.',
      flipPrice: 'nga 650 €',
      flipIncludes: 'Logo · Brand kit · Skedarë gati për shtyp',
    },
    videoMotion: {
      title: 'Përmbajtje IA dhe video',
      description: 'Video të shkurtra, përmbajtje të gjeneruar me inteligencë artificiale dhe vizuale për rrjetet sociale.',
      flipPrice: 'nga 890 €',
      flipIncludes: 'Formate sociale · Vizuale me IA · Motion bazë',
    },
    aiContent: {
      title: 'Optimizim SEO',
      description: 'SEO teknik, strukturë përmbajtjeje dhe përmirësime të vazhdueshme për dukshmëri më të mirë.',
      flipPrice: 'nga 450 €',
      flipIncludes: 'Audit · On-page · Raporte',
    },
  },
  featuredPortfolio: {
    heading: 'Punë të zgjedhura',
    featuredIntro: 'Një përzgjedhje e kuruar—portofoli i plotë me kërkesë.',
    filterAll: 'Të gjitha',
    filterWeb: 'Web',
    filterGraphic: 'Grafikë',
    filterPhoto: 'Foto',
    filterVideo: 'Video',
    filterAi: 'AI',
    viewDetails: 'Detaje',
    backToPortfolio: 'Kthehu te portofoli',
  },
  whyMe: {
    heading: 'Pse të punoni me mua',
    subtitle:
      'Adobe Creative Cloud, workflow moderne me AI dhe komunikim shumëgjuhësh—pa overhead agjencie.',
    benefit1: 'Komunikim shumëgjuhësh: flas gjermanisht, anglisht, italisht, serbisht dhe shqip.',
    benefit2: 'Specializuar në biznese të vogla dhe krijues që kanë nevojë për dorëzim të shpejtë dhe të besueshëm.',
    benefit3: 'Mbështetje nga ideja e parë deri te faqja, dizajni ose videoja përfundimtare.',
    benefit4: 'Procese të përmirësuara me AI për më shumë opsione krijuese në më pak kohë.',
  },
  testimonials: {
    heading: 'Përshtypjet e klientëve',
    subtitle:
      'Përshtypje reale nga klientë që kërkuan përmbajtje moderne dhe materiale marketingu—me komunikim të qartë dhe dorëzim në kohë.',
    card1: {
      quote: 'Agron dërgoi pikërisht atë që na duhej. Profesional, i shpejtë, punë e këndshme. Do të punësojmë përsëri.',
      author: 'Klient (shembull)',
      role: 'Pronar biznesi të vogël',
    },
    card2: {
      quote: 'Puna e videove dhe brandingut tejkaluan pritjet. Rekomandoj fort për cilësi dhe kreativitet.',
      author: 'Klient (shembull)',
      role: 'Krijues përmbajtjesh',
    },
    card3: {
      quote: 'Nga koncepti te dizajni përfundimtar, procesi ishte i qetë dhe rezultati i shkëlqyer. Faleminderit!',
      author: 'Klient (shembull)',
      role: 'Themelues startup',
    },
  },
  finalCta: {
    title: 'Gati t\'i jepni jetë ideës tuaj?',
    text: 'Më tregoni për projektin tuaj dhe do të sugjeroj kombinimin më të mirë të dizajnit, videos dhe AI.',
    button: 'Dërgo mesazh',
  },
  servicesPage: {
    intro: 'Të gjitha shërbimet janë të organizuara në tre kategori të qarta që të shihni shpejt si mund të ndihmoj biznesin tuaj me AI, video dhe web.',
    webUi: {
      title: 'Dizajn ueb-i dhe zhvillim',
      description: 'Faqe moderne dhe responsive që prezantojnë qartë biznesin tuaj.',
      deliverables: ['Faqe web biznesi', 'Landing faqe', 'Dizajn UI/UX'],
      startingFrom: '',
    },
    graphicBranding: {
      title: 'Dizajn grafik dhe branding',
      description: 'Logo, print dhe udhëzime marke për një identitet profesional dhe të qëndrueshëm.',
      deliverables: ['Logo', 'Brand kit', 'Skedarë gati për shtyp'],
      startingFrom: '',
    },
    videoMotion: {
      title: 'Përmbajtje IA dhe video',
      description: 'Video të shkurtra dhe përmbajtje me inteligencë artificiale për rrjete sociale dhe marketing.',
      deliverables: ['Video të shkurtra (Reels, TikTok)', 'Përmbajtje e gjeneruar me IA', 'Vizuale për rrjete sociale'],
      startingFrom: '',
    },
    aiServices: {
      title: 'Zgjidhje IA të personalizuara',
      description: 'Mjete IA dhe automatizime të personalizuara që lehtësojnë punën e përditshme.',
      deliverables: ['Aplikacione IA', 'Mjete automatizimi', 'Zgjidhje digjitale të personalizuara'],
      startingFrom: '',
    },
    cta: 'Nuk jeni i sigurt cili paket është i duhuri për projektin tuaj? Më dërgoni një mesazh të shkurtër dhe do t’ju ndihmoj të zgjidhni zgjidhjen e duhur.',
  },
  aboutPage: {
    pageH1: "Rreth AGR Multimedia — Web design, AI multimedia dhe marketing në Geislingen",
    intro: 'Unë jam Agron Osmani, dizajner grafik i pavarur, editor video dhe entuziast AI me bazë në Geislingen an der Steige. Krijoj vizuale, faqe web dhe video që ndihmojnë bizneset e vogla dhe krijuesit të komunikojnë qartë dhe të duken profesionalisht online.',
    skillsTitle: 'Aftësi dhe mjete',
    tools: [
      'Adobe Photoshop',
      'Adobe Lightroom',
      'Adobe Illustrator',
      'Adobe Premiere Pro',
      'Adobe After Effects',
      'Mjete të tjera video dhe ngjyrë',
      'Mjete AI për gjenerim imazhesh dhe automatizim',
    ],
    timelineTitle: 'Kronologjia',
    milestone1: '2015–2018 – Projektet e para si freelancer në dizajn grafik dhe redaktim fotosh.',
    milestone2: '2019–2022 – Zgjerim në montim video dhe grafikë lëvizje.',
    milestone3: '2023–sot – Kombinim dizajni, video dhe AI për klientë në Evropë dhe jashtë.',
    ctaTitle: 'Dëshironi të dini nëse jam i përshtatshëm për projektin tuaj? Më dërgoni një mesazh dhe le të flasim.',
    ctaButton: 'Dërgo mesazh',
  },
  contactPage: {
    intro: 'Më tregoni pak për projektin tuaj dhe do t\'ju përgjigjem me ide dhe hapat e ardhshëm.',
    name: 'Emri',
    email: 'Email',
    serviceNeeded: 'Shërbimi i nevojshëm',
    serviceOptions: {
      web: 'Web & UI Dizajn',
      graphic: 'Dizajn grafik & branding',
      video: 'Video editing & motion',
      ai: 'Shërbime AI',
      other: 'Tjetër',
    },
    budgetRange: 'Gama e buxhetit',
    budgetOptions: ['Nën 500 €', '500 – 1.500 €', '1.500 – 3.000 €', '3.000 – 5.000 €', 'Mbi 5.000 €', 'Për t\'u diskutuar'],
    message: 'Mesazhi',
    submit: 'Dërgo mesazh',
    successMessage: 'Faleminderit! Do të përgjigjem brenda 24 orëve.',
    locationLabel: 'Vendndodhja',
    locationValue: 'Geislingen an der Steige',
    socialTitle: 'Rrjetet sociale',
  },
};

const specByLang: Record<SpecLang, SpecTranslations> = { en, de, it, sr, al };

/** Map main i18n language code to spec language (e.g. 'sq' -> 'al' for Albanian). */
export function toSpecLang(lang: string): SpecLang {
  if (lang === 'sq' || lang === 'al') return 'al';
  if (lang === 'de' || lang === 'en' || lang === 'it' || lang === 'sr') return lang;
  return 'en';
}

export function getSpecTranslations(lang: string): SpecTranslations {
  return specByLang[toSpecLang(lang)] ?? en;
}

/** Display codes for language switcher: DE | EN | IT | SR | AL */
export const specLangCodes: SpecLang[] = ['de', 'en', 'it', 'sr', 'al'];
export const specLangDisplay: Record<SpecLang, string> = {
  de: 'DE',
  en: 'EN',
  it: 'IT',
  sr: 'SR',
  al: 'AL',
};
