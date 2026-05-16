import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingModels from "@/components/PricingModels";
import { useLanguage } from "@/contexts/LanguageContext";

const INTRO: Record<string, { title: string; lead: string }> = {
  en: {
    title: "Web Design & SEO",
    lead: "Business websites with clear structure, on-page SEO, and transparent pricing — built in Geislingen for SMEs across Germany and the EU.",
  },
  de: {
    title: "Webdesign & SEO",
    lead: "Business-Websites mit klarer Struktur, On-Page-SEO und transparenten Preisen — entwickelt in Geislingen für KMU in Deutschland und der EU.",
  },
  it: {
    title: "Web design e SEO",
    lead: "Siti business con struttura chiara, SEO on-page e prezzi trasparenti — studio a Geislingen per PMI in Germania e UE.",
  },
  sr: {
    title: "Web dizajn i SEO",
    lead: "Biznis sajtovi sa jasnom strukturom, on-page SEO-om i transparentnim cenama — studio u Geislingen za mala preduzeća u Nemačkoj i EU.",
  },
  al: {
    title: "Web design dhe SEO",
    lead: "Faqe biznesi me strukturë të qartë, SEO on-page dhe çmime transparente — studio në Geislingen për SME në Gjermani dhe BE.",
  },
};

export default function WebdesignSeoPage() {
  const { currentLanguage } = useLanguage();
  const intro = INTRO[currentLanguage] ?? INTRO.en;

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#07070b]">
      <Navigation />
      <main id="main-content" className="pt-20 md:pt-24">
        <header className="border-b border-[#333333] py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{intro.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">{intro.lead}</p>
          </div>
        </header>
        <PricingModels />
      </main>
      <Footer />
    </div>
  );
}
