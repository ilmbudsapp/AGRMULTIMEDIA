import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroCta() {
  const { tSpec } = useLanguage();

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#05050a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-electric-blue/15 via-purple-500/15 to-pink-500/15 border border-white/10 px-6 sm:px-10 py-10 sm:py-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
              {tSpec.heroCta.heading}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto md:mx-0">
              {tSpec.heroCta.text}
            </p>
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <button
              type="button"
              onClick={scrollToContact}
              className="w-full md:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#0a0a0f] font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {tSpec.heroCta.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

