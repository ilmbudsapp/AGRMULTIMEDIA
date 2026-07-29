import {
  Search,
  Sparkles,
  Clock,
  UserCheck,
  Eye,
  ShieldCheck,
  MessageSquare,
  Smartphone,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";
import { getHomeKmuCopy } from "@/lib/homeKmuI18n";
import { NAV_SCROLL_ON_PAGE_HINT } from "@/lib/a11yLandmarks";

const WHY_ICONS = [Search, Sparkles, Clock, UserCheck] as const;
const VALUE_ICONS = [Eye, ShieldCheck, MessageSquare, Smartphone] as const;

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="mx-auto max-w-3xl text-center text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight"
    >
      {children}
    </h2>
  );
}

function SectionLead({ children }: { children: string }) {
  return (
    <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/75 md:text-lg md:leading-relaxed">
      {children}
    </p>
  );
}

const SECTION_CLASS = "premium-section scroll-mt-24 border-t border-[#333333] py-20 md:py-28";
const SECTION_ALT_CLASS = `${SECTION_CLASS} bg-white/[0.02]`;

export function HomeKmuWhyUs() {
  const { currentLanguage } = useLanguage();
  const copy = getHomeKmuCopy(currentLanguage);

  return (
    <section id="why-agr" className={SECTION_CLASS} aria-labelledby="kmu-why-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="kmu-why-heading">{copy.whyUs.title}</SectionHeading>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copy.whyUs.cards.map((card, index) => {
            const Icon = WHY_ICONS[index] ?? Search;
            return (
              <article
                key={card.title}
                className="premium-card premium-card-hover flex flex-col rounded-2xl p-7 md:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white md:text-xl">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75 md:text-base">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeKmuMoreThanDesign() {
  const { currentLanguage } = useLanguage();
  const copy = getHomeKmuCopy(currentLanguage);

  return (
    <section id="more-than-design" className={SECTION_ALT_CLASS} aria-labelledby="kmu-more-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="kmu-more-heading">{copy.moreThanDesign.title}</SectionHeading>
        <SectionLead>{copy.moreThanDesign.body}</SectionLead>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {copy.moreThanDesign.items.map((item, index) => {
            const Icon = VALUE_ICONS[index] ?? Eye;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-[#333333] bg-white/[0.02] px-6 py-7 text-center md:px-7"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white md:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70 md:text-base">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeKmuPortfolio() {
  const { currentLanguage } = useLanguage();
  const copy = getHomeKmuCopy(currentLanguage);

  return (
    <section id="portfolio" className={SECTION_CLASS} aria-labelledby="kmu-portfolio-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="kmu-portfolio-heading">{copy.portfolio.title}</SectionHeading>
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {copy.portfolio.projects.map((project) => (
            <article
              key={project.href}
              className="premium-card flex flex-col overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
            >
              {project.image ? (
                <figure className="aspect-[16/9] overflow-hidden border-b border-[#333333]">
                  <img
                    src={encodeURI(project.image)}
                    alt={project.imageAlt ?? project.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ) : (
                <div
                  className="flex aspect-[16/9] items-center justify-center border-b border-[#333333] bg-gradient-to-br from-slate-800/80 to-slate-900/90"
                  aria-hidden
                >
                  <Search className="h-16 w-16 text-white/20" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <h3 className="text-xl font-semibold text-white md:text-2xl">{project.name}</h3>
                <dl className="mt-5 space-y-4 text-sm md:text-base">
                  {(
                    [
                      [copy.portfolio.branchLabel, project.branch],
                      [copy.portfolio.goalLabel, project.goal],
                      [copy.portfolio.implementationLabel, project.implementation],
                      [copy.portfolio.resultLabel, project.result],
                    ] as const
                  ).map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-blue-300/80 md:text-sm">
                        {label}
                      </dt>
                      <dd className="mt-1.5 leading-relaxed text-white/80">{value}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button mt-7 inline-flex w-fit items-center gap-2 px-6 py-2.5 text-sm font-semibold md:text-base"
                >
                  {copy.portfolio.visitLabel}
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeKmuProcess() {
  const { currentLanguage } = useLanguage();
  const copy = getHomeKmuCopy(currentLanguage);

  return (
    <section id="process" className={SECTION_ALT_CLASS} aria-labelledby="kmu-process-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="kmu-process-heading">{copy.process.title}</SectionHeading>
        <ol className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {copy.process.steps.map((step, index) => (
            <li
              key={step.title}
              className="premium-card relative flex flex-col rounded-2xl p-7 md:p-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-200">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white md:text-xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function HomeKmuTrustPartner() {
  const { currentLanguage } = useLanguage();
  const copy = getHomeKmuCopy(currentLanguage);

  return (
    <section id="trust-partner" className={SECTION_CLASS} aria-labelledby="kmu-trust-heading">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading id="kmu-trust-heading">{copy.trustPartner.title}</SectionHeading>
        <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg md:leading-relaxed">
          {copy.trustPartner.body}
        </p>
      </div>
    </section>
  );
}

export function HomeKmuFinalCta() {
  const { currentLanguage } = useLanguage();
  const copy = getHomeKmuCopy(currentLanguage);
  const lang = currentLanguage as Language;
  const scrollHint = NAV_SCROLL_ON_PAGE_HINT[lang] ?? NAV_SCROLL_ON_PAGE_HINT.en;

  return (
    <section id="home-final-cta" className={`${SECTION_ALT_CLASS} scroll-mt-24`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-400/30 bg-gradient-to-br from-blue-600/25 via-blue-500/15 to-cyan-400/15 px-8 py-14 text-center shadow-[0_24px_60px_rgba(0,0,0,0.4)] md:px-14 md:py-20">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {copy.finalCta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {copy.finalCta.body}
          </p>
          <a
            href="#contact"
            aria-label={`${copy.finalCta.button} ${scrollHint}`}
            className="premium-button mt-10 inline-flex items-center gap-2 px-10 py-4 text-base font-semibold tracking-[0.01em] text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)] transition duration-200 hover:scale-[1.03] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70 md:text-lg"
          >
            {copy.finalCta.button}
            <ArrowRight className="h-5 w-5" aria-hidden />
          </a>
          <p className="mt-4 text-sm text-white/75">{copy.finalCta.meta}</p>
        </div>
      </div>
    </section>
  );
}
