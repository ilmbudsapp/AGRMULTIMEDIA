import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[var(--studio-bg)]">
      <Navigation />
      <main id="main-content">
        <Contact asPage />
      </main>
      <Footer />
    </div>
  );
}
