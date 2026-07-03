import type { Metadata } from "next";
import Link from "next/link";
import DonateCta from "@/components/DonateCta";
import { PageHero } from "@/components/Sections";
import { CONTACTS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt zum Uganda-Hilfe Unterland e.V. in Göppingen und Schwaigern.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero title="Kontakt" subtitle="Wir freuen uns auf Ihre Nachricht – ob Spende, Stipendium oder allgemeine Fragen." />
      <section className="uhu-section">
        <div className="uhu-container grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {CONTACTS.map((contact) => (
              <article key={contact.email} className="uhu-card p-6">
                <h2 className="text-lg font-extrabold text-[#14532d]">{contact.name}</h2>
                {contact.address && <p className="mt-2 text-sm text-[#52796f]">{contact.address}</p>}
                <p className="mt-3">
                  <a href={`mailto:${contact.email}`} className="font-semibold text-[#40916c] hover:underline">
                    {contact.email}
                  </a>
                </p>
                {contact.phone && <p className="mt-1 text-sm text-[#52796f]">Tel. {contact.phone}</p>}
              </article>
            ))}
          </div>
          <form className="uhu-card p-8" aria-label="Kontaktformular">
            <h2 className="text-xl font-extrabold text-[#14532d]">Nachricht senden</h2>
            <p className="mt-2 text-sm text-[#52796f]">
              Demo-Formular – in der Live-Version an info@{SITE.email.split("@")[1]} angebunden.
            </p>
            <p className="mt-2 text-sm text-[#52796f]">
              Fragen zu{" "}
              <Link href="/spenden/" className="font-semibold text-[#40916c] hover:underline">
                Spenden
              </Link>{" "}
              oder{" "}
              <Link href="/projekte/" className="font-semibold text-[#40916c] hover:underline">
                Projekten
              </Link>
              ? Wir helfen gerne weiter.
            </p>
            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="text-sm font-semibold text-[#14532d]">Name</span>
                <input
                  type="text"
                  name="name"
                  className="mt-1 w-full rounded-xl border border-[#14532d]/15 px-4 py-3 text-sm outline-none focus:border-[#40916c] focus:ring-2 focus:ring-[#40916c]/20"
                  autoComplete="name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-[#14532d]">E-Mail</span>
                <input
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-xl border border-[#14532d]/15 px-4 py-3 text-sm outline-none focus:border-[#40916c] focus:ring-2 focus:ring-[#40916c]/20"
                  autoComplete="email"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-[#14532d]">Nachricht</span>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-[#14532d]/15 px-4 py-3 text-sm outline-none focus:border-[#40916c] focus:ring-2 focus:ring-[#40916c]/20"
                />
              </label>
              <button type="button" className="uhu-btn-primary w-full sm:w-auto">
                Nachricht senden (Demo)
              </button>
            </div>
          </form>
        </div>
      </section>
      <DonateCta compact />
    </>
  );
}
