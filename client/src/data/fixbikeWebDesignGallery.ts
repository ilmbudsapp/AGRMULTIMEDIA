import type { ServiceLang } from "@/lib/servicePageI18n";

const W = "/portfolio/web-design";

/** Replaces the generic subsection intro for “business-website-design” on the web design page. */
export const fixbikeBusinessWebsiteIntroByLang: Record<ServiceLang, string> = {
  en: "Example client project: FixBike — Fahrradservice & E-Bike Service Neuwied. A conversion-focused business site for the German market with clear service positioning, CTAs, and structured rental pages (screenshots below).",
  de: "Kundenbeispiel: FixBike — Fahrradservice & E-Bike Service Neuwied. Eine conversion-orientierte Business-Website für den deutschen Markt mit klarer Leistungsdarstellung, CTAs und strukturierten Mietseiten (Screenshots unten).",
  it: "Esempio cliente: FixBike — Fahrradservice & E-Bike Service Neuwied. Sito business orientato alla conversione per il mercato tedesco, con CTA chiare e pagine noleggio strutturate (screenshot sotto).",
  sr: "Primer klijenta: FixBike — Fahrradservice & E-Bike Service Neuwied. Poslovni sajt fokusiran na konverzije za nemačko tržište, sa jasnim pozivima na akciju i strukturisanim stranicama za iznajmljivanje (screenshot-ovi ispod).",
  al: "Shembull klienti: FixBike — Fahrradservice & E-Bike Service Neuwied. Faqe biznesi e fokusuar në konvertim për tregun gjerman, me CTA të qarta dhe faqe qiraje të strukturuara (screenshot-et më poshtë).",
};

const FIXBIKE_LIVE = "https://fixbike.online/";

export const fixbikeLiveSiteLinkByLang: Record<ServiceLang, { href: string; label: string }> = {
  en: { href: FIXBIKE_LIVE, label: "Visit fixbike.online — live client site" },
  de: { href: FIXBIKE_LIVE, label: "fixbike.online besuchen — Live-Website des Kunden" },
  it: { href: FIXBIKE_LIVE, label: "Visita fixbike.online — sito online del cliente" },
  sr: { href: FIXBIKE_LIVE, label: "Posetite fixbike.online — live sajt klijenta" },
  al: { href: FIXBIKE_LIVE, label: "Hapni fixbike.online — faqja live e klientit" },
};

export const fixbikeWebDesignGalleryByLang: Record<ServiceLang, { src: string; alt: string }[]> = {
  en: [
    {
      src: `${W}/fixbike-fahrradservice-neuwied-hero.png`,
      alt: "FixBike Fahrradservice & E-Bike Service Neuwied — homepage hero with service headline, CTAs, and workshop photography.",
    },
    {
      src: `${W}/fixbike-e-bike-vermietung.png`,
      alt: "FixBike Neuwied — E-Bike Vermietung page with CUBE rental options, card layout, and booking-focused structure.",
    },
  ],
  de: [
    {
      src: `${W}/fixbike-fahrradservice-neuwied-hero.png`,
      alt: "FixBike Fahrradservice & E-Bike Service Neuwied — Startseiten-Hero mit Leistungsüberschrift, CTAs und Werkstatt-Foto.",
    },
    {
      src: `${W}/fixbike-e-bike-vermietung.png`,
      alt: "FixBike Neuwied — Seite „E-Bike Vermietung“ mit CUBE-Mietfahrrädern, Kartenlayout und klarer Buchungsstruktur.",
    },
  ],
  it: [
    {
      src: `${W}/fixbike-fahrradservice-neuwied-hero.png`,
      alt: "FixBike Fahrradservice & E-Bike Service Neuwied — hero homepage con titolo servizi, CTA e foto officina.",
    },
    {
      src: `${W}/fixbike-e-bike-vermietung.png`,
      alt: "FixBike Neuwied — pagina noleggio E-Bike con card CUBE, layout a griglia e focus su prenotazione.",
    },
  ],
  sr: [
    {
      src: `${W}/fixbike-fahrradservice-neuwied-hero.png`,
      alt: "FixBike Fahrradservice & E-Bike Service Neuwied — početna stranica sa hero sekcijom, CTA dugmadima i fotografijom radionice.",
    },
    {
      src: `${W}/fixbike-e-bike-vermietung.png`,
      alt: "FixBike Neuwied — stranica za iznajmljivanje E-bike-ova sa CUBE ponudama, karticama i jasnom strukturom za rezervacije.",
    },
  ],
  al: [
    {
      src: `${W}/fixbike-fahrradservice-neuwied-hero.png`,
      alt: "FixBike Fahrradservice & E-Bike Service Neuwied — faqja kryesore me hero, butona CTA dhe foto nga punëtoria.",
    },
    {
      src: `${W}/fixbike-e-bike-vermietung.png`,
      alt: "FixBike Neuwied — faqja e qirasë së E-Bike me karta CUBE dhe strukturë të qartë për rezervime.",
    },
  ],
};
