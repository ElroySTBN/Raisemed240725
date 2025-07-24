import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="nav-beyonds">
      <div className="container-beyonds">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/assets/raisemed-logo.png" 
              alt="RaiseMed.IA" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              Nos expertises
            </button>
            <button 
              onClick={() => scrollToSection('methodologie')}
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              Méthodologie
            </button>
            <button 
              onClick={() => scrollToSection('cas-clients')}
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              Projets
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              Tarifs
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://tally.so/r/wvbMdQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-beyonds-outline"
            >
              Nous contacter
            </a>
            <a 
              href="https://tally.so/r/wvbMdQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-beyonds"
            >
              <Calendar className="h-4 w-4" />
              Prendre RDV
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container-beyonds py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
              >
                Nos expertises
              </button>
              <button 
                onClick={() => scrollToSection('methodologie')}
                className="text-left text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
              >
                Méthodologie
              </button>
              <button 
                onClick={() => scrollToSection('cas-clients')}
                className="text-left text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
              >
                Projets
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
              >
                Tarifs
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
              >
                Contact
              </button>
              <div className="pt-4 space-y-3">
                <a 
                  href="https://tally.so/r/wvbMdQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-beyonds-outline w-full justify-center"
                >
                  Nous contacter
                </a>
                <a 
                  href="https://tally.so/r/wvbMdQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-beyonds w-full justify-center"
                >
                  <Calendar className="h-4 w-4" />
                  Prendre RDV
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}