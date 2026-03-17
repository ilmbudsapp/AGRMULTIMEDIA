/**
 * Translations for the modernized portfolio spec (DE, EN, IT, SR, AL).
 * Used alongside main i18n for new sections and copy.
 */
export type SpecLang = 'de' | 'en' | 'it' | 'sr' | 'al';

export interface SpecTranslations {
  // Hero
  hero: {
    h1: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    availableIn: string;
  };
  // Nav (order: Home, Services, Portfolio, About, Blog, Contact)
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    blog: string;
    contact: string;
  };
  // Services preview (4 cards on home)
  servicesPreview: {
    webUi: { title: string; description: string };
    graphicBranding: { title: string; description: string };
    videoMotion: { title: string; description: string };
    aiContent: { title: string; description: string };
  };
  // Featured portfolio
  featuredPortfolio: {
    heading: string;
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
    benefit1: string;
    benefit2: string;
    benefit3: string;
    benefit4: string;
  };
  // Testimonials
  testimonials: {
    heading: string;
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
  hero: {
    h1: 'I help businesses grow with AI-powered content & websites',
    subheadline: 'Web design, video content and AI solutions that bring real results.',
    ctaPrimary: 'Get a free consultation',
    ctaSecondary: 'View portfolio',
    availableIn: 'Available in DE · EN · IT · SR · AL',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About',
    blog: 'Blog',
    contact: 'Contact',
  },
  servicesPreview: {
    webUi: {
      title: 'Web & UI Design',
      description: 'Custom websites and landing pages that load fast and look great on all devices.',
    },
    graphicBranding: {
      title: 'Graphic Design & Branding',
      description: 'Logos, brand identities and social media visuals that make your business recognizable.',
    },
    videoMotion: {
      title: 'Video Editing & Motion',
      description: 'Story-driven edits for YouTube, social media and ads with clean cuts and strong pacing.',
    },
    aiContent: {
      title: 'AI‑Powered Content & Automation',
      description: 'AI-assisted concepts, image generation and workflows that save you time and money.',
    },
  },
  featuredPortfolio: {
    heading: 'Selected projects',
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
    benefit1: 'Multilingual communication: I speak German, English, Italian, Serbian and Albanian.',
    benefit2: 'Specialized in small businesses and creators who need fast and reliable delivery.',
    benefit3: 'End-to-end support: from first idea to final website, design or video.',
    benefit4: 'AI-enhanced workflows for more creative options in less time.',
  },
  testimonials: {
    heading: 'Client feedback',
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
    intro: 'I combine graphic design, web development, video editing and AI to offer complete multimedia solutions for your brand. Choose one service or mix several into a custom package.',
    webUi: {
      title: 'Web & UI Design',
      description: 'Custom websites and landing pages that load fast and look great on all devices. I build responsive, SEO-friendly sites tailored to your goals.',
      deliverables: ['Responsive websites', 'Landing pages', 'UI/UX design', 'WordPress & custom CMS'],
      startingFrom: 'Starting from: package-based pricing (on request).',
    },
    graphicBranding: {
      title: 'Graphic Design & Branding',
      description: 'Logos, brand identities and social media visuals that make your business recognizable. Consistent design across all touchpoints.',
      deliverables: ['Brand identity', 'Logo design', 'Social media kit', 'Print materials'],
      startingFrom: 'Starting from: package-based pricing (on request).',
    },
    videoMotion: {
      title: 'Video Editing & Motion',
      description: 'Story-driven edits for YouTube, social media and ads with clean cuts and strong pacing. Motion graphics and color grading included.',
      deliverables: ['YouTube edits', 'Short ads', 'Social media clips', 'Motion graphics'],
      startingFrom: 'Starting from: package-based pricing (on request).',
    },
    aiServices: {
      title: 'AI Services',
      description: 'AI-assisted concepts, image generation and workflows that save you time and money. From ideation to automation.',
      deliverables: ['AI concepts', 'Image generation', 'Workflow consulting', 'Process automation'],
      startingFrom: 'Starting from: package-based pricing (on request).',
    },
    cta: "Not sure which service fits your project? Send me a short message and I'll help you choose the right combination.",
  },
  aboutPage: {
    intro: "I'm Agron Osmani, a freelance graphic designer, video editor and AI enthusiast based in Geislingen an der Steige, Germany. I create visuals, websites and videos that help small businesses and creators communicate clearly and look professional online.",
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
    milestone3: '2023–today – Combining design, video and AI for clients in Germany and abroad.',
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
    locationValue: 'Geislingen an der Steige, Germany',
    socialTitle: 'Social',
  },
};

