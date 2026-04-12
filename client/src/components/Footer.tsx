import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "wouter";
import { Facebook, Instagram, Linkedin, MessageCircle, Mail as MailIcon } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "@/lib/contact";

const FACEBOOK_URL = "https://www.facebook.com/halidosmani74";
const INSTAGRAM_URL = "https://www.instagram.com/agrondesign/";
const LINKEDIN_URL = "https://www.linkedin.com/in/agron-osmani-228947266/";
const EMAIL_LINK = "mailto:agron6922@gmail.com";

export default function Footer() {
  const { t, tSpec } = useLanguage();
  const [location] = useLocation();
  const isHome = location === "/";

  const scrollToSection = (sectionId: string) => {
    if (!isHome) return;
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    { label: tSpec.servicesPreview.webUi.title, href: "/web-design" },
    { label: tSpec.servicesPreview.graphicBranding.title, href: "/graphic-design" },
    { label: tSpec.servicesPreview.videoMotion.title, href: "/video-production" },
    { label: tSpec.servicesPreview.aiContent.title, href: "/digital-marketing" },
  ];

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div data-testid="footer-brand">
            <div className="text-xl font-bold text-white mb-4">AGR Multimedia</div>
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
              <li>
                {isHome ? <button type="button" onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">{tSpec.nav.about}</button> : <Link href="/#about" className="text-gray-400 hover:text-white">{tSpec.nav.about}</Link>}
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">{tSpec.nav.portfolio}</Link>
              </li>
              <li>
                {isHome ? <button type="button" onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">{tSpec.nav.contact}</button> : <Link href="/contact" className="text-gray-400 hover:text-white">{tSpec.nav.contact}</Link>}
              </li>
            </ul>
          </div>

          <div data-testid="footer-contact">
            <h4 className="text-lg font-semibold mb-6 text-white">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-center gap-2">
                <span>📞</span>
                <a href={`tel:${PHONE_TEL}`} className="hover:text-white transition-colors">{PHONE_DISPLAY}</a>
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:agron6922@gmail.com" className="hover:text-white transition-colors">agron6922@gmail.com</a>
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span>📍</span>
                {t.footer.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8" data-testid="footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">{t.footer.copyright}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">{t.footer.privacy}</Link>
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">{t.footer.terms}</Link>
              <Link href="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors">{t.footer.cookies}</Link>
              <Link href="/impresum" className="text-gray-500 hover:text-white text-sm transition-colors">{t.footer.impresum}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
