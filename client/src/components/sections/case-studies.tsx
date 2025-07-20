import { Button } from "@/components/ui/button";
import { FileText, User } from "lucide-react";

export default function CaseStudies() {
  return (
    <section id="cas-clients" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
            Nos clients témoignent de leur succès
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous avons transformé la croissance de ces entreprises locales
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Case Study 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-primary/5 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl mr-4">
                CM
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark">Cabinet Médical Dubois</h3>
                <p className="text-gray-600">Médecin généraliste, Lyon</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">+420%</div>
                <div className="text-sm text-gray-600">Nouveaux patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">+250%</div>
                <div className="text-sm text-gray-600">Visibilité locale</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">-60%</div>
                <div className="text-sm text-gray-600">Coût par patient</div>
              </div>
            </div>
            
            <blockquote className="text-gray-700 italic mb-4">
              "Avant RaiseMed.IA, je dépendais uniquement du bouche-à-oreille. Aujourd'hui, je suis visible sur Google et j'attire des patients qui cherchent vraiment mes spécialités."
            </blockquote>
            
            <div className="flex items-center text-gray-600 text-sm">
              <User className="mr-2 w-4 h-4" />
              <span>Dr. Marie Dubois, Médecin généraliste</span>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-gradient-to-br from-green-50 to-secondary/5 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-secondary text-white rounded-xl flex items-center justify-center font-bold text-xl mr-4">
                AI
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark">Agence Immobilière Horizon</h3>
                <p className="text-gray-600">Immobilier résidentiel, Marseille</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">+180%</div>
                <div className="text-sm text-gray-600">Mandats signés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">+350%</div>
                <div className="text-sm text-gray-600">Leads qualifiés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15 jours</div>
                <div className="text-sm text-gray-600">Délai moyen vente</div>
              </div>
            </div>
            
            <blockquote className="text-gray-700 italic mb-4">
              "L'inbound marketing nous a permis de nous positionner comme experts du marché local. Nos clients nous trouvent naturellement quand ils sont prêts à vendre."
            </blockquote>
            
            <div className="flex items-center text-gray-600 text-sm">
              <User className="mr-2 w-4 h-4" />
              <span>Jean-Pierre Martin, Directeur Agence</span>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Button className="bg-primary text-white hover:bg-blue-700">
            <FileText className="mr-2 h-4 w-4" />
            Voir tous nos cas clients
          </Button>
        </div>
      </div>
    </section>
  );
}
