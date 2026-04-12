import { useLanguage } from "@/contexts/LanguageContext";

const HERO_IMAGE = "/hero-background.png";

export default function Hero() {
  const { tSpec } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex flex-col justify-center pt-20 pb-16 md:pt-24 md:pb-20 bg-[#07070b]"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.35]"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070b]/80 via-[#07070b]/90 to-[#07070b]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-white leading-[1.15]"
          data-testid="hero-title"
        >
          {tSpec.hero.h1}
        </h1>
        <p
          className="mt-6 text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed"
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
