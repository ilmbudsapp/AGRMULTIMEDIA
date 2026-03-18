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
    <section className="relative py-16 sm:py-20 bg-light-section border-y border-gray-200/60">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] px-6 sm:px-10 py-10 sm:py-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy tracking-tight mb-3">
              {tSpec.heroCta.heading}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto md:mx-0">
              {tSpec.heroCta.text}
            </p>
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <button
              type="button"
              onClick={scrollToContact}
              className="w-full md:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-navy text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {tSpec.heroCta.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

