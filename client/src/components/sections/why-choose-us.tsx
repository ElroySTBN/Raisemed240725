import { MapPin, Settings, Handshake, BarChart3, Check } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/animations/HoverEffects";
import { ScrollAnimation, StaggerContainer } from "@/components/animations/ScrollAnimations";

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: MapPin,
      color: "bg-primary",
      title: "Expertise Locale Reconnue",
      description: "Nous maîtrisons parfaitement les spécificités du marché français et les comportements des consommateurs locaux.",
      features: [
        "Optimisation Google My Business",
        "SEO local spécialisé",
        "Connaissance des réglementations"
      ]
    },
    {
      icon: Settings,
      color: "bg-secondary",
      title: "Technologie IA Avancée",
      description: "Nos outils d'intelligence artificielle optimisent vos campagnes en temps réel pour maximiser votre ROI.",
      features: [
        "Automation marketing intelligente",
        "Prédiction comportementale",
        "Personnalisation à grande échelle"
      ]
    },
    {
      icon: Handshake,
      color: "bg-accent",
      title: "Accompagnement Personnalisé",
      description: "Chaque client bénéficie d'un consultant dédié qui comprend son secteur et ses enjeux spécifiques.",
      features: [
        "Consultant dédié à votre secteur",
        "Support réactif et expert",
        "Formation de vos équipes"
      ]
    },
    {
      icon: BarChart3,
      color: "bg-purple-600",
      title: "Résultats Mesurables",
      description: "Transparence totale avec des reportings détaillés et des KPIs clairs pour mesurer votre croissance.",
      features: [
        "Dashboard analytics avancé",
        "Rapports mensuels détaillés",
        "ROI calculé en temps réel"
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [-15, 15, -15],
        }}
        transition={{
          duration: 5,
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
            Pourquoi choisir RaiseMed.IA ?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nous comprenons les défis spécifiques des entreprises locales et nous les résolvons avec expertise
          </motion.p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <HoverEffect key={index} effect="lift" className="bg-white rounded-xl p-8 shadow-lg">
                <motion.div 
                  className={`w-12 h-12 ${advantage.color} text-white rounded-lg flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-dark mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {advantage.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                >
                  {advantage.description}
                </motion.p>
                <ul className="space-y-2 text-gray-600">
                  {advantage.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 + featureIndex * 0.1 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Check className="text-secondary mr-2 w-4 h-4" />
                      </motion.div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </HoverEffect>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}