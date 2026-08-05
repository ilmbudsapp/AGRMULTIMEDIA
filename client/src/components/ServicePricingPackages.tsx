import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ROUTES } from "@/lib/siteRoutes";

type Package = {
  name: string;
  priceFrom: string;
  features: string[];
  highlight?: boolean;
};

const PACKAGES_DE: Package[] = [
  {
    name: "Basis-Website",
    priceFrom: "ab 890 €",
    features: [
      "Individuelles Design für Ihr Unternehmen",
      "Bis zu 5 Seiten (Start, Leistungen, Über uns, Kontakt)",
      "Mobile Optimierung & schnelle Ladezeiten",
      "Kontaktformular & WhatsApp-Integration",
    ],
  },
  {
    name: "SEO-optimierte Website",
    priceFrom: "ab 1.490 €",
    features: [
      "Alles aus Basis-Website",
      "On-Page-SEO (Titel, Meta, Überschriften, Struktur)",
      "Google Maps & lokale Signale",
      "FAQ-Bereich & Schema-Grundlage",
      "Erweiterte Leistungsseiten",
    ],
    highlight: true,
  },
  {
    name: "Komplettpaket Webdesign + SEO",
    priceFrom: "ab 2.290 €",
    features: [
      "Alles aus SEO-optimierte Website",
      "Ausführlicher Content für Handwerk & KMU",
      "Google Business Profil Abstimmung",
      "Conversion-Optimierung (CTA, Vertrauenselemente)",
      "3 Monate technischer Support nach Launch",
    ],
  },
];

const PACKAGES_EN: Package[] = [
  {
    name: "Basic website",
    priceFrom: "from €890",
    features: [
      "Custom design for your business",
      "Up to 5 pages (home, services, about, contact)",
      "Mobile optimisation & fast loading",
      "Contact form & WhatsApp integration",
    ],
  },
  {
    name: "SEO-optimised website",
    priceFrom: "from €1,490",
    features: [
      "Everything in Basic",
      "On-page SEO (titles, meta, headings, structure)",
      "Google Maps & local signals",
      "FAQ section & schema foundation",
      "Extended service pages",
    ],
    highlight: true,
  },
  {
    name: "Complete web design + SEO",
    priceFrom: "from €2,290",
    features: [
      "Everything in SEO package",
      "In-depth content for trades & SMEs",
      "Google Business Profile alignment",
      "Conversion optimisation (CTA, trust elements)",
      "3 months technical support after launch",
    ],
  },
];

export default function ServicePricingPackages() {
  const { currentLanguage } = useLanguage();
  const packages = currentLanguage === "en" ? PACKAGES_EN : PACKAGES_DE;
  const heading = currentLanguage === "en" ? "Pricing overview (from)" : "Preisübersicht (ab)";
  const note =
    currentLanguage === "en"
      ? "All prices are starting points (“from”) and depend on scope, content and requirements. You receive a transparent individual quote after a free consultation."
      : "Alle Preise sind Richtwerte („ab“) und hängen von Umfang, Inhalten und Anforderungen ab. Nach einem kostenlosen Erstgespräch erhalten Sie ein transparentes Individualangebot.";
  const cta = currentLanguage === "en" ? "Request a free quote" : "Kostenloses Angebot anfragen";

  return (
    <section className="border-t border-[#333333] py-16 md:py-24" aria-labelledby="pricing-packages-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="pricing-packages-heading" className="text-center text-2xl font-semibold text-white md:text-3xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/70 md:text-base">{note}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`rounded-2xl border p-6 md:p-8 ${
                pkg.highlight
                  ? "border-blue-400/40 bg-blue-500/10"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <h3 className="text-lg font-semibold text-white">{pkg.name}</h3>
              <p className="mt-2 text-2xl font-bold text-blue-200">{pkg.priceFrom}</p>
              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                {pkg.features.map((f) => (
                  <li key={f} className="leading-relaxed">
                    · {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link
            href={ROUTES.kontakt}
            className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0a0a0f] transition hover:bg-white/90"
          >
            {cta}
          </Link>
        </p>
      </div>
    </section>
  );
}
