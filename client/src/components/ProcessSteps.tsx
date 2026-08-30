import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

interface ProcessStepsCopy {
  title: string;
  steps: Array<{ number: string; title: string; description: string }>;
}

const PROCESS_STEPS_COPY: Record<Language, ProcessStepsCopy> = {
  de: {
    title: "So läuft die Zusammenarbeit ab",
    steps: [
      {
        number: "01",
        title: "Kostenloses Erstgespräch",
        description:
          "Unverbindliches Gespräch über Ihr Unternehmen, Ihre Ziele und Erwartungen an die Website oder das Video-Projekt.",
      },
      {
        number: "02",
        title: "Planung & Strategie",
        description:
          "Gemeinsame Definition von Struktur, Inhalten und SEO-Strategie für Ihre Branche und Region. Bei Videos: Konzept, Storyboard und Produktionsplanung.",
      },
      {
        number: "03",
        title: "Design & Entwicklung",
        description:
          "Professionelle Umsetzung mit modernem Design, mobile Optimierung und SEO-, GEO- und AEO-Grundlage. Laufende Abstimmung während der Produktion.",
      },
      {
        number: "04",
        title: "Launch & Optimierung",
        description:
          "Veröffentlichung auf Ihrer Domain und laufende Optimierung für messbare Ergebnisse. Support nach dem Launch inklusive.",
      },
    ],
  },
  en: {
    title: "How the collaboration works",
    steps: [
      {
        number: "01",
        title: "Free Initial Consultation",
        description:
          "Non-binding discussion about your business, goals, and expectations for the website or video project.",
      },
      {
        number: "02",
        title: "Planning & Strategy",
        description:
          "Joint definition of structure, content, and SEO strategy for your industry and region. For videos: concept, storyboard, and production planning.",
      },
      {
        number: "03",
        title: "Design & Development",
        description:
          "Professional implementation with modern design, mobile optimization, and SEO, GEO, and AEO foundation. Ongoing coordination during production.",
      },
      {
        number: "04",
        title: "Launch & Optimization",
        description:
          "Publication on your domain and ongoing optimization for measurable results. Post-launch support included.",
      },
    ],
  },
  "sr-Latn": {
    title: "Tok saradnje",
    steps: [
      {
        number: "01",
        title: "Besplatni početni razgovor",
        description:
          "Neobavezni razgovor o vašem poslovanju, ciljevima i očekivanjima od web sajta ili video projekta.",
      },
      {
        number: "02",
        title: "Planiranje i strategija",
        description:
          "Zajednička definicija strukture, sadržaja i SEO strategije za vašu industriju i region. Za video: koncept, storyboard i plan produkcije.",
      },
      {
        number: "03",
        title: "Dizajn i izrada",
        description:
          "Profesionalna realizacija sa modernim dizajnom, mobilnom optimizacijom i SEO, GEO i AEO osnovom. Kontinuirana koordinacija tokom produkcije.",
      },
      {
        number: "04",
        title: "Pokretanje i optimizacija",
        description:
          "Objavljivanje na vašem domenu i kontinuirana optimizacija za merljive rezultate. Podrška nakon pokretanja uključena.",
      },
    ],
  },
  it: {
    title: "Come funziona la collaborazione",
    steps: [
      {
        number: "01",
        title: "Consulenza iniziale gratuita",
        description:
          "Discussione non vincolante sulla tua attività, obiettivi e aspettative per il sito web o progetto video.",
      },
      {
        number: "02",
        title: "Pianificazione e strategia",
        description:
          "Definizione congiunta di struttura, contenuti e strategia SEO per il tuo settore e regione. Per video: concetto, storyboard e pianificazione produzione.",
      },
      {
        number: "03",
        title: "Design e sviluppo",
        description:
          "Realizzazione professionale con design moderno, ottimizzazione mobile e base SEO, GEO e AEO. Coordinamento continuo durante la produzione.",
      },
      {
        number: "04",
        title: "Lancio e ottimizzazione",
        description:
          "Pubblicazione sul tuo dominio e ottimizzazione continua per risultati misurabili. Supporto post-lancio incluso.",
      },
    ],
  },
  sq: {
    title: "Si funksionon bashkëpunimi",
    steps: [
      {
        number: "01",
        title: "Konsultim fillest falas",
        description:
          "Diskutim jo-detyrimues për biznesin tuaj, objektivat dhe pritjet për projektin e web faqes ose videos.",
      },
      {
        number: "02",
        title: "Planifikim dhe strategji",
        description:
          "Përkufizim i përbashkët i strukturës, përmbajtjes dhe strategjisë SEO për industrinë dhe rajonin tuaj. Për video: koncept, storyboard dhe planifikim prodhimi.",
      },
      {
        number: "03",
        title: "Dizajn dhe zhvillim",
        description:
          "Zbatim profesional me dizajn modern, optimizim mobil dhe bazë SEO, GEO dhe AEO. Koordinim i vazhdueshëm gjatë prodhimit.",
      },
      {
        number: "04",
        title: "Lancim dhe optimizim",
        description:
          "Publikim në domenin tuaj dhe optimizim i vazhdueshëm për rezultate të matshme. Mbështetje pas lancimit e përfshirë.",
      },
    ],
  },
};

export default function ProcessSteps() {
  const { currentLanguage } = useLanguage();
  const copy = PROCESS_STEPS_COPY[currentLanguage];

  return (
    <section className="scroll-mt-24 py-16 md:py-20" aria-labelledby="process-steps-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="process-steps-heading"
          className="font-display mb-12 text-center text-2xl font-semibold tracking-tight text-white md:text-3xl"
        >
          {copy.title}
        </h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {copy.steps.map((step, index) => (
            <div
              key={step.number}
              className="premium-card premium-card-hover group relative flex flex-col rounded-xl p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20 text-lg font-bold text-blue-400">
                  {step.number}
                </span>
                {index < copy.steps.length - 1 && (
                  <ArrowRight className="hidden h-5 w-5 text-blue-400/50 lg:block" />
                )}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/65">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
