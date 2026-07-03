import Link from "next/link";
import FooterQrCode from "@/components/FooterQrCode";
import { HeaderLogo } from "@/components/HeaderLogo";
import PayPalDonateButton from "@/components/PayPalDonateButton";
import { CONTACTS, DONATION, NAV, SITE, SOCIAL } from "@/lib/site";

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "facebook") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.027 4.388 11.02 10.125 11.909v-8.42H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.42C19.612 23.093 24 18.1 24 12.073z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#52b788]/20 bg-[#0f3d22] text-white">
      <div className="uhu-container uhu-section pb-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <HeaderLogo imgClassName="mb-5 h-12 w-auto brightness-0 invert" width={140} height={58} />
            <p className="max-w-xs text-sm leading-relaxed text-white/80">{SITE.description}</p>
            <address className="mt-5 space-y-1 text-sm not-italic text-white/85">
              <p>{SITE.address}</p>
              <p>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-[#d8f3dc]">
                  Tel. {SITE.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`} className="hover:text-[#d8f3dc]">
                  {SITE.email}
                </a>
              </p>
            </address>
            <div className="mt-5 flex gap-3">
              {SOCIAL.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 transition hover:border-[#52b788] hover:bg-[#52b788]/20 hover:text-white"
                  aria-label={item.label}
                >
                  <SocialIcon icon={item.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#52b788]">Navigation</h2>
            <ul className="grid gap-2 text-sm text-white/85 sm:grid-cols-2 lg:grid-cols-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-[#d8f3dc] hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#52b788]">
              <Link href="/kontakt/" className="hover:text-[#d8f3dc]">
                Kontakt
              </Link>
            </h2>
            <ul className="space-y-4 text-sm text-white/85">
              {CONTACTS.map((c) => (
                <li key={c.email}>
                  <p className="font-semibold text-white">{c.name}</p>
                  {c.address && <p className="mt-1">{c.address}</p>}
                  <a href={`mailto:${c.email}`} className="mt-1 inline-block hover:text-[#d8f3dc]">
                    {c.email}
                  </a>
                  {c.phone && <p className="mt-1">Tel. {c.phone}</p>}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#52b788]">Spenden</h2>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">{DONATION.holder}</p>
              <p className="mt-2 font-mono text-sm text-white/90">IBAN: {DONATION.iban}</p>
              <p className="font-mono text-sm text-white/75">BIC: {DONATION.bic}</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/spenden/" className="uhu-btn-primary text-sm">
                  Jetzt spenden
                </Link>
                <PayPalDonateButton className="flex-1 sm:flex-none" />
              </div>
            </div>
            <div className="mt-5">
              <FooterQrCode />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="uhu-container flex flex-col items-center justify-between gap-2 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p>Demo by AGRMULTIMEDIA</p>
        </div>
      </div>
    </footer>
  );
}
