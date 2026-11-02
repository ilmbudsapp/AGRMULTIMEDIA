import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPremiumTranslations } from "@/lib/premiumI18n";
import { ROUTES } from "@/lib/siteRoutes";

const HERO_IMAGE = "/hero-cream-studio.jpg";

const SECONDARY_BTN =
  "inline-flex min-h-[48px] items-center justify-center rounded-full border border-[var(--studio-border)] bg-[var(--studio-surface)] px-8 py-3 text-[0.9375rem] font-medium text-[var(--studio-text)] transition hover:border-[var(--studio-accent)] hover:text-[var(--studio-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--studio-accent)]/40";

export default function Hero() {
  const { currentLanguage } = useLanguage();
  const premium = getPremiumTranslations(currentLanguage);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "auto" });
  };

  return (
    <section
      id="home"
      className="premium-section relative overflow-hidden scroll-mt-20 border-b border-[var(--studio-border)] pt-[5.25rem] pb-16 md:pt-24 md:pb-24 lg:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,rgba(196,165,116,0.22),transparent_62%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(139,94,52,0.1),transparent_70%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-8">
        <div className="order-2 text-center lg:order-1 lg:text-left animate-fade-in-up">
          <p className="studio-eyebrow">{premium.hero.eyebrow}</p>
          <h1
            id="hero-h1"
            className="font-display mt-5 scroll-mt-24 text-[2.45rem] font-medium leading-[1.06] tracking-tight text-[var(--studio-text)] sm:text-[3.1rem] md:text-[3.55rem] lg:text-[4rem]"
            data-testid="hero-title"
          >
            {premium.hero.heading}
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--studio-muted)] md:text-lg lg:mx-0"
            data-testid="hero-subtitle"
          >
            {premium.hero.subheading}
          </p>

          {premium.hero.bullets.length > 0 ? (
            <ul className="mx-auto mt-8 max-w-xl space-y-2 text-left text-sm text-[var(--studio-muted)] lg:mx-0 md:text-base">
              {premium.hero.bullets.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--studio-accent)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="premium-cta min-h-[48px] rounded-full px-8 py-3 text-[0.9375rem] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--studio-accent)]/50"
              data-testid="hero-cta-primary"
            >
              {premium.hero.primaryCta}
            </button>
            <Link href={ROUTES.portfolio} className={SECONDARY_BTN} data-testid="hero-cta-secondary">
              {premium.hero.secondaryCta}
            </Link>
          </div>
          <p className="mt-4 text-center text-xs text-[var(--studio-muted)] sm:text-sm lg:text-left">
            {premium.hero.ctaMeta}
          </p>

          {premium.hero.trustPills.length > 0 ? (
            <div
              className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
              aria-label={currentLanguage === "de" ? "Vertrauenssignale" : "Trust signals"}
            >
              {premium.hero.trustPills.map((pill) => (
                <span key={pill} className="studio-trust-pill">
                  {pill}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <figure className="order-1 w-full justify-self-center lg:order-2 lg:justify-self-end animate-fade-in-up animate-fade-in-up-delay-2">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-[28px] border border-[rgba(139,94,52,0.22)] sm:-inset-4"
              aria-hidden
            />
            <div className="premium-card relative overflow-hidden p-1.5 sm:p-2">
              <img
                src={HERO_IMAGE}
                alt={
                  currentLanguage === "de"
                    ? "AGR Multimedia — Premium Webdesign-Studio in Geislingen an der Steige"
                    : "AGR Multimedia — premium web design studio in Geislingen an der Steige"
                }
                width={1600}
                height={900}
                className="aspect-[16/10] w-full rounded-[16px] object-cover"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
          <figcaption className="mt-4 text-center text-xs tracking-wide text-[var(--studio-muted)] lg:text-right">
            {currentLanguage === "de"
              ? "Studioatmosphäre — Webdesign & Multimedia aus Geislingen an der Steige"
              : "Studio atmosphere — web design & multimedia from Geislingen an der Steige"}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
