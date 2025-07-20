export default function TrustIndicators() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium mb-8">Ils nous font confiance</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-70">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-16">
                <img 
                  src="/assets/Logo Pharma MC - SBG_1753043771294.png" 
                  alt="Pharmacie Bergère" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-16">
                <img 
                  src="/assets/image_1753043820433.png" 
                  alt="Century 21" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-16">
                <img 
                  src="/assets/image_1753043825883.png" 
                  alt="Supra Sécurité" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-16">
                <img 
                  src="/assets/image_1753043831484.png" 
                  alt="La Vaux Immobilier" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-16">
                <img 
                  src="/assets/image_1753043896859.png" 
                  alt="Optic 2000" 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">+300%</div>
            <p className="text-gray-600">Augmentation moyenne des leads qualifiés</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-secondary mb-2">85%</div>
            <p className="text-gray-600">Taux de satisfaction client</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <p className="text-gray-600">Entreprises locales accompagnées</p>
          </div>
        </div>
      </div>
    </section>
  );
}
