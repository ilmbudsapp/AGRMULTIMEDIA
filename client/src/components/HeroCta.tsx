import { useLanguage } from "@/contexts/LanguageContext";
import { WHATSAPP_LINK } from "@/lib/contact";

const EMAIL = "agron6922@gmail.com";
const EMAIL_LINK = `mailto:${EMAIL}`;

export default function HeroCta() {
  const { tSpec } = useLanguage();

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
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
            <a href={EMAIL_LINK} className="w-full sm:w-auto">
              <button
                type="button"
                className="premium-cta inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                {tSpec.heroCta.button}
              </button>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--studio-border)] bg-[var(--studio-surface)] px-6 py-3.5 text-sm font-semibold text-[var(--studio-text)] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

