import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-beyonds pt-20">
      <div className="container-beyonds">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight mb-8 text-balance">
              Agence <span className="text-gradient-beyonds">inbound marketing</span> à Paris
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-slide-up delay-200">
            <p className="text-xl md:text-2xl text-gray-600 mb-12 text-balance max-w-3xl mx-auto leading-relaxed">
              Située au cœur de Paris, RaiseMed.IA est une agence digitale spécialisée dans la <strong>génération de leads qualifiés</strong> sur-mesure.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-up delay-400">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                href="https://tally.so/r/wvbMdQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-beyonds-outline text-lg px-8 py-4"
              >
                Nous contacter
              </a>
              <a 
                href="https://tally.so/r/wvbMdQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-beyonds text-lg px-8 py-4"
              >
                <Calendar className="h-5 w-5" />
                Prendre RDV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos Marquee */}
      <div className="animate-slide-up delay-600">
        <div className="border-t border-gray-100 py-12 bg-gray-50/50">
          <div className="container-beyonds">
            <div className="text-center mb-8">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Ils nous font confiance
              </p>
            </div>
            
            {/* Logo Marquee */}
            <div className="marquee-container">
              <div className="flex items-center space-x-16 animate-marquee">
                {/* Repeat logos for continuous scroll */}
                {[...Array(3)].map((_, groupIndex) => (
                  <div key={groupIndex} className="flex items-center space-x-16 flex-shrink-0">
                    <img 
                      src="/assets/Logo Pharma MC - SBG_1753043771294.png" 
                      alt="Pharmacie Bergère" 
                      className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                    />
                    <img 
                      src="/assets/image_1753043820433.png" 
                      alt="Century 21" 
                      className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                    />
                    <img 
                      src="/assets/image_1753043825883.png" 
                      alt="Supra Sécurité" 
                      className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                    />
                    <img 
                      src="/assets/image_1753043831484.png" 
                      alt="La Vaux Immobilier" 
                      className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                    />
                    <img 
                      src="/assets/image_1753043879108.png" 
                      alt="Optic 2000" 
                      className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                    />
                    <img 
                      src="/assets/image_1753043896859.png" 
                      alt="Client 6" 
                      className="h-8 opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}