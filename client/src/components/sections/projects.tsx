import { ArrowRight, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      category: "Stratégie inbound",
      title: "Pharmacie Bergère",
      description: "Multiplication par 3 des rendez-vous en ligne grâce à une stratégie inbound marketing ciblée sur le référencement local.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      link: "#"
    },
    {
      category: "Génération de leads",
      title: "Century 21 Immobilier",
      description: "Augmentation de 200% des leads qualifiés grâce à un funnel d'acquisition optimisé et des contenus experts.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      link: "#"
    },
    {
      category: "SEO Local",
      title: "Cabinet Dentaire",
      description: "Positionnement en première page Google Maps avec une stratégie SEO local et de gestion de réputation en ligne.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      link: "#"
    },
    {
      category: "Marketing Automation",
      title: "Plombier-Chauffagiste",
      description: "Automatisation du parcours client et nurturing des prospects avec un ROI de 400% sur les campagnes.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      link: "#"
    },
    {
      category: "Conversion",
      title: "Agence Immobilière",
      description: "Optimisation du taux de conversion avec un nouveau site web et des formulaires de contact intelligents.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      link: "#"
    },
    {
      category: "Analytics",
      title: "Opticien Franchisé",
      description: "Mise en place d'un système de tracking avancé et d'analytics pour optimiser les performances marketing.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      link: "#"
    }
  ];

  return (
    <section id="cas-clients" className="section-spacing bg-white">
      <div className="container-beyonds">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
            Nos <span className="text-gradient-beyonds">projets</span>
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mb-8">
          <div className="animate-slide-left">
            <h3 className="text-2xl font-semibold text-black">Nos projets</h3>
          </div>
          <div className="hidden md:flex space-x-4 animate-slide-right">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group cursor-pointer animate-slide-up delay-${(index + 1) * 100}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-black">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-black group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-black font-medium hover:text-gray-600 transition-colors group/link"
                  >
                    Voir le projet
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                  </a>
                  
                  <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-12 md:hidden">
          {[...Array(3)].map((_, index) => (
            <button 
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === 0 ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up delay-700">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Prêt à développer votre <span className="text-gradient-beyonds">stratégie inbound marketing</span> ?
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Rejoignez nos clients satisfaits et transformez votre approche d'acquisition de leads 
              avec nos solutions inbound marketing sur-mesure.
            </p>
            
            <a 
              href="https://tally.so/r/wvbMdQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-beyonds"
            >
              Démarrer mon projet
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}