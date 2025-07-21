export default function TrustIndicators() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-8">Ils nous font confiance</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-16">
                <img 
                  src="/assets/Logo%20Pharma%20MC%20-%20SBG_1753043771294.png" 
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
            <div className="text-4xl font-bold text-primary mb-2">+500k€</div>
            <p className="text-gray-600">Générés pour nos clients</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-secondary mb-2">85%</div>
            <p className="text-gray-600">Taux de satisfaction client</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-accent mb-2">4</div>
            <p className="text-gray-600">Pays desservis</p>
          </div>
        </div>
      </div>
    </section>
  );
}
