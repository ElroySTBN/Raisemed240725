import { Brain, Target, BarChart3, CheckCircle, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Attraction Intelligence",
      subtitle: "Attirez vos prospects idéaux",
      description: "Stratégies d'attraction personnalisées combinant SEO local, contenu expert et intelligence artificielle pour générer des leads qualifiés.",
      features: [
        "SEO local optimisé par IA",
        "Contenu expert automatisé",
        "Campagnes publicitaires ciblées",
        "Marketing automation avancé"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: "delay-100"
    },
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      subtitle: "Automatisation marketing avancée",
      description: "Outils d'IA propriétaires pour automatiser vos processus marketing, analyser les comportements clients et optimiser vos conversions.",
      features: [
        "Chatbots intelligents",
        "Analyse prédictive des leads",
        "Personnalisation dynamique",
        "Scoring automatique des prospects"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      delay: "delay-200"
    },
    {
      icon: BarChart3,
      title: "Analytics & Performance",
      subtitle: "Mesure et optimisation continue",
      description: "Tableaux de bord avancés et reporting en temps réel pour mesurer précisément le ROI de vos investissements marketing.",
      features: [
        "Dashboard temps réel",
        "ROI transparent",
        "Rapports personnalisés",
        "Veille concurrentielle"
      ],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      delay: "delay-300"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-blue-50/30"></div>
      <div className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-700">Nos Services Premium</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-900">L'approche</span>
            <br />
            <span className="text-gradient">inbound marketing</span>
            <br />
            <span className="text-slate-900">révolutionnaire</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre écosystème complet de solutions marketing alimentées par l'intelligence artificielle 
            pour transformer votre entreprise locale en aimant à prospects qualifiés.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-premium group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up ${service.delay}`}
            >
              <div className={`h-full bg-gradient-to-br ${service.bgGradient} p-8 relative overflow-hidden`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:animate-glow transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{service.subtitle}</p>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <button className="inline-flex items-center text-slate-700 font-semibold hover:text-blue-600 transition-colors duration-300 group/btn">
                    <span>En savoir plus</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up delay-500">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-premium">
            <h3 className="text-3xl font-bold text-white mb-4">
              Prêt à transformer votre croissance ?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Découvrez comment nos solutions peuvent augmenter vos leads de +200% en moins de 90 jours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://tally.so/r/wvbMdQ" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="btn-premium bg-white text-blue-600 hover:bg-blue-50 group">
                  <span className="relative z-10 flex items-center">
                    Audit Gratuit
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </a>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-premium bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 group"
              >
                <span className="relative z-10">Parlons de votre projet</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}