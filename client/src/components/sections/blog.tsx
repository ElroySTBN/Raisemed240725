import { Button } from "@/components/ui/button";
import { Book, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/animations/HoverEffects";
import { ScrollAnimation, StaggerContainer } from "@/components/animations/ScrollAnimations";

export default function Blog() {
  const articles = [
    {
      category: "STRATÉGIE INBOUND",
      categoryColor: "text-primary",
      title: "Comment l'IA révolutionne le lead scoring en 2024",
      excerpt: "Découvrez comment nos algorithmes d'intelligence artificielle identifient vos prospects les plus qualifiés automatiquement.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Graphiques et diagrammes de stratégie marketing digital"
    },
    {
      category: "SEO LOCAL",
      categoryColor: "text-secondary",
      title: "5 secrets pour dominer Google My Business",
      excerpt: "Les techniques avancées pour apparaître en premier dans les recherches locales de votre secteur d'activité.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Recherche locale sur smartphone avec géolocalisation"
    },
    {
      category: "SECTEUR SANTÉ",
      categoryColor: "text-accent",
      title: "Content marketing pour professionnels de santé",
      excerpt: "Comment créer du contenu médical de qualité qui respecte la déontologie et attire vos patients idéaux.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Professionnel de santé utilisant une tablette pour créer du contenu"
    }
  ];

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
          {articles.map((article, index) => (
            <HoverEffect key={index} effect="lift" className="bg-white rounded-xl shadow-lg overflow-hidden">
              <motion.img 
                src={article.image}
                alt={article.alt}
                className="w-full h-48 object-cover" 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6">
                <motion.div 
                  className={`${article.categoryColor} font-semibold text-sm mb-2`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {article.category}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-dark mb-3 hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                >
                  {article.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {article.excerpt}
                </motion.p>
                <motion.a 
                  href="#" 
                  className="text-primary font-semibold hover:text-blue-700 transition-colors inline-flex items-center group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  Lire l'article 
                  <motion.div
                    className="ml-1"
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.a>
              </div>
            </HoverEffect>
          ))}
        </StaggerContainer>

        <ScrollAnimation animation="slideUp" delay={0.6} className="text-center mt-12">
          <Button className="bg-primary text-white hover:bg-blue-700 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            <Book className="mr-2 h-5 w-5" />
            Voir tous les articles
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  );
}