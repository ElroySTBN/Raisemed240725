import { Button } from "@/components/ui/button";
import { Check, Star, Gift } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "RaiseMed.IA Pro",
      price: "150",
      unit: "€/mois",
      setupFee: "450€ installation",
      commitment: "Sans engagement",
      popular: false,
      buttonText: "CHOISIR CETTE OFFRE",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      stripeUrl: "https://buy.stripe.com/dR67urecxcHLdLW00g",
      features: [
        "Audit stratégique de votre visibilité en ligne",
        "Veille concurrentielle locale",
        "Optimisation de votre présence digitale",
        "Gestion E-réputation",
        "Création de contenu engageant",
        "Campagnes multicanales d'attraction client",
        "Analyse qualitative des tendances de recherche",
        "Formation sur mesure pour votre équipe",
        "Support prioritaire sur whatsapp et email"
      ]
    },
    {
      name: "RaiseMed.IA Gold",
      price: "1760",
      unit: "€/an",
      originalPrice: "2350€",
      savings: "Économisez 590€",
      setupFee: "Installation OFFERTE",
      commitment: "Engagement 12 mois",
      popular: true,
      buttonText: "CHOISIR CETTE OFFRE",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      stripeUrl: "https://buy.stripe.com/14AcN78cb1Fq2Wb0o0fMA0k",
      badge: "POPULAIRE",
      bonuses: [
        "2 cartes NFC GRATUITES",
        "Carte de visite virtuelle GRATUITE",
        "Frais d'installation OFFERTS"
      ],
      features: [
        "Audit stratégique de votre visibilité en ligne",
        "Veille concurrentielle locale",
        "Optimisation de votre présence digitale",
        "Gestion E-réputation",
        "Création de contenu engageant",
        "Campagnes multicanales d'attraction client",
        "Analyse qualitative des tendances de recherche",
        "Formation sur mesure pour votre équipe",
        "Support prioritaire sur whatsapp et email"
      ]
    },
    {
      name: "Sur Devis",
      price: "Sur devis",
      unit: "",
      setupFee: "Solution personnalisée",
      commitment: "Selon vos besoins",
      popular: false,
      buttonText: "DEMANDER UN DEVIS",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
      whatsappUrl: "https://wa.me/33782492124?text=Bonjour%2CJe%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services%20de%20gestion%20et%20optimisation%20de%20page%20Google%20Business%20Profile",
      features: []
    }
  ];

  return (
    <section id="pricing" className="bg-gray-50 section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-600/5 rounded-full blur-3xl animate-float animation-delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 gradient-text">
            Choisissez votre solution
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des tarifs transparents pour faire évoluer votre business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-xl border-2 ${plan.popular ? 'border-blue-500 shadow-2xl transform scale-105' : 'border-gray-100 shadow-lg'} overflow-hidden h-full flex flex-col card-hover animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Badge populaire */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    <Star className="inline h-3 w-3 mr-1" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Header avec nom du plan */}
              <div className="text-center pt-8 pb-4 px-6">
                <div className="text-gray-700 font-semibold text-lg">
                  {plan.name}
                </div>
              </div>

              {/* Prix */}
              <div className="text-center mb-6 px-6">
                <div className="flex items-end justify-center space-x-1">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.unit && <span className="text-gray-600 text-sm mb-2">{plan.unit}</span>}
                </div>
                
                {plan.originalPrice && (
                  <div className="text-center mt-2">
                    <div className="text-gray-500 line-through text-sm">{plan.originalPrice}</div>
                    <div className="text-emerald-600 font-semibold text-sm">{plan.savings}</div>
                  </div>
                )}
                
                <div className="text-gray-600 text-sm mt-2">{plan.setupFee}</div>
                <div className="text-gray-500 text-xs">{plan.commitment}</div>
              </div>

              {/* Bonus pour Gold */}
              {plan.bonuses && (
                <div className="px-6 mb-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Gift className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-blue-700 font-semibold text-sm">Bonus inclus :</span>
                    </div>
                    <ul className="text-xs text-blue-600 space-y-1">
                      {plan.bonuses.map((bonus, bonusIndex) => (
                        <li key={bonusIndex} className="flex items-center">
                          <Check className="h-3 w-3 mr-2 text-blue-600" />
                          {bonus}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="px-6 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="p-6 mt-auto">
                {plan.stripeUrl ? (
                  <a 
                    href={plan.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className={`w-full py-3 text-sm font-semibold ${plan.buttonColor} text-white transition-all duration-300`}>
                      {plan.buttonText}
                    </Button>
                  </a>
                ) : plan.whatsappUrl ? (
                  <a 
                    href={plan.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className={`w-full py-3 text-sm font-semibold ${plan.buttonColor} text-white transition-all duration-300`}>
                      {plan.buttonText}
                    </Button>
                  </a>
                ) : (
                  <Button className={`w-full py-3 text-sm font-semibold ${plan.buttonColor} text-white transition-all duration-300`}>
                    {plan.buttonText}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Section info supplémentaire */}
        <div className="mt-12 text-center animate-fade-in-up animation-delay-700">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pourquoi choisir RaiseMed.IA ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">+500k€</div>
                <p className="text-gray-600 text-sm">Générés pour nos clients</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-emerald-600 mb-2">↓60%</div>
                <p className="text-gray-600 text-sm">Réduction coût par lead</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-yellow-600 mb-2">4</div>
                <p className="text-gray-600 text-sm">Pays desservis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}