import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { cn } from "@/lib/utils";

gsap.registerPlugin(MotionPathPlugin);
SplitText.register(gsap);

type Props = {
  h1Prefix: string;
  h1Typed: string;
  fullH1: string;
  className?: string;
  "data-testid"?: string;
  "aria-label"?: string;
};

const MAIN_DURATION = 2;
const GLOW_PULSE_DURATION = 0.5;

/**
 * Real H1 in DOM (SEO). Letters scatter then elastic-snap into place; split reverts after tween.
 */
export default function HeroMagneticMorphHeading({
  h1Prefix,
  h1Typed,
  fullH1,
  className,
  "data-testid": dataTestId,
  "aria-label": ariaLabel,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const h1 = h1Ref.current;
    if (!wrap || !h1) return;

    let split: { chars: HTMLElement[]; revert: () => void } | null = null;
    let cancelled = false;
    let started = false;

    const run = () => {
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
          gsap.set(h1, {
            textShadow:
              "0 2px 20px rgba(0,0,0,0.75), 0 0 28px rgba(147,197,253,0.45), 0 0 48px rgba(167,139,250,0.3)",
          });
          return;
        }

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (cancelled || !h1.parentNode) return;

            split = SplitText.create(h1, { type: "chars", aria: "auto" });
            const chars = split.chars;
            if (!chars.length) {
              split.revert();
              split = null;
              return;
            }

            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const rx = Math.min(vw * 0.32, 260);
            const ry = Math.min(vh * 0.22, 160);

            gsap.set(chars, {
              transformOrigin: "50% 50%",
              x: () => gsap.utils.random(-rx, rx),
              y: () => gsap.utils.random(-ry, ry),
              rotation: () => gsap.utils.random(-90, 90),
            });

            const tl = gsap.timeline({
              onComplete: () => {
                gsap.killTweensOf(chars);
                split?.revert();
                split = null;
                gsap.fromTo(
                  h1,
                  {
                    textShadow:
                      "0 2px 20px rgba(0,0,0,0.75), 0 0 12px rgba(147,197,253,0.25), 0 0 0 rgba(167,139,250,0)",
                  },
                  {
                    textShadow:
                      "0 2px 24px rgba(0,0,0,0.8), 0 0 36px rgba(147,197,253,0.65), 0 0 64px rgba(96,165,250,0.35), 0 0 88px rgba(167,139,250,0.22)",
                    duration: GLOW_PULSE_DURATION,
                    ease: "power2.out",
                    yoyo: true,
                    repeat: 1,
                  },
                );
              },
            });

            tl.to(chars, {
              duration: MAIN_DURATION,
              x: 0,
              y: 0,
              rotation: 0,
              stagger: 0.03,
              ease: "elastic.out(1, 0.3)",
            });
          });
        });
      })();
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );
    io.observe(wrap);

    const raf = requestAnimationFrame(() => {
      const r = wrap.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > -40) {
        run();
        io.disconnect();
      }
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      io.disconnect();
      gsap.killTweensOf(h1);
      if (split) {
        gsap.killTweensOf(split.chars);
        split.revert();
        split = null;
      }
    };
  }, [fullH1, h1Prefix, h1Typed]);

  return (
    <div
      ref={wrapRef}
      className="relative z-[20] mb-5 sm:mb-6 w-full min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[4rem]"
    >
      <h1
        ref={h1Ref}
        id="magneticHero"
        className={cn(
          "hero-h1 hero-title text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight text-white",
          className,
        )}
        style={{
          textShadow:
            "0 2px 20px rgba(0,0,0,0.75), 0 0 20px rgba(147,197,253,0.15)",
        }}
        data-testid={dataTestId}
        aria-label={ariaLabel ?? fullH1}
      >
        {h1Prefix ? <span className="hero-title__prefix">{h1Prefix}</span> : null}
        <span id="dynamic-text" className="type-text">
          {h1Typed}
        </span>
      </h1>
    </div>
  );
}
