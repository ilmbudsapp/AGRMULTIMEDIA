import type { ServiceLang } from "@/lib/servicePageI18n";

const P = "/portfolio/ilmbuds";

export const ILMBUDS_PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.ilmbuds.app";

/** Replaces the generic intro for “custom-business-applications” on the application design page. */
export const ilmbudsCustomApplicationsIntroByLang: Record<ServiceLang, string> = {
  en: "Shipped project: ILMBUDS — an Islamic education app for children (multilingual UI, quizzes, stories, Quran content, and more). Available on Google Play; screenshots and store visuals below.",
  de: "Umgesetztes Projekt: ILMBUDS — eine islamische Bildungs-App für Kinder (mehrsprachige Oberfläche, Quiz, Geschichten, Koran-Inhalte u. a.). Erhältlich bei Google Play; Screenshots und Store-Grafiken unten.",
  it: "Progetto pubblicato: ILMBUDS — app educativa islamica per bambini (interfaccia multilingue, quiz, storie, contenuti sul Corano e altro). Su Google Play; screenshot e materiali store sotto.",
  sr: "Objavljen projekat: ILMBUDS — aplikacija za islamsko obrazovanje dece (višejezički interfejs, kvizovi, priče, sadržaj iz Kurana itd.). Dostupna na Google Play-u; screenshot-ovi i promotivni materijali ispod.",
  al: "Projekt i publikuar: ILMBUDS — aplikacion edukativ islam për fëmijë (ndërfaqe shumëgjuhëshe, kuize, tregime, përmbajtje Kuranore etj.). Në Google Play; pamjet e ekranit dhe materialet më poshtë.",
};

export const ilmbudsPlayStoreLinkByLang: Record<ServiceLang, { href: string; label: string }> = {
  en: { href: ILMBUDS_PLAY_STORE, label: "ILMBUDS on Google Play — download / details" },
  de: { href: ILMBUDS_PLAY_STORE, label: "ILMBUDS bei Google Play — Download / Details" },
  it: { href: ILMBUDS_PLAY_STORE, label: "ILMBUDS su Google Play — scarica / dettagli" },
  sr: { href: ILMBUDS_PLAY_STORE, label: "ILMBUDS na Google Play-u — preuzimanje / detalji" },
  al: { href: ILMBUDS_PLAY_STORE, label: "ILMBUDS në Google Play — shkarko / detaje" },
};

export const ilmbudsAppGalleryByLang: Record<ServiceLang, { src: string; alt: string }[]> = {
  en: [
    {
      src: `${P}/01-ilmbuds-3d-box-mockup.png`,
      alt: "ILMBUDS — 3D software box mockups for Google Play with app UI preview: Islamic quiz and stories cards, child-friendly design.",
    },
    {
      src: `${P}/02-ilmbuds-google-play-listing.png`,
      alt: "ILMBUDS listing on Google Play — store page with screenshots in multiple languages and install options.",
    },
    {
      src: `${P}/03-ilmbuds-home-screen-albanian.png`,
      alt: "ILMBUDS mobile home screen in Albanian — welcome header, Bismillah, and grid of feature cards (quiz, stories, Quran, and more).",
    },
    {
      src: `${P}/04-ilmbuds-promo-flyer.png`,
      alt: "ILMBUDS promotional flyer — multilingual overview, Google Play badge, QR code, and app features for families.",
    },
  ],
  de: [
    {
      src: `${P}/01-ilmbuds-3d-box-mockup.png`,
      alt: "ILMBUDS — 3D-Softwarebox-Mockups für Google Play mit UI-Vorschau: islamisches Quiz und Geschichten, kindgerechtes Design.",
    },
    {
      src: `${P}/02-ilmbuds-google-play-listing.png`,
      alt: "ILMBUDS bei Google Play — Store-Seite mit Screenshots in mehreren Sprachen und Installationsoptionen.",
    },
    {
      src: `${P}/03-ilmbuds-home-screen-albanian.png`,
      alt: "ILMBUDS Startbildschirm (Albanisch) — Willkommensbereich, Bismillah und Kartenraster für Funktionen wie Quiz und Geschichten.",
    },
    {
      src: `${P}/04-ilmbuds-promo-flyer.png`,
      alt: "ILMBUDS Werbeflyer — mehrsprachige Übersicht, Google-Play-Badge, QR-Code und App-Funktionen.",
    },
  ],
  it: [
    {
      src: `${P}/01-ilmbuds-3d-box-mockup.png`,
      alt: "ILMBUDS — mockup scatole software 3D per Google Play con anteprima UI: quiz islamico e storie, design per bambini.",
    },
    {
      src: `${P}/02-ilmbuds-google-play-listing.png`,
      alt: "ILMBUDS su Google Play — pagina store con screenshot in più lingue e pulsante installazione.",
    },
    {
      src: `${P}/03-ilmbuds-home-screen-albanian.png`,
      alt: "ILMBUDS schermata home in albanese — intestazione di benvenuto, Bismillah e griglia di schede funzioni.",
    },
    {
      src: `${P}/04-ilmbuds-promo-flyer.png`,
      alt: "Volantino promozionale ILMBUDS — panoramica multilingue, badge Google Play, QR code e funzionalità.",
    },
  ],
  sr: [
    {
      src: `${P}/01-ilmbuds-3d-box-mockup.png`,
      alt: "ILMBUDS — 3D mockup kutija za Google Play sa pregledom UI-ja: islamski kviz i priče, dečiji dizajn.",
    },
    {
      src: `${P}/02-ilmbuds-google-play-listing.png`,
      alt: "ILMBUDS na Google Play-u — stranica prodavnice sa screenshot-ima na više jezika i opcijama instalacije.",
    },
    {
      src: `${P}/03-ilmbuds-home-screen-albanian.png`,
      alt: "ILMBUDS početni ekran na albanskom — dobrodošlica, Bismillah i mreža kartica sa funkcijama aplikacije.",
    },
    {
      src: `${P}/04-ilmbuds-promo-flyer.png`,
      alt: "ILMBUDS promotivni letak — višejezički pregled, Google Play značka, QR kod i funkcije aplikacije.",
    },
  ],
  al: [
    {
      src: `${P}/01-ilmbuds-3d-box-mockup.png`,
      alt: "ILMBUDS — mockup kutish 3D për Google Play me parje UI: kuiz islamik dhe tregime, dizajn për fëmijë.",
    },
    {
      src: `${P}/02-ilmbuds-google-play-listing.png`,
      alt: "ILMBUDS në Google Play — faqja e dyqanit me pamje ekrani në shumë gjuhë dhe instalim.",
    },
    {
      src: `${P}/03-ilmbuds-home-screen-albanian.png`,
      alt: "ILMBUDS ekrani kryesor në shqip — mirëseardhje, Bismillah dhe rrjet kartash për funksione.",
    },
    {
      src: `${P}/04-ilmbuds-promo-flyer.png`,
      alt: "Fletushkë promocionale ILMBUDS — përmbledhje shumëgjuhëshe, stemë Google Play, QR dhe veçoritë e aplikacionit.",
    },
  ],
};
