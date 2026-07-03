import type { Metadata } from "next";
import DonateCta from "@/components/DonateCta";
import { PageHero } from "@/components/Sections";
import { BASE, TEAM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Geschichte und Mission des Uganda-Hilfe Unterland e.V. — Bildung für Kinder in Kasanje.",
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        title="Über uns"
        subtitle="Aus einer persönlichen Freundschaft wurde ein Verein, der Kindern in Kasanje echte Perspektiven eröffnet."
      />
      <section className="uhu-section">
        <div className="uhu-container grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="prose prose-lg max-w-none text-[#52796f]">
            <p>
              Der Verein <strong className="text-[#14532d]">Uganda-Hilfe Unterland e.V. (UHU)</strong> entstand aus
              einer privaten Initiative. Pfarrer Denis Mpanga aus Uganda promovierte an der Universität Tübingen — dort
              lernten er und Wolfgang Friederich 2012 einander kennen.
            </p>
            <p>
              Denis Mpanga engagiert sich seit 2005 im Bildungsbereich in einem ländlichen Raum, etwa 40 km südwestlich
              von Kampala. Gemeinsam reisten sie noch im selben Jahr nach Uganda, wo die St. Monica Junior School in
              Kasanje gerade ihr erstes Schulgebäude eröffnete.
            </p>
            <p>
              Am <strong className="text-[#14532d]">22. Januar 2015</strong> wurde der Verein gegründet. Neben Bau- und
              Ausstattungskosten finanzieren Spenden Lernmittel, Lehrkräfte, Schulbusse, tägliche Verpflegung und
              Schuluniformen.
            </p>
            <p>
              Im Juli 2015 folgte die Erweiterung um vier Klassenzimmer — damals mit nur 28 Vereinsmitgliedern und
              Kosten von ca. 25.000 €. Heute ist der <strong className="text-[#14532d]">Ubuntu Complex</strong> mit
              über 200.000 € Investition das Herzstück — gewidmet im März 2024, benannt nach dem Prinzip
              „Gemeinschaftssinn“.
            </p>
          </div>
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BASE}/images/team-goeppingen.jpg`} alt="Uganda-Team Göppingen" className="w-full object-cover" />
            </div>
            <div className="uhu-card p-6">
              <h2 className="text-xl font-extrabold text-[#14532d]">Unser Vorstand</h2>
              <ul className="mt-4 space-y-3">
                {TEAM.map((member) => (
                  <li key={member.name} className="border-b border-[#14532d]/10 pb-3 last:border-0 last:pb-0">
                    <p className="font-bold text-[#14532d]">{member.name}</p>
                    <p className="text-sm text-[#52796f]">{member.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <DonateCta compact />
    </>
  );
}
