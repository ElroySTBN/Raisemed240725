import ContactForm from "@/components/ui/contact-form";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Une question ? Un projet ? Notre équipe vous répond rapidement
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-2">Appelez-nous directement</h3>
                  <a href="tel:0782492124" className="text-gray-600 hover:text-primary">07 82 49 21 24</a>
                  <p className="text-sm text-gray-500">Lun-Sam 8h-20h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-2">Écrivez-nous</h3>
                  <a href="mailto:support@raisemedia.fr" className="text-gray-600 hover:text-primary">support@raisemedia.fr</a>
                  <p className="text-sm text-gray-500">Réponse sous 2h en moyenne</p>
                </div>
              </div>
              

            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-dark mb-6">
              Obtenez votre audit gratuit
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
