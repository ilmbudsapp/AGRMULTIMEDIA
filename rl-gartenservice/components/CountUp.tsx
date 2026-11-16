"use client";

import { useLayoutEffect, useState } from "react";

const HOLD = 360;
const DURATION = 1400;

export function CountUp({ to, label }: { to: number; label: string }) {
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(to);
      setProgress(1);
      return;
    }

    let frame = 0;
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start;
      if (elapsed < HOLD) {
        setValue(0);
        setProgress(0);
        frame = requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(1, (elapsed - HOLD) / DURATION);
      const eased = 1 - (1 - t) ** 2;
      setValue(Math.round(eased * to));
      setProgress(eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to]);

  const text = String(value).padStart(String(to).length, "0");

  return (
    <p className="stat">
      <span className="stat-figure" aria-hidden="true">
        <strong>
          <span className="stat-num">{text}</span>
          <span className="stat-plus">+</span>
        </strong>
        <span className="stat-meter">
          <span className="stat-meter-fill" style={{ transform: `scaleX(${progress})` }} />
        </span>
      </span>
      <span>{label}</span>
      <span className="sr-only">
        {to}+ {label}
      </span>
    </p>
  );
}
