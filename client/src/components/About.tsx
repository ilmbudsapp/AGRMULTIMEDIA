import { Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4" data-testid="about-title">{t.about.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="about-subtitle">
            {t.about.subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-navy" data-testid="about-story-title">{t.about.storyTitle}</h3>
            <p className="text-gray-600 leading-relaxed" data-testid="about-story-p1">
              {t.about.storyP1}
            </p>
            <p className="text-gray-600 leading-relaxed" data-testid="about-story-p2">
              {t.about.storyP2}
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center" data-testid="stat-projects">
                <div className="text-3xl font-bold text-electric-blue">50+</div>
                <div className="text-gray-600">{t.about.stats.projects}</div>
              </div>
              <div className="text-center" data-testid="stat-clients">
                <div className="text-3xl font-bold text-electric-blue">30+</div>
                <div className="text-gray-600">{t.about.stats.clients}</div>
              </div>
              <div className="text-center" data-testid="stat-years">
                <div className="text-3xl font-bold text-electric-blue">5+</div>
                <div className="text-gray-600">{t.about.stats.years}</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Professional team photo or office space */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/attached_assets/BRANDNG_1755470993941.jpg" 
                alt="MULTIMEDIA AGRONDESIGN branding projekti" 
                className="w-full h-auto"
                data-testid="about-team-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
            </div>
            
            {/* Floating achievement cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border-l-4 border-electric-blue" data-testid="certification-card">
              <div className="flex items-center">
                <Award className="text-electric-blue w-8 h-8 mr-3" />
                <div>
                  <div className="font-semibold">{t.about.certification.certified}</div>
                  <div className="text-sm text-gray-600">{t.about.certification.googlePartner}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
