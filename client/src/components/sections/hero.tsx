import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-20 overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent/30 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce delay-3000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Faites connaître votre savoir-faire à ceux qui en ont le plus besoin
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transformez votre expertise en croissance durable. Solutions inbound marketing sur mesure pour entreprises locales.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
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
                  <Button className="bg-accent text-white px-8 py-4 text-lg hover:bg-yellow-600 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <Rocket className="mr-2 h-5 w-5" />
                    Démarrer maintenant
                  </Button>
                </motion.div>
              </button>
              <a href="https://tally.so/r/wvbMdQ" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button 
                    className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-primary shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Obtenir un Audit GRATUIT
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Équipe professionnelle en réunion stratégique" 
              className="rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-all duration-500"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Premium gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  );
}
