import ContactForm from "@/components/ui/contact-form";
import { Phone, Mail, Clock, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Appelez directement",
      value: "07 82 49 21 24",
      description: "Lun-Sam 8h-20h",
      href: "tel:0782492124",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Écrivez-nous",
      value: "support@raisemedia.fr", 
      description: "Réponse sous 2h",
      href: "mailto:support@raisemedia.fr",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat instantané",
      description: "Support 24/7",
      href: "https://wa.me/33782492124",
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Send className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-800">Prenons Contact</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-900">Parlons de votre</span>
            <br />
            <span className="text-gradient">projet ensemble</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Obtenez un audit gratuit de votre situation actuelle et découvrez comment multiplier vos leads en moins de 90 jours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <div className="space-y-8 animate-fade-in-up delay-200">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Plusieurs façons de nous contacter
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                Choisissez le canal qui vous convient le mieux. Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a 
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`card-premium group hover:scale-[1.02] transition-all duration-300 animate-fade-in-up delay-${(index + 1) * 100}`}
                >
                  <div className="p-6 flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center shadow-glow group-hover:animate-glow transition-all duration-300`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">{method.title}</h4>
                      <p className="text-slate-700 font-medium">{method.value}</p>
                      <p className="text-sm text-slate-500">{method.description}</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Send className="w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 animate-fade-in-up delay-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900">Engagement qualité</h4>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Réponse garantie sous 24h</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Audit gratuit sans engagement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Accompagnement personnalisé</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up delay-300">
            <div className="card-premium">
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Demandez votre audit gratuit
                  </h3>
                  <p className="text-slate-600">
                    Remplissez ce formulaire et recevez votre diagnostic personnalisé sous 24h
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up delay-700">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-premium">
            <h3 className="text-3xl font-bold text-white mb-4">
              Une question urgente ?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions sur nos services et vous accompagner dans votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0782492124"
                className="inline-block"
              >
                <button className="btn-premium bg-white text-blue-600 hover:bg-blue-50 group">
                  <span className="relative z-10 flex items-center">
                    <Phone className="mr-2 w-4 h-4" />
                    Appeler maintenant
                  </span>
                </button>
              </a>
              <a 
                href="https://wa.me/33782492124"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="btn-premium bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 group">
                  <span className="relative z-10 flex items-center">
                    <MessageCircle className="mr-2 w-4 h-4" />
                    WhatsApp
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}