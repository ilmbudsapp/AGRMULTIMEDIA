import type { Metadata } from "next";
import Link from "next/link";
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
          <p className="mt-8 text-center text-sm text-[#52796f]">
            Mehr über unsere Arbeit erfahren Sie unter{" "}
            <Link href="/projekte/" className="font-bold text-[#40916c] hover:underline">
              Projekte
            </Link>{" "}
            und{" "}
            <Link href="/uganda-reisen/" className="font-bold text-[#40916c] hover:underline">
              Uganda Reisen
            </Link>
            .
          </p>
        </div>
      </section>
      <DonateCta compact />
    </>
  );
}
