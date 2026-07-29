import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioShowcase from "@/components/PortfolioShowcase";

export default function PortfolioPage() {
  useEffect(() => {
    const raw = window.location.hash.replace(/^#/, "");
    if (!raw) return;
    const scrollToHash = () => {
      document.getElementById(raw)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const id = window.setTimeout(scrollToHash, 200);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#07070b]">
      <Navigation />
      <main id="main-content" className="pt-20 md:pt-24">
        <PortfolioShowcase />
      </main>
      <Footer />
    </div>
  );
}
