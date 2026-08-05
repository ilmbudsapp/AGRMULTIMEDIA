import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HomeFaqJsonLd from "@/components/HomeFaqJsonLd";
import HomeLocalBusinessJsonLd from "@/components/HomeLocalBusinessJsonLd";
import {
  HomeKmuMoreThanDesign,
  HomeKmuPortfolio,
  HomeKmuTrustPartner,
  HomeKmuFinalCta,
} from "@/components/HomeKmuSections";
import SeoAeoEnhancement from "@/components/SeoAeoEnhancement";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MAIN_LANDMARK_LABEL } from "@/lib/a11yLandmarks";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { currentLanguage } = useLanguage();

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#07070b]">
      <Navigation />
      <main id="main-content" aria-label={MAIN_LANDMARK_LABEL[currentLanguage]}>
        <Hero />
        <HomeKmuMoreThanDesign />
        <HomeKmuPortfolio />
        <HomeKmuTrustPartner />
        <HomeKmuFinalCta />
        <section className="premium-section border-t border-[#333333] py-16 md:py-20">
          <SeoAeoEnhancement variant="home" />
        </section>
        <Contact />
        <HomeFaqJsonLd />
        <HomeLocalBusinessJsonLd />
      </main>
      <Footer />
    </div>
  );
}
