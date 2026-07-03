import Link from "next/link";
import { BASE, CONTACTS, DONATION, NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#0f3d22] text-white">
      <div className="uhu-container uhu-section grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BASE}/images/logo.png`} alt="" width={140} height={58} className="mb-4 h-12 w-auto brightness-0 invert" />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-white/80">{SITE.description}</p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#52b788]">Navigation</h2>
          <ul className="space-y-2 text-sm text-white/85">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-[#d8f3dc]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#52b788]">
            <Link href="/kontakt/" className="hover:text-[#d8f3dc]">
              Kontakt
            </Link>
          </h2>
          <ul className="space-y-3 text-sm text-white/85">
            {CONTACTS.slice(0, 2).map((c) => (
              <li key={c.email}>
                <p className="font-semibold text-white">{c.name}</p>
                <a href={`mailto:${c.email}`} className="hover:text-[#d8f3dc]">
                  {c.email}
                </a>
              </li>
            ))}
            <li>
              <Link href="/kontakt/" className="font-semibold text-[#52b788] hover:text-[#d8f3dc]">
                Alle Kontakte →
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#52b788]">Spendenkonto</h2>
          <p className="text-sm text-white/85">
            {DONATION.holder}
            <br />
            IBAN: {DONATION.iban}
            <br />
            BIC: {DONATION.bic}
          </p>
          <Link href="/spenden/" className="uhu-btn-primary mt-4 text-sm">
            Jetzt spenden
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        <p>© {new Date().getFullYear()} {SITE.name} · Demo by AGRMULTIMEDIA</p>
      </div>
    </footer>
  );
}
