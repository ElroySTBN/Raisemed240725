import { Target, Users, TrendingUp, Heart } from "lucide-react";

export default function Methodology() {
  const steps = [
    {
      num: 1,
      icon: Target,
      color: 'bg-blue-600',
      title: 'ATTIRER (au lieu de déranger)',
      desc: 'Créez du contenu qui répond aux besoins de vos prospects plutôt que de les interrompre.'
    },
    {
      num: 2,
      icon: Users,
      color: 'bg-emerald-600',
      title: 'CONVERTIR (avec confiance)',
      desc: 'Transformez vos visiteurs en prospects grâce à des offres de valeur et du contenu expert.'
    },
    {
      num: 3,
      icon: TrendingUp,
      color: 'bg-yellow-500',
      title: 'CONCLURE (en harmonie)',
      desc: 'Guidez vos prospects vers l\'achat grâce à un nurturing personnalisé et intelligent.'
    },
    {
      num: 4,
      icon: Heart,
      color: 'bg-purple-600',
      title: 'ENCHANTER (pour fidéliser)',
      desc: 'Transformez vos clients en ambassadeurs qui recommandent activement vos services.'
    }
  ];

  return (
    <section id="methodologie" className="bg-gray-50 section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-600/5 rounded-full blur-3xl animate-float animation-delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 gradient-text">
            Comment l'inbound marketing révolutionne votre acquisition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre méthodologie éprouvée transforme les visiteurs en ambassadeurs de votre marque
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in-left">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Tableau de bord analytics montrant les performances marketing" 
              className="rounded-xl shadow-2xl w-full h-auto card-hover" 
            />
          </div>
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              L'inbound marketing : une révolution par rapport aux méthodes traditionnelles
            </h3>
            <div className="space-y-6">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div 
                    key={step.num}
                    className={`flex items-start space-x-4 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`w-12 h-12 ${step.color} text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Comparison section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-up animation-delay-500">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Inbound vs Outbound : La différence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-4">
                <h4 className="text-lg font-semibold text-red-700 mb-3">Marketing Traditionnel (Outbound)</h4>
                <ul className="text-red-600 space-y-2 text-sm">
                  <li>✗ Interrompt votre audience</li>
                  <li>✗ Coûteux et résultats temporaires</li>
                  <li>✗ Difficile à mesurer le ROI</li>
                  <li>✗ Génère de la résistance</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-4">
                <h4 className="text-lg font-semibold text-emerald-700 mb-3">Inbound Marketing (Notre approche)</h4>
                <ul className="text-emerald-600 space-y-2 text-sm">
                  <li>✓ Attire naturellement les prospects</li>
                  <li>✓ ROI croissant dans le temps</li>
                  <li>✓ Mesurable et optimisable</li>
                  <li>✓ Crée de l'engagement et de la confiance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}