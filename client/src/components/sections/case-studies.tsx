import { Button } from "@/components/ui/button";
import { FileText, User, Stethoscope, Home } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/animations/HoverEffects";
import { ScrollAnimation } from "@/components/animations/ScrollAnimations";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

export default function CaseStudies() {
  return (
    <section id="cas-clients" className="bg-white py-20 relative overflow-hidden">
      {/* Background animations */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
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
        className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/5 rounded-full blur-2xl"
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
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
            Nos clients témoignent de leur succès
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Découvrez comment nous avons transformé la croissance de ces entreprises locales
          </motion.p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Case Study 1 */}
          <HoverEffect 
            effect="lift"
            className="bg-gradient-to-br from-blue-50 to-primary/5 rounded-2xl p-8 border border-primary/10"
          >
            <ScrollAnimation animation="slideLeft" delay={0.1}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center mr-4">
                <Stethoscope className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark">Cabinet Médical</h3>
                <p className="text-gray-600">Médecine générale</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter value="+420%" />
                </div>
                <div className="text-sm text-gray-600">Nouveaux patients</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
              >
                <div className="text-3xl font-bold text-secondary">
                  <AnimatedCounter value="+250%" />
                </div>
                <div className="text-sm text-gray-600">Visibilité locale</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-accent">
                  <AnimatedCounter value="-60%" />
                </div>
                <div className="text-sm text-gray-600">Coût par patient</div>
              </motion.div>
            </div>
            
            <blockquote className="text-gray-700 italic mb-4">
              "Avant RaiseMed.IA, nous dépendions uniquement du bouche-à-oreille. Aujourd'hui, nous sommes visibles sur Google et nous attirons des patients qui cherchent vraiment nos spécialités."
            </blockquote>
            
            <div className="flex items-center text-gray-600 text-sm">
              <User className="mr-2 w-4 h-4" />
              <span>Médecin généraliste</span>
            </div>
            </ScrollAnimation>
          </HoverEffect>

          {/* Case Study 2 */}
          <HoverEffect 
            effect="lift"
            className="bg-gradient-to-br from-green-50 to-secondary/5 rounded-2xl p-8 border border-secondary/10"
          >
            <ScrollAnimation animation="slideRight" delay={0.2}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-secondary text-white rounded-xl flex items-center justify-center mr-4">
                <Home className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark">Agence Immobilière</h3>
                <p className="text-gray-600">Immobilier résidentiel</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter value="+180%" />
                </div>
                <div className="text-sm text-gray-600">Mandats signés</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
              >
                <div className="text-3xl font-bold text-secondary">
                  <AnimatedCounter value="+350%" />
                </div>
                <div className="text-sm text-gray-600">Leads qualifiés</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-accent">15 jours</div>
                <div className="text-sm text-gray-600">Délai moyen vente</div>
              </motion.div>
            </div>
            
            <blockquote className="text-gray-700 italic mb-4">
              "L'inbound marketing nous a permis de nous positionner comme experts du marché local. Nos clients nous trouvent naturellement quand ils sont prêts à vendre."
            </blockquote>
            
            <div className="flex items-center text-gray-600 text-sm">
              <User className="mr-2 w-4 h-4" />
              <span>Directeur Agence</span>
            </div>
            </ScrollAnimation>
          </HoverEffect>
        </div>

        {/* Call to action */}
        <ScrollAnimation animation="scale" delay={0.3}>
          <div className="text-center">
            <a href="/cas-clients">
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button className="bg-primary text-white hover:bg-blue-700 px-8 py-4 text-lg shadow-xl transition-all duration-300">
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Voir tous nos cas clients
                  </motion.div>
                </Button>
              </motion.div>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
