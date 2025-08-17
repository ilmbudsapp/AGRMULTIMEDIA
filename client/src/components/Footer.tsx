import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div data-testid="footer-brand">
            <div className="text-2xl font-bold gradient-text mb-4">MULTIMEDIA AGRONDESIGN</div>
            <p className="text-gray-300 mb-6">
              {t.footer.brand}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                data-testid="footer-social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                data-testid="footer-social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                data-testid="footer-social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div data-testid="footer-services">
            <h4 className="text-lg font-semibold mb-6">{t.footer.services}</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">{t.services.items.webDesign.title}</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">{t.services.items.graphicDesign.title}</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">{t.services.items.videoProduction.title}</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">{t.services.items.digitalMarketing.title}</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">{t.services.items.photography.title}</button></li>
            </ul>
          </div>
          
          <div data-testid="footer-company">
            <h4 className="text-lg font-semibold mb-6">{t.footer.company}</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">{t.nav.about}</button></li>
              <li><button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">{t.nav.portfolio}</button></li>
              <li><button onClick={() => scrollToSection('blog')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">{t.nav.blog}</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">{t.nav.contact}</button></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">{t.footer.career}</a></li>
            </ul>
          </div>
          
          <div data-testid="footer-contact">
            <h4 className="text-lg font-semibold mb-6">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-center">
                <span className="mr-2">📞</span>
                {t.footer.phone}
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="mr-2">📧</span>
                {t.footer.email}
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="mr-2">📍</span>
                {t.footer.location}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8" data-testid="footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              {t.footer.copyright}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">{t.footer.privacy}</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">{t.footer.terms}</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">{t.footer.cookies}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
