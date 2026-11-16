"use client";

import { useEffect } from "react";

export function HeroMotion() {
  useEffect(() => {
    const frame = document.querySelector<HTMLElement>(".hero-photo-frame");
    const hero = frame?.closest(".hero");
    if (!frame || !hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pending = 0;
    const update = () => {
      pending = 0;
      const shift = Math.max(0, -hero.getBoundingClientRect().top) * 0.32;
      frame.style.transform = `translate3d(0, ${shift}px, 0)`;
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
