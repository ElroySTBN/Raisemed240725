import { Star, Quote, TrendingUp, Users, Award } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dupont",
      role: "Directrice Marketing",
      company: "Pharma MC",
      avatar: "MD",
      rating: 5,
      content: "Grâce à RaiseMed.IA, nous avons multiplié nos leads par 3 en 6 mois tout en réduisant notre coût d'acquisition client de 40%. Leur approche data-driven fait vraiment la différence.",
      metrics: {
        growth: "+300%",
        label: "Croissance des leads"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Laurent Martin",
      role: "Gérant",
      company: "Century 21 Prestige",
      avatar: "LM",
      rating: 5,
      content: "L'équipe RaiseMed.IA a transformé notre présence digitale. Nous générons maintenant 15 nouvelles demandes qualifiées par semaine contre 3 auparavant.",
      metrics: {
        growth: "+400%",
        label: "Demandes qualifiées"
      },
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Sophie Rousseau",
      role: "Responsable Communication",
      company: "Optic 2000",
      avatar: "SR",
      rating: 5,
      content: "Leur stratégie inbound marketing nous a permis d'atteindre le top 3 des recherches locales. Le ROI est impressionnant : 250% dès le premier trimestre.",
      metrics: {
        growth: "250%",
        label: "ROI premier trimestre"
      },
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Thomas Bernard",
      role: "Directeur Général",
      company: "Supra Sécurité",
      avatar: "TB",
      rating: 5,
      content: "Professionnalisme et résultats au rendez-vous. Nous avons doublé notre chiffre d'affaires en 8 mois grâce à leurs campagnes d'inbound marketing ciblées.",
      metrics: {
        growth: "+100%",
        label: "Chiffre d'affaires"
      },
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "95%",
      label: "Clients satisfaits",
      description: "Taux de satisfaction global"
    },
    {
      icon: Users,
      value: "100+",
      label: "Entreprises accompagnées",
      description: "Dans 4 pays différents"
    },
    {
      icon: Award,
      value: "4.9/5",
      label: "Note moyenne",
      description: "Sur toutes nos prestations"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full mb-6">
            <Star className="w-4 h-4 text-amber-600 mr-2" />
            <span className="text-sm font-semibold text-amber-800">Témoignages Clients</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-900">Ce que disent nos</span>
            <br />
            <span className="text-gradient">clients partenaires</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment nos clients ont transformé leur croissance avec nos solutions inbound marketing.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <h3 className="text-lg font-semibold text-slate-700 mb-1">{stat.label}</h3>
                <p className="text-sm text-slate-500">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`card-premium group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              <div className="p-8 relative overflow-hidden">
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-16 h-16 text-slate-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Metrics */}
                <div className="mb-6">
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${testimonial.color} rounded-full text-white`}>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span className="font-bold">{testimonial.metrics.growth}</span>
                    <span className="ml-2 text-sm opacity-90">{testimonial.metrics.label}</span>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-slate-600 text-sm">{testimonial.role}</p>
                    <p className="text-slate-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-slate-100 to-transparent rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up delay-700">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 border border-slate-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Prêt à rejoindre nos clients qui réussissent ?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Découvrez comment nous pouvons transformer votre croissance avec une stratégie inbound marketing sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://tally.so/r/wvbMdQ" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="btn-premium group">
                  <span className="relative z-10 flex items-center">
                    Obtenir mon audit gratuit
                    <Star className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" />
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
                className="btn-premium bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 group"
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