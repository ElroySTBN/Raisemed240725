import { Check, X, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/animations/HoverEffects";
import { ScrollAnimation, RevealText, MagneticElement, StaggerContainer } from "@/components/animations/ScrollAnimations";
import { SlidingTextReveal, Rotating3DCard, ElasticEntrance } from "@/components/animations/ScrollTriggerEffects";

export default function Methodology() {
  return (
    <section id="methodologie" className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Comment l'inbound marketing révolutionne votre acquisition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre méthodologie éprouvée transforme les visiteurs en ambassadeurs de votre marque
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Tableau de bord analytics montrant les performances marketing" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-dark mb-6">
              L'inbound marketing : une révolution par rapport aux méthodes traditionnelles
            </h3>
            <div className="space-y-6">
              {[
                { num: 1, color: 'bg-primary', title: 'ATTIRER (au lieu de déranger)', desc: 'Créez du contenu qui répond aux besoins de vos prospects plutôt que de les interrompre.' },
                { num: 2, color: 'bg-secondary', title: 'CONVERTIR (avec confiance)', desc: 'Transformez vos visiteurs en prospects grâce à des offres de valeur et du contenu expert.' },
                { num: 3, color: 'bg-accent', title: 'CONCLURE (en harmonie)', desc: 'Guidez vos prospects vers l\'achat grâce à un nurturing personnalisé et intelligent.' },
                { num: 4, color: 'bg-purple-600', title: 'ENCHANTER (pour fidéliser)', desc: 'Transformez vos clients en ambassadeurs qui recommandent activement vos services.' }
              ].map((step, index) => (
                <div 
                  key={step.num}
                  className="flex items-start space-x-4"
                >
                  <div 
                    className={`w-8 h-8 ${step.color} text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold`}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-dark mb-8 text-center">Comparaison : Outbound vs Inbound Marketing</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-red-600 mb-4 flex items-center">
                <Megaphone className="mr-2" />
                Outbound (Méthodes traditionnelles)
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <X className="text-red-500 w-5 h-5" />
                  <span className="text-gray-600">Publicité intrusive (TV, radio, bannières)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <X className="text-red-500 w-5 h-5" />
                  <span className="text-gray-600">Coûts élevés et ROI difficile à mesurer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <X className="text-red-500 w-5 h-5" />
                  <span className="text-gray-600">Communication à sens unique</span>
                </div>
                <div className="flex items-center space-x-3">
                  <X className="text-red-500 w-5 h-5" />
                  <span className="text-gray-600">Prospects non qualifiés</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-secondary mb-4 flex items-center">
                <Megaphone className="mr-2" />
                Inbound (Notre approche)
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="text-secondary w-5 h-5" />
                  <span className="text-gray-600">Contenu utile et recherché par vos prospects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-secondary w-5 h-5" />
                  <span className="text-gray-600">ROI mesurable et optimisé en permanence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-secondary w-5 h-5" />
                  <span className="text-gray-600">Relation de confiance et échanges bidirectionnels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-secondary w-5 h-5" />
                  <span className="text-gray-600">Prospects hautement qualifiés et prêts à acheter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
