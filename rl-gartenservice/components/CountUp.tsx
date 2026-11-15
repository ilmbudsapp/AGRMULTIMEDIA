"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({ to, label }: { to: number; label: string }) {
  const [value, setValue] = useState(0);
  const node = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const target = node.current;
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started.current) return;
        started.current = true;
        if (reduce) {
          setValue(to);
          return;
        }
        const start = performance.now();
        const duration = 1700;
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - progress) ** 3;
          setValue(Math.round(eased * to));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.45 },
    );
    io.observe(target);
    return () => io.disconnect();
  }, [to]);

  return (
    <p className="stat" ref={node}>
      <strong aria-hidden="true">{value}</strong>
      <span>{label}</span>
      <span className="sr-only">
        {to}+ {label}
      </span>
    </p>
  );
}
