import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";
import { BookOpen, Target, Sparkles } from "lucide-react";

interface DefinitionsCopy {
  title: string;
  subtitle: string;
  definitions: Array<{
    icon: React.ReactNode;
    term: string;
    definition: string;
    source?: string;
  }>;
}

const DEFINITIONS_COPY: Record<Language, DefinitionsCopy> = {
  de: {
    title: "Was bedeuten GEO & AEO?",
    subtitle: "Wichtige Begriffe für moderne Suchmaschinenoptimierung erklärt:",
    definitions: [
      {
        icon: <Sparkles className="h-6 w-6" />,
        term: "GEO (Generative Engine Optimization)",
        definition:
          "Optimierung von Inhalten für KI-gestützte Suchmaschinen wie ChatGPT, Gemini, Perplexity und andere generative AI-Systeme. Ziel ist es, dass Ihre Website als Quelle in AI-generierten Antworten zitiert wird.",
        source: "Quelle: GEO-Studie arXiv:2311.09735",
      },
      {
        icon: <Target className="h-6 w-6" />,
        term: "AEO (Answer Engine Optimization)",
        definition:
          "Fokus auf direkte Antworten für konkrete Fragen. Strukturierte Inhalte (FAQ, Definitionen, Tabellen) helfen Suchmaschinen und AI-Systemen, präzise Antworten zu liefern und Ihre Expertise zu erkennen.",
      },
      {
        icon: <BookOpen className="h-6 w-6" />,
        term: "E-E-A-T (Experience, Expertise, Authoritativeness, Trust)",
        definition:
          "Google-Qualitätskriterien für Webinhalte. Nachweis von Erfahrung, Fachwissen, Autorität und Vertrauenswürdigkeit durch Referenzen, Bewertungen, Quellenangaben und transparente Autorenschaft.",
        source: "Quelle: Google Search Quality Rater Guidelines",
      },
    ],
  },
  en: {
    title: "What do GEO & AEO mean?",
    subtitle: "Important terms for modern search engine optimization explained:",
    definitions: [
      {
        icon: <Sparkles className="h-6 w-6" />,
        term: "GEO (Generative Engine Optimization)",
        definition:
          "Optimization of content for AI-powered search engines like ChatGPT, Gemini, Perplexity and other generative AI systems. The goal is for your website to be cited as a source in AI-generated answers.",
        source: "Source: GEO Study arXiv:2311.09735",
      },
      {
        icon: <Target className="h-6 w-6" />,
        term: "AEO (Answer Engine Optimization)",
        definition:
          "Focus on direct answers to specific questions. Structured content (FAQ, definitions, tables) helps search engines and AI systems deliver precise answers and recognize your expertise.",
      },
      {
        icon: <BookOpen className="h-6 w-6" />,
        term: "E-E-A-T (Experience, Expertise, Authoritativeness, Trust)",
        definition:
          "Google quality criteria for web content. Proof of experience, expertise, authority and trustworthiness through references, reviews, citations and transparent authorship.",
        source: "Source: Google Search Quality Rater Guidelines",
      },
    ],
  },
  "sr-Latn": {
    title: "Šta znače GEO i AEO?",
    subtitle: "Važni pojmovi za modernu optimizaciju za pretraživače objašnjeni:",
    definitions: [
      {
        icon: <Sparkles className="h-6 w-6" />,
        term: "GEO (Generative Engine Optimization)",
        definition:
          "Optimizacija sadržaja za AI pretraživače kao što su ChatGPT, Gemini, Perplexity i druge generativne AI sisteme. Cilj je da vaš web sajt bude citiran kao izvor u AI-generisanim odgovorima.",
        source: "Izvor: GEO studija arXiv:2311.09735",
      },
      {
        icon: <Target className="h-6 w-6" />,
        term: "AEO (Answer Engine Optimization)",
        definition:
          "Fokus na direktne odgovore na konkretna pitanja. Strukturiran sadržaj (FAQ, definicije, tabele) pomaže pretraživačima i AI sistemima da daju precizne odgovore i prepoznaju vašu stručnost.",
      },
      {
        icon: <BookOpen className="h-6 w-6" />,
        term: "E-E-A-T (Iskustvo, Stručnost, Autoritet, Poverenje)",
        definition:
          "Google kriterijumi kvaliteta za web sadržaj. Dokaz iskustva, stručnosti, autoriteta i poverenja kroz reference, recenzije, izvore i transparentno autorstvo.",
        source: "Izvor: Google Search Quality Rater Guidelines",
      },
    ],
  },
  it: {
    title: "Cosa significano GEO e AEO?",
    subtitle: "Termini importanti per l'ottimizzazione moderna dei motori di ricerca spiegati:",
    definitions: [
      {
        icon: <Sparkles className="h-6 w-6" />,
        term: "GEO (Generative Engine Optimization)",
        definition:
          "Ottimizzazione dei contenuti per motori di ricerca basati su AI come ChatGPT, Gemini, Perplexity e altri sistemi di AI generativa. L'obiettivo è che il tuo sito web venga citato come fonte nelle risposte generate dall'AI.",
        source: "Fonte: Studio GEO arXiv:2311.09735",
      },
      {
        icon: <Target className="h-6 w-6" />,
        term: "AEO (Answer Engine Optimization)",
        definition:
          "Focus su risposte dirette a domande specifiche. Contenuti strutturati (FAQ, definizioni, tabelle) aiutano i motori di ricerca e i sistemi AI a fornire risposte precise e riconoscere la tua competenza.",
      },
      {
        icon: <BookOpen className="h-6 w-6" />,
        term: "E-E-A-T (Esperienza, Competenza, Autorevolezza, Fiducia)",
        definition:
          "Criteri di qualità Google per i contenuti web. Prova di esperienza, competenza, autorevolezza e affidabilità attraverso referenze, recensioni, citazioni e paternità trasparente.",
        source: "Fonte: Google Search Quality Rater Guidelines",
      },
    ],
  },
  sq: {
    title: "Çfarë nënkuptojnë GEO dhe AEO?",
    subtitle: "Terma të rëndësishëm për optimizimin modern të motorëve të kërkimit shpjeguar:",
    definitions: [
      {
        icon: <Sparkles className="h-6 w-6" />,
        term: "GEO (Generative Engine Optimization)",
        definition:
          "Optimizimi i përmbajtjes për motorë kërkimi të bazuar në AI si ChatGPT, Gemini, Perplexity dhe sisteme të tjera AI gjenerative. Qëllimi është që faqja juaj të citohet si burim në përgjigjet e gjeneruara nga AI.",
        source: "Burimi: Studimi GEO arXiv:2311.09735",
      },
      {
        icon: <Target className="h-6 w-6" />,
        term: "AEO (Answer Engine Optimization)",
        definition:
          "Fokusi në përgjigje të drejtpërdrejta për pyetje specifike. Përmbajtja e strukturuar (FAQ, përkufizime, tabela) ndihmon motorët e kërkimit dhe sistemet AI të japin përgjigje të sakta dhe të njohin ekspertizën tuaj.",
      },
      {
        icon: <BookOpen className="h-6 w-6" />,
        term: "E-E-A-T (Përvojë, Ekspertizë, Autoritet, Besim)",
        definition:
          "Kriteret e cilësisë së Google për përmbajtjen web. Dëshmi e përvojës, ekspertizës, autoritetit dhe besueshmërisë nëpërmjet referencave, recensioneve, citimeve dhe autorësisë transparente.",
        source: "Burimi: Google Search Quality Rater Guidelines",
      },
    ],
  },
};

export default function GeoAeoDefinitions() {
  const { currentLanguage } = useLanguage();
  const copy = DEFINITIONS_COPY[currentLanguage];

  return (
    <section className="border-t border-[#2a2a30] py-16 md:py-20" aria-labelledby="definitions-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            id="definitions-heading"
            className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            {copy.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/65 md:text-base">{copy.subtitle}</p>
        </div>

        <div className="space-y-6">
          {copy.definitions.map((def, index) => (
            <article
              key={index}
              className="premium-card flex gap-4 rounded-xl p-6 md:p-7"
              itemScope
              itemType="https://schema.org/DefinedTerm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                {def.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white" itemProp="name">
                  {def.term}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75 md:text-base" itemProp="description">
                  {def.definition}
                </p>
                {def.source && (
                  <p className="mt-3 text-xs text-white/50">
                    <cite>{def.source}</cite>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
