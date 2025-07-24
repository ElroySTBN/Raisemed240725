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
    <section className="bg-secondary-beyonds section-padding relative overflow-hidden">
      {/* Décorations style Beyonds */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gray-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gray-100 rounded-full blur-3xl opacity-20 animate-float animation-delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Problèmes */}
          <div className="animate-fade-in-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-beyonds mb-8">
              Vous en avez assez des méthodes d'acquisition de leads traditionnelles ?
            </h2>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-red-50 text-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-beyonds mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-secondary-beyonds leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="animate-fade-in-right">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-beyonds mb-8">
              Avec l'inbound marketing, transformez ces défis en opportunités
            </h2>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 animate-fade-in-up`}
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-green-50 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-beyonds mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-secondary-beyonds leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA - style Beyonds */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-700">
          <div className="bg-primary-beyonds rounded-lg p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à transformer votre approche marketing ?
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Découvrez comment nos clients ont multiplié leurs leads par 3 en moyenne
            </p>
            <a 
              href="https://tally.so/r/wvbMdQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-beyonds px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-beyonds hover-lift btn-beyonds"
            >
              Obtenir mon audit gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}