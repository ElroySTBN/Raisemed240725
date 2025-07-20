import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">RaiseMed.IA</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection("methodologie")}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Méthodologie
                </button>
                <a 
                  href="/cas-clients"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Cas Clients
                </a>
                <button 
                  onClick={() => scrollToSection("blog")}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Blog
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white hover:bg-blue-700"
            >
              Audit Gratuit
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("methodologie")}
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors w-full text-left"
              >
                Méthodologie
              </button>
              <a 
                href="/cas-clients"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors w-full text-left"
              >
                Cas Clients
              </a>
              <button 
                onClick={() => scrollToSection("blog")}
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors w-full text-left"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-primary text-white hover:bg-blue-700"
                >
                  Audit Gratuit
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
