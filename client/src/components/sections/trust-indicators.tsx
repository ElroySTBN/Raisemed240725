import { TrendingUp, Users, Target, Award } from "lucide-react";

export default function TrustIndicators() {
  const stats = [
    {
      icon: TrendingUp,
      value: "+500k€",
      label: "Générés pour nos clients",
      description: "Revenus supplémentaires créés",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      value: "4 pays",
      label: "Desservis",
      description: "Présence internationale",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      value: "95%",
      label: "Clients satisfaits",
      description: "Taux de satisfaction",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      value: "+200%",
      label: "Croissance moyenne",
      description: "Augmentation des leads",
      color: "from-orange-500 to-red-500"
    }
  ];

  const clientLogos = [
    { src: "/assets/Logo%20Pharma%20MC%20-%20SBG_1753043771294.png", alt: "Pharmacie Bergère" },
    { src: "/assets/image_1753043820433.png", alt: "Century 21" },
    { src: "/assets/image_1753043825883.png", alt: "Supra Sécurité" },
    { src: "/assets/image_1753043831484.png", alt: "La Vaux Immobilier" },
    { src: "/assets/image_1753043896859.png", alt: "Optic 2000" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trust Badges */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-8">
            Plus de 100+ entreprises nous font confiance
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {clientLogos.map((logo, index) => (
              <div
                key={logo.alt}
                className={`group animate-fade-in-up delay-${(index + 1) * 100}`}
              >
                <div className="bg-white p-6 rounded-2xl shadow-premium border border-slate-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <img 
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center mb-12 animate-fade-in-up delay-300">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-slate-900">Des résultats qui</span>
            <br />
            <span className="text-gradient">parlent d'eux-mêmes</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nos clients obtiennent des résultats mesurables et durables grâce à nos stratégies inbound marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`card-premium group hover:scale-105 transition-all duration-500 animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              <div className="p-8 text-center relative overflow-hidden">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:animate-glow`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Value */}
                <div className="mb-4">
                  <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <h3 className="text-lg font-semibold text-slate-700">{stat.label}</h3>
                  <p className="text-sm text-slate-500">{stat.description}</p>
                </div>

                {/* Background decoration */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-slate-100 to-transparent rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center animate-fade-in-up delay-700">
          <div className="bg-white rounded-3xl shadow-premium p-12 border border-slate-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  "Un partenaire de confiance qui transforme réellement nos résultats"
                </h3>
                <p className="text-slate-600 mb-4">
                  Grâce à RaiseMed.IA, nous avons multiplié nos leads par 3 en 6 mois tout en réduisant notre coût d'acquisition client de 40%.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">MC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Marie Dupont</p>
                    <p className="text-sm text-slate-500">Directrice Marketing, Pharma MC</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">★</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 mt-2 text-center">5/5 étoiles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}