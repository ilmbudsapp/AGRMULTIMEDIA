import { useLayoutEffect, useRef, type MouseEvent } from "react";
import { Link } from "wouter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPremiumTranslations } from "@/lib/premiumI18n";
import { ROUTES } from "@/lib/siteRoutes";
import AnimatedHeading from "./AnimatedHeading";

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGE = "/hero-cream-studio.jpg";

const SECONDARY_BTN =
  "inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-[var(--studio-border)] bg-[var(--studio-surface)] px-8 py-3 text-[0.9375rem] font-medium text-[var(--studio-text)] transition hover:border-[var(--studio-accent)] hover:text-[var(--studio-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--studio-accent)]/40 sm:w-auto";

export default function Hero() {
  const { currentLanguage } = useLanguage();
  const premium = getPremiumTranslations(currentLanguage);
  const rootRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "auto" });
  };

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      if (progressRef.current) progressRef.current.style.width = "100%";
      return;
    }

    const ctx = gsap.context(() => {
      const items = root.querySelectorAll<HTMLElement>("[data-hero-item]");
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (items.length) {
        tl.fromTo(
          items,
          { y: 24, opacity: 0, filter: "blur(10px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, stagger: 0.08 },
          0,
        );
      }
      if (frameRef.current) {
        tl.fromTo(
          frameRef.current,
          { y: 36, opacity: 0, rotate: -1.4, filter: "blur(12px)" },
          { y: 0, opacity: 1, rotate: 0, filter: "blur(0px)", duration: 1.15 },
          0.15,
        );
      }
      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { scale: 1.14, filter: "blur(18px)" },
          { scale: 1, filter: "blur(0px)", duration: 1.45, ease: "power2.out" },
          0.18,
        );
        gsap.to(imageRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: 0.6 },
        });
      }
      if (progressRef.current) {
        tl.fromTo(
          progressRef.current,
          { width: "0%" },
          { width: "100%", duration: 1.6, ease: "power2.inOut" },
          0.28,
        );
      }
    }, root);

    return () => ctx.revert();
  }, [currentLanguage]);

  const onCtaMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.22, y: y * 0.28, duration: 0.28, ease: "power3.out" });
  };

  const onCtaLeave = (e: MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.45, ease: "power3.out" });
  };

  return (
    <section
      ref={rootRef}
      id="home"
      className="premium-section relative overflow-x-hidden scroll-mt-20 border-b border-[var(--studio-border)] pt-[4.5rem] pb-10 md:pt-24 md:pb-24 lg:pb-28"
    >
      <div
        className="studio-orb pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,rgba(196,165,116,0.22),transparent_62%)]"
        aria-hidden
      />
      <div
        className="studio-orb studio-orb-delay pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(139,94,52,0.1),transparent_70%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-6 px-4 sm:px-6 md:gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-8">
        <div className="text-center lg:text-left">
          <p className="studio-eyebrow" data-hero-item>
            {premium.hero.eyebrow}
          </p>
          <AnimatedHeading
            as="h1"
            id="hero-h1"
            breakAfter={currentLanguage === "de" ? 0 : 1}
            className="hero-title font-display mt-3 scroll-mt-24 text-[2.15rem] font-medium leading-[1.12] tracking-tight text-[var(--studio-text)] sm:text-[2.75rem] md:mt-5 md:text-[3.35rem] lg:text-[3.85rem]"
            data-testid="hero-title"
          >
            {premium.hero.heading}
          </AnimatedHeading>

          <div className="hero-progress mx-auto mt-5 lg:mx-0" aria-hidden>
            <span className="hero-progress-track">
              <span ref={progressRef} className="hero-progress-fill" />
            </span>
          </div>

          <p
            className="mx-auto mt-5 max-w-[34rem] text-[0.975rem] leading-relaxed text-[var(--studio-muted)] md:mt-6 md:text-lg lg:mx-0"
            data-testid="hero-subtitle"
            data-hero-item
          >
            {premium.hero.subheading}
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:justify-center lg:justify-start" data-hero-item>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              onMouseMove={onCtaMove}
              onMouseLeave={onCtaLeave}
              className="premium-cta min-h-[48px] w-full rounded-full px-8 py-3 text-[0.9375rem] font-semibold sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--studio-accent)]/50"
              data-testid="hero-cta-primary"
            >
              {premium.hero.primaryCta}
            </button>
            <Link href={ROUTES.portfolio} className={SECONDARY_BTN} data-testid="hero-cta-secondary">
              {premium.hero.secondaryCta}
            </Link>
          </div>
          <p className="mt-3 text-center text-xs text-[var(--studio-muted)] sm:text-sm lg:text-left" data-hero-item>
            {premium.hero.ctaMeta}
          </p>
        </div>

        <figure className="w-full justify-self-center lg:justify-self-end">
          <div className="relative" ref={frameRef}>
            <div
              className="absolute -inset-3 rounded-[28px] border border-[rgba(139,94,52,0.22)] sm:-inset-4"
              aria-hidden
            />
            <div className="premium-card studio-hero-frame relative overflow-hidden p-1.5 sm:p-2">
              <img
                ref={imageRef}
                src={HERO_IMAGE}
                alt={
                  currentLanguage === "de"
                    ? "AGR Multimedia — Premium Webdesign-Studio in Geislingen an der Steige"
                    : "AGR Multimedia — premium web design studio in Geislingen an der Steige"
                }
                width={1600}
                height={900}
                className="aspect-[16/10] w-full rounded-[16px] object-cover will-change-transform"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
          <figcaption className="mt-3 text-center text-xs tracking-wide text-[var(--studio-muted)] md:mt-4 lg:text-right">
            {currentLanguage === "de"
              ? "Studioatmosphäre — Webdesign & Multimedia aus Geislingen an der Steige"
              : "Studio atmosphere — web design & multimedia from Geislingen an der Steige"}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
