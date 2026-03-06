import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroVideo from "@assets/02_1755562690692.mp4";

export default function Hero() {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const words = t.hero.title.split(" ");
  const gradientWord = words[1] ?? words[0] ?? "";
  const restWords = words.length > 2 ? words.slice(2).join(" ") : "";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Background video – dobro vidljiv (~50–55%) */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" aria-hidden />
      </div>

      {/* Base gradient – blag da video ostane izražen */}
      <div
        className="absolute inset-0 opacity-55"
        style={{
          background:
            "linear-gradient(165deg, #0a0a0f 0%, #0f0f1a 25%, #12122a 50%, #0d0d18 75%, #0a0a0f 100%)",
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
        <p
          className="text-white/95 text-sm uppercase tracking-[0.3em] font-semibold mb-6 animate-fade-in-up"
          style={{ textShadow: "0 0 24px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)" }}
        >
          Multimedia · Design · Development
        </p>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight animate-fade-in-up"
          style={{ animationDelay: "0.05s", textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.5)" }}
          data-testid="hero-title"
        >
          {words[0]}{" "}
          <span className="gradient-text-warm" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.5)" }}>{gradientWord}</span>
          {restWords && (
            <>
              <br />
              <span className="text-white" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.5)" }}>{restWords}</span>
            </>
          )}
        </h1>
        <p
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up font-medium"
          style={{ animationDelay: "0.15s", textShadow: "0 1px 10px rgba(0,0,0,0.8), 0 2px 20px rgba(0,0,0,0.6)" }}
          data-testid="hero-subtitle"
        >
          {t.hero.subtitle}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          <button
            onClick={() => scrollToSection("services")}
            className="group relative bg-white text-navy px-10 py-4 rounded-2xl text-lg font-bold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-electric-blue/25"
            data-testid="hero-services-cta"
          >
            <span className="relative z-10">{t.hero.servicesButton}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
            <span className="absolute inset-0 bg-white group-hover:opacity-0 transition-opacity duration-300 z-0" />
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="glass-effect text-white px-10 py-4 rounded-2xl text-lg font-bold border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
            data-testid="hero-portfolio-cta"
          >
            {t.hero.portfolioButton}
          </button>
        </div>

        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <p
            className="text-gray-300 text-sm font-medium uppercase tracking-widest mb-4"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
            data-testid="hero-location-title"
          >
            {t.hero.locationTitle}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300 font-medium" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>
            {t.hero.locations.map((location, index) => (
              <span key={index} className="flex items-center gap-6">
                <span>{location}</span>
                {index < t.hero.locations.length - 1 && (
                  <span className="text-electric-blue/50">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
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
