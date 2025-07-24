import { ArrowRight, Sparkles, TrendingUp, Users, Clock } from "lucide-react";

export default function CTA() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "ROI Garanti",
      description: "Résultats mesurables dès le 1er mois"
    },
    {
      icon: Users,
      title: "Équipe Dédiée",
      description: "Experts à votre service"
    },
    {
      icon: Clock,
      title: "Mise en Place Rapide",
      description: "Déploiement en moins de 15 jours"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-1000"></div>
        <div className="absolute top-40 right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float delay-500"></div>
      </div>

      {/* Stars pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-amber-400 mr-2" />
            <span className="text-sm font-semibold text-white">Offre Limitée</span>
          </div>

          {/* Main headline */}
          <div className="mb-12 animate-fade-in-up delay-200">
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Transformez votre</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                croissance
              </span>
              <br />
              <span className="text-white">dès aujourd'hui</span>
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Rejoignez les 100+ entreprises qui ont multiplié leurs leads par 3 
              grâce à nos stratégies inbound marketing alimentées par l'IA.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in-up delay-300">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in-up delay-${(index + 1) * 100}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-200 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up delay-500">
            <a 
              href="https://tally.so/r/wvbMdQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full lg:w-auto"
            >
              <button className="w-full lg:w-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:-translate-y-1 group">
                <span className="flex items-center justify-center">
                  🚀 Obtenir mon audit GRATUIT
                  <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </a>

            <div className="flex flex-col items-center">
              <p className="text-blue-200 text-sm mb-2">Ou</p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-white border-2 border-white/30 hover:border-white hover:bg-white/10 px-8 py-4 rounded-xl transition-all duration-300 group"
              >
                <span className="flex items-center">
                  Parlons de votre projet
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-blue-200 animate-fade-in-up delay-700">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>✓ Audit gratuit en 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>✓ Sans engagement</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>✓ Résultats garantis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="rgba(255, 255, 255, 0.05)" 
            d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,96C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}