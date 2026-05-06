import { useLanguage } from "@/contexts/LanguageContext";

const TRUST_COPY: Record<string, string> = {
  en: "Helping small businesses grow with modern and high-performing websites.",
  de: "Ich helfe kleinen Unternehmen mit modernen und leistungsstarken Websites zu wachsen.",
  it: "Aiuto le piccole imprese a crescere con siti web moderni e performanti.",
  sr: "Pomažem malim biznisima da rastu uz moderne i brze web stranice.",
  al: "Ndihmoj bizneset e vogla te rriten me faqe moderne dhe te shpejta.",
};

export default function TrustIntro() {
  const { currentLanguage } = useLanguage();
  const text = TRUST_COPY[currentLanguage] ?? TRUST_COPY.en;

  return (
    <section id="trust-intro" className="premium-section scroll-mt-24 border-t border-[#333333] bg-white/[0.02] py-10 md:py-12">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-base leading-relaxed text-white/85 md:text-lg">{text}</p>
      </div>
    </section>
  );
}
