import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

// Hero background: local image – AI workspace with brain graphic, screens, tech.
const HERO_IMAGE = "/hero-background.png";

export default function Hero() {
  const { tSpec } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Background image – CSS + img so it always shows */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden
      >
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
          loading="eager"
          fetchPriority="high"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/50" aria-hidden />
      </div>

      {/* Gradient for text contrast – centre stays readable, edges show AI graphic */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(165deg, rgba(10,10,15,0.85) 0%, rgba(10,10,15,0.75) 30%, rgba(10,10,15,0.7) 50%, rgba(10,10,15,0.85) 100%)",
        }}
      />

      {/* Main spotlight from top-center (stage light effect) */}
      <div
        className="absolute inset-0 animate-beam opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(99, 102, 241, 0.35) 0%, rgba(139, 92, 246, 0.2) 30%, transparent 60%)",
        }}
      />

      {/* Secondary glow – bottom right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 90% 100%, rgba(59, 130, 246, 0.25) 0%, transparent 50%)",
        }}
      />

      {/* Vivid orbs – large, blurred, slow float */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[10%] right-[15%] w-[min(80vw,600px)] h-[min(80vw,600px)] rounded-full blur-[100px] animate-float opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, rgba(139, 92, 246, 0.4) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[20%] left-[10%] w-[min(60vw,450px)] h-[min(60vw,450px)] rounded-full blur-[90px] animate-float opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(99, 102, 241, 0.3) 50%, transparent 70%)",
            animationDelay: "-5s",
          }}
        />
        <div
          className="absolute top-[50%] left-[50%] w-[min(50vw,400px)] h-[min(50vw,400px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] animate-float opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(251, 113, 133, 0.35) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)",
            animationDelay: "-10s",
          }}
        />
      </div>

      {/* Subtle grid overlay (design / creative vibe) */}
      <div className="hero-grid absolute inset-0 opacity-40 pointer-events-none" />

      {/* Dark overlay in center so all text is readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 45%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 50%, transparent 75%)",
        }}
      />

      {/* Vignette edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 35%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-5 sm:mb-6 leading-[1.15] tracking-tight animate-fade-in-up"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.5)" }}
          data-testid="hero-title"
        >
          {tSpec.hero.h1}
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in-up font-medium"
          style={{ animationDelay: "0.1s", textShadow: "0 1px 10px rgba(0,0,0,0.8), 0 2px 20px rgba(0,0,0,0.6)" }}
          data-testid="hero-subtitle"
        >
          {tSpec.hero.subheadline}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
          style={{ animationDelay: "0.2s" }}
        >
          <Link href="/#contact" className="w-full sm:w-auto">
            <button
              className="w-full sm:w-auto min-h-[48px] sm:min-h-0 bg-white text-[#0a0a0f] px-6 sm:px-8 py-4 rounded-2xl text-base sm:text-lg font-bold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              data-testid="hero-cta-primary"
            >
              {tSpec.hero.ctaPrimary}
            </button>
          </Link>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="w-full sm:w-auto min-h-[48px] sm:min-h-0 glass-effect text-white px-6 sm:px-8 py-4 rounded-2xl text-base sm:text-lg font-bold border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
            data-testid="hero-cta-secondary"
          >
            {tSpec.hero.ctaSecondary}
          </button>
        </div>

        <p
          className="mt-6 sm:mt-8 text-white/60 text-xs sm:text-sm font-medium uppercase tracking-widest animate-fade-in-up"
          style={{ animationDelay: "0.35s", textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
        >
          {tSpec.hero.availableIn}
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
          data-testid="scroll-down-button"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
