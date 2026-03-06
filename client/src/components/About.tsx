import { Award, Palette, Monitor, Sparkles, Briefcase, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import brandingImage from "@/assets/branding-image.jpg";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-[#f8f7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-electric-blue font-semibold text-sm uppercase tracking-[0.2em] mb-3">About</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-4 tracking-tight" data-testid="about-title">{t.about.title}</h2>
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
                src={brandingImage} 
                alt="MULTIMEDIA AGRONDESIGN branding projekti" 
                className="w-full h-auto"
                data-testid="about-team-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
            </div>
            
            {/* Floating achievement cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] p-6 border-l-4 border-electric-blue" data-testid="certification-card">
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

        {/* Skills / Competences */}
        {t.about.skills && (
          <div className="mt-24 pt-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-navy text-center mb-10" data-testid="about-skills-title">
              {t.about.skills.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors hover-lift shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-100">
                    <Palette className="w-5 h-5 text-gray-600" />
                  </div>
                  <h4 className="font-semibold text-navy">{t.about.skills.creative.title}</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {t.about.skills.creative.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors hover-lift shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-100">
                    <Monitor className="w-5 h-5 text-gray-600" />
                  </div>
                  <h4 className="font-semibold text-navy">{t.about.skills.software.title}</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {t.about.skills.software.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors hover-lift shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-100">
                    <Sparkles className="w-5 h-5 text-gray-600" />
                  </div>
                  <h4 className="font-semibold text-navy">{t.about.skills.aiTools.title}</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {t.about.skills.aiTools.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors hover-lift shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-100">
                    <Briefcase className="w-5 h-5 text-gray-600" />
                  </div>
                  <h4 className="font-semibold text-navy">{t.about.skills.office.title}</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {t.about.skills.office.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors hover-lift shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-100">
                    <Languages className="w-5 h-5 text-gray-600" />
                  </div>
                  <h4 className="font-semibold text-navy">{t.about.skills.languages.title}</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {t.about.skills.languages.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
