import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      text: "Grâce à RaiseMed.IA, notre cabinet est maintenant le premier résultat sur Google. Nos rendez-vous sont complets 3 semaines à l'avance !",
      author: "Dr. S.L.",
      role: "Chirurgien-dentiste",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      stars: 5,
      text: "En 6 mois, nous avons doublé notre chiffre d'affaires. L'inbound marketing a complètement transformé notre approche commerciale.",
      author: "M.D.",
      role: "Plombier-chauffagiste",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      stars: 5,
      text: "L'équipe RaiseMed.IA comprend vraiment les enjeux de l'immobilier local. Nos vendeurs ont maintenant des leads qualifiés tous les jours.",
      author: "A.R.",
      role: "Directrice agence immobilière",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c989e08bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section className="bg-white section-padding relative overflow-hidden">
      {/* Background subtil style Beyonds */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gray-50 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gray-100 rounded-full blur-3xl animate-float animation-delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-beyonds mb-6">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-secondary-beyonds">
            Leur succès parle pour nous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg p-8 border border-gray-100 shadow-beyonds hover-lift animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400 mb-2">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-secondary-beyonds mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-gray-100"
                />
                <div>
                  <p className="font-semibold text-primary-beyonds">{testimonial.author}</p>
                  <p className="text-muted-beyonds text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}