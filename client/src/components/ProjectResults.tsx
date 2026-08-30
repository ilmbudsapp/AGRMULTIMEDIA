import { TrendingUp, Zap, Target, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";

interface ResultsCopy {
  title: string;
  subtitle: string;
  results: Array<{ icon: React.ReactNode; metric: string; description: string; source: string }>;
}

const RESULTS_COPY: Record<Language, ResultsCopy> = {
  de: {
    title: "Messbare Erfolge unserer Projekte",
    subtitle: "Konkrete Zahlen aus 2025–2026, dokumentiert, nicht garantiert für jedes Projekt:",
    results: [
      {
        icon: <TrendingUp className="h-6 w-6" />,
        metric: "+32% mehr Anfragen",
        description: "Toni's Autopflege Göppingen nach Website-Relaunch",
        source: "Quelle: interne Projektauswertung, 2025",
      },
      {
        icon: <Award className="h-6 w-6" />,
        metric: "49 → 88 Audit-Score",
        description: "FixBike: SEO-Audit von Grade F auf Grade A in unter 24 Stunden, GEO +66 Punkte",
        source: "Quelle: seoscore.tools Audit, fixbike.online, Mai 2026",
      },
      {
        icon: <Target className="h-6 w-6" />,
        metric: "+18% Sichtbarkeit",
        description: "Tairovic Gebäudeservice: bessere regionale Sichtbarkeit",
        source: "Quelle: Kundenfeedback & Analytics, 2025",
      },
      {
        icon: <Zap className="h-6 w-6" />,
        metric: "+50% schnellere Ladezeit",
        description: "FixBike-Projekt nach Performance-Optimierung",
        source: "Quelle: Lighthouse-Messung, 2025",
      },
    ],
  },
  en: {
    title: "Measurable Results from Our Projects",
    subtitle: "Concrete numbers from 2025–2026, documented, not guaranteed for every project:",
    results: [
      {
        icon: <TrendingUp className="h-6 w-6" />,
        metric: "+32% more inquiries",
        description: "Toni's Autopflege Göppingen after website relaunch",
        source: "Source: internal project evaluation, 2025",
      },
      {
        icon: <Award className="h-6 w-6" />,
        metric: "49 → 88 Audit Score",
        description: "FixBike: SEO audit from Grade F to Grade A in under 24 hours, GEO +66 points",
        source: "Source: seoscore.tools audit, fixbike.online, May 2026",
      },
      {
        icon: <Target className="h-6 w-6" />,
        metric: "+18% visibility",
        description: "Tairovic Gebäudeservice: better regional visibility",
        source: "Source: customer feedback & analytics, 2025",
      },
      {
        icon: <Zap className="h-6 w-6" />,
        metric: "+50% faster load time",
        description: "FixBike project after performance optimization",
        source: "Source: Lighthouse measurement, 2025",
      },
    ],
  },
  "sr-Latn": {
    title: "Merljivi rezultati naših projekata",
    subtitle: "Konkretni brojevi iz 2025–2026, dokumentovano, nije garantovano za svaki projekat:",
    results: [
      {
        icon: <TrendingUp className="h-6 w-6" />,
        metric: "+32% više upita",
        description: "Toni's Autopflege Göppingen nakon relauncha web sajta",
        source: "Izvor: interna procena projekta, 2025",
      },
      {
        icon: <Award className="h-6 w-6" />,
        metric: "49 → 88 Audit Score",
        description: "FixBike: SEO audit od Grade F na Grade A za manje od 24 sata, GEO +66 poena",
        source: "Izvor: seoscore.tools audit, fixbike.online, maj 2026",
      },
      {
        icon: <Target className="h-6 w-6" />,
        metric: "+18% vidljivost",
        description: "Tairovic Gebäudeservice: bolja regionalna vidljivost",
        source: "Izvor: povratne informacije klijenata i Analytics, 2025",
      },
      {
        icon: <Zap className="h-6 w-6" />,
        metric: "+50% brže učitavanje",
        description: "FixBike projekat nakon optimizacije performansi",
        source: "Izvor: Lighthouse merenje, 2025",
      },
    ],
  },
  it: {
    title: "Risultati misurabili dei nostri progetti",
    subtitle: "Numeri concreti dal 2025–2026, documentati, non garantiti per ogni progetto:",
    results: [
      {
        icon: <TrendingUp className="h-6 w-6" />,
        metric: "+32% più richieste",
        description: "Toni's Autopflege Göppingen dopo il rilancio del sito web",
        source: "Fonte: valutazione interna del progetto, 2025",
      },
      {
        icon: <Award className="h-6 w-6" />,
        metric: "49 → 88 Audit Score",
        description: "FixBike: audit SEO da Grade F a Grade A in meno di 24 ore, GEO +66 punti",
        source: "Fonte: audit seoscore.tools, fixbike.online, maggio 2026",
      },
      {
        icon: <Target className="h-6 w-6" />,
        metric: "+18% visibilità",
        description: "Tairovic Gebäudeservice: migliore visibilità regionale",
        source: "Fonte: feedback clienti e Analytics, 2025",
      },
      {
        icon: <Zap className="h-6 w-6" />,
        metric: "+50% tempo di caricamento",
        description: "Progetto FixBike dopo ottimizzazione delle prestazioni",
        source: "Fonte: misurazione Lighthouse, 2025",
      },
    ],
  },
  sq: {
    title: "Rezultate të matshme nga projektet tona",
    subtitle: "Numra konkretë nga 2025–2026, të dokumentuar, jo të garantuar për çdo projekt:",
    results: [
      {
        icon: <TrendingUp className="h-6 w-6" />,
        metric: "+32% më shumë kërkesa",
        description: "Toni's Autopflege Göppingen pas rilancimit të faqes web",
        source: "Burimi: vlerësim i brendshëm i projektit, 2025",
      },
      {
        icon: <Award className="h-6 w-6" />,
        metric: "49 → 88 Audit Score",
        description: "FixBike: audit SEO nga Grade F në Grade A në më pak se 24 orë, GEO +66 pikë",
        source: "Burimi: audit seoscore.tools, fixbike.online, maj 2026",
      },
      {
        icon: <Target className="h-6 w-6" />,
        metric: "+18% dukshmëri",
        description: "Tairovic Gebäudeservice: dukshmëri më e mirë rajonale",
        source: "Burimi: reagime klientësh dhe Analytics, 2025",
      },
      {
        icon: <Zap className="h-6 w-6" />,
        metric: "+50% kohë ngarkimi më e shpejtë",
        description: "Projekti FixBike pas optimizimit të performancës",
        source: "Burimi: matja Lighthouse, 2025",
      },
    ],
  },
};

export default function ProjectResults() {
  const { currentLanguage } = useLanguage();
  const copy = RESULTS_COPY[currentLanguage];

  return (
    <section className="border-t border-[#2a2a30] bg-[#0c0c10] py-16 md:py-20" aria-labelledby="results-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            id="results-heading"
            className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            {copy.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-white/65 md:text-base">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {copy.results.map((result, index) => (
            <article
              key={index}
              className="premium-card flex flex-col gap-4 rounded-xl p-6 md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                  {result.icon}
                </div>
                <div className="flex-1">
                  <div className="text-xl font-bold text-white md:text-2xl">{result.metric}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 md:text-base">{result.description}</p>
                  <p className="mt-3 text-xs text-white/50">{result.source}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
