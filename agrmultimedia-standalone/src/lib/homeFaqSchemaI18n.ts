import type { Language } from "@/lib/i18n";

type FaqPair = { q: string; a: string };

const FAQ_BY_LANG: Record<Language, FaqPair[]> = {
  de: [
    {
      q: "Bieten Sie Webdesign in Geislingen an der Steige an?",
      a: "Ja — AGR Multimedia ist in Geislingen an der Steige ansässig und erstellt Websites für lokale Firmen in der Region, darunter Handwerk, Dienstleister und kleine Unternehmen.",
    },
    {
      q: "Für wen erstellen Sie Websites?",
      a: "Vor allem für kleine Unternehmen — Gebäudereinigung, Autopflege, Handwerk, Gartenbau, Transport, Fahrradservice, Restaurants und Familienbetriebe mit professionellem Online-Auftritt.",
    },
    {
      q: "Was ist in einer Website enthalten?",
      a: "Moderne Startseite, Leistungsseite, Kontaktformular, Google Maps, WhatsApp-Button, mobile Optimierung, Basis-SEO mit Titeln und Beschreibungen, Domain-Anbindung und Online-Veröffentlichung.",
    },
    {
      q: "Was kostet eine Website?",
      a: "Jedes Projekt ist individuell. Nach einem kurzen Erstgespräch erhalten Sie ein transparentes Angebot passend zu Umfang, Ziel und Anforderungen.",
    },
    {
      q: "Wie läuft die Zusammenarbeit?",
      a: "Kostenloses Erstgespräch, Planung und Strategie, Design und Entwicklung, dann Launch und Optimierung. Antwort auf Anfragen meist innerhalb von 24 Stunden.",
    },
    {
      q: "Was ist SEO, GEO und AEO?",
      a: "SEO optimiert Ihre Website für Google-Suchen in Geislingen und der Region. GEO und AEO sorgen zusätzlich dafür, dass Ihr Unternehmen in KI-Suchen wie ChatGPT und Google AI Overview gefunden und empfohlen wird.",
    },
  ],
  en: [
    {
      q: "Do you offer web design in Geislingen an der Steige?",
      a: "Yes — AGR Multimedia is based in Geislingen an der Steige and builds websites for local businesses including trades, service providers and small companies.",
    },
    {
      q: "Who do you build websites for?",
      a: "Mainly small businesses — cleaning, car care, trades, landscaping, transport, bicycle service, restaurants and family-run companies that want a professional online presence.",
    },
    {
      q: "What does a website project include?",
      a: "Modern homepage, services page, contact form, Google Maps, WhatsApp button, mobile optimisation, basic SEO titles and descriptions, domain setup and online launch.",
    },
    {
      q: "How much does a website cost?",
      a: "Every project is individual. After a brief initial consultation you receive a transparent quote tailored to scope, goals and requirements.",
    },
    {
      q: "What does working together look like?",
      a: "Free initial consultation, planning and strategy, design and development, then launch and optimisation. We usually reply within 24 hours.",
    },
    {
      q: "What is SEO, GEO and AEO?",
      a: "SEO optimises your site for Google searches. GEO and AEO ensure your business is also found and recommended in AI search like ChatGPT and Google AI Overview.",
    },
  ],
  sr: [
    {
      q: "Da li nudite web dizajn u Geislingen an der Steige?",
      a: "Da — AGR Multimedia je u Geislingen an der Steige i pravi web sajtove za lokalne firme, uključujući zanate, pružaoce usluga i mala preduzeća.",
    },
    {
      q: "Za koga pravite web sajtove?",
      a: "Pre svega za mala preduzeća — čišćenje, autopflege, zanate, baštovanstvo, transport, servis bicikala, restorane i porodične firme.",
    },
    {
      q: "Šta uključuje web projekat?",
      a: "Moderna početna stranica, stranica usluga, kontakt forma, Google Maps, WhatsApp dugme, mobilna optimizacija, osnovni SEO, povezivanje domene i objava online.",
    },
    {
      q: "Koliko košta web sajt?",
      a: "Svaki projekat je individualan. Nakon kratkog uvodnog razgovora dobijate transparentnu ponudu prilagođenu obimu, ciljevima i zahtevima.",
    },
    {
      q: "Kako izgleda saradnja?",
      a: "Besplatna konsultacija, planiranje i strategija, dizajn i razvoj, zatim objava i optimizacija. Odgovor obično u roku od 24 sata.",
    },
    {
      q: "Šta su SEO, GEO i AEO?",
      a: "SEO optimizuje sajt za Google pretrage. GEO i AEO osiguravaju da vas firma pronađu i u AI pretragama poput ChatGPT-a i Google AI Overview.",
    },
  ],
  it: [
    {
      q: "Offrite web design a Geislingen an der Steige?",
      a: "Sì — AGR Multimedia ha sede a Geislingen an der Steige e realizza siti web per imprese locali, artigiani e piccole aziende.",
    },
    {
      q: "Per chi realizzate siti web?",
      a: "Principalmente per piccole imprese — pulizie, autolavaggio, artigiani, giardinaggio, trasporti, servizio biciclette e attività familiari.",
    },
    {
      q: "Cosa include un progetto web?",
      a: "Homepage moderna, pagina servizi, modulo contatti, Google Maps, pulsante WhatsApp, ottimizzazione mobile, SEO di base, dominio e pubblicazione online.",
    },
    {
      q: "Quanto costa un sito web?",
      a: "Ogni progetto è individuale. Dopo un breve colloquio iniziale ricevete un'offerta trasparente in base ad ambito, obiettivi e requisiti.",
    },
    {
      q: "Come funziona la collaborazione?",
      a: "Consulenza gratuita, pianificazione e strategia, design e sviluppo, poi lancio e ottimizzazione. Risposta di solito entro 24 ore.",
    },
    {
      q: "Cosa sono SEO, GEO e AEO?",
      a: "SEO ottimizza il sito per Google. GEO e AEO assicurano che la vostra azienda sia trovata anche nelle ricerche AI come ChatGPT e Google AI Overview.",
    },
  ],
  al: [
    {
      q: "A ofroni web design në Geislingen an der Steige?",
      a: "Po — AGR Multimedia ndodhet në Geislingen an der Steige dhe krijon faqe web për biznese lokale, zanate dhe firma të vogla.",
    },
    {
      q: "Për kë krijoni faqe web?",
      a: "Kryesisht për biznese të vogla — pastrim, kujdes automjeti, zanate, kopshtari, transport, servis biçikletash dhe firmat familjare.",
    },
    {
      q: "Çfarë përfshin një projekt web?",
      a: "Faqe kryesore moderne, faqe shërbimesh, formular kontakti, Google Maps, buton WhatsApp, optimizim mobil, SEO bazë, domen dhe publikim online.",
    },
    {
      q: "Sa kushton një faqe web?",
      a: "Çdo projekt është individual. Pas një bisede fillestare të shkurtër merrni një ofertë transparente sipas shtrirjes, qëllimeve dhe kërkesave.",
    },
    {
      q: "Si duket bashkëpunimi?",
      a: "Konsultim falas, planifikim dhe strategji, dizajn dhe zhvillim, pastaj publikim dhe optimizim. Përgjigje zakonisht brenda 24 orëve.",
    },
    {
      q: "Çfarë janë SEO, GEO dhe AEO?",
      a: "SEO optimizon faqen për Google. GEO dhe AEO sigurojnë që biznesi juaj gjendet edhe në kërkimet AI si ChatGPT dhe Google AI Overview.",
    },
  ],
};

export function getHomeFaqJsonLd(lang: Language) {
  const pairs = FAQ_BY_LANG[lang] ?? FAQ_BY_LANG.de;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pairs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
