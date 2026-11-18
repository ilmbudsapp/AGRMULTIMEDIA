export type ServiceCopy = {
  metaTitle: string;
  metaDescription: string;
  heading: string;
  moreLabel: string;
  forWhom: string;
  ablauf: string;
  angebot: string;
  faqs: { q: string; a: string }[];
};

export const serviceCopy: Record<string, ServiceCopy> = {
  gartenpflege: {
    metaTitle: "Gartenpflege in Gersthofen & Augsburg | RL Gartenservice",
    metaDescription:
      "Gartenpflege in Gersthofen, Augsburg und Umgebung: Rasenmähen, Heckenschnitt, Beete, Unkraut und Laub. RL Gartenservice, kostenlos anfragen.",
    heading: "Gartenpflege in Gersthofen und Augsburg",
    moreLabel: "Mehr zur Gartenpflege",
    forWhom:
      "Die Gartenpflege ist für Privatkunden, Eigentümer und Hausverwaltungen mit einem Garten oder einer Grünanlage gedacht.",
    ablauf:
      "Sie erreichen uns telefonisch, per WhatsApp oder per E-Mail und nennen die gewünschten Arbeiten. Wir stimmen ab, ob es ein einzelner Einsatz ist oder eine regelmäßige Pflege. Danach erhalten Sie ein kostenloses und unverbindliches Angebot.",
    angebot:
      "Für ein Angebot helfen die Adresse, die gewünschten Arbeiten, eine ungefähre Fläche oder Fotos, der gewünschte Zeitraum und eine Telefonnummer.",
    faqs: [
      {
        q: "Bieten Sie auch regelmäßige Gartenpflege an?",
        a: "Ja. Neben einzelnen Einsätzen übernehmen wir die regelmäßige und die saisonale Pflege. Wie oft gemäht, geschnitten oder Laub entfernt wird, sprechen wir mit Ihnen ab.",
      },
      {
        q: "In welchem Gebiet arbeiten Sie?",
        a: "Der Sitz ist in Gersthofen. Wir arbeiten in Augsburg und der Umgebung, etwa bis 70 km, unter anderem in Neusäß, Friedberg, Kissing, Mering, Fürstenfeldbruck und Dachau. Weitere Orte nach Vereinbarung.",
      },
      {
        q: "Wovon hängt der Aufwand ab?",
        a: "Vom Umfang der Arbeiten, von der Fläche, vom Zustand des Gartens und davon, wie gut die Flächen erreichbar sind. Einen Preis nennen wir erst anhand dieser Angaben.",
      },
      {
        q: "Was gehört zur Gartenpflege?",
        a: "Rasenmähen und Rasenpflege, Heckenschnitt und Strauchschnitt, Unkrautentfernung, Laubentfernung, Beetpflege, Gartenreinigung und die Pflege von Grünanlagen.",
      },
    ],
  },
  gartenbau: {
    metaTitle: "Gartenbau in Gersthofen & Augsburg | RL Gartenservice",
    metaDescription:
      "Gartenbau und Außenanlagen in Gersthofen und Augsburg: Pflaster, Terrassen, Zäune und Rollrasen. RL Gartenservice stimmt den Umfang mit Ihnen ab.",
    heading: "Gartenbau und Außenanlagen in Gersthofen und Augsburg",
    moreLabel: "Mehr zum Gartenbau",
    forWhom:
      "Der Gartenbau richtet sich an Privatgrundstücke, Hauseigentümer und Hausverwaltungen, die Wege, Terrassen, Zäune oder eine Rasenfläche neu anlegen oder erneuern lassen.",
    ablauf:
      "Sie schildern das Vorhaben. Wir klären den Umfang, zum Beispiel Pflaster, Terrasse, Zaun oder Rollrasen, und unterbreiten ein kostenloses, unverbindliches Angebot.",
    angebot:
      "Hilfreich sind die Adresse, die Art der Fläche, ungefähre Maße, Fotos vom Bestand, das gewünschte Material, soweit es schon feststeht, und der Zeitraum.",
    faqs: [
      {
        q: "Welche Gartenbauarbeiten führen Sie aus?",
        a: "Pflasterarbeiten, Gartenwege und Gehwege, Terrassenbau, Zaunmontage, Rollrasenverlegung sowie kleinere Gartenbauarbeiten an Außenanlagen.",
      },
      {
        q: "Muss das Material schon feststehen?",
        a: "Nein. Wenn Steine, Holz oder die Zaunart noch offen sind, klären wir das bei der Anfrage. Das Material beeinflusst den Aufwand.",
      },
      {
        q: "Wo kann ich Bilder dazu sehen?",
        a: "In der Galerie sehen Sie Fotos und Videos von Terrassen, Zäunen, Pflaster und Einfassungen.",
      },
      {
        q: "Arbeiten Sie auch außerhalb von Augsburg?",
        a: "Ja, von Gersthofen aus in Augsburg und der Umgebung bis etwa 70 km. Weitere Orte sprechen wir ab.",
      },
    ],
  },
  hausmeisterservice: {
    metaTitle: "Hausmeisterservice in Gersthofen & Augsburg | RL Gartenservice",
    metaDescription:
      "Hausmeisterservice und Reinigung in Gersthofen und Augsburg für Privatkunden, Eigentümer und Hausverwaltungen. Kleine Instandhaltung im zulässigen Rahmen.",
    heading: "Hausmeisterservice und Reinigung in Gersthofen und Augsburg",
    moreLabel: "Mehr zum Hausmeisterservice",
    forWhom:
      "Der Hausmeisterservice richtet sich an Privatkunden, Eigentümer und Hausverwaltungen.",
    ablauf:
      "Sie nennen das Objekt und die gewünschten Aufgaben. Ob eine regelmäßige Betreuung oder ein einzelner Einsatz sinnvoll ist, stimmen wir vorher ab. Das Angebot ist kostenlos und unverbindlich.",
    angebot:
      "Für ein Angebot helfen die Adresse, ob es um ein Haus, eine Wohnung oder eine Wohnanlage geht, die gewünschten Arbeiten, eine ungefähre Häufigkeit und Fotos der Flächen.",
    faqs: [
      {
        q: "Welche Reparaturen übernehmen Sie?",
        a: "Kleine Reparatur- und Instandhaltungsarbeiten im zulässigen Rahmen, dazu die Pflege und Sauberhaltung von Außenanlagen und Gemeinschaftsflächen.",
      },
      {
        q: "Was umfasst die Reinigung?",
        a: "Treppenhausreinigung, Reinigung von Gemeinschaftsbereichen, Hof- und Gehwegreinigung, Terrassenreinigung, Reinigung von Einfahrten und Außenflächen sowie allgemeine Objektpflege.",
      },
      {
        q: "Für wen ist der Service gedacht?",
        a: "Für Privatkunden, Eigentümer und Hausverwaltungen in Gersthofen, Augsburg und Umgebung.",
      },
      {
        q: "Was gehört zur Betreuung eines Objekts?",
        a: "Kontrollen, Pflege der Außenanlagen, Reinigung der Außenbereiche, der Mülltonnenservice und kleine Reparatur- und Instandhaltungsarbeiten im zulässigen Rahmen. Zur Reinigung gehören Treppenhaus, Gemeinschaftsflächen, Hof, Gehwege, Terrassen und Einfahrten.",
      },
    ],
  },
  bodenbelag: {
    metaTitle: "Bodenbelag verlegen in Gersthofen & Augsburg | RL Gartenservice",
    metaDescription:
      "Laminat, Vinyl, Klick-Vinyl, Fertigparkett und Teppich in Gersthofen und Augsburg. Untergrundvorbereitung im zulässigen Rahmen durch RL Gartenservice.",
    heading: "Bodenbelagsarbeiten in Gersthofen und Augsburg",
    moreLabel: "Mehr zu den Bodenbelagsarbeiten",
    forWhom:
      "Die Bodenbelagsarbeiten sind für Wohnungen und Objekte von Privatkunden, Eigentümern und Hausverwaltungen gedacht.",
    ablauf:
      "Sie sagen, welcher Belag verlegt werden soll und wie der Raum heute aussieht. Wir klären den Umfang, einschließlich der Entfernung eines alten Belags, wenn das gewünscht ist, und nennen ein kostenloses, unverbindliches Angebot.",
    angebot:
      "Hilfreich sind der Ort, der gewünschte Belag, die ungefähre Fläche, der Zustand des vorhandenen Bodens und Fotos.",
    faqs: [
      {
        q: "Welche Böden verlegen Sie?",
        a: "Laminat, Vinylboden, Klick-Vinyl, Fertigparkett und Teppichboden. Dazu gehören das Montieren von Sockelleisten und, wenn gewünscht, die Entfernung alter Bodenbeläge.",
      },
      {
        q: "Was bedeutet die Vorbereitung im zulässigen Rahmen?",
        a: "Wir bereiten den Untergrund im zulässigen Rahmen vor, also so weit, wie es zu den genannten Verlegearbeiten gehört. Weitergehende Bauleistungen sagen wir nicht pauschal zu.",
      },
      {
        q: "Wo verlegen Sie Böden?",
        a: "In Wohnungen und Objekten in Gersthofen, Augsburg und der Umgebung bis etwa 70 km.",
      },
      {
        q: "Kann ich Beispiele sehen?",
        a: "In der Galerie sehen Sie Fotos und Videos von vorbereiteten Untergründen und verlegten Böden.",
      },
    ],
  },
};
