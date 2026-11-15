"use client";

import { useEffect } from "react";

export function Reveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && CSS.supports("animation-timeline", "view()")) return;
    document.documentElement.classList.add("reveal-ready");
    const nodes = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" },
    );

    const watch = () => {
      document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((node) => {
        if (nodes.has(node)) return;
        nodes.add(node);
        if (reduce) {
          node.classList.add("is-in");
          return;
        }
        io.observe(node);
      });
    };

    watch();
    const changes = new MutationObserver(watch);
    changes.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      changes.disconnect();
    };
  }, []);

  return null;
}
