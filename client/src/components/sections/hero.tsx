import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Faites connaître votre savoir-faire à ceux qui en ont le plus besoin
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Transformez votre expertise en croissance durable. Solutions inbound marketing sur mesure pour entreprises locales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-accent text-white px-8 py-4 text-lg hover:bg-yellow-600"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Démarrer maintenant
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-primary bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Obtenir un Audit GRATUIT
              </Button>
            </div>
          </div>
          <div className="lg:text-right">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Équipe professionnelle en réunion stratégique" 
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
