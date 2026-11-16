"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";

type Shot = { src: string; alt: string; focus?: string };

export function Compare({
  before,
  after,
  title,
  story = false,
  onSettled,
}: {
  before: Shot;
  after: Shot;
  title: string;
  story?: boolean;
  onSettled?: () => void;
}) {
  const [value, setValue] = useState(story ? 100 : 50);
  const frame = useRef<HTMLDivElement>(null);
  const owned = useRef(false);
  const settled = useRef(false);
  const drag = useRef<{ x: number; y: number; active: boolean } | null>(null);
  const onSettledRef = useRef(onSettled);
  const labelId = useId();
  const inputId = useId();

  useEffect(() => {
    onSettledRef.current = onSettled;
  }, [onSettled]);

  function settle() {
    if (settled.current) return;
    settled.current = true;
    onSettledRef.current?.();
  }

  function claim(next: number) {
    owned.current = true;
    setValue(Math.min(100, Math.max(0, next)));
    settle();
  }

  useLayoutEffect(() => {
    if (!story) return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setValue(50);
    settle();
  }, [story]);

  useEffect(() => {
    if (!story) return;
    const node = frame.current;
    const section = node?.closest<HTMLElement>(".home-compare");
    if (!node || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const phone = window.matchMedia("(max-width: 719px)").matches;
    if (phone) {
      let raf = 0;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting || owned.current) return;
          observer.disconnect();
          const start = performance.now();
          const tick = (now: number) => {
            if (owned.current) return;
            const progress = Math.min(1, (now - start) / 680);
            const eased = 1 - (1 - progress) ** 3;
            setValue(100 - 50 * eased);
            if (progress < 1) raf = requestAnimationFrame(tick);
            else settle();
          };
          raf = requestAnimationFrame(tick);
        },
        { threshold: 0.4 },
      );
      observer.observe(node);
      return () => {
        observer.disconnect();
        cancelAnimationFrame(raf);
      };
    }

    let pending = 0;
    const update = () => {
      pending = 0;
      if (owned.current) return;
      const rect = section.getBoundingClientRect();
      const viewHeight = window.innerHeight || 1;
      const start = viewHeight * 0.96;
      const end = viewHeight * 0.4;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setValue(100 - 50 * progress);
      if (progress >= 0.98) settle();
    };
    const onScroll = () => {
      if (owned.current || pending) return;
      pending = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (pending) cancelAnimationFrame(pending);
      window.removeEventListener("scroll", onScroll);
    };
  }, [story]);

  function setFromClientX(clientX: number) {
    const rect = frame.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    claim(((clientX - rect.left) / rect.width) * 100);
  }

  return (
    <div className={story ? "compare compare-story" : "compare"}>
      <div
        className="compare-frame"
        ref={frame}
        onPointerDown={(event) => {
          if (event.pointerType === "mouse") {
            event.currentTarget.setPointerCapture(event.pointerId);
            setFromClientX(event.clientX);
            return;
          }
          drag.current = { x: event.clientX, y: event.clientY, active: false };
        }}
        onPointerMove={(event) => {
          if (event.pointerType === "mouse") {
            if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
            setFromClientX(event.clientX);
            return;
          }
          const start = drag.current;
          if (!start) return;
          const dx = event.clientX - start.x;
          const dy = event.clientY - start.y;
          if (!start.active) {
            if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 6) {
              drag.current = null;
              return;
            }
            if (Math.abs(dx) < 8) return;
            start.active = true;
            event.currentTarget.setPointerCapture(event.pointerId);
          }
          setFromClientX(event.clientX);
        }}
        onPointerUp={(event) => {
          const start = drag.current;
          drag.current = null;
          if (!start || start.active || event.pointerType === "mouse") return;
          if (Math.abs(event.clientX - start.x) < 8 && Math.abs(event.clientY - start.y) < 8) {
            setFromClientX(event.clientX);
          }
        }}
        onPointerCancel={() => {
          drag.current = null;
        }}
      >
        <img
          className="compare-after"
          src={after.src}
          alt={after.alt}
          draggable={false}
          style={after.focus ? { objectPosition: after.focus } : undefined}
        />
        <img
          className="compare-before"
          src={before.src}
          alt=""
          draggable={false}
          style={{
            clipPath: `inset(0 ${100 - value}% 0 0)`,
            ...(before.focus ? { objectPosition: before.focus } : {}),
          }}
        />
        <span className="compare-tag before-tag">Vorher</span>
        <span className="compare-tag after-tag" style={{ opacity: value < 97 ? 1 : 0 }}>
          Nachher
        </span>
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
        onFocus={() => {
          owned.current = true;
          settle();
        }}
        onChange={(event) => claim(Number(event.target.value))}
      />
    </div>
  );
}
