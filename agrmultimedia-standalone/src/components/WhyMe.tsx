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
    <section id="why-me" className="scroll-mt-24 py-20 md:py-24 bg-[#08080c] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 md:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-3">AGR Multimedia</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            {tSpec.whyMe.heading}
          </h2>
          <p className="text-white/55 text-sm md:text-base mt-4 leading-relaxed">
            {tSpec.whyMe.subtitle}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {benefits.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-6"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/80">
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <p className="text-white/65 text-sm leading-relaxed pt-0.5">
                {tSpec.whyMe[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
