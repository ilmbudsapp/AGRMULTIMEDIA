import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { LayoutGrid, Video, Sparkles } from "lucide-react";

const icons = {
  video: Video,
  web: LayoutGrid,
  ai: Sparkles,
};

const SECTION_BG_IMAGE =
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1920&q=80";

export default function ServicesPreview() {
  const { tSpec } = useLanguage();
  const cards = [
    { key: "videoMotion", icon: "video" as const, href: "/services#ai-content-video" },
    { key: "webUi", icon: "web" as const, href: "/services#web-design" },
    { key: "aiContent", icon: "ai" as const, href: "/services#custom-ai" },
  ];

  return (
    <section id="services-preview" className="relative py-20 md:py-28 bg-[#0f0f14] overflow-hidden">
      {/* Background image – max 70% visible, 30% dark from section bg */}
      <div
        className="absolute inset-0 z-0 opacity-[0.7]"
        style={{
          backgroundImage: `url(${SECTION_BG_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 z-[1] bg-[#0f0f14]/25" aria-hidden />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map(({ key, icon, href }) => {
            const data = tSpec.servicesPreview[key as keyof typeof tSpec.servicesPreview];
            const Icon = icons[icon];
            return (
              <Link key={key} href={href}>
                <article className="group h-full p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
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
