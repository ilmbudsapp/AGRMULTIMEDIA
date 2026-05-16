import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioShowcase from "@/components/PortfolioShowcase";

export default function PortfolioPage() {
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
