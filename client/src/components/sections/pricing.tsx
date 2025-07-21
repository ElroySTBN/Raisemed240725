import { Button } from "@/components/ui/button";
import { Check, Star, Gift, CreditCard, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/animations/HoverEffects";
import { ScrollAnimation, StaggerContainer, RevealText, MagneticElement } from "@/components/animations/ScrollAnimations";
import { ElasticEntrance, PerspectiveCard, TypewriterText } from "@/components/animations/ScrollTriggerEffects";

export default function Pricing() {
  const plans = [
    {
      name: "",
      subtitle: "RaiseMed.IA Pro",
      price: "150",
      unit: "€/mois",
      setupFee: "450€ installation",
      commitment: "Sans engagement",
      popular: false,
      color: "bg-gray-600",
      buttonText: "CHOISIR CETTE OFFRE",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      features: [
        "Audit stratégique de votre visibilité en ligne",
        "Veille concurrentielle locale",
        "Optimisation de votre présence digitale",
        "Gestion E-réputation",
        "Création de contenu engageant",
        "Campagnes multicanales d'attraction client",
        "Analyse qualitative des tendances de recherche",
        "Formation sur mesure pour votre équipe",
        "Support prioritaire sur whatsapp et email"
      ]
    },
    {
      name: "",
      subtitle: "RaiseMed.IA Gold",
      price: "1760",
      unit: "€/an",
      originalPrice: "2350€",
      savings: "Économisez 590€",
      setupFee: "Installation OFFERTE",
      commitment: "Engagement 12 mois",
      popular: true,
      color: "bg-primary",
      buttonText: "CHOISIR CETTE OFFRE",
      buttonColor: "bg-primary hover:bg-blue-700",
      badge: "POPULAIRE",
      bonuses: [
        "2 cartes NFC GRATUITES",
        "Carte de visite virtuelle GRATUITE",
        "Frais d'installation OFFERTS"
      ],
      features: [
        "Audit stratégique de votre visibilité en ligne",
        "Veille concurrentielle locale",
        "Optimisation de votre présence digitale",
        "Gestion E-réputation",
        "Création de contenu engageant",
        "Campagnes multicanales d'attraction client",
        "Analyse qualitative des tendances de recherche",
        "Formation sur mesure pour votre équipe",
        "Support prioritaire sur whatsapp et email"
      ]
    },
    {
      name: "",
      subtitle: "Sur Devis",
      price: "Sur",
      priceSecondLine: "devis",
      unit: "",
      setupFee: "Solution personnalisée",
      commitment: "Selon vos besoins",
      popular: false,
      color: "bg-secondary",
      buttonText: "DEMANDER UN DEVIS",
      buttonColor: "bg-secondary hover:bg-orange-600",
      features: []
    }
  ];

  return (
    <section id="pricing" className="bg-gray-50 py-20 relative overflow-hidden">
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
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" className="text-center mb-12">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-dark mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Choisissez votre solution
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Des tarifs transparents pour faire évoluer votre business
          </motion.p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <HoverEffect key={index} effect="lift" className="relative">
              <div className="bg-white rounded-xl border-2 border-gray-100 overflow-hidden h-full flex flex-col">
                {/* Badge populaire */}
                {plan.badge && (
                  <motion.div 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ scale: 0, y: -10 }}
                    whileInView={{ scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 + 0.3 }}
                  >
                    <div className="bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                      {plan.badge}
                    </div>
                  </motion.div>
                )}

                {/* Header avec nom du plan */}
                <div className="text-center pt-8 pb-4 px-6">
                  <motion.div 
                    className="text-gray-700 font-semibold text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                  >
                    {plan.subtitle}
                  </motion.div>
                </div>

                {/* Prix */}
                <div className="text-center mb-6 px-6">
                  <motion.div 
                    className="flex items-end justify-center space-x-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 + 0.2 }}
                  >
                    <span className="text-4xl font-bold text-dark">{plan.price}</span>
                    {plan.priceSecondLine && (
                      <div className="flex flex-col">
                        <span className="text-4xl font-bold text-dark">{plan.priceSecondLine}</span>
                      </div>
                    )}
                    {plan.unit && <span className="text-gray-600 text-sm mb-2">{plan.unit}</span>}
                  </motion.div>
                  
                  {plan.originalPrice && (
                    <motion.div 
                      className="text-center mt-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      <div className="text-gray-500 line-through text-sm">Au lieu de {plan.originalPrice}</div>
                      <div className="text-green-600 font-semibold text-sm">{plan.savings}</div>
                    </motion.div>
                  )}
                  
                  <motion.div 
                    className="text-xs text-gray-600 mt-2"
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  >
                    {plan.setupFee}
                  </motion.div>
                  <motion.div 
                    className="text-xs text-gray-500"
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    {plan.commitment}
                  </motion.div>
                </div>

                {/* Bouton d'action */}
                <div className="px-6 mb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                  >
                    <Button className={`w-full ${plan.buttonColor} text-white py-3 text-sm font-bold tracking-wide transition-all duration-300`}>
                      {plan.buttonText}
                    </Button>
                  </motion.div>
                </div>

                {/* Bonus */}
                {plan.bonuses && (
                  <motion.div 
                    className="px-6 mb-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                  >
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 border border-green-200">
                      <div className="flex items-center mb-2">
                        <Gift className="w-4 h-4 text-green-600 mr-2" />
                        <span className="font-semibold text-sm text-green-800">Bonus inclus :</span>
                      </div>
                      {plan.bonuses.map((bonus, bonusIndex) => (
                        <motion.div 
                          key={bonusIndex}
                          className="flex items-center text-xs text-green-700 mb-1"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.8 + bonusIndex * 0.1 }}
                        >
                          <Check className="w-3 h-3 text-green-600 mr-2" />
                          {bonus}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Liste des fonctionnalités */}
                {plan.features.length > 0 && (
                  <div className="px-6 pb-6 flex-grow">
                    <motion.div 
                      className="text-center mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                    >
                      <span className="text-xs text-gray-500">Tout inclus :</span>
                    </motion.div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex}
                          className="flex items-start text-sm text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.9 + featureIndex * 0.05 }}
                        >
                          <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </HoverEffect>
          ))}
        </StaggerContainer>

        {/* Section informations complémentaires */}
        <ScrollAnimation animation="slideUp" delay={0.8} className="text-center mt-12">
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-primary mr-2" />
              <span className="font-semibold text-dark">Besoin d'aide pour choisir ?</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Nos experts vous accompagnent gratuitement dans le choix de la solution la plus adaptée à vos besoins.
            </p>
            <Button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Demander un conseil gratuit
            </Button>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
}