import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function StudioMotion() {
  const [location] = useLocation();
  const { currentLanguage } = useLanguage();

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".studio-split-heading").forEach((heading) => {
        const words = heading.querySelectorAll<HTMLElement>(".studio-split-word");
        if (!words.length) return;
        words.forEach((word, index) => {
          gsap.fromTo(
            word,
            {
              x: index % 2 === 0 ? -42 : 42,
              yPercent: 70,
              opacity: 0,
              filter: "blur(14px)",
            },
            {
              x: 0,
              yPercent: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.92,
              delay: index * 0.045,
              ease: "power3.out",
              scrollTrigger: { trigger: heading, start: "top 88%", once: true },
            },
          );
        });
      });

      const cards = gsap.utils.toArray<HTMLElement>(
        ".premium-card:not(.studio-hero-frame):not(.contact-reveal), .studio-service-link:not(.premium-card), .contact-glass-card:not(.premium-card), [data-reveal='card']",
      );
      const groups = new Map<Element, HTMLElement[]>();
      cards.forEach((card) => {
        if (card.closest("#contact, #static-crawler-home, #static-route-prerender")) return;
        const parent = card.parentElement ?? card;
        const list = groups.get(parent) ?? [];
        list.push(card);
        groups.set(parent, list);
      });
      groups.forEach((group, parent) => {
        gsap.set(parent, { perspective: 1200 });
        gsap.fromTo(
          group,
          { y: 68, opacity: 0, rotateX: 7, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 0.98,
            stagger: 0.11,
            ease: "power3.out",
            clearProps: "filter",
            scrollTrigger: { trigger: parent, start: "top 86%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("h1:not(.studio-split-heading), h2:not(.studio-split-heading)").forEach((el) => {
        if (el.closest(".contact-reveal") || el.classList.contains("contact-reveal")) return;
        if (el.id === "cookie-consent-title") return;
        if (el.closest('[role="dialog"], #static-crawler-home, #static-route-prerender')) return;
        gsap.fromTo(
          el,
          { x: -46, opacity: 0, filter: "blur(12px)" },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.88,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".studio-eyebrow").forEach((el) => {
        if (el.hasAttribute("data-hero-item")) return;
        gsap.fromTo(
          el,
          { letterSpacing: "0.46em", opacity: 0, y: 12 },
          {
            letterSpacing: "0.22em",
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".premium-card img, .studio-hero-frame img").forEach((img) => {
        if (img.closest(".studio-hero-frame")) return;
        gsap.fromTo(
          img,
          { scale: 1.08, filter: "blur(8px)" },
          {
            scale: 1,
            filter: "blur(0px)",
            duration: 1.15,
            ease: "power2.out",
            scrollTrigger: { trigger: img, start: "top 90%", once: true },
          },
        );
      });
    });

    const id = window.setTimeout(() => ScrollTrigger.refresh(), 90);

    return () => {
      window.clearTimeout(id);
      ctx.revert();
    };
  }, [location, currentLanguage]);

  return null;
}
