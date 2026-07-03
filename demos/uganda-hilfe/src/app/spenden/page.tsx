import type { Metadata } from "next";
import Link from "next/link";
import DonateCta from "@/components/DonateCta";
import PayPalDonateButton from "@/components/PayPalDonateButton";
import { PageHero } from "@/components/Sections";
import { BASE, DONATION } from "@/lib/site";

export const metadata: Metadata = {
  title: "Spenden",
  description: "Spendenkonto, Stipendien und Unterstützungsmöglichkeiten für Uganda-Hilfe Unterland e.V.",
};

export default function SpendenPage() {
  return (
    <>
      <PageHero
        title="Spenden"
        subtitle="Ihre Geldspende ist eine wertvolle Unterstützung für unsere Projekte in Uganda."
      />
      <section className="uhu-section">
        <div className="uhu-container grid gap-8 lg:grid-cols-2">
          <div className="uhu-card p-8">
            <h2 className="text-2xl font-extrabold text-[#14532d]">Banküberweisung</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-bold text-[#14532d]">Kontoinhaber</dt>
                <dd className="text-[#52796f]">{DONATION.holder}</dd>
              </div>
              <div>
                <dt className="font-bold text-[#14532d]">Bank</dt>
                <dd className="text-[#52796f]">{DONATION.bank}</dd>
              </div>
              <div>
                <dt className="font-bold text-[#14532d]">IBAN</dt>
                <dd className="font-mono text-base text-[#14532d]">{DONATION.iban}</dd>
              </div>
              <div>
                <dt className="font-bold text-[#14532d]">BIC</dt>
                <dd className="font-mono text-[#52796f]">{DONATION.bic}</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-[#52796f]">
              Spendenbescheinigung auf Wunsch. Regelmäßige Unterstützung per SEPA-Lastschrift ist ebenfalls möglich.
            </p>
            <a href={`${BASE}/downloads/sepa-lastschrift-formular.pdf`} download className="uhu-btn-outline mt-4 inline-flex text-sm">
              SEPA-Formular herunterladen
            </a>
          </div>
          <div className="uhu-card p-8">
            <h2 className="text-2xl font-extrabold text-[#14532d]">Stipendium schenken</h2>
            <p className="mt-4 text-[#52796f]">
              Mit <strong className="text-[#14532d]">{DONATION.stipendAmount} € pro Jahr</strong> finanzieren Sie
              Schulgeld, Uniform, Lernmaterial und Verpflegung für ein Kind – besonders wichtig für Waisenkinder.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#52796f]">
              <li>✓ Persönliche Patenschaft möglich</li>
              <li>✓ Direkte Wirkung in Kasanje</li>
              <li>✓ Bildung schafft Zukunft</li>
            </ul>
            <Link href="/projekte/" className="mt-6 inline-flex text-sm font-bold text-[#40916c] hover:underline">
              Mehr erfahren →
            </Link>
          </div>
          <div className="uhu-card flex flex-col items-center justify-center p-8 text-center lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#14532d]">PayPal-Spende</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#52796f]">
              Unterstützen Sie uns schnell und sicher online – ideal für Einzelspenden.
            </p>
            <div className="mt-6">
              <PayPalDonateButton size="large" />
            </div>
          </div>
        </div>
      </section>
      <DonateCta
        title="Jede Spende zählt"
        text="Ob Einzelspende oder Stipendium – Sie ermöglichen Kindern sichere Bildung, Verpflegung und Hoffnung."
      />
    </>
  );
}
