export default function TrustIndicators() {
  return (
    <section className="bg-white section-padding relative overflow-hidden">
      {/* Décorations subtiles style Beyonds */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gray-100 rounded-full blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gray-50 rounded-full blur-3xl opacity-30 animate-float animation-delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-beyonds mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-secondary-beyonds max-w-2xl mx-auto mb-12">
            Rejoignez plus de 50+ entreprises partenaires qui ont transformé leur croissance avec nos stratégies inbound
          </p>
          
          {/* Grid des logos - style Beyonds */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-16">
            {[
              { src: "/assets/Logo%20Pharma%20MC%20-%20SBG_1753043771294.png", alt: "Pharmacie Bergère" },
              { src: "/assets/image_1753043820433.png", alt: "Century 21" },
              { src: "/assets/image_1753043825883.png", alt: "Supra Sécurité" },
              { src: "/assets/image_1753043831484.png", alt: "La Vaux Immobilier" },
              { src: "/assets/image_1753043896859.png", alt: "Optic 2000" }
            ].map((logo, index) => (
              <div 
                key={index}
                className={`hover-lift animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white p-6 rounded-lg shadow-beyonds border border-gray-100 hover:border-gray-200 transition-all duration-300 h-20 flex items-center justify-center">
                  <img 
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Métriques - style Beyonds épuré */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-beyonds-lg border border-gray-100 hover-lift animate-scale-in animation-delay-100">
            <div className="text-5xl font-bold text-primary-beyonds mb-3">+500k€</div>
            <p className="text-secondary-beyonds font-medium">Générés pour nos clients</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-beyonds-lg border border-gray-100 hover-lift animate-scale-in animation-delay-300">
            <div className="text-5xl font-bold text-primary-beyonds mb-3 flex items-center justify-center">
              <span className="mr-2">↓</span>60%
            </div>
            <p className="text-secondary-beyonds font-medium">Coût par lead</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-beyonds-lg border border-gray-100 hover-lift animate-scale-in animation-delay-500">
            <div className="text-5xl font-bold text-primary-beyonds mb-3">4</div>
            <p className="text-secondary-beyonds font-medium">Pays desservis</p>
          </div>
        </div>
      </div>
    </section>
  );
}