import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";
import AuthorByline from "@/components/AuthorByline";
import { SrBody, EnBody, DeBody, ItBody, AlBody } from "@/components/HomeSeoBodies";

function bodyForLang(lang: Language) {
  switch (lang) {
    case "sr":
      return <SrBody />;
    case "en":
      return <EnBody />;
    case "de":
      return <DeBody />;
    case "it":
      return <ItBody />;
    case "al":
    case "sq":
      return <AlBody />;
    default:
      return <EnBody />;
  }
}

type SectionLangKey = "sr" | "en" | "de" | "it" | "al";

function sectionLangKey(lang: Language): SectionLangKey {
  if (lang === "sq" || lang === "al") return "al";
  if (lang === "sr" || lang === "en" || lang === "de" || lang === "it") return lang;
  return "en";
}

const SECTION_COPY: Record<
  SectionLangKey,
  { eyebrow: string; title: string; subtitle: string; aria: string }
> = {
  sr: {
    eyebrow: "AGR Multimedia",
    title: "Web dizajn, grafika, AI i digitalni marketing za mala preduzeća",
    subtitle:
      "Detaljan pregled usluga, načina rada i odgovornog korišćenja AI — sa internim linkovima ka ključnim stranicama.",
    aria: "Tekstualni pregled usluga, AI perspektiva i kontakt",
  },
  en: {
    eyebrow: "AGR Multimedia",
    title: "Web design, graphics, AI & digital marketing for small businesses",
    subtitle:
      "In-depth services overview, workflow, and balanced AI guidance — with links to key sections of this site.",
    aria: "Services overview, AI perspectives, and contact paths",
  },
  de: {
    eyebrow: "AGR Multimedia",
    title: "Webdesign, Grafik, KI & Digitalmarketing für kleine Unternehmen",
    subtitle:
      "Ausführlicher Leistungsüberblick, Arbeitsweise und ein ausgewogener Blick auf KI — mit Links zu allen Bereichen.",
    aria: "Leistungen, KI-Perspektive und Kontakt",
  },
  it: {
    eyebrow: "AGR Multimedia",
    title: "Web design, grafica, AI e digital marketing per le PMI",
    subtitle:
      "Panoramica approfondita dei servizi, del metodo e del ruolo dell'AI — con collegamenti interni utili.",
    aria: "Panoramica servizi, prospettive AI e contatti",
  },
  al: {
    eyebrow: "AGR Multimedia",
    title: "Web dizajn, grafikë, AI dhe marketing digjital për biznese të vogla",
    subtitle:
      "Përmbledhje e thelluar e shërbimeve, mënyrës së punës dhe përdorimit të përgjegjshëm të AI.",
    aria: "Shërbime, perspektiva AI dhe kontakt",
  },
};

export default function HomeSeoSection() {
  const { currentLanguage } = useLanguage();
  const copy = SECTION_COPY[sectionLangKey(currentLanguage)];

  return (
    <section
      id="seo-content"
      className="premium-section scroll-mt-20 border-b border-[#333333] bg-[#07070b] py-16 md:py-20"
      aria-label={copy.aria}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90">{copy.eyebrow}</p>
        <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{copy.title}</p>
        <p className="mt-3 text-sm text-white/55">{copy.subtitle}</p>
        <div className="prose-seo mt-10 border-t border-white/10 pt-10">{bodyForLang(currentLanguage)}</div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <AuthorByline />
        </div>
      </div>
    </section>
  );
}
