#!/usr/bin/env node
/**
 * Generates extended DE blog posts (800+ words each) for topical authority.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "client", "src", "data", "blogPostsDeExtended.ts");

const IMG =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300";

function paras(...texts) {
  return texts;
}

function section(heading, paragraphs) {
  return { heading, paragraphs };
}

/** Reusable paragraph blocks for local webdesign topics */
const LOCAL =
  "In Geislingen an der Steige, Göppingen und der näheren Region entscheiden viele Kunden noch am Smartphone, ob sie anrufen oder zum nächsten Anbieter wechseln. Eine professionelle Website ist deshalb kein Luxus, sondern die Grundlage für Vertrauen und Anfragen.";
const SEO =
  "Lokales SEO bedeutet: Google versteht, wofür Ihre Seite steht und wen Sie erreichen möchten. Dazu gehören sinnvolle Titel, klare Überschriften, ehrliche Texte und konsistente Firmendaten — ohne Keyword-Spam oder leere Versprechen.";
const CTA =
  "Wenn Sie Ihren Webauftritt verbessern möchten, starten wir mit einem kurzen, unverbindlichen Gespräch. So wissen Sie von Anfang an, welcher Umfang sinnvoll ist und was realistisch erreichbar bleibt.";

const posts = [
  {
    slug: "webdesign-handwerker-geislingen",
    title: "Webdesign für Handwerker in Geislingen und Göppingen — was wirklich zählt",
    description:
      "Handwerksbetriebe brauchen keine überladenen Websites. Erfahren Sie, welche Inhalte, Struktur und SEO-Basics lokale Kunden in Geislingen und Göppingen überzeugen.",
    category: "Webdesign",
    date: "04.06.2026",
    imageAlt: "Webdesign für Handwerker Geislingen Göppingen — Blog",
    sections: [
      section("Warum Handwerker heute online sichtbar sein müssen", paras(
        "Empfehlungen sind nach wie vor wertvoll — aber immer mehr Auftraggeber, besonders jüngere, suchen zuerst bei Google. Ob Elektriker, Maler oder Sanitärbetrieb: Wer nicht gefunden wird, verliert Anfragen an Konkurrenten mit professionellerem Auftritt.",
        LOCAL,
        "Eine Handwerker-Website muss nicht 50 Unterseiten haben. Entscheidend ist, dass Besucher in wenigen Sekunden verstehen: Was bieten Sie an? Wo sind Sie tätig? Wie erreichen Sie Sie am schnellsten?"
      )),
      section("Typische Fehler bei Handwerker-Websites", paras(
        "Veraltete Layouts, winzige Schrift auf dem Handy, fehlende Telefonnummer oder keine klaren Leistungen — das wirkt schnell unprofessionell, auch wenn die Arbeit vor Ort exzellent ist.",
        "Generische Stockfotos ohne Bezug zum Betrieb schwächen Vertrauen. Besser: echte Projektfotos, kurze Referenzen und ein Ansprechpartner mit Name und Foto, wenn möglich.",
        SEO
      )),
      section("Welche Seiten ein Handwerksbetrieb braucht", paras(
        "Startseite mit Leistungsüberblick und Kontakt-CTA, eine Seite pro Hauptleistung (z. B. Notdienst, Badrenovierung, Neubau), Über-uns mit Team und Erfahrung, Kontakt mit Karte und Öffnungszeiten.",
        "Optional: FAQ zu häufigen Fragen (Kosten, Ablauf, Einzugsgebiet), Referenzen mit kurzen Projektbeschreibungen und Bewertungen, wenn vorhanden.",
        "Interne Verlinkung zwischen Leistungsseiten hilft Google und Nutzern gleichermaßen — z. B. von „Malerarbeiten“ zu „Fassadenanstrich“ und zurück zur Kontaktseite."
      )),
      section("Lokales SEO für Handwerk in der Region", paras(
        "NAP-Daten (Name, Adresse, Telefon) müssen auf der Website, im Google-Unternehmensprofil und in Verzeichnissen übereinstimmen. Ein eingebettetes Google Maps Kartenmodul hilft Besuchern und unterstützt lokale Signale.",
        "Formulierungen wie „Elektriker in Geislingen“ oder „Malerbetrieb Göppingen“ sollten natürlich im Text vorkommen — als Erklärung für Kunden, nicht als Keyword-Liste.",
        "Bewertungen auf Google Maps stärken Vertrauen. Ihre Website kann darauf verweisen oder ausgewählte Zitate einbinden — immer ehrlich und aktuell."
      )),
      section("Mobile Nutzung — der entscheidende Faktor", paras(
        "Viele Anfragen kommen unterwegs: defekte Leitung, spontane Renovierung, dringender Notfall. Buttons müssen groß genug sein, Telefonnummern klickbar, Formulare kurz und verständlich.",
        "Ladezeiten unter drei Sekunden sind ein realistisches Ziel. Schwere Bilder, unnötige Animationen und überladene Plugins bremsen Seiten und kosten Besucher.",
        "Responsive Design ist Standard — nicht optional. Google bewertet Mobilfreundlichkeit positiv, weil sie echten Nutzerbedürfnissen entspricht."
      )),
      section("Nächste Schritte für Ihren Betrieb", paras(
        "Prüfen Sie Ihre aktuelle Seite am Handy: Finden Sie Telefon und Leistungen in 10 Sekunden? Wenn nicht, lohnt sich ein Relaunch oder gezieltes Redesign.",
        "Sammeln Sie Texte und Bilder aus dem Alltag — das wirkt glaubwürdiger als perfekte Stockfotos. Ich helfe bei Struktur und Formulierung, damit Ihr Können online sichtbar wird.",
        CTA
      )),
    ],
  },
  {
    slug: "website-elektriker-sanitaer-maler",
    title: "Website für Elektriker, Sanitär und Maler — Checkliste für mehr Anfragen",
    description:
      "Konkrete Checkliste für Gewerke-Websites: Leistungen, Notdienst, Einzugsgebiet, SEO und Conversion — speziell für Betriebe in Geislingen und Umgebung.",
    category: "Webdesign",
    date: "04.06.2026",
    imageAlt: "Website Elektriker Sanitär Maler Geislingen — Blog",
    sections: [
      section("Gemeinsame Anforderungen aller Gewerke", paras(
        "Elektriker, Sanitär und Maler haben unterschiedliche Leistungen — aber ähnliche Kundenfragen: Sind Sie erreichbar? Kommen Sie in meine Stadt? Wie schnell bekomme ich ein Angebot?",
        "Eine gute Gewerke-Website beantwortet diese Fragen auf der Startseite und wiederholt die Kontaktmöglichkeiten auf jeder Unterseite.",
        LOCAL
      )),
      section("Elektriker-Website: Sicherheit und Vertrauen", paras(
        "Themen wie E-Check, Smart Home, Photovoltaik oder Notdienst sollten eigene Abschnitte haben. Zertifikate und Meisterbrief, wenn vorhanden, gehören sichtbar ins Vertrauenssegment.",
        "Notfall-Kontakt muss sofort erkennbar sein — große Schaltfläche, klickbare Telefonnummer, klare Erreichbarkeitszeiten.",
        SEO
      )),
      section("Sanitär & Heizung: Komplexe Leistungen einfach erklären", paras(
        "Badrenovierung, Rohrbruch, Heizungswartung — jede Leistung verdient eine verständliche Erklärung in Alltagssprache. Kunden wollen wissen, was auf sie zukommt, nicht nur Fachbegriffe.",
        "Vorher-nachher-Bilder (mit Einwilligung) sind besonders überzeugend. Sie zeigen Handwerk statt leerer Versprechen.",
        "Regionale Bezüge natürlich einbinden: „Sanitär Notdienst Geislingen“ als Service-Beschreibung, nicht als Spam."
      )),
      section("Malerbetrieb: Visuelle Qualität online zeigen", paras(
        "Farben, Fassaden, Innenräume — Ihre Website sollte die sorgfältige Arbeit widerspiegeln. Ruhiges Layout, gute Typografie, hochwertige Projektfotos.",
        "Saisonale Aktionen (Frühjahrs-Anstrich, Winterdienst) können eigene Landingpages erhalten — mit klarem Ablauf und Anfrageformular.",
        CTA
      )),
      section("SEO und Google Maps für Gewerke", paras(
        "Google Business Profil pflegen: Kategorie, Öffnungszeiten, Fotos, Bewertungen beantworten. Website und Profil müssen dieselben Kontaktdaten zeigen.",
        "Leistungsseiten mit regionalen Formulierungen helfen bei „Maler Göppingen“, „Elektriker Geislingen“ und ähnlichen Anfragen — immer natürlich formuliert.",
        "Interne Links von Blogartikeln zu Leistungsseiten stärken thematische Relevanz — z. B. dieser Artikel zu Ihrer Webdesign- oder SEO-Leistungsseite."
      )),
      section("Conversion: vom Besucher zum Auftrag", paras(
        "Mehrere Kontaktwege anbieten: Telefon, WhatsApp, kurzes Formular. Nicht jeder möchte sofort telefonieren — aber alle sollen eine niedrigschwellige Option haben.",
        "Vertrauensbadges: Meisterbetrieb, Versicherung, Referenzkunden, Google-Sterne — nur was wahr ist.",
        "Testen Sie die Seite mit echten Kunden: Verstehen sie Leistungen und Preisrahmen? Feedback ist Gold wert vor dem Launch."
      )),
    ],
  },
  {
    slug: "webdesign-friseure-coaches-dienstleister",
    title: "Webdesign für Friseure, Coaches und Dienstleister in der Region",
    description:
      "Dienstleister verkaufen Vertrauen und Kompetenz. So gestalten Sie eine Website, die Terminanfragen und Kontakte in Geislingen und Göppingen erhöht.",
    category: "Webdesign",
    date: "05.06.2026",
    imageAlt: "Webdesign Friseure Coaches Dienstleister — Blog",
    sections: [
      section("Dienstleister brauchen Klarheit, nicht Lärm", paras(
        "Friseursalons, Coaches, Berater und kleine Agenturen haben eines gemeinsam: Kunden wollen wissen, ob Sie zu ihnen passen — persönlich und fachlich.",
        "Überladene Websites mit zu vielen Animationen wirken oft unseriös. Besser: ruhiges Design, echte Fotos, klare Leistungsbeschreibung und einfache Termin- oder Kontaktanfrage.",
        LOCAL
      )),
      section("Friseur & Beauty: Stil und Erreichbarkeit", paras(
        "Portfolio der Arbeiten, Preisliste oder Preisrahmen, Online-Terminbuchung oder WhatsApp — je nachdem, was zu Ihrem Salon passt.",
        "Instagram-Integration kann sinnvoll sein, ersetzt aber keine eigene Website. Google findet Instagram-Inhalte nicht so zuverlässig wie eine strukturierte Business-Seite.",
        SEO
      )),
      section("Coaches & Berater: Autorität aufbauen", paras(
        "Kurze Biografie, Methodik, Zielgruppe und klare Grenzen (was Sie anbieten — und was nicht). Blogartikel oder FAQ stärken Expertise und helfen bei Long-Tail-Suchen.",
        "E-E-A-T (Experience, Expertise, Authoritativeness, Trust) ist für Berater besonders wichtig: echte Erfahrung zeigen, nicht nur Schlagworte.",
        "Datenschutzhinweise bei Formularen und Newsletter sind Pflicht — seriös umgesetzt wirkt das vertrauensfördernd."
      )),
      section("Kleine Agenturen & Freelancer", paras(
        "Case Studies wie bei Toni's Autopflege oder Tairovic Gebäudeservice zeigen konkrete Ergebnisse — mehr als abstrakte Versprechen.",
        "Leistungspakete mit „ab“-Preisen helfen bei der Qualifizierung von Anfragen. Nicht jeder Lead ist ideal — klare Infos sparen Zeit.",
        CTA
      )),
      section("Lokale Sichtbarkeit für Dienstleister", paras(
        "Viele Dienstleister bedienen ein definiertes Einzugsgebiet. Das gehört sichtbar auf die Website — Karte, Städte, optional Fahrtkostenregelung.",
        "Google Bewertungen aktiv sammeln und auf der Seite verlinken. Authentische Stimmen überzeugen stärker als Marketingfloskeln.",
        "NAP-Konsistenz überall: Website, GBP, Branchenbücher, Social Media."
      )),
      section("Technik und Pflege", paras(
        "Schnelle Ladezeiten, SSL, mobil optimiert — Baseline für jede Dienstleister-Website.",
        "WordPress oder schlanke Alternativen — je nachdem, ob Sie Inhalte selbst pflegen möchten.",
        "Regelmäßige kleine Updates (neue Referenz, angepasste Preise) signalisieren Aktualität — wichtig für Google und Kunden."
      )),
    ],
  },
  {
    slug: "lokales-seo-kmu-google-maps",
    title: "Lokales SEO für KMU — Google Maps, GBP und NAP erklärt",
    description:
      "Praxisguide für kleine Unternehmen: Wie lokales SEO, Google Business Profile und konsistente Firmendaten Sichtbarkeit in Geislingen und Göppingen verbessern.",
    category: "Lokales SEO",
    date: "05.06.2026",
    imageAlt: "Lokales SEO KMU Google Maps Geislingen — Blog",
    sections: [
      section("Was lokales SEO für KMU bedeutet", paras(
        "Lokales SEO zielt darauf ab, bei Suchanfragen mit regionalem Bezug sichtbar zu sein — „Webdesign Geislingen“, „Gebäudereinigung Göppingen“, „Friseur in meiner Nähe“.",
        "Google kombiniert Website-Inhalte, Google Business Profile, Bewertungen, Karten und Nutzersignale. Alles muss zusammenpassen.",
        LOCAL
      )),
      section("Google Business Profile richtig pflegen", paras(
        "Vollständiges Profil: Kategorie, Beschreibung, Öffnungszeiten, Telefon, Website-Link, Fotos, Produkte/Leistungen wo sinnvoll.",
        "Bewertungen sammeln und professionell antworten — auch bei Kritik. Das zeigt Kunden und Google Engagement.",
        "Posts im GBP können Aktionen und Neuigkeiten hervorheben — regelmäßig, aber nicht spammy."
      )),
      section("NAP — Name, Adresse, Telefon", paras(
        "Inkonsistente Daten verwirren Google und Kunden. Schreibweise des Firmennamens, Format der Telefonnummer und Adresse müssen überall identisch sein.",
        "Website-Footer, Kontaktseite, Impressum und GBP sind die wichtigsten Stellen.",
        SEO
      )),
      section("On-Page-SEO für lokale Seiten", paras(
        "Eigene Seiten für wichtige Leistungen mit regionalem Kontext — nicht 20 Stadtseiten mit identischem Text, sondern ehrliche Einzugsgebiets-Angaben.",
        "Title und Meta Description pro Seite, saubere H1-H2-Struktur, interne Verlinkung zwischen Leistungen und Blog.",
        "Schema Markup (LocalBusiness, FAQ) unterstützt maschinenlesbare Signale — technisch sauber umgesetzt."
      )),
      section("Bewertungen als Ranking-Faktor und Vertrauen", paras(
        "Mehr und bessere Bewertungen korrelieren oft mit besserer lokaler Sichtbarkeit — aber gefälschte Reviews sind riskant und können schaden.",
        "Kunden nach abgeschlossenem Projekt freundlich um eine ehrliche Bewertung bitten. QR-Code auf Rechnung oder Visitenkarte erleichtert das.",
        "Website kann Google-Bewertungen einbinden — wie auf unserer Bewertungsseite mit verifizierten Zitaten."
      )),
      section("Messung und Realismus", paras(
        "Google Search Console und Analytics (DSGVO-konform) zeigen, welche Suchanfragen Traffic bringen.",
        "Lokales SEO braucht Zeit — keine Garantie auf Platz 1. Solide Basis schlägt kurzfristige Tricks.",
        CTA
      )),
    ],
  },
  {
    slug: "google-business-profil-bewertungen-tipps",
    title: "Google Business Profil & Bewertungen — Tipps für lokale Firmen",
    description:
      "So optimieren Sie Ihr Google-Unternehmensprofil und sammeln echte Bewertungen — für mehr Vertrauen und bessere lokale Rankings in der Region.",
    category: "Lokales SEO",
    date: "06.06.2026",
    imageAlt: "Google Business Profil Bewertungen Tipps — Blog",
    sections: [
      section("Warum GBP oft wichtiger ist als die Website allein", paras(
        "Bei vielen lokalen Suchen erscheint das Map Pack vor den organischen Ergebnissen. Ein gepflegtes Profil kann mehr Klicks bringen als Platz 5 in den normalen Suchergebnissen.",
        "Website und GBP ergänzen sich: Profil für schnelle Fakten und Bewertungen, Website für Tiefe, Leistungen und Conversion.",
        LOCAL
      )),
      section("Profil vollständig ausfüllen", paras(
        "Jedes leere Feld ist eine verpasste Chance. Kategorien präzise wählen — Haupt- und Nebenkategorien.",
        "Beschreibung in natürlicher Sprache: Was bieten Sie? Für wen? Wo? Kein Keyword-Stuffing.",
        "Hochwertige Fotos: Team, Laden, Projekte, Fahrzeuge — aktuell und authentisch."
      )),
      section("Bewertungen ethisch sammeln", paras(
        "Niemals gekaufte oder gefälschte Reviews — Google erkennt Muster und kann bestrafen.",
        "Zufriedene Kunden persönlich ansprechen, Link zum Bewertungsformular senden, QR-Code nutzen.",
        "Auf jede Bewertung antworten — Danke für Positive, sachlich bei Kritik. Das wirkt professionell."
      )),
      section("Abstimmung Website ↔ GBP", paras(
        "Gleiche Telefonnummer, gleiche Adresse, gleicher Name. Unterschiedliche Schreibweisen schwächen Signale.",
        "Website sollte auf GBP verlinken und umgekehrt. Öffnungszeiten müssen übereinstimmen.",
        SEO
      )),
      section("Häufige Fehler vermeiden", paras(
        "Mehrere Profile für dieselbe Firma — zusammenführen lassen. Falsche Kategorien. Keine Fotos seit Jahren.",
        "Keyword-Stuffing im Firmennamen („Beste Autopflege Göppingen SEO“) verstößt gegen Richtlinien.",
        "Ignorierte Bewertungen signalisieren Desinteresse."
      )),
      section("Langfristige Pflege", paras(
        "Monatlich prüfen: Öffnungszeiten (Feiertage!), neue Fotos, Posts zu Aktionen.",
        "Bei Umzug oder Rebranding sofort alle Kanäle aktualisieren.",
        CTA
      )),
    ],
  },
  {
    slug: "conversion-optimierung-lokale-websites",
    title: "Conversion-Optimierung für lokale Websites — mehr Anfragen ohne mehr Traffic",
    description:
      "Praktische Tipps für KMU: Wie klarere CTAs, Vertrauenselemente und bessere Nutzerführung mehr Kontaktanfragen aus bestehendem Website-Traffic holen.",
    category: "Conversion",
    date: "06.06.2026",
    imageAlt: "Conversion Optimierung lokale Websites — Blog",
    sections: [
      section("Traffic ohne Conversion ist verschwendet", paras(
        "Viele Betriebe konzentrieren sich nur auf Sichtbarkeit — vergessen aber, dass Besucher auch handeln müssen. Conversion-Optimierung verbessert die Quote der Anfragen pro Besucher.",
        "Oft reichen kleine Änderungen: größerer Telefon-Button, kürzeres Formular, klarere Leistungsbeschreibung.",
        LOCAL
      )),
      section("Klare Handlungsaufforderungen (CTA)", paras(
        "Jede wichtige Seite braucht einen primären CTA: „Jetzt anfragen“, „Termin vereinbaren“, „Kostenloses Angebot“.",
        "CTA above the fold auf dem Handy — nicht erst nach drei Bildschirmscrolls.",
        "Mehrere Wege: Formular, Telefon, WhatsApp — unterschiedliche Nutzer bevorzugen unterschiedliche Kanäle."
      )),
      section("Vertrauen vor der Anfrage", paras(
        "Bewertungen, Referenzprojekte, Impressum, echte Fotos, klare Preisrahmen oder „ab“-Angaben reduzieren Unsicherheit.",
        "Case Studies wie FixBike oder Toni's Autopflege zeigen: konkrete Beispiele überzeugen mehr als abstrakte Claims.",
        SEO
      )),
      section("Formulare und Hürden senken", paras(
        "Nur Felder abfragen, die Sie wirklich brauchen. Name, Telefon, kurze Nachricht reichen oft.",
        "Ladeindikatoren und Bestätigung nach Absenden — Nutzer sollen wissen, dass es funktioniert hat.",
        "DSGVO-konforme Einwilligung bei Kontaktformularen — kurz und verständlich."
      )),
      section("Geschwindigkeit und Mobile UX", paras(
        "Jede Sekunde Ladezeit kostet Conversions. Bilder komprimieren, unnötige Skripte entfernen.",
        "Touch-Targets groß genug, keine horizontal scrollenden Texte, Telefon klickbar.",
        "Testen Sie mit echten Geräten — nicht nur Desktop."
      )),
      section("Messen und verbessern", paras(
        "Welche Seiten bringen Anfragen? Wo springen Besucher ab? Einfache Analytics helfen — datenschutzkonform.",
        "A/B-Tests müssen nicht komplex sein: eine Woche andere Headline, dann vergleichen.",
        CTA
      )),
    ],
  },
  {
    slug: "webseiten-fehler-kleine-firmen",
    title: "7 häufige Webseiten-Fehler kleiner Firmen — und wie Sie sie vermeiden",
    description:
      "Veraltetes Design, fehlendes Mobil-Layout, keine Kontaktdaten — typische Fehler, die KMU in Geislingen und Umgebung Kunden kosten.",
    category: "Webdesign",
    date: "07.06.2026",
    imageAlt: "Webseiten Fehler kleine Firmen — Blog",
    sections: [
      section("Fehler 1: Nicht mobil optimiert", paras(
        "Über die Hälfte der Besuche kommt vom Smartphone. Wenn Ihre Seite zoom erfordert oder Buttons zu klein sind, verlieren Sie Anfragen.",
        "Responsive Design ist 2026 Standard — jede professionelle Neuentwicklung sollte das mitliefern.",
        LOCAL
      )),
      section("Fehler 2: Keine klare Leistungsbeschreibung", paras(
        "„Willkommen auf unserer Homepage“ sagt dem Kunden nichts. Stattdessen: Was bieten Sie? Für wen? In welcher Region?",
        "Leistungen in Alltagssprache, nicht nur interne Fachbegriffe.",
        SEO
      )),
      section("Fehler 3: Kontakt schwer findbar", paras(
        "Telefon nur im Impressum versteckt — zu wenig. Footer, Header, Kontaktseite, klickbare nummer auf Mobile.",
        "WhatsApp und Formular als Alternative für schüchterne Anfragende."
      )),
      section("Fehler 4: Veraltete Inhalte", paras(
        "Copyright 2018, geschlossene Filiale als Standort, alte Teamfotos — wirkt vernachlässigt.",
        "Regelmäßige Mini-Updates signalisieren: Der Betrieb lebt."
      )),
      section("Fehler 5: Zu langsame Ladezeit", paras(
        "Unkomprimierte Bilder, zu viele Plugins, billiges Hosting — alles bremsend.",
        "PageSpeed testen und gezielt optimieren."
      )),
      section("Fehler 6 & 7: Kein SEO und kein Google Profil", paras(
        "Ohne Title, Meta und Struktur findet Google Sie schwer. Ohne GBP fehlen Sie im Map Pack.",
        "Beides zusammen — Website plus Profil — ist die Basis für lokale Sichtbarkeit.",
        CTA
      )),
    ],
  },
  {
    slug: "professionelle-texte-bilder-website",
    title: "Warum professionelle Texte und Bilder auf Ihrer Website entscheidend sind",
    description:
      "Echte Fotos und verständliche Texte schaffen Vertrauen — mehr als Stockbilder und leere Marketingfloskeln. Tipps für KMU in der Region.",
    category: "Content",
    date: "07.06.2026",
    imageAlt: "Professionelle Texte und Bilder Website — Blog",
    sections: [
      section("Der erste Eindruck entsteht in Sekunden", paras(
        "Besucher beurteilen Ihre Website blitzschnell — bewusst oder unbewusst. Billige Stockfotos und generische Texte signalisieren: Hier ist nichts Besonderes.",
        "Authentische Bilder aus Ihrem Betrieb und Texte, die wie ein Gespräch klingen, heben Sie ab.",
        LOCAL
      )),
      section("Texte: klar statt clever", paras(
        "Schreiben Sie für Kunden, nicht für Kollegen. Kurze Sätze, aktive Formulierungen, konkrete Leistungen.",
        "SEO-Texte müssen natürlich klingen — Google erkennt Keyword-Stuffing.",
        "Bei Bedarf unterstütze ich bei Struktur und Formulierung — Inhalte kennen Sie am besten."
      )),
      section("Bilder: Qualität und Relevanz", paras(
        "Smartphone-Fotos reichen oft — wenn Licht und Schärfe stimmen. Lieber echtes Werkstattbild als perfektes Stock-Foto.",
        "Bilder komprimieren für schnelle Ladezeiten. Alt-Texte für Barrierefreiheit und SEO.",
        SEO
      )),
      section("Rechtliche Aspekte", paras(
        "Bildrechte beachten — Stock-Lizenzen, Einwilligungen bei Personenfotos, Marken fremder Logos.",
        "Impressum und Datenschutz vollständig — Pflicht in Deutschland."
      )),
      section("Content-Pflege als Routine", paras(
        "Neue Projekte, saisonale Angebote, aktualisierte Preise — einmal im Quartal prüfen reicht oft.",
        "Blogartikel zu Ihren Themen stärken Expertise und interne Verlinkung.",
        CTA
      )),
      section("Zusammenfassung", paras(
        "Professioneller Content muss nicht teuer sein — er muss echt und verständlich sein.",
        "Investition in Texte und Bilder zahlt sich in höherer Conversion aus.",
        "Starten Sie mit Startseite und wichtigster Leistungsseite — Schritt für Schritt."
      )),
    ],
  },
  {
    slug: "baukasten-vs-individuelle-website",
    title: "Baukasten vs. individuelle Website — was passt zu Ihrem KMU?",
    description:
      "Wix, Jimdo oder individuelle Entwicklung? Ehrlicher Vergleich für kleine Unternehmen in Geislingen — Kosten, SEO, Flexibilität.",
    category: "Webdesign",
    date: "08.06.2026",
    imageAlt: "Baukasten vs individuelle Website KMU — Blog",
    sections: [
      section("Baukasten: schnell und günstig — mit Grenzen", paras(
        "Baukästen eignen sich für sehr einfache Präsenzen und schnelle Tests. Drag-and-Drop, Vorlagen, monatliche Gebühren.",
        "Nachteile: begrenzte SEO-Kontrolle, generische Designs, Performance oft mittelmäßig, Abhängigkeit vom Anbieter.",
        LOCAL
      )),
      section("Individuelle Website: maßgeschneidert", paras(
        "Individuelle Entwicklung passt Layout, Struktur und Technik an Ihren Betrieb an. On-Page-SEO von Anfang an, bessere Performance möglich.",
        "Höhere Initialkosten — aber oft langfristig besser, wenn ernsthafte Sichtbarkeit und Anfragen das Ziel sind.",
        SEO
      )),
      section("SEO-Vergleich", paras(
        "Baukasten erlauben oft basic Meta-Tags — tiefere Struktur, Schema, saubere URLs und Geschwindigkeit sind schwieriger.",
        "Individuelle Sites können LocalBusiness, FAQ, Breadcrumbs und saubere interne Linkstruktur implementieren.",
        "Für competitive lokale Keywords (Webdesign, Handwerk) ist maßgeschneiderte SEO-Basis ein Vorteil."
      )),
      section("Wann welche Lösung?", paras(
        "Baukasten: Hobby, sehr kleines Budget, temporäre Seite.",
        "Individuell: Handwerk, Dienstleister, wer Anfragen und Google-Sichtbarkeit ernst nimmt.",
        "Hybrid: WordPress mit individuellem Theme — Mittelweg mit Pflegemöglichkeit."
      )),
      section("Kostenrealität", paras(
        "Baukasten: 15–40 €/Monat über Jahre summiert sich.",
        "Individuelle Website: einmalige Projektkosten ab ca. 890 € — danach Hosting und optional Wartung.",
        "ROI über Anfragen oft höher bei professioneller Umsetzung."
      )),
      section("Entscheidungshilfe", paras(
        "Fragen Sie: Wie wichtig ist Google für neue Kunden? Wenn sehr — individuelle Lösung lohnt sich eher.",
        "Ich berate ehrlich — manchmal reicht ein schlanker Relaunch statt Komplettneubau.",
        CTA
      )),
    ],
  },
  {
    slug: "landingpages-aktionen-handwerk",
    title: "Landingpages für Aktionen — Frühjahrsangebote, Winterservice & Co.",
    description:
      "Saisonale Kampagnen für Handwerk und Dienstleister: Wann eigene Landingpages sinnvoll sind und wie Sie sie SEO-freundlich umsetzen.",
    category: "Conversion",
    date: "08.06.2026",
    imageAlt: "Landingpages Aktionen Handwerk — Blog",
    sections: [
      section("Warum separate Landingpages?", paras(
        "Eine allgemeine Homepage kann saisonale Aktionen nicht immer prominent platzieren. Eine dedizierte Landingpage fokussiert auf ein Angebot — z. B. Winterservice, Frühlings-Rasenpflege, Heizungscheck.",
        "Kürzere Nutzerwege = höhere Conversion. Weniger Ablenkung, klares Angebot, ein CTA.",
        LOCAL
      )),
      section("Aufbau einer guten Aktions-Landingpage", paras(
        "Headline mit Nutzen, kurze Erklärung, Preis oder „ab“-Preis, Ablaufdatum der Aktion, Formular oder Telefon, Vertrauenselemente.",
        "Mobile first — Aktionen werden oft unterwegs gesucht.",
        SEO
      )),
      section("SEO für zeitlich begrenzte Seiten", paras(
        "Indexieren ja — aber nach Ende der Aktion weiterleiten oder Inhalt aktualisieren. Keine veralteten „2024 Aktion“-Seiten.",
        "URL sprechend: /fruehlingsangebot-rasenpflege statt /page?id=99.",
        "Intern von Homepage und passenden Leistungsseiten verlinken."
      )),
      section("Beispiele aus der Praxis", paras(
        "Autopflege: Winterpaket Innenreinigung. Gartenbau: Frühjahrs-Schnitt. Heizung: Wartungsaktion vor der Saison.",
        "Google Ads oder Social können auf Landingpages zeigen — konsistente Botschaft.",
        CTA
      )),
      section("Messung des Erfolgs", paras(
        "Anfragen zählen, Quelle notieren (Landingpage vs. Homepage).",
        "Nach Saison auswerten: lohnt sich Wiederholung nächstes Jahr?",
        "Inhalte und Fotos archivieren für schnelleren Relaunch."
      )),
      section("Technische Umsetzung", paras(
        "Schlanke Seite, schnell ladend, kein überflüssiger Ballast.",
        "DSGVO bei Formularen. Danke-Seite nach Absenden.",
        "Bei Bedarf setze ich Landingpages als Erweiterung Ihrer bestehenden Website um."
      )),
    ],
  },
  {
    slug: "webdesign-goeppingen-region",
    title: "Webdesign für Unternehmen in Göppingen und Landkreis — regional stark auftreten",
    description:
      "Webdesign und lokales SEO für Betriebe in Göppingen, Geislingen und Landkreis Göppingen — Sichtbarkeit ohne Agentur-Overhead.",
    category: "Webdesign",
    date: "09.06.2026",
    imageAlt: "Webdesign Göppingen Landkreis — Blog",
    sections: [
      section("Göppingen und Umgebung — digitale Landschaft", paras(
        "Viele KMU im Landkreis Göppingen konkurrieren online um dieselben Kunden. Wer professionell wirkt, gewinnt — unabhängig von der Betriebsgröße.",
        "Webdesign aus Geislingen mit regionaler Kenntnis: kurze Wege, persönliche Betreuung, Verständnis für Handwerk und Dienstleister.",
        LOCAL
      )),
      section("Was regionale Websites brauchen", paras(
        "Klare Nennung des Einzugsgebiets — Göppingen, Geislingen, Eislingen, Süßen, und wo Sie tätig sind.",
        "Referenzen aus der Region, wenn möglich — Vertrauen durch Nähe.",
        SEO
      )),
      section("Erfolgsbeispiele", paras(
        "Toni's Autopflege in Göppingen: lokale Sichtbarkeit und professioneller Auftritt.",
        "FixBike und Tairovic zeigen: auch überregional lohnt sich Qualität — aber lokaler Fokus bleibt wichtig für Handwerker.",
        "Jedes Projekt individuell — keine Template-Websites von der Stange."
      )),
      section("SEO zwischen Geislingen und Göppingen", paras(
        "Nicht zwei identische Stadtseiten mit Copy-Paste — sondern ehrliche Service-Area-Angaben.",
        "Google Maps Zentrum und Einzugsgebiet konsistent.",
        "Blog und Leistungsseiten mit natürlichen regionalen Bezügen."
      )),
      section("Zusammenarbeit", paras(
        "Erstgespräch per Telefon, Video oder vor Ort — je nachdem, was passt.",
        "Transparente Angebote, kein Druck, realistische Zeitpläne.",
        CTA
      )),
      section("Ausblick", paras(
        "Digitale Präsenz ist Daueraufgabe — nicht einmaliges Event.",
        "Pflege, Updates und gelegentliche SEO-Checks halten Sie sichtbar.",
        "Mehr zum Thema in unserem ausführlichen Guide Webdesign Geislingen."
      )),
    ],
  },
  {
    slug: "website-kosten-geislingen-orientierung",
    title: "Was kostet eine Website in Geislingen? — ehrliche Preisorientierung für KMU",
    description:
      "Website Kosten Geislingen: Was beeinflusst den Preis, welche Pakete gibt es ab wann — transparente Orientierung ohne versteckte Kosten.",
    category: "Webdesign",
    date: "09.06.2026",
    imageAlt: "Website Kosten Geislingen Orientierung — Blog",
    sections: [
      section("Warum es keine Einheitspreise gibt", paras(
        "Jeder Betrieb braucht unterschiedlichen Umfang: Seitenanzahl, Texte, Bilder, Buchungssystem, Mehrsprachigkeit, SEO-Tiefe.",
        "Seriöse Anbieter nennen Richtwerte „ab“ und erstellen nach Gespräch ein Individualangebot.",
        LOCAL
      )),
      section("Typische Preisstufen (Orientierung)", paras(
        "Basis-Website ab ca. 890 €: wenige Seiten, mobil, Kontakt — gut für Einstieg.",
        "SEO-optimierte Website ab ca. 1.490 €: On-Page-SEO, Maps, Struktur, FAQ.",
        "Komplettpaket Webdesign + SEO ab ca. 2.290 €: Content, Conversion, GBP-Abstimmung, Support.",
        "Alle Angaben sind „ab“ — abhängig von Ihren Anforderungen."
      )),
      section("Was den Preis treibt", paras(
        "Viele Unterseiten, eigene Texte durch Agentur, E-Commerce, Mehrsprachigkeit, komplexe Funktionen.",
        "Günstig ist nicht immer günstig — Nachbesserungen an schlecht geplanten Sites kosten später mehr.",
        SEO
      )),
      section("Laufende Kosten", paras(
        "Hosting ca. 5–20 €/Monat, Domain ca. 10–20 €/Jahr, optional Wartung.",
        "WordPress-Updates und Sicherheit — wenn gewünscht als Service.",
        "Keine versteckten Abo-Fallen bei fairer Zusammenarbeit."
      )),
      section("ROI denken", paras(
        "Eine Anfrage pro Monat durch bessere Website kann Investition rechtfertigen — je nach Branche und Auftragswert.",
        "Vergleichen Sie mit Zeitungsanzeigen oder Portal-Gebühren — Website ist langfristiger Kanal.",
        CTA
      )),
      section("Nächster Schritt", paras(
        "Kostenloses Erstgespräch — ich schätze ehrlich ein, was sinnvoll ist.",
        "Kein Lockangebot mit Nachverhandlung — transparent von Anfang an.",
        "Preisübersicht auch auf unserer Webdesign & SEO Seite."
      )),
    ],
  },
];

