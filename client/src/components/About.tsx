import { Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4" data-testid="about-title">O AGR Multimedia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="about-subtitle">
            Kreiramo izuzetne digitalne doživljaje koji pokreću vaš biznis napred
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-navy" data-testid="about-story-title">Naša priča</h3>
            <p className="text-gray-600 leading-relaxed" data-testid="about-story-p1">
              AGR Multimedia je osnovan sa vizijom da pomaže biznis-ima da se istaknu u digitalnom svetu. Specijalizovani smo za kreiranje visokih kvaliteta multimedia sadržaja koji privlači pažnju, gradi brendove i pokreće rezultate.
            </p>
            <p className="text-gray-600 leading-relaxed" data-testid="about-story-p2">
              Naš tim sastoji od iskusnih dizajnera, developera i marketing stručnjaka koji rade zajedno da bi vašim idejama dali život kroz inovativna digitalna rešenja.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center" data-testid="stat-projects">
                <div className="text-3xl font-bold text-electric-blue">50+</div>
                <div className="text-gray-600">Projekata</div>
              </div>
              <div className="text-center" data-testid="stat-clients">
                <div className="text-3xl font-bold text-electric-blue">30+</div>
                <div className="text-gray-600">Klijenata</div>
              </div>
              <div className="text-center" data-testid="stat-years">
                <div className="text-3xl font-bold text-electric-blue">5+</div>
                <div className="text-gray-600">Godina</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Professional team photo or office space */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="AGR Multimedia tim za rad" 
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
                  <div className="font-semibold">Sertifikovani</div>
                  <div className="text-sm text-gray-600">Google Partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
