"use client";

import { useEffect } from "react";

export function Reveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          reveal(entry.target, entry.boundingClientRect);
        }
      },
      { threshold: 0, rootMargin: "0px 0px 90px 0px" },
    );

    const reveal = (target: Element, rect?: DOMRect) => {
      const box = rect ?? target.getBoundingClientRect();
      const viewHeight = window.innerHeight || 1;
      const isCard = target.getAttribute("data-reveal") === "card";
      const jumpedPast = box.top < viewHeight * 0.35 && window.scrollY > 80;
      const alreadyInside = isCard
        ? jumpedPast && box.bottom > 40
        : box.top < viewHeight * 0.8 && box.bottom > 20;
      if (reduce || alreadyInside) {
        target.classList.add("is-in", "is-now");
        return;
      }
      target.classList.add("is-armed");
      window.setTimeout(() => target.classList.add("is-in"), 32);
    };

    const watch = () => {
      document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((node) => {
        if (seen.has(node)) return;
        if (reduce) {
          seen.add(node);
          node.classList.add("is-in", "is-now");
          return;
        }
        const box = node.getBoundingClientRect();
        if (box.width === 0 && box.height === 0) return;
        seen.add(node);
        const viewHeight = window.innerHeight || 1;
        const near = box.bottom > 0 && box.top < viewHeight + 90;
        if (!near) {
          node.classList.add("is-armed");
          io.observe(node);
          return;
        }
        reveal(node, box);
      });
    };

    watch();
    const changes = new MutationObserver(watch);
    changes.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("resize", watch);
    return () => {
      io.disconnect();
      changes.disconnect();
      window.removeEventListener("resize", watch);
    };
  }, []);

  return null;
}
