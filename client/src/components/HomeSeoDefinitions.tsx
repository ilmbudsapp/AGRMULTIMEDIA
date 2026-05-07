import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";

type LangKey = "sr" | "en" | "de" | "it" | "al";

function langKey(lang: Language): LangKey {
  if (lang === "sq" || lang === "al") return "al";
  if (lang === "sr" || lang === "en" || lang === "de" || lang === "it") return lang;
  return "en";
}

type DefRow = { term: string; def: string };

const DL_COPY: Record<LangKey, { heading: string; rows: DefRow[] }> = {
  sr: {
    heading: "Ključni pojmovi",
    rows: [
      {
        term: "On-page SEO",
        def: "Optimizacija sadržaja i HTML strukture na samoj stranici (naslovi, linkovi, brzina) da pretraživači bolje razumeju temu.",
      },
      {
        term: "Semantički HTML",
        def: "Korišćenje smislenih elemenata (naslovi, section, article) usklađeno sa specifikacijom što olakšava pristupačnost i razumevanje stranice.",
      },
      {
        term: "JSON-LD / Schema.org",
        def: "Strukturisani podaci u JSON formatu koji objašnjavaju entitete (Organization, Person, FAQ) prema vokabularu schema.org.",
      },
      {
        term: "Brend sistem",
        def: "Pravila za logo, boje i tipografiju koja čine dosledan izgled na sajtu, štampi i društvenim mrežama.",
      },
    ],
  },
  en: {
    heading: "Key terms",
    rows: [
      {
        term: "On-page SEO",
        def: "Optimizing page content and HTML (headings, links, performance) so search engines understand the topic.",
      },
      {
        term: "Semantic HTML",
        def: "Using meaningful elements (headings, section, article) aligned with the HTML specification for accessibility and clarity.",
      },
      {
        term: "JSON-LD / Schema.org",
        def: "Structured data describing entities (Organization, Person, FAQ) using the Schema.org vocabulary.",
      },
      {
        term: "Brand system",
        def: "Rules for logo, colour, and type that keep web, print, and social assets visually consistent.",
      },
    ],
  },
  de: {
    heading: "Zentrale Begriffe",
    rows: [
      {
        term: "On-page-SEO",
        def: "Optimierung von Inhalten und HTML (Überschriften, Links, Performance), damit Suchmaschinen das Thema erfassen.",
      },
      {
        term: "Semantisches HTML",
        def: "Sinnvolle Elemente (Überschriften, section, article) gemäß Spezifikation — hilft bei Accessibility und Verständlichkeit.",
      },
      {
        term: "JSON-LD / Schema.org",
        def: "Strukturierte Daten nach Schema.org-Vokabular für Organisation, Person oder FAQ.",
      },
      {
        term: "Markensystem",
        def: "Regeln zu Logo, Farben und Typografie für konsistente Darstellung auf Web, Print und Social Media.",
      },
    ],
  },
  it: {
    heading: "Termini chiave",
    rows: [
      {
        term: "SEO on-page",
        def: "Ottimizzazione di contenuti e HTML (titoli, link, prestazioni) per chiarire l’argomento ai motori di ricerca.",
      },
      {
        term: "HTML semantico",
        def: "Uso di elementi significativi (titoli, section, article) secondo la specifica HTML per accessibilità e chiarezza.",
      },
      {
        term: "JSON-LD / Schema.org",
        def: "Dati strutturati che descrivono entità (Organization, Person, FAQ) con il vocabolario Schema.org.",
      },
      {
        term: "Sistema di marca",
        def: "Regole su logo, colori e tipografia per coerenza tra web, stampa e social.",
      },
    ],
  },
  al: {
    heading: "Terma kyçe",
    rows: [
      {
        term: "SEO në faqe",
        def: "Optimizimi i përmbajtjes dhe HTML (tituj, lidhje, shpejtësi) që motorët e kërkimit të kuptojnë temën.",
      },
      {
        term: "HTML semantik",
        def: "Përdorimi i elementeve kuptimplote (tituj, section, article) sipas specifikimit HTML për aksesueshmëri.",
      },
      {
        term: "JSON-LD / Schema.org",
        def: "Të dhëna të strukturuara që përshkruajnë entitete (Organization, Person, FAQ) me fjalorin Schema.org.",
      },
      {
        term: "Sistemi i markës",
        def: "Rregulla për logo, ngjyra dhe tipografi për konsistencë në web, print dhe rrjetet sociale.",
      },
    ],
  },
};

export default function HomeSeoDefinitions() {
  const { currentLanguage } = useLanguage();
  const pack = DL_COPY[langKey(currentLanguage)];

  return (
    <section className="mt-12 border-t border-white/10 pt-10" aria-labelledby="seo-dl-heading">
      <h3 id="seo-dl-heading" className="text-lg font-semibold tracking-tight text-white">
        {pack.heading}
      </h3>
      <dl className="mt-6 space-y-5">
        {pack.rows.map((row) => (
          <div key={row.term}>
            <dt className="text-base font-semibold text-blue-200">{row.term}</dt>
            <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-white/80">{row.def}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
