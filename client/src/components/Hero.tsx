import { ChevronDown } from "lucide-react";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGE = "/hero-background.png";
const EMAIL = "agron6922@gmail.com";
const EMAIL_LINK = `mailto:${EMAIL}`;

export default function Hero() {
  const { tSpec, currentLanguage } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const typedRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const titleBlockRef = useRef<HTMLHeadingElement>(null);

  const { h1Prefix, h1Typed } = tSpec.hero;
  const useTyping = Boolean(h1Prefix && h1Typed);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const parallax = parallaxRef.current;
    if (!section || !parallax) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const st = gsap.to(parallax, {
      yPercent: -28,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      st.scrollTrigger?.kill();
      st.kill();
    };
  }, [currentLanguage]);

  useEffect(() => {
    if (!useTyping || !typedRef.current) return;
    const typedEl = typedRef.current;
    const cursorEl = cursorRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    typedEl.classList.remove("type-text--complete");
    typedEl.textContent = "";

    if (reduce) {
      typedEl.textContent = h1Typed!;
      typedEl.classList.add("type-text--complete");
      if (cursorEl) cursorEl.style.opacity = "0";
      return;
    }

    if (cursorEl) {
      cursorEl.style.opacity = "1";
      gsap.fromTo(cursorEl, { opacity: 1 }, { opacity: 0.22, repeat: -1, yoyo: true, duration: 0.48 });
    }

    const prog = { v: 0 };
    const tl = gsap.timeline();
    tl.to(prog, {
      v: 1,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        const len = Math.round(h1Typed!.length * prog.v);
        typedEl.textContent = h1Typed!.slice(0, len);
      },
      onComplete: () => {
        typedEl.classList.add("type-text--complete");
        if (cursorEl) gsap.to(cursorEl, { opacity: 0, duration: 0.25, overwrite: true });
      },
    });

    return () => {
      tl.kill();
      if (cursorEl) gsap.killTweensOf(cursorEl);
    };
  }, [useTyping, h1Typed, currentLanguage]);

  useLayoutEffect(() => {
    if (!titleBlockRef.current || !useTyping) return;
    const el = titleBlockRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", delay: 0.05 },
    );
  }, [useTyping, currentLanguage]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#06060d]"
    >
      <div
        ref={parallaxRef}
        className="hero-bg-parallax absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
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
        <div className="absolute inset-0 bg-[#06060d]/20" aria-hidden />
      </div>

      <div
        className="hero-premium-mesh absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(145deg, rgba(76, 29, 149, 0.42) 0%, rgba(15, 23, 42, 0.55) 38%, rgba(30, 27, 75, 0.45) 62%, rgba(2, 6, 23, 0.75) 100%),
            radial-gradient(ellipse 100% 80% at 50% -10%, rgba(99, 102, 241, 0.35) 0%, transparent 55%),
            radial-gradient(ellipse 70% 50% at 100% 80%, rgba(59, 130, 246, 0.22) 0%, transparent 50%)
          `,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(165deg, rgba(6,6,13,0.5) 0%, rgba(6,6,13,0.35) 35%, rgba(6,6,13,0.3) 55%, rgba(6,6,13,0.65) 100%)",
        }}
      />

      <div
        className="absolute inset-0 animate-beam opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(129, 140, 248, 0.4) 0%, rgba(139, 92, 246, 0.18) 32%, transparent 58%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 92% 100%, rgba(56, 189, 248, 0.2) 0%, transparent 52%)",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[10%] right-[15%] w-[min(80vw,600px)] h-[min(80vw,600px)] rounded-full blur-[100px] animate-float opacity-45"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.55) 0%, rgba(139, 92, 246, 0.35) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[20%] left-[10%] w-[min(60vw,450px)] h-[min(60vw,450px)] rounded-full blur-[90px] animate-float opacity-38"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, rgba(99, 102, 241, 0.28) 50%, transparent 70%)",
            animationDelay: "-5s",
          }}
        />
        <div
          className="absolute top-[50%] left-[50%] w-[min(50vw,400px)] h-[min(50vw,400px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] animate-float opacity-28"
          style={{
            background:
              "radial-gradient(circle, rgba(192, 132, 252, 0.3) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)",
            animationDelay: "-10s",
          }}
        />
      </div>

      <div className="hero-grid absolute inset-0 opacity-35 pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 45%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.22) 50%, transparent 76%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 32%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {useTyping ? (
          <h1
            ref={titleBlockRef}
            className="hero-title text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-5 sm:mb-6 leading-[1.15] tracking-tight opacity-0"
            style={{
              textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.5)",
            }}
            data-testid="hero-title"
            aria-label={tSpec.hero.h1}
          >
            <span className="hero-title__prefix">{h1Prefix}</span>
            <span ref={typedRef} id="dynamic-text" className="type-text" />
            <span ref={cursorRef} className="typing-cursor cursor font-light text-violet-200/90" aria-hidden>
              |
            </span>
          </h1>
        ) : (
          <h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-5 sm:mb-6 leading-[1.15] tracking-tight animate-fade-in-up"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.5)" }}
            data-testid="hero-title"
          >
            {tSpec.hero.h1}
          </h1>
        )}
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
          <a href={EMAIL_LINK} className="w-full sm:w-auto">
            <button
              className="w-full sm:w-auto min-h-[48px] sm:min-h-0 bg-white/95 text-[#0a0a0f] px-6 sm:px-8 py-4 rounded-2xl text-base sm:text-lg font-bold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(167,139,250,0.35)] backdrop-blur-sm border border-white/20"
              data-testid="hero-cta-primary"
            >
              {tSpec.hero.ctaPrimary}
            </button>
          </a>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="w-full sm:w-auto min-h-[48px] sm:min-h-0 glass-premium-cta text-white px-6 sm:px-8 py-4 rounded-2xl text-base sm:text-lg font-bold border border-white/25 hover:bg-white/12 hover:border-violet-300/40 transition-all duration-300"
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
