import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/animations/HoverEffects";
import { ScrollAnimation, StaggerContainer } from "@/components/animations/ScrollAnimations";

export default function Testimonials() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Background animations */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-primary/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [-10, 10, -10],
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
            Ce que disent nos clients
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Leur succès parle pour nous
          </motion.p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-gray-700 mb-6">
              "Grâce à RaiseMed.IA, mon cabinet dentaire est maintenant le premier résultat sur Google. Mes rendez-vous sont complets 3 semaines à l'avance !"
            </blockquote>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                alt="Portrait professionnel du Dr. Sophie Laurent" 
                className="w-12 h-12 rounded-full mr-4 object-cover" 
              />
              <div>
                <div className="font-semibold text-dark">Dr. S.L.</div>
                <div className="text-gray-600 text-sm">Chirurgien-dentiste, Nice</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-gray-700 mb-6">
              "En 6 mois, nous avons doublé notre chiffre d'affaires. L'inbound marketing a complètement transformé notre approche commerciale."
            </blockquote>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                alt="Portrait professionnel de Marc Durand" 
                className="w-12 h-12 rounded-full mr-4 object-cover" 
              />
              <div>
                <div className="font-semibold text-dark">M.D.</div>
                <div className="text-gray-600 text-sm">Plombier-chauffagiste, Toulouse</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-gray-700 mb-6">
              "L'équipe RaiseMed.IA comprend vraiment les enjeux de l'immobilier local. Nos vendeurs ont maintenant des leads qualifiés tous les jours."
            </blockquote>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                alt="Portrait professionnel d'Isabelle Moreau" 
                className="w-12 h-12 rounded-full mr-4 object-cover" 
              />
              <div>
                <div className="font-semibold text-dark">I.M.</div>
                <div className="text-gray-600 text-sm">Directrice, Agence immobilière Bordeaux</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
