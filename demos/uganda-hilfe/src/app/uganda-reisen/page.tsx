import type { Metadata } from "next";
import DonateCta from "@/components/DonateCta";
import { PageHero, Timeline } from "@/components/Sections";
import { BASE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Uganda Reisen",
  description: "Reiseberichte und Meilensteine der Uganda-Hilfe Unterland — von 2012 bis heute.",
};

export default function UgandaReisenPage() {
  return (
    <>
      <PageHero
        title="Uganda Reisen"
        subtitle="Persönliche Begegnungen vor Ort stärken Vertrauen, Freundschaft und unsere Projektarbeit."
      />
      <section className="uhu-section">
        <div className="uhu-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-3xl lg:sticky lg:top-28 lg:self-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BASE}/images/trip-2026.jpg`} alt="Uganda-Reise 2026" className="w-full object-cover" />
          </div>
          <Timeline />
        </div>
      </section>
      <DonateCta
        compact
        title="Reisen verbinden — Spenden verändern"
        text="Reisekosten tragen unsere Helfer in der Regel selbst. Ihre Spende wirkt direkt in Schulbau, Verpflegung und Unterricht."
      />
    </>
  );
}
