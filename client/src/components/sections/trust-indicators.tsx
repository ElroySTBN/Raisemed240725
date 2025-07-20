export default function TrustIndicators() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium mb-8">Ils nous font confiance</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-500">CABINET MÉDICAL</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-500">AGENCE IMMO</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-500">ARTISAN BTP</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-500">COMMERCE LOCAL</span>
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
