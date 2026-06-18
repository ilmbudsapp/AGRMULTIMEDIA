import { ArrowRight, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type QuoteCopy = {
  heading: string;
  body: string;
  points: string[];
  primaryCta: string;
  secondaryCta: string;
  note: string;
};

const QUOTE_TEXT = {
  de: "Jedes Projekt ist individuell. Nach einem kurzen Erstgespräch erhalten Sie ein transparentes Angebot passend zu Umfang, Ziel und Anforderungen.",
  en: "Every project is individual. After a brief initial consultation you receive a transparent quote tailored to scope, goals and requirements.",
  it: "Ogni progetto è individuale. Dopo un breve colloquio iniziale ricevete un'offerta trasparente in base ad ambito, obiettivi e requisiti.",
  sr: "Svaki projekat je individualan. Nakon kratkog uvodnog razgovora dobijate transparentnu ponudu prilagođenu obimu, ciljevima i zahtevima.",
  al: "Çdo projekt është individual. Pas një bisede fillestare të shkurtër merrni një ofertë transparente sipas shtrirjes, qëllimeve dhe kërkesave.",
};

const COPY: Record<string, QuoteCopy> = {
  en: {
    heading: "Individual project quote",
    body: QUOTE_TEXT.en,
    points: [
      "Custom website design for your business",
      "Mobile-responsive layout and on-page SEO",
      "Optional SEO, AEO and GEO optimisation",
      "Personal contact from planning to launch",
    ],
    primaryCta: "Request a free consultation",
    secondaryCta: "Get an individual quote",
    note: "Scope, services and timeline are agreed personally after your initial consultation.",
  },
  de: {
    heading: "Individuelles Projektangebot",
    body: QUOTE_TEXT.de,
    points: [
      "Individuelles Webdesign für Ihr Unternehmen",
      "Mobile Optimierung und On-Page-SEO",
      "Optionale SEO-, AEO- und GEO-Optimierung",
      "Persönlicher Ansprechpartner von der Planung bis zum Launch",
    ],
    primaryCta: "Kostenlose Beratung anfragen",
    secondaryCta: "Individuelles Angebot erhalten",
    note: "Umfang, Leistungen und Timing klären wir persönlich nach dem Erstgespräch.",
  },
  it: {
    heading: "Offerta di progetto individuale",
    body: QUOTE_TEXT.it,
    points: [
      "Web design personalizzato per la vostra attività",
      "Layout responsive e SEO on-page",
      "Ottimizzazione SEO, AEO e GEO opzionale",
      "Contatto personale dalla pianificazione al lancio",
    ],
    primaryCta: "Richiedi consulenza gratuita",
    secondaryCta: "Ricevi un'offerta individuale",
    note: "Ambito, servizi e tempi si definiscono dopo il colloquio iniziale.",
  },
  sr: {
    heading: "Individualna ponuda za projekat",
    body: QUOTE_TEXT.sr,
    points: [
      "Prilagođen web dizajn za vašu firmu",
      "Mobilna optimizacija i on-page SEO",
      "Opciona SEO, AEO i GEO optimizacija",
      "Lični kontakt od planiranja do objave",
    ],
    primaryCta: "Zatražite besplatnu konsultaciju",
    secondaryCta: "Dobijte individualnu ponudu",
    note: "Obim, usluge i rokove dogovaramo lično nakon uvodnog razgovora.",
  },
  al: {
    heading: "Ofertë individuale projekti",
    body: QUOTE_TEXT.al,
    points: [
      "Web design i personalizuar për biznesin tuaj",
      "Layout responsive dhe SEO on-page",
      "Optimizim opsional SEO, AEO dhe GEO",
      "Kontakt personal nga planifikimi deri te publikimi",
    ],
    primaryCta: "Kërkoni konsultim falas",
    secondaryCta: "Merrni ofertë individuale",
    note: "Shtrirjen, shërbimet dhe afatin e përcaktojmë pas bisedës fillestare.",
  },
};

export default function PricingModels() {
  const { currentLanguage } = useLanguage();
  const copy = COPY[currentLanguage] ?? COPY.de;

  return (
    <section
      id="individual-quote"
      className="premium-section scroll-mt-24 border-t border-[#333333] py-20 md:py-28"
      aria-labelledby="individual-quote-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="individual-quote-heading" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {copy.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">{copy.body}</p>
        </header>

        <article className="premium-card mx-auto mt-12 max-w-2xl rounded-2xl p-7 md:p-10">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
              <MessageSquare className="h-5 w-5" aria-hidden />
            </span>
            <ul className="space-y-3">
              {copy.points.map((point) => (
                <li key={point} className="text-sm leading-relaxed text-white/85 md:text-base">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/kontakt"
            className="premium-button inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white transition duration-200 hover:scale-[1.03] md:text-base"
          >
            {copy.primaryCta}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 hover:border-blue-300/50 md:text-base"
          >
            {copy.secondaryCta}
          </a>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-white/65 md:text-sm">{copy.note}</p>
      </div>
    </section>
  );
}