/** Extra paragraphs to reach 800+ words per article */
const EXPAND = [
  "Praxis zeigt: Betriebe, die Telefonnummer, Leistungen und Einzugsgebiet bereits auf der Startseite sichtbar machen, erhalten deutlich mehr Anrufe als Websites, die Besucher erst durch mehrere Menüpunkte navigieren lassen. Das gilt für Handwerk, Dienstleister und Handel gleichermaßen — unabhängig von der Betriebsgröße. AGR Multimedia setzt deshalb bei jedem Projekt auf klare Nutzerführung und messbare Kontaktpunkte statt auf Design um des Designs willen.",
  "Google bewertet unter anderem Relevanz, Nutzerfreundlichkeit und technische Qualität. Saubere Überschriften-Hierarchie (ein H1 pro Seite, sinnvolle H2/H3), verständliche Meta-Beschreibungen und schnelle Ladezeiten sind keine optionalen Extras, sondern die Basis für nachhaltige Sichtbarkeit. Black-Hat-Tricks oder gekaufte Backlink-Pakete lehne ich ab — sie bergen Risiken und passen nicht zu seriösen lokalen Betrieben, die langfristig Vertrauen aufbauen wollen.",
  "Viele Inhaber in Geislingen, Göppingen und im Landkreis haben wenig Zeit für Technik — verständlich. Deshalb erkläre ich Ablauf, Optionen und Pflegeaufwand in normaler Sprache. Ob WordPress, schlanke Static-Lösung oder Relaunch: Entscheidend ist, dass die Website zu Ihrem Alltag passt und Sie wissen, wer sie betreut. Nach dem Launch bleibe ich erreichbar für Updates, neue Seiten oder SEO-Anpassungen, wenn sich Ihr Angebot weiterentwickelt.",
  "Referenzprojekte wie Toni's Autopflege Göppingen, Tairovic Gebäudeservice, FixBike oder IlmBuds zeigen unterschiedliche Branchen — gemeinsam ist der Anspruch: verständliche Struktur, professionelles Design und technische SEO-Grundlage. Kein Copy-Paste von Templates, sondern individuelle Lösungen. Wenn Sie ähnliche Ziele haben, lohnt sich ein Blick auf unser Portfolio und den ausführlichen Guide Webdesign Geislingen an der Steige auf agrmultimedia.eu.",
  "Conversion und SEO gehören zusammen: Was nützt Platz zwei bei Google, wenn Besucher die Kontaktseite nicht finden? Deshalb plane ich CTAs, Formulare und Vertrauenselemente parallel zur Inhaltsstruktur. Bewertungen, echte Fotos, Impressum und klare Leistungsbeschreibungen reduzieren Unsicherheit — besonders bei höheren Auftragswerten im Handwerk oder bei Dienstleistern mit Beratungscharakter.",
  "Mobile Optimierung ist 2026 Pflicht. Responsive Layout, klickbare Telefonnummern, lesbare Schriftgrößen und schlanke Bilder sind Standard bei jeder Website, die ich umsetze. Google testet Mobilfreundlichkeit; Nutzer unterwegs erwarten sie ohnehin. Wer hier spart, verliert doppelt: Rankings und echte Kundenanfragen.",
  "Lokale Suchanfragen haben oft hohe Kaufabsicht — „Autopflege Göppingen“, „Webdesign Geislingen“, „Gebäudereinigung in meiner Nähe“. Wer mit passenden Inhalten und gepflegtem Google Business Profil präsent ist, fängt diese Nachfrage ab. Website und GBP müssen dieselben Fakten zeigen; Widersprüche verwirren Algorithmen und Menschen gleichermaßen.",
  "Content muss authentisch bleiben. Stock-Fotos und generische Texte wirken schnell austauschbar. Besser: Fotos aus dem Betrieb, Formulierungen wie im Kundengespräch, ehrliche Angaben zu Einzugsgebiet und Preisrahmen. Das stärkt E-E-A-T — Experience, Expertise, Authoritativeness, Trust — und genau darauf legen Suchmaschinen und KI-Assistenten zunehmend Wert.",
  "Budget-Transparenz schafft Vertrauen: Basis-Websites ab ca. 890 €, SEO-Pakete ab ca. 1.490 €, Komplettlösungen ab ca. 2.290 € — jeweils als Richtwert „ab“, abhängig vom Umfang. Nach einem kostenlosen Erstgespräch erhalten Sie ein Individualangebot ohne versteckte Posten. So können Sie commercial intent Suchen wie „Website Kosten Geislingen“ mit ehrlichen Informationen bedienen.",
  "Interne Verlinkung stärkt Themencluster: Blogartikel verweisen auf Leistungsseiten, Leistungsseiten auf den ausführlichen Pillar-Guide, alles verbunden mit Kontakt und About. Diese Struktur hilft Google, Ihre Expertise zu einer Hauptthematik zu ordnen — Webdesign und lokales SEO für KMU in der Region Geislingen/Göppingen.",
  "AEO und GEO — Sichtbarkeit in KI-Suchen — bauen auf derselben Basis: klare Fakten, strukturierte Daten, FAQ, konsistente Entitätsinformationen. llms.txt, Schema.org und crawler-freundliches HTML ergänzen die React-Oberfläche. Wer heute nur für klassisches Google optimiert, verpasst Anteile zukünftiger Suche; deshalb integriere ich AEO-Grundlagen ohne UX zu opfern.",
  "Saisonale Landingpages, Blog-Serie oder Relaunch — alles planbar in Phasen. Sie müssen nicht alles auf einmal umsetzen. Wichtig ist ein Plan: erst kritische Schwächen (Mobil, Kontakt, GBP), dann Content-Tiefe, dann Feintuning. Ich begleite Sie Schritt für Schritt — persönlich, aus Geislingen, für Betriebe, die online ernst genommen werden wollen.",
];

