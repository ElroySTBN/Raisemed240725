import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/animations/HoverEffects";
import { ScrollAnimation, StaggerContainer, RevealText, ParallaxScroll, MagneticElement } from "@/components/animations/ScrollAnimations";
import { ElasticEntrance, PerspectiveCard, FloatingElements } from "@/components/animations/ScrollTriggerEffects";

export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      text: "Grâce à RaiseMed.IA, notre cabinet est maintenant le premier résultat sur Google. Nos rendez-vous sont complets 3 semaines à l'avance !",
      author: "Dr. S.L.",
      role: "Chirurgien-dentiste",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      stars: 5,
      text: "En 6 mois, nous avons doublé notre chiffre d'affaires. L'inbound marketing a complètement transformé notre approche commerciale.",
      author: "M.D.",
      role: "Plombier-chauffagiste",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      stars: 5,
      text: "L'équipe RaiseMed.IA comprend vraiment les enjeux de l'immobilier local. Nos vendeurs ont maintenant des leads qualifiés tous les jours.",
      author: "A.R.",
      role: "Directrice agence immobilière",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c989e08bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Enhanced floating elements */}
      <FloatingElements />
      
      <ParallaxScroll speed={0.2} className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </ParallaxScroll>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600">
            Leur succès parle pour nous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-100 shadow-lg transform transition-all duration-300 hover:shadow-2xl">
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex text-accent">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + i * 0.1,
                        type: 'spring',
                        stiffness: 300
                      }}
                    >
                      <Star className="w-5 h-5 fill-current" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.blockquote 
                className="text-gray-700 mb-6 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              >
                "{testimonial.text}"
              </motion.blockquote>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              >
                <motion.img 
                  src={testimonial.avatar}
                  alt={`Portrait professionnel de ${testimonial.author}`}
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-primary/20" 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
                <div>
                  <div className="font-semibold text-dark">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}