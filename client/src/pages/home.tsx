import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroCta from "@/components/HeroCta";
import ServicesPreview from "@/components/ServicesPreview";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import WhyMe from "@/components/WhyMe";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#0a0a0f]">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <HeroCta />
      <ServicesPreview />
      <Portfolio />
      <WhyMe />
      <Testimonials />
      <FinalCta />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
