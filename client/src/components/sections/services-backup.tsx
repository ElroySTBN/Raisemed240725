import { Magnet, Shield, TrendingUp, Check } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/animations/HoverEffects";
import { ScrollAnimation, StaggerContainer } from "@/components/animations/ScrollAnimations";

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-dark mb-8 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Notre approche inbound marketing révolutionnaire
          </motion.h2>
          <motion.p 
            className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Découvrez comment l'inbound marketing peut transformer votre entreprise locale en aimant à prospects qualifiés
          </motion.p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HoverEffect 
            effect="lift"
            className="bg-gradient-to-br from-primary to-blue-700 text-white p-10 rounded-3xl shadow-2xl border border-blue-600/20 relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-8"
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Magnet className="h-8 w-8" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-6">Attraction Intelligence</h3>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              Attirez naturellement vos prospects idéaux grâce à du contenu personnalisé et une optimisation SEO locale poussée.
            </p>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-accent" />SEO local optimisé</li>
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-accent" />Contenu expert métier</li>
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-accent" />Stratégie réseaux sociaux</li>
            </ul>
          </HoverEffect>

          <HoverEffect 
            effect="lift"
            className="bg-gradient-to-br from-secondary to-green-700 text-white p-10 rounded-3xl shadow-2xl border border-green-600/20 relative overflow-hidden"
          >
            <motion.div
              className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [-10, 10, -10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-8 animate-float" style={{ animationDelay: '2s' }}>
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-6">E-réputation</h3>
            <p className="text-green-100 mb-8 text-lg leading-relaxed">
              Gérez et améliorez votre réputation en ligne pour renforcer la confiance et attirer plus de clients locaux.
            </p>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-accent" />Gestion des avis clients</li>
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-accent" />Monitoring de réputation</li>
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-accent" />Stratégie de réponse</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-accent to-orange-600 text-white p-10 rounded-3xl shadow-2xl border border-orange-600/20"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-8 animate-float" style={{ animationDelay: '4s' }}>
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Résultats Data-Driven</h3>
            <p className="text-orange-100 mb-8 text-lg leading-relaxed">
              Chaque action est mesurée et optimisée grâce à nos rapports mensuels et veille concurrentielle continue.
            </p>
            <ul className="space-y-3 text-orange-100">
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-accent" />KPIs personnalisés</li>
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-accent" />ROI transparent</li>
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-accent" />Veille concurrentielle</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
