import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navigation />
      <div className="pt-24">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}
