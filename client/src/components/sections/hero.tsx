import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-primary-beyonds text-white min-h-screen flex items-center overflow-hidden">
      {/* Background subtil style Beyonds */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/3 rounded-full blur-3xl animate-float animation-delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight">
              <span className="block">Transformez votre</span>
              <span className="block">expertise en</span>
              <span className="block text-gray-300">croissance durable</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Solutions inbound marketing sur mesure pour entreprises locales.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => {
                  const element = document.getElementById('pricing');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-beyonds bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 hover-lift group min-w-[200px]"
              >
                <Rocket className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Démarrer maintenant
              </Button>
              <a 
                href="https://tally.so/r/wvbMdQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block"
              >
                <Button 
                  variant="outline"
                  className="btn-beyonds border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black hover-lift group min-w-[220px]"
                >
                  <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Obtenir un Audit GRATUIT
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        {/* Stats en bas - style Beyonds */}
        <div className="mt-20 animate-fade-in-up animation-delay-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover-lift">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">+500k€</div>
              <p className="text-gray-400 text-sm">Générés pour nos clients</p>
            </div>
            <div className="hover-lift">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">↓60%</div>
              <p className="text-gray-400 text-sm">Coût par lead</p>
            </div>
            <div className="hover-lift">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">4</div>
              <p className="text-gray-400 text-sm">Pays desservis</p>
            </div>
            <div className="hover-lift">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">50+</div>
              <p className="text-gray-400 text-sm">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}