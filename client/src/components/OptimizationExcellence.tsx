import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPremiumTranslations } from "@/lib/premiumI18n";
import { Search, BotMessageSquare, Sparkles } from "lucide-react";

/** Post-optimization benchmark — fixbike.online (May 9, 2026) */
const SCORES_AFTER = {
  seo: 88,
  aeo: 85,
  geo: 90,
  overall: 88,
} as const;

const FIXBIKE_IMG = {
  beforeStem: "/fixbike-before",
  afterStem: "/fixbike-after",
} as const;

/** Current audit — www.agrmultimedia.eu (May 9, 2026) */
const SCORES_AGR = {
  seo: 92,
  aeo: 83,
  geo: 78,
  overall: 86,
} as const;

const AGR_BENCHMARK_STEM = "/agrmultimedia-benchmark";

function AuditScreenshotPicture({
  stem,
  alt,
  className,
}: {
  stem: string;
  alt: string;
  className: string;
}) {
  const jpg = `${stem}.jpg`;
  const webpSrcSet = `${stem}-640.webp 640w, ${stem}-960.webp 960w, ${stem}.webp 1200w`;
  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet} sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 520px" />
      <img src={jpg} alt={alt} width={1200} height={675} loading="lazy" decoding="async" className={className} />
    </picture>
  );
}

function useCountUp(end: number, durationMs: number, active: boolean): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active || end === 0) {
      setValue(active ? end : 0);
      return;
    }
    let startAt: number | null = null;
    let frame = 0;
    const step = (now: number) => {
      if (startAt === null) startAt = now;
      const t = Math.min((now - startAt) / durationMs, 1);
      const eased = 1 - (1 - t) ** 2;
      setValue(Math.round(end * eased));
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, durationMs, active]);
  return value;
}

function useInViewOnce<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [visible, options]);
  return { ref, visible };
}

function JumpCard({
  title,
  delta,
  from,
  to,
  accent,
}: {
  title: string;
  delta: number;
  from: number;
  to: number;
  accent: "geo" | "aeo" | "seo";
}) {
  const { ref, visible } = useInViewOnce<HTMLDivElement>();
  const animatedDelta = useCountUp(delta, 1200, visible);
  const accentRing =
    accent === "geo"
      ? "ring-violet-400/40 shadow-[0_0_24px_rgba(139,92,246,0.25)]"
      : accent === "aeo"
        ? "ring-sky-400/40 shadow-[0_0_24px_rgba(56,189,248,0.2)]"
        : "ring-emerald-400/35 shadow-[0_0_24px_rgba(52,211,153,0.2)]";

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-white/[0.08] bg-[#0a1018]/95 p-5 ring-1 ${accentRing} animate-[fade-in-up_0.6s_ease-out_both]`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">{title}</p>
      <p className="mt-2 font-mono text-3xl font-bold tabular-nums text-emerald-300">
        +{animatedDelta}
      </p>
      <p className="mt-2 font-mono text-sm tabular-nums text-white/65">
        {from} → {to}
      </p>
    </div>
  );
}

