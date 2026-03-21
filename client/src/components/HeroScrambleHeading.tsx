import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrambleTextPlugin);
SplitText.register(gsap);

type Props = {
  h1Prefix: string;
  h1Typed: string;
  fullH1: string;
  className?: string;
  "data-testid"?: string;
  "aria-label"?: string;
};

const SCRAMBLE_DURATION = 1.75;
const GLOW_DURATION = 0.55;

/**
 * H1 stays real text in the DOM (SEO). SplitText + ScrambleTextPlugin, then revert split.
 */
export default function HeroScrambleHeading({
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
              "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.5), 0 0 28px rgba(199,210,255,0.35)",
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

            const tl = gsap.timeline({
              onComplete: () => {
                gsap.killTweensOf(chars);
                split?.revert();
                split = null;
                gsap.fromTo(
                  h1,
                  {
                    textShadow:
                      "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.5), 0 0 0 rgba(199,210,255,0)",
                  },
                  {
                    textShadow:
                      "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.5), 0 0 32px rgba(199,210,255,0.5), 0 0 56px rgba(139,92,246,0.25)",
                    duration: GLOW_DURATION,
                    ease: "power2.out",
                  },
                );
              },
            });

            tl.from(
              chars,
              {
                duration: 0.42,
                ease: "power2.inOut",
                scrambleText: {
                  text: "{original}",
                  chars: "upperAndLowerCase",
                  speed: 0.65,
                },
                stagger: {
                  amount: Math.max(0.85, SCRAMBLE_DURATION - 0.42),
                  from: "random",
                },
              },
              0,
            );
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
        id="heroScramble"
        className={cn(
          "hero-title scramble-text text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight text-white",
          className,
        )}
        style={{
          textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.5)",
        }}
        data-testid={dataTestId}
        aria-label={ariaLabel ?? fullH1}
      >
        {h1Prefix ? <span className="hero-title__prefix">{h1Prefix}</span> : null}
        <span id="dynamic-text" className="type-text type-text--complete">
          {h1Typed}
        </span>
      </h1>
    </div>
  );
}
