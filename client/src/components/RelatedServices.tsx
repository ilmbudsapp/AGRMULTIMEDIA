import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";
import { ROUTES } from "@/lib/siteRoutes";

interface RelatedService {
  title: string;
  description: string;
  href: string;
}

interface RelatedServicesCopy {
  title: string;
  services: RelatedService[];
}

const RELATED_SERVICES: Record<string, Record<Language, RelatedServicesCopy>> = {
  webdesign: {
    de: {
      title: "Verwandte Leistungen",
      services: [
        {
          title: "Webdesign & SEO",
          description: "Technisches SEO, On-Page Optimierung und GEO/AEO für bessere Rankings",
          href: ROUTES.webdesignSeo,
        },
        {
          title: "Video & Produktion",
          description: "Corporate Videos, Social Media Clips und Showreels für Ihre Website",
          href: "/videoproduktion",
        },
        {
          title: "Grafikdesign & Branding",
          description: "Logo, Corporate Design und visuelle Identität für Ihren Webauftritt",
          href: "/graphic-design",
        },
      ],
    },
    en: {
      title: "Related Services",
      services: [
        {
          title: "Web Design & SEO",
          description: "Technical SEO, on-page optimization and GEO/AEO for better rankings",
          href: ROUTES.webdesignSeo,
        },
        {
          title: "Video & Production",
          description: "Corporate videos, social media clips and showreels for your website",
          href: "/videoproduktion",
        },
        {
          title: "Graphic Design & Branding",
          description: "Logo, corporate design and visual identity for your web presence",
          href: "/graphic-design",
        },
      ],
    },
    "sr-Latn": {
      title: "Povezane usluge",
      services: [
        {
          title: "Webdesign i SEO",
          description: "Tehnički SEO, on-page optimizacija i GEO/AEO za bolje rangiranje",
          href: ROUTES.webdesignSeo,
        },
        {
          title: "Video i produkcija",
          description: "Korporativni video klipovi, social media snimci i showreels za vaš sajt",
          href: "/videoproduktion",
        },
        {
          title: "Grafički dizajn i brending",
          description: "Logo, korporativni dizajn i vizuelni identitet za vašu web prezentaciju",
          href: "/graphic-design",
        },
      ],
    },
    it: {
      title: "Servizi correlati",
      services: [
        {
          title: "Web Design e SEO",
          description: "SEO tecnico, ottimizzazione on-page e GEO/AEO per un miglior posizionamento",
          href: ROUTES.webdesignSeo,
        },
        {
          title: "Video e produzione",
          description: "Video aziendali, clip per social media e showreel per il tuo sito web",
          href: "/videoproduktion",
        },
        {
          title: "Graphic Design e Branding",
          description: "Logo, corporate design e identità visiva per la tua presenza web",
          href: "/graphic-design",
        },
      ],
    },
    sq: {
      title: "Shërbime të lidhura",
      services: [
        {
          title: "Web Design dhe SEO",
          description: "SEO teknik, optimizim on-page dhe GEO/AEO për klasifikim më të mirë",
          href: ROUTES.webdesignSeo,
        },
        {
          title: "Video dhe prodhim",
          description: "Video korporative, klipe për media sociale dhe showreels për faqen tuaj",
          href: "/videoproduktion",
        },
        {
          title: "Dizajn grafik dhe branding",
          description: "Logo, dizajn korporativ dhe identitet vizual për prezencën tuaj në web",
          href: "/graphic-design",
        },
      ],
    },
  },
  seo: {
    de: {
      title: "Verwandte Leistungen",
      services: [
        {
          title: "Webdesign Geislingen",
          description: "Moderne Business-Websites für lokale Firmen in der Region",
          href: ROUTES.webdesignGeislingen,
        },
        {
          title: "AI Content Creation",
          description: "SEO-optimierte Blog-Artikel und Content mit AI-Unterstützung",
          href: "/ai-content-creation",
        },
        {
          title: "Portfolio",
          description: "Erfolgreiche SEO-Projekte mit messbaren Ergebnissen",
          href: ROUTES.portfolio,
        },
      ],
    },
    en: {
      title: "Related Services",
      services: [
        {
          title: "Web Design Geislingen",
          description: "Modern business websites for local companies in the region",
          href: ROUTES.webdesignGeislingen,
        },
        {
          title: "AI Content Creation",
          description: "SEO-optimized blog articles and content with AI support",
          href: "/ai-content-creation",
        },
        {
          title: "Portfolio",
          description: "Successful SEO projects with measurable results",
          href: ROUTES.portfolio,
        },
      ],
    },
    "sr-Latn": {
      title: "Povezane usluge",
      services: [
        {
          title: "Webdesign Geislingen",
          description: "Moderni poslovni sajtovi za lokalne kompanije u regionu",
          href: ROUTES.webdesignGeislingen,
        },
        {
          title: "AI Content Creation",
          description: "SEO-optimizovani blog članci i sadržaj sa AI podrškom",
          href: "/ai-content-creation",
        },
        {
          title: "Portfolio",
          description: "Uspešni SEO projekti sa merljivim rezultatima",
          href: ROUTES.portfolio,
        },
      ],
    },
    it: {
      title: "Servizi correlati",
      services: [
        {
          title: "Web Design Geislingen",
          description: "Siti web aziendali moderni per aziende locali nella regione",
          href: ROUTES.webdesignGeislingen,
        },
        {
          title: "AI Content Creation",
          description: "Articoli di blog e contenuti ottimizzati SEO con supporto AI",
          href: "/ai-content-creation",
        },
        {
          title: "Portfolio",
          description: "Progetti SEO di successo con risultati misurabili",
          href: ROUTES.portfolio,
        },
      ],
    },
    sq: {
      title: "Shërbime të lidhura",
      services: [
        {
          title: "Web Design Geislingen",
          description: "Faqe web moderne biznesi për kompani lokale në rajon",
          href: ROUTES.webdesignGeislingen,
        },
        {
          title: "AI Content Creation",
          description: "Artikuj blogu dhe përmbajtje të optimizuar SEO me mbështetje AI",
          href: "/ai-content-creation",
        },
        {
          title: "Portfolio",
          description: "Projekte SEO të suksesshme me rezultate të matshme",
          href: ROUTES.portfolio,
        },
      ],
    },
  },
};

interface RelatedServicesProps {
  variant: "webdesign" | "seo";
}

export default function RelatedServices({ variant }: RelatedServicesProps) {
  const { currentLanguage } = useLanguage();
  const copy = RELATED_SERVICES[variant][currentLanguage];

  return (
    <section className="border-t border-[#2a2a30] py-16 md:py-20" aria-labelledby="related-services-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="related-services-heading"
          className="font-display mb-12 text-center text-2xl font-semibold tracking-tight text-white md:text-3xl"
        >
          {copy.title}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {copy.services.map((service) => (
            <Link key={service.href} href={service.href}>
              <article className="premium-card premium-card-hover group flex h-full flex-col rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{service.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:gap-3 transition-all">
                  <span>Mehr erfahren</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