const de: SpecTranslations = {
  hero: {
    h1: 'Ich helfe Unternehmen mit AI-Content und Websites zu wachsen',
    subheadline: 'Webdesign, Video und AI-Lösungen für echte Ergebnisse.',
    ctaPrimary: 'Kostenlose Beratung',
    ctaSecondary: 'Portfolio ansehen',
    availableIn: 'Verfügbar in DE · EN · IT · SR · AL',
  },
  nav: {
    home: 'Home',
    services: 'Leistungen',
    portfolio: 'Portfolio',
    about: 'Über mich',
    blog: 'Blog',
    contact: 'Kontakt',
  },
  servicesPreview: {
    webUi: {
      title: 'Web & UI Design',
      description: 'Individuelle Websites und Landingpages, schnell und responsiv auf allen Geräten.',
    },
    graphicBranding: {
      title: 'Grafikdesign & Branding',
      description: 'Logos, Brand-Identitäten und Social-Media-Visuals, die Ihr Unternehmen wiedererkennbar machen.',
    },
    videoMotion: {
      title: 'Video Editing & Motion',
      description: 'Storygetriebene Edits für YouTube, Social Media und Ads mit klaren Schnitten und gutem Tempo.',
    },
    aiContent: {
      title: 'KI-gestützte Inhalte & Automatisierung',
      description: 'KI-unterstützte Konzepte, Bildgenerierung und Workflows, die Zeit und Kosten sparen.',
    },
  },
  featuredPortfolio: {
    heading: 'Ausgewählte Projekte',
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
    benefit1: 'Mehrsprachige Kommunikation: Ich spreche Deutsch, Englisch, Italienisch, Serbisch und Albanisch.',
    benefit2: 'Spezialisiert auf kleine Unternehmen und Creator mit Bedarf an schneller und zuverlässiger Lieferung.',
    benefit3: 'End-to-End-Betreuung: von der ersten Idee bis zur fertigen Website, zum Design oder Video.',
    benefit4: 'KI-gestützte Workflows für mehr kreative Optionen in kürzerer Zeit.',
  },
  testimonials: {
    heading: 'Kundenstimmen',
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
    intro: 'Ich verbinde Grafikdesign, Webentwicklung, Video-Schnitt und KI zu kompletten Multimedia-Lösungen für Ihre Marke. Wählen Sie eine Leistung oder kombinieren Sie mehrere in einem individuellen Paket.',
    webUi: {
      title: 'Web & UI Design',
      description: 'Individuelle Websites und Landingpages, schnell und responsiv auf allen Geräten. Ich erstelle zielgerichtete, SEO-freundliche Auftritte.',
      deliverables: ['Responsive Websites', 'Landingpages', 'UI/UX-Design', 'WordPress & Custom CMS'],
      startingFrom: 'Ab: paketbasierte Preise (auf Anfrage).',
    },
    graphicBranding: {
      title: 'Grafikdesign & Branding',
      description: 'Logos, Markenidentitäten und Social-Media-Visuals, die Ihr Unternehmen wiedererkennbar machen.',
      deliverables: ['Markenidentität', 'Logo-Design', 'Social-Media-Kit', 'Druckmaterialien'],
      startingFrom: 'Ab: paketbasierte Preise (auf Anfrage).',
    },
    videoMotion: {
      title: 'Video Editing & Motion',
      description: 'Storygetriebene Edits für YouTube, Social Media und Werbung mit klaren Schnitten und gutem Tempo.',
      deliverables: ['YouTube-Edits', 'Kurzwerbung', 'Social-Media-Clips', 'Motion Graphics'],
      startingFrom: 'Ab: paketbasierte Preise (auf Anfrage).',
    },
    aiServices: {
      title: 'KI-Services',
      description: 'KI-unterstützte Konzepte, Bildgenerierung und Workflows, die Zeit und Kosten sparen.',
      deliverables: ['KI-Konzepte', 'Bildgenerierung', 'Workflow-Beratung', 'Prozessautomatisierung'],
      startingFrom: 'Ab: paketbasierte Preise (auf Anfrage).',
    },
    cta: 'Unsichere, welche Leistung zu Ihrem Projekt passt? Schreiben Sie mir kurz – ich helfe bei der richtigen Kombination.',
  },
  aboutPage: {
    intro: 'Ich bin Agron Osmani, freiberuflicher Grafikdesigner, Video-Editor und KI-Enthusiast in Geislingen an der Steige, Deutschland. Ich erstelle Visuals, Websites und Videos, mit denen kleine Unternehmen und Creator klar kommunizieren und online professionell auftreten.',
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
    milestone3: '2023–heute – Kombination aus Design, Video und KI für Kunden in Deutschland und international.',
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
    locationValue: 'Geislingen an der Steige, Deutschland',
    socialTitle: 'Social',
  },
};

