export type Language = 'sr' | 'en' | 'de' | 'sq';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    blog: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    servicesButton: string;
    portfolioButton: string;
    locationTitle: string;
    locations: string[];
  };
  
  // About Section
  about: {
    title: string;
    subtitle: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    stats: {
      projects: string;
      clients: string;
      years: string;
    };
    certification: {
      certified: string;
      googlePartner: string;
    };
  };
  
  // Services Section
  services: {
    title: string;
    subtitle: string;
    items: {
      webDesign: {
        title: string;
        description: string;
        features: string[];
      };
      graphicDesign: {
        title: string;
        description: string;
        features: string[];
      };
      videoProduction: {
        title: string;
        description: string;
        features: string[];
      };
      digitalMarketing: {
        title: string;
        description: string;
        features: string[];
      };
      photography: {
        title: string;
        description: string;
        features: string[];
      };
      consulting: {
        title: string;
        description: string;
        features: string[];
      };
    };
    learnMore: string;
  };
  
  // Portfolio Section
  portfolio: {
    title: string;
    subtitle: string;
    filters: {
      all: string;
      web: string;
      brand: string;
      video: string;
      photo: string;
    };
    items: {
      ecommerce: {
        title: string;
        description: string;
      };
      brand: {
        title: string;
        description: string;
      };
      corporate: {
        title: string;
        description: string;
      };
      restaurant: {
        title: string;
        description: string;
      };
      product: {
        title: string;
        description: string;
      };
      packaging: {
        title: string;
        description: string;
      };
    };
    viewDetails: string;
  };
  
  // Blog Section
  blog: {
    title: string;
    subtitle: string;
    posts: {
      trends: {
        title: string;
        description: string;
        category: string;
      };
      conversion: {
        title: string;
        description: string;
        category: string;
      };
      video: {
        title: string;
        description: string;
        category: string;
      };
    };
    readMore: string;
    viewAll: string;
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      projectType: string;
      projectTypePlaceholder: string;
      projectTypes: {
        webDesign: string;
        graphicDesign: string;
        videoProduction: string;
        digitalMarketing: string;
        photography: string;
        consulting: string;
      };
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      required: string;
    };
    info: {
      title: string;
      phone: string;
      email: string;
      location: string;
    };
    social: {
      title: string;
    };
    hours: {
      title: string;
      weekdays: string;
      saturday: string;
      sunday: string;
      closed: string;
    };
    success: {
      title: string;
      description: string;
    };
    error: {
      title: string;
      description: string;
      validation: string;
    };
  };
  
  // Footer
  footer: {
    brand: string;
    services: string;
    company: string;
    contact: string;
    copyright: string;
    privacy: string;
    terms: string;
    cookies: string;
    career: string;
  };
}

