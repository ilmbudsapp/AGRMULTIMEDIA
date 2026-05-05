import { useLanguage } from "@/contexts/LanguageContext";
import { useCallback, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getPremiumTranslations } from "@/lib/premiumI18n";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
  const { currentLanguage } = useLanguage();
  const premium = getPremiumTranslations(currentLanguage);
  const projects = premium.caseStudies.cards;
  const sectionRef = useRef<HTMLElement>(null);

  const runReveal = useCallback(() => {
    const root = sectionRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    return gsap.context(() => {
      gsap.from(".featured-reveal", {
        opacity: 0,
        y: 44,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root,
          start: "top 84%",
          once: true,
        },
      });
    }, root);
  }, []);

  useLayoutEffect(() => {
    const ctx = runReveal();
    return () => ctx?.revert();
  }, [runReveal, currentLanguage]);

  return (
    <section id="case-studies" ref={sectionRef} className="premium-section relative py-16 sm:py-20 border-y border-[#333333]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 featured-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {premium.caseStudies.heading}
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">{premium.caseStudies.description}</p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="featured-reveal premium-card premium-card-hover relative overflow-hidden p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-purple-500/10 pointer-events-none" />
              <div className="relative">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">{project.title}</h3>
                <div className="space-y-4">
                  <p className="text-sm text-white/70">
                    <span className="text-blue-300 font-semibold">{premium.caseStudies.problemLabel}: </span>
                    {project.problem}
                  </p>
                  <p className="text-sm text-white/70">
                    <span className="text-blue-300 font-semibold">{premium.caseStudies.solutionLabel}: </span>
                    {project.solution}
                  </p>
                  <p className="text-sm text-white/90">
                    <span className="text-emerald-300 font-semibold">{premium.caseStudies.resultLabel}: </span>
                    {project.result}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
