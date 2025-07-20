import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold text-primary">RaiseMed.IA</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              L'agence de génération de leads qui transforme votre expertise en croissance durable grâce à l'inbound marketing et l'intelligence artificielle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Inbound Marketing</button></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO Local</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketing Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Intelligence Artificielle</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Formation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection("blog")} className="hover:text-white transition-colors">Blog</button></li>
              <li><button onClick={() => scrollToSection("cas-clients")} className="hover:text-white transition-colors">Cas clients</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Guides gratuits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Webinaires</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 RaiseMed.IA. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">CGU</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
