import { X, CheckCircle } from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    {
      title: "Publicité intrusive et coûteuse",
      description: "Vos prospects fuient la publicité traditionnelle et vos coûts d'acquisition explosent."
    },
    {
      title: "Manque de visibilité locale",
      description: "Vos concurrents apparaissent avant vous sur Google Maps et les recherches locales."
    },
    {
      title: "Leads non qualifiés",
      description: "Vous perdez du temps avec des prospects qui ne correspondent pas à vos services."
    },
    {
      title: "Absence de stratégie digitale",
      description: "Vous naviguez à vue sans vision claire de votre présence en ligne."
    }
  ];

  const solutions = [
    {
      title: "Attraction naturelle de prospects qualifiés",
      description: "Vos clients vous trouvent au moment où ils ont besoin de vos services."
    },
    {
      title: "Première position sur les recherches locales",
      description: "Dominez votre marché local avec une visibilité optimale sur Google."
    },
    {
      title: "Leads pré-qualifiés et prêts à acheter",
      description: "Concentrez-vous sur les prospects avec un réel potentiel d'achat."
    },
    {
      title: "Stratégie digitale claire et mesurable",
      description: "Une feuille de route précise avec des objectifs et résultats tangibles."
    }
  ];

  return (
    <section className="bg-gray-50 section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-500/5 rounded-full blur-2xl animate-float animation-delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Vous en avez assez des méthodes d'acquisition de leads traditionnelles ?
            </h2>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 group animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-right">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Avec l'inbound marketing, transformez ces défis en opportunités
            </h2>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 group animate-fade-in-up`}
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-700">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à transformer votre approche marketing ?
            </h3>
            <p className="text-xl text-blue-100 mb-6">
              Découvrez comment nos clients ont multiplié leurs leads par 3 en moyenne
            </p>
            <a 
              href="https://tally.so/r/wvbMdQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Obtenir mon audit gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}