import { Check, Star, ArrowRight } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "RaiseMed.IA Pro",
      price: "150",
      unit: "€/mois",
      description: "Parfait pour débuter votre stratégie inbound marketing",
      popular: false,
      stripeUrl: "https://buy.stripe.com/dR67urecxcHLdLW00g",
      features: [
        "Audit stratégique complet",
        "Optimisation Google Business Profile", 
        "Création de contenu mensuel",
        "Gestion e-réputation",
        "Veille concurrentielle",
        "Support prioritaire"
      ]
    },
    {
      name: "RaiseMed.IA Gold",
      price: "1760",
      unit: "€/an",
      originalPrice: "1800€",
      description: "Solution complète pour une croissance accélérée",
      popular: true,
      stripeUrl: "https://buy.stripe.com/14AcN78cb1Fq2Wb0o0fMA0k",
      features: [
        "Tout du plan Pro inclus",
        "Stratégie SEO avancée",
        "Marketing automation",
        "Analytics & reporting détaillés",
        "Formation équipe incluse",
        "2 cartes NFC offertes",
        "Installation gratuite"
      ]
    },
    {
      name: "Sur Mesure",
      price: "Sur devis",
      unit: "",
      description: "Solution personnalisée selon vos besoins spécifiques",
      popular: false,
      whatsappUrl: "https://wa.me/33782492124?text=Bonjour%2CJe%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services%20de%20gestion%20et%20optimisation%20de%20page%20Google%20Business%20Profile",
      features: [
        "Audit personnalisé",
        "Stratégie sur-mesure", 
        "Développements spécifiques",
        "Accompagnement dédié",
        "Formation avancée",
        "Support premium"
      ]
    }
  ];

  return (
    <section id="pricing" className="section-spacing bg-gray-50">
      <div className="container-beyonds">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
            Nos <span className="text-gradient-beyonds">tarifs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choisissez l'offre qui correspond à vos objectifs de croissance et à votre budget
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                relative bg-white rounded-2xl border transition-all duration-300 hover-lift
                ${plan.popular 
                  ? 'border-black shadow-beyonds-lg scale-105' 
                  : 'border-gray-200 shadow-beyonds'
                }
                animate-slide-up delay-${(index + 1) * 100}
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white text-xs font-medium px-4 py-1 rounded-full">
                    POPULAIRE
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name & Price */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    {plan.originalPrice && (
                      <div className="text-sm text-gray-400 line-through mb-1">
                        {plan.originalPrice}
                      </div>
                    )}
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-black">{plan.price}</span>
                      {plan.unit && (
                        <span className="text-gray-600 ml-1">{plan.unit}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  {plan.stripeUrl ? (
                    <a 
                      href={plan.stripeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        w-full justify-center
                        ${plan.popular ? 'btn-beyonds' : 'btn-beyonds-outline'}
                      `}
                    >
                      Choisir cette offre
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <a 
                      href={plan.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-beyonds-outline w-full justify-center"
                    >
                      Demander un devis
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12 animate-slide-up delay-400">
          <p className="text-gray-600 text-sm">
            Tous nos plans incluent un support client dédié et des mises à jour régulières
          </p>
          <div className="mt-4">
            <a 
              href="https://tally.so/r/wvbMdQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black font-medium hover:text-gray-600 transition-colors"
            >
              Besoin d'aide pour choisir ? Contactez-nous →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}