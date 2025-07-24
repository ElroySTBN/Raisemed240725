import { Magnet, Shield, TrendingUp, Check } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 gradient-text">
            Notre approche inbound marketing révolutionnaire
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Découvrez comment l'inbound marketing peut transformer votre entreprise locale en aimant à prospects qualifiés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-10 rounded-3xl shadow-2xl card-hover animate-fade-in-up">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-8 animate-float">
              <Magnet className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Attraction Intelligence</h3>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              Attirez naturellement vos prospects idéaux grâce à du contenu personnalisé et une optimisation SEO locale poussée.
            </p>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-yellow-400" />SEO local optimisé</li>
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-yellow-400" />Contenu expert métier</li>
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-yellow-400" />Stratégie réseaux sociaux</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-10 rounded-3xl shadow-2xl card-hover animate-fade-in-up animation-delay-200">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-8 animate-float animation-delay-300">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-6">E-réputation</h3>
            <p className="text-emerald-100 mb-8 text-lg leading-relaxed">
              Gérez et améliorez votre réputation en ligne pour renforcer la confiance et attirer plus de clients locaux.
            </p>
            <ul className="space-y-3 text-emerald-100">
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-yellow-400" />Gestion des avis clients</li>
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-yellow-400" />Monitoring de réputation</li>
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-yellow-400" />Stratégie de réponse</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white p-10 rounded-3xl shadow-2xl card-hover animate-fade-in-up animation-delay-500">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-8 animate-float animation-delay-700">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Résultats Data-Driven</h3>
            <p className="text-orange-100 mb-8 text-lg leading-relaxed">
              Chaque action est mesurée et optimisée grâce à nos rapports mensuels et veille concurrentielle continue.
            </p>
            <ul className="space-y-3 text-orange-100">
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-white" />KPIs personnalisés</li>
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-white" />ROI transparent</li>
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-white" />Veille concurrentielle</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}