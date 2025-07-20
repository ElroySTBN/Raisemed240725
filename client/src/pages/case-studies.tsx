import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { User, ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Nos Cas Clients
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Découvrez comment nous avons transformé la croissance de nos clients grâce à l'inbound marketing
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Case Study 1: Cabinet Médical */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-2xl mr-6">
                      CM
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-dark">Cabinet Médical Dubois</h2>
                      <p className="text-gray-600 text-lg">Médecin généraliste • Lyon</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Le défi</h3>
                    <p className="text-gray-700 mb-6">
                      Le Dr. Dubois dépendait uniquement du bouche-à-oreille pour attirer de nouveaux patients. 
                      Sa visibilité en ligne était quasi inexistante et il peinait à faire connaître ses spécialités 
                      (médecine du sport et nutrition).
                    </p>
                    
                    <h3 className="text-xl font-bold text-dark mb-4">Notre solution</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <ArrowRight className="text-primary mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        Optimisation complète de sa fiche Google My Business
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="text-primary mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        Création d'un blog médical avec contenu SEO optimisé
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="text-primary mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        Campagnes d'email marketing pour fidéliser les patients
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="text-primary mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        Système de prise de rendez-vous en ligne automatisé
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Cabinet médical moderne" 
                    className="rounded-2xl shadow-xl w-full h-auto" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-xl p-8 shadow-lg text-center border-l-4 border-primary">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">+420%</div>
                  <div className="text-gray-600">Nouveaux patients en 6 mois</div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg text-center border-l-4 border-secondary">
                  <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-2">+250%</div>
                  <div className="text-gray-600">Visibilité sur Google</div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg text-center border-l-4 border-accent">
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-accent mb-2">-60%</div>
                  <div className="text-gray-600">Coût d'acquisition par patient</div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-2xl p-8 mt-8">
                <blockquote className="text-lg text-gray-800 italic mb-4">
                  "Avant RaiseMed.IA, je dépendais uniquement du bouche-à-oreille. Aujourd'hui, je suis visible sur Google 
                  et j'attire des patients qui cherchent vraiment mes spécialités. Mon agenda est complet 3 semaines à l'avance !"
                </blockquote>
                <div className="flex items-center">
                  <User className="mr-3 w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-dark">Dr. Marie Dubois, Médecin généraliste</span>
                </div>
              </div>
            </div>

            {/* Case Study 2: Agence Immobilière */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Agence immobilière moderne" 
                    className="rounded-2xl shadow-xl w-full h-auto" 
                  />
                </div>
                
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-secondary text-white rounded-xl flex items-center justify-center font-bold text-2xl mr-6">
                      AI
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-dark">Agence Immobilière Horizon</h2>
                      <p className="text-gray-600 text-lg">Immobilier résidentiel • Marseille</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Le défi</h3>
                    <p className="text-gray-700 mb-6">
                      L'agence Horizon faisait face à une concurrence féroce sur Marseille. Leurs mandats étaient 
                      irréguliers et ils avaient du mal à se différencier des grandes enseignes nationales.
                    </p>
                    
                    <h3 className="text-xl font-bold text-dark mb-4">Notre solution</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <ArrowRight className="text-secondary mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        Stratégie de contenu hyper-local (quartiers, écoles, transports)
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="text-secondary mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        Automatisation du nurturing pour vendeurs et acquéreurs
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="text-secondary mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        Landing pages dédiées par type de bien
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="text-secondary mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        Système de lead scoring pour prioriser les prospects
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-xl p-8 shadow-lg text-center border-l-4 border-primary">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">+180%</div>
                  <div className="text-gray-600">Mandats signés</div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg text-center border-l-4 border-secondary">
                  <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-2">+350%</div>
                  <div className="text-gray-600">Leads qualifiés</div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg text-center border-l-4 border-accent">
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-accent mb-2">15 jours</div>
                  <div className="text-gray-600">Délai moyen de vente</div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-8 mt-8">
                <blockquote className="text-lg text-gray-800 italic mb-4">
                  "L'inbound marketing nous a permis de nous positionner comme experts du marché local. Nos clients 
                  nous trouvent naturellement quand ils sont prêts à vendre, et notre taux de transformation a explosé."
                </blockquote>
                <div className="flex items-center">
                  <User className="mr-3 w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-dark">Jean-Pierre Martin, Directeur Agence</span>
                </div>
              </div>
            </div>

            {/* Case Study 3: Optic 2000 */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl mr-6">
                      O2
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-dark">Optic 2000 Bordeaux</h2>
                      <p className="text-gray-600 text-lg">Optique • Bordeaux</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Le défi</h3>
                    <p className="text-gray-700 mb-6">
                      Face à la concurrence des opticiens en ligne, ce magasin Optic 2000 devait valoriser 
                      ses services personnalisés et attirer une clientèle locale fidèle.
                    </p>
                    
                    <h3 className="text-xl font-bold text-dark mb-4">Notre solution</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <ArrowRight className="text-purple-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        Content marketing sur la santé visuelle
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="text-purple-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        Campagnes de rappels pour renouvellement de lunettes
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="text-purple-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        Partenariats avec cabinets d'ophtalmologie locaux
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="text-purple-600 mr-3 w-5 h-5 mt-0.5 flex-shrink-0" />
                        Programme de fidélité digitalisé
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                    alt="Magasin d'optique moderne" 
                    className="rounded-2xl shadow-xl w-full h-auto" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-xl p-8 shadow-lg text-center border-l-4 border-primary">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">+200%</div>
                  <div className="text-gray-600">Nouveaux clients</div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg text-center border-l-4 border-purple-600">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
                  <div className="text-gray-600">Taux de fidélisation</div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg text-center border-l-4 border-accent">
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-accent mb-2">+45%</div>
                  <div className="text-gray-600">Chiffre d'affaires</div>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-2xl p-8 mt-8">
                <blockquote className="text-lg text-gray-800 italic mb-4">
                  "Grâce à RaiseMed.IA, nous avons réussi à créer une vraie relation de proximité avec nos clients. 
                  Ils reviennent non seulement pour leurs lunettes, mais aussi pour nos conseils personnalisés."
                </blockquote>
                <div className="flex items-center">
                  <User className="mr-3 w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-dark">Sophie Moreau, Directrice Optic 2000</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Votre entreprise pourrait être notre prochain succès
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Découvrez comment nous pouvons transformer votre croissance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button className="bg-accent text-white px-8 py-4 text-lg hover:bg-yellow-600">
                  Obtenir mon audit gratuit
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}