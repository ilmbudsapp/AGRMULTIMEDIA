"use client";

import { useEffect } from "react";

export function Reveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = new Set<Element>();
    const narrow = () => window.innerWidth < 720;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (!readyToPlay(entry.target, entry.boundingClientRect)) continue;
          io.unobserve(entry.target);
          reveal(entry.target, entry.boundingClientRect);
        }
      },
      { threshold: 0, rootMargin: "0px 0px 48px 0px" },
    );

    const readyToPlay = (target: Element, box: DOMRect) => {
      const viewHeight = window.innerHeight || 1;
      const serviceCard = Boolean(target.closest(".leistung-grid"));
      if (serviceCard && narrow()) return box.top < viewHeight - 28;
      return box.top < viewHeight + 48;
    };

    const reveal = (target: Element, rect?: DOMRect) => {
      const box = rect ?? target.getBoundingClientRect();
      const viewHeight = window.innerHeight || 1;
      const isCard = target.getAttribute("data-reveal") === "card";
      const serviceCard = Boolean(target.closest(".leistung-grid"));
      const alreadyInside = isCard
        ? serviceCard
          ? narrow()
            ? box.top < viewHeight * 0.42 && box.bottom > 24
            : box.top < viewHeight * 0.55 && box.bottom > 20
          : box.top < viewHeight * 0.35 && window.scrollY > 80 && box.bottom > 40
        : box.top < viewHeight * 0.8 && box.bottom > 20;
      if (reduce || alreadyInside) {
        target.classList.add("is-in", "is-now");
        return;
      }
      if (!readyToPlay(target, box)) {
        target.classList.add("is-armed");
        io.observe(target);
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
        const serviceCard = Boolean(node.closest(".leistung-grid"));
        const lead = serviceCard && window.innerWidth < 720 ? 0 : 48;
        const near = box.bottom > 0 && box.top < viewHeight + lead;
        if (!near) {
          node.classList.add("is-armed");
          io.observe(node);
          return;
        }
        reveal(node, box);
      });
    };

    watch();
    const onScroll = () => {
      if (!narrow()) return;
      document.querySelectorAll(".leistung-grid > li.is-armed:not(.is-in)").forEach((node) => {
        const box = node.getBoundingClientRect();
        if (!readyToPlay(node, box)) return;
        io.unobserve(node);
        reveal(node, box);
      });
    };
    const changes = new MutationObserver(watch);
    changes.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("resize", watch);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      changes.disconnect();
      window.removeEventListener("resize", watch);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
