import type { Metadata } from "next";
import DonateCta from "@/components/DonateCta";
import { DownloadCards, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Formulare, Broschüren und Spendeninformationen der Uganda-Hilfe Unterland e.V. zum Download.",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Downloads"
        subtitle="Formulare, Projektinformationen und Spendenunterlagen – als PDF zum Herunterladen."
      />
      <section className="uhu-section">
        <div className="uhu-container">
          <DownloadCards />
        </div>
      </section>
      <DonateCta compact />
    </>
  );
}
