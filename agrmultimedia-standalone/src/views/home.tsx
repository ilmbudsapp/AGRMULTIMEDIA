import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HomeFaqJsonLd from "@/components/HomeFaqJsonLd";
import HomeLocalBusinessJsonLd from "@/components/HomeLocalBusinessJsonLd";
import {
  HomeKmuWhyUs,
  HomeKmuMoreThanDesign,
  HomeKmuPortfolio,
  HomeKmuProcess,
  HomeKmuTrustPartner,
  HomeKmuFinalCta,
} from "@/components/HomeKmuSections";
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
        <HomeKmuWhyUs />
        <HomeKmuMoreThanDesign />
        <HomeKmuPortfolio />
        <HomeKmuProcess />
        <HomeKmuTrustPartner />
        <HomeKmuFinalCta />
        <Contact />
        <HomeFaqJsonLd />
        <HomeLocalBusinessJsonLd />
      </main>
      <Footer />
    </div>
  );
}
