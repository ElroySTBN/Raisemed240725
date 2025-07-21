import { X } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/animations/HoverEffects";
import { ScrollAnimation } from "@/components/animations/ScrollAnimations";

export default function ProblemSolution() {
  const problems = [
    {
      title: "Publicité intrusive et coûteuse",
      description: "Vos prospects fuient la publicité traditionnelle et vos coûts d'acquisition explosent."
    },
    {
      title: "Manque de visibilité locale",
      description: "Vos concurrents apparaissent avant vous sur Google Maps et les recherches locales."
    },
    {
      title: "Leads non qualifiés",
      description: "Vous perdez du temps avec des prospects qui ne correspondent pas à vos services."
    },
    {
      title: "Absence de stratégie digitale",
      description: "Vous naviguez à vue sans vision claire de votre présence en ligne."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Animated background elements */}
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
        className="absolute bottom-20 left-20 w-24 h-24 bg-accent/5 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollAnimation animation="slideLeft">
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-dark mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Vous en avez assez des méthodes d'acquisition de leads traditionnelles ?
            </motion.h2>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-red-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <X className="text-red-600 w-4 h-4" />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="font-semibold text-dark mb-2 group-hover:text-primary transition-colors"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    >
                      {problem.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {problem.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideRight" delay={0.3}>
            <HoverEffect effect="scale" className="relative">
              <motion.img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Tableau de bord analytics montrant les performances marketing" 
                className="rounded-xl shadow-2xl w-full h-auto border-4 border-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </HoverEffect>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}