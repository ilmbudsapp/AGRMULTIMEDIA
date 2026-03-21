import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { LayoutGrid, Video, Sparkles, Palette, type LucideIcon } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ServiceFlipCardCopy } from "@/lib/specTranslations";

gsap.registerPlugin(ScrollTrigger);

type CardKey = "webUi" | "graphicBranding" | "videoMotion" | "aiContent";

const CARD_ORDER: { key: CardKey; href: string; icon: LucideIcon }[] = [
  { key: "webUi", href: "/services#web-design", icon: LayoutGrid },
  { key: "graphicBranding", href: "/graphic-design", icon: Palette },
  { key: "videoMotion", href: "/services#ai-content-video", icon: Video },
  { key: "aiContent", href: "/services#custom-ai", icon: Sparkles },
];

function useFinePointerHover() {
  const ref = useRef(false);
  useLayoutEffect(() => {
    ref.current = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);
  return ref;
}

function ServiceFlipCard({
  data,
  detailHref,
  flipOrderCta,
  flipDetailsLink,
  icon: Icon,
}: {
  data: ServiceFlipCardCopy;
  detailHref: string;
  flipOrderCta: string;
  flipDetailsLink: string;
  icon: LucideIcon;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const hoverFine = useFinePointerHover();
  const [touchFlipped, setTouchFlipped] = useState(false);

  useLayoutEffect(() => {
    const inner = innerRef.current;
    if (inner) gsap.set(inner, { transformPerspective: 1100, transformStyle: "preserve-3d" });
  }, []);

  const flipTo = (deg: number) => {
    const inner = innerRef.current;
    if (!inner) return;
    gsap.to(inner, {
      rotationY: deg,
      duration: 0.8,
      ease: deg === 180 ? "back.inOut(1.7)" : "power2.out",
      overwrite: "auto",
    });
  };

  useEffect(() => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    flipTo(touchFlipped ? 180 : 0);
  }, [touchFlipped]);

  const onEnter = () => {
    if (!hoverFine.current) return;
    flipTo(180);
  };

  const onLeave = () => {
    if (!hoverFine.current) return;
    flipTo(0);
  };

  const onCardClick = () => {
    if (hoverFine.current) return;
    setTouchFlipped((f) => !f);
  };

  const onCardKeyDown = (e: React.KeyboardEvent) => {
    if (hoverFine.current) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setTouchFlipped((f) => !f);
    }
  };

  return (
    <div className="flip-card-container h-full min-h-[300px] sm:min-h-[320px]">
      <div
        role="button"
        tabIndex={0}
        className="flip-card h-full outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 rounded-2xl"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={onCardClick}
        onKeyDown={onCardKeyDown}
      >
        <div ref={innerRef} className="flip-card-inner relative h-full">
          <div className="flip-card-face flip-card-front glass-flip-front flex flex-col p-6 md:p-8">
            <div className="w-12 h-12 rounded-xl bg-white/12 flex items-center justify-center mb-5 text-white shadow-inner border border-white/10">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{data.title}</h3>
            <p className="text-gray-300/90 text-sm leading-relaxed flex-1">{data.description}</p>
            <Link
              href={detailHref}
              className="mt-5 inline-flex text-sm font-bold text-violet-200 hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {flipDetailsLink} →
            </Link>
          </div>

          <div className="flip-card-face flip-card-back glass-flip-back flex flex-col items-center justify-center text-center p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-violet-200/80 mb-2">Investment</p>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">{data.flipPrice}</h3>
            <p className="text-sm text-gray-200/90 mb-8 max-w-[240px] leading-relaxed">{data.flipIncludes}</p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl bg-white text-[#0a0a0f] px-6 py-3 text-sm font-bold hover:bg-violet-100 transition-colors shadow-lg shadow-violet-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              {flipOrderCta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPreview() {
  const { tSpec, currentLanguage } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const runScrollReveal = useCallback(() => {
    const root = sectionRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    return gsap.context(() => {
      gsap.from(".services-preview-reveal", {
        opacity: 0,
        y: 44,
        duration: 0.75,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root,
          start: "top 86%",
          once: true,
        },
      });
    }, root);
  }, []);

  useLayoutEffect(() => {
    const ctx = runScrollReveal();
    return () => ctx?.revert();
  }, [runScrollReveal, currentLanguage]);

  const sp = tSpec.servicesPreview;

  return (
    <section ref={sectionRef} id="services-preview" className="py-20 md:py-28 bg-[#08080f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="services-preview-reveal block text-center mb-14 md:mb-16 hover:opacity-95 transition-opacity"
          aria-label="Go to services"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{sp.title}</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">{sp.subtitle}</p>
        </Link>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {CARD_ORDER.map(({ key, href, icon }) => (
            <div key={key} className="services-preview-reveal h-full">
              <ServiceFlipCard
                data={sp[key]}
                detailHref={href}
                flipOrderCta={sp.flipOrderCta}
                flipDetailsLink={sp.flipDetailsLink}
                icon={icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
