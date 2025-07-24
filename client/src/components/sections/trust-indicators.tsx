export default function TrustIndicators() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 gradient-text">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Rejoignez plus de 50+ entreprises partenaires qui ont transformé leur croissance avec nos stratégies inbound
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            <div className="text-center animate-fade-in-up animation-delay-100">
              <div className="bg-white p-6 rounded-2xl shadow-lg card-hover flex items-center justify-center h-20 border border-gray-100">
                <img 
                  src="/assets/Logo%20Pharma%20MC%20-%20SBG_1753043771294.png" 
                  alt="Pharmacie Bergère" 
                  className="max-h-14 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-200">
              <div className="bg-white p-6 rounded-2xl shadow-lg card-hover flex items-center justify-center h-20 border border-gray-100">
                <img 
                  src="/assets/image_1753043820433.png" 
                  alt="Century 21" 
                  className="max-h-14 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-300">
              <div className="bg-white p-6 rounded-2xl shadow-lg card-hover flex items-center justify-center h-20 border border-gray-100">
                <img 
                  src="/assets/image_1753043825883.png" 
                  alt="Supra Sécurité" 
                  className="max-h-14 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-500">
              <div className="bg-white p-6 rounded-2xl shadow-lg card-hover flex items-center justify-center h-20 border border-gray-100">
                <img 
                  src="/assets/image_1753043831484.png" 
                  alt="La Vaux Immobilier" 
                  className="max-h-14 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-700">
              <div className="bg-white p-6 rounded-2xl shadow-lg card-hover flex items-center justify-center h-20 border border-gray-100">
                <img 
                  src="/assets/image_1753043896859.png" 
                  alt="Optic 2000" 
                  className="max-h-14 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl border border-blue-100 card-hover animate-scale-in animation-delay-100">
            <div className="text-5xl font-bold gradient-text mb-3">+500k€</div>
            <p className="text-gray-600 font-medium">Générés pour nos clients</p>
          </div>
          <div className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-2xl shadow-xl border border-emerald-100 card-hover animate-scale-in animation-delay-300">
            <div className="text-5xl font-bold gradient-text mb-3 flex items-center justify-center">
              <span className="mr-2">↓</span>60%
            </div>
            <p className="text-gray-600 font-medium">Coût par lead</p>
          </div>
          <div className="bg-gradient-to-br from-white to-yellow-50 p-8 rounded-2xl shadow-xl border border-yellow-100 card-hover animate-scale-in animation-delay-500">
            <div className="text-5xl font-bold gradient-text mb-3">4</div>
            <p className="text-gray-600 font-medium">Pays desservis</p>
          </div>
        </div>
      </div>
    </section>
  );
}