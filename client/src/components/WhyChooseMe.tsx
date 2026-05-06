import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
    title: "WHY CHOOSE ME",
    points: [
      "Fast website delivery",
      "Modern and professional design",
      "Focus on getting new clients for your business",
      "Local designer in Geislingen an der Steige",
    ],
    ctaBadge: "FREE CONSULTATION",
    ctaLead: "Free consultation - let's talk about your project.",
    ctaButton: "Get a Free Consultation",
    ctaMeta: "Free consultation • No obligation • Response within 24h",
  },
  de: {
    title: "WARUM MICH WÄHLEN",
    points: [
      "Schnelle Umsetzung von Websites",
      "Modernes und professionelles Design",
      "Fokus auf neue Kunden fur Ihr Unternehmen",
      "Lokaler Webdesigner in Geislingen an der Steige",
    ],
    ctaBadge: "KOSTENLOSE BERATUNG",
    ctaLead: "Kostenlose Beratung - lassen Sie uns uber Ihr Projekt sprechen.",
    ctaButton: "Kostenlose Beratung anfordern",
    ctaMeta: "Kostenlose Beratung • Unverbindlich • Antwort innerhalb von 24h",
  },
  it: {
    title: "PERCHÉ SCEGLIERE ME",
    points: [
      "Realizzazione veloce dei siti web",
      "Design moderno e professionale",
      "Focus sull'acquisizione di nuovi clienti",
      "Web designer locale a Geislingen an der Steige",
    ],
    ctaBadge: "CONSULENZA GRATUITA",
    ctaLead: "Consulenza gratuita - parliamo del tuo progetto.",
    ctaButton: "Richiedi una consulenza gratuita",
    ctaMeta: "Consulenza gratuita • Senza impegno • Risposta entro 24h",
  },
  sr: {
    title: "ZAŠTO IZABRATI MENE",
    points: [
      "Brza izrada web sajta",
      "Moderan i profesionalan dizajn",
      "Fokus na dobijanju novih klijenata",
      "Lokalni dizajner u Geislingen an der Steige",
    ],
    ctaBadge: "BESPLATNA KONSULTACIJA",
    ctaLead: "Besplatna konsultacija - hajde da pričamo o vašem projektu.",
    ctaButton: "Zatražite besplatnu konsultaciju",
    ctaMeta: "Besplatna konsultacija • Bez obaveza • Odgovor u roku od 24h",
  },
  al: {
    title: "PSE TË ZGJIDHNI MUA",
    points: [
      "Krijim i shpejte i faqeve web",
      "Dizajn modern dhe profesional",
      "Fokus ne sjelljen e klienteve te rinj",
      "Dizajner lokal ne Geislingen an der Steige",
    ],
    ctaBadge: "KONSULTË FALAS",
    ctaLead: "Konsulte falas - le te flasim per projektin tuaj.",
    ctaButton: "Kërko konsultë falas",
    ctaMeta: "Konsultë falas • Pa detyrim • Përgjigje brenda 24 orëve",
  },
};

export default function WhyChooseMe() {
  const { currentLanguage } = useLanguage();
  const copy = COPY[currentLanguage] ?? COPY.en;

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
