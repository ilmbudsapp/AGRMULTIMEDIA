import {
  Building2,
  Car,
  Hammer,
  TreePine,
  Truck,
  Bike,
  UtensilsCrossed,
  Users,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";
import { getHomeKmuCopy } from "@/lib/homeKmuI18n";
import { NAV_SCROLL_ON_PAGE_HINT } from "@/lib/a11yLandmarks";

const AUDIENCE_ICONS = [Building2, Car, Hammer, TreePine, Truck, Bike, UtensilsCrossed, Users] as const;

import { ROUTES } from "@/lib/siteRoutes";

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className="text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-4xl">
      {children}
    </h2>
  );
}

export function HomeKmuIntro() {
  const { currentLanguage } = useLanguage();
  const copy = getHomeKmuCopy(currentLanguage);

  return (
    <section
      id="about-agr"
      className="premium-section scroll-mt-24 border-t border-[#333333] py-14 md:py-18"
      aria-labelledby="kmu-intro-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="kmu-intro-heading" className="sr-only">
          Über AGR Multimedia
        </h2>
        <p className="text-base leading-relaxed text-white/80 md:text-lg">{copy.intro.who}</p>
        <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">{copy.intro.services}</p>
        <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">{copy.intro.audience}</p>
        <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">{copy.intro.why}</p>
        <p className="mt-6">
          <Link
            href={ROUTES.webdesignGeislingen}
            className="text-sm font-medium text-blue-200 underline-offset-2 hover:underline md:text-base"
          >
            {copy.intro.landingLinkLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}

export function HomeKmuAudience() {
  const { currentLanguage } = useLanguage();
  const copy = getHomeKmuCopy(currentLanguage);

  return (
    <section
      id="target-audience"
      className="premium-section scroll-mt-24 border-t border-[#333333] bg-white/[0.02] py-16 md:py-20"
      aria-labelledby="kmu-audience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="kmu-audience-heading">{copy.audience.title}</SectionHeading>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.audience.cards.map((card, index) => {
            const Icon = AUDIENCE_ICONS[index] ?? Building2;
            return (
              <div
                key={card.label}
                className="premium-card flex items-center gap-3 rounded-xl border border-[#333333] bg-white/[0.03] px-4 py-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-sm font-medium leading-snug text-white/90 md:text-base">{card.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeKmuDeliverables() {
  const { currentLanguage } = useLanguage();
  const copy = getHomeKmuCopy(currentLanguage);

  return (
    <section
      id="deliverables"
      className="premium-section scroll-mt-24 border-t border-[#333333] py-16 md:py-20"
      aria-labelledby="kmu-deliverables-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="kmu-deliverables-heading">{copy.deliverables.title}</SectionHeading>
        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {copy.deliverables.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-[#333333] bg-white/[0.02] px-4 py-3.5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400/90" aria-hidden />
              <span className="text-sm leading-relaxed text-white/85 md:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeKmuPricing() {
  const { currentLanguage } = useLanguage();
  const copy = getHomeKmuCopy(currentLanguage);

  return (
    <section
      id="pricing"
      className="premium-section scroll-mt-24 border-t border-[#333333] bg-white/[0.02] py-16 md:py-20"
      aria-labelledby="kmu-pricing-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="kmu-pricing-heading">{copy.pricing.title}</SectionHeading>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {copy.pricing.packages.map((pkg, index) => (
            <article
              key={pkg.name}
              className={`flex flex-col rounded-2xl border bg-white/[0.02] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-8 ${
                index === 1 ? "border-blue-400/50 ring-1 ring-blue-400/20" : "border-[#333333]"
              }`}
            >
              <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-blue-300">{pkg.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">{pkg.description}</p>
              {pkg.includes.length > 0 && (
                <ul className="mt-6 flex-1 space-y-2.5">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/80" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeKmuPortfolio() {
  const { currentLanguage } = useLanguage();
  const copy = getHomeKmuCopy(currentLanguage);

  return (
    <section
      id="portfolio"
      className="premium-section scroll-mt-24 border-t border-[#333333] py-16 md:py-20"
      aria-labelledby="kmu-portfolio-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="kmu-portfolio-heading">{copy.portfolio.title}</SectionHeading>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {copy.portfolio.projects.map((project) => (
            <article
              key={project.href}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#333333] bg-white/[0.02] shadow-[0_8px_40px_rgba(0,0,0,0.2)]"
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
                  <Car className="h-16 w-16 text-white/25" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-white md:text-xl">{project.name}</h3>
                <dl className="mt-4 space-y-2 text-sm text-white/75">
                  <div>
                    <dt className="font-medium text-white/55">{copy.portfolio.branchLabel}</dt>
                    <dd className="mt-0.5">{project.branch}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-white/55">{copy.portfolio.workLabel}</dt>
                    <dd className="mt-0.5 leading-relaxed">{project.work}</dd>
                  </div>
                </dl>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button mt-6 inline-flex w-fit items-center gap-2"
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
    <section
      id="process"
      className="premium-section scroll-mt-24 border-t border-[#333333] bg-white/[0.02] py-16 md:py-20"
      aria-labelledby="kmu-process-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="kmu-process-heading">{copy.process.title}</SectionHeading>
        <ol className="mt-10 space-y-4">
          {copy.process.steps.map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-4 rounded-xl border border-[#333333] bg-white/[0.02] px-5 py-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-sm font-semibold text-blue-200">
                {index + 1}
              </span>
              <span className="pt-1.5 text-sm leading-relaxed text-white/85 md:text-base">{step}</span>
            </li>
          ))}
        </ol>
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
    <section id="home-final-cta" className="premium-section scroll-mt-24 border-t border-[#333333] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-400/40 bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-cyan-400/20 px-6 py-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:px-10 md:py-14">
          <h2 className="mx-auto max-w-3xl text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-4xl">
            {copy.finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">{copy.finalCta.body}</p>
          <a
            href="#contact"
            aria-label={`${copy.finalCta.button} ${scrollHint}`}
            className="premium-button mt-8 inline-flex items-center gap-2 px-8 py-3 text-base font-semibold tracking-[0.01em] text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)] transition duration-200 hover:scale-[1.03] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70 md:text-lg"
          >
            {copy.finalCta.button}
            <ArrowRight className="h-5 w-5" aria-hidden />
          </a>
          <p className="mt-3 text-xs text-white/80 md:text-sm">{copy.finalCta.meta}</p>
        </div>
      </div>
    </section>
  );
}
