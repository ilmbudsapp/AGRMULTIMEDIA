export const BASE = "/demo/uganda-hilfe";

export const SITE = {
  name: "Uganda-Hilfe Unterland e.V.",
  shortName: "Uganda-Hilfe Unterland",
  tagline: "Gemeinsam schenken wir Kindern Zukunft.",
  description:
    "Die Uganda-Hilfe Unterland e.V. unterstützt Bildung und Perspektiven für Kinder in Kasanje, Uganda — an der St. Monica Junior School.",
  url: "https://www.agrmultimedia.eu/demo/uganda-hilfe/",
  email: "info@uganda-hilfe-unterland.org",
  phone: "07138 2375129",
  address: "Stuttgarter Straße 50, 73033 Göppingen",
  schoolUrl: "https://stmonicakasanje.com",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/ueber-uns/", label: "Über uns" },
  { href: "/projekte/", label: "Projekte" },
  { href: "/uganda-reisen/", label: "Uganda Reisen" },
  { href: "/galerie/", label: "Galerie" },
  { href: "/aktuelles/", label: "Aktuelles" },
  { href: "/downloads/", label: "Downloads" },
  { href: "/spenden/", label: "Spenden" },
  { href: "/kontakt/", label: "Kontakt" },
] as const;

export const STATS = [
  { value: 367, suffix: "+", label: "Kinder an der Schule", href: "/projekte/" },
  { value: 2015, suffix: "", label: "Verein gegründet", href: "/ueber-uns/" },
  { value: 220, suffix: "+", label: "Stipendien möglich", href: "/spenden/" },
  { value: 11, suffix: "", label: "Lehrkräfte vor Ort", href: "/ueber-uns/" },
] as const;

export const PROJECTS = [
  {
    title: "Ubuntu Complex",
    summary:
      "Neuer Schulcampus in Kasanje — über 200.000 € Investition in fünf Bauabschnitten. Im März 2024 gewidmet, Name nach dem Ubuntu-Prinzip: Gemeinschaftssinn.",
    image: `${BASE}/images/school-2.jpg`,
    tag: "Schulbau",
    href: "/galerie/",
  },
  {
    title: "Schulküche & Verpflegung",
    summary:
      "Neue Küche am Ubuntu Complex — täglich zwei warme Mahlzeiten für die Kinder. Pflasterarbeiten, Inbetriebnahme und nachhaltiger Betrieb vor Ort.",
    image: `${BASE}/images/kitchen.jpg`,
    tag: "Verpflegung",
    href: "/aktuelles/",
  },
  {
    title: "Stipendien & Patenschaften",
    summary:
      "140 € jährlich finanzieren Schulgeld, Uniform, Lernmaterial und Mahlzeiten — besonders wichtig für Waisenkinder in Kasanje und Umgebung.",
    image: `${BASE}/images/meals.jpg`,
    tag: "Bildung",
    href: "/spenden/",
  },
  {
    title: "Sport & Campus",
    summary:
      "Fußball, Volleyball und Sitzgelegenheiten am Campus — Raum für Bewegung, Gemeinschaft und ein liebevolles Lernumfeld.",
    image: `${BASE}/images/playground.jpg`,
    tag: "Infrastruktur",
    href: "/galerie/",
  },
] as const;

export const NEWS = [
  {
    date: "06.06.2026",
    title: "Uganda-Reise 2026",
    excerpt:
      "Eine Reisegruppe rund um Fabio Tino Vercelli besuchte die St. Monica School — persönliche Begegnungen, Fortschritte vor Ort und neue Impulse für unsere Projekte.",
    image: `${BASE}/images/trip-2026.jpg`,
    href: "/uganda-reisen/",
  },
  {
    date: "05.06.2026",
    title: "Neue Küche erfolgreich in Betrieb",
    excerpt:
      "Die Schulküche am Ubuntu Complex ist fertig — tägliche Verpflegung für Hunderte Kinder ist damit gesichert.",
    image: `${BASE}/images/kitchen.jpg`,
    href: "/projekte/",
  },
  {
    date: "05.06.2026",
    title: "Christian Gaus übernimmt den Vorsitz",
    excerpt:
      "Nach zehn Jahren übergibt Wolfgang Friederich den Vorsitz an Christian Gaus — Dank für ein Jahrzehnt Engagement.",
    image: `${BASE}/images/board-1.jpg`,
    href: "/ueber-uns/",
  },
  {
    date: "06.06.2026",
    title: "Pflasterarbeiten vor der Küche",
    excerpt:
      "Fortschritte am Ubuntu Complex: Pflasterarbeiten schaffen sichere Wege rund um die neue Küche.",
    image: `${BASE}/images/paving.jpg`,
    href: "/galerie/",
  },
] as const;

export const TRIPS = [
  { year: "2012", title: "Erste Begegnung", text: "Wolfgang Friederich und Denis Mpanga reisen nach Kasanje — die St. Monica Junior School eröffnet ihr erstes Gebäude mit drei Klassen.", href: "/ueber-uns/" },
  { year: "2015", title: "Vereinsgründung & Erweiterung", text: "Uganda-Hilfe Unterland e.V. gegründet am 22. Januar. Im Juli Erweiterung um vier Klassenzimmer — ca. 25.000 €.", href: "/ueber-uns/" },
  { year: "2018", title: "Uganda-Team Göppingen", text: "Zwölf Personen reisen nach Uganda — über 9.000 € Spenden und enge Freundschaften vor Ort.", href: "/uganda-reisen/" },
  { year: "2020", title: "16-köpfige Reisegruppe", text: "24.02.–07.03.2020: Erster Bauabschnitt des neuen Schulgebäudes abgeschlossen. Flug und Unterkunft privat finanziert.", href: "/uganda-reisen/" },
  { year: "2024", title: "Ubuntu Complex", text: "Feierliche Einweihung des neuen Schulcampus — Meilenstein für über 200.000 € Investition.", href: "/projekte/" },
  { year: "2026", title: "Reise & Kücheneinweihung", text: "Acht-köpfige Gruppe aus Göppingen — Küche in Betrieb, ca. 3.000 € Spenden für zwei Monate Verpflegung.", href: "/aktuelles/" },
] as const;

