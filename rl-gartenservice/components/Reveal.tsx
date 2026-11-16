"use client";

import { useEffect } from "react";

export function Reveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target;
          target.classList.add("is-armed");
          requestAnimationFrame(() => {
            requestAnimationFrame(() => target.classList.add("is-in"));
          });
          io.unobserve(target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px 10% 0px" },
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
