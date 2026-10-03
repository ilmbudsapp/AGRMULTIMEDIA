import type { Language } from "@/lib/i18n";

export type ServiceLang = "de" | "en";

export type LocalizedSubsection = {
  id: string;
  h3: string;
  intro: string;
  includes: string[];
  workPlaceholder: string;
  toolsPlaceholder: string;
  cta: string;
  workGallery?: { src: string; alt: string }[];
  workGalleryExternalLink?: { href: string; label: string };
  workVideoGallery?: { src: string; title: string; poster: string }[];
  compactMediaOnly?: boolean;
  featuredWorkImage?: { src: string; alt: string; title?: string };
  galleryFullWidth?: boolean;
};

export type ServiceTemplateLabels = {
  whatIOffer: string;
  serviceCategories: string;
  whatThisIncludes: string;
  workExamples: string;
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
};

export function toServiceLang(lang: Language): ServiceLang {
  if (lang === "de") return "de";
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
