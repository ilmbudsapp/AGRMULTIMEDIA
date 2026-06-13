import type { Language } from "@/lib/i18n";

type LangKey = "en" | "de" | "sr" | "it" | "al";

function langKey(lang: Language): LangKey {
  if (lang === "sq" || lang === "al") return "al";
  if (lang === "sr" || lang === "en" || lang === "de" || lang === "it") return lang;
  return "en";
}

export type FaqPair = { q: string; a: string };

const FAQ_BY_LANG: Record<LangKey, FaqPair[]> = {
  sr: [
    {
      q: "Za koga izrađujete web stranice?",
      a: "Prvenstveno za male firme u Njemačkoj, Austriji i Švicarskoj — Gebäudereinigung, Autopflege, Handwerker, Gartenbau, transport, Fahrradservice, restorane i porodične biznise koji žele profesionalan online nastup.",
    },
    {
      q: "Šta uključuje izrada web stranice?",
      a: "Moderna početna stranica, stranica usluga, kontakt forma, Google Maps, WhatsApp dugme, mobilna optimizacija, osnovni SEO naslovi i opisi, povezivanje domene i objava online.",
    },
    {
      q: "Koliko košta web stranica?",
      a: "Start paket od 500 € za jednostavnu stranicu, Business paket od 900 € za više stranica i sadržaja, te održavanje od 30 € mjesečno za manje izmjene i tehničku podršku. Tačan obim dogovaramo nakon kratkog razgovora.",
    },
    {
      q: "Kako izgleda saradnja?",
      a: "Kratak razgovor o firmi, prijedlog strukture, izrada dizajna, korekcije i na kraju povezivanje domene sa objavom online. Odgovor na upit obično u roku od 24 sata.",
    },
    {
      q: "Da li radite osnovni SEO za lokalne pretrage?",
      a: "Da — u paketima su jasni naslovi, opisi i struktura stranica prilagođena lokalnim pretragama na Google-u, bez komplikovanog tehničkog žargona u glavnoj ponudi.",
    },
  ],
  en: [
    {
      q: "Who do you build websites for?",
      a: "Mainly small businesses in Germany, Austria and Switzerland — cleaning, car care, trades, landscaping, transport, bicycle service, restaurants and family-run companies that want a professional online presence.",
    },
    {
      q: "What does a website project include?",
      a: "Modern homepage, services page, contact form, Google Maps, WhatsApp button, mobile optimisation, basic SEO titles and descriptions, domain setup and online launch.",
    },
    {
      q: "How much does a website cost?",
      a: "Start package from €500 for a simple site, Business package from €900 for more pages and content, and maintenance from €30/month for small updates and support. Exact scope is agreed after a short call.",
    },
    {
      q: "What does working together look like?",
      a: "Short call about your business, structure proposal, design and build, revisions, then domain setup and launch. We usually reply within 24 hours.",
    },
    {
      q: "Do you include basic SEO for local searches?",
      a: "Yes — packages include clear titles, descriptions and page structure aimed at local Google searches, explained in plain language without technical jargon in the main offer.",
    },
  ],
  de: [
    {
      q: "Für wen erstellen Sie Websites?",
      a: "Vor allem für kleine Unternehmen in Deutschland, Österreich und der Schweiz — Gebäudereinigung, Autopflege, Handwerk, Gartenbau, Transport, Fahrradservice, Restaurants und Familienbetriebe mit professionellem Online-Auftritt.",
    },
    {
      q: "Was ist in einer Website enthalten?",
      a: "Moderne Startseite, Leistungsseite, Kontaktformular, Google Maps, WhatsApp-Button, mobile Optimierung, Basis-SEO mit Titeln und Beschreibungen, Domain-Anbindung und Online-Veröffentlichung.",
    },
    {
      q: "Was kostet eine Website?",
      a: "Start-Paket ab 500 € für eine einfache Seite, Business-Paket ab 900 € für mehr Seiten und Inhalte, Wartung ab 30 €/Monat für kleine Änderungen und Support. Den genauen Umfang klären wir nach einem kurzen Gespräch.",
    },
    {
      q: "Wie läuft die Zusammenarbeit?",
      a: "Kurzes Gespräch, Strukturvorschlag, Design und Umsetzung, Korrekturen, dann Domain-Anbindung und Veröffentlichung. Antwort auf Anfragen meist innerhalb von 24 Stunden.",
    },
    {
      q: "Ist Basis-SEO für lokale Suchen enthalten?",
      a: "Ja — die Pakete umfassen klare Titel, Beschreibungen und Seitenstruktur für lokale Google-Suchen, verständlich erklärt ohne komplizierte Fachbegriffe im Hauptangebot.",
    },
  ],
  it: [
    {
      q: "Per chi realizzate siti web?",
      a: "Soprattutto piccole imprese in Germania, Austria e Svizzera — pulizie, autolavaggio, artigiani, giardinaggio, trasporti, servizio biciclette, ristoranti e attività familiari che vogliono una presenza online professionale.",
    },
    {
      q: "Cosa include un progetto sito web?",
      a: "Homepage moderna, pagina servizi, modulo contatti, Google Maps, pulsante WhatsApp, ottimizzazione mobile, SEO di base con titoli e descrizioni, collegamento dominio e pubblicazione online.",
    },
    {
      q: "Quanto costa un sito web?",
      a: "Pacchetto Start da 500 € per un sito semplice, Business da 900 € per più pagine e contenuti, manutenzione da 30 €/mese per piccole modifiche e supporto. L'ambito esatto si definisce dopo una breve chiamata.",
    },
    {
      q: "Come funziona la collaborazione?",
      a: "Breve conversazione, proposta di struttura, design e realizzazione, correzioni, poi dominio e pubblicazione. Di solito rispondiamo entro 24 ore.",
    },
    {
      q: "Include SEO di base per ricerche locali?",
      a: "Sì — i pacchetti includono titoli, descrizioni e struttura delle pagine per le ricerche locali su Google, spiegati in modo chiaro senza gergo tecnico nell'offerta principale.",
    },
  ],
  al: [
    {
      q: "Për kë ndërtoni faqe web?",
      a: "Kryesisht për biznese të vogla në Gjermani, Austri dhe Zvicër — pastrim ndërtesash, kujdes automjeti, zanate, kopshtari, transport, servis biçikletash, restorante dhe firmat familjare që duan prani profesionale online.",
    },
    {
      q: "Çfarë përfshin një projekt faqeje web?",
      a: "Faqe kryesore moderne, faqe shërbimesh, formular kontakti, Google Maps, buton WhatsApp, optimizim mobil, SEO bazë me tituj dhe përshkrime, lidhje domeni dhe publikim online.",
    },
    {
      q: "Sa kushton një faqe web?",
      a: "Paketa Start nga 500 € për një faqe të thjeshtë, Business nga 900 € për më shumë faqe dhe përmbajtje, mirëmbajtje nga 30 €/muaj për ndryshime të vogla dhe mbështetje. Shtrirja e saktë përcaktohet pas një bisede të shkurtër.",
    },
    {
      q: "Si duket bashkëpunimi?",
      a: "Bisedë e shkurtër, propozim strukture, dizajn dhe realizim, korrigjime, pastaj domeni dhe publikim. Zakonisht përgjigjemi brenda 24 orëve.",
    },
    {
      q: "A përfshihet SEO bazë për kërkime lokale?",
      a: "Po — paketat përfshijnë tituj, përshkrime dhe strukturë faqesh për kërkime lokale në Google, të shpjeguara qartë pa zhargon teknik në ofertën kryesore.",
    },
  ],
};

const IN_LANG: Record<LangKey, string> = {
  sr: "sr-Latn",
  en: "en",
  de: "de",
  it: "it",
  al: "sq",
};

export function getHomeFaqPairs(lang: Language): FaqPair[] {
  return FAQ_BY_LANG[langKey(lang)] ?? FAQ_BY_LANG.en;
}

export function getHomeFaqJsonLd(lang: Language) {
  const key = langKey(lang);
  const pairs = FAQ_BY_LANG[key] ?? FAQ_BY_LANG.en;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.agrmultimedia.eu/#faq",
    "url": "https://www.agrmultimedia.eu/",
    "inLanguage": IN_LANG[key],
    "mainEntity": pairs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
