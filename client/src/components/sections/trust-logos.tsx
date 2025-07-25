export default function TrustLogos() {
  const companies = [
    "Pharmacie Bergère",
    "Century 21", 
    "Supra Sécurité",
    "La Vaux Immobilier",
    "Optic 2000"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-32 h-32 bg-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Rejoignez plus de 50+ entreprises locales qui ont transformé leur croissance avec nos stratégies inbound
          </p>
        </div>

        {/* Animated logos carousel */}
        <div className="relative animate-fade-in-up delay-300">
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center">
              {companies.map((company, index) => (
                <div 
                  key={company}
                  className={`group cursor-pointer animate-fade-in-up delay-${(index + 1) * 200}`}
                >
                  {company === "Pharmacie Bergère" ? (
                    <img 
                      src="/assets/Logo Pharma MC - SBG_1753043771294.png" 
                      alt={company}
                      className="h-12 md:h-16 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110 filter brightness-75 hover:brightness-100"
                    />
                  ) : (
                    <div className="relative">
                      <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl p-6 md:p-8 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                        <div className="text-lg md:text-xl font-bold text-slate-700 text-center group-hover:text-blue-600 transition-colors duration-300">
                          {company}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Animated elements */}
          <div className="absolute -top-4 left-1/4 w-8 h-8 bg-blue-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute -bottom-4 right-1/3 w-6 h-6 bg-purple-200 rounded-full opacity-30 animate-float delay-1000"></div>
        </div>

        {/* Stats below logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up delay-700">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-sm text-slate-600">Entreprises accompagnées</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">95%</div>
            <div className="text-sm text-slate-600">Taux de satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">4</div>
            <div className="text-sm text-slate-600">Pays desservis</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">+200%</div>
            <div className="text-sm text-slate-600">Croissance moyenne</div>
          </div>
        </div>
      </div>
    </section>
  );
}