import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { LayoutGrid, Video, Sparkles } from "lucide-react";
import { useCallback, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const icons = {
  video: Video,
  web: LayoutGrid,
  ai: Sparkles,
};

type CardDef = { key: string; icon: keyof typeof icons; href: string };

function ServiceTiltCard({
  href,
  title,
  description,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  icon: keyof typeof icons;
}) {
  const articleRef = useRef<HTMLElement>(null);
  const Icon = icons[icon];

  useLayoutEffect(() => {
    const card = articleRef.current;
    if (!card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.set(card, { transformPerspective: 980, transformOrigin: "50% 50%" });

    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(card, {
        rotationY: x * -16,
        rotationX: y * 12,
        scale: 1.035,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(card);
    };
  }, []);

  return (
    <Link href={href} className="block h-full">
      <article
        ref={articleRef}
        className="service-preview-tilt group h-full p-6 md:p-8 rounded-2xl glass-card transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)] border border-white/10"
      >
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 text-white/90 group-hover:bg-white/20 transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </article>
    </Link>
  );
}

export default function ServicesPreview() {
  const { tSpec, currentLanguage } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const cards: CardDef[] = [
    { key: "videoMotion", icon: "video", href: "/services#ai-content-video" },
    { key: "webUi", icon: "web", href: "/services#web-design" },
    { key: "aiContent", icon: "ai", href: "/services#custom-ai" },
  ];

  const runScrollReveal = useCallback(() => {
    const root = sectionRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    return gsap.context(() => {
      gsap.from(".services-preview-reveal", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.11,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          once: true,
        },
      });
    }, root);
  }, []);

  useLayoutEffect(() => {
    const ctx = runScrollReveal();
    return () => ctx?.revert();
  }, [runScrollReveal, currentLanguage]);

  return (
    <section ref={sectionRef} id="services-preview" className="py-20 md:py-28 bg-[#0f0f14] [perspective:1200px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="services-preview-reveal block text-center mb-14 md:mb-16 hover:opacity-95 transition-opacity"
          aria-label="Go to services"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {tSpec.servicesPreview.title}
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {tSpec.servicesPreview.subtitle}
          </p>
        </Link>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map(({ key, icon, href }) => {
            const data = tSpec.servicesPreview[key as keyof typeof tSpec.servicesPreview];
            if (typeof data !== "object" || data === null || !("title" in data)) return null;
            return (
              <div key={key} className="services-preview-reveal h-full min-h-[200px]">
                <ServiceTiltCard href={href} title={data.title} description={data.description} icon={icon} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
