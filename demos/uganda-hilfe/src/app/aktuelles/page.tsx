import type { Metadata } from "next";
import Link from "next/link";
import DonateCta from "@/components/DonateCta";
import { NewsCards, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Aktuelles",
  description: "Neuigkeiten aus Uganda und vom Uganda-Hilfe Unterland e.V.",
};

export default function AktuellesPage() {
  return (
    <>
      <PageHero title="Aktuelles" subtitle="Berichte von Reisen, Bauprojekten und Meilensteinen unserer Arbeit." />
      <section className="uhu-section">
        <div className="uhu-container">
          <NewsCards />
          <div className="uhu-card mt-10 border-[#40916c]/20 bg-[#f0faf3] p-6">
            <h2 className="text-lg font-extrabold text-[#14532d]">Nächster Termin</h2>
            <p className="mt-2 text-[#52796f]">
              Spendengala am <strong>18.09.2026, 19:00 Uhr</strong> im Hauk-Erkinger-Saal in Rechberghausen – Einblicke
              ins Schulprojekt mit Dr. Denis Mpanga und Fabio Tino Vercelli.
            </p>
            <Link href="/kontakt/" className="mt-4 inline-flex text-sm font-bold text-[#40916c] hover:underline">
              Anmeldung und Kontakt →
            </Link>
          </div>
        </div>
      </section>
      <DonateCta compact />
    </>
  );
}
