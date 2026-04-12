import { Link } from "wouter";
import { LayoutGrid, Palette, Video, Search, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CARDS: { specKey: "webUi" | "graphicBranding" | "videoMotion" | "aiContent"; href: string; Icon: typeof LayoutGrid }[] = [
  { specKey: "webUi", href: "/web-design", Icon: LayoutGrid },
  { specKey: "graphicBranding", href: "/graphic-design", Icon: Palette },
  { specKey: "videoMotion", href: "/video-production", Icon: Video },
  { specKey: "aiContent", href: "/digital-marketing", Icon: Search },
];

export default function HomeServices() {
  const { tSpec } = useLanguage();

  return (
    <section id="services-preview" className="scroll-mt-24 py-20 md:py-28 bg-[#0c0c12] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45 mb-3">{tSpec.nav.services}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">{tSpec.servicesPreview.title}</h2>
          <p className="mt-4 text-base text-white/55 leading-relaxed">{tSpec.servicesPreview.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {CARDS.map(({ specKey, href, Icon }) => {
            const data = tSpec.servicesPreview[specKey];
            return (
              <Link
                key={specKey}
                href={href}
                className="group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-7 transition-colors hover:border-white/[0.14] hover:bg-white/[0.04]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/80">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">{data.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{data.description}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 group-hover:text-white">
                  {tSpec.servicesPreview.flipDetailsLink}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
