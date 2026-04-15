import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import AboutHome from "@/components/AboutHome";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#07070b]">
      <Navigation />
      <main>
        <Hero />
        <HomeServices />
        <AboutHome />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
