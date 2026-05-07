import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";
import AuthorByline from "@/components/AuthorByline";
import HomeSeoDefinitions from "@/components/HomeSeoDefinitions";
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
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    aria: string;
    asideAria: string;
    asideLead: string;
    externalW3C: string;
    externalSchema: string;
    externalMdn: string;
  }
> = {
  sr: {
    eyebrow: "AGR Multimedia",
    title: "Web dizajn, grafika, AI i digitalni marketing za mala preduzeća",
    subtitle:
      "Detaljan pregled usluga, načina rada i odgovornog korišćenja AI — sa internim linkovima ka ključnim stranicama.",
    aria: "Tekstualni pregled usluga, AI perspektiva i kontakt",
    asideAria: "Autoritativni izvori i otvoreni standardi",
    asideLead: "Rad usklađujemo sa javnim specifikacijama i referencama:",
    externalW3C: "W3C — veb standardi",
    externalSchema: "Schema.org — strukturisani podaci",
    externalMdn: "MDN — HTML dokumentacija",
  },
  en: {
    eyebrow: "AGR Multimedia",
    title: "Web design, graphics, AI & digital marketing for small businesses",
    subtitle:
      "In-depth services overview, workflow, and balanced AI guidance — with links to key sections of this site.",
    aria: "Services overview, AI perspectives, and contact paths",
    asideAria: "Authoritative references and open standards",
    asideLead: "Our work aligns with public specifications from:",
    externalW3C: "W3C web standards",
    externalSchema: "Schema.org structured data",
    externalMdn: "MDN Web Docs — HTML",
  },
  de: {
    eyebrow: "AGR Multimedia",
    title: "Webdesign, Grafik, KI & Digitalmarketing für kleine Unternehmen",
    subtitle:
      "Ausführlicher Leistungsüberblick, Arbeitsweise und ein ausgewogener Blick auf KI — mit Links zu allen Bereichen.",
    aria: "Leistungen, KI-Perspektive und Kontakt",
    asideAria: "Normative Referenzen und offene Standards",
    asideLead: "Ausrichtung an öffentlichen Spezifikationen:",
    externalW3C: "W3C Webstandards",
    externalSchema: "Schema.org strukturierte Daten",
    externalMdn: "MDN Web Docs — HTML",
  },
  it: {
    eyebrow: "AGR Multimedia",
    title: "Web design, grafica, AI e digital marketing per le PMI",
    subtitle:
      "Panoramica approfondita dei servizi, del metodo e del ruolo dell'AI — con collegamenti interni utili.",
    aria: "Panoramica servizi, prospettive AI e contatti",
    asideAria: "Fonti autorevoli e standard aperti",
    asideLead: "Allineamento alle specifiche pubbliche:",
    externalW3C: "W3C — standard web",
    externalSchema: "Schema.org — dati strutturati",
    externalMdn: "MDN Web Docs — HTML",
  },
  al: {
    eyebrow: "AGR Multimedia",
    title: "Web dizajn, grafikë, AI dhe marketing digjital për biznese të vogla",
    subtitle:
      "Përmbledhje e thelluar e shërbimeve, mënyrës së punës dhe përdorimit të përgjegjshëm të AI.",
    aria: "Shërbime, perspektiva AI dhe kontakt",
    asideAria: "Burime autoritative dhe standarde të hapura",
    asideLead: "Puna jonë përputhet me specifikimet publike:",
    externalW3C: "W3C — standardet e uebit",
    externalSchema: "Schema.org — të dhëna të strukturuara",
    externalMdn: "MDN Web Docs — HTML",
  },
};

export default function HomeSeoSection() {
  const { currentLanguage } = useLanguage();
  const copy = SECTION_COPY[sectionLangKey(currentLanguage)];

  return (
    <section
      id="seo-content"
      className="premium-section scroll-mt-20 border-b border-[#333333] bg-[#07070b] py-16 md:py-20"
      aria-labelledby="seo-section-title"
    >
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="border-b border-white/10 pb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90">{copy.eyebrow}</p>
          <h2
            id="seo-section-title"
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            {copy.title}
          </h2>
          <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
            <AuthorByline className="!text-white/95" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{copy.subtitle}</p>
        </header>

        <aside
          className="my-8 rounded-xl border border-blue-400/25 bg-blue-500/[0.07] px-4 py-4 text-sm leading-relaxed text-white/85"
          aria-label={copy.asideAria}
        >
          <p>
            <span className="font-medium text-white">{copy.asideLead}</span>{" "}
            <a
              href="https://www.w3.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-200 underline-offset-2 hover:text-white hover:underline"
              aria-label={copy.externalW3C}
            >
              W3C
            </a>
            {" · "}
            <a
              href="https://schema.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-200 underline-offset-2 hover:text-white hover:underline"
              aria-label={copy.externalSchema}
            >
              Schema.org
            </a>
            {" · "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-200 underline-offset-2 hover:text-white hover:underline"
              aria-label={copy.externalMdn}
            >
              MDN
            </a>
            .
          </p>
        </aside>

        <div className="prose-seo border-t border-white/10 pt-10">{bodyForLang(currentLanguage)}</div>

        <HomeSeoDefinitions />
      </article>
    </section>
  );
}
