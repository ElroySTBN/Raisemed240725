import { AlertTriangle, MapPin, Target, ArrowRight } from "lucide-react";

export default function ProblemSolutionNew() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Publicité intrusive et coûteuse",
      description: "Vos prospects fuient la publicité traditionnelle et vos coûts d'acquisition explosent.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: MapPin,
      title: "Manque de visibilité locale",
      description: "Vos concurrents apparaissent avant vous sur Google Maps et les recherches locales.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: Target,
      title: "Leads non qualifiés",
      description: "Vous perdez du temps avec des prospects qui ne correspondent pas à votre expertise.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8">
            Vous en avez assez des méthodes d'acquisition de leads{" "}
            <span className="text-gradient bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              traditionnelles ?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={problem.title}
              className={`group relative bg-white rounded-3xl p-8 shadow-premium hover:shadow-xl transition-all duration-500 hover:-translate-y-4 animate-fade-in-up delay-${(index + 1) * 200} card-hover`}
            >
              {/* Problem icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <problem.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {problem.title}
              </h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {problem.description}
              </p>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-700 group-hover:animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Solution CTA */}
        <div className="text-center animate-fade-in-up delay-700">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-premium max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Il est temps de passer à l'inbound marketing
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Attirez naturellement vos prospects idéaux, réduisez vos coûts d'acquisition et générez des leads qualifiés en continu.
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=33782492124&text=Bonjour%20je%20suis%20int%C3%A9ress%C3%A9%20par%20l%27un%20de%20vos%20services.%20Pourrais-je%20avoir%20plus%20d%27informations%20s%27il%20vous%20pla%C3%AEt%20%3F&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="btn-premium group">
                <span className="relative z-10 flex items-center">
                  Découvrir notre solution
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}