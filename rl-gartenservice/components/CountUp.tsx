"use client";

import { useLayoutEffect, useState } from "react";

export function CountUp({ to, label }: { to: number; label: string }) {
  const digits = String(to).split("").map((digit) => Number(digit));
  const [roll, setRoll] = useState(false);
  const [still, setStill] = useState(false);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStill(true);
      setRoll(true);
      return;
    }
    const frame = requestAnimationFrame(() => setRoll(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <p className="stat">
      <strong aria-hidden="true">
        <span className="stat-num">
          {digits.map((digit, index) => (
            <span className="reel" key={index}>
              <span
                className={still ? "reel-strip is-still" : "reel-strip"}
                style={{ transform: roll ? `translateY(${-digit}em)` : "translateY(0)" }}
              >
                {Array.from({ length: 10 }, (_, number) => (
                  <span key={number}>{number}</span>
                ))}
              </span>
            </span>
          ))}
        </span>
        <span className="stat-plus">+</span>
      </strong>
      <span>{label}</span>
      <span className="sr-only">
        {to}+ {label}
      </span>
    </p>
  );
}
