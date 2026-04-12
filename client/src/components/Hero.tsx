import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

/** Public folder; spaces encoded for reliable load */
const PROMO_VIDEO = encodeURI("/Werbung Finito FULL HD COMPRESSO.mp4");
const VIDEO_POSTER = "/hero-workspace.png";

export default function Hero() {
  const { tSpec } = useLanguage();
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative scroll-mt-20 border-b border-neutral-200/80 bg-gradient-to-br from-[#faf9f7] via-[#f3f2ee] to-[#e8eaef] pt-[5.25rem] pb-14 md:pt-28 md:pb-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_20%,rgba(99,102,241,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="order-1 text-center lg:order-none lg:text-left">
          <h1
            className="text-[1.65rem] font-semibold leading-[1.15] tracking-tight text-neutral-900 sm:text-3xl md:text-[2.15rem] lg:text-[2.35rem]"
            data-testid="hero-title"
          >
            {tSpec.hero.h1}
          </h1>
          <p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-600 lg:mx-0 lg:max-w-[28rem]"
            data-testid="hero-subtitle"
          >
            {tSpec.hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="min-h-[48px] rounded-full bg-neutral-900 px-8 py-3 text-[0.9375rem] font-semibold text-white shadow-sm transition hover:bg-neutral-800"
              data-testid="hero-cta-primary"
            >
              {tSpec.hero.ctaPrimary}
            </button>
            <button
              type="button"
              onClick={() => scrollTo("portfolio")}
              className="min-h-[48px] rounded-full border border-neutral-300 bg-white/80 px-8 py-3 text-[0.9375rem] font-medium text-neutral-800 shadow-sm backdrop-blur-sm transition hover:bg-white"
              data-testid="hero-cta-secondary"
            >
              {tSpec.hero.ctaSecondary}
            </button>
          </div>

          <p className="mt-8 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-neutral-400">
            {tSpec.hero.availableIn}
          </p>
        </div>

        <div className="order-2 w-full max-w-lg justify-self-center p-2 sm:p-3 lg:order-none lg:max-w-none lg:justify-self-end">
          <div className="relative overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_2px_4px_rgba(15,23,42,0.05),0_14px_32px_-8px_rgba(15,23,42,0.22),0_32px_64px_-14px_rgba(15,23,42,0.32),0_52px_88px_-22px_rgba(15,23,42,0.24)] ring-1 ring-neutral-900/10">
            <div className="relative aspect-video w-full">
              <video
                ref={videoRef}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
