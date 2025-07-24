import { Target, Users, TrendingUp, Heart, ArrowRight } from "lucide-react";

export default function Methodology() {
  const steps = [
    {
      num: "01",
      title: "Attirer",
      subtitle: "Créer du contenu de valeur",
      description: "Attirez votre audience cible avec du contenu expert qui répond à leurs besoins spécifiques.",
      icon: Target
    },
    {
      num: "02", 
      title: "Convertir",
      subtitle: "Transformer les visiteurs en prospects",
      description: "Utilisez des formulaires intelligents et des offres premium pour capturer des leads qualifiés.",
      icon: Users
    },
    {
      num: "03",
      title: "Conclure", 
      subtitle: "Accompagner vers l'achat",
      description: "Nurturez vos prospects avec des séquences personnalisées jusqu'à la conversion.",
      icon: TrendingUp
    },
    {
      num: "04",
      title: "Enchanter",
      subtitle: "Fidéliser et faire recommander", 
      description: "Transformez vos clients en ambassadeurs qui recommandent activement vos services.",
      icon: Heart
    }
  ];

  return (
    <section id="methodologie" className="section-spacing bg-gray-50">
      <div className="container-beyonds">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
            Notre expertise en <span className="text-gradient-beyonds">inbound marketing</span>
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mb-8">
          <div className="animate-slide-left">
            <h3 className="text-2xl font-semibold text-black">Notre méthodologie</h3>
          </div>
          <div className="hidden md:flex space-x-4 animate-slide-right">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className={`group cursor-pointer animate-slide-up delay-${(index + 1) * 100}`}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-mono text-gray-400 absolute -top-2 -right-2 bg-white px-2 py-1 rounded-full border">
                    {step.num}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black group-hover:text-gray-600 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {step.subtitle}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Content */}
        <div className="mt-16 text-center animate-slide-up delay-500">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-6">
              Une approche <span className="text-gradient-beyonds">data-driven</span> et personnalisée
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Chaque étape de notre méthodologie est mesurée, optimisée et adaptée aux spécificités 
              de votre secteur d'activité et de votre audience locale.
            </p>
            
            <a 
              href="https://tally.so/r/wvbMdQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-beyonds"
            >
              Découvrir notre approche
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}