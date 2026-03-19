import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { LayoutGrid, Video, Sparkles } from "lucide-react";

const icons = {
  video: Video,
  web: LayoutGrid,
  ai: Sparkles,
};

export default function ServicesPreview() {
  const { tSpec } = useLanguage();
  const cards = [
    { key: "videoMotion", icon: "video" as const, href: "/services#ai-content-video" },
    { key: "webUi", icon: "web" as const, href: "/services#web-design" },
    { key: "aiContent", icon: "ai" as const, href: "/services#custom-ai" },
  ];

  return (
    <section id="services-preview" className="py-20 md:py-28 bg-[#0f0f14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="block text-center mb-14 md:mb-16 hover:opacity-95 transition-opacity"
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
            const Icon = icons[icon];
            return (
              <Link key={key} href={href}>
                <article className="group h-full p-6 md:p-8 rounded-2xl glass-card transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 text-white/90 group-hover:bg-white/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{data.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{data.description}</p>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
