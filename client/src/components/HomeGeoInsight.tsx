import { useLanguage } from "@/contexts/LanguageContext";
import { getHomeGeoInsightCopy } from "@/lib/homeGeoInsightI18n";
import { Scale, Lightbulb, BookOpen, LineChart } from "lucide-react";

export default function HomeGeoInsight() {
  const { currentLanguage } = useLanguage();
  const c = getHomeGeoInsightCopy(currentLanguage);

  return (
    <section
      id="home-geo-insight"
      aria-labelledby="home-geo-insight-heading"
      className="scroll-mt-24 border-b border-white/[0.06] bg-gradient-to-b from-[#08080f] to-[#07070b] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 text-white sm:px-6 lg:px-8 [&_dd]:text-white [&_li]:text-white [&_ol>li]:text-white [&_p]:text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/90">{c.sectionEyebrow}</p>
        <h2
          id="home-geo-insight-heading"
          className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-white md:text-3xl"
        >
          {c.sectionTitle}
        </h2>

        <div className="mt-10 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-6 md:p-8">
          <div className="flex items-center gap-2 text-emerald-200/95">
            <LineChart className="h-5 w-5 shrink-0" aria-hidden />
            <h3 className="text-lg font-semibold text-white">{c.takeawayTitle}</h3>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed md:text-base">
            {c.takeaways.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-2 text-sky-200/95">
            <BookOpen className="h-5 w-5 shrink-0" aria-hidden />
            <h3 className="text-lg font-semibold text-white">{c.defTitle}</h3>
          </div>
          <dl className="mt-5 space-y-4">
            {c.definitions.map((d) => (
              <div key={d.term} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 md:p-5">
                <dt className="font-semibold text-sky-300/95">{d.term}</dt>
                <dd className="mt-2 text-sm leading-relaxed md:text-[0.95rem]">{d.sentence}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-2 text-violet-200/95">
            <Scale className="h-5 w-5 shrink-0" aria-hidden />
            <h3 className="text-lg font-semibold text-white">{c.balanceTitle}</h3>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed md:text-base">{c.balanceLead}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 md:p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-emerald-200/95">{c.prosTitle}</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                {c.pros.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-500/25 bg-amber-950/15 p-5 md:p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-amber-200/95">{c.consTitle}</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                {c.cons.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-indigo-500/25 bg-indigo-950/20 p-6 md:p-8">
          <div className="flex items-center gap-2 text-indigo-200/95">
            <Lightbulb className="h-5 w-5 shrink-0" aria-hidden />
            <h3 className="text-lg font-semibold text-white">{c.tipsTitle}</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed md:text-base">{c.tipsLead}</p>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-relaxed md:text-base">
            {c.tips.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ol>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-white">{c.researchTitle}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed md:text-base">{c.researchIntro}</p>
          <ul className="mt-6 space-y-4">
            {c.stats.map((s) => (
              <li
                key={s.sourceUrl}
                className="rounded-xl border border-white/[0.07] bg-[#0a0a12]/80 px-4 py-4 md:px-5 md:py-4"
              >
                <p className="text-sm leading-relaxed md:text-[0.95rem]">{s.claim}</p>
                <p className="mt-2 text-xs text-zinc-300">
                  <a
                    href={s.sourceUrl}
                    className="text-sky-400/95 underline decoration-sky-500/40 underline-offset-2 hover:text-sky-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.sourceLabel}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
