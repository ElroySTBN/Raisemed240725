import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Check, Star, Gift, CreditCard, Phone, Mail, MessageCircle } from "lucide-react";

export default function OffersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Nos Offres
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Choisissez la formule qui correspond à vos besoins et votre budget
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* RaiseMed.IA Pro */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-dark mb-4">RaiseMed.IA Pro</h3>
                  <div className="mb-6">
                    <div className="text-sm text-gray-600 mb-2">Frais d'installation</div>
                    <div className="text-3xl font-bold text-primary">450€</div>
                    <div className="text-sm text-gray-600">une seule fois</div>
                  </div>
                  <div className="mb-6">
                    <div className="text-sm text-gray-600 mb-2">Puis</div>
                    <div className="text-4xl font-bold text-primary mb-2">150€</div>
                    <div className="text-gray-600">par mois • Sans engagement</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Optimisation Google My Business</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Création de contenu mensuel</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Campagnes email marketing</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Analyse des performances</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Support prioritaire</span>
                  </div>
                </div>

                <a href="https://buy.stripe.com/dR67urecxcHLdLW00g" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary text-white hover:bg-blue-700 py-3">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Commencer maintenant
                  </Button>
                </a>
              </div>

              {/* RaiseMed.IA Gold - Featured */}
              <div className="bg-gradient-to-br from-accent to-yellow-500 text-white rounded-2xl shadow-xl p-8 relative transform lg:scale-105 hover:shadow-2xl transition-all">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-accent px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Le plus populaire
                  </div>
                </div>

                <div className="text-center mb-8 mt-4">
                  <h3 className="text-2xl font-bold mb-4">RaiseMed.IA Gold</h3>
                  <div className="mb-6">
                    <div className="text-sm opacity-90 mb-2">Formule annuelle</div>
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-2xl line-through opacity-75 mr-3">2350€</span>
                      <span className="text-4xl font-bold">1760€</span>
                    </div>
                    <div className="text-sm opacity-90">Économisez 590€ !</div>
                  </div>
                </div>

                <div className="bg-white bg-opacity-20 rounded-xl p-4 mb-6">
                  <div className="flex items-center text-white mb-2">
                    <Gift className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Bonus inclus :</span>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li>• 2 cartes NFC GRATUITES</li>
                    <li>• Carte de visite virtuelle GRATUITE</li>
                    <li>• Frais d'installation OFFERTS</li>
                  </ul>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    <span>Tout de RaiseMed.IA Pro</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    <span>Stratégie marketing personnalisée</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    <span>Automatisation avancée</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    <span>Landing pages illimitées</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    <span>Support dédié 7j/7</span>
                  </div>
                </div>

                <a href="https://buy.stripe.com/14AcN78cb1Fq2Wb0o0fMA0k" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-white text-accent hover:bg-gray-100 py-3 font-bold">
                    <Star className="w-5 h-5 mr-2" />
                    Commencer maintenant
                  </Button>
                </a>
              </div>

              {/* Pack sur Devis */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-dark mb-4">Pack sur Devis</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">Sur mesure</div>
                    <div className="text-gray-600">Adapté à vos besoins spécifiques</div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Solution 100% personnalisée</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Analyse approfondie de votre marché</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Stratégie multi-canaux</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Accompagnement premium</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Tarification transparente</span>
                  </div>
                </div>

                <a href="https://wa.me/33782492124?text=Bonjour%2CJe%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services%20de%20gestion%20et%20optimisation%20de%20page%20Google%20Business%20Profile." target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white py-3">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Demander un devis
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark mb-4">Une question ? Contactez-nous</h2>
              <p className="text-xl text-gray-600">Notre équipe est là pour vous accompagner</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">Appelez-nous directement</h3>
                <a href="tel:0782492124" className="text-2xl font-bold text-primary hover:text-blue-700 transition-colors">
                  07 82 49 21 24
                </a>
                <p className="text-gray-600 mt-2">Lun-Sam 8h-20h</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">Écrivez-nous</h3>
                <a href="mailto:support@raisemedia.fr" className="text-xl font-bold text-primary hover:text-blue-700 transition-colors">
                  support@raisemedia.fr
                </a>
                <p className="text-gray-600 mt-2">Réponse sous 2h en moyenne</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark mb-4">Questions Fréquentes</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-dark mb-2">Quelle est la différence entre Pro et Gold ?</h3>
                <p className="text-gray-700">La formule Gold inclut tous les services Pro plus des fonctionnalités avancées, des bonus gratuits et un tarif avantageux sur l'année.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-dark mb-2">Puis-je changer de formule en cours de route ?</h3>
                <p className="text-gray-700">Oui, vous pouvez passer de Pro à Gold à tout moment. Contactez notre équipe pour discuter des modalités.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-dark mb-2">Y a-t-il des frais cachés ?</h3>
                <p className="text-gray-700">Non, nos tarifs sont transparents. Tous les services inclus dans votre formule sont clairement détaillés.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Prêt à transformer votre marketing ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Commencez par un audit gratuit de votre stratégie actuelle
            </p>
            <a href="https://tally.so/r/wvbMdQ" target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent text-white px-8 py-4 text-lg hover:bg-yellow-600">
                Obtenir un audit gratuit
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}