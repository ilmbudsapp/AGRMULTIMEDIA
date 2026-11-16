"use client";

import { useEffect, useId, useRef, useState } from "react";

export function Compare({
  before,
  after,
  title,
  demo = false,
}: {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  title: string;
  demo?: boolean;
}) {
  const [value, setValue] = useState(demo ? 16 : 50);
  const frame = useRef<HTMLDivElement>(null);
  const owned = useRef(false);
  const labelId = useId();
  const inputId = useId();

  useEffect(() => {
    if (!demo) return;
    const node = frame.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(50);
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || owned.current) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          if (owned.current) return;
          const progress = Math.min(1, (now - start) / 700);
          const eased = 1 - (1 - progress) ** 3;
          setValue(16 + (50 - 16) * eased);
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.55 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [demo]);

  function claim(next: number) {
    owned.current = true;
    setValue(Math.min(100, Math.max(0, next)));
  }

  function setFromClientX(clientX: number) {
    const rect = frame.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    claim(((clientX - rect.left) / rect.width) * 100);
  }

  return (
    <div className="compare">
      <div
        className="compare-frame"
        ref={frame}
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          setFromClientX(event.clientX);
        }}
        onPointerMove={(event) => {
          if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
          setFromClientX(event.clientX);
        }}
      >
        <img src={after.src} alt={after.alt} draggable={false} />
        <img src={before.src} alt="" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }} draggable={false} />
        <span className="compare-tag before-tag">Vorher</span>
        <span className="compare-tag after-tag">Nachher</span>
        <span className="compare-handle" style={{ left: `${value}%` }} aria-hidden="true" />
      </div>
      <label id={labelId} htmlFor={inputId}>
        {title}: Vorher und Nachher vergleichen
      </label>
      <input
        id={inputId}
        type="range"
        min={0}
        max={100}
        step={1}
        value={Math.round(value)}
        aria-labelledby={labelId}
        onChange={(event) => claim(Number(event.target.value))}
      />
    </div>
  );
}
