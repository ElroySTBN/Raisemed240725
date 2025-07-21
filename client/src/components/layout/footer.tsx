

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
            <p className="text-gray-600 mb-6 max-w-md">
              L'agence de génération de leads qui transforme votre expertise en croissance durable grâce à l'inbound marketing et l'intelligence artificielle.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/raisemed.ia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li><button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors">Inbound Marketing</button></li>
              <li><a href="#" className="hover:text-primary transition-colors">SEO Local</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Marketing Automation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Intelligence Artificielle</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Formation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/cas-clients" className="hover:text-primary transition-colors">Cas clients</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Guides gratuits</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Webinaires</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Centre d'aide</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 RaiseMed.IA. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">CGU</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
