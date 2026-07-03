import Link from "next/link";
import PayPalDonateButton from "@/components/PayPalDonateButton";
import ScrollReveal from "@/components/ScrollReveal";
import { BASE, DONATION } from "@/lib/site";

export default function HomeDonationSection() {
  return (
    <section className="uhu-section bg-[#f0faf3]" aria-labelledby="home-donation-heading">
      <div className="uhu-container">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#40916c]">Spenden</p>
            <h2 id="home-donation-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-[#14532d] md:text-5xl">
              Jede Spende verändert ein Leben.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#52796f]">
              Unterstützen Sie unsere Projekte in Uganda sicher und unkompliziert.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          <ScrollReveal delay={80}>
            <article className="uhu-card uhu-hover-lift flex h-full flex-col p-7">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#d8f3dc] text-[#14532d]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M3 10h18M5 6h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                  <path d="M7 15h4M7 11h8" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-[#14532d]">Banküberweisung</h3>
              <dl className="mt-5 space-y-3 text-sm">
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
            </article>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <article className="uhu-card uhu-hover-lift flex h-full flex-col p-7">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#d8f3dc] text-[#14532d]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M8 13h8M8 17h5" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-[#14532d]">SEPA Lastschrift</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#52796f]">
                Mit dem SEPA-Lastschriftmandat können Sie uns regelmäßig und zuverlässig unterstützen. Formular
                ausfüllen, unterschreiben und an uns senden.
              </p>
              <p className="mt-4 text-xs text-[#52796f]">
                Verwendungszweck: <strong className="text-[#14532d]">{DONATION.sepaPurpose}</strong>
              </p>
              <a
                href={`${BASE}/downloads/sepa-lastschrift-formular.pdf`}
                download
                className="uhu-btn-outline mt-6 w-full text-sm"
              >
                SEPA-Formular herunterladen
              </a>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <article className="uhu-card uhu-hover-lift flex h-full flex-col items-center justify-center p-7 text-center">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#d8f3dc] text-[#14532d]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-[#14532d]">PayPal Spende</h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#52796f]">
                Spenden Sie schnell und sicher online — ideal für Einzelspenden aus dem In- und Ausland.
              </p>
              <div className="mt-8 w-full">
                <PayPalDonateButton size="large" className="w-full" />
              </div>
              <Link href="/spenden/" className="mt-4 text-sm font-semibold text-[#40916c] hover:underline">
                Alle Spendenoptionen →
              </Link>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
