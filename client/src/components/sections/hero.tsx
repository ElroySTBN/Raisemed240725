import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { RevealText, MagneticElement, ParallaxScroll } from "@/components/animations/ScrollAnimations";
import { FloatingElements, MorphingGradient } from "@/components/animations/ScrollTriggerEffects";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Morphing background gradient */}
      <MorphingGradient 
        className="absolute inset-0 animate-morph-gradient" 
        colors={['from-primary', 'via-blue-700', 'via-purple-700', 'to-blue-900']}
      />
      
      {/* Floating animated elements */}
      <FloatingElements />
      
      <div className="relative text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <RevealText
                text="Faites connaître votre savoir-faire à ceux qui en ont le plus besoin"
                className="text-4xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-yellow-200 bg-clip-text text-transparent"
                delay={0.3}
              />
              <motion.p 
                className="text-xl mb-8 text-blue-100"
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                Transformez votre expertise en croissance durable. Solutions inbound marketing sur mesure pour entreprises locales.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                <MagneticElement strength={20}>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('pricing');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block"
                    >
                      <Button className="bg-accent text-white px-8 py-4 text-lg hover:bg-yellow-600 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 glow-effect-accent">
                        <Rocket className="mr-2 h-5 w-5" />
                        Démarrer maintenant
                      </Button>
                    </motion.div>
                  </button>
                </MagneticElement>
                <MagneticElement strength={15}>
                  <a href="https://tally.so/r/wvbMdQ" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block"
                    >
                      <Button 
                        className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-primary shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 glow-effect"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        Obtenir un Audit GRATUIT
                      </Button>
                    </motion.div>
                  </a>
                </MagneticElement>
              </motion.div>
            </motion.div>
            
            <ParallaxScroll speed={0.3} className="lg:text-right">
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                className="perspective-1000"
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Équipe professionnelle en réunion stratégique" 
                  className="rounded-xl shadow-2xl w-full h-auto transition-all duration-500 glow-effect"
                  whileHover={{ 
                    scale: 1.02, 
                    rotateY: 8,
                    rotateX: -2,
                    transition: { duration: 0.4 }
                  }}
                />
              </motion.div>
            </ParallaxScroll>
          </div>
        </div>
      </div>
      
      {/* Premium gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  );
}