export const GALLERY = [
  { src: `${BASE}/images/hero.jpg`, alt: "Kinder in Kasanje, Uganda", href: "/ueber-uns/" },
  { src: `${BASE}/images/school-1.jpg`, alt: "Schulgebäude St. Monica", href: "/projekte/" },
  { src: `${BASE}/images/school-2.jpg`, alt: "Neues Schulgebäude", href: "/projekte/" },
  { src: `${BASE}/images/playground.jpg`, alt: "Spielplatz der Schule", href: "/projekte/" },
  { src: `${BASE}/images/meals.jpg`, alt: "Essensausgabe für Schüler", href: "/spenden/" },
  { src: `${BASE}/images/team-goeppingen.jpg`, alt: "Uganda-Team Göppingen", href: "/uganda-reisen/" },
  { src: `${BASE}/images/trip-2026.jpg`, alt: "Uganda-Reise 2026", href: "/uganda-reisen/" },
  { src: `${BASE}/images/kitchen.jpg`, alt: "Neue Schulküche", href: "/aktuelles/" },
  { src: `${BASE}/images/paving.jpg`, alt: "Pflasterarbeiten am Campus", href: "/projekte/" },
  { src: `${BASE}/images/board-1.jpg`, alt: "Vorstandsteam", href: "/ueber-uns/" },
  { src: `${BASE}/images/news-1.jpg`, alt: "Projektarbeit in Uganda", href: "/aktuelles/" },
] as const;

export const TEAM = [
  { name: "Christian Gaus", role: "1. Vorsitzender" },
  { name: "Dr. Denis Mpanga", role: "2. Vorsitzender" },
  { name: "Fabio Tino Vercelli", role: "Vorstandsmitglied · Uganda-Team Göppingen" },
  { name: "Markus Starz", role: "Schriftführer" },
  { name: "Andreas Friederich", role: "Schatzmeister" },
] as const;

export const DONATION = {
  bank: "VBU Volksbank im Unterland",
  iban: "DE46 6206 3263 0198 0930 04",
  bic: "GENODES1VLS",
  holder: "Uganda-Hilfe Unterland e.V.",
  stipendAmount: 140,
  sepaCreditorId: "DE46ZZZ000019198093004",
  sepaPurpose: "Uganda-Hilfe Unterland e.V.",
};

/** PayPal-Spendenlink — URL hier eintragen (z. B. https://www.paypal.com/donate/?hosted_button_id=XXXX) */
export const PAYPAL_DONATION_URL = "";

export const SOCIAL = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: "instagram",
  },
] as const;

export const DOWNLOADS = [
  {
    title: "SEPA Lastschrift Formular",
    description: "Formular für regelmäßige Spenden per SEPA-Lastschrift — einfach ausfüllen und an uns senden.",
    file: `${BASE}/downloads/sepa-lastschrift-formular.pdf`,
  },
  {
    title: "Mitgliedsantrag",
    description: "Beitrittserklärung für neue Vereinsmitglieder der Uganda-Hilfe Unterland e.V.",
    file: `${BASE}/downloads/mitgliedsantrag.pdf`,
  },
  {
    title: "Projektbroschüre: Schulhausbau",
    description: "Informationen zum Ubuntu Complex und zum Schulcampus in Kasanje, Uganda.",
    file: `${BASE}/downloads/projektbroschuere-schulhausbau.pdf`,
  },
  {
    title: "Projektinfo: Schulverpflegung",
    description: "Wie Ihre Spende tägliche Mahlzeiten für Kinder an der St. Monica School ermöglicht.",
    file: `${BASE}/downloads/projektinfo-schulverpflegung.pdf`,
  },
  {
    title: "Spendeninfo: Stipendien",
    description: "Patenschaften und Stipendien — 140 € jährlich schenken einem Kind Bildung und Zukunft.",
    file: `${BASE}/downloads/spendeninfo-stipendium.pdf`,
  },
  {
    title: "Projektinfo: Waisenkinder",
    description: "Unterstützung für Waisenkinder in Kasanje — Schulgeld, Verpflegung und liebevolle Betreuung.",
    file: `${BASE}/downloads/projektinfo-waisenkinder.pdf`,
  },
] as const;

export const CONTACTS = [
  { name: "Allgemeine Anfragen", email: "info@uganda-hilfe-unterland.org", phone: null, address: "Stuttgarter Straße 50, 73033 Göppingen" },
  { name: "Markus Starz (Schwaigern)", email: "markus.starz@uganda-hilfe-unterland.org", phone: "07138 2375129", address: "Gratstraße 34, 74193 Schwaigern" },
  { name: "Fabio Vercelli (Göppingen)", email: "fabio.vercelli@uganda-hilfe-unterland.org", phone: "0178 4995533", address: null },
] as const;
