import { motion } from "framer-motion";

export default function TrustIndicators() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-dark mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Ils nous font confiance
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Rejoignez plus de 50+ entreprises locales qui ont transformé leur croissance avec nos stratégies inbound
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center" data-aos="fade-up" data-aos-delay="400">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center h-20 border border-gray-100 transition-all duration-300">
                <img 
                  src="/assets/Logo%20Pharma%20MC%20-%20SBG_1753043771294.png" 
                  alt="Pharmacie Bergère" 
                  className="max-h-14 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center h-20 border border-gray-100 transition-all duration-300">
                <img 
                  src="/assets/image_1753043820433.png" 
                  alt="Century 21" 
                  className="max-h-14 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center h-20 border border-gray-100 transition-all duration-300">
                <img 
                  src="/assets/image_1753043825883.png" 
                  alt="Supra Sécurité" 
                  className="max-h-14 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center h-20 border border-gray-100 transition-all duration-300">
                <img 
                  src="/assets/image_1753043831484.png" 
                  alt="La Vaux Immobilier" 
                  className="max-h-14 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl flex items-center justify-center h-20 border border-gray-100 transition-all duration-300">
                <img 
                  src="/assets/image_1753043896859.png" 
                  alt="Optic 2000" 
                  className="max-h-14 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" data-aos="fade-up" data-aos-delay="600">
          <motion.div 
            className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl border border-blue-100"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-3">+500k€</div>
            <p className="text-gray-600 font-medium">Générés pour nos clients</p>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-xl border border-green-100"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-green-600 bg-clip-text text-transparent mb-3">85%</div>
            <p className="text-gray-600 font-medium">Taux de satisfaction client</p>
          </motion.div>
          <motion.div 
            className="bg-gradient-to-br from-white to-yellow-50 p-8 rounded-2xl shadow-xl border border-yellow-100"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-accent to-yellow-600 bg-clip-text text-transparent mb-3">4</div>
            <p className="text-gray-600 font-medium">Pays desservis</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
