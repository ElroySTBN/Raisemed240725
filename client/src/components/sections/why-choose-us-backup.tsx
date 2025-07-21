import { MapPin, Settings, Handshake, BarChart3, Check } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/animations/HoverEffects";
import { ScrollAnimation, StaggerContainer } from "@/components/animations/ScrollAnimations";

export default function WhyChooseUs() {
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
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-4">Expertise Locale Reconnue</h3>
            <p className="text-gray-600 mb-4">
              Nous maîtrisons parfaitement les spécificités du marché français et les comportements des consommateurs locaux.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><Check className="text-secondary mr-2 w-4 h-4" />Optimisation Google My Business</li>
              <li className="flex items-center"><Check className="text-secondary mr-2 w-4 h-4" />SEO local spécialisé</li>
              <li className="flex items-center"><Check className="text-secondary mr-2 w-4 h-4" />Connaissance des réglementations</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-secondary text-white rounded-lg flex items-center justify-center mb-6">
              <Settings className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-4">Technologie IA Avancée</h3>
            <p className="text-gray-600 mb-4">
              Nos outils d'intelligence artificielle optimisent vos campagnes en temps réel pour maximiser votre ROI.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><Check className="text-secondary mr-2 w-4 h-4" />Automation marketing intelligente</li>
              <li className="flex items-center"><Check className="text-secondary mr-2 w-4 h-4" />Prédiction comportementale</li>
              <li className="flex items-center"><Check className="text-secondary mr-2 w-4 h-4" />Personnalisation à grande échelle</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center mb-6">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-4">Accompagnement Personnalisé</h3>
            <p className="text-gray-600 mb-4">
              Chaque client bénéficie d'un consultant dédié qui comprend son secteur et ses enjeux spécifiques.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><Check className="text-secondary mr-2 w-4 h-4" />Formation de vos équipes</li>
              <li className="flex items-center"><Check className="text-secondary mr-2 w-4 h-4" />Support technique illimité</li>
              <li className="flex items-center"><Check className="text-secondary mr-2 w-4 h-4" />Bilans mensuels personnalisés</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-4">Résultats Garantis</h3>
            <p className="text-gray-600 mb-4">
              Nous nous engageons sur des KPIs précis et vous offrons une transparence totale sur vos investissements.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><Check className="text-secondary mr-2 w-4 h-4" />Rapports mensuels détaillés</li>
              <li className="flex items-center"><Check className="text-secondary mr-2 w-4 h-4" />ROI transparent et mesurable</li>
              <li className="flex items-center"><Check className="text-secondary mr-2 w-4 h-4" />Engagement de performance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
