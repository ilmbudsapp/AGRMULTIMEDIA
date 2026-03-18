import { useLanguage } from "@/contexts/LanguageContext";
import { Languages, Zap, Layers, Sparkles } from "lucide-react";

const benefits = [
  { key: "benefit1" as const, icon: Languages },
  { key: "benefit2" as const, icon: Zap },
  { key: "benefit3" as const, icon: Layers },
  { key: "benefit4" as const, icon: Sparkles },
];

export default function WhyMe() {
  const { tSpec } = useLanguage();

  return (
    <section id="why-me" className="py-20 md:py-28 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          {tSpec.whyMe.heading}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="flex flex-col items-center text-center p-6 rounded-2xl glass-card"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 text-white">
                <Icon className="w-7 h-7" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {tSpec.whyMe[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
