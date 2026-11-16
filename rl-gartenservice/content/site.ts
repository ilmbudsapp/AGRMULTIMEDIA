/**
 * Svi tekstovi, usluge i galerija su ovde.
 * Nova fotografija: stavi webp u public/media, pa dodaj stavku u `gallery`.
 * Novi video: mp4 + poster webp u public/media, pa stavka sa kind: "video".
 * Vorher/Nachher: samo kad su oba snimka isti posao, kind: "compare".
 */

export const site = {
  name: "RL Gartenservice",
  subtitle: "Gartenpflege & Hausmeisterservice",
  owner: "Rakip Lleshi",
  url: "https://www.rl-gartenservice.de",
  email: "rlgartenservice24@gmail.com",
  phoneDisplay: "+49 177 7928689",
  phoneTel: "tel:+491777928689",
  whatsappDisplay: "+49 177 7370789",
  whatsappUrl:
    "https://wa.me/491777370789?text=Guten%20Tag%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen.",
  address: {
    street: "Brandenburger Straße 7",
    postalCode: "86368",
    city: "Gersthofen",
    country: "Deutschland",
  },
  areaLine: "Landkreis Augsburg und Umgebung bis 70 km",
  /** Potvrdi sa klijentom pre objave. */
  satisfiedClients: 150,
  title: "RL Gartenservice | Gartenpflege & Hausmeisterservice in Augsburg",
  description:
    "RL Gartenservice in Gersthofen: Gartenpflege, Gartenbau, Hausmeisterservice und Bodenbelagsarbeiten für Augsburg und Umgebung. Jetzt kostenlos und unverbindlich anfragen.",
} as const;

/**
 * Prazan href znači da tačan link još nije stigao.
 * Takav kanal se i dalje prikazuje, sa imenom i ikonom, ali nije link.
 */
export const socials: { icon: "instagram" | "facebook" | "tiktok"; label: string; handle: string; href: string }[] = [
  {
    icon: "instagram",
    label: "Instagram",
    handle: "rl_gartenservice_augsburg",
    href: "https://www.instagram.com/rl_gartenservice_augsburg/",
  },
  {
    icon: "instagram",
    label: "Instagram",
    handle: "rlbodenlegeraugsburg",
    href: "https://www.instagram.com/rlbodenlegeraugsburg/",
  },
  {
    icon: "facebook",
    label: "Facebook",
    handle: "RL Gartenservice",
    href: "https://www.facebook.com/profile.php?id=61596533423821",
  },
  { icon: "tiktok", label: "TikTok", handle: "RL Gartenservice", href: "" },
];

