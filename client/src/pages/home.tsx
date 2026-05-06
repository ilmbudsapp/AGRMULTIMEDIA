import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import CaseStudyThearRealm from "@/components/CaseStudyThearRealm";
import TrustIntro from "@/components/TrustIntro";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import PricingModels from "@/components/PricingModels";
import AboutHome from "@/components/AboutHome";
import HomeFinalCta from "@/components/HomeFinalCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
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
      <main>
        <Hero />
        <TrustIntro />
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
