import { ArrowRight, Users, Target, TrendingUp, Award } from "lucide-react";

export default function About() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-beyonds">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-left">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              L'agence inbound marketing <span className="text-gradient-beyonds">RaiseMed.IA</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Avec près de <strong>5 ans d'expérience</strong>, RaiseMed.IA est reconnue pour son <strong>expertise en génération de leads</strong> qualifiés pour les entreprises locales.
              </p>
              
              <p>
                Grâce à notre expertise et notre réactivité, nous avons établi une relation de confiance durable avec l'ensemble de nos clients dans les secteurs médical, immobilier, artisanal et des services.
              </p>
            </div>

            <div className="mt-8">
              <a 
                href="https://tally.so/r/wvbMdQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-beyonds"
              >
                Découvrir l'agence
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-right">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&h=1417" 
              alt="Équipe RaiseMed.IA travaillant sur une stratégie inbound marketing" 
              className="rounded-2xl shadow-beyonds-lg w-full h-auto hover-scale"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="section-spacing-sm">
          <div className="stats-grid animate-slide-up delay-400">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4 mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-black mb-2">+50</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">
                projets réalisés
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Sites vitrines et stratégies inbound
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4 mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-black mb-2">5</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">
                années d'expérience
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Des profils experts en inbound marketing
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4 mx-auto">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-black mb-2">6</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">
                profils experts
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Pour vous accompagner à chaque étape
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4 mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-black mb-2">4,9/5</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">
                note client moyenne
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Reflétant la satisfaction de nos clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}