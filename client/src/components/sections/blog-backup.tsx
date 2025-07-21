import { Button } from "@/components/ui/button";
import { Book, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/animations/HoverEffects";
import { ScrollAnimation, StaggerContainer } from "@/components/animations/ScrollAnimations";

export default function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-primary/5 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-accent/5 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
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
            Nos derniers articles experts
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Restez informé des dernières tendances en inbound marketing
          </motion.p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
              alt="Graphiques et diagrammes de stratégie marketing digital" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <div className="text-primary font-semibold text-sm mb-2">STRATÉGIE INBOUND</div>
              <h3 className="text-xl font-bold text-dark mb-3">
                Comment l'IA révolutionne le lead scoring en 2024
              </h3>
              <p className="text-gray-600 mb-4">
                Découvrez comment nos algorithmes d'intelligence artificielle identifient vos prospects les plus qualifiés automatiquement.
              </p>
              <a href="#" className="text-primary font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
                Lire l'article <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </article>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
              alt="Recherche locale sur smartphone avec géolocalisation" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <div className="text-secondary font-semibold text-sm mb-2">SEO LOCAL</div>
              <h3 className="text-xl font-bold text-dark mb-3">
                5 secrets pour dominer Google My Business
              </h3>
              <p className="text-gray-600 mb-4">
                Les techniques avancées pour apparaître en premier dans les recherches locales de votre secteur d'activité.
              </p>
              <a href="#" className="text-primary font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
                Lire l'article <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </article>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
              alt="Professionnel de santé utilisant une tablette pour créer du contenu" 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <div className="text-accent font-semibold text-sm mb-2">SECTEUR SANTÉ</div>
              <h3 className="text-xl font-bold text-dark mb-3">
                Content marketing pour professionnels de santé
              </h3>
              <p className="text-gray-600 mb-4">
                Comment créer du contenu médical de qualité qui respecte la déontologie et attire vos patients idéaux.
              </p>
              <a href="#" className="text-primary font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
                Lire l'article <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </article>
        </div>

        <div className="text-center mt-12">
          <a href="/blog">
            <Button className="bg-primary text-white hover:bg-blue-700">
              <Book className="mr-2 h-4 w-4" />
              Voir tous nos articles
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
