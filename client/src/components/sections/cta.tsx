import { Button } from "@/components/ui/button";
import { CalendarCheck, Phone, Gift, Shield } from "lucide-react";

export default function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Prêt à transformer votre entreprise ?
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Obtenez votre audit gratuit et découvrez comment l'inbound marketing peut multiplier vos leads qualifiés
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="flex items-center justify-center space-x-3">
            <Gift className="w-6 h-6 text-accent" />
            <span className="font-semibold">Audit gratuit de 45min</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Phone className="w-6 h-6 text-accent" />
            <span className="font-semibold">Réponse sous 24h</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Shield className="w-6 h-6 text-accent" />
            <span className="font-semibold">Sans engagement</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://tally.so/r/wvbMdQ" target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent text-white px-8 py-4 text-lg hover:bg-yellow-600">
              <CalendarCheck className="mr-2 h-5 w-5" />
              Réserver mon audit gratuit
            </Button>
          </a>
          <a href="tel:0782492124">
            <Button 
              variant="outline"
              className="border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-primary"
            >
              <Phone className="mr-2 h-5 w-5" />
              Appelez-nous : 07 82 49 21 24
            </Button>
          </a>
        </div>

        <p className="text-sm text-blue-200 mt-6 flex items-center justify-center">
          <Shield className="mr-1 w-4 h-4" />
          Vos données sont protégées et ne seront jamais partagées
        </p>
      </div>
    </section>
  );
}
