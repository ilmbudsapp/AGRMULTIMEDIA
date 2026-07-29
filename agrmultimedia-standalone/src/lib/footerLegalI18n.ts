import type { Language } from "@/lib/i18n";

export type FooterLegalStrings = {
  sectionTitle: string;
  paymentLabel: string;
  paymentSepa: string;
  contactLink: string;
  agb: { title: string; body: string; linkLabel: string };
  widerruf: { title: string; body: string };
  kleinunternehmer: { title: string; body: string };
  faq: { title: string; body: string };
};

const footerLegal: Record<"sr" | "en" | "de" | "it" | "sq", FooterLegalStrings> = {
  de: {
    sectionTitle: "Rechtliches",
    paymentLabel: "Zahlungsarten:",
    paymentSepa: "SEPA Lastschrift",
    contactLink: "Kontakt",
    agb: {
      title: "AGB (Allgemeine Geschäftsbedingungen)",
      body: "Unsere allgemeinen Geschäftsbedingungen regeln Vertragsschluss, Leistungsumfang, Preise, Zahlung und Haftung für Dienstleistungen und digitale Produkte.",
      linkLabel: "Zu den vollständigen AGB",
    },
    widerruf: {
      title: "Widerrufsbelehrung",
      body: "Sie haben bei Verträgen mit Verbrauchern grundsätzlich ein gesetzliches Widerrufsrecht. Die genauen Fristen und Ausnahmen (z. B. bei digitalen Inhalten) ergeben sich aus der gesetzlichen Widerrufsbelehrung, die wir Ihnen vor Vertragsschluss bereitstellen.",
    },
    kleinunternehmer: {
      title: "Kleinunternehmerregelung (§19 UStG)",
      body: "Gemäß § 19 UStG wird keine Umsatzsteuer berechnet und folglich auch nicht ausgewiesen (Kleinunternehmerregelung).",
    },
    faq: {
      title: "FAQ (Häufig gestellte Fragen)",
      body: "Antworten zu Buchung, Ablauf, Lieferung digitaler Leistungen und Support finden Sie in unseren AGB und auf der Kontaktseite. Bei konkreten Fragen schreiben Sie uns gern direkt.",
    },
  },
  en: {
    sectionTitle: "Legal",
    paymentLabel: "Payment methods:",
    paymentSepa: "SEPA direct debit",
    contactLink: "Contact",
    agb: {
      title: "Terms and conditions (GTC)",
      body: "Our general terms cover how contracts are formed, scope of services, pricing, payment, and liability for services and digital deliverables.",
      linkLabel: "Read full terms",
    },
    widerruf: {
      title: "Right of withdrawal / cancellation policy",
      body: "For consumer contracts, statutory withdrawal rights may apply. Exact deadlines and exceptions (e.g. for digital content) follow applicable EU/German consumer law and the information provided before checkout.",
    },
    kleinunternehmer: {
      title: "Small business rule (Section 19 German VAT Act)",
      body: "In accordance with Section 19 of the German VAT Act (UStG), no VAT is charged and therefore no VAT is shown on invoices (small business regulation).",
    },
    faq: {
      title: "FAQ (frequently asked questions)",
      body: "For booking, process, delivery of digital work, and support, please see our terms and the contact page—or reach out to us directly.",
    },
  },
  sr: {
    sectionTitle: "Pravne informacije",
    paymentLabel: "Načini plaćanja:",
    paymentSepa: "SEPA direktno zaduženje",
    contactLink: "Kontakt",
    agb: {
      title: "Opšti uslovi poslovanja (AGB)",
      body: "Opšti uslovi regulišu zaključivanje ugovora, obim usluga, cene, plaćanje i odgovornost za usluge i digitalna isporuke.",
      linkLabel: "Pogledajte kompletne uslove",
    },
    widerruf: {
      title: "Pravo na odustanak / politika otkaza",
      body: "Za potrošačke ugovore mogu da važe zakonska prava na odustanak. Tačni rokovi i izuzeci (npr. za digitalni sadržaj) zavise od važećeg prava EU/Nemačke i informacija pre kupovine.",
    },
    kleinunternehmer: {
      title: "Mala privreda (§ 19 nemačkog zakona o PDV-u)",
      body: "U skladu sa § 19 UStG ne naplaćuje se PDV i ne prikazuje se na računima (regulativa male privrede).",
    },
    faq: {
      title: "ČPP (često postavljana pitanja)",
      body: "Za rezervacije, tok rada, isporuku digitalnih radova i podršku pogledajte uslove i kontakt stranicu—ili nas direktno kontaktirajte.",
    },
  },
  it: {
    sectionTitle: "Note legali",
    paymentLabel: "Metodi di pagamento:",
    paymentSepa: "Addebito diretto SEPA",
    contactLink: "Contatto",
    agb: {
      title: "CGV (Condizioni generali di contratto)",
      body: "Le condizioni generali disciplinano conclusione del contratto, ambito dei servizi, prezzi, pagamento e responsabilità per servizi e deliverable digitali.",
      linkLabel: "Leggi le condizioni complete",
    },
    widerruf: {
      title: "Diritto di recesso / politica di recesso",
      body: "Per i contratti con consumatori possono applicarsi diritti di recesso di legge. Termini ed eccezioni (es. contenuti digitali) seguono la normativa UE/tedesca applicabile.",
    },
    kleinunternehmer: {
      title: "Regime piccole imprese (§ 19 UStG tedesco)",
      body: "Ai sensi del § 19 UStG non viene applicata l’IVA e quindi non è indicata in fattura (regime forfettario / piccola impresa).",
    },
    faq: {
      title: "FAQ (domande frequenti)",
      body: "Per prenotazioni, processo, consegna di lavori digitali e assistenza consultate le condizioni e la pagina contatti—o scriveteci direttamente.",
    },
  },
  sq: {
    sectionTitle: "Aspekte ligjore",
    paymentLabel: "Mënyrat e pagesës:",
    paymentSepa: "Debitim direkt SEPA",
    contactLink: "Kontakt",
    agb: {
      title: "Kushtet e përgjithshme të kontratës (AGB)",
      body: "Kushtet e përgjithshme përcaktojnë lidhjen e kontratës, shtrirjen e shërbimeve, çmimet, pagesën dhe përgjegjësinë për shërbime dhe dorëzime digjitale.",
      linkLabel: "Shiko kushtet e plota",
    },
    widerruf: {
      title: "E drejta e tërheqjes / politika e anulimit",
      body: "Për kontratat me konsumatorët mund të zbatohen të drejta ligjore të tërheqjes. Afatet dhe përjashtimet (p.sh. për përmbajtje digjitale) varen nga ligji i BE-së/Gjermanisë dhe informacioni para blerjes.",
    },
    kleinunternehmer: {
      title: "Rregullorja e biznesit të vogël (§19 UStG)",
      body: "Sipas § 19 UStG nuk llogaritet TVSH dhe nuk shfaqet në fatura (rregullorja e biznesit të vogël).",
    },
    faq: {
      title: "Pyetje të shpeshta (FAQ)",
      body: "Për rezervime, proces, dorëzimin e punëve digjitale dhe mbështetje shihni kushtet dhe faqen e kontaktit—ose na shkruani drejtpërdrejt.",
    },
  },
};

export function getFooterLegal(lang: Language): FooterLegalStrings {
  const key = lang === "al" ? "sq" : lang;
  return footerLegal[key as keyof typeof footerLegal] ?? footerLegal.en;
}