const it: SpecTranslations = {
  hero: {
    h1: 'Aiuto le aziende a crescere con contenuti e siti web basati sull\'AI',
    subheadline: 'Web design, video e soluzioni AI che portano risultati concreti.',
    ctaPrimary: 'Consulenza gratuita',
    ctaSecondary: 'Guarda il portfolio',
    availableIn: 'Disponibile in DE · EN · IT · SR · AL',
  },
  nav: {
    home: 'Home',
    services: 'Servizi',
    portfolio: 'Portfolio',
    about: 'Chi sono',
    blog: 'Blog',
    contact: 'Contatti',
  },
  servicesPreview: {
    webUi: {
      title: 'Web & UI Design',
      description: 'Siti web e landing page su misura, veloci e responsive su ogni dispositivo.',
    },
    graphicBranding: {
      title: 'Graphic Design & Branding',
      description: 'Loghi, identità visive e contenuti per i social che rendono il tuo brand riconoscibile.',
    },
    videoMotion: {
      title: 'Video Editing & Motion',
      description: 'Montaggi video narrativi per YouTube, social e ads con ritmo e tagli puliti.',
    },
    aiContent: {
      title: 'Contenuti e automazione con AI',
      description: 'Concept, immagini e flussi di lavoro assistiti dall\'AI per risparmiare tempo e budget.',
    },
  },
  featuredPortfolio: {
    heading: 'Progetti selezionati',
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
    benefit1: 'Comunicazione multilingue: parlo tedesco, inglese, italiano, serbo e albanese.',
    benefit2: 'Specializzato in piccole imprese e creator che cercano consegne veloci e affidabili.',
    benefit3: 'Supporto end-to-end: dalla prima idea al sito, design o video finale.',
    benefit4: 'Workflow potenziati dall\'AI per più opzioni creative in meno tempo.',
  },
  testimonials: {
    heading: 'Recensioni',
    card1: {
      quote: 'Agron ha consegnato esattamente ciò che ci serviva. Professionale, veloce, ottimo lavorarci. Lo contatteremo di nuovo.',
      author: 'Cliente placeholder',
      role: 'Titolare piccolo business',
    },
    card2: {
      quote: 'Il lavoro su video e branding ha superato le aspettative. Consigliatissimo per qualità e creatività.',
      author: 'Cliente placeholder',
      role: 'Content creator',
    },
    card3: {
      quote: 'Dall\'idea al design finale, il processo è stato fluido e il risultato eccellente. Grazie!',
      author: 'Cliente placeholder',
      role: 'Fondatore startup',
    },
  },
  finalCta: {
    title: 'Pronto a dare vita alla tua idea?',
    text: 'Raccontami il tuo progetto e ti suggerirò la migliore combinazione di design, video e AI.',
    button: 'Invia messaggio',
  },
  servicesPage: {
    intro: 'Unisco graphic design, sviluppo web, video editing e AI per offrirti soluzioni multimediali complete per il tuo brand. Scegli un servizio o combina più opzioni in un pacchetto su misura.',
    webUi: {
      title: 'Web & UI Design',
      description: 'Siti web e landing page su misura, veloci e responsive. Creo siti responsive e SEO-friendly in linea con i tuoi obiettivi.',
      deliverables: ['Siti responsive', 'Landing page', 'UI/UX design', 'WordPress e CMS custom'],
      startingFrom: 'A partire da: prezzi a pacchetto (su richiesta).',
    },
    graphicBranding: {
      title: 'Graphic Design & Branding',
      description: 'Loghi, identità visive e contenuti per i social che rendono il tuo brand riconoscibile.',
      deliverables: ['Identità di brand', 'Logo', 'Kit social media', 'Materiali stampa'],
      startingFrom: 'A partire da: prezzi a pacchetto (su richiesta).',
    },
    videoMotion: {
      title: 'Video Editing & Motion',
      description: 'Montaggi narrativi per YouTube, social e pubblicità con ritmo e tagli puliti.',
      deliverables: ['Editing YouTube', 'Spot brevi', 'Clip social', 'Motion graphics'],
      startingFrom: 'A partire da: prezzi a pacchetto (su richiesta).',
    },
    aiServices: {
      title: 'Servizi AI',
      description: 'Concept, immagini e workflow assistiti dall\'AI per risparmiare tempo e budget.',
      deliverables: ['Concept AI', 'Generazione immagini', 'Consulenza workflow', 'Automazione processi'],
      startingFrom: 'A partire da: prezzi a pacchetto (su richiesta).',
    },
    cta: 'Non sei sicuro quale servizio si adatti al tuo progetto? Scrivimi e ti aiuto a scegliere la combinazione giusta.',
  },
  aboutPage: {
    intro: 'Sono Agron Osmani, graphic designer, video editor e appassionato di AI con base a Geislingen an der Steige, Germania. Creo visual, siti e video che aiutano piccole imprese e creator a comunicare con chiarezza e a apparire professionali online.',
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
    milestone3: '2023–oggi – Combinazione di design, video e AI per clienti in Germania e all\'estero.',
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
    locationValue: 'Geislingen an der Steige, Germania',
    socialTitle: 'Social',
  },
};

