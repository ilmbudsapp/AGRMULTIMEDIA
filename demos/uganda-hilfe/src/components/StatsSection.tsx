"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/site";

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + (target - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, active]);

  return value;
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="uhu-card px-6 py-8 text-center">
      <p className="text-4xl font-extrabold tracking-tight text-[#14532d] md:text-5xl">
        {count.toLocaleString("de-DE")}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#52796f]">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="uhu-section bg-[#f0faf3]" aria-labelledby="stats-heading">
      <div className="uhu-container">
        <h2 id="stats-heading" className="mb-10 text-center text-3xl font-extrabold text-[#14532d] md:text-4xl">
          Wirkung, die man spürt
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
