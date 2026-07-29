import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";
import { NAV_SCROLL_ON_PAGE_HINT } from "@/lib/a11yLandmarks";

type WhyChooseMeCopy = {
  title: string;
  points: string[];
  ctaBadge: string;
  ctaLead: string;
  ctaButton: string;
  ctaMeta: string;
};

const COPY: Record<string, WhyChooseMeCopy> = {
  en: {
    title: "WHY CHOOSE US",
    points: [
      "We ship websites quickly without skipping QA on forms, speed, and mobile layout.",
      "We pair modern visuals with conversion-focused structure for SMEs.",
      "We focus on measurable outcomes: calls, leads, and clearer service pages.",
      "We are a local Geislingen an der Steige team; Agron leads each engagement.",
    ],
    ctaBadge: "FREE CONSULTATION",
    ctaLead: "We offer a free consultation—tell us about your goals and timeline.",
    ctaButton: "Get a Free Consultation",
    ctaMeta: "Free consultation • No obligation • Response within 24h",
  },
  de: {
    title: "WARUM UNS WÄHLEN",
    points: [
      "Wir liefern Websites zügig, ohne QA zu Formularen, Geschwindigkeit und Mobile-Layout zu überspringen.",
      "Wir verbinden modernes Design mit conversion-starker Struktur für KMU.",
      "Wir fokussieren messbare Ergebnisse: Anrufe, Leads und klarere Service-Seiten.",
      "Wir sind ein lokales Team in Geislingen an der Steige; Agron führt jedes Projekt.",
    ],
    ctaBadge: "KOSTENLOSE BERATUNG",
    ctaLead: "Wir bieten eine kostenlose Beratung—erzählen Sie uns Ziele und Zeitplan.",
    ctaButton: "Kostenlose Beratung anfordern",
    ctaMeta: "Kostenlose Beratung • Unverbindlich • Antwort innerhalb von 24h",
  },
  it: {
    title: "PERCHÉ SCEGLIERE NOI",
    points: [
      "Consegniamo siti rapidamente senza saltare QA su moduli, velocità e layout mobile.",
      "Uniamo un look moderno a una struttura orientata alla conversione per le PMI.",
      "Puntiamo a risultati misurabili: chiamate, lead e pagine servizio più chiare.",
      "Siamo un team locale a Geislingen an der Steige; Agron guida ogni incarico.",
    ],
    ctaBadge: "CONSULENZA GRATUITA",
    ctaLead: "Offriamo una consulenza gratuita—raccontate obiettivi e tempistiche.",
    ctaButton: "Richiedi una consulenza gratuita",
    ctaMeta: "Consulenza gratuita • Senza impegno • Risposta entro 24h",
  },
  sr: {
    title: "ZAŠTO IZABRATI NAS",
    points: [
      "Brzo isporučujemo sajtove bez preskakanja QA na formama, brzini i mobilnom rasporedu.",
      "Spajamo moderan izgled sa strukturom usmerenom na konverziju za mala preduzeća.",
      "Fokusiramo se na merljive ishode: pozive, leadove i jasnije stranice usluga.",
      "Mi smo lokalni tim u Geislingen an der Steige; Agron vodi svaki angažman.",
    ],
    ctaBadge: "BESPLATNA KONSULTACIJA",
    ctaLead: "Mi nudimo besplatnu konsultaciju — opišite ciljeve i rokove.",
    ctaButton: "Zatražite besplatnu konsultaciju",
    ctaMeta: "Besplatna konsultacija • Bez obaveza • Odgovor u roku od 24h",
  },
  al: {
    title: "PSE TË ZGJIDHNI NE",
    points: [
      "Dërgojmë faqe shpejt pa anashkaluar QA për formularët, shpejtësinë dhe paraqitjen mobile.",
      "Lidhim pamje moderne me strukturë të fokusuar në konvertim për SME.",
      "Fokusohemi te rezultatet e matshme: telefonata, lead-et dhe faqe shërbimesh më të qarta.",
      "Jemi ekip lokal në Geislingen an der Steige; Agron drejton çdo angazhim.",
    ],
    ctaBadge: "KONSULTË FALAS",
    ctaLead: "Ne ofrojmë konsultë falas—tregoni qëllimet dhe afatet.",
    ctaButton: "Kërko konsultë falas",
    ctaMeta: "Konsultë falas • Pa detyrim • Përgjigje brenda 24 orëve",
  },
};

export default function WhyChooseMe() {
  const { currentLanguage } = useLanguage();
  const copy = COPY[currentLanguage] ?? COPY.en;
  const lang = currentLanguage as Language;
  const scrollHint = NAV_SCROLL_ON_PAGE_HINT[lang] ?? NAV_SCROLL_ON_PAGE_HINT.en;

  return (
    <section id="why-choose-me" className="premium-section scroll-mt-24 border-t border-[#333333] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{copy.title}</h2>

        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {copy.points.map((point) => (
            <li key={point} className="premium-card flex items-start gap-3 p-4 md:p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" strokeWidth={1.8} />
              <span className="text-sm leading-relaxed text-white/85 md:text-base">{point}</span>
            </li>
          ))}
        </ul>

        <div className="premium-card relative mt-10 overflow-hidden border-blue-400/40 bg-blue-500/10 p-6 shadow-[0_0_0_1px_rgba(96,165,250,0.25),0_0_45px_rgba(59,130,246,0.2)] md:p-8">
          <div className="pointer-events-none absolute inset-0 animate-pulse bg-gradient-to-r from-blue-400/5 via-cyan-300/10 to-blue-400/5" />
          <span className="relative inline-flex rounded-full border border-blue-300/50 bg-blue-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
            {copy.ctaBadge}
          </span>
          <p className="relative mt-4 text-lg font-semibold text-white md:text-xl">{copy.ctaLead}</p>
          <a
            href="#contact"
            aria-label={`${copy.ctaButton} ${scrollHint}`}
            className="premium-button relative mt-5 inline-flex transition duration-200 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70"
          >
            {copy.ctaButton}
          </a>
          <p className="relative mt-3 text-xs text-white/75 md:text-sm">{copy.ctaMeta}</p>
        </div>
      </div>
    </section>
  );
}
