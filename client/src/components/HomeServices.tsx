import { Link } from "wouter";
import { LayoutGrid, Palette, Sparkles, AppWindow, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPremiumTranslations } from "@/lib/premiumI18n";

const SERVICE_CARDS = [
  {
    title: "Graphic Design Services",
    description: "Branding systems, logos, and marketing design assets for small businesses.",
    href: "/graphic-design",
    Icon: Palette,
  },
  { title: "AI Content Creation Services", description: "", href: "/ai-content-creation", Icon: Sparkles },
  { title: "Web Design and SEO Services", description: "", href: "/web-design", Icon: LayoutGrid },
  { title: "Application Design and Development Services", description: "", href: "/application-design-development", Icon: AppWindow },
] as const;

export default function HomeServices() {
  const { currentLanguage } = useLanguage();
  const premium = getPremiumTranslations(currentLanguage);

  return (
    <section id="services-preview" className="premium-section scroll-mt-24 border-t border-[#333333] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/80">{premium.services.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {premium.services.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{premium.services.description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {SERVICE_CARDS.map((item, i) => {
            const ItemIcon = item.Icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="premium-card premium-card-hover group flex min-h-[220px] flex-col p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#333333] text-blue-200">
                  <ItemIcon className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white">{premium.services.items[i].title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{premium.services.items[i].description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-200 group-hover:text-white">
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
