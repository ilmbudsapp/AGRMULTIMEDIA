export type Language = 'de' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    blog: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    servicesButton: string;
    portfolioButton: string;
    locationTitle: string;
    locations: string[];
  };
}

export const translations: Record<Language, Translations> = {
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
      subtitle: "Professional web design, graphic design, video production and digital marketing",
      servicesButton: "View Services",
      portfolioButton: "Our Work",
      locationTitle: "Working with leading brands",
      locations: ["Stuttgart", "Milano", "Ulm"]
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
      subtitle: "Professionelles Webdesign, Grafikdesign, Videoproduktion und digitales Marketing",
      servicesButton: "Leistungen ansehen",
      portfolioButton: "Unsere Arbeiten",
      locationTitle: "Arbeiten mit führenden Marken",
      locations: ["Stuttgart", "Milano", "Ulm"]
    }
  }
};

export const getTranslations = (lang: Language): Translations => {
  return translations[lang] ?? translations.de;
};

export const languages: Array<{ code: Language; name: string; flag: string }> = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
];
