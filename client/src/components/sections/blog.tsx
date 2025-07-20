import { Button } from "@/components/ui/button";
import { Book, ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
            Nos derniers articles experts
          </h2>
          <p className="text-xl text-gray-600">
            Restez informé des dernières tendances en inbound marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
              alt="Graphiques et diagrammes de stratégie marketing digital" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <div className="text-primary font-semibold text-sm mb-2">STRATÉGIE INBOUND</div>
              <h3 className="text-xl font-bold text-dark mb-3">
                Comment l'IA révolutionne le lead scoring en 2024
              </h3>
              <p className="text-gray-600 mb-4">
                Découvrez comment nos algorithmes d'intelligence artificielle identifient vos prospects les plus qualifiés automatiquement.
              </p>
              <a href="#" className="text-primary font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
                Lire l'article <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </article>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
              alt="Recherche locale sur smartphone avec géolocalisation" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <div className="text-secondary font-semibold text-sm mb-2">SEO LOCAL</div>
              <h3 className="text-xl font-bold text-dark mb-3">
                5 secrets pour dominer Google My Business
              </h3>
              <p className="text-gray-600 mb-4">
                Les techniques avancées pour apparaître en premier dans les recherches locales de votre secteur d'activité.
              </p>
              <a href="#" className="text-primary font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
                Lire l'article <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </article>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
              alt="Professionnel de santé utilisant une tablette pour créer du contenu" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <div className="text-accent font-semibold text-sm mb-2">SECTEUR SANTÉ</div>
              <h3 className="text-xl font-bold text-dark mb-3">
                Content marketing pour professionnels de santé
              </h3>
              <p className="text-gray-600 mb-4">
                Comment créer du contenu médical de qualité qui respecte la déontologie et attire vos patients idéaux.
              </p>
              <a href="#" className="text-primary font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
                Lire l'article <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </article>
        </div>

        <div className="text-center mt-12">
          <a href="/blog">
            <Button className="bg-primary text-white hover:bg-blue-700">
              <Book className="mr-2 h-4 w-4" />
              Voir tous nos articles
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
