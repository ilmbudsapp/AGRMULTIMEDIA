import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import CaseStudyThearRealm from "@/components/CaseStudyThearRealm";
import TrustIntro from "@/components/TrustIntro";
import HomeSeoSection from "@/components/HomeSeoSection";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import PricingModels from "@/components/PricingModels";
import AboutHome from "@/components/AboutHome";
import HomeFinalCta from "@/components/HomeFinalCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MAIN_LANDMARK_LABEL } from "@/lib/a11yLandmarks";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#07070b]">
      <Navigation />
      <main id="main-content" aria-label={MAIN_LANDMARK_LABEL[currentLanguage]}>
        <Hero />
        <TrustIntro />
        <HomeSeoSection />
        <WhyChooseMe />
        <Testimonials />
        <CaseStudyThearRealm />
        <PricingModels />
        <HomeServices />
        <AboutHome />
        <HomeFinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
