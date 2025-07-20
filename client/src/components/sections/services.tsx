import { Magnet, Bot, TrendingUp, Check } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
            Notre approche inbound marketing révolutionnaire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment l'inbound marketing peut transformer votre entreprise locale en aimant à prospects qualifiés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-primary to-blue-700 text-white p-8 rounded-xl">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
              <Magnet className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Attraction Intelligence</h3>
            <p className="text-blue-100 mb-6">
              Attirez naturellement vos prospects idéaux grâce à du contenu personnalisé et une optimisation SEO locale poussée.
            </p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4" />SEO local optimisé</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4" />Contenu expert métier</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4" />Stratégie réseaux sociaux</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-secondary to-green-700 text-white p-8 rounded-xl">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
              <Bot className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">IA & Automation</h3>
            <p className="text-green-100 mb-6">
              Nos outils d'intelligence artificielle qualifient et nurturent vos prospects automatiquement 24h/24.
            </p>
            <ul className="space-y-2 text-sm text-green-100">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4" />Lead scoring automatique</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4" />Chatbots intelligents</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4" />Email marketing personnalisé</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-accent to-orange-600 text-white p-8 rounded-xl">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">Data-Driven Results</h3>
            <p className="text-orange-100 mb-6">
              Chaque action est mesurée et optimisée grâce à nos tableaux de bord en temps réel.
            </p>
            <ul className="space-y-2 text-sm text-orange-100">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4" />KPIs personnalisés</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4" />ROI transparent</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4" />Optimisation continue</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
