import { useLanguage } from "@/contexts/LanguageContext";

type FinalCtaCopy = {
  lead: string;
  button: string;
};

const COPY: Record<string, FinalCtaCopy> = {
  en: {
    lead: "Ready to get your own website? Let's work together.",
    button: "Contact Me",
  },
  de: {
    lead: "Bereit fur Ihre eigene Website? Lassen Sie uns zusammenarbeiten.",
    button: "Kontaktieren Sie mich",
  },
  it: {
    lead: "Pronto per il tuo sito web? Lavoriamo insieme.",
    button: "Contattami",
  },
  sr: {
    lead: "Spremni za vas web sajt? Hajde da radimo zajedno.",
    button: "Kontaktirajte me",
  },
  al: {
    lead: "Gati per faqen tuaj web? Le te punojme se bashku.",
    button: "Me kontakto",
  },
};

export default function HomeFinalCta() {
  const { currentLanguage } = useLanguage();
  const copy = COPY[currentLanguage] ?? COPY.en;

  return (
    <section id="home-final-cta" className="premium-section scroll-mt-24 border-t border-[#333333] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-400/40 bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-cyan-400/20 px-6 py-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:px-10 md:py-14">
          <p className="mx-auto max-w-3xl text-2xl font-semibold tracking-tight text-white md:text-4xl">{copy.lead}</p>
          <a href="#contact" className="premium-button mt-8 inline-flex px-8 py-3 text-base md:text-lg">
            {copy.button}
          </a>
        </div>
      </div>
    </section>
  );
}
