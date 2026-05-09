import { useLanguage } from "@/contexts/LanguageContext";
import { getPremiumTranslations } from "@/lib/premiumI18n";
import { Search, BotMessageSquare, Sparkles } from "lucide-react";

const SCORES = {
  seo: 94,
  aeo: 83,
  geo: 90,
  overall: 87,
} as const;

export default function OptimizationExcellence() {
  const { currentLanguage } = useLanguage();
  const t = getPremiumTranslations(currentLanguage).optimizationExcellence;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const pillars = [
    {
      icon: Search,
      label: "SEO",
      title: t.pillarSeo.title,
      body: t.pillarSeo.body,
      accent: "from-emerald-500/25 to-cyan-500/10",
      ring: "ring-emerald-500/30",
    },
    {
      icon: BotMessageSquare,
      label: "AEO",
      title: t.pillarAeo.title,
      body: t.pillarAeo.body,
      accent: "from-sky-500/25 to-blue-500/10",
      ring: "ring-sky-400/35",
    },
    {
      icon: Sparkles,
      label: "GEO",
      title: t.pillarGeo.title,
      body: t.pillarGeo.body,
      accent: "from-violet-500/25 to-fuchsia-500/10",
      ring: "ring-violet-400/35",
    },
  ] as const;

  return (
    <section
      id="optimization-excellence"
      aria-labelledby="optimization-excellence-heading"
      className="premium-section relative scroll-mt-24 overflow-hidden border-t border-[#333333] bg-[#07070b] py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(52,211,153,0.06) 1px, transparent 1px), linear-gradient(rgba(52,211,153,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[420px] w-[70%] rounded-full bg-emerald-500/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[380px] w-[60%] rounded-full bg-blue-500/10 blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/90">{t.eyebrow}</p>
        <h2
          id="optimization-excellence-heading"
          className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-[2rem]"
        >
          {t.title}
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75">{t.lead}</p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75">{t.why2026}</p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80">{t.platforms}</p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.label}
              className={`relative rounded-2xl border border-white/[0.08] bg-gradient-to-br ${p.accent} p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-sm`}
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 ring-1 ${p.ring}`}
              >
                <p.icon className="h-6 w-6 text-white" aria-hidden />
                <span className="sr-only">{p.label}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-emerald-500/25 bg-[#0c1018]/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-300/95">{t.tableCaption}</p>
              <p className="mt-1 text-xs text-white/45">{t.gradeLine}</p>
            </div>
            <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
              Grade A
            </span>
          </div>

          <div className="mt-6 overflow-x-auto rounded-xl border border-white/[0.08]">
            <table className="w-full min-w-[280px] border-collapse text-left text-sm">
              <caption className="sr-only">{t.tableCaption}</caption>
              <thead>
                <tr className="border-b border-white/[0.1] bg-white/[0.03]">
                  <th scope="col" className="px-4 py-3 font-semibold text-white/90">
                    {t.colArea}
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-emerald-200">
                    {t.colScore}
                  </th>
                </tr>
              </thead>
              <tbody className="text-white/85">
                <tr className="border-b border-white/[0.06]">
                  <td className="px-4 py-3">{t.rowSeo}</td>
                  <td className="px-4 py-3 font-mono text-emerald-300">{SCORES.seo}</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="px-4 py-3">{t.rowAeo}</td>
                  <td className="px-4 py-3 font-mono text-emerald-300">{SCORES.aeo}</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="px-4 py-3">{t.rowGeo}</td>
                  <td className="px-4 py-3 font-mono text-emerald-300">{SCORES.geo}</td>
                </tr>
                <tr className="bg-emerald-500/10">
                  <td className="px-4 py-3 font-semibold text-white">{t.rowOverall}</td>
                  <td className="px-4 py-3 font-mono text-lg font-semibold text-emerald-200">{SCORES.overall}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-semibold text-white">{t.caseTitle}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75">{t.caseLead}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-orange-500/35 bg-gradient-to-b from-orange-950/50 to-[#0a0a0f]">
              <figcaption className="border-b border-orange-500/25 bg-orange-500/10 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-orange-200">
                {t.beforeLabel}
              </figcaption>
              <div className="flex min-h-[200px] flex-col items-center justify-center gap-2 px-4 py-10 text-center">
                <span className="rounded-lg border border-dashed border-orange-400/40 px-3 py-8 text-xs text-orange-200/80">
                  {t.placeholderNote}
                </span>
              </div>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-emerald-500/35 bg-gradient-to-b from-emerald-950/40 to-[#0a0a0f]">
              <figcaption className="border-b border-emerald-500/25 bg-emerald-500/10 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-emerald-200">
                {t.afterLabel}
              </figcaption>
              <div className="flex min-h-[200px] flex-col items-center justify-center gap-2 px-4 py-10 text-center">
                <span className="rounded-lg border border-dashed border-emerald-400/40 px-3 py-8 text-xs text-emerald-200/90">
                  {t.placeholderNote}
                </span>
              </div>
            </figure>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={scrollToContact}
            className="premium-cta inline-flex min-h-[48px] items-center justify-center rounded-full px-8 py-3 text-[0.9375rem] font-semibold shadow-[0_0_28px_rgba(52,211,153,0.25)] transition duration-200 hover:scale-[1.02] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70"
          >
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
