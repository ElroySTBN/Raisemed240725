import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "RaiseMédia PRO",
      description: "Pour les entreprises qui veulent décoller",
      price: "1 497",
      period: "/mois",
      originalPrice: "1 997",
      popular: false,
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      features: [
        "Audit marketing complet",
        "Stratégie inbound personnalisée",
        "Création de contenu optimisé SEO",
        "Gestion réseaux sociaux",
        "Rapports mensuels détaillés",
        "Support par email",
        "Formation équipe (2h/mois)"
      ],
      cta: "Commencer PRO",
      href: "https://buy.stripe.com/dR67urecxcHLdLW00g"
    },
    {
      name: "RaiseMédia GOLD",
      description: "Pour les entreprises ambitieuses",
      price: "2 497",
      period: "/mois",
      originalPrice: "3 497",
      popular: true,
      icon: Crown,
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
      features: [
        "Tout de RaiseMédia PRO",
        "Intelligence artificielle avancée",
        "Automatisation marketing complète",
        "Campagnes publicitaires optimisées",
        "Dashboard temps réel personnalisé",
        "Support prioritaire 24/7",
        "Formation équipe (4h/mois)",
        "Veille concurrentielle",
        "Optimisation des conversions",
        "Consultant dédié"
      ],
      cta: "Choisir GOLD",
      href: "https://buy.stripe.com/14AcN78cb1Fq2Wb0o0fMA0k"
    },
    {
      name: "Solution Sur Mesure",
      description: "Pour les grandes entreprises",
      price: "Sur devis",
      period: "",
      originalPrice: null,
      popular: false,
      icon: Star,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      features: [
        "Tout de RaiseMédia GOLD",
        "Stratégie multi-marques",
        "Équipe dédiée complète",
        "Intégrations CRM avancées",
        "API personnalisées",
        "SLA garantis",
        "Formation sur site illimitée",
        "Support technique dédié",
        "Développements spécifiques",
        "Reporting C-level"
      ],
      cta: "Demander un devis",
      href: "https://wa.me/33782492124?text=Bonjour%2CJe%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services%20de%20gestion%20et%20optimisation%20de%20page%20Google%20Business%20Profile"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-premium mb-6">
            <Star className="w-4 h-4 text-amber-500 mr-2" />
            <span className="text-sm font-semibold text-slate-700">Tarification Transparente</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-900">Choisissez votre</span>
            <br />
            <span className="text-gradient">formule de croissance</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions adaptées à chaque étape de votre développement. 
            Investissement ROI positif garanti dès le premier mois.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative ${
                plan.popular 
                  ? 'lg:-mt-8 lg:mb-8 scale-105' 
                  : ''
              } animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ✨ Plus Populaire
                  </div>
                </div>
              )}

              <div className={`card-premium h-full group hover:scale-[1.02] transition-all duration-500 ${
                plan.popular ? 'shadow-glow ring-2 ring-amber-200' : ''
              }`}>
                <div className={`h-full bg-gradient-to-br ${plan.bgColor} p-8 relative overflow-hidden`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6 shadow-glow ${
                    plan.popular ? 'animate-glow' : 'group-hover:animate-glow'
                  } transition-all duration-300`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-slate-600 mb-6">{plan.description}</p>
                    
                    <div className="flex items-baseline space-x-2">
                      {plan.originalPrice && (
                        <span className="text-lg text-slate-400 line-through">{plan.originalPrice}€</span>
                      )}
                      <span className="text-4xl font-bold text-slate-900">{plan.price}{plan.price !== "Sur devis" ? "€" : ""}</span>
                      {plan.period && (
                        <span className="text-slate-600">{plan.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <a 
                      href={plan.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <button className={`w-full btn-premium ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600' 
                          : 'bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900'
                      } group`}>
                        <span className="relative z-10 flex items-center justify-center">
                          {plan.cta}
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </button>
                    </a>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center animate-fade-in-up delay-500">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-premium p-12 border border-slate-200">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-left lg:max-w-2xl">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Pas sûr de votre choix ?
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  Obtenez un audit gratuit de votre situation actuelle et découvrez quelle formule 
                  convient le mieux à vos objectifs de croissance.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Audit complet gratuit</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Recommandations personnalisées</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Sans engagement</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <a 
                  href="https://tally.so/r/wvbMdQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="btn-premium group">
                    <span className="relative z-10 flex items-center">
                      Audit Gratuit
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}