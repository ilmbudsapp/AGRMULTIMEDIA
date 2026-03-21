import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { runHeroTitleParticleAnimation } from "@/lib/heroTitleParticles";

type Props = {
  h1Prefix: string;
  h1Typed: string;
  /** Must equal h1Prefix + h1Typed (SEO / canvas mask) */
  fullH1: string;
  /** Layer in #home: full-viewport dust above backgrounds, below z-10 content */
  dustPortalHost: HTMLElement | null;
  className?: string;
  "data-testid"?: string;
  "aria-label"?: string;
};

/**
 * Real H1 stays in the DOM (SEO). Canvas draws “dust → text” on top; then text becomes solid.
 */
export default function HeroParticleHeading({
  h1Prefix,
  h1Typed,
  fullH1,
  dustPortalHost,
  className,
  "data-testid": dataTestId,
  "aria-label": ariaLabel,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const h1 = h1Ref.current;
    if (!wrap || !canvas || !h1 || !dustPortalHost) return;

    setSolid(false);
    canvas.style.opacity = "1";

    let cleanupAnim: (() => void) | undefined;
    let cancelled = false;
    let started = false;

    const begin = () => {
      if (started || cancelled) return;
      started = true;
      void (async () => {
        try {
          await document.fonts.ready;
        } catch {
          /* ignore */
        }
        if (cancelled) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setSolid(true);
          canvas.style.opacity = "0";
          return;
        }
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (cancelled) return;
            cleanupAnim = runHeroTitleParticleAnimation(canvas, h1, {
              fullText: fullH1,
              onReveal: () => {
                setSolid(true);
                requestAnimationFrame(() => {
                  canvas.style.opacity = "0";
                });
              },
            });
          });
        });
      })();
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          begin();
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(wrap);

    const raf = requestAnimationFrame(() => {
      const r = wrap.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > -40) {
        begin();
        io.disconnect();
      }
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      io.disconnect();
      cleanupAnim?.();
    };
  }, [fullH1, h1Prefix, h1Typed, dustPortalHost]);

  const canvasEl = (
    <canvas
      ref={canvasRef}
      className={cn(
        "pointer-events-none fixed left-0 top-0 h-screen w-screen max-h-[100dvh] transition-opacity duration-500 ease-out",
        solid ? "opacity-0" : "opacity-100",
      )}
      style={{ width: "100vw", height: "100vh" }}
      aria-hidden
    />
  );

  return (
    <>
      {dustPortalHost ? createPortal(canvasEl, dustPortalHost) : null}
      <div ref={wrapRef} className="relative z-[20] mb-5 sm:mb-6 w-full min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[4rem]">
        <h1
          ref={h1Ref}
          className={cn(
            "hero-title relative z-[1] text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight transition-[color,text-shadow] duration-500 ease-out",
            solid ? "text-white" : "text-transparent",
            className,
          )}
          style={{
            textShadow: solid
              ? "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.5)"
              : "none",
          }}
          data-testid={dataTestId}
          aria-label={ariaLabel}
        >
          {h1Prefix ? <span className="hero-title__prefix">{h1Prefix}</span> : null}
          <span id="dynamic-text" className={cn("type-text", solid && "type-text--complete")}>
            {h1Typed}
          </span>
        </h1>
      </div>
    </>
  );
}
