import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";
import { NAV_SCROLL_ON_PAGE_HINT } from "@/lib/a11yLandmarks";

type FinalCtaCopy = {
  lead: string;
  body: string;
  button: string;
  meta: string;
};

const COPY: Record<string, FinalCtaCopy> = {
  en: {
    lead: "Ready to get your own website? Let's work together.",
    body:
      "We walk through goals, scope, and timelines together. For example, if you need more qualified enquiries, we prioritise page structure and clear calls-to-action. You typically hear back within 24 hours — no obligation to continue.",
    button: "Get a Free Consultation",
    meta: "Free consultation • No obligation • Response within 24h",
  },
  de: {
    lead: "Bereit fur Ihre eigene Website? Lassen Sie uns zusammenarbeiten.",
    body:
      "Wir klären gemeinsam Ziele, Umfang und Zeitplan. Wenn Sie etwa lokale Sichtbarkeit brauchen, stehen Struktur und klare CTAs im Mittelpunkt. Antwort meist innerhalb von 24 Stunden — unverbindlich.",
    button: "Kostenlose Beratung anfordern",
    meta: "Kostenlose Beratung • Unverbindlich • Antwort innerhalb von 24h",
  },
  it: {
    lead: "Pronto per il tuo sito web? Lavoriamo insieme.",
    body:
      "Definiamo insieme obiettivi, scope e tempi. Per esempio, per più richieste qualificate lavoriamo su architettura delle pagine e CTA chiari. Di solito rispondiamo entro 24 ore — senza impegno.",
    button: "Richiedi una consulenza gratuita",
    meta: "Consulenza gratuita • Senza impegno • Risposta entro 24h",
  },
  sr: {
    lead: "Spremni za vas web sajt? Hajde da radimo zajedno.",
    body:
      "Zajedno prolazimo ciljeve, obim i rokove. Na primer, ako vam treba više kvalifikovanih upita, fokus su struktura stranica i jasni pozivi na akciju. Odgovor obično u roku od 24 sata — bez obaveze nastavka saradnje.",
    button: "Zatražite besplatnu konsultaciju",
    meta: "Besplatna konsultacija • Bez obaveza • Odgovor u roku od 24h",
  },
  al: {
    lead: "Gati per faqen tuaj web? Le te punojme se bashku.",
    body:
      "Së bashku përcaktojmë qëllime, fushëveprim dhe afate. Për shembull, për më shumë kërkesa cilësore theksojmë strukturën e faqeve dhe thirrjet e qarta. Zakonisht përgjigjemi brenda 24 orëve — pa detyrim.",
    button: "Kërko konsultë falas",
    meta: "Konsultë falas • Pa detyrim • Përgjigje brenda 24 orëve",
  },
};

export default function HomeFinalCta() {
  const { currentLanguage } = useLanguage();
  const copy = COPY[currentLanguage] ?? COPY.en;
  const lang = currentLanguage as Language;
  const scrollHint = NAV_SCROLL_ON_PAGE_HINT[lang] ?? NAV_SCROLL_ON_PAGE_HINT.en;

  return (
    <section id="home-final-cta" className="premium-section scroll-mt-24 border-t border-[#333333] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-400/40 bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-cyan-400/20 px-6 py-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:px-10 md:py-14">
          <h2 className="mx-auto max-w-3xl text-2xl font-semibold tracking-tight text-white md:text-4xl">{copy.lead}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">{copy.body}</p>
          <a
            href="#contact"
            aria-label={`${copy.button} ${scrollHint}`}
            className="premium-button mt-8 inline-flex px-8 py-3 text-base font-semibold tracking-[0.01em] text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)] transition duration-200 hover:scale-[1.03] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70 md:text-lg"
          >
            {copy.button}
          </a>
          <p className="mt-3 text-xs text-white/80 md:text-sm">{copy.meta}</p>
        </div>
      </div>
    </section>
  );
}
