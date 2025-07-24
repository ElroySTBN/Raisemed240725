import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Beyonds, bien plus qu'une agence inbound marketing",
      content: "L'équipe RaiseMed.IA a transformé notre approche d'acquisition client. En 6 mois, nous avons triplé nos rendez-vous qualifiés.",
      author: "Dr. Sarah L.",
      role: "Chirurgien-dentiste",
      logo: "CNews"
    },
    {
      quote: "L'ascension de RaiseMed.IA parmi les agences marketing à Paris", 
      content: "Une approche inbound marketing révolutionnaire qui a permis à notre agence de doubler son chiffre d'affaires en une année.",
      author: "Marc D.",
      role: "Directeur d'agence immobilière",
      logo: "BFM Business"
    },
    {
      quote: "RaiseMed.IA, une agence à la conquête du marketing local",
      content: "Enfin une agence qui comprend les enjeux du commerce de proximité. Nos leads sont maintenant 100% qualifiés.",
      author: "Anne R.",
      role: "Propriétaire pharmacie",
      logo: "Le Point"
    }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container-beyonds">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
            La revue de <span className="text-gradient-beyonds">presse</span>
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mb-8">
          <div className="animate-slide-left">
            <h3 className="text-2xl font-semibold text-black">Ce qu'ils disent de nous</h3>
          </div>
          <div className="hidden md:flex space-x-4 animate-slide-right">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg className="h-4 w-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`animate-slide-up delay-${(index + 1) * 100}`}
            >
              {/* Logo/Media */}
              <div className="mb-6">
                <div className="h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600">
                    {testimonial.logo}
                  </span>
                </div>
              </div>

              {/* Quote Title */}
              <h3 className="text-lg font-semibold text-black mb-4 leading-tight">
                {testimonial.quote}
              </h3>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-medium text-black">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up delay-400">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Rejoignez nos <span className="text-gradient-beyonds">clients satisfaits</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Découvrez comment notre approche inbound marketing peut transformer 
              votre acquisition de clients et booster votre croissance.
            </p>
            
            <a 
              href="https://tally.so/r/wvbMdQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-beyonds"
            >
              Demander une démonstration
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}