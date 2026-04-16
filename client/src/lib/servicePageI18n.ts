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
  /** Optional link shown under the image gallery (e.g. live client site). */
  workGalleryExternalLink?: { href: string; label: string };
  /** When set, the template shows HTML5 video players (hosted under /public). */
  workVideoGallery?: { src: string; title: string; poster: string }[];
  /** Minimal card mode used for media-first showcase sections. */
  compactMediaOnly?: boolean;
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
    contactCta: "Call to action / Contact",
  },
  de: {
    whatIOffer: "Was ich anbiete",
    serviceCategories: "Service-Kategorien",
    whatThisIncludes: "Was enthalten ist",
    workExamples: "Arbeitsbeispiele",
    videoExamples: "Videobeispiele",
    selectedWorkPlaceholder: "Platzhalter für ausgewählte Arbeiten",
    toolsPlaceholder: "Platzhalter für eingesetzte Tools",
    selectedWorkSlot: "Platzhalter-Slot",
    futureProject: "zukünftiges Projekt",
    toolsSoftware: "Eingesetzte Tools und Software",
    whyChoose: "Warum diese Leistung wählen",
    contactCta: "Handlungsaufforderung / Kontakt",
  },
  it: {
    whatIOffer: "Cosa offro",
    serviceCategories: "Categorie di servizio",
    whatThisIncludes: "Cosa include",
    workExamples: "Esempi di lavori",
    videoExamples: "Esempi video",
    selectedWorkPlaceholder: "Segnaposto per lavori selezionati",
    toolsPlaceholder: "Segnaposto per strumenti",
    selectedWorkSlot: "Spazio riservato",
    futureProject: "progetto futuro",
    toolsSoftware: "Strumenti e software che utilizzo",
    whyChoose: "Perché scegliere questo servizio",
    contactCta: "Invito all’azione / Contatto",
  },
  sr: {
    whatIOffer: "Šta nudim",
    serviceCategories: "Kategorije usluga",
    whatThisIncludes: "Šta uključuje",
    workExamples: "Primeri radova",
    videoExamples: "Video primeri",
    selectedWorkPlaceholder: "Rezervisano mesto za odabrane radove",
    toolsPlaceholder: "Rezervisano mesto za alate",
    selectedWorkSlot: "Rezervisan slot",
    futureProject: "budući projekat",
    toolsSoftware: "Alati i softver koji koristim",
    whyChoose: "Zašto izabrati ovu uslugu",
    contactCta: "Poziv na akciju / Kontakt",
  },
  al: {
    whatIOffer: "Çfarë ofroj",
    serviceCategories: "Kategoritë e shërbimit",
    whatThisIncludes: "Çfarë përfshin",
    workExamples: "Shembuj pune",
    videoExamples: "Shembuj video",
    selectedWorkPlaceholder: "Vend i rezervuar për punë të zgjedhura",
    toolsPlaceholder: "Vend i rezervuar për mjetet",
    selectedWorkSlot: "Hapësirë e rezervuar",
    futureProject: "projekt i ardhshëm",
    toolsSoftware: "Mjetet dhe softuerët që përdor",
    whyChoose: "Pse të zgjidhni këtë shërbim",
    contactCta: "Thirrje për veprim / Kontakt",
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
    intro: (title) => `${title} è strutturato per chiarezza aziendale, consegna pratica e facile espansione nelle fasi successive.`,
    includes: ["Definizione dell’ambito", "Struttura operativa", "Formato di consegna", "Note di ottimizzazione"],
    workPlaceholder: "Spazio per progetti futuri in questa categoria (2–6 elementi).",
    toolsPlaceholder: "Spazio per strumenti e software usati in questa categoria.",
    cta: "Richiedi dettagli su questa categoria",
  },
  sr: {
    intro: (title) => `${title} je strukturisan za jasnu poslovnu komunikaciju, praktičnu isporuku i lako proširenje u sledećoj fazi.`,
    includes: ["Definicija obima", "Struktura realizacije", "Format isporuke", "Napomene za optimizaciju"],
    workPlaceholder: "Mesto za buduće projekte u ovoj kategoriji (2–6 stavki).",
    toolsPlaceholder: "Mesto za alate i softver koji se koriste u ovoj kategoriji.",
    cta: "Zatraži detalje za ovu kategoriju",
  },
  al: {
    intro: (title) => `${title} është i strukturuar për qartësi biznesi, dorëzim praktik dhe zgjerim të lehtë në fazën tjetër.`,
    includes: ["Përcaktimi i fushëveprimit", "Struktura e zbatimit", "Formati i dorëzimit", "Shënime optimizimi"],
    workPlaceholder: "Hapësirë për projekte të ardhshme në këtë kategori (2–6 elemente).",
    toolsPlaceholder: "Hapësirë për mjetet dhe softuerin e përdorur në këtë kategori.",
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