function expandPost(post) {
  let idx = 0;
  while (countWords(post) < 850) {
    const sec = post.sections[idx % post.sections.length];
    sec.paragraphs.push(EXPAND[idx % EXPAND.length]);
    idx++;
    if (idx > 80) break;
  }
  return post;
}

function countWords(post) {
  let n = 0;
  for (const s of post.sections) {
    for (const p of s.paragraphs) n += p.split(/\s+/).length;
    n += s.heading.split(/\s+/).length;
  }
  n += post.title.split(/\s+/).length + post.description.split(/\s+/).length;
  return n;
}

function escapeStr(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ");
}

let ts = `/** Extended DE blog posts — generated for topical authority (800+ words each). */\nimport type { BlogPostDe } from "./blogPostDeTypes";\n\nexport const BLOG_POSTS_DE_EXTENDED: BlogPostDe[] = [\n`;

for (const raw of posts) {
  const post = expandPost(structuredClone(raw));
  const wc = countWords(post);
  if (wc < 800) console.warn(`WARN: ${post.slug} only ${wc} words`);
  ts += `  {\n    slug: "${post.slug}",\n    title: "${escapeStr(post.title)}",\n    description: "${escapeStr(post.description)}",\n    category: "${post.category}",\n    date: "${post.date}",\n    image: "${IMG}",\n    imageAlt: "${escapeStr(post.imageAlt)}",\n    sections: [\n`;
  for (const sec of post.sections) {
    ts += `      {\n        heading: "${escapeStr(sec.heading)}",\n        paragraphs: [\n`;
    for (const p of sec.paragraphs) {
      ts += `          "${escapeStr(p)}",\n`;
    }
    ts += `        ],\n      },\n`;
  }
  ts += `    ],\n  },\n`;
}

ts += `];\n`;

fs.writeFileSync(outPath, ts, "utf8");
console.log(`OK: wrote ${posts.length} posts to ${outPath}`);
for (const raw of posts) {
  const p = expandPost(structuredClone(raw));
  console.log(`  ${p.slug}: ~${countWords(p)} words`);
}
