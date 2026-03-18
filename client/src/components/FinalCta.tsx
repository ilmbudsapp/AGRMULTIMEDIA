import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function FinalCta() {
  const { tSpec } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
