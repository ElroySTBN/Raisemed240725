import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

import Raisemed_IA_10 from "@assets/Raisemed.IA_10.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: 'Services', action: () => scrollToSection("services") },
    { label: 'Tarification', action: () => scrollToSection("pricing") },
    { label: 'Méthodologie', action: () => scrollToSection("methodologie") },
    { label: 'Cas Clients', href: '/cas-clients' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', action: () => scrollToSection("contact") }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-premium border-b border-slate-200/50' 
          : 'bg-white/95 backdrop-blur-lg shadow-premium border-b border-slate-200/50'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-3 group"
            >
              <img 
                src={Raisemed_IA_10} 
                alt="RaiseMed.IA" 
                className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-slate-100 text-slate-700 hover:text-blue-600 animate-fade-in-up delay-${index * 100}`}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-slate-100 text-slate-700 hover:text-blue-600 animate-fade-in-up delay-${index * 100}`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://tally.so/r/wvbMdQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="animate-fade-in-up delay-700"
            >
              <button className="btn-premium focus-premium">
                <span className="relative z-10">Audit Gratuit</span>
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hover:bg-slate-100 ${
                isScrolled ? 'text-slate-700' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-slate-200/50 shadow-premium animate-fade-in-scale">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-300 animate-slide-in-left delay-${index * 100}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className={`block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-300 animate-slide-in-left delay-${index * 100}`}
                  >
                    {item.label}
                  </button>
                )
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-200">
                <a 
                  href="https://tally.so/r/wvbMdQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block animate-slide-in-left delay-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <button className="btn-premium w-full">
                    <span className="relative z-10">Audit Gratuit</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}