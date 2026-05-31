import type { Language } from "@/lib/i18n";

export type ImpressumSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type ImpressumCopy = {
  title: string;
  subtitle: string;
  sections: ImpressumSection[];
};

const CONTACT_EMAIL = "agron6922@gmail.com";
const CONTACT_PHONE = "+49 15560 873124";

const de: ImpressumCopy = {
  title: "Impressum",
  subtitle: "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz) und § 18 Abs. 2 MStV",
  sections: [
    {
      id: "operator",
      title: "Diensteanbieter",
      paragraphs: [
        "AGRONDESIGN / AGR Multimedia",
        "Inhaber: Agron Osmani",
        "Luise-Hainlen-Weg 4/4",
        "73312 Geislingen an der Steige",
        "Deutschland",
      ],
    },
    {
      id: "contact",
      title: "Kontakt",
      paragraphs: [`E-Mail: ${CONTACT_EMAIL}`, `Telefon: ${CONTACT_PHONE}`],
    },
    {
      id: "representative",
      title: "Vertretungsberechtigt",
      paragraphs: ["Agron Osmani"],
    },
    {
      id: "tax",
      title: "Umsatzsteuer / Steuer",
      paragraphs: [
        "Steuernummer: 48267305956",
        "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE354016444",
      ],
    },
    {
      id: "profession",
      title: "Berufsbezeichnung",
      paragraphs: [
        "Grafikdesigner & Entwickler (Multimedia, Webdesign, KI-Inhalte)",
        "Verliehen in: Bundesrepublik Deutschland",
      ],
    },
    {
      id: "content",
      title: "Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)",
      paragraphs: ["Agron Osmani, Anschrift wie oben"],
    },
    {
      id: "dispute",
      title: "EU-Streitschlichtung",
      paragraphs: [
        "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/",
        "Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, sofern nicht gesetzlich zwingend.",
      ],
    },
    {
      id: "liability-content",
      title: "Haftung für Inhalte",
      paragraphs: [
        "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      ],
    },
    {
      id: "liability-links",
      title: "Haftung für Links",
      paragraphs: [
        "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.",
      ],
    },
    {
      id: "copyright",
      title: "Urheberrecht",
      paragraphs: [
        "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung bedürfen der schriftlichen Zustimmung.",
      ],
    },
  ],
};

const en: ImpressumCopy = {
  title: "Legal Notice (Impressum)",
  subtitle: "Information pursuant to § 5 DDG (German Digital Services Act)",
  sections: [
    {
      id: "operator",
      title: "Service provider",
      paragraphs: de.sections[0].paragraphs,
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [`Email: ${CONTACT_EMAIL}`, `Phone: ${CONTACT_PHONE}`],
    },
    {
      id: "representative",
      title: "Represented by",
      paragraphs: ["Agron Osmani"],
    },
    {
      id: "tax",
      title: "Tax information",
      paragraphs: de.sections[3].paragraphs,
    },
    {
      id: "profession",
      title: "Professional title",
      paragraphs: [
        "Graphic designer & developer (multimedia, web design, AI content)",
        "Country: Germany",
      ],
    },
    {
      id: "content",
      title: "Responsible for content (§ 18(2) MStV)",
      paragraphs: ["Agron Osmani, address as above"],
    },
    {
      id: "dispute",
      title: "EU dispute resolution",
      paragraphs: [
        "EU ODR platform: https://ec.europa.eu/consumers/odr/",
        "We are not obliged or willing to participate in consumer arbitration unless legally required.",
      ],
    },
    {
      id: "liability-content",
      title: "Liability for content",
      paragraphs: [
        "We are responsible for our own content under general laws pursuant to § 7(1) DDG. Under §§ 8–10 DDG we are not obliged to monitor third-party information.",
      ],
    },
    {
      id: "liability-links",
      title: "Liability for links",
      paragraphs: [
        "Our site contains links to external websites. We have no influence over their content; the respective provider is responsible.",
      ],
    },
    {
      id: "copyright",
      title: "Copyright",
      paragraphs: [
        "Content created by the site operator is protected by German copyright law. Reproduction requires written consent.",
      ],
    },
  ],
};

const sr: ImpressumCopy = {
  title: "Impresum (Pravne informacije)",
  subtitle: "Podaci u skladu sa § 5 DDG (nemački zakon o digitalnim uslugama)",
  sections: en.sections.map((s) => ({
    ...s,
    title:
      {
        operator: "Pružalac usluge",
        contact: "Kontakt",
        representative: "Zastupnik",
        tax: "Poreski podaci",
        profession: "Profesionalna titula",
        content: "Odgovoran za sadržaj (§ 18(2) MStV)",
        dispute: "EU rešavanje sporova",
        "liability-content": "Odgovornost za sadržaj",
        "liability-links": "Odgovornost za linkove",
        copyright: "Autorska prava",
      }[s.id] ?? s.title,
    paragraphs:
      s.id === "contact"
        ? [`Email: ${CONTACT_EMAIL}`, `Telefon: ${CONTACT_PHONE}`]
        : s.paragraphs,
  })),
};

const it: ImpressumCopy = {
  title: "Impressum (Note legali)",
  subtitle: "Informazioni ai sensi del § 5 DDG (legge tedesca sui servizi digitali)",
  sections: en.sections.map((s) => ({
    ...s,
    title:
      {
        operator: "Fornitore del servizio",
        contact: "Contatto",
        representative: "Rappresentante",
        tax: "Informazioni fiscali",
        profession: "Qualifica professionale",
        content: "Responsabile dei contenuti (§ 18(2) MStV)",
        dispute: "Risoluzione controversie UE",
        "liability-content": "Responsabilità per i contenuti",
        "liability-links": "Responsabilità per i link",
        copyright: "Copyright",
      }[s.id] ?? s.title,
  })),
};

const al: ImpressumCopy = {
  title: "Impresum (Informacion ligjor)",
  subtitle: "Informacion sipas § 5 DDG (ligji gjerman për shërbimet digjitale)",
  sections: en.sections.map((s) => ({
    ...s,
    title:
      {
        operator: "Ofruesi i shërbimit",
        contact: "Kontakt",
        representative: "Përfaqësues",
        tax: "Informacion tatimor",
        profession: "Titulli profesional",
        content: "Përgjegjës për përmbajtjen (§ 18(2) MStV)",
        dispute: "Zgjidhja e mosmarrëveshjeve BE",
        "liability-content": "Përgjegjësi për përmbajtjen",
        "liability-links": "Përgjegjësi për lidhjet",
        copyright: "E drejta e autorit",
      }[s.id] ?? s.title,
  })),
};

const map: Record<Language, ImpressumCopy> = { de, en, sr, it, al, sq: al };

export function getImpressumCopy(lang: Language): ImpressumCopy {
  return map[lang] ?? de;
}