const sr: SpecTranslations = {
  hero: {
    h1: 'Pomažem biznisima da rastu uz AI sadržaj i web stranice',
    subheadline: 'Web dizajn, video sadržaj i AI rešenja koja donose rezultate.',
    ctaPrimary: 'Besplatne konsultacije',
    ctaSecondary: 'Pogledaj portfolio',
    availableIn: 'Dostupno na DE · EN · IT · SR · AL',
  },
  nav: {
    home: 'Početna',
    services: 'Usluge',
    portfolio: 'Portfolio',
    about: 'O meni',
    blog: 'Blog',
    contact: 'Kontakt',
  },
  servicesPreview: {
    webUi: {
      title: 'Web & UI dizajn',
      description: 'Prilagođeni sajtovi i landing stranice, brzi i prilagođeni svim uređajima.',
    },
    graphicBranding: {
      title: 'Grafički dizajn i brending',
      description: 'Logotipi, vizuelni identitet i sadržaj za društvene mreže koji čine vaš brend prepoznatljivim.',
    },
    videoMotion: {
      title: 'Video montaža i motion',
      description: 'Story-based montaže za YouTube, društvene mreže i reklame, sa jasnim rezovima i dobrim ritmom.',
    },
    aiContent: {
      title: 'AI sadržaj i automatizacija',
      description: 'AI podrška za koncepte, generisanje slika i procese koji vam štede vreme i novac.',
    },
  },
  featuredPortfolio: {
    heading: 'Izabrani projekti',
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
    benefit1: 'Višejezična komunikacija: govorim nemački, engleski, italijanski, srpski i albanski.',
    benefit2: 'Specijalizovan za male biznise i kreatore kojima treba brza i pouzdana isporuka.',
    benefit3: 'Podrška od ideje do finalnog sajta, dizajna ili videa.',
    benefit4: 'AI poboljšani workflow-ovi za više kreativnih opcija za kraće vreme.',
  },
  testimonials: {
    heading: 'Utisci klijenata',
    card1: {
      quote: 'Agron je isporučio tačno ono što nam je trebalo. Profesionalno, brzo, odlična saradnja. Sigurno ćemo ponovo angažovati.',
      author: 'Placeholder klijent',
      role: 'Vlasnik malog biznisa',
    },
    card2: {
      quote: 'Rad na videu i brendingu je nadmašio očekivanja. Toplo preporučujem za kvalitet i kreativnost.',
      author: 'Placeholder klijent',
      role: 'Kreator sadržaja',
    },
    card3: {
      quote: 'Od koncepta do finalnog dizajna, proces je bio gladak a rezultat odličan. Hvala!',
      author: 'Placeholder klijent',
      role: 'Osnivač startapa',
    },
  },
  finalCta: {
    title: 'Spremni da oživite svoju ideju?',
    text: 'Recite mi o svom projektu i predložiću najbolju kombinaciju dizajna, videa i AI-a.',
    button: 'Pošalji poruku',
  },
  servicesPage: {
    intro: 'Kombinujem grafički dizajn, web razvoj, video montažu i AI u kompletna multimedijalna rešenja za vaš brend. Izaberite jednu uslugu ili kombinujte nekoliko u prilagođeni paket.',
    webUi: {
      title: 'Web & UI dizajn',
      description: 'Prilagođeni sajtovi i landing stranice, brzi i responsive. Pravim responsive, SEO-prijateljne sajtove prilagođene vašim ciljevima.',
      deliverables: ['Responsive sajtovi', 'Landing stranice', 'UI/UX dizajn', 'WordPress i custom CMS'],
      startingFrom: 'Početna cena: paketna (na upit).',
    },
    graphicBranding: {
      title: 'Grafički dizajn i brending',
      description: 'Logotipi, vizuelni identitet i sadržaj za društvene mreže koji čine vaš brend prepoznatljivim.',
      deliverables: ['Brend identitet', 'Dizajn logotipa', 'Kit za društvene mreže', 'Štampani materijali'],
      startingFrom: 'Početna cena: paketna (na upit).',
    },
    videoMotion: {
      title: 'Video montaža i motion',
      description: 'Story-based montaže za YouTube, društvene mreže i reklame sa jasnim rezovima i dobrim ritmom.',
      deliverables: ['YouTube montaže', 'Kratke reklame', 'Clipovi za društvene mreže', 'Motion grafika'],
      startingFrom: 'Početna cena: paketna (na upit).',
    },
    aiServices: {
      title: 'AI usluge',
      description: 'AI podrška za koncepte, generisanje slika i procese koji štede vreme i novac.',
      deliverables: ['AI koncepti', 'Generisanje slika', 'Konsultacije workflow', 'Automatizacija procesa'],
      startingFrom: 'Početna cena: paketna (na upit).',
    },
    cta: 'Niste sigurni koja usluga odgovara vašem projektu? Pošaljite kratku poruku i pomoći ću vam da izaberete pravu kombinaciju.',
  },
  aboutPage: {
    intro: 'Ja sam Agron Osmani, slobodni grafički dizajner, video editor i entuzijasta za AI sa sedištem u Geislingen an der Steige, Nemačka. Kreiram vizuale, sajtove i video koji pomažu malim biznisima i kreatorima da jasno komuniciraju i izgledaju profesionalno na mreži.',
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
    milestone3: '2023–danas – Kombinacija dizajna, videa i AI-a za klijente u Nemačkoj i inostranstvu.',
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
    locationValue: 'Geislingen an der Steige, Nemačka',
    socialTitle: 'Društvene mreže',
  },
};

