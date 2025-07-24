import { Globe, ShoppingCart, RefreshCw, Wrench, Server, Search, ArrowRight } from "lucide-react";

export default function Services() {
  const mainServices = [
    {
      icon: Globe,
      title: "Stratégie inbound marketing",
      description: "Notre agence spécialisée dans l'inbound marketing développe des stratégies d'attraction client sur-mesure."
    },
    {
      icon: ShoppingCart,
      title: "Génération de leads qualifiés", 
      description: "Nous créons des systèmes de capture de leads performants pour votre secteur d'activité."
    },
    {
      icon: RefreshCw,
      title: "Optimisation de conversion",
      description: "Améliorez vos taux de conversion avec des parcours clients optimisés et une expérience utilisateur parfaite."
    },
    {
      icon: Search,
      title: "SEO et référencement local",
      description: "Positionnez-vous en première page Google avec notre expertise en référencement naturel et local."
    },
    {
      icon: Wrench,
      title: "Marketing automation",
      description: "Automatisez vos campagnes marketing et le nurturing de vos prospects avec des outils performants."
    },
    {
      icon: Server,
      title: "Analytics et reporting",
      description: "Suivez vos performances en temps réel avec des tableaux de bord détaillés et des rapports personnalisés."
    }
  ];

  return (
    <section id="services" className="section-spacing bg-gray-50">
      <div className="container-beyonds">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
            Découvrez l'ensemble de nos <span className="text-gradient-beyonds">expertises</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Que votre objectif soit de générer des leads qualifiés, d'améliorer votre visibilité locale, 
              d'optimiser vos conversions ou de développer votre stratégie digitale, nous sommes à vos côtés.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nous vous proposons des solutions d'inbound marketing efficaces et pérennes qui répondent 
              aux besoins spécifiques des entreprises locales.
            </p>
          </div>
          
          <div className="mt-8">
            <a 
              href="https://tally.so/r/wvbMdQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-beyonds"
            >
              Nos expertises
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="expertise-grid">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`card-beyonds animate-slide-up delay-${(index + 1) * 100}`}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-black rounded-lg mb-6">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6">
                  <a 
                    href="https://tally.so/r/wvbMdQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black font-medium hover:text-gray-600 transition-colors group"
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up delay-700">
          <div className="bg-white rounded-2xl shadow-beyonds-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              RaiseMed.IA, votre <span className="text-gradient-beyonds">agence inbound marketing</span> à Paris
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Créer une stratégie inbound marketing demande des compétences spécialisées, une maîtrise 
              technique poussée, ainsi que l'accompagnement de professionnels chevronnés.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Que votre projet concerne la génération de leads pour un cabinet médical ou le développement 
              d'une stratégie digitale pour votre entreprise locale, notre <strong>agence d'inbound marketing</strong> est 
              là pour vous guider à chaque étape.
            </p>
            
            <a 
              href="https://tally.so/r/wvbMdQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-beyonds"
            >
              Nos réalisations
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}