import { useLanguage } from "@/contexts/LanguageContext";

const HERO_IMAGE = "/hero-workspace.png";

export default function Hero() {
  const { tSpec } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex flex-col justify-center bg-[#c8ced8] pt-20 pb-16 md:pt-24 md:pb-20"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-[center_28%] sm:bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        {/* Lighter scrim so the office photo stays visible; enough contrast for white copy */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/28 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h1
          className="text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.55)] sm:text-3xl md:text-4xl lg:text-[2.75rem]"
          data-testid="hero-title"
        >
          {tSpec.hero.h1}
        </h1>
        <p
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 [text-shadow:0_1px_18px_rgba(0,0,0,0.45)] sm:text-lg"
          data-testid="hero-subtitle"
        >
          {tSpec.hero.subheadline}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto min-h-[48px] rounded-full bg-white px-8 py-3 text-[0.9375rem] font-semibold text-[#0a0a0f] transition-colors hover:bg-white/90"
            data-testid="hero-cta-primary"
          >
            {tSpec.hero.ctaPrimary}
          </button>
          <button
            type="button"
            onClick={() => scrollTo("portfolio")}
            className="w-full sm:w-auto min-h-[48px] rounded-full border border-white/20 bg-transparent px-8 py-3 text-[0.9375rem] font-medium text-white/90 hover:bg-white/5"
            data-testid="hero-cta-secondary"
          >
            {tSpec.hero.ctaSecondary}
          </button>
        </div>

        <p className="mt-10 text-[0.6875rem] sm:text-xs text-white/40 tracking-[0.14em] uppercase">
          {tSpec.hero.availableIn}
        </p>
      </div>
    </section>
  );
}