const al: SpecTranslations = {
  hero: {
    h1: 'Ndihmoj bizneset të rriten me përmbajtje dhe faqe web me AI',
    subheadline: 'Web dizajn, video dhe zgjidhje AI që sjellin rezultate reale.',
    ctaPrimary: 'Konsultë falas',
    ctaSecondary: 'Shiko portofolin',
    availableIn: 'I disponueshëm në DE · EN · IT · SR · AL',
  },
  nav: {
    home: 'Kryefaqja',
    services: 'Shërbime',
    portfolio: 'Portfolio',
    about: 'Rreth meje',
    blog: 'Blog',
    contact: 'Kontakt',
  },
  servicesPreview: {
    webUi: {
      title: 'Web & UI Dizajn',
      description: 'Faqe web dhe landing faqe të personalizuara, të shpejta dhe responsive në çdo pajisje.',
    },
    graphicBranding: {
      title: 'Dizajn grafik & branding',
      description: 'Logo, identitet vizual dhe përmbajtje për rrjete sociale që e bëjnë markën tuaj të dallueshme.',
    },
    videoMotion: {
      title: 'Video editing & motion',
      description: 'Montazhe video me histori për YouTube, rrjete sociale dhe reklama me ritëm dhe prerje të pastra.',
    },
    aiContent: {
      title: 'Përmbajtje dhe automatizim me AI',
      description: 'Koncepte, imazhe dhe procese të ndihmuara nga AI që kursejnë kohë dhe buxhet.',
    },
  },
  featuredPortfolio: {
    heading: 'Projekte të përzgjedhura',
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
    benefit1: 'Komunikim shumëgjuhësh: flas gjermanisht, anglisht, italisht, serbisht dhe shqip.',
    benefit2: 'Specializuar në biznese të vogla dhe krijues që kanë nevojë për dorëzim të shpejtë dhe të besueshëm.',
    benefit3: 'Mbështetje nga ideja e parë deri te faqja, dizajni ose videoja përfundimtare.',
    benefit4: 'Procese të përmirësuara me AI për më shumë opsione krijuese në më pak kohë.',
  },
  testimonials: {
    heading: 'Përshtypjet e klientëve',
    card1: {
      quote: 'Agron dërgoi pikërisht atë që na duhej. Profesional, i shpejtë, punë e këndshme. Do të punësojmë përsëri.',
      author: 'Klient placeholder',
      role: 'Pronar biznesi të vogël',
    },
    card2: {
      quote: 'Puna e videove dhe brandingut tejkaluan pritjet. Rekomandoj fort për cilësi dhe kreativitet.',
      author: 'Klient placeholder',
      role: 'Krijues përmbajtjesh',
    },
    card3: {
      quote: 'Nga koncepti te dizajni përfundimtar, procesi ishte i qetë dhe rezultati i shkëlqyer. Faleminderit!',
      author: 'Klient placeholder',
      role: 'Themelues startup',
    },
  },
  finalCta: {
    title: 'Gati t\'i jepni jetë ideës tuaj?',
    text: 'Më tregoni për projektin tuaj dhe do të sugjeroj kombinimin më të mirë të dizajnit, videos dhe AI.',
    button: 'Dërgo mesazh',
  },
  servicesPage: {
    intro: 'Kombinoj dizajnin grafik, zhvillimin web, montimin e videos dhe AI për të ofruar zgjidhje të plota multimediale për markën tuaj. Zgjidhni një shërbim ose kombinoni disa në një paketë të përshtatshme.',
    webUi: {
      title: 'Web & UI Dizajn',
      description: 'Faqe web dhe landing faqe të personalizuara, të shpejta dhe responsive. Ndërtoj faqe responsive dhe miqësore për SEO.',
      deliverables: ['Faqe web responsive', 'Landing faqe', 'Dizajn UI/UX', 'WordPress dhe CMS custom'],
      startingFrom: 'Duke filluar nga: çmime sipas paketës (me kërkesë).',
    },
    graphicBranding: {
      title: 'Dizajn grafik & branding',
      description: 'Logo, identitet vizual dhe përmbajtje për rrjete sociale që e bëjnë markën tuaj të dallueshme.',
      deliverables: ['Identiteti i markës', 'Dizajn logo', 'Kit për rrjete sociale', 'Materiale printimi'],
      startingFrom: 'Duke filluar nga: çmime sipas paketës (me kërkesë).',
    },
    videoMotion: {
      title: 'Video editing & motion',
      description: 'Montazhe me histori për YouTube, rrjete sociale dhe reklama me ritëm dhe prerje të pastra.',
      deliverables: ['Montazhe YouTube', 'Reklama të shkurtra', 'Klipa për rrjete sociale', 'Grafikë lëvizje'],
      startingFrom: 'Duke filluar nga: çmime sipas paketës (me kërkesë).',
    },
    aiServices: {
      title: 'Shërbime AI',
      description: 'Koncepte, imazhe dhe procese të ndihmuara nga AI që kursejnë kohë dhe buxhet.',
      deliverables: ['Koncepte AI', 'Gjenerim imazhesh', 'Konsultime për procese', 'Automatizim procesesh'],
      startingFrom: 'Duke filluar nga: çmime sipas paketës (me kërkesë).',
    },
    cta: 'Nuk jeni i sigurt cili shërbim i përshtatet projektit tuaj? Më dërgoni një mesazh të shkurtër dhe do t\'ju ndihmoj të zgjidhni kombinimin e duhur.',
  },
  aboutPage: {
    intro: 'Unë jam Agron Osmani, dizajner grafik i pavarur, editor video dhe entuziast AI me bazë në Geislingen an der Steige, Gjermani. Krijoj vizuale, faqe web dhe video që ndihmojnë bizneset e vogla dhe krijuesit të komunikojnë qartë dhe të duken profesionalisht online.',
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
    milestone3: '2023–sot – Kombinim dizajni, video dhe AI për klientë në Gjermani dhe jashtë.',
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
    locationValue: 'Geislingen an der Steige, Gjermani',
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
