import { Button } from "@/components/ui/button";
import { Check, Star, Gift, CreditCard, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/animations/HoverEffects";
import { ScrollAnimation, StaggerContainer } from "@/components/animations/ScrollAnimations";


export default function Pricing() {
  const plans = [
    {
      name: "RaiseMed.IA Pro",
      subtitle: "Idéal pour démarrer",
      setupFee: 450,
      monthlyPrice: 150,
      originalPrice: null,
      savings: null,
      commitment: "Sans engagement",
      popular: false,
      features: [
        "Audit complet de votre présence en ligne",
        "Optimisation Google My Business",
        "Création de contenu mensuel (4 articles)",
        "Campagnes publicitaires ciblées",
        "Suivi analytics avancé",
        "Support client prioritaire",
        "Formation équipe incluse"
      ],
      bonuses: []
    },
    {
      name: "RaiseMed.IA Gold",
      subtitle: "Formule complète annuelle",
      setupFee: 0,
      monthlyPrice: null,
      yearlyPrice: 1760,
      originalPrice: 2350,
      savings: 590,
      commitment: "Engagement 12 mois",
      popular: true,
      features: [
        "Tout RaiseMed.IA Pro inclus",
        "Contenu premium (8 articles/mois)",
        "Automation marketing avancée",
        "Gestion réseaux sociaux complète",
        "A/B testing des campagnes",
        "Consultant dédié mensuel",
        "Reporting exécutif trimestriel",
        "Accès beta nouvelles fonctionnalités"
      ],
      bonuses: [
        "2 cartes NFC personnalisées",
        "Carte de visite virtuelle",
        "Frais d'installation offerts"
      ]
    }
  ];

  return (
    <section id="pricing" className="bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" className="text-center mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-dark mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nos Offres Tarification
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Des solutions adaptées à tous les budgets pour booster votre croissance
          </motion.p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {plans.map((plan, index) => (
            <HoverEffect key={index} effect="lift" className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${plan.popular ? 'ring-4 ring-primary/20' : ''}`}>
              {plan.popular && (
                <motion.div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 + 0.3 }}
                >
                  <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Le plus populaire</span>
                  </div>
                </motion.div>
              )}
              
              <div className="p-8">
                <motion.div 
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-dark mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.subtitle}</p>
                  
                  <div className="space-y-2 mb-6">
                    {plan.setupFee > 0 && (
                      <div className="text-gray-600">
                        Frais d'installation : <span className="font-semibold text-dark">{plan.setupFee}€</span>
                      </div>
                    )}
                    
                    {plan.monthlyPrice && (
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-4xl font-bold text-primary">{plan.monthlyPrice}€</span>
                        <span className="text-gray-600">/mois</span>
                      </div>
                    )}
                    
                    {plan.yearlyPrice && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-4xl font-bold text-primary">{plan.yearlyPrice}€</span>
                          <span className="text-gray-600">/an</span>
                        </div>
                        {plan.originalPrice && (
                          <div className="text-center">
                            <span className="text-gray-500 line-through text-lg">
                              Au lieu de {plan.originalPrice}€
                            </span>
                            <div className="text-secondary font-semibold">
                              Économisez {plan.savings}€ !
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="text-sm text-gray-600">{plan.commitment}</div>
                  </div>
                </motion.div>

                {plan.bonuses.length > 0 && (
                  <motion.div 
                    className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-4 mb-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    <div className="flex items-center mb-3">
                      <Gift className="w-5 h-5 text-accent mr-2" />
                      <span className="font-semibold text-dark">Bonus inclus :</span>
                    </div>
                    <ul className="space-y-2">
                      {plan.bonuses.map((bonus, bonusIndex) => (
                        <motion.li 
                          key={bonusIndex}
                          className="flex items-center text-sm text-gray-700"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.3 + bonusIndex * 0.1 }}
                        >
                          <Check className="w-4 h-4 text-accent mr-2" />
                          {bonus}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                <motion.div 
                  className="space-y-3 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <h4 className="font-semibold text-dark">Inclus dans cette offre :</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        className="flex items-start text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.4 + featureIndex * 0.05 }}
                      >
                        <Check className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                >
                  <Button 
                    className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-primary hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
                        : 'bg-gray-100 hover:bg-gray-200 text-dark hover:bg-primary hover:text-white'
                    }`}
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Choisir cette offre
                  </Button>
                </motion.div>
              </div>
            </HoverEffect>
          ))}
        </StaggerContainer>

        {/* Custom Quote Section */}
        <ScrollAnimation animation="slideUp" delay={0.6} className="text-center">
          <HoverEffect effect="scale" className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Besoin d'une solution sur mesure ?
            </motion.h3>
            <motion.p 
              className="text-blue-100 mb-6 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Chaque entreprise est unique. Discutons ensemble de vos besoins spécifiques pour créer une offre parfaitement adaptée.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="mr-2 h-5 w-5" />
                Demander un devis personnalisé
              </Button>
            </motion.div>
          </HoverEffect>
        </ScrollAnimation>
      </div>
    </section>
  );
}