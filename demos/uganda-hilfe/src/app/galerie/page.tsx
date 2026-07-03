import type { Metadata } from "next";
import DonateCta from "@/components/DonateCta";
import { GalleryGrid, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Eindrücke aus Kasanje — Schule, Kinder, Projekte und Uganda-Reisen.",
};

export default function GaleriePage() {
  return (
    <>
      <PageHero title="Galerie" subtitle="Momente aus dem Alltag der St. Monica Junior School und unserer Projekte." />
      <section className="uhu-section">
        <div className="uhu-container">
          <GalleryGrid />
        </div>
      </section>
      <DonateCta compact />
    </>
  );
}
