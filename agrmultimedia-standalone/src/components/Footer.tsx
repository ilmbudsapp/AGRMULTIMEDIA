import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "wouter";
import { Facebook, Instagram, Linkedin, MessageCircle, Mail as MailIcon, Phone, MapPin } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/contact";
import { toServiceLang, type ServiceLang } from "@/lib/servicePageI18n";
import FooterLegalBlock from "@/components/FooterLegalBlock";
import { getPremiumTranslations } from "@/lib/premiumI18n";

const LOGO_WEBP = "/agr-logo-white.webp";
const LOGO_PNG = "/agr-logo-white.png";

function FooterLogo({ className }: { className: string }) {
  return (
    <picture>
      <source srcSet={LOGO_WEBP} type="image/webp" />
      <img src={LOGO_PNG} alt="AGR Multimedia" className={className} loading="lazy" decoding="async" />
    </picture>
  );
}

const FACEBOOK_URL = "https://www.facebook.com/halidosmani74";
const INSTAGRAM_URL = "https://www.instagram.com/agrondesign/";
const LINKEDIN_URL = "https://www.linkedin.com/in/agron-osmani-228947266/";
const EMAIL_LINK = "mailto:agron6922@gmail.com";

export default function Footer() {
  const { t, tSpec, currentLanguage } = useLanguage();
  const premium = getPremiumTranslations(currentLanguage);
  const [location] = useLocation();
  const isHome = location === "/";

  const scrollToSection = (sectionId: string) => {
    if (!isHome) return;
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ block: "start", behavior: "auto" });
  };

  const mainNavLinks = [
    { href: "/webdesign-seo", label: tSpec.nav.webdesignSeo },
    { href: "/videoproduktion", label: tSpec.nav.videoProduction },
    { href: "/portfolio", label: tSpec.nav.portfolio },
    { href: "/bewertungen", label: tSpec.nav.reviews },
    { href: "/kontakt", label: tSpec.nav.contact },
  ];

  const serviceLabelsByLang: Record<ServiceLang, string[]> = {
    en: [
      "Graphic design",
      "AI content creation",
      "Web design & SEO",
      "Apps & development",
    ],
    de: [
      "Grafikdesign",
      "KI-Inhaltserstellung",
      "Webdesign & SEO",
      "Apps & Entwicklung",
    ],
    it: [
      "Grafica",
      "Contenuti con IA",
      "Web e SEO",
      "App e sviluppo",
    ],
    sr: [
      "Grafički dizajn",
      "AI sadržaj",
      "Veb dizajn i SEO",
      "Aplikacije i razvoj",
    ],
    al: [
      "Dizajn grafik",
      "Përmbajtje me IA",
      "Ueb-i dhe SEO",
      "Aplikacione dhe zhvillim",
    ],
  };
  const currentLang = toServiceLang(currentLanguage);
  const services = [
    { label: serviceLabelsByLang[currentLang][0], href: "/graphic-design" },
    { label: serviceLabelsByLang[currentLang][1], href: "/ai-content-creation" },
    { label: serviceLabelsByLang[currentLang][2], href: "/webdesign-seo" },
    { label: serviceLabelsByLang[currentLang][3], href: "/application-design-development" },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#333333] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div data-testid="footer-brand">
            <div className="mb-4">
              {isHome ? (
                <button
                  type="button"
                  onClick={() => scrollToSection("hero-h1")}
                  className="block w-fit rounded-sm outline-offset-4 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40"
                  aria-label={tSpec.nav.home}
                >
                  <FooterLogo className="h-10 w-auto md:h-11" />
                </button>
              ) : (
                <Link
                  href="/"
                  className="inline-block w-fit rounded-sm outline-offset-4 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40"
                  aria-label={tSpec.nav.home}
                >
                  <FooterLogo className="h-10 w-auto md:h-11" />
                </Link>
              )}
            </div>
            <p className="text-gray-400 mb-6 text-sm">{t.footer.brand}</p>
            <div className="flex flex-wrap gap-3">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
                <span className="text-sm">Facebook</span>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
                <span className="text-sm">Instagram</span>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a href={EMAIL_LINK} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2" aria-label="Email">
                <MailIcon className="w-4 h-4" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>

          <div data-testid="footer-services">
            <h4 className="text-lg font-semibold mb-6 text-white">{t.footer.services}</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-400 hover:text-white transition-colors duration-300 text-left block">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

            <div data-testid="footer-company">
              <h4 className="text-lg font-semibold mb-6 text-white">{t.footer.company}</h4>
              <ul className="space-y-3">
                {mainNavLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300 block">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 block">
                    {tSpec.nav.about}
                  </Link>
                </li>
              </ul>
            </div>

          <div data-testid="footer-contact">
            <h4 className="text-lg font-semibold mb-6 text-white">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-gray-500" aria-hidden />
                <a href={`tel:${PHONE_TEL}`} className="hover:text-white transition-colors">{PHONE_DISPLAY}</a>
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <MailIcon className="w-4 h-4 shrink-0 text-gray-500" aria-hidden />
                <a href="mailto:agron6922@gmail.com" className="hover:text-white transition-colors">agron6922@gmail.com</a>
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-gray-500" aria-hidden />
                {t.footer.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mb-12 w-full max-w-5xl">
          <FooterLegalBlock />
        </div>

        <div className="border-t border-white/10 pt-8" data-testid="footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">{t.footer.copyright}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
                {premium.legal.datenschutz}
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">{t.footer.terms}</Link>
              <Link href="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors">{t.footer.cookies}</Link>
              <Link href="/impresum" className="text-gray-500 hover:text-white text-sm transition-colors">{premium.legal.impressum}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
