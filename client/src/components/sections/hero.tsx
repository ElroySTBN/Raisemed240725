import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Faites connaître votre savoir-faire à ceux qui en ont le plus besoin
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Transformez votre expertise en croissance durable. Solutions inbound marketing sur mesure pour entreprises locales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => {
                    const element = document.getElementById('pricing');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-yellow-500 text-white px-8 py-4 text-lg hover:bg-yellow-600 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
                >
                  <Rocket className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Démarrer maintenant
                </Button>
                <a href="https://tally.so/r/wvbMdQ" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button 
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-blue-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
                  >
                    <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    Obtenir un Audit GRATUIT
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="lg:text-right animate-fade-in-up animation-delay-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Équipe professionnelle en réunion stratégique" 
                  className="rounded-xl shadow-2xl w-full h-auto hover:shadow-3xl transition-all duration-500"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300 rounded-full opacity-10 animate-pulse animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,58.7C672,64,768,96,864,101.3C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
