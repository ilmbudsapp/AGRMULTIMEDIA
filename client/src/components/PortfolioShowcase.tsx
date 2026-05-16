import { ExternalLink, LayoutGrid, Clapperboard } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const TONIS_LIVE_URL = "https://www.tonis-autopflege-goeppingen.de";
const TONIS_IMAGE = "/demo/tonis-autopflege/hero-poster.webp";
const KICKSTARTER_IMAGE = "/Case Studio/06.jpg";

export default function PortfolioShowcase() {
  const { tSpec } = useLanguage();
  const p = tSpec.portfolioPage;

  return (
    <section className="py-16 md:py-24" aria-labelledby="portfolio-showcase-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">{p.pageTitle}</p>
          <h1
            id="portfolio-showcase-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl"
          >
            {p.pageTitle}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">{p.pageLead}</p>
        </header>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-[0_12px_48px_rgba(0,0,0,0.35)]">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={TONIS_IMAGE}
                alt={p.tonis.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-[#5da3f9]/40 bg-[#5da3f9]/15 px-3 py-1 text-xs font-semibold text-[#93c5fd]">
                <LayoutGrid className="h-3.5 w-3.5" aria-hidden />
                {p.pillarWeb}
              </span>
              <span className="absolute right-4 top-4 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                {p.tonis.gradeBadge}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <h2 className="text-xl font-semibold text-white md:text-2xl">{p.tonis.title}</h2>
              <p className="mt-2 text-sm font-medium text-[#5da3f9] md:text-base">{p.tonis.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70 md:text-base">{p.tonis.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={TONIS_LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#0a0a0f] transition hover:bg-white/90"
                >
                  {p.tonis.liveCta}
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
                <Link
                  href="/demo/tonis-autopflege"
                  className="inline-flex items-center rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:border-white/40 hover:text-white"
                >
                  {p.tonis.demoCta}
                </Link>
              </div>
            </div>
          </article>

          <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-[0_12px_48px_rgba(0,0,0,0.35)]">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={encodeURI(KICKSTARTER_IMAGE)}
                alt={p.kickstarter.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-100">
                <Clapperboard className="h-3.5 w-3.5" aria-hidden />
                {p.pillarVideo}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <h2 className="text-xl font-semibold text-white md:text-2xl">{p.kickstarter.title}</h2>
              <p className="mt-2 text-sm font-medium text-amber-200/90 md:text-base">{p.kickstarter.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70 md:text-base">{p.kickstarter.description}</p>
              <div className="mt-6">
                <Link
                  href="/videoproduktion"
                  className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#0a0a0f] transition hover:bg-white/90"
                >
                  {p.kickstarter.servicesCta}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
