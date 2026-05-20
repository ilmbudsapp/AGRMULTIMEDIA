import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HomeGeoInsight from "@/components/HomeGeoInsight";
import HomeFaqJsonLd from "@/components/HomeFaqJsonLd";
import HomeServices from "@/components/HomeServices";
import CaseStudyThearRealm from "@/components/CaseStudyThearRealm";
import TrustIntro from "@/components/TrustIntro";
import OptimizationExcellence from "@/components/OptimizationExcellence";
import HomeSeoSection from "@/components/HomeSeoSection";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import AboutHome from "@/components/AboutHome";
import HomeComparisons from "@/components/HomeComparisons";
import HomeClientExperience from "@/components/HomeClientExperience";
import HomeConclusion from "@/components/HomeConclusion";
import HomeFinalCta from "@/components/HomeFinalCta";
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
        <HomeGeoInsight />
        <HomeComparisons />
        <TrustIntro />
        <OptimizationExcellence />
        <HomeClientExperience />
        <HomeSeoSection />
        <WhyChooseMe />
        <Testimonials />
        <CaseStudyThearRealm />
        <HomeServices />
        <AboutHome />
        <HomeConclusion />
        <HomeFinalCta />
        <Contact />
        <HomeFaqJsonLd />
      </main>
      <Footer />
    </div>
  );
}
