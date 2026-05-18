export const DEMO_BASE = "/demo-reinigung";
export const ASSET_BASE = "/files/demo-reinigung";

export const COMPANY_NAME = "Innenreinigung Kfzundmöbel";
export const LOCATION_LINE = "Ihr Experte in Stuttgart & Umgebung";
export const PHONE_DISPLAY = "0152 59534456";
export const PHONE_TEL = "tel:+4915259534456";
export const WA_DIGITS = "4915259534456";
export const WA_HREF = `https://wa.me/${WA_DIGITS}`;
export const WA_CTA = "Jetzt Termin sichern via WhatsApp";

export const HERO_TITLE = "Frühlingsaktion! Professionelle Tiefenreinigung für Ihre Möbel.";
export const HERO_SUBTITLE =
  "Wir entfernen Flecken, Gerüche und Allergene. Sauberkeit, die man sieht und fühlt!";

export type NavItem = { href: string; label: string };

export const NAV_ITEMS: NavItem[] = [
  { href: DEMO_BASE, label: "Start" },
  { href: `${DEMO_BASE}/services`, label: "Leistungen" },
  { href: `${DEMO_BASE}/galerie`, label: "Galerie" },
  { href: `${DEMO_BASE}/kontakt`, label: "Kontakt" },
];

export const PHOTOS = [
  {
    src: `${ASSET_BASE}/01-vorher-nachher.jpg`,
    alt: "Vorher und nachher — professionelle Tiefenreinigung",
    caption: "Vorher & Nachher — sichtbarer Unterschied",
  },
  {
    src: `${ASSET_BASE}/02-vorher-nachher.jpg`,
    alt: "Vorher und nachher — gründliche Innenreinigung",
    caption: "Vorher & Nachher — gründliche Ergebnisse",
  },
  {
    src: `${ASSET_BASE}/03-reinigungsprodukte.jpg`,
    alt: "Professionelle Reinigungsprodukte im Einsatz",
    caption: "Professionelle Reinigungsprodukte",
  },
  {
    src: `${ASSET_BASE}/04-teppich-vorher-nachher.jpg`,
    alt: "Teppich gereinigt — Vorher und nachher",
    caption: "Teppichreinigung — Vorher & Nachher",
  },
  {
    src: `${ASSET_BASE}/05-autositz-vorher-nachher.jpg`,
    alt: "Autositz-Reinigung — Vorher und nachher",
    caption: "Kfz-Innenreinigung — Sitze wie neu",
  },
  {
    src: `${ASSET_BASE}/06-sofa-wohnung.jpg`,
    alt: "Reinigung von Sofa und Wohnung",
    caption: "Möbel- & Wohnungsreinigung",
  },
] as const;

/** Hero — Teppich Vorher/Nachher (stärkerer Wow-Effekt als Kfz-Bodenmatte) */
export const HERO_PHOTO = PHOTOS[3]!;

export const VIDEOS = [
  {
    src: `${ASSET_BASE}/video-01-teppich-polster.mp4`,
    title: "Professionelle Reinigung von Teppichen & Polstermöbeln",
    caption: "Teppiche & Polstermöbel — professionell gereinigt",
  },
  {
    src: `${ASSET_BASE}/video-02-moebel-auto.mp4`,
    title: "Macht eure Möbel und euer Auto wieder wie neu!",
    caption: "Möbel & Auto — wieder wie neu",
  },
  {
    src: `${ASSET_BASE}/video-03-vorher-nachher.mp4`,
    title: "Vorher und nachher",
    caption: "Vorher & Nachher im Video",
  },
] as const;

export const SERVICES = [
  {
    id: "moebel",
    title: "Möbel & Polster",
    icon: "🛋️",
    teaser: "Sofas, Sessel, Matratzen und Polstermöbel — tiefenrein und frisch.",
    points: [
      "Tiefenreinigung von Stoff, Velours und Mikrofaser",
      "Entfernung von Flecken, Gerüchen und Allergenen",
      "Schonende Pflege für empfindliche Oberflächen",
      "Schnelle Trocknung — Ihr Zuhause bleibt bewohnbar",
    ],
  },
  {
    id: "kfz",
    title: "Kfz-Innenreinigung",
    icon: "🚗",
    teaser: "Sitze, Teppiche und Cockpit — hygienisch sauber für unterwegs.",
    points: [
      "Sitze und Fußmatten — Vorher/Nachher-Qualität",
      "Geruchsneutralisation (Rauch, Feuchtigkeit, Tiere)",
      "Dashboard, Türen und schwer erreichbare Bereiche",
      "Ideal vor Verkauf, Leasing-Rückgabe oder Frühlingsaktion",
    ],
  },
  {
    id: "allergene",
    title: "Allergene & Hygiene",
    icon: "✨",
    teaser: "Weniger Staubmilben, Pollen und Bakterien — spürbar frische Luft.",
    points: [
      "Gezielte Behandlung allergiebelasteter Bereiche",
      "Teppich- und Polsterhygiene mit Profi-Equipment",
      "Empfohlen für Familien, Haustierbesitzer und Allergiker",
      "Sauberkeit, die man sieht und fühlt",
    ],
  },
] as const;

export const SPRING_OFFER = {
  badge: "Frühlingsaktion",
  headline: "20 % Rabatt auf die erste Tiefenreinigung",
  text: "Jetzt Termin sichern — begrenzte Plätze in Stuttgart & Umgebung.",
};
