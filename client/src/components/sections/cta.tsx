import { Button } from "@/components/ui/button";
import { CalendarCheck, Phone, Gift, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white py-24 relative overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-3 h-3 bg-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-accent/40 rounded-full animate-ping delay-2000"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.h2 
          className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Prêt à transformer votre entreprise ?
        </motion.h2>
        <motion.p 
          className="text-2xl mb-12 text-blue-100 max-w-3xl mx-auto font-light"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          Obtenez votre audit gratuit et découvrez comment l'inbound marketing peut multiplier vos leads qualifiés
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-aos="fade-up" data-aos-delay="400">
          <motion.div 
            className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Gift className="w-8 h-8 text-accent" />
            <span className="font-semibold text-lg">Audit gratuit de 45min</span>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Phone className="w-8 h-8 text-accent" />
            <span className="font-semibold text-lg">Réponse sous 24h</span>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Shield className="w-8 h-8 text-accent" />
            <span className="font-semibold text-lg">Sans engagement</span>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-delay="600">
          <a href="https://tally.so/r/wvbMdQ" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="bg-accent text-white px-10 py-5 text-xl font-semibold hover:bg-yellow-600 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-xl">
                <CalendarCheck className="mr-3 h-6 w-6" />
                Réserver mon audit gratuit
              </Button>
            </motion.div>
          </a>
          <a href="tel:0782492124">
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-5 text-xl font-semibold hover:bg-white hover:text-primary shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-xl"
              >
                <Phone className="mr-3 h-6 w-6" />
                Appelez-nous : 07 82 49 21 24
              </Button>
            </motion.div>
          </a>
        </div>

        <p className="text-sm text-blue-200 mt-6 flex items-center justify-center">
          <Shield className="mr-1 w-4 h-4" />
          Vos données sont protégées et ne seront jamais partagées
        </p>
      </div>
    </section>
  );
}
