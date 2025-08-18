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
      subject: string;
      subjectPlaceholder: string;
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
    phone: string;
    email: string;
    location: string;
    copyright: string;
    privacy: string;
    terms: string;
    cookies: string;
    impresum: string;
    career: string;
  };
  
  // Impresum content
  impresum: {
    title: string;
    subtitle: string;
    sections: {
      company: {
        title: string;
        owner: string;
        address: string;
      };
      contact: {
        title: string;
        email: string;
      };
      representative: {
        title: string;
        name: string;
      };
      tax: {
        title: string;
        taxNumber: string;
        vatNumber: string;
      };
      profession: {
        title: string;
        description: string;
      };
    };
  };

  // Privacy Policy content
  privacy: {
    title: string;
    subtitle: string;
    sections: {
      dataCollection: {
        title: string;
        content: string;
      };
      dataUsage: {
        title: string;
        content: string;
      };
      cookies: {
        title: string;
        content: string;
      };
      rights: {
        title: string;
        content: string;
      };
      contact: {
        title: string;
        content: string;
      };
    };
  };

  // Terms of Service content
  terms: {
    title: string;
    subtitle: string;
    sections: {
      scope: {
        title: string;
        content: string;
      };
      services: {
        title: string;
        content: string;
      };
      liability: {
        title: string;
        content: string;
      };
      intellectual: {
        title: string;
        content: string;
      };
      termination: {
        title: string;
        content: string;
      };
    };
  };

  // Cookie Policy content
  cookies: {
    title: string;
    subtitle: string;
    sections: {
      whatAre: {
        title: string;
        content: string;
      };
      howWeUse: {
        title: string;
        content: string;
      };
      types: {
        title: string;
        content: string;
      };
      control: {
        title: string;
        content: string;
      };
      thirdParty: {
        title: string;
        content: string;
      };
    };
  };

  // Web Design page content
  webDesign: {
    hero: {
      title: string;
      description: string;
    };
    services: {
      websites: {
        title: string;
        description: string;
        features: string[];
      };
      mobileApps: {
        title: string;
        description: string;
        features: string[];
      };
      responsive: {
        title: string;
        description: string;
        features: string[];
      };
    };
    process: {
      title: string;
      steps: {
        title: string;
        description: string;
      }[];
    };
    portfolio: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    technologies: {
      title: string;
      frontend: {
        title: string;
        items: string[];
      };
      backend: {
        title: string;
        items: string[];
      };
      mobile: {
        title: string;
        items: string[];
      };
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };

  // Graphic Design page content
  graphicDesign: {
    hero: {
      title: string;
      description: string;
    };
    services: {
      logoDesign: {
        title: string;
        description: string;
        features: string[];
      };
      branding: {
        title: string;
        description: string;
        features: string[];
      };
      printMaterials: {
        title: string;
        description: string;
        features: string[];
      };
    };
    process: {
      title: string;
      steps: {
        title: string;
        description: string;
      }[];
    };
    portfolio: {
      title: string;
      logos: {
        title: string;
        items: {
          title: string;
          description: string;
          category: string;
        }[];
      };
      branding: {
        title: string;
        items: {
          title: string;
          description: string;
          category: string;
        }[];
      };
      print: {
        title: string;
        description: string;
      };
      books: {
        title: string;
        description: string;
      };
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
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
      title: "Kreativna Multimedijalna Rešenja",
      subtitle: "Profesionalne usluge kreiranja web stranica, web dizajna, grafičkog dizajna, video produkcije, digitalnog marketinga i razvoja mobilnih aplikacija za Android i iOS za vaš biznis",
      servicesButton: "Pogledajte usluge",
      portfolioButton: "Naši radovi",
      locationTitle: "Radimo sa vodećim brendovima",
      locations: ["Stuttgart", "Milano", "Ulm"]
    },
    about: {
      title: "O MULTIMEDIA AGRONDESIGN",
      subtitle: "Kreiramo izuzetne digitalne doživljaje koji pokreću vaš biznis napred",
      storyTitle: "Naša priča",
      storyP1: "MULTIMEDIA AGRONDESIGN sam osnovan sa vizijom da pomažem biznis-ima da se istaknu u digitalnom svetu. Specijalizovan sam za kreiranje visokih kvaliteta multimedia sadržaja koji privlači pažnju, gradi brendove i pokreće rezultate.",
      storyP2: "Kao iskusan dizajner, developer i marketing stručnjak, radim posvećeno da vašim idejama dam život kroz inovativna digitalna rešenja.",
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
          title: "Kreiranje vašeg Web sajta i Mobilne aplikacije",
          description: "Responsivni, SEO optimizovani web sajtovi i mobilne aplikacije za Android i iOS koji privlače posetioce i konvertuju ih u klijente.",
          features: ["Custom dizajn", "Mobile responsivan", "SEO optimizacija", "Android & iOS aplikacije"]
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
        subject: "Predmet",
        subjectPlaceholder: "Predmet vaše poruke",
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
        validation: "Ime, email, predmet i poruka su obavezni"
      }
    },
    footer: {
      brand: "Kreiramo izuzetne digitalne doživljaje koji pokreću vaš biznis napred kroz inovativna multimedia rešenja.",
      services: "Usluge",
      company: "Kompanija",
      contact: "Kontakt",
      phone: "+49 15560 873124",
      email: "agron6922@gmail.com",
      location: "Geislingen an der Steige, Nemačka",
      copyright: "© 2025 MULTIMEDIA AGRONDESIGN. Sva prava zadržana.",
      privacy: "Privatnost",
      terms: "Uslovi",
      cookies: "Kolačići",
      impresum: "Impresum",
      career: "Karijera"
    },
    
    // Impresum content
    impresum: {
      title: "Impresum (Pravne informacije)",
      subtitle: "Informacije u skladu sa § 5 TMG (Nemački zakon o telemedijima)",
      sections: {
        company: {
          title: "AGRONDESIGN",
          owner: "Vlasnik: Agron Osmani",
          address: "Luise-Hainlen-Weg 4/4\n73312 Geislingen an der Steige\nNemačka"
        },
        contact: {
          title: "Kontakt",
          email: "Email: agron6922@gmail.com"
        },
        representative: {
          title: "Pravno zastupa",
          name: "Agron Osmani"
        },
        tax: {
          title: "Poreske informacije",
          taxNumber: "Poreski broj (Steuernummer): 48267305956",
          vatNumber: "Identifikacioni broj za PDV u skladu sa §27a nemačkog zakona o PDV-u (USt-IdNr.): DE354016444"
        },
        profession: {
          title: "Profesionalno zvanje",
          description: "Grafički dizajner i programer"
        }
      }
    },

    // Privacy Policy content (Serbian)
    privacy: {
      title: "Politika Privatnosti",
      subtitle: "Informacije o zaštiti ličnih podataka u skladu sa GDPR",
      sections: {
        dataCollection: {
          title: "Prikupljanje Podataka",
          content: "Prikupljamo lične podatke koje vi dobrovoljno dajete preko kontakt forme, uključujući ime, email adresu i poruku. Ovi podaci se koriste isključivo u svrhu komunikacije i pružanja naših usluga."
        },
        dataUsage: {
          title: "Korišćenje Podataka",
          content: "Vaše lične podatke koristimo za: odgovaranje na vaše upite, pružanje requested usluga, poboljšanje našeg sajta i usluga, i slanje relevantnih informacija o našim uslugama (samo uz vašu dozvolu)."
        },
        cookies: {
          title: "Kolačići (Cookies)",
          content: "Koristimo kolačiće za poboljšanje funkcionalnosti sajta i analizu saobraćaja. Možete kontrolisati kolačiće kroz postavke vašeg browsera. Detaljnije informacije možete naći u našoj Politici Kolačića."
        },
        rights: {
          title: "Vaša Prava",
          content: "Imate pravo na pristup, ispravku, brisanje i prenosnost vaših podataka. Takođe možete ograničiti obradu ili se usprotiviti obradi vaših podataka. Za ostvarivanje ovih prava kontaktirajte nas putem emaila."
        },
        contact: {
          title: "Kontakt",
          content: "Za pitanja o zaštiti privatnosti kontaktirajte nas na: agron6922@gmail.com. Zadržavamo pravo da ažuriramo ovu politiku, o čemu ćemo vas obavestiti putem našeg sajta."
        }
      }
    },

    // Terms of Service content (Serbian)
    terms: {
      title: "Uslovi Korišćenja",
      subtitle: "Pravila i uslovi korišćenja našeg sajta i usluga",
      sections: {
        scope: {
          title: "Opseg Primene",
          content: "Ovi uslovi se primenjuju na sve korisnike našeg sajta agrmultimedia.eu i naših usluga. Korišćenjem sajta prihvatate ove uslove u potpunosti."
        },
        services: {
          title: "Naše Usluge",
          content: "Pružamo usluge web dizajna, grafičkog dizajna, video produkcije, digitalnog marketinga i razvoja mobilnih aplikacija. Sve usluge se pružaju profesionalno i u dogovorenim rokovima."
        },
        liability: {
          title: "Ograničenje Odgovornosti",
          content: "Nismo odgovorni za štete nastale korišćenjem našeg sajta osim u slučajevima grubog nemara ili namere. Naša odgovornost je ograničena na vrednost ugovorenih usluga."
        },
        intellectual: {
          title: "Intelektualna Svojina",
          content: "Sav sadržaj na sajtu je zaštićen autorskim pravima. Zabranjeno je kopiranje, distribucija ili komercijalna upotreba bez pisane dozvole. Projekti kreirani za klijente postaju njihova svojina nakon plaćanja."
        },
        termination: {
          title: "Prekid Usluga",
          content: "Zadržavamo pravo da prekinemo pružanje usluga u slučaju kršenja uslova korišćenja. Klijenti mogu otkazati usluge uz poštovanje ugovorenih uslova otkazivanja."
        }
      }
    },

    // Cookie Policy content (Serbian)
    cookies: {
      title: "Politika Kolačića",
      subtitle: "Kako koristimo kolačiće na našem sajtu",
      sections: {
        whatAre: {
          title: "Šta su Kolačići",
          content: "Kolačići su mali fajlovi koji se čuvaju na vašem uređaju kada posetite naš sajt. Oni nam pomažu da sajt funkcioniše bolje i pružimo vam bolji korisnik doživljaj."
        },
        howWeUse: {
          title: "Kako Koristimo Kolačiće",
          content: "Koristimo kolačiće za: pamćenje vaših jezika i postavki, analizu prometa na sajtu, poboljšanje performansi sajta, i obezbeđivanje sigurnosnih funkcija."
        },
        types: {
          title: "Vrste Kolačića",
          content: "Koristimo esencijalne kolačiće (potrebni za rad sajta), analitičke kolačiće (Google Analytics), funkcionalne kolačiće (pamćenje postavki), i performanse kolačiće (optimizacija sajta)."
        },
        control: {
          title: "Kontrola Kolačića",
          content: "Možete kontrolisati kolačiće kroz postavke vašeg browsera. Možete ih blokirati ili obrisati, ali to može uticati na funkcionalnost sajta. Većina browsera automatski prihvata kolačiće."
        },
        thirdParty: {
          title: "Kolačići Treće Strane",
          content: "Koristimo Google Analytics za analizu prometa. Google može postaviti svoje kolačiće. Molimo vas da proverite Google-ovu politiku privatnosti za više informacija o njihovim kolačićima."
        }
      }
    },

    webDesign: {
      hero: {
        title: "Kreiranje Web Sajtova i Mobilnih Aplikacija",
        description: "Profesionalno razvijam responsivne web sajtove i mobilne aplikacije za Android i iOS koji privlače posetioce, poboljšavaju korisničko iskustvo i efikasno konvertuju posetioce u klijente kroz moderne tehnologije i optimizovan dizajn."
      },
      services: {
        websites: {
          title: "Web Sajtovi",
          description: "Kreiram moderne, responsivne web sajtove koji rade savršeno na svim uređajima",
          features: ["Responsivan Dizajn", "SEO Optimizacija", "Brzo Učitavanje", "CMS Integracija", "Sigurnost", "Analytics"]
        },
        mobileApps: {
          title: "Mobilne Aplikacije",
          description: "Razvijam native i cross-platform aplikacije za Android i iOS platforme",
          features: ["Android Aplikacije", "iOS Aplikacije", "Cross-platform", "Push Notifikacije", "Offline Funkcionalnost", "App Store Publikacija"]
        },
        responsive: {
          title: "Responsive Design",
          description: "Osiguravam da vaš sajt izgleda savršeno na svim uređajima i veličinama ekrana",
          features: ["Mobile-First Pristup", "Tablet Optimizacija", "Desktop Perfromanse", "Touchscreen Podrška", "Retina Display", "Cross-browser Kompatibilnost"]
        }
      },
      process: {
        title: "Proces Rada",
        steps: [
          {
            title: "Planiranje",
            description: "Analiziram vaše potrebe i kreiram detaljnu strategiju projekta"
          },
          {
            title: "Dizajn",
            description: "Kreiram wireframes, mockup-e i finalni vizuelni dizajn"
          },
          {
            title: "Development",
            description: "Kodiram funkcionalnu aplikaciju koristeći najnovije tehnologije"
          },
          {
            title: "Testiranje & Lansiranje",
            description: "Temeljno testiram i uspešno lansiran projekat sa podrškom"
          }
        ]
      },
      portfolio: {
        title: "Portfolio Projekata",
        items: [
          {
            title: "TechFlow Business Solutions",
            description: "Kompleksna web platforma za upravljanje biznisom"
          },
          {
            title: "EcoMarket Online Store", 
            description: "E-commerce platforma za ekološke proizvode"
          },
          {
            title: "FitLife Mobile App",
            description: "Personalizovana fitness aplikacija za Android i iOS"
          },
          {
            title: "ILMBUDS",
            description: "Islamska aplikacija za decu"
          }
        ]
      },
      technologies: {
        title: "Tehnologije koje Koristim",
        frontend: {
          title: "Frontend",
          items: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SCSS"]
        },
        backend: {
          title: "Backend",
          items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"]
        },
        mobile: {
          title: "Mobile",
          items: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Native APIs"]
        }
      },
      cta: {
        title: "Spremni za Vaš Projekat?",
        description: "Kontaktirajte me za besplatnu konsultaciju o vašem web sajtu ili mobilnoj aplikaciji",
        button: "Kontaktiraj Me"
      }
    },

    graphicDesign: {
      hero: {
        title: "Kreiranje Vizuelnog Identiteta i Grafički Dizajn",
        description: "Profesionalno kreiram jedinstvene logotipe, brendove i print materijale koji izdvajaju vaš biznis od konkurencije i ostavljaju nezaboravan utisak na vašu ciljnu publiku."
      },
      services: {
        logoDesign: {
          title: "Logo Dizajn",
          description: "Kreiram nezaboravne logotipe koji predstavljaju esenciju vašeg brenda",
          features: ["Originalni koncepti", "Vektorski formati", "Brend priručnik", "Različite varijante", "Revizije uključene", "Vlasništvo dizajna"]
        },
        branding: {
          title: "Brending",
          description: "Kompletni vizuelni identitet koji gradi prepoznatljivost vašeg brenda",
          features: ["Brend priručnik", "Vizuelni identitet", "Tipografija", "Paleta boja", "Aplikacije", "Smernice brenda"]
        },
        printMaterials: {
          title: "Print Materijali",
          description: "Fizički marketing materijali koji promovisuju vaš biznis profesionalno",
          features: ["Majice i tekstil", "Pakovanja", "Kancelarijski materijal", "Marketing materijali", "Oznake i natpisi", "Brendirani proizvodi"]
        }
      },
      process: {
        title: "Kreativni Proces",
        steps: [
          {
            title: "Istraživanje",
            description: "Analiziram vaš brend, ciljnu publiku i konkurenciju"
          },
          {
            title: "Koncepti",
            description: "Kreiram početne ideje i vizuelne pravce"
          },
          {
            title: "Razvoj",
            description: "Razrađujem odabrane koncepte do finalne verzije"
          },
          {
            title: "Finalizacija",
            description: "Priprema za štampu i digitalno korišćenje"
          }
        ]
      },
      portfolio: {
        title: "Portfolio Radova",
        logos: {
          title: "Logo Dizajn",
          items: [
            {
              title: "InnovateTech Solutions",
              description: "Moderna tehnološka kompanija",
              category: "Tehnološki startup"
            },
            {
              title: "GreenHarvest",
              description: "Organska hrana i poljoprivreda",
              category: "Organska hrana"
            },
            {
              title: "AurumCraft",
              description: "Luksuzno zlatarstvo",
              category: "Luksuzni nakit"
            }
          ]
        },
        branding: {
          title: "Kompletni Brending",
          items: [
            {
              title: "PowerFit Pro",
              description: "Fitness i wellness brend",
              category: "Fitness"
            },
            {
              title: "Aroma Collective",
              description: "Premium kafić brend",
              category: "Hrana i piće"
            }
          ]
        },
        print: {
          title: "Print Materijali",
          description: "Brendirane majice, kutije za pakovanje i promotivni materijali"
        },
        books: {
          title: "Dizajn Knjiga",
          description: "Profesionalni dizajn korica i raspoređenje za publikacije"
        }
      },
      cta: {
        title: "Spremni za Novi Vizuelni Identitet?",
        description: "Kontaktirajte me za besplatnu konsultaciju o vašem brendu",
        button: "Kontaktiraj Me"
      }
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
      subtitle: "Professional website creation, web design, graphic design, video production, digital marketing services and mobile app development for Android and iOS for your business",
      servicesButton: "View Services",
      portfolioButton: "Our Work",
      locationTitle: "Working with leading brands",
      locations: ["Stuttgart", "Milano", "Ulm"]
    },
    about: {
      title: "About MULTIMEDIA AGRONDESIGN",
      subtitle: "Creating exceptional digital experiences that drive your business forward",
      storyTitle: "Our Story",
      storyP1: "I founded MULTIMEDIA AGRONDESIGN with a vision to help businesses stand out in the digital world. I specialize in creating high-quality multimedia content that attracts attention, builds brands and drives results.",
      storyP2: "As an experienced designer, developer and marketing professional, I work dedicatedly to bring your ideas to life through innovative digital solutions.",
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
          title: "Creating your Website and Mobile Application",
          description: "Responsive, SEO-optimized websites and mobile applications for Android and iOS that attract visitors and convert them into clients.",
          features: ["Custom Design", "Mobile Responsive", "SEO Optimization", "Android & iOS Apps"]
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
        subject: "Subject",
        subjectPlaceholder: "Subject of your message",
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
        validation: "Name, email, subject and message are required"
      }
    },
    footer: {
      brand: "Creating exceptional digital experiences that drive your business forward through innovative multimedia solutions.",
      services: "Services",
      company: "Company",
      contact: "Contact",
      phone: "+49 15560 873124",
      email: "agron6922@gmail.com",
      location: "Geislingen an der Steige, Germany",
      copyright: "© 2025 MULTIMEDIA AGRONDESIGN. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
      impresum: "Legal Notice",
      career: "Career"
    },
    
    // Impresum content  
    impresum: {
      title: "Imprint (Legal Notice)",
      subtitle: "Information according to § 5 TMG",
      sections: {
        company: {
          title: "AGRONDESIGN",
          owner: "Owner: Agron Osmani",
          address: "Luise-Hainlen-Weg 4/4\n73312 Geislingen an der Steige\nGermany"
        },
        contact: {
          title: "Contact",
          email: "Email: agron6922@gmail.com"
        },
        representative: {
          title: "Represented by",
          name: "Agron Osmani"
        },
        tax: {
          title: "Tax Information",
          taxNumber: "Tax Number (Steuernummer): 48267305956",
          vatNumber: "VAT identification number in accordance with §27 a of the German VAT act (USt-IdNr.): DE354016444"
        },
        profession: {
          title: "Professional Title",
          description: "Graphic Designer & Developer"
        }
      }
    },

    // Privacy Policy content (English)
    privacy: {
      title: "Privacy Policy",
      subtitle: "Information about personal data protection in accordance with GDPR",
      sections: {
        dataCollection: {
          title: "Data Collection",
          content: "We collect personal data that you voluntarily provide through the contact form, including name, email address and message. This data is used exclusively for communication and providing our services."
        },
        dataUsage: {
          title: "Data Usage",
          content: "We use your personal data for: responding to your inquiries, providing requested services, improving our website and services, and sending relevant information about our services (only with your permission)."
        },
        cookies: {
          title: "Cookies",
          content: "We use cookies to improve website functionality and analyze traffic. You can control cookies through your browser settings. For more detailed information, see our Cookie Policy."
        },
        rights: {
          title: "Your Rights",
          content: "You have the right to access, rectify, delete and portability of your data. You may also restrict or object to the processing of your data. To exercise these rights, contact us via email."
        },
        contact: {
          title: "Contact",
          content: "For privacy questions contact us at: agron6922@gmail.com. We reserve the right to update this policy, which we will notify you about through our website."
        }
      }
    },

    // Terms of Service content (English)
    terms: {
      title: "Terms of Service",
      subtitle: "Rules and conditions for using our website and services",
      sections: {
        scope: {
          title: "Scope of Application",
          content: "These terms apply to all users of our website agrmultimedia.eu and our services. By using the website, you accept these terms in full."
        },
        services: {
          title: "Our Services",
          content: "We provide web design, graphic design, video production, digital marketing and mobile application development services. All services are provided professionally and within agreed timeframes."
        },
        liability: {
          title: "Limitation of Liability",
          content: "We are not liable for damages arising from the use of our website except in cases of gross negligence or intent. Our liability is limited to the value of contracted services."
        },
        intellectual: {
          title: "Intellectual Property",
          content: "All content on the website is protected by copyright. Copying, distribution or commercial use without written permission is prohibited. Projects created for clients become their property after payment."
        },
        termination: {
          title: "Service Termination",
          content: "We reserve the right to terminate services in case of violation of terms of use. Clients may cancel services subject to agreed cancellation terms."
        }
      }
    },

    // Cookie Policy content (English)
    cookies: {
      title: "Cookie Policy",
      subtitle: "How we use cookies on our website",
      sections: {
        whatAre: {
          title: "What are Cookies",
          content: "Cookies are small files stored on your device when you visit our website. They help us make the website work better and provide you with a better user experience."
        },
        howWeUse: {
          title: "How We Use Cookies",
          content: "We use cookies for: remembering your language and settings, analyzing website traffic, improving website performance, and providing security functions."
        },
        types: {
          title: "Types of Cookies",
          content: "We use essential cookies (necessary for website operation), analytical cookies (Google Analytics), functional cookies (settings memory), and performance cookies (website optimization)."
        },
        control: {
          title: "Cookie Control",
          content: "You can control cookies through your browser settings. You can block or delete them, but this may affect website functionality. Most browsers automatically accept cookies."
        },
        thirdParty: {
          title: "Third Party Cookies",
          content: "We use Google Analytics for traffic analysis. Google may set its own cookies. Please check Google's privacy policy for more information about their cookies."
        }
      }
    },

    webDesign: {
      hero: {
        title: "Website Creation & Mobile App Development",
        description: "I professionally develop responsive websites and mobile applications for Android and iOS that attract visitors, improve user experience, and efficiently convert visitors into clients through modern technologies and optimized design."
      },
      services: {
        websites: {
          title: "Websites",
          description: "I create modern, responsive websites that work perfectly on all devices",
          features: ["Responsive Design", "SEO Optimization", "Fast Loading", "CMS Integration", "Security", "Analytics"]
        },
        mobileApps: {
          title: "Mobile Applications",
          description: "I develop native and cross-platform applications for Android and iOS platforms",
          features: ["Android Apps", "iOS Apps", "Cross-platform", "Push Notifications", "Offline Functionality", "App Store Publication"]
        },
        responsive: {
          title: "Responsive Design",
          description: "I ensure your website looks perfect on all devices and screen sizes",
          features: ["Mobile-First Approach", "Tablet Optimization", "Desktop Performance", "Touchscreen Support", "Retina Display", "Cross-browser Compatibility"]
        }
      },
      process: {
        title: "Work Process",
        steps: [
          {
            title: "Planning",
            description: "I analyze your needs and create a detailed project strategy"
          },
          {
            title: "Design",
            description: "I create wireframes, mockups and final visual design"
          },
          {
            title: "Development",
            description: "I code functional application using the latest technologies"
          },
          {
            title: "Testing & Launch",
            description: "I thoroughly test and successfully launch the project with support"
          }
        ]
      },
      portfolio: {
        title: "Project Portfolio",
        items: [
          {
            title: "TechFlow Business Solutions",
            description: "Complex web platform for business management"
          },
          {
            title: "EcoMarket Online Store", 
            description: "E-commerce platform for eco-friendly products"
          },
          {
            title: "FitLife Mobile App",
            description: "Personalized fitness application for Android and iOS"
          },
          {
            title: "ILMBUDS",
            description: "Islamic application for children"
          }
        ]
      },
      technologies: {
        title: "Technologies I Use",
        frontend: {
          title: "Frontend",
          items: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SCSS"]
        },
        backend: {
          title: "Backend",
          items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"]
        },
        mobile: {
          title: "Mobile",
          items: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Native APIs"]
        }
      },
      cta: {
        title: "Ready for Your Project?",
        description: "Contact me for a free consultation about your website or mobile application",
        button: "Contact Me"
      }
    },

    graphicDesign: {
      hero: {
        title: "Visual Identity Creation & Graphic Design",
        description: "I professionally create unique logos, brands and print materials that distinguish your business from the competition and leave an unforgettable impression on your target audience."
      },
      services: {
        logoDesign: {
          title: "Logo Design",
          description: "I create memorable logos that represent the essence of your brand",
          features: ["Original concepts", "Vector formats", "Brandbook", "Various versions", "Revisions included", "Design ownership"]
        },
        branding: {
          title: "Branding",
          description: "Complete visual identity that builds brand recognition",
          features: ["Brandbook", "Visual identity", "Typography", "Color palette", "Applications", "Brand Guidelines"]
        },
        printMaterials: {
          title: "Print Materials",
          description: "Physical marketing materials that promote your business professionally",
          features: ["T-shirts & textiles", "Packaging", "Office materials", "Marketing materials", "Signage", "Branded products"]
        }
      },
      process: {
        title: "Creative Process",
        steps: [
          {
            title: "Research",
            description: "I analyze your brand, target audience and competition"
          },
          {
            title: "Concepts",
            description: "I create initial ideas and visual directions"
          },
          {
            title: "Development",
            description: "I develop selected concepts to final version"
          },
          {
            title: "Finalization",
            description: "Preparation for print and digital use"
          }
        ]
      },
      portfolio: {
        title: "Work Portfolio",
        logos: {
          title: "Logo Design",
          items: [
            {
              title: "InnovateTech Solutions",
              description: "Modern technology company",
              category: "Tech startup"
            },
            {
              title: "GreenHarvest",
              description: "Organic food and agriculture",
              category: "Organic food"
            },
            {
              title: "AurumCraft",
              description: "Luxury jewelry",
              category: "Luxury jewelry"
            }
          ]
        },
        branding: {
          title: "Complete Branding",
          items: [
            {
              title: "PowerFit Pro",
              description: "Fitness and wellness brand",
              category: "Fitness"
            },
            {
              title: "Aroma Collective",
              description: "Premium coffee shop brand",
              category: "Food & Beverage"
            }
          ]
        },
        print: {
          title: "Print Materials",
          description: "Branded t-shirts, packaging boxes and promotional materials"
        },
        books: {
          title: "Book Design",
          description: "Professional cover design and layout for publications"
        }
      },
      cta: {
        title: "Ready for a New Visual Identity?",
        description: "Contact me for a free consultation about your brand",
        button: "Contact Me"
      }
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
      title: "Kreative Multimediale Lösungen",
      subtitle: "Professionelle Website-Erstellung, Webdesign, Grafikdesign, Videoproduktion, Digital Marketing-Services und mobile App-Entwicklung für Android und iOS für Ihr Unternehmen",
      servicesButton: "Leistungen ansehen",
      portfolioButton: "Unsere Arbeiten",
      locationTitle: "Arbeiten mit führenden Marken",
      locations: ["Stuttgart", "Milano", "Ulm"]
    },
    about: {
      title: "Über MULTIMEDIA AGRONDESIGN",
      subtitle: "Wir schaffen außergewöhnliche digitale Erlebnisse, die Ihr Unternehmen voranbringen",
      storyTitle: "Unsere Geschichte",
      storyP1: "Ich habe MULTIMEDIA AGRONDESIGN mit der Vision gegründet, Unternehmen dabei zu helfen, sich in der digitalen Welt zu behaupten. Ich bin spezialisiert auf die Erstellung hochwertiger Multimedia-Inhalte, die Aufmerksamkeit erregen, Marken aufbauen und Ergebnisse erzielen.",
      storyP2: "Als erfahrener Designer, Entwickler und Marketing-Profi arbeite ich engagiert daran, Ihre Ideen durch innovative digitale Lösungen zum Leben zu erwecken.",
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
          title: "Erstellung Ihrer Website und Mobile Anwendung",
          description: "Responsive, SEO-optimierte Websites und mobile Anwendungen für Android und iOS, die Besucher anziehen und in Kunden verwandeln.",
          features: ["Custom Design", "Mobile Responsive", "SEO-Optimierung", "Android & iOS Apps"]
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
        subject: "Betreff",
        subjectPlaceholder: "Betreff Ihrer Nachricht",
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
        validation: "Name, E-Mail, Betreff und Nachricht sind erforderlich"
      }
    },
    footer: {
      brand: "Wir schaffen außergewöhnliche digitale Erlebnisse, die Ihr Unternehmen durch innovative Multimedia-Lösungen voranbringen.",
      services: "Leistungen",
      company: "Unternehmen",
      contact: "Kontakt",
      phone: "+49 15560 873124",
      email: "agron6922@gmail.com",
      location: "Geislingen an der Steige, Deutschland",
      copyright: "© 2025 MULTIMEDIA AGRONDESIGN. Alle Rechte vorbehalten.",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      cookies: "Cookies",
      impresum: "Impressum",
      career: "Karriere"
    },
    
    // Impresum content (German)
    impresum: {
      title: "Impressum (Rechtliche Hinweise)",
      subtitle: "Angaben gemäß § 5 TMG",
      sections: {
        company: {
          title: "AGRONDESIGN",
          owner: "Inhaber: Agron Osmani",
          address: "Luise-Hainlen-Weg 4/4\n73312 Geislingen an der Steige\nDeutschland"
        },
        contact: {
          title: "Kontakt",
          email: "E-Mail: agron6922@gmail.com"
        },
        representative: {
          title: "Vertreten durch",
          name: "Agron Osmani"
        },
        tax: {
          title: "Steuerliche Angaben",
          taxNumber: "Steuernummer: 48267305956",
          vatNumber: "Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz (USt-IdNr.): DE354016444"
        },
        profession: {
          title: "Berufsbezeichnung",
          description: "Grafikdesigner & Entwickler"
        }
      }
    },

    // Privacy Policy content (German)
    privacy: {
      title: "Datenschutzerklärung",
      subtitle: "Informationen zum Schutz personenbezogener Daten gemäß DSGVO",
      sections: {
        dataCollection: {
          title: "Datenerfassung",
          content: "Wir sammeln personenbezogene Daten, die Sie freiwillig über das Kontaktformular bereitstellen, einschließlich Name, E-Mail-Adresse und Nachricht. Diese Daten werden ausschließlich zur Kommunikation und Bereitstellung unserer Dienstleistungen verwendet."
        },
        dataUsage: {
          title: "Datenverwendung",
          content: "Wir verwenden Ihre personenbezogenen Daten für: Beantwortung Ihrer Anfragen, Bereitstellung angeforderter Dienstleistungen, Verbesserung unserer Website und Dienstleistungen, und Versendung relevanter Informationen über unsere Dienstleistungen (nur mit Ihrer Erlaubnis)."
        },
        cookies: {
          title: "Cookies",
          content: "Wir verwenden Cookies zur Verbesserung der Website-Funktionalität und zur Analyse des Traffics. Sie können Cookies über Ihre Browser-Einstellungen kontrollieren. Detailliertere Informationen finden Sie in unserer Cookie-Richtlinie."
        },
        rights: {
          title: "Ihre Rechte",
          content: "Sie haben das Recht auf Zugang, Berichtigung, Löschung und Übertragbarkeit Ihrer Daten. Sie können auch die Verarbeitung einschränken oder der Verarbeitung Ihrer Daten widersprechen. Um diese Rechte auszuüben, kontaktieren Sie uns per E-Mail."
        },
        contact: {
          title: "Kontakt",
          content: "Für Datenschutzfragen kontaktieren Sie uns unter: agron6922@gmail.com. Wir behalten uns das Recht vor, diese Richtlinie zu aktualisieren, worüber wir Sie über unsere Website informieren werden."
        }
      }
    },

    // Terms of Service content (German)
    terms: {
      title: "Nutzungsbedingungen",
      subtitle: "Regeln und Bedingungen für die Nutzung unserer Website und Dienstleistungen",
      sections: {
        scope: {
          title: "Anwendungsbereich",
          content: "Diese Bedingungen gelten für alle Nutzer unserer Website agrmultimedia.eu und unserer Dienstleistungen. Durch die Nutzung der Website akzeptieren Sie diese Bedingungen vollständig."
        },
        services: {
          title: "Unsere Dienstleistungen",
          content: "Wir bieten Webdesign-, Grafikdesign-, Videoproduktions-, Digital Marketing- und mobile Anwendungsentwicklungsdienstleistungen an. Alle Dienstleistungen werden professionell und innerhalb vereinbarter Zeitrahmen erbracht."
        },
        liability: {
          title: "Haftungsbeschränkung",
          content: "Wir haften nicht für Schäden, die durch die Nutzung unserer Website entstehen, außer in Fällen grober Fahrlässigkeit oder Vorsatz. Unsere Haftung ist auf den Wert der vertraglich vereinbarten Dienstleistungen beschränkt."
        },
        intellectual: {
          title: "Geistiges Eigentum",
          content: "Alle Inhalte auf der Website sind urheberrechtlich geschützt. Kopieren, Verbreitung oder kommerzielle Nutzung ohne schriftliche Genehmigung ist verboten. Für Kunden erstellte Projekte werden nach Zahlung zu deren Eigentum."
        },
        termination: {
          title: "Beendigung der Dienstleistungen",
          content: "Wir behalten uns das Recht vor, Dienstleistungen bei Verletzung der Nutzungsbedingungen zu beenden. Kunden können Dienstleistungen unter Beachtung vereinbarter Kündigungsbedingungen kündigen."
        }
      }
    },

    // Cookie Policy content (German)
    cookies: {
      title: "Cookie-Richtlinie",
      subtitle: "Wie wir Cookies auf unserer Website verwenden",
      sections: {
        whatAre: {
          title: "Was sind Cookies",
          content: "Cookies sind kleine Dateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website besuchen. Sie helfen uns, die Website besser funktionieren zu lassen und Ihnen eine bessere Benutzererfahrung zu bieten."
        },
        howWeUse: {
          title: "Wie wir Cookies verwenden",
          content: "Wir verwenden Cookies für: Speichern Ihrer Sprach- und Einstellungen, Analyse des Website-Traffics, Verbesserung der Website-Leistung und Bereitstellung von Sicherheitsfunktionen."
        },
        types: {
          title: "Arten von Cookies",
          content: "Wir verwenden essenzielle Cookies (notwendig für den Website-Betrieb), analytische Cookies (Google Analytics), funktionale Cookies (Einstellungen speichern) und Leistungs-Cookies (Website-Optimierung)."
        },
        control: {
          title: "Cookie-Kontrolle",
          content: "Sie können Cookies über Ihre Browser-Einstellungen kontrollieren. Sie können sie blockieren oder löschen, aber dies kann die Website-Funktionalität beeinträchtigen. Die meisten Browser akzeptieren Cookies automatisch."
        },
        thirdParty: {
          title: "Cookies von Dritten",
          content: "Wir verwenden Google Analytics zur Traffic-Analyse. Google kann eigene Cookies setzen. Bitte überprüfen Sie Googles Datenschutzrichtlinie für weitere Informationen über deren Cookies."
        }
      }
    },

    webDesign: {
      hero: {
        title: "Website-Erstellung & Mobile App-Entwicklung",
        description: "Ich entwickle professionell responsive Websites und mobile Anwendungen für Android und iOS, die Besucher anziehen, die Benutzererfahrung verbessern und Besucher effizient in Kunden umwandeln durch moderne Technologien und optimiertes Design."
      },
      services: {
        websites: {
          title: "Websites",
          description: "Ich erstelle moderne, responsive Websites, die perfekt auf allen Geräten funktionieren",
          features: ["Responsive Design", "SEO-Optimierung", "Schnelles Laden", "CMS-Integration", "Sicherheit", "Analytics"]
        },
        mobileApps: {
          title: "Mobile Anwendungen",
          description: "Ich entwickle native und plattformübergreifende Anwendungen für Android und iOS Plattformen",
          features: ["Android Apps", "iOS Apps", "Plattformübergreifend", "Push-Benachrichtigungen", "Offline-Funktionalität", "App Store Veröffentlichung"]
        },
        responsive: {
          title: "Responsive Design",
          description: "Ich stelle sicher, dass Ihre Website auf allen Geräten und Bildschirmgrößen perfekt aussieht",
          features: ["Mobile-First-Ansatz", "Tablet-Optimierung", "Desktop-Performance", "Touchscreen-Unterstützung", "Retina Display", "Cross-Browser-Kompatibilität"]
        }
      },
      process: {
        title: "Arbeitsprozess",
        steps: [
          {
            title: "Planung",
            description: "Ich analysiere Ihre Bedürfnisse und erstelle eine detaillierte Projektstrategie"
          },
          {
            title: "Design",
            description: "Ich erstelle Wireframes, Mockups und das finale visuelle Design"
          },
          {
            title: "Entwicklung",
            description: "Ich programmiere funktionale Anwendungen mit den neuesten Technologien"
          },
          {
            title: "Testing & Launch",
            description: "Ich teste gründlich und starte das Projekt erfolgreich mit Support"
          }
        ]
      },
      portfolio: {
        title: "Projekt-Portfolio",
        items: [
          {
            title: "TechFlow Business Solutions",
            description: "Komplexe Web-Plattform für Geschäftsverwaltung"
          },
          {
            title: "EcoMarket Online Store", 
            description: "E-Commerce-Plattform für umweltfreundliche Produkte"
          },
          {
            title: "FitLife Mobile App",
            description: "Personalisierte Fitness-Anwendung für Android und iOS"
          },
          {
            title: "ILMBUDS",
            description: "Islamische Anwendung für Kinder"
          }
        ]
      },
      technologies: {
        title: "Technologien die ich verwende",
        frontend: {
          title: "Frontend",
          items: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SCSS"]
        },
        backend: {
          title: "Backend",
          items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"]
        },
        mobile: {
          title: "Mobile",
          items: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Native APIs"]
        }
      },
      cta: {
        title: "Bereit für Ihr Projekt?",
        description: "Kontaktieren Sie mich für eine kostenlose Beratung zu Ihrer Website oder mobilen Anwendung",
        button: "Kontaktieren Sie mich"
      }
    },

    graphicDesign: {
      hero: {
        title: "Visuelle Identität & Grafikdesign",
        description: "Ich erstelle professionell einzigartige Logos, Marken und Druckmaterialien, die Ihr Unternehmen von der Konkurrenz abheben und einen unvergesslichen Eindruck bei Ihrer Zielgruppe hinterlassen."
      },
      services: {
        logoDesign: {
          title: "Logo Design",
          description: "Ich erstelle einprägsame Logos, die die Essenz Ihrer Marke repräsentieren",
          features: ["Originelle Konzepte", "Vektorformate", "Brandbook", "Verschiedene Versionen", "Überarbeitungen inklusive", "Design-Eigentum"]
        },
        branding: {
          title: "Branding",
          description: "Vollständige visuelle Identität, die Markenbekanntheit aufbaut",
          features: ["Brandbook", "Visuelle Identität", "Typografie", "Farbpalette", "Anwendungen", "Brand Guidelines"]
        },
        printMaterials: {
          title: "Druckmaterialien",
          description: "Physische Marketingmaterialien, die Ihr Unternehmen professionell bewerben",
          features: ["T-Shirts & Textilien", "Verpackungen", "Büromaterialien", "Marketingmaterialien", "Beschilderung", "Branded Produkte"]
        }
      },
      process: {
        title: "Kreativer Prozess",
        steps: [
          {
            title: "Recherche",
            description: "Ich analysiere Ihre Marke, Zielgruppe und Konkurrenz"
          },
          {
            title: "Konzepte",
            description: "Ich erstelle erste Ideen und visuelle Richtungen"
          },
          {
            title: "Entwicklung",
            description: "Ich entwickle ausgewählte Konzepte zur finalen Version"
          },
          {
            title: "Finalisierung",
            description: "Vorbereitung für Druck und digitale Nutzung"
          }
        ]
      },
      portfolio: {
        title: "Arbeits-Portfolio",
        logos: {
          title: "Logo Design",
          items: [
            {
              title: "InnovateTech Solutions",
              description: "Modernes Technologieunternehmen",
              category: "Tech startup"
            },
            {
              title: "GreenHarvest",
              description: "Bio-Lebensmittel und Landwirtschaft",
              category: "Bio-Lebensmittel"
            },
            {
              title: "AurumCraft",
              description: "Luxus-Schmuck",
              category: "Luxus-Schmuck"
            }
          ]
        },
        branding: {
          title: "Komplettes Branding",
          items: [
            {
              title: "PowerFit Pro",
              description: "Fitness- und Wellness-Marke",
              category: "Fitness"
            },
            {
              title: "Aroma Collective",
              description: "Premium-Coffeeshop-Marke",
              category: "Food & Beverage"
            }
          ]
        },
        print: {
          title: "Druckmaterialien",
          description: "Branded T-Shirts, Verpackungsboxen und Werbematerialien"
        },
        books: {
          title: "Buchdesign",
          description: "Professionelles Cover-Design und Layout für Publikationen"
        }
      },
      cta: {
        title: "Bereit für eine neue visuelle Identität?",
        description: "Kontaktieren Sie mich für eine kostenlose Beratung zu Ihrer Marke",
        button: "Kontaktieren Sie mich"
      }
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
      title: "Zgjidhje Kreative Multimediale",
      subtitle: "Shërbime profesionale të krijimit të faqeve web, web dizajnit, dizajnit grafik, prodhimit të videove, marketingut dixhital dhe zhvillimit të aplikacioneve mobile për Android dhe iOS për biznesin tuaj",
      servicesButton: "Shiko Shërbimet",
      portfolioButton: "Puna Jonë",
      locationTitle: "Duke punuar me marka kryesuese",
      locations: ["Stuttgart", "Milano", "Ulm"]
    },
    about: {
      title: "Rreth MULTIMEDIA AGRONDESIGN",
      subtitle: "Duke krijuar përvojë të jashtëzakonshme dixhitale që shtyjnë biznesin tuaj përpara",
      storyTitle: "Historia Jonë",
      storyP1: "Unë themelova MULTIMEDIA AGRONDESIGN me një vizion për të ndihmuar bizneset të dallohen në botën dixhitale. Specializohem në krijimin e përmbajtjeve multimedia me cilësi të lartë që tërheqin vëmendjen, ndërtojnë marka dhe sjellin rezultate.",
      storyP2: "Si një dizajner i përvojshëm, zhvillues dhe profesionist marketingu, punoj me përkushtim për t'i dhënë jetë ideve tuaja përmes zgjidhjeve inovative dixhitale.",
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
          title: "Krijimi i Faqes suaj të Internetit dhe Aplikacionit Mobil",
          description: "Uebsajte përgjigës, të optimizuara për SEO dhe aplikacione mobile për Android dhe iOS që tërheqin vizitorë dhe i kthejnë ata në klientë.",
          features: ["Dizajn i Personalizuar", "Mobile Responsive", "Optimizim SEO", "Aplikacione Android & iOS"]
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
        subject: "Tema",
        subjectPlaceholder: "Tema e mesazhit tuaj",
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
        validation: "Emri, email, tema dhe mesazhi janë të detyrueshme"
      }
    },
    footer: {
      brand: "Duke krijuar përvojë të jashtëzakonshme dixhitale që shtyjnë biznesin tuaj përpara përmes zgjidhjeve inovative multimedia.",
      services: "Shërbimet",
      company: "Kompania",
      contact: "Kontakt",
      phone: "+49 15560 873124",
      email: "agron6922@gmail.com",
      location: "Geislingen an der Steige, Gjermani",
      copyright: "© 2025 MULTIMEDIA AGRONDESIGN. Të gjitha të drejtat të rezervuara.",
      privacy: "Privatësia",
      terms: "Kushtet",
      cookies: "Cookies",
      impresum: "Impresum",
      career: "Karriera"
    },
    
    // Impresum content (Albanian)
    impresum: {
      title: "Impresum (Informacion Ligjor)",
      subtitle: "Të dhëna sipas § 5 TMG (Ligji gjerman për telemedian)",
      sections: {
        company: {
          title: "AGRONDESIGN",
          owner: "Pronar: Agron Osmani",
          address: "Luise-Hainlen-Weg 4/4\n73312 Geislingen an der Steige\nGjermani"
        },
        contact: {
          title: "Kontakti",
          email: "Email: agron6922@gmail.com"
        },
        representative: {
          title: "Përfaqësuar nga",
          name: "Agron Osmani"
        },
        tax: {
          title: "Informacione Tatimore",
          taxNumber: "Numri Tatimor (Steuernummer): 48267305956",
          vatNumber: "Numri i Identifikimit të TVSH-së sipas §27a të Ligjit Gjerman të TVSH-së (USt-IdNr.): DE354016444"
        },
        profession: {
          title: "Titulli Profesional",
          description: "Dizajner Grafik & Zhvillues"
        }
      }
    },

    // Privacy Policy content (Albanian)
    privacy: {
      title: "Politika e Privatësisë",
      subtitle: "Informacione mbi mbrojtjen e të dhënave personale në përputhje me GDPR",
      sections: {
        dataCollection: {
          title: "Mbledhja e të Dhënave",
          content: "Ne mbledhim të dhëna personale që ju jepni vullnetarisht përmes formës së kontaktit, duke përfshirë emrin, adresën e emailit dhe mesazhin. Këto të dhëna përdoren ekskluzivisht për komunikim dhe ofrimin e shërbimeve tona."
        },
        dataUsage: {
          title: "Përdorimi i të Dhënave",
          content: "Ne përdorim të dhënat tuaja personale për: përgjigjen ndaj pyetjeve tuaja, ofrimin e shërbimeve të kërkuara, përmirësimin e faqes sonë dhe shërbimeve, dhe dërgimin e informacioneve relevante mbi shërbimet tona (vetëm me lejen tuaj)."
        },
        cookies: {
          title: "Cookies",
          content: "Ne përdorim cookies për të përmirësuar funksionalitetin e faqes dhe për analizë trafikut. Ju mund t'i kontrolloni cookies përmes cilësimeve të browserit tuaj. Për informacione më të detajuara, shikoni Politikën tonë të Cookies."
        },
        rights: {
          title: "Të Drejtat Tuaja",
          content: "Ju keni të drejtën e aksesit, korrigjimit, fshirjes dhe transferimit të të dhënave tuaja. Ju gjithashtu mund të kufizoni ose kundërshtoni përpunimin e të dhënave tuaja. Për të ushtruar këto të drejta, na kontaktoni përmes emailit."
        },
        contact: {
          title: "Kontakti",
          content: "Për pyetje mbi privatësinë na kontaktoni në: agron6922@gmail.com. Ne rezervojmë të drejtën për të përditësuar këtë politikë, për të cilën do t'ju njoftojmë përmes faqes sonë."
        }
      }
    },

    // Terms of Service content (Albanian)
    terms: {
      title: "Kushtet e Shërbimit",
      subtitle: "Rregullat dhe kushtet për përdorimin e faqes sonë dhe shërbimeve",
      sections: {
        scope: {
          title: "Fushëveprimi",
          content: "Këto kushte zbatohen për të gjithë përdoruesit e faqes sonë agrmultimedia.eu dhe shërbimeve tona. Duke përdorur faqen, ju i pranoni këto kushte plotësisht."
        },
        services: {
          title: "Shërbimet Tona",
          content: "Ne ofrojmë shërbime web dizajni, dizajni grafik, prodhimi video, marketingu dixhital dhe zhvillimi i aplikacioneve mobile. Të gjitha shërbimet ofrohen profesionalisht dhe brenda afateve të rëna dakord."
        },
        liability: {
          title: "Kufizimi i Përgjegjësisë",
          content: "Ne nuk jemi përgjegjës për dëmet që rrjedhin nga përdorimi i faqes sonë përveç rasteve të neglizhencës së rëndë ose qëllimit. Përgjegjësia jonë kufizohet në vlerën e shërbimeve të kontratuara."
        },
        intellectual: {
          title: "Pronësia Intelektuale",
          content: "I gjithë përmbajtja në faqe është e mbrojtur nga të drejtat e autorit. Kopjimi, shpërndarja ose përdorimi komercial pa leje me shkrim është i ndaluar. Projektet e krijuara për klientët bëhen pronë e tyre pas pagesës."
        },
        termination: {
          title: "Ndërprerja e Shërbimeve",
          content: "Ne rezervojmë të drejtën për të ndërprerë shërbimet në rast të shkeljes së kushteve të përdorimit. Klientët mund të anulojnë shërbimet duke respektuar kushtet e rëna dakord të anulimit."
        }
      }
    },

    // Cookie Policy content (Albanian)
    cookies: {
      title: "Politika e Cookies",
      subtitle: "Si përdorim cookies në faqen tonë",
      sections: {
        whatAre: {
          title: "Çfarë janë Cookies",
          content: "Cookies janë skedarë të vegjël që ruhen në pajisjen tuaj kur vizitoni faqen tonë. Ato na ndihmojnë ta bëjmë faqen të funksionojë më mirë dhe t'ju ofrojmë një përvojë më të mirë përdoruesi."
        },
        howWeUse: {
          title: "Si i Përdorim Cookies",
          content: "Ne përdorim cookies për: ruajtjen e gjuhës dhe cilësimeve tuaja, analizën e trafikut të faqes, përmirësimin e performancës së faqes, dhe ofrimin e funksioneve të sigurisë."
        },
        types: {
          title: "Llojet e Cookies",
          content: "Ne përdorim cookies thelbësore (të nevojshme për funksionimin e faqes), cookies analitike (Google Analytics), cookies funksionale (ruajtja e cilësimeve), dhe cookies performancë (optimizimi i faqes)."
        },
        control: {
          title: "Kontrolli i Cookies",
          content: "Ju mund t'i kontrolloni cookies përmes cilësimeve të browserit tuaj. Ju mund t'i bllokoni ose t'i fshini, por kjo mund të ndikojë në funksionalitetin e faqes. Shumica e browserëve i pranojnë cookies automatikisht."
        },
        thirdParty: {
          title: "Cookies të Palëve të Treta",
          content: "Ne përdorim Google Analytics për analizë trafikut. Google mund të vendosë cookies të tij. Ju lutemi kontrolloni politikën e privatësisë së Google për më shumë informacione mbi cookies e tyre."
        }
      }
    },

    webDesign: {
      hero: {
        title: "Krijimi i Faqeve të Internetit dhe Zhvillimi i Aplikacioneve Mobile",
        description: "Unë zhvilloj profesionalisht faqe interneti responsive dhe aplikacione mobile për Android dhe iOS që tërheqin vizitorët, përmirësojnë përvojën e përdoruesit dhe konvertojnë me efikasitet vizitorët në klientë përmes teknologjive moderne dhe dizajnit të optimizuar."
      },
      services: {
        websites: {
          title: "Faqe Interneti",
          description: "Krijoj faqe interneti moderne, responsive që funksionojnë përkrysësh në të gjitha pajisjet",
          features: ["Dizajn Responsive", "Optimizim SEO", "Ngarkimi i Shpejtë", "Integrimi CMS", "Siguria", "Analitikë"]
        },
        mobileApps: {
          title: "Aplikacione Mobile",
          description: "Zhvilloj aplikacione native dhe cross-platform për platformat Android dhe iOS",
          features: ["Aplikacione Android", "Aplikacione iOS", "Cross-platform", "Push Njoftimet", "Funksionaliteti Offline", "Publikimi App Store"]
        },
        responsive: {
          title: "Dizajn Responsive",
          description: "Siguroj që faqja juaj të duket përkryesisht në të gjitha pajisjet dhe madhësitë e ekranit",
          features: ["Qasja Mobile-First", "Optimizimi Tablet", "Performancë Desktop", "Mbështetja Touchscreen", "Retina Display", "Kompatibilitet Cross-browser"]
        }
      },
      process: {
        title: "Procesi i Punës",
        steps: [
          {
            title: "Planifikimi",
            description: "Analizoj nevojat tuaja dhe krijoj një strategji të detajuar projekti"
          },
          {
            title: "Dizajni",
            description: "Krijoj wireframes, mockups dhe dizajnin e fundit vizual"
          },
          {
            title: "Zhvillimi",
            description: "Kodoj aplikacion funksional duke përdorur teknologjitë më të fundit"
          },
          {
            title: "Testimi & Lansimi",
            description: "Testoj plotësisht dhe lançoj me sukses projektin me mbështetje"
          }
        ]
      },
      portfolio: {
        title: "Portfolioja e Projekteve",
        items: [
          {
            title: "TechFlow Business Solutions",
            description: "Platformë web komplekse për menaxhimin e biznesit"
          },
          {
            title: "EcoMarket Online Store", 
            description: "Platformë e-commerce për produkte miqësore me mjedisin"
          },
          {
            title: "FitLife Mobile App",
            description: "Aplikacion fitness i personalizuar për Android dhe iOS"
          },
          {
            title: "ILMBUDS",
            description: "Aplikacion islamik për fëmijë"
          }
        ]
      },
      technologies: {
        title: "Teknologjitë që Përdor",
        frontend: {
          title: "Frontend",
          items: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SCSS"]
        },
        backend: {
          title: "Backend",
          items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"]
        },
        mobile: {
          title: "Mobile",
          items: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Native APIs"]
        }
      },
      cta: {
        title: "Gati për Projektin Tuaj?",
        description: "Kontaktoni për një konsultim falas mbi faqen tuaj të internetit ose aplikacionin mobil",
        button: "Kontaktoni"
      }
    },

    graphicDesign: {
      hero: {
        title: "Krijimi i Identitetit Vizual dhe Dizajni Grafik",
        description: "Krijoj profesionalisht logo të veçanta, marka dhe materiale printimi që dallojnë biznesin tuaj nga konkurrentët dhe lënë një përshtypje të paharrueshme tek audienca juaj e synuar."
      },
      services: {
        logoDesign: {
          title: "Dizajni i Logos",
          description: "Krijoj logo të paharrueshme që përfaqësojnë esencën e markës suaj",
          features: ["Koncepte origjinale", "Formate vektori", "Brandbook", "Versione të ndryshme", "Rishikime të përfshira", "Pronësia e dizajnit"]
        },
        branding: {
          title: "Brending",
          description: "Identitet vizual i plotë që ndërton njohjen e markës",
          features: ["Brandbook", "Identiteti vizual", "Tipografia", "Paleta e ngjyrave", "Aplikacione", "Udhëzimet e markës"]
        },
        printMaterials: {
          title: "Materiale Printimi",
          description: "Materiale marketingu fizike që promovojnë biznesin tuaj profesionalisht",
          features: ["Bluzat & tekstilet", "Paketimet", "Materialet e zyrës", "Materialet marketingu", "Tabelat", "Produktet e markës"]
        }
      },
      process: {
        title: "Procesi Kreativ",
        steps: [
          {
            title: "Hulumtimi",
            description: "Analizoj markën tuaj, audiencën e synuar dhe konkurrencën"
          },
          {
            title: "Konceptet",
            description: "Krijoj idetë fillestare dhe drejtimet vizuale"
          },
          {
            title: "Zhvillimi",
            description: "Zhvilloj konceptet e zgjedhura deri në versionin final"
          },
          {
            title: "Finalizimi",
            description: "Përgatitje për printim dhe përdorim dixhital"
          }
        ]
      },
      portfolio: {
        title: "Portfolioja e Punëve",
        logos: {
          title: "Dizajni i Logos",
          items: [
            {
              title: "InnovateTech Solutions",
              description: "Kompani moderne teknologjike",
              category: "Tech startup"
            },
            {
              title: "GreenHarvest",
              description: "Ushqim organik dhe bujqësi",
              category: "Ushqim organik"
            },
            {
              title: "AurumCraft",
              description: "Stolitë luksoze",
              category: "Stoli luksoze"
            }
          ]
        },
        branding: {
          title: "Brending i Plotë",
          items: [
            {
              title: "PowerFit Pro",
              description: "Marka fitness dhe wellness",
              category: "Fitness"
            },
            {
              title: "Aroma Collective",
              description: "Marka premium kafeje",
              category: "Ushqim & Pije"
            }
          ]
        },
        print: {
          title: "Materiale Printimi",
          description: "Bluzat me markë, kutitë e paketimit dhe materialet promocionale"
        },
        books: {
          title: "Dizajni i Librave",
          description: "Dizajni profesional i kopertinave dhe layout-i për publikime"
        }
      },
      cta: {
        title: "Gati për një Identitet të Ri Vizual?",
        description: "Kontaktoni për një konsultim falas mbi markën tuaj",
        button: "Kontaktoni"
      }
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