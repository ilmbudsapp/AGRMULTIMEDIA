/** Expanded Webdesign & SEO service page content (DE primary). */
export type ServiceContentSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};

export const WEBDESIGN_SEO_SECTIONS_DE: ServiceContentSection[] = [
  {
    id: "paket-ueberblick",
    title: "Webdesign & SEO — das Komplettpaket für KMU",
    paragraphs: [
      "Eine schöne Website allein reicht selten aus. Kleine Unternehmen in Geislingen an der Steige, Göppingen und der weiteren Region brauchen einen Auftritt, der gefunden wird und Anfragen bringt. Genau dafür kombiniere ich professionelles Webdesign mit technischer On-Page-SEO — aus einer Hand, persönlich betreut.",
      "Das bedeutet: klare Struktur, mobil optimiertes Layout, sinnvolle Texte und eine technische Basis, die Google versteht. Keine leeren Versprechen auf Platz eins über Nacht — sondern eine solide Grundlage, die langfristig Sinn ergibt.",
      "Ob Handwerker, Dienstleister oder Familienbetrieb: Sie erhalten eine Website, die zu Ihrem Alltag passt — mit Kontaktmöglichkeiten, die wirklich genutzt werden (Telefon, WhatsApp, Formular).",
    ],
  },
  {
    id: "vorteile",
    title: "Vorteile für Ihr Unternehmen",
    paragraphs: [
      "Mit einem durchdachten Webdesign- und SEO-Paket sparen Sie Zeit und vermeiden teure Nachbesserungen. Statt nachträglich SEO draufzusetzen, plane ich Struktur und Inhalte von Anfang an.",
    ],
    list: [
      "Professioneller erster Eindruck — auch auf dem Smartphone",
      "Bessere Chancen bei lokalen Google-Suchen",
      "Klare Nutzerführung von der Startseite zum Kontakt",
      "Ein Ansprechpartner statt Agentur-Hierarchie",
      "Transparentes Angebot nach persönlichem Erstgespräch",
    ],
  },
  {
    id: "prozess",
    title: "So läuft das Projekt ab",
    paragraphs: [
      "Jedes Projekt beginnt mit einem unverbindlichen Gespräch. Wir klären Ihr Angebot, Ihre Zielgruppe und den gewünschten Umfang — ohne Fachchinesisch und ohne Druck.",
      "Danach folgen Planung, Designentwurf, Umsetzung und Launch. SEO-Elemente (Titel, Meta, Überschriften, interne Verlinkung) sind von Anfang an eingeplant, nicht als teures Add-on.",
    ],
    list: [
      "1. Kostenloses Erstgespräch (Telefon, Video oder vor Ort)",
      "2. Struktur & Content-Planung inkl. SEO-Keywords",
      "3. Design & Entwicklung mit Feedback-Schleifen",
      "4. Launch, Google-Abstimmung & optionaler Support",
    ],
  },
  {
    id: "beispiele",
    title: "Beispiele aus der Praxis",
    paragraphs: [
      "Für Toni's Autopflege in Göppingen entstand eine moderne Website mit lokalem SEO-Fokus — inklusive Google Maps und klarer Leistungsdarstellung. Tairovic Gebäudeservice erhielt einen professionellen Webauftritt für die Gebäudereinigung mit Vertrauenssignalen und schnellen Kontaktwegen.",
      "FixBike zeigt, wie ein lokaler Fahrradservice online überzeugt: übersichtlich, mobil und mit direkter Erreichbarkeit. IlmBuds demonstriert, dass auch komplexere Produkte (Bildungs-App) verständlich im Web präsentiert werden können.",
    ],
  },
  {
    id: "region",
    title: "Regionaler Fokus: Geislingen, Göppingen, Ulm",
    paragraphs: [
      "Mein Studio sitzt in Geislingen an der Steige. Ich kenne die Erwartungen regionaler Betriebe — von Handwerk über Reinigung bis Autopflege. Lokale Signale (Adresse, Telefon, Einzugsgebiet) werden sinnvoll eingebunden, ohne Keyword-Spam.",
      "Auch wenn Ihr Betrieb in Göppingen, Richtung Ulm oder im Landkreis Göppingen tätig ist: Die Website kann Ihr Einzugsgebiet klar kommunizieren und Google helfen, Sie passenden Suchanfragen zuzuordnen.",
    ],
  },
];

export const WEBDESIGN_SEO_FAQ_DE = [
  {
    question: "Was kostet Webdesign mit SEO in Geislingen?",
    answer:
      "Basis-Websites starten ab ca. 890 €, SEO-optimierte Pakete ab ca. 1.490 €, Komplettpakete ab ca. 2.290 € — jeweils als Richtwert „ab“, abhängig vom Umfang. Nach dem Erstgespräch erhalten Sie ein transparentes Individualangebot.",
  },
  {
    question: "Wie lange dauert die Umsetzung?",
    answer:
      "Eine übersichtliche Business-Website ist oft in zwei bis vier Wochen umsetzbar, sofern Texte und Bilder rechtzeitig vorliegen. Größere Projekte benötigen entsprechend mehr Zeit.",
  },
  {
    question: "Ist lokales SEO im Paket enthalten?",
    answer:
      "Ja — On-Page-SEO, Google Maps, NAP-Konsistenz und Abstimmung mit Ihrem Google-Unternehmensprofil gehören zur SEO-optimierten Variante und zum Komplettpaket.",
  },
  {
    question: "Kann ich Inhalte später selbst pflegen?",
    answer:
      "Ja, auf Wunsch mit WordPress oder einer überschaubaren Lösung. Ich erkläre die Optionen verständlich — damit Technik und Pflegeaufwand zu Ihrem Alltag passen.",
  },
];

export const WEBDESIGN_SEO_SECTIONS_EN: ServiceContentSection[] = [
  {
    id: "overview",
    title: "Web design & SEO — the complete package for SMEs",
    paragraphs: [
      "A beautiful website alone is rarely enough. Small businesses in Geislingen and the wider region need a presence that gets found and generates enquiries. I combine professional web design with on-page SEO — one contact, personal delivery.",
    ],
  },
  {
    id: "benefits",
    title: "Benefits for your business",
    list: [
      "Professional first impression on mobile",
      "Better chances in local Google searches",
      "Clear path from homepage to contact",
      "One direct contact instead of agency layers",
      "Transparent quote after free consultation",
    ],
    paragraphs: [],
  },
];