export default function OptimizationExcellence() {
  const { currentLanguage } = useLanguage();
  const t = getPremiumTranslations(currentLanguage).optimizationExcellence;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ block: "start", behavior: "auto" });
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
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
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

        <div
          id="agr-multimedia-benchmark"
          className="mt-14 rounded-2xl border border-indigo-500/35 bg-gradient-to-br from-indigo-950/50 via-[#0a0e18] to-[#07070b] p-6 shadow-[0_0_48px_rgba(99,102,241,0.14)] md:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">{t.benchmarkEyebrow}</p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-white md:text-2xl">{t.benchmarkTitle}</h3>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80">{t.benchmarkTrust}</p>
          <p className="mt-5 rounded-xl border border-indigo-400/25 bg-indigo-500/[0.12] px-4 py-3 text-sm leading-relaxed text-indigo-50/95">
            {t.benchmarkSaasNote}
          </p>
          <p className="mt-3 text-xs text-white/45">{t.benchmarkReportMeta}</p>
          <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] shadow-inner">
            <AuditScreenshotPicture
              stem={AGR_BENCHMARK_STEM}
              alt={t.benchmarkImgAlt}
              className="h-auto w-full object-cover object-top"
            />
          </div>
          <div className="mt-6 overflow-x-auto rounded-xl border border-white/[0.08]">
            <table className="w-full min-w-[280px] border-collapse text-left text-sm">
              <caption className="sr-only">{t.benchmarkTableCaption}</caption>
              <thead>
                <tr className="border-b border-white/[0.1] bg-white/[0.03]">
                  <th scope="col" className="px-4 py-3 font-semibold text-white/90">
                    {t.colArea}
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-indigo-200">
                    {t.colScore}
                  </th>
                </tr>
              </thead>
              <tbody className="text-white/85">
                <tr className="border-b border-white/[0.06]">
                  <td className="px-4 py-3">{t.rowSeo}</td>
                  <td className="px-4 py-3 font-mono text-lg font-semibold tabular-nums text-emerald-300">
                    {SCORES_AGR.seo}
                  </td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="px-4 py-3">{t.rowAeo}</td>
                  <td className="px-4 py-3 font-mono text-lg font-semibold tabular-nums text-emerald-300">
                    {SCORES_AGR.aeo}
                  </td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="px-4 py-3">{t.rowGeo}</td>
                  <td className="px-4 py-3 font-mono text-lg font-semibold tabular-nums text-emerald-300">
                    {SCORES_AGR.geo}
                  </td>
                </tr>
                <tr className="bg-indigo-500/10">
                  <td className="px-4 py-3 font-semibold text-white">{t.rowOverall}</td>
                  <td className="px-4 py-3 font-mono text-xl font-bold tabular-nums text-indigo-100">
                    {SCORES_AGR.overall} — Grade A
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-emerald-500/25 bg-[#0c1018]/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-300/95">{t.tableCaption}</p>
              <p className="mt-1 text-xs text-white/45">{t.gradeLine}</p>
              <p className="mt-2 text-xs font-medium text-white/55">
                <span className="text-emerald-400/90">{t.caseSite}</span>
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
              Grade A · {SCORES_AFTER.overall}
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
                  <td className="px-4 py-3 font-mono text-lg font-semibold tabular-nums text-emerald-300">
                    {SCORES_AFTER.seo}
                  </td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="px-4 py-3">{t.rowAeo}</td>
                  <td className="px-4 py-3 font-mono text-lg font-semibold tabular-nums text-emerald-300">
                    {SCORES_AFTER.aeo}
                  </td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="px-4 py-3">{t.rowGeo}</td>
                  <td className="px-4 py-3 font-mono text-lg font-semibold tabular-nums text-emerald-300">
                    {SCORES_AFTER.geo}
                  </td>
                </tr>
                <tr className="bg-emerald-500/10">
                  <td className="px-4 py-3 font-semibold text-white">{t.rowOverall}</td>
                  <td className="px-4 py-3 font-mono text-xl font-bold tabular-nums text-emerald-200">
                    {SCORES_AFTER.overall}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-xl font-semibold text-white">{t.caseTitle}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75">{t.caseLead}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-red-500/40 bg-gradient-to-b from-red-950/35 to-[#0a0a0f] shadow-[0_0_40px_rgba(239,68,68,0.08)]">
              <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-red-500/30 bg-red-950/40 px-4 py-2.5">
                <span className="text-xs font-semibold uppercase tracking-wide text-red-100">{t.beforeLabel}</span>
                <span className="rounded-full border border-red-400/50 bg-red-600/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                  {t.beforeBadge}
                </span>
              </figcaption>
              <div className="px-3 pb-3 pt-3">
                <AuditScreenshotPicture
                  stem={FIXBIKE_IMG.beforeStem}
                  alt={t.imgAltBefore}
                  className="h-auto w-full rounded-lg border border-white/[0.06] object-cover object-top shadow-inner"
                />
                <p className="mt-2 text-center font-mono text-[11px] text-red-200/90">{t.statsBeforeSummary}</p>
                <p className="text-center text-[11px] text-white/40">{t.beforeDate}</p>
              </div>
            </figure>

            <figure className="overflow-hidden rounded-2xl border border-emerald-500/45 bg-gradient-to-b from-emerald-950/45 to-[#0a0a0f] shadow-[0_0_48px_rgba(52,211,153,0.12)]">
              <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-500/30 bg-emerald-950/35 px-4 py-2.5">
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-100">{t.afterLabel}</span>
                <span className="rounded-full border border-emerald-400/55 bg-emerald-600/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                  {t.afterBadge}
                </span>
              </figcaption>
              <div className="px-3 pb-3 pt-3">
                <AuditScreenshotPicture
                  stem={FIXBIKE_IMG.afterStem}
                  alt={t.imgAltAfter}
                  className="h-auto w-full rounded-lg border border-white/[0.06] object-cover object-top shadow-inner"
                />
                <p className="mt-2 text-center font-mono text-[11px] text-emerald-200/95">{t.statsAfterSummary}</p>
                <p className="text-center text-[11px] text-white/40">{t.afterDate}</p>
              </div>
            </figure>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/85">{t.caseNarrative}</p>

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/55">{t.jumpTitle}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <JumpCard title={t.rowGeo} delta={66} from={24} to={90} accent="geo" />
              <JumpCard title={t.rowAeo} delta={54} from={31} to={85} accent="aeo" />
              <JumpCard title={t.rowSeo} delta={17} from={71} to={88} accent="seo" />
            </div>
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
