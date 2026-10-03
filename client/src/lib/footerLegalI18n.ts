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

const footerLegal: Record<"en" | "de", FooterLegalStrings> = {
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
};

export function getFooterLegal(lang: Language): FooterLegalStrings {
  return footerLegal[lang as keyof typeof footerLegal] ?? footerLegal.en;
}
