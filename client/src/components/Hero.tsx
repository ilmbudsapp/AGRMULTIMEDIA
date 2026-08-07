import { Link } from "wouter";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPremiumTranslations } from "@/lib/premiumI18n";
import { ROUTES } from "@/lib/siteRoutes";

const PROMO_VIDEO = encodeURI("/Werbung Finito FULL HD COMPRESSO.mp4");
const VIDEO_POSTER = "/hero-workspace.webp";

const SECONDARY_BTN =
  "inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-3 text-[0.9375rem] font-medium text-white/90 transition hover:border-teal-500/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50";

export default function Hero() {
  const { currentLanguage } = useLanguage();
  const premium = getPremiumTranslations(currentLanguage);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches) v.pause();
      else void v.play().catch(() => {});
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "auto" });
  };

  return (
    <section
      id="home"
      className="premium-section relative scroll-mt-20 border-b border-[#2a2a30] pt-[5.25rem] pb-20 md:pt-32 md:pb-28"
    >
      <img
        src={VIDEO_POSTER}
        alt="AGR Multimedia — Webdesign Studio Geislingen an der Steige, Baden-Württemberg"
        aria-hidden
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="sr-only"
      />
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={VIDEO_POSTER}
        aria-hidden
      >
        <source src={PROMO_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070b]/90 via-[#07070b]/95 to-[#07070b]" aria-hidden />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div className="order-1 text-center lg:text-left animate-fade-in-up">
          <p className="studio-eyebrow">{premium.hero.eyebrow}</p>
          <h1
            id="hero-h1"
            className="font-display mt-5 scroll-mt-24 text-[2rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-[2.35rem] md:text-[2.75rem] lg:text-[3rem]"
            data-testid="hero-title"
          >
            {premium.hero.heading}
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg lg:mx-0"
            data-testid="hero-subtitle"
          >
            {premium.hero.subheading}
          </p>

          {premium.hero.bullets.length > 0 ? (
            <ul className="mx-auto mt-8 max-w-xl space-y-2 text-left text-sm text-white/70 lg:mx-0 md:text-base">
              {premium.hero.bullets.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="premium-cta min-h-[48px] rounded-full px-8 py-3 text-[0.9375rem] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60"
              data-testid="hero-cta-primary"
            >
              {premium.hero.primaryCta}
            </button>
            <Link href={ROUTES.portfolio} className={SECONDARY_BTN} data-testid="hero-cta-secondary">
              {premium.hero.secondaryCta}
            </Link>
          </div>
          <p className="mt-4 text-center text-xs text-white/55 sm:text-sm lg:text-left">{premium.hero.ctaMeta}</p>

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

        <figure className="order-2 w-full max-w-lg justify-self-center lg:max-w-none lg:justify-self-end animate-fade-in-up animate-fade-in-up-delay-2">
          <div className="premium-card relative overflow-hidden">
            <div className="relative aspect-video w-full">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={VIDEO_POSTER}
                aria-label={
                  currentLanguage === "de"
                    ? "Showreel — AGR Multimedia Webdesign Geislingen an der Steige"
                    : "Showreel — AGR Multimedia web design Geislingen an der Steige"
                }
              >
                <source src={PROMO_VIDEO} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070b]/70 to-transparent" />
            </div>
          </div>
          <figcaption className="mt-3 text-center text-xs text-white/45 lg:text-right">
            {currentLanguage === "de"
              ? "Showreel — Webdesign & Multimedia aus Geislingen an der Steige"
              : "Showreel — web design & multimedia from Geislingen an der Steige"}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
