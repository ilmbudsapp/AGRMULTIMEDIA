export const STATS = [
  { value: "12+", label: "Jahre Erfahrung" },
  { value: "350+", label: "abgeschlossene Projekte" },
  { value: "98%", label: "Kundenzufriedenheit" },
  { value: "24h", label: "schnelle Rückmeldung" },
] as const;

export const SERVICES = [
  {
    title: "Innenanstrich",
    desc: "Moderne Farben, saubere Kanten und hochwertige Oberflächen für Wohn- und Geschäftsräume.",
    icon: "brush",
  },
  {
    title: "Fassadenarbeiten",
    desc: "Professioneller Schutz, frische Optik und langlebige Ergebnisse für Ihr Gebäude.",
    icon: "building",
  },
  {
    title: "Tapezierarbeiten",
    desc: "Exklusive Tapeten, Akzentwände und stilvolle Raumwirkung mit präziser Ausführung.",
    icon: "layers",
  },
  {
    title: "Lackierarbeiten",
    desc: "Türen, Fenster, Geländer und Oberflächen in perfekter, langlebiger Ausführung.",
    icon: "paint",
  },
  {
    title: "Spachteltechniken",
    desc: "Premium-Wanddesign mit moderner Struktur, Tiefe und edlem Finish.",
    icon: "texture",
  },
  {
    title: "Renovierung",
    desc: "Komplette Raumauffrischung für Wohnungen, Büros und Gewerbeobjekte.",
    icon: "home",
  },
  {
    title: "Trockenbau",
    desc: "Flexible Raumlösungen, Decken und Wände – sauber geplant und umgesetzt.",
    icon: "grid",
  },
  {
    title: "Bodenbeschichtung",
    desc: "Robuste, pflegeleichte Bodenbeschichtungen für private und gewerbliche Flächen.",
    icon: "floor",
  },
] as const;

export const PROJECTS = [
  {
    image: "p1",
    category: "Innenanstrich",
    location: "Privathaus Stuttgart",
    title: "Eleganter Wohnraum",
    alt: "Modernes Wohnzimmer nach professionellem Innenanstrich in Stuttgart",
  },
  {
    image: "p2",
    category: "Renovierung",
    location: "Wohnung Stuttgart",
    title: "Komplette Raumgestaltung",
    alt: "Renovierter Wohnraum durch Malermeister in Stuttgart",
  },
  {
    image: "p3",
    category: "Fassade",
    location: "Außenbereich",
    title: "Fassadengestaltung",
    alt: "Fassadenarbeiten und Anstrich eines Hauses in Stuttgart",
  },
] as const;

export const REVIEWS = [
  {
    text: "Sehr saubere Arbeit, pünktlich und professionell.",
    name: "Sabine M.",
  },
  {
    text: "Unsere Wohnung sieht nach der Renovierung komplett neu aus.",
    name: "Thomas K.",
  },
  {
    text: "Top Beratung und hochwertiges Ergebnis.",
    name: "Julia R.",
  },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Anfrage senden",
    desc: "Kontaktieren Sie uns per WhatsApp, Telefon oder Formular – wir melden uns schnell.",
  },
  {
    step: "02",
    title: "Beratung & Angebot",
    desc: "Wir besprechen Ihr Projekt vor Ort und erstellen ein transparentes Angebot.",
  },
  {
    step: "03",
    title: "Saubere Umsetzung",
    desc: "Termingerechte Ausführung mit sauberer Baustelle und Meisterqualität.",
  },
] as const;

export const FAQ = [
  {
    q: "Wie schnell erhalte ich ein Angebot?",
    a: "In der Regel erhalten Sie innerhalb von 24 Stunden eine erste Rückmeldung und nach der Besichtigung ein unverbindliches Angebot.",
  },
  {
    q: "Arbeiten Sie auch für Gewerbekunden?",
    a: "Ja, wir betreuen Privatkunden, Büros, Praxen und Gewerbeobjekte in Stuttgart und Umgebung.",
  },
  {
    q: "Bieten Sie auch Fassadenarbeiten an?",
    a: "Ja, Fassadenanstriche, Schutzbeschichtungen und Renovierungen gehören zu unseren Kernleistungen.",
  },
  {
    q: "Können Sie kurzfristige Termine übernehmen?",
    a: "Je nach Auslastung sind kurzfristige Termine möglich. Sprechen Sie uns einfach direkt an.",
  },
  {
    q: "Welche Regionen bedienen Sie?",
    a: "Unser Schwerpunkt liegt in Stuttgart und der näheren Umgebung im Radius von ca. 40 km.",
  },
] as const;

export const TRUST_FEATURES = [
  "Kostenlose Beratung",
  "Saubere Baustellen",
  "Termintreue Ausführung",
  "Hochwertige Materialien",
] as const;
