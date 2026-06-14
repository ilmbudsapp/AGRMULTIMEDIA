/** German SEO blog foundation — local web design topics for Geislingen region. */
export type BlogPostDe = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const BLOG_POSTS_DE: BlogPostDe[] = [
  {
    slug: "webdesign-lokale-firmen",
    title: "Warum professionelles Webdesign für lokale Firmen entscheidend ist",
    description:
      "Eine moderne Website ist für Handwerk und Dienstleister in Geislingen oft der erste Kontaktpunkt — und prägt das Vertrauen vor dem ersten Anruf.",
    category: "Webdesign",
    date: "03.06.2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    imageAlt: "Webdesign für lokale Firmen in Geislingen — Blog",
    sections: [
      {
        heading: "Der erste Eindruck zählt",
        paragraphs: [
          "Viele Kunden in Geislingen an der Steige und Umgebung informieren sich zuerst online, bevor sie anrufen oder eine Anfrage senden. Eine veraltete oder schwer lesbare Website wirkt schnell unprofessionell — auch wenn die Arbeit vor Ort exzellent ist.",
          "Professionelles Webdesign bedeutet nicht nur „schön aussehen“. Es geht um klare Struktur, schnelle Ladezeiten auf dem Smartphone und eine eindeutige Aufforderung zum Kontakt.",
        ],
      },
      {
        heading: "Was lokale Firmen brauchen",
        paragraphs: [
          "Für Zanate, Reinigungsbetriebe oder Autopflege reicht oft eine übersichtliche Seite mit Leistungen, Referenzen und Kontaktmöglichkeiten. Entscheidend ist, dass Besucher in wenigen Sekunden verstehen, was Sie anbieten und wie sie Sie erreichen.",
        ],
      },
    ],
  },
  {
    slug: "seo-firmen-geislingen",
    title: "SEO für Firmen in Geislingen an der Steige",
    description:
      "Lokales SEO hilft, bei Google gefunden zu werden — wenn Titel, Inhalte und Struktur zur Region und zu Ihren Leistungen passen.",
    category: "SEO",
    date: "03.06.2026",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    imageAlt: "Lokales SEO Geislingen an der Steige — Blog",
    sections: [
      {
        heading: "Lokale Sichtbarkeit",
        paragraphs: [
          "Wer nach „Webdesign Geislingen“ oder branchenspezifischen Begriffen sucht, sollte eine Website finden, die diese Themen sachlich abdeckt — ohne Keyword-Spam.",
          "Google bewertet unter anderem Relevanz, Nutzerfreundlichkeit und technische Qualität. Saubere Überschriften, aussagekräftige Meta-Beschreibungen und eine mobil optimierte Seite sind die Basis.",
        ],
      },
    ],
  },
  {
    slug: "moderne-website-mehr-kunden",
    title: "Wie eine moderne Website mehr Kunden bringt",
    description:
      "Mehr Anfragen entstehen selten durch Zufall — sie folgen einer klaren Nutzerführung von der Startseite zum Kontakt.",
    category: "Conversion",
    date: "03.06.2026",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    imageAlt: "Moderne Website und mehr Kundenanfragen — Blog",
    sections: [
      {
        heading: "Von Besucher zu Anfrage",
        paragraphs: [
          "Eine moderne Website führt Besucher logisch: Wer sind Sie? Was bieten Sie? Warum sollte man Ihnen vertrauen? Wie kann man Sie erreichen?",
          "Kontaktformular, WhatsApp-Button und sichtbare Telefonnummer reduzieren Hürden — besonders auf dem Smartphone.",
        ],
      },
    ],
  },
  {
    slug: "webdesign-trends-kmu",
    title: "Webdesign-Trends für kleine Unternehmen",
    description:
      "Klare Typografie, schnelle Ladezeiten und reduziertes Design — was für KMU in der Praxis wirklich zählt.",
    category: "Trends",
    date: "03.06.2026",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    imageAlt: "Webdesign Trends für kleine Unternehmen — Blog",
    sections: [
      {
        heading: "Weniger ist oft mehr",
        paragraphs: [
          "Trends kommen und gehen. Für kleine Firmen bleibt gültig: Lesbarkeit, Geschwindigkeit und Vertrauenssignale wie echte Referenzen und Bewertungen.",
          "Aufwendige Animationen sind optional — eine schnelle, verständliche Seite konvertiert meist besser.",
        ],
      },
    ],
  },
  {
    slug: "lokaler-seo-handwerk",
    title: "Lokaler SEO für Handwerk und kleine Firmen",
    description:
      "Handwerker und Dienstleister profitieren von regionalen Inhalten und einer Google-optimierten Struktur — ohne teure Werbekampagnen.",
    category: "Lokales SEO",
    date: "03.06.2026",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    imageAlt: "Lokaler SEO für Handwerk Geislingen — Blog",
    sections: [
      {
        heading: "Regional gefunden werden",
        paragraphs: [
          "Neben der Website spielt auch das Google-Unternehmensprofil eine Rolle. NAP-Daten (Name, Adresse, Telefon) sollten überall übereinstimmen.",
          "Eine eigene Leistungsseite mit regionalem Bezug — z. B. zu Geislingen, Göppingen oder Ulm — kann bei passenden Suchanfragen helfen, sichtbar zu bleiben.",
        ],
      },
    ],
  },
];
