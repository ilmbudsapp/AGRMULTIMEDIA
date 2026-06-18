import { Link } from "wouter";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPremiumTranslations } from "@/lib/premiumI18n";
import { ROUTES } from "@/lib/siteRoutes";

/** Public folder; spaces encoded for reliable load */
const PROMO_VIDEO = encodeURI("/Werbung Finito FULL HD COMPRESSO.mp4");
/** WebP poster first for LCP; PNG fallback via preload in index.html if needed */
const VIDEO_POSTER = "/hero-workspace.webp";

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
      className="premium-section relative scroll-mt-20 border-b border-[#333333] pt-[5.25rem] pb-24 md:pt-32 md:pb-32"
    >
      <img
        src={VIDEO_POSTER}
        alt="AGR Multimedia Webdesign Studio Geislingen an der Steige — Showreel Vorschau"
        aria-hidden
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="sr-only"
      />
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/70 to-[#0a0a0a]/95" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_20%,rgba(59,130,246,0.2),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="order-1 text-center lg:order-none lg:text-left animate-fade-in-up">
          <h1
            id="hero-h1"
            className="scroll-mt-24 text-[2rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-[2.35rem] md:text-5xl lg:text-[3.25rem]"
            data-testid="hero-title"
          >
            {premium.hero.heading}
          </h1>
          <p
            className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/80 md:text-lg lg:mx-0 lg:max-w-[36rem]"
            data-testid="hero-subtitle"
          >
            {premium.hero.subheading}
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row lg:justify-start">
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="premium-cta min-h-[48px] rounded-full px-8 py-3 text-[0.9375rem] font-semibold shadow-[0_0_30px_rgba(59,130,246,0.35)] transition duration-200 hover:scale-[1.03] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70"
              data-testid="hero-cta-primary"
            >
              {premium.hero.primaryCta}
            </button>
            <button
              type="button"
              onClick={() => scrollTo("portfolio")}
              className="min-h-[48px] rounded-full border border-white/20 bg-white/5 px-8 py-3 text-[0.9375rem] font-medium text-white backdrop-blur-sm transition duration-200 hover:scale-[1.02] hover:border-blue-300/50"
              data-testid="hero-cta-secondary"
            >
              {premium.hero.secondaryCta}
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-white/70 sm:text-sm lg:text-left">{premium.hero.ctaMeta}</p>
          <p className="mt-4 text-center text-sm lg:text-left">
            <Link href={ROUTES.webdesignGeislingen} className="text-blue-200/90 underline-offset-2 hover:underline">
              {currentLanguage === "de"
                ? "Webdesign Geislingen an der Steige im Detail"
                : "Web design in Geislingen an der Steige — details"}
            </Link>
          </p>
        </div>

        <figure className="order-2 w-full max-w-lg justify-self-center p-2 sm:p-3 lg:order-none lg:max-w-none lg:justify-self-end animate-fade-in-up animate-fade-in-up-delay-2">
          <div className="premium-card relative overflow-hidden shadow-[0_2px_4px_rgba(15,23,42,0.05),0_14px_32px_-8px_rgba(15,23,42,0.22),0_32px_64px_-14px_rgba(15,23,42,0.32),0_52px_88px_-22px_rgba(15,23,42,0.24)]">
            <div className="relative aspect-video w-full">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={VIDEO_POSTER}
                aria-label="Showreel — preview without sound"
              >
                <source src={PROMO_VIDEO} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
          <figcaption className="mt-2 text-center text-xs text-white/55">
            Showreel preview — studio montage without sound (AGR Multimedia).
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
