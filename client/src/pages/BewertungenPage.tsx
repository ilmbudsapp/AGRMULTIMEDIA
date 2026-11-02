import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import { useLanguage } from "@/contexts/LanguageContext";

const INTRO: Record<string, { title: string; lead: string }> = {
  en: {
    title: "Google Reviews",
    lead: "What our clients say on Google Maps — original quotes, verified on our business profile.",
  },
  de: {
    title: "Google-Bewertungen",
    lead: "Was unsere Kunden auf Google Maps sagen — Originalzitate aus unserem Unternehmensprofil.",
  },
  it: {
    title: "Recensioni Google",
    lead: "Cosa dicono i clienti su Google Maps — citazioni originali dal nostro profilo.",
  },
  sr: {
    title: "Google recenzije",
    lead: "Šta naši klijenti kažu na Google Maps-u — originalni citati sa našeg profila.",
  },
  al: {
    title: "Vlerësime Google",
    lead: "Çfarë thonë klientët në Google Maps — citate origjinale nga profili ynë.",
  },
};

export default function BewertungenPage() {
  const { currentLanguage } = useLanguage();
  const intro = INTRO[currentLanguage] ?? INTRO.en;

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[var(--studio-bg)]">
      <Navigation />
      <main id="main-content" className="pt-20 md:pt-24">
        <header className="border-b border-[var(--studio-border)] py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--studio-text)] md:text-4xl">{intro.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--studio-muted)] md:text-lg">{intro.lead}</p>
          </div>
        </header>
        <ReviewsSection standalonePage />
      </main>
      <Footer />
    </div>
  );
}
