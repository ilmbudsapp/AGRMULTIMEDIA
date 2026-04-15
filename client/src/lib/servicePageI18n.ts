import type { Language } from "@/lib/i18n";

export type ServiceLang = Extract<Language, "de" | "en" | "it" | "sr" | "al">;

export type LocalizedSubsection = {
  id: string;
  h3: string;
  intro: string;
  includes: string[];
  workPlaceholder: string;
  toolsPlaceholder: string;
  cta: string;
  /** When set, the template shows a real image grid instead of the work placeholder copy. */
  workGallery?: { src: string; alt: string }[];
  /** When set, the template shows HTML5 video players (hosted under /public). */
  workVideoGallery?: { src: string; title: string }[];
};

export type ServiceTemplateLabels = {
  whatIOffer: string;
  serviceCategories: string;
  whatThisIncludes: string;
  /** Heading for the work samples box when a gallery is present */
  workExamples: string;
  /** Heading when a video gallery is present */
  videoExamples: string;
  selectedWorkPlaceholder: string;
  toolsPlaceholder: string;
  selectedWorkSlot: string;
  futureProject: string;
  toolsSoftware: string;
  whyChoose: string;
  contactCta: string;
};

export type ServicePageContent = {
  eyebrow: string;
  h1: string;
  intro: string;
  whatIoffer: string[];
  serviceCategoriesTitle: string;
  subsections: LocalizedSubsection[];
  selectedWorkTitle: string;
  selectedWorkIntro: string;
  toolsTitle: string;
  tools: string[];
  whyChooseTitle: string;
  whyChoosePoints: string[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  localNote?: string;
};

const templateLabelsByLang: Record<ServiceLang, ServiceTemplateLabels> = {
  en: {
    whatIOffer: "What I Offer",
    serviceCategories: "Service Categories",
    whatThisIncludes: "What this includes",
    workExamples: "Work examples",
    videoExamples: "Video examples",
    selectedWorkPlaceholder: "Selected Work Placeholder",
    toolsPlaceholder: "Tools Placeholder",
    selectedWorkSlot: "Placeholder Slot",
    futureProject: "future project",
    toolsSoftware: "Tools / Software I Use",
    whyChoose: "Why Choose This Service",
    contactCta: "CTA / Contact",
  },
  de: {
    whatIOffer: "Was ich anbiete",
    serviceCategories: "Service-Kategorien",
    whatThisIncludes: "Was enthalten ist",
    workExamples: "Arbeitsbeispiele",
    videoExamples: "Videobeispiele",
    selectedWorkPlaceholder: "Platzhalter für ausgewählte Arbeiten",
    toolsPlaceholder: "Tools-Platzhalter",
    selectedWorkSlot: "Platzhalter-Slot",
    futureProject: "zukünftiges Projekt",
    toolsSoftware: "Tools / Software, die ich nutze",
    whyChoose: "Warum diese Leistung wählen",
    contactCta: "CTA / Kontakt",
  },
  it: {
    whatIOffer: "Cosa offro",
    serviceCategories: "Categorie di servizio",
    whatThisIncludes: "Cosa include",
    workExamples: "Esempi di lavori",
    videoExamples: "Esempi video",
    selectedWorkPlaceholder: "Placeholder lavori selezionati",
    toolsPlaceholder: "Placeholder strumenti",
    selectedWorkSlot: "Slot placeholder",
    futureProject: "progetto futuro",
    toolsSoftware: "Tools / Software che uso",
    whyChoose: "Perché scegliere questo servizio",
    contactCta: "CTA / Contatto",
  },
  sr: {
    whatIOffer: "Šta nudim",
    serviceCategories: "Kategorije usluga",
    whatThisIncludes: "Šta uključuje",
    workExamples: "Primeri radova",
    videoExamples: "Video primeri",
    selectedWorkPlaceholder: "Placeholder za odabrane radove",
    toolsPlaceholder: "Placeholder za alate",
    selectedWorkSlot: "Placeholder slot",
    futureProject: "budući projekat",
    toolsSoftware: "Alati / softver koji koristim",
    whyChoose: "Zašto izabrati ovu uslugu",
    contactCta: "CTA / Kontakt",
  },
  al: {
    whatIOffer: "Çfarë ofroj",
    serviceCategories: "Kategoritë e shërbimit",
    whatThisIncludes: "Çfarë përfshin",
    workExamples: "Shembuj pune",
    videoExamples: "Shembuj video",
    selectedWorkPlaceholder: "Placeholder për punë të zgjedhura",
    toolsPlaceholder: "Placeholder për mjetet",
    selectedWorkSlot: "Slot placeholder",
    futureProject: "projekt i ardhshëm",
    toolsSoftware: "Tools / Software që përdor",
    whyChoose: "Pse të zgjidhni këtë shërbim",
    contactCta: "CTA / Kontakt",
  },
};

const subsectionTextByLang: Record<
  ServiceLang,
  {
    intro: (title: string) => string;
    includes: string[];
    workPlaceholder: string;
    toolsPlaceholder: string;
    cta: string;
  }
> = {
  en: {
    intro: (title) => `${title} is structured for business clarity, practical delivery, and easy scaling in the next phase.`,
    includes: ["Scope definition", "Execution structure", "Delivery format", "Optimization notes"],
    workPlaceholder: "Placeholder for future projects in this category (2-6 items).",
    toolsPlaceholder: "Placeholder for tools/software used in this category.",
    cta: "Request details for this category",
  },
  de: {
    intro: (title) => `${title} ist auf klare Business-Kommunikation, praktische Umsetzung und einfache Skalierung ausgerichtet.`,
    includes: ["Leistungsumfang", "Umsetzungsstruktur", "Lieferformat", "Optimierungshinweise"],
    workPlaceholder: "Platzhalter für künftige Projekte in dieser Kategorie (2-6 Einträge).",
    toolsPlaceholder: "Platzhalter für eingesetzte Tools/Software in dieser Kategorie.",
    cta: "Details zu dieser Kategorie anfragen",
  },
  it: {
    intro: (title) => `${title} è strutturato per chiarezza business, consegna pratica e facile scalabilità nelle fasi successive.`,
    includes: ["Definizione scope", "Struttura operativa", "Formato di consegna", "Note di ottimizzazione"],
    workPlaceholder: "Placeholder per progetti futuri in questa categoria (2-6 elementi).",
    toolsPlaceholder: "Placeholder per tools/software usati in questa categoria.",
    cta: "Richiedi dettagli su questa categoria",
  },
  sr: {
    intro: (title) => `${title} je strukturisan za jasnu poslovnu komunikaciju, praktičnu isporuku i lako proširenje u sledećoj fazi.`,
    includes: ["Definicija obima", "Struktura realizacije", "Format isporuke", "Napomene za optimizaciju"],
    workPlaceholder: "Placeholder za buduće projekte u ovoj kategoriji (2-6 stavki).",
    toolsPlaceholder: "Placeholder za alate/softver koji se koristi u ovoj kategoriji.",
    cta: "Zatraži detalje za ovu kategoriju",
  },
  al: {
    intro: (title) => `${title} është i strukturuar për qartësi biznesi, dorëzim praktik dhe zgjerim të lehtë në fazën tjetër.`,
    includes: ["Përcaktimi i scope-it", "Struktura e zbatimit", "Formati i dorëzimit", "Shënime optimizimi"],
    workPlaceholder: "Placeholder për projekte të ardhshme në këtë kategori (2-6 elemente).",
    toolsPlaceholder: "Placeholder për tools/software të përdorur në këtë kategori.",
    cta: "Kërko detaje për këtë kategori",
  },
};

export function toServiceLang(lang: Language): ServiceLang {
  if (lang === "de" || lang === "en" || lang === "it" || lang === "sr" || lang === "al") return lang;
  return "en";
}

export function getServiceTemplateLabels(lang: ServiceLang): ServiceTemplateLabels {
  return templateLabelsByLang[lang];
}

export function buildSubsections(
  lang: ServiceLang,
  titles: { id: string; h3: string }[],
): LocalizedSubsection[] {
  const t = subsectionTextByLang[lang];
  return titles.map((item) => ({
    id: item.id,
    h3: item.h3,
    intro: t.intro(item.h3),
    includes: t.includes,
    workPlaceholder: t.workPlaceholder,
    toolsPlaceholder: t.toolsPlaceholder,
    cta: t.cta,
  }));
}
