import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type WhyChooseMeCopy = {
  title: string;
  points: string[];
  ctaLead: string;
  ctaButton: string;
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
    ctaLead: "Free consultation - let's talk about your project.",
    ctaButton: "Contact Me",
  },
  de: {
    title: "WARUM MICH WÄHLEN",
    points: [
      "Schnelle Umsetzung von Websites",
      "Modernes und professionelles Design",
      "Fokus auf neue Kunden fur Ihr Unternehmen",
      "Lokaler Webdesigner in Geislingen an der Steige",
    ],
    ctaLead: "Kostenlose Beratung - lassen Sie uns uber Ihr Projekt sprechen.",
    ctaButton: "Kontaktieren Sie mich",
  },
  it: {
    title: "PERCHÉ SCEGLIERE ME",
    points: [
      "Realizzazione veloce dei siti web",
      "Design moderno e professionale",
      "Focus sull'acquisizione di nuovi clienti",
      "Web designer locale a Geislingen an der Steige",
    ],
    ctaLead: "Consulenza gratuita - parliamo del tuo progetto.",
    ctaButton: "Contattami",
  },
  sr: {
    title: "ZAŠTO IZABRATI MENE",
    points: [
      "Brza izrada web sajta",
      "Moderan i profesionalan dizajn",
      "Fokus na dobijanju novih klijenata",
      "Lokalni dizajner u Geislingen an der Steige",
    ],
    ctaLead: "Besplatna konsultacija - hajde da pričamo o vašem projektu.",
    ctaButton: "Kontaktirajte me",
  },
  al: {
    title: "PSE TË ZGJIDHNI MUA",
    points: [
      "Krijim i shpejte i faqeve web",
      "Dizajn modern dhe profesional",
      "Fokus ne sjelljen e klienteve te rinj",
      "Dizajner lokal ne Geislingen an der Steige",
    ],
    ctaLead: "Konsulte falas - le te flasim per projektin tuaj.",
    ctaButton: "Me kontakto",
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

        <div className="premium-card mt-10 border-blue-400/30 bg-blue-500/10 p-6 md:p-8">
          <p className="text-lg font-semibold text-white md:text-xl">{copy.ctaLead}</p>
          <a href="#contact" className="premium-button mt-5 inline-flex">
            {copy.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
