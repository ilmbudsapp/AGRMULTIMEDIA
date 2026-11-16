"use client";

import { useEffect } from "react";

export function HeroMotion() {
  useEffect(() => {
    const frame = document.querySelector<HTMLElement>(".hero-photo-frame");
    const hero = frame?.closest(".hero");
    const motifs = [...document.querySelectorAll<HTMLElement>(".motif")];
    if (!frame || !hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const wide = window.matchMedia("(min-width: 720px)");

    let pending = 0;
    const update = () => {
      pending = 0;
      const shift = Math.max(0, -hero.getBoundingClientRect().top) * 0.32;
      frame.style.transform = `translate3d(0, ${shift}px, 0)`;
      motifs.forEach((node, index) => {
        if (!wide.matches) {
          node.style.transform = "";
          return;
        }
        const drift = (index % 2 === 0 ? 1 : -1) * window.scrollY * 0.045;
        node.style.transform = `translate3d(0, ${drift}px, 0)`;
      });
    };
    const onScroll = () => {
      if (pending) return;
      pending = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (pending) cancelAnimationFrame(pending);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
