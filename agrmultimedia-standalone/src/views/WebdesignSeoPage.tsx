import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import PricingModels from "@/components/PricingModels";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ROUTES } from "@/lib/siteRoutes";

const INTRO: Record<string, { title: string; lead: string }> = {
  en: {
    title: "Web Design & SEO",
    lead: "Business websites with clear structure and on-page SEO — built in Geislingen for SMEs across Germany and the EU. Every project receives an individual quote after a free consultation.",
  },
  de: {
    title: "Webdesign & SEO",
    lead: "Business-Websites mit klarer Struktur und On-Page-SEO — entwickelt in Geislingen an der Steige für KMU in der Region. Jedes Projekt erhält ein individuelles Angebot nach einem kostenlosen Erstgespräch.",
  },
};

export default function WebdesignSeoPage() {
  const { currentLanguage } = useLanguage();
  const intro = INTRO[currentLanguage] ?? INTRO.en;

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#07070b]">
      <Navigation />
      <BreadcrumbNav />
      <main id="main-content" className="pt-4 md:pt-6">
        <header className="border-b border-[#333333] py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{intro.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">{intro.lead}</p>
            <p className="mt-6">
              <Link href={ROUTES.webdesignGeislingen} className="text-sm font-medium text-blue-200 hover:underline md:text-base">
                {currentLanguage === "de"
                  ? "Ausführlicher Guide: Webdesign Geislingen an der Steige"
                  : "Full guide: Web design Geislingen an der Steige"}
              </Link>
            </p>
          </div>
        </header>
        <PricingModels />
      </main>
      <Footer />
    </div>
  );
}
