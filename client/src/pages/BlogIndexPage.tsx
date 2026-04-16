import Navigation from "@/components/Navigation";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#0a0a0f]">
      <Navigation />
      <div className="pt-24">
        <Blog asPage />
      </div>
      <Footer />
    </div>
  );
}