export const nav = [
  { href: "/", label: "Startseite" },
  { href: "/gartenpflege", label: "Gartenpflege" },
  { href: "/gartenbau", label: "Gartenbau & Außenanlagen" },
  { href: "/hausmeisterservice", label: "Hausmeisterservice & Reinigung" },
  { href: "/bodenbelag", label: "Bodenbelagsarbeiten" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/galerie", label: "Galerie / Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const hero = {
  image: "/media/hero-desktop.webp?v=3",
  imageMobile: "/media/hero-mobile.webp?v=3",
  imageJpg: "/media/hero-desktop.jpg",
  video: "/media/hero-desktop.mp4",
  videoMobile: "/media/hero-mobile.mp4",
  alt: "Gepflegter Garten mit Rasenfläche, gepflastertem Weg, Holzterrasse und Hecke",
  eyebrow: "Augsburg & Umgebung",
  title: "RL Gartenservice",
  lead: "Ihr zuverlässiger Partner rund um Haus & Garten",
  services: "Gartenpflege | Gartenbau | Hausmeisterservice | Bodenbelagsarbeiten",
  cta: "Jetzt kostenlos und unverbindlich anfragen",
};

export const aboutText =
  "RL Gartenservice steht für zuverlässige, sorgfältige und kundenorientierte Dienstleistungen rund um Garten, Haus und Außenanlagen. Wir betreuen Privatkunden, Eigentümer und Hausverwaltungen in Augsburg und Umgebung. Unser Ziel ist es, saubere Arbeit, faire Angebote und zufriedene Kunden zu gewährleisten.";

export type ServiceArea = {
  id: string;
  title: string;
  featured: boolean;
  intro: string;
  groups: { title?: string; items: string[] }[];
  image?: { src: string; alt: string };
};

export const serviceAreas: ServiceArea[] = [
  {
    id: "gartenpflege",
    title: "Gartenpflege",
    featured: true,
    intro:
      "Regelmäßige Pflege und saisonale Arbeiten für private Gärten und Grünanlagen — vom Mähen bis zur Laubentfernung.",
    image: {
      src: "/media/garten-rasen-fertig.webp",
      alt: "Frisch gepflegte Rasenfläche mit Sträuchern vor einem Wohnhaus",
    },
    groups: [
      {
        items: [
          "Rasenmähen und Rasenpflege",
          "Heckenschnitt und Strauchschnitt",
          "Unkrautentfernung",
          "Laubentfernung",
          "Beetpflege",
          "Gartenreinigung",
          "Rückschnitt von Sträuchern",
          "Regelmäßige Gartenpflege",
          "Saisonale Gartenarbeiten",
          "Pflege von Grünanlagen",
        ],
      },
    ],
  },
  {
    id: "gartenbau",
    title: "Gartenbau & Außenanlagen",
    featured: false,
    intro:
      "Wege, Terrassen, Zäune und Rollrasen — einzelne Arbeiten oder die Gestaltung der ganzen Außenanlage.",
    image: {
      src: "/media/treppe-naturstein.webp",
      alt: "Betontreppe mit Natursteinmauer am Hauseingang",
    },
    groups: [
      {
        items: [
          "Pflasterarbeiten",
          "Verlegung von Pflastersteinen",
          "Gartenwege und Gehwege",
          "Terrassenbau und Terrassengestaltung",
          "Zaunmontage und Zaunarbeiten",
          "Rollrasenverlegung",
          "Gestaltung und Pflege von Außenanlagen",
          "Kleinere Gartenbauarbeiten",
        ],
      },
    ],
  },
  {
    id: "hausmeisterservice",
    title: "Hausmeisterservice & Reinigung",
    featured: true,
    intro:
      "Der Hausmeisterservice richtet sich an Privatkunden, Eigentümer und Hausverwaltungen.",
    groups: [
      {
        title: "Hausmeisterservice",
        items: [
          "Allgemeiner Hausmeisterservice",
          "Betreuung von Wohnanlagen und Immobilien",
          "Regelmäßige Objektkontrollen",
          "Pflege von Außenanlagen",
          "Reinigung von Außenbereichen",
          "Mülltonnenservice",
          "Kleine Reparatur- und Instandhaltungsarbeiten im zulässigen Rahmen",
          "Pflege und Sauberhaltung von Gemeinschaftsflächen",
        ],
      },
      {
        title: "Reinigungsservice",
        items: [
          "Treppenhausreinigung",
          "Reinigung von Gemeinschaftsbereichen",
          "Hof- und Gehwegreinigung",
          "Terrassenreinigung",
          "Reinigung von Einfahrten und Außenflächen",
          "Allgemeine Objektpflege",
        ],
      },
    ],
  },
  {
    id: "bodenbelag",
    title: "Bodenbelagsarbeiten",
    featured: false,
    intro:
      "Verlegung neuer Böden und Vorbereitung des Untergrunds im zulässigen Rahmen — in Wohnungen und Objekten.",
    image: {
      src: "/media/boden-holz.webp",
      alt: "Neu verlegter heller Holzfußboden in einem hellen Raum",
    },
    groups: [
      {
        items: [
          "Laminat verlegen",
          "Vinylboden verlegen",
          "Klick-Vinyl verlegen",
          "Fertigparkett verlegen",
          "Teppichboden verlegen",
          "Sockelleisten montieren",
          "Entfernung alter Bodenbeläge",
          "Vorbereitung des Untergrunds im zulässigen Rahmen",
        ],
      },
    ],
  },
];

export const leistungen: {
  href: string;
  title: string;
  text: string;
  icon: "leaf" | "mower" | "shears" | "broom" | "floor" | "grass" | "paver" | "terrace" | "house" | "fence";
}[] = [
  {
    href: "/gartenpflege",
    title: "Gartenpflege",
    text: "Beetpflege, Unkrautentfernung und Laubarbeiten",
    icon: "leaf",
  },
  {
    href: "/gartenbau",
    title: "Rollrasen verlegen",
    text: "Schnelle und saubere Verlegung von Fertigrasen",
    icon: "grass",
  },
  {
    href: "/gartenpflege",
    title: "Rasenmähen",
    text: "Fachgerechtes Mähen und Rasenpflege",
    icon: "mower",
  },
  {
    href: "/gartenbau",
    title: "Pflasterarbeiten",
    text: "Wege, Einfahrten, Terrassen und Hofflächen",
    icon: "paver",
  },
  {
    href: "/gartenpflege",
    title: "Hecken- & Strauchschnitt",
    text: "Form- und Rückschnitt für gepflegte Grünflächen",
    icon: "shears",
  },
  {
    href: "/gartenbau",
    title: "Terrassenbau",
    text: "Planung und Bau individueller Terrassen",
    icon: "terrace",
  },
  {
    href: "/hausmeisterservice",
    title: "Reinigung",
    text: "Außenreinigung von Wegen, Terrassen und Einfahrten",
    icon: "broom",
  },
  {
    href: "/hausmeisterservice",
    title: "Hausmeisterservice",
    text: "Außenanlagen, kleine Reparaturen und Instandhaltung",
    icon: "house",
  },
  {
    href: "/bodenbelag",
    title: "Bodenleger",
    text: "Fachgerechte Verlegung von Bodenbelägen",
    icon: "floor",
  },
  {
    href: "/gartenbau",
    title: "Zaunbau",
    text: "Montage von Zäunen für Gärten und Grundstücke",
    icon: "fence",
  },
];

export const overview = [
  {
    href: "/gartenpflege",
    title: "Gartenpflege",
    text: "Rasen, Hecke, Beete und Laub — regelmäßig oder saisonal.",
    featured: true,
  },
  {
    href: "/gartenbau",
    title: "Gartenbau",
    text: "Pflaster, Terrassen, Zäune und Rollrasen.",
    featured: false,
  },
  {
    href: "/hausmeisterservice",
    title: "Hausmeisterservice",
    text: "Für Privatkunden, Eigentümer und Hausverwaltungen.",
    featured: true,
  },
  {
    href: "/bodenbelag",
    title: "Bodenbelagsarbeiten",
    text: "Laminat, Vinyl, Parkett und Teppich.",
    featured: false,
  },
] as const;

export const places = [
  "Gersthofen",
  "Augsburg",
  "Neusäß",
  "Friedberg",
  "Kissing",
  "Mering",
  "Fürstenfeldbruck",
  "Dachau",
] as const;

export type GalleryCategory =
  | "gartenpflege"
  | "gartenbau"
  | "hausmeisterservice"
  | "reinigung"
  | "boden";

export const galleryCategories: { id: GalleryCategory | "alle"; label: string }[] = [
  { id: "alle", label: "Alle" },
  { id: "gartenpflege", label: "Gartenpflege" },
  { id: "gartenbau", label: "Gartenbau und Pflasterarbeiten" },
  { id: "hausmeisterservice", label: "Hausmeisterservice" },
  { id: "reinigung", label: "Reinigung" },
  { id: "boden", label: "Bodenbelagsarbeiten" },
];

type ImageItem = {
  id: string;
  kind: "image";
  category: GalleryCategory;
  src: string;
  alt: string;
};

type VideoItem = {
  id: string;
  kind: "video";
  category: GalleryCategory;
  src: string;
  poster: string;
  alt: string;
};

type CompareItem = {
  id: string;
  kind: "compare";
  category: GalleryCategory;
  title: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
};

export type GalleryItem = ImageItem | VideoItem | CompareItem;

export const gallery: GalleryItem[] = [
  {
    id: "rasen-fertig",
    kind: "image",
    category: "gartenpflege",
    src: "/media/garten-rasen-fertig.webp",
    alt: "Gepflegte Rasenfläche mit Sträuchern und Bäumen vor dem Haus",
  },
  {
    id: "rasenkante",
    kind: "image",
    category: "gartenpflege",
    src: "/media/garten-rasenkante.webp",
    alt: "Rasenkante entlang einer Hecke während der Gartenpflege",
  },
  {
    id: "wurzelstock",
    kind: "video",
    category: "gartenpflege",
    src: "/media/garten-wurzelstock.mp4",
    poster: "/media/garten-wurzelstock-poster.webp",
    alt: "Entfernung eines Wurzelstocks im Garten",
  },
  {
    id: "boden-vorbereiten",
    kind: "video",
    category: "gartenpflege",
    src: "/media/garten-boden-vorbereiten.mp4",
    poster: "/media/garten-boden-vorbereiten-poster.webp",
    alt: "Vorbereitete Fläche für Rasen und Beet",
  },
  {
    id: "terrasse",
    kind: "compare",
    category: "gartenbau",
    title: "Terrasse",
    before: {
      src: "/media/terrasse-nachher.webp",
      alt: "Holzterrasse mit Steinrand und Rasenfläche",
    },
    after: {
      src: "/media/terrasse-vorher.webp",
      alt: "Holzterrasse mit Stufen unter dem Glasdach",
    },
  },
  {
    id: "zaun",
    kind: "compare",
    category: "gartenbau",
    title: "Zaun",
    before: {
      src: "/media/zaun-vorher.webp",
      alt: "Gehweg aus alten Pflastersteinen vor der Zaunmontage",
    },
    after: {
      src: "/media/zaun-nachher.webp",
      alt: "Neu montierter Sichtschutzzaun aus Holzlamellen",
    },
  },
  {
    id: "zaun-sichtschutz",
    kind: "image",
    category: "gartenbau",
    src: "/media/zaun-sichtschutz.webp",
    alt: "Langer Sichtschutzzaun aus Holzlamellen im Garten",
  },
  {
    id: "zaun-montage",
    kind: "image",
    category: "gartenbau",
    src: "/media/zaun-montage.webp",
    alt: "Zaunpfosten während der Montage neben dem Haus",
  },
  {
    id: "zaun-metall",
    kind: "image",
    category: "gartenbau",
    src: "/media/zaun-metall.webp",
    alt: "Metallzaun mit waagerechten Lamellen",
  },
  {
    id: "treppe",
    kind: "image",
    category: "gartenbau",
    src: "/media/treppe-naturstein.webp",
    alt: "Betontreppe mit Natursteinmauer am Hauseingang",
  },
  {
    id: "terrasse-unterbau",
    kind: "image",
    category: "gartenbau",
    src: "/media/terrasse-unterbau.webp",
    alt: "Unterkonstruktion einer Holzterrasse vor dem Verlegen der Dielen",
  },
  {
    id: "einfassung",
    kind: "video",
    category: "gartenbau",
    src: "/media/gartenbau-einfassung.mp4",
    poster: "/media/gartenbau-einfassung-poster.webp",
    alt: "Geschwungene Steineinfassung zwischen Rasen und Beet",
  },
  {
    id: "pflasterweg",
    kind: "video",
    category: "gartenbau",
    src: "/media/gartenbau-pflasterweg.mp4",
    poster: "/media/gartenbau-pflasterweg-poster.webp",
    alt: "Gepflasterter Weg neben einem dunklen Zaun",
  },
  {
    id: "boden-holz",
    kind: "image",
    category: "boden",
    src: "/media/boden-holz.webp",
    alt: "Neu verlegter heller Holzfußboden",
  },
  {
    id: "boden-vorbereitung",
    kind: "image",
    category: "boden",
    src: "/media/boden-vorbereitung.webp",
    alt: "Vorbereiteter Untergrund vor dem Verlegen des Bodenbelags",
  },
  {
    id: "boden-flur",
    kind: "image",
    category: "boden",
    src: "/media/boden-flur.webp",
    alt: "Flur mit neuem Bodenbelag",
  },
  {
    id: "boden-alt",
    kind: "image",
    category: "boden",
    src: "/media/boden-alt.webp",
    alt: "Raum mit altem Bodenbelag vor der Erneuerung",
  },
  {
    id: "boden-flur-video",
    kind: "video",
    category: "boden",
    src: "/media/boden-flur-dunkel.mp4",
    poster: "/media/boden-flur-dunkel-poster.webp",
    alt: "Dunkler Bodenbelag in einem Flur",
  },
  {
    id: "boden-hell-video",
    kind: "video",
    category: "boden",
    src: "/media/boden-hell.mp4",
    poster: "/media/boden-hell-poster.webp",
    alt: "Heller neu verlegter Bodenbelag",
  },
  {
    id: "boden-dunkel-video",
    kind: "video",
    category: "boden",
    src: "/media/boden-dunkel.mp4",
    poster: "/media/boden-dunkel-poster.webp",
    alt: "Dunkel verlegter Bodenbelag im Raum",
  },
];

export const missingReferences = [
  "Hausmeisterservice: Fotos oder kurze Videos von Objektbetreuung, Außenanlagen oder kleinen Instandhaltungen.",
  "Reinigung: Fotos von Treppenhaus, Hof, Gehwegen oder Terrassen nach der Reinigung.",
];
