import type { Metadata } from "next";
import Link from "next/link";
import DonateCta from "@/components/DonateCta";
import { PageHero, ProjectCards } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Projekte",
  description: "Schulbau, Verpflegung, Stipendien und Campus-Projekte der Uganda-Hilfe Unterland e.V.",
};

export default function ProjektePage() {
  return (
    <>
      <PageHero
        title="Unsere Projekte"
        subtitle="Vom Ubuntu Complex bis zur Schulküche — jede Spende fließt in konkrete Bildungsarbeit in Kasanje."
      />
      <section className="uhu-section">
        <div className="uhu-container">
          <ProjectCards />
          <div className="uhu-card mt-10 p-8">
            <h2 className="text-2xl font-extrabold text-[#14532d]">Zukunftsziel: 500 Kinder</h2>
            <p className="mt-4 max-w-3xl text-[#52796f]">
              Aktuell besuchen über 360 Kinder die St. Monica Junior School. Mit Ihrer Unterstützung erweitern wir
              Kapazitäten, Instandsetzung der älteren Gebäude und sportliche Angebote am Campus.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/spenden/" className="uhu-btn-primary text-sm">
                Jetzt spenden
              </Link>
              <Link href="/galerie/" className="uhu-btn-outline text-sm">
                Galerie ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
      <DonateCta compact />
    </>
  );
}