export const translations: Record<Language, Translations> = {
  sr: {
    nav: {
      home: "Početna",
      about: "O nama",
      services: "Usluge",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Kontakt"
    },
    hero: {
      title: "Kreativna Multimedia Rešenja",
      subtitle: "Profesionalne usluge web dizajna, grafičkog dizajna, video produkcije, digitalnog marketinga i razvoja mobilnih aplikacija za Android i iOS za vaš biznis",
      servicesButton: "Pogledajte usluge",
      portfolioButton: "Naši radovi",
      locationTitle: "Radimo sa vodećim brendovima",
      locations: ["Novi Sad", "Beograd", "Srbija"]
    },
    about: {
      title: "O AGR Multimedia",
      subtitle: "Kreiramo izuzetne digitalne doživljaje koji pokreću vaš biznis napred",
      storyTitle: "Naša priča",
      storyP1: "AGR Multimedia je osnovan sa vizijom da pomaže biznis-ima da se istaknu u digitalnom svetu. Specijalizovani smo za kreiranje visokih kvaliteta multimedia sadržaja koji privlači pažnju, gradi brendove i pokreće rezultate.",
      storyP2: "Naš tim sastoji od iskusnih dizajnera, developera i marketing stručnjaka koji rade zajedno da bi vašim idejama dali život kroz inovativna digitalna rešenja.",
      stats: {
        projects: "Projekata",
        clients: "Klijenata",
        years: "Godina"
      },
      certification: {
        certified: "Sertifikovani",
        googlePartner: "Google Partner"
      }
    },
    services: {
      title: "Naše usluge",
      subtitle: "Sveobuhvatna multimedia rešenja prilagođena vašim potrebama",
      items: {
        webDesign: {
          title: "Web Dizajn",
          description: "Responsivni, SEO optimizovani web sajtovi koji privlače posetioce i konvertuju ih u klijente.",
          features: ["Custom dizajn", "Mobile responsivan", "SEO optimizacija"]
        },
        graphicDesign: {
          title: "Grafički Dizajn",
          description: "Kreativni vizuelni identiteti, logotipi i marketing materijali koji izdvajaju vaš brend.",
          features: ["Logo dizajn", "Brending", "Print materijali"]
        },
        videoProduction: {
          title: "Video Produkcija",
          description: "Profesionalni video sadržaj koji prenosi vašu poruku i angažuje auditorijum.",
          features: ["Promocijski video", "Animacije", "Post-produkcija"]
        },
        digitalMarketing: {
          title: "Digitalni Marketing",
          description: "Strategije koje povećavaju vašu online vidljivost i privlače ciljnu publiku.",
          features: ["Social Media", "Google Ads", "Content Marketing"]
        },
        photography: {
          title: "Fotografija",
          description: "Profesionalne fotografije proizvoda, događaja i portreta za vaš biznis.",
          features: ["Product photography", "Event coverage", "Post-processing"]
        },
        consulting: {
          title: "Konsalting",
          description: "Stručne konsultacije za digitalne strategije i optimizaciju vašeg online prisustva.",
          features: ["Digitalna strategija", "UX/UI audit", "Analitika"]
        }
      },
      learnMore: "Saznaj više"
    },
    portfolio: {
      title: "Naš Portfolio",
      subtitle: "Pogledajte neke od naših najuspešnijih projekata koji su doneli rezultate klijentima",
      filters: {
        all: "Svi projekti",
        web: "Web Dizajn",
        brand: "Brending",
        video: "Video",
        photo: "Fotografija"
      },
      items: {
        ecommerce: {
          title: "E-commerce Sajt",
          description: "Kompletan online shopping doživljaj"
        },
        brand: {
          title: "Brend Identitet",
          description: "Kompletan vizuelni identitet za startup"
        },
        corporate: {
          title: "Korporativni Video",
          description: "Predstavljanje kompanije kroz video"
        },
        restaurant: {
          title: "Restoran Website",
          description: "Elegantno online prisustvo"
        },
        product: {
          title: "Product Photography",
          description: "Studijska fotografija proizvoda"
        },
        packaging: {
          title: "Packaging Dizajn",
          description: "Kreativna ambalažna rešenja"
        }
      },
      viewDetails: "Pogledaj detalje"
    },
    blog: {
      title: "Blog i Novosti",
      subtitle: "Pratite najnovije trendove u digitalnom marketingu i dizajnu",
      posts: {
        trends: {
          title: "5 Najvažnijih Trendova u Digitalnom Marketingu za 2024.",
          description: "Otkrijte najnovije trendove koji će definisati digitalni marketing u narednoj godini i kako možete prilagoditi svoju strategiju...",
          category: "Marketing"
        },
        conversion: {
          title: "Kako da Kreirate Web Sajt koji Konvertuje Posetioce",
          description: "Pratite najbolje prakse web dizajna koji ne samo što izgleda dobro, već i efikasno konvertuje posetioce u klijente...",
          category: "Dizajn"
        },
        video: {
          title: "Moć Video Marketinga: Zašto je Video Kralj Sadržaja",
          description: "Video marketing nije samo trend - to je budućnost digitalne komunikacije. Saznajte kako možete iskoristiti video za rast biznisa...",
          category: "Video"
        }
      },
      readMore: "Čitaj više",
      viewAll: "Pogledaj sve članke"
    },
    contact: {
      title: "Kontaktirajte nas",
      subtitle: "Spremni smo da vaše ideje pretvorimo u stvarnost. Pošaljite nam poruku!",
      form: {
        title: "Pošaljite poruku",
        name: "Ime i prezime",
        namePlaceholder: "Vaše ime",
        email: "Email adresa",
        emailPlaceholder: "vaš.email@example.com",
        phone: "Telefon",
        phonePlaceholder: "+381 XX XXX XXXX",
        projectType: "Tip projekta",
        projectTypePlaceholder: "Izaberite tip projekta",
        projectTypes: {
          webDesign: "Web Dizajn",
          graphicDesign: "Grafički Dizajn",
          videoProduction: "Video Produkcija",
          digitalMarketing: "Digitalni Marketing",
          photography: "Fotografija",
          consulting: "Konsalting"
        },
        message: "Poruka",
        messagePlaceholder: "Opišite vaš projekat i potrebe...",
        submit: "Pošaljite poruku",
        sending: "Šalje se...",
        required: "*"
      },
      info: {
        title: "Kontakt informacije",
        phone: "Telefon",
        email: "Email",
        location: "Lokacija"
      },
      social: {
        title: "Pratite nas"
      },
      hours: {
        title: "Radimo",
        weekdays: "Ponedeljak - Petak",
        saturday: "Subota",
        sunday: "Nedelja",
        closed: "Zatvoreno"
      },
      success: {
        title: "Poruka je poslana!",
        description: "Javićemo vam se u najkraćem mogućem roku."
      },
      error: {
        title: "Greška pri slanju poruke",
        description: "Molimo pokušajte ponovo ili nas kontaktirajte direktno.",
        validation: "Molimo popunite sva obavezna polja"
      }
    },
    footer: {
      brand: "Kreiramo izuzetne digitalne doživljaje koji pokreću vaš biznis napred kroz inovativna multimedia rešenja.",
      services: "Usluge",
      company: "Kompanija",
      contact: "Kontakt",
      copyright: "© 2023 AGR Multimedia. Sva prava zadržana.",
      privacy: "Privatnost",
      terms: "Uslovi",
      cookies: "Kolačići",
      career: "Karijera"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact"
    },
    hero: {
      title: "Creative Multimedia Solutions",
      subtitle: "Professional web design, graphic design, video production, digital marketing services and mobile app development for Android and iOS for your business",
      servicesButton: "View Services",
      portfolioButton: "Our Work",
      locationTitle: "Working with leading brands",
      locations: ["Novi Sad", "Belgrade", "Serbia"]
    },
    about: {
      title: "About AGR Multimedia",
      subtitle: "Creating exceptional digital experiences that drive your business forward",
      storyTitle: "Our Story",
      storyP1: "AGR Multimedia was founded with a vision to help businesses stand out in the digital world. We specialize in creating high-quality multimedia content that attracts attention, builds brands and drives results.",
      storyP2: "Our team consists of experienced designers, developers and marketing professionals who work together to bring your ideas to life through innovative digital solutions.",
      stats: {
        projects: "Projects",
        clients: "Clients",
        years: "Years"
      },
      certification: {
        certified: "Certified",
        googlePartner: "Google Partner"
      }
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive multimedia solutions tailored to your needs",
      items: {
        webDesign: {
          title: "Web Design",
          description: "Responsive, SEO-optimized websites that attract visitors and convert them into clients.",
          features: ["Custom Design", "Mobile Responsive", "SEO Optimization"]
        },
        graphicDesign: {
          title: "Graphic Design",
          description: "Creative visual identities, logos and marketing materials that make your brand stand out.",
          features: ["Logo Design", "Branding", "Print Materials"]
        },
        videoProduction: {
          title: "Video Production",
          description: "Professional video content that conveys your message and engages your audience.",
          features: ["Promotional Videos", "Animations", "Post-Production"]
        },
        digitalMarketing: {
          title: "Digital Marketing",
          description: "Strategies that increase your online visibility and attract your target audience.",
          features: ["Social Media", "Google Ads", "Content Marketing"]
        },
        photography: {
          title: "Photography",
          description: "Professional product, event and portrait photography for your business.",
          features: ["Product Photography", "Event Coverage", "Post-Processing"]
        },
        consulting: {
          title: "Consulting",
          description: "Expert consultations for digital strategies and optimization of your online presence.",
          features: ["Digital Strategy", "UX/UI Audit", "Analytics"]
        }
      },
      learnMore: "Learn More"
    },
    portfolio: {
      title: "Our Portfolio",
      subtitle: "Check out some of our most successful projects that delivered results for clients",
      filters: {
        all: "All Projects",
        web: "Web Design",
        brand: "Branding",
        video: "Video",
        photo: "Photography"
      },
      items: {
        ecommerce: {
          title: "E-commerce Site",
          description: "Complete online shopping experience"
        },
        brand: {
          title: "Brand Identity",
          description: "Complete visual identity for startup"
        },
        corporate: {
          title: "Corporate Video",
          description: "Company presentation through video"
        },
        restaurant: {
          title: "Restaurant Website",
          description: "Elegant online presence"
        },
        product: {
          title: "Product Photography",
          description: "Studio product photography"
        },
        packaging: {
          title: "Packaging Design",
          description: "Creative packaging solutions"
        }
      },
      viewDetails: "View Details"
    },
    blog: {
      title: "Blog & News",
      subtitle: "Follow the latest trends in digital marketing and design",
      posts: {
        trends: {
          title: "5 Most Important Digital Marketing Trends for 2024",
          description: "Discover the latest trends that will define digital marketing in the coming year and how you can adapt your strategy...",
          category: "Marketing"
        },
        conversion: {
          title: "How to Create a Website That Converts Visitors",
          description: "Follow web design best practices that not only look good, but also effectively convert visitors into clients...",
          category: "Design"
        },
        video: {
          title: "The Power of Video Marketing: Why Video is King of Content",
          description: "Video marketing isn't just a trend - it's the future of digital communication. Learn how you can use video for business growth...",
          category: "Video"
        }
      },
      readMore: "Read More",
      viewAll: "View All Articles"
    },
    contact: {
      title: "Contact Us",
      subtitle: "We're ready to turn your ideas into reality. Send us a message!",
      form: {
        title: "Send Message",
        name: "Full Name",
        namePlaceholder: "Your name",
        email: "Email Address",
        emailPlaceholder: "your.email@example.com",
        phone: "Phone",
        phonePlaceholder: "+381 XX XXX XXXX",
        projectType: "Project Type",
        projectTypePlaceholder: "Select project type",
        projectTypes: {
          webDesign: "Web Design",
          graphicDesign: "Graphic Design",
          videoProduction: "Video Production",
          digitalMarketing: "Digital Marketing",
          photography: "Photography",
          consulting: "Consulting"
        },
        message: "Message",
        messagePlaceholder: "Describe your project and needs...",
        submit: "Send Message",
        sending: "Sending...",
        required: "*"
      },
      info: {
        title: "Contact Information",
        phone: "Phone",
        email: "Email",
        location: "Location"
      },
      social: {
        title: "Follow Us"
      },
      hours: {
        title: "Working Hours",
        weekdays: "Monday - Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        closed: "Closed"
      },
      success: {
        title: "Message sent!",
        description: "We'll get back to you as soon as possible."
      },
      error: {
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        validation: "Please fill in all required fields"
      }
    },
    footer: {
      brand: "Creating exceptional digital experiences that drive your business forward through innovative multimedia solutions.",
      services: "Services",
      company: "Company",
      contact: "Contact",
      copyright: "© 2023 AGR Multimedia. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
      career: "Career"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über uns",
      services: "Leistungen",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Kontakt"
    },
    hero: {
      title: "Kreative Multimedia-Lösungen",
      subtitle: "Professionelle Webdesign-, Grafikdesign-, Videoproduktions-, Digital Marketing-Services und mobile App-Entwicklung für Android und iOS für Ihr Unternehmen",
      servicesButton: "Leistungen ansehen",
      portfolioButton: "Unsere Arbeiten",
      locationTitle: "Arbeiten mit führenden Marken",
      locations: ["Novi Sad", "Belgrad", "Serbien"]
    },
    about: {
      title: "Über AGR Multimedia",
      subtitle: "Wir schaffen außergewöhnliche digitale Erlebnisse, die Ihr Unternehmen voranbringen",
      storyTitle: "Unsere Geschichte",
      storyP1: "AGR Multimedia wurde mit der Vision gegründet, Unternehmen dabei zu helfen, sich in der digitalen Welt zu behaupten. Wir sind spezialisiert auf die Erstellung hochwertiger Multimedia-Inhalte, die Aufmerksamkeit erregen, Marken aufbauen und Ergebnisse erzielen.",
      storyP2: "Unser Team besteht aus erfahrenen Designern, Entwicklern und Marketing-Profis, die zusammenarbeiten, um Ihre Ideen durch innovative digitale Lösungen zum Leben zu erwecken.",
      stats: {
        projects: "Projekte",
        clients: "Kunden",
        years: "Jahre"
      },
      certification: {
        certified: "Zertifiziert",
        googlePartner: "Google Partner"
      }
    },
    services: {
      title: "Unsere Leistungen",
      subtitle: "Umfassende Multimedia-Lösungen, maßgeschneidert für Ihre Bedürfnisse",
      items: {
        webDesign: {
          title: "Webdesign",
          description: "Responsive, SEO-optimierte Websites, die Besucher anziehen und in Kunden verwandeln.",
          features: ["Custom Design", "Mobile Responsive", "SEO-Optimierung"]
        },
        graphicDesign: {
          title: "Grafikdesign",
          description: "Kreative visuelle Identitäten, Logos und Marketingmaterialien, die Ihre Marke hervorheben.",
          features: ["Logo Design", "Branding", "Printmaterialien"]
        },
        videoProduction: {
          title: "Videoproduktion",
          description: "Professionelle Videoinhalte, die Ihre Botschaft vermitteln und Ihr Publikum fesseln.",
          features: ["Werbevideos", "Animationen", "Post-Produktion"]
        },
        digitalMarketing: {
          title: "Digital Marketing",
          description: "Strategien, die Ihre Online-Sichtbarkeit erhöhen und Ihre Zielgruppe anziehen.",
          features: ["Social Media", "Google Ads", "Content Marketing"]
        },
        photography: {
          title: "Fotografie",
          description: "Professionelle Produkt-, Event- und Porträtfotografie für Ihr Unternehmen.",
          features: ["Produktfotografie", "Event-Coverage", "Nachbearbeitung"]
        },
        consulting: {
          title: "Beratung",
          description: "Expertenberatung für digitale Strategien und Optimierung Ihrer Online-Präsenz.",
          features: ["Digitale Strategie", "UX/UI Audit", "Analytik"]
        }
      },
      learnMore: "Mehr erfahren"
    },
    portfolio: {
      title: "Unser Portfolio",
      subtitle: "Sehen Sie sich einige unserer erfolgreichsten Projekte an, die Ergebnisse für Kunden erzielt haben",
      filters: {
        all: "Alle Projekte",
        web: "Webdesign",
        brand: "Branding",
        video: "Video",
        photo: "Fotografie"
      },
      items: {
        ecommerce: {
          title: "E-Commerce-Site",
          description: "Komplettes Online-Shopping-Erlebnis"
        },
        brand: {
          title: "Markenidentität",
          description: "Komplette visuelle Identität für Startup"
        },
        corporate: {
          title: "Unternehmens-Video",
          description: "Unternehmenspräsentation durch Video"
        },
        restaurant: {
          title: "Restaurant-Website",
          description: "Elegante Online-Präsenz"
        },
        product: {
          title: "Produktfotografie",
          description: "Studio-Produktfotografie"
        },
        packaging: {
          title: "Verpackungsdesign",
          description: "Kreative Verpackungslösungen"
        }
      },
      viewDetails: "Details ansehen"
    },
    blog: {
      title: "Blog & News",
      subtitle: "Verfolgen Sie die neuesten Trends in Digital Marketing und Design",
      posts: {
        trends: {
          title: "5 wichtigste Digital Marketing Trends für 2024",
          description: "Entdecken Sie die neuesten Trends, die das Digital Marketing im kommenden Jahr definieren werden und wie Sie Ihre Strategie anpassen können...",
          category: "Marketing"
        },
        conversion: {
          title: "Wie Sie eine Website erstellen, die Besucher konvertiert",
          description: "Folgen Sie den besten Webdesign-Praktiken, die nicht nur gut aussehen, sondern auch effektiv Besucher in Kunden verwandeln...",
          category: "Design"
        },
        video: {
          title: "Die Macht des Video-Marketings: Warum Video König der Inhalte ist",
          description: "Video-Marketing ist nicht nur ein Trend - es ist die Zukunft der digitalen Kommunikation. Erfahren Sie, wie Sie Video für Ihr Unternehmenswachstum nutzen können...",
          category: "Video"
        }
      },
      readMore: "Weiterlesen",
      viewAll: "Alle Artikel ansehen"
    },
    contact: {
      title: "Kontaktieren Sie uns",
      subtitle: "Wir sind bereit, Ihre Ideen in die Realität umzusetzen. Senden Sie uns eine Nachricht!",
      form: {
        title: "Nachricht senden",
        name: "Vollständiger Name",
        namePlaceholder: "Ihr Name",
        email: "E-Mail-Adresse",
        emailPlaceholder: "ihre.email@example.com",
        phone: "Telefon",
        phonePlaceholder: "+381 XX XXX XXXX",
        projectType: "Projekttyp",
        projectTypePlaceholder: "Projekttyp auswählen",
        projectTypes: {
          webDesign: "Webdesign",
          graphicDesign: "Grafikdesign",
          videoProduction: "Videoproduktion",
          digitalMarketing: "Digital Marketing",
          photography: "Fotografie",
          consulting: "Beratung"
        },
        message: "Nachricht",
        messagePlaceholder: "Beschreiben Sie Ihr Projekt und Ihre Bedürfnisse...",
        submit: "Nachricht senden",
        sending: "Wird gesendet...",
        required: "*"
      },
      info: {
        title: "Kontaktinformationen",
        phone: "Telefon",
        email: "E-Mail",
        location: "Standort"
      },
      social: {
        title: "Folgen Sie uns"
      },
      hours: {
        title: "Arbeitszeiten",
        weekdays: "Montag - Freitag",
        saturday: "Samstag",
        sunday: "Sonntag",
        closed: "Geschlossen"
      },
      success: {
        title: "Nachricht gesendet!",
        description: "Wir melden uns so schnell wie möglich bei Ihnen."
      },
      error: {
        title: "Fehler beim Senden der Nachricht",
        description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        validation: "Bitte füllen Sie alle Pflichtfelder aus"
      }
    },
    footer: {
      brand: "Wir schaffen außergewöhnliche digitale Erlebnisse, die Ihr Unternehmen durch innovative Multimedia-Lösungen voranbringen.",
      services: "Leistungen",
      company: "Unternehmen",
      contact: "Kontakt",
      copyright: "© 2023 AGR Multimedia. Alle Rechte vorbehalten.",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      cookies: "Cookies",
      career: "Karriere"
    }
  },
  sq: {
    nav: {
      home: "Kreu",
      about: "Rreth nesh",
      services: "Shërbimet",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Kontakt"
    },
    hero: {
      title: "Zgjidhje Kreative Multimedia",
      subtitle: "Shërbime profesionale të web dizajnit, dizajnit grafik, prodhimit të videove, marketingut dixhital dhe zhvillimit të aplikacioneve mobile për Android dhe iOS për biznesin tuaj",
      servicesButton: "Shiko Shërbimet",
      portfolioButton: "Puna Jonë",
      locationTitle: "Duke punuar me marka kryesuese",
      locations: ["Novi Sad", "Beograd", "Serbi"]
    },
    about: {
      title: "Rreth AGR Multimedia",
      subtitle: "Duke krijuar përvojë të jashtëzakonshme dixhitale që shtyjnë biznesin tuaj përpara",
      storyTitle: "Historia Jonë",
      storyP1: "AGR Multimedia u themelua me një vizion për të ndihmuar bizneset të dallohen në botën dixhitale. Ne specializohemi në krijimin e përmbajtjeve multimedia me cilësi të lartë që tërheqin vëmendjen, ndërtojnë marka dhe sjellin rezultate.",
      storyP2: "Ekipi ynë përbëhet nga dizajnerë të përvojshëm, zhvillues dhe profesionistë marketingu që punojnë së bashku për t'i dhënë jetë ideve tuaja përmes zgjidhjeve inovative dixhitale.",
      stats: {
        projects: "Projekte",
        clients: "Klientë",
        years: "Vite"
      },
      certification: {
        certified: "I Certifikuar",
        googlePartner: "Partner Google"
      }
    },
    services: {
      title: "Shërbimet Tona",
      subtitle: "Zgjidhje multimedia gjithëpërfshirëse të përshtatura për nevojat tuaja",
      items: {
        webDesign: {
          title: "Web Dizajn",
          description: "Uebsajte përgjigës, të optimizuara për SEO që tërheqin vizitorë dhe i kthejnë ata në klientë.",
          features: ["Dizajn i Personalizuar", "Mobile Responsive", "Optimizim SEO"]
        },
        graphicDesign: {
          title: "Dizajn Grafik",
          description: "Identitete vizuale kreative, logo dhe materiale marketingu që bëjnë që marka juaj të dallohet.",
          features: ["Dizajn Logo", "Branding", "Materiale Print"]
        },
        videoProduction: {
          title: "Prodhim Video",
          description: "Përmbajtje video profesionale që transmeton mesazhin tuaj dhe angazhon audiencën.",
          features: ["Video Promocionale", "Animacione", "Post-Prodhim"]
        },
        digitalMarketing: {
          title: "Marketing Dixhital",
          description: "Strategji që rrisin dukshmërinë tuaj online dhe tërheqin audiencën e synuar.",
          features: ["Media Sociale", "Google Ads", "Marketing Përmbajtjeje"]
        },
        photography: {
          title: "Fotografi",
          description: "Fotografi profesionale produktesh, eventesh dhe portretesh për biznesin tuaj.",
          features: ["Fotografi Produkti", "Mbulim Eventi", "Post-Processing"]
        },
        consulting: {
          title: "Konsultime",
          description: "Konsultime eksperte për strategji dixhitale dhe optimizim të prezencës suaj online.",
          features: ["Strategji Dixhitale", "Audit UX/UI", "Analitikë"]
        }
      },
      learnMore: "Mëso Më Shumë"
    },
    portfolio: {
      title: "Portfolio-ja Jonë",
      subtitle: "Shikoni disa nga projektet tona më të suksesshme që kanë sjellë rezultate për klientët",
      filters: {
        all: "Të Gjitha Projektet",
        web: "Web Dizajn",
        brand: "Branding",
        video: "Video",
        photo: "Fotografi"
      },
      items: {
        ecommerce: {
          title: "Sajt E-commerce",
          description: "Përvojë e plotë blerje online"
        },
        brand: {
          title: "Identitet Marke",
          description: "Identitet vizual i plotë për startup"
        },
        corporate: {
          title: "Video Korporative",
          description: "Prezantim kompanie përmes videos"
        },
        restaurant: {
          title: "Uebsajt Restoranti",
          description: "Prezencë elegante online"
        },
        product: {
          title: "Fotografi Produkti",
          description: "Fotografi produkti në studio"
        },
        packaging: {
          title: "Dizajn Ambalazhi",
          description: "Zgjidhje kreative ambalazhi"
        }
      },
      viewDetails: "Shiko Detajet"
    },
    blog: {
      title: "Blog & Lajme",
      subtitle: "Ndiq trendet më të fundit në marketing dixhital dhe dizajn",
      posts: {
        trends: {
          title: "5 Trendet Më të Rëndësishme të Marketing Dixhital për 2024",
          description: "Zbulo trendet më të fundit që do të përcaktojnë marketing dixhitalin në vitin e ardhshëm dhe si mund ta përshtatësh strategjinë tënde...",
          category: "Marketing"
        },
        conversion: {
          title: "Si të Krijosh një Uebsajt që Konverton Vizitorët",
          description: "Ndiq praktikat më të mira të web dizajnit që jo vetëm duken mirë, por gjithashtu konvertojnë në mënyrë efektive vizitorët në klientë...",
          category: "Dizajn"
        },
        video: {
          title: "Fuqia e Video Marketingut: Pse Video është Mbreti i Përmbajtjes",
          description: "Video marketingu nuk është vetëm një trend - është e ardhmja e komunikimit dixhital. Mëso si mund ta përdorësh videon për rritjen e biznesit...",
          category: "Video"
        }
      },
      readMore: "Lexo Më Shumë",
      viewAll: "Shiko Të Gjitha Artikujt"
    },
    contact: {
      title: "Na Kontaktoni",
      subtitle: "Jemi gati t'i kthejmë idetë tuaja në realitet. Dërgona një mesazh!",
      form: {
        title: "Dërgo Mesazh",
        name: "Emri i Plotë",
        namePlaceholder: "Emri juaj",
        email: "Adresa E-mail",
        emailPlaceholder: "email.juaj@example.com",
        phone: "Telefon",
        phonePlaceholder: "+381 XX XXX XXXX",
        projectType: "Lloji i Projektit",
        projectTypePlaceholder: "Zgjidhni llojin e projektit",
        projectTypes: {
          webDesign: "Web Dizajn",
          graphicDesign: "Dizajn Grafik",
          videoProduction: "Prodhim Video",
          digitalMarketing: "Marketing Dixhital",
          photography: "Fotografi",
          consulting: "Konsultime"
        },
        message: "Mesazhi",
        messagePlaceholder: "Përshkruani projektin dhe nevojat tuaja...",
        submit: "Dërgo Mesazhin",
        sending: "Duke dërguar...",
        required: "*"
      },
      info: {
        title: "Informacione Kontakti",
        phone: "Telefon",
        email: "Email",
        location: "Lokacioni"
      },
      social: {
        title: "Na Ndiqni"
      },
      hours: {
        title: "Orët e Punës",
        weekdays: "E Hënë - E Premte",
        saturday: "E Shtunë",
        sunday: "E Diel",
        closed: "Mbyllur"
      },
      success: {
        title: "Mesazhi u dërgua!",
        description: "Do t'ju kthejmë përgjigje sa më shpejt që të jetë e mundur."
      },
      error: {
        title: "Gabim në dërgimin e mesazhit",
        description: "Ju lutemi provoni përsëri ose na kontaktoni direkt.",
        validation: "Ju lutemi plotësoni të gjitha fushat e detyrueshme"
      }
    },
    footer: {
      brand: "Duke krijuar përvojë të jashtëzakonshme dixhitale që shtyjnë biznesin tuaj përpara përmes zgjidhjeve inovative multimedia.",
      services: "Shërbimet",
      company: "Kompania",
      contact: "Kontakt",
      copyright: "© 2023 AGR Multimedia. Të gjitha të drejtat të rezervuara.",
      privacy: "Privatësia",
      terms: "Kushtet",
      cookies: "Cookies",
      career: "Karriera"
    }
  }
};

export const getTranslations = (lang: Language): Translations => {
  return translations[lang] || translations.sr;
};

export const languages: Array<{ code: Language; name: string; flag: string }> = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'sq', name: 'Shqip', flag: '🇦🇱' },
  { code: 'sr', name: 'Srpski', flag: '🇷🇸' }
];