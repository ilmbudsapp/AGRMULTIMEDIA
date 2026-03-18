import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function FinalCta() {
  const { tSpec } = useLanguage();

  return (
    <section className="relative py-20 md:py-28 bg-[#0a0a0f] overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-90"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 z-[1] bg-[#0a0a0f]/50" aria-hidden />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {tSpec.finalCta.title}
        </h2>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
          {tSpec.finalCta.text}
        </p>
        <Link href="/#contact">
          <button className="bg-white text-[#0a0a0f] px-10 py-4 rounded-2xl text-lg font-bold hover:bg-white/90 transition-all duration-300">
            {tSpec.finalCta.button}
          </button>
        </Link>
      </div>
    </section>
  );
}
