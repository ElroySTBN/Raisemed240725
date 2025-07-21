import { useRoute } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Users, DollarSign, Calendar, MapPin } from "lucide-react";
import { Link } from "wouter";

const caseStudies = {
  1: {
    title: "Cabinet Médical - Transformation Digitale Réussie",
    subtitle: "Médecine générale • Région Rhône-Alpes",
    category: "Santé",
    duration: "6 mois",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    challenge: "Ce cabinet médical dépendait uniquement du bouche-à-oreille pour attirer de nouveaux patients. Sa visibilité en ligne était quasi inexistante et le praticien peinait à faire connaître ses spécialités (médecine du sport et nutrition).",
    solution: [
      "Optimisation complète de sa fiche Google My Business",
      "Création d'un blog médical avec contenu SEO optimisé",
      "Campagnes d'email marketing pour fidéliser les patients",
      "Système de prise de rendez-vous en ligne automatisé"
    ],
    results: {
      metric1: { value: "+420%", label: "Nouveaux patients en 6 mois", color: "primary" },
      metric2: { value: "+250%", label: "Visibilité sur Google", color: "secondary" },
      metric3: { value: "-60%", label: "Coût d'acquisition par patient", color: "accent" }
    },
    testimonial: {
      quote: "Avant RaiseMed.IA, je dépendais uniquement du bouche-à-oreille. Aujourd'hui, je suis visible sur Google et j'attire des patients qui cherchent vraiment mes spécialités. Mon agenda est complet 3 semaines à l'avance !",
      author: "Dr. M.D., Médecin généraliste"
    },
    timeline: [
      { month: "Mois 1", action: "Audit complet et optimisation GMB" },
      { month: "Mois 2", action: "Lancement du blog et création de contenu" },
      { month: "Mois 3", action: "Mise en place de l'email marketing" },
      { month: "Mois 4", action: "Système de prise de RDV en ligne" },
      { month: "Mois 5-6", action: "Optimisation continue et analyse des résultats" }
    ]
  },
  2: {
    title: "Agence Immobilière - Leadership Local Conquis",
    subtitle: "Immobilier résidentiel • Région PACA",
    category: "Immobilier",
    duration: "8 mois",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    challenge: "Cette agence immobilière faisait face à une concurrence féroce dans sa région. Leurs mandats étaient irréguliers et ils avaient du mal à se différencier des grandes enseignes nationales.",
    solution: [
      "Stratégie de contenu hyper-local (quartiers, écoles, transports)",
      "Automatisation du nurturing pour vendeurs et acquéreurs",
      "Landing pages dédiées par type de bien",
      "Système de lead scoring pour prioriser les prospects"
    ],
    results: {
      metric1: { value: "+180%", label: "Mandats signés", color: "primary" },
      metric2: { value: "+350%", label: "Leads qualifiés", color: "secondary" },
      metric3: { value: "15 jours", label: "Délai moyen de vente", color: "accent" }
    },
    testimonial: {
      quote: "L'inbound marketing nous a permis de nous positionner comme experts du marché local. Nos clients nous trouvent naturellement quand ils sont prêts à vendre, et notre taux de transformation a explosé.",
      author: "J.-P. M., Directeur Agence"
    },
    timeline: [
      { month: "Mois 1-2", action: "Analyse du marché local et création de personas" },
      { month: "Mois 3", action: "Développement de contenu hyper-local" },
      { month: "Mois 4-5", action: "Mise en place des landing pages et nurturing" },
      { month: "Mois 6", action: "Implémentation du lead scoring" },
      { month: "Mois 7-8", action: "Optimisation des conversions et scale-up" }
    ]
  },
  3: {
    title: "Magasin d'Optique - Fidélisation Client Maximisée",
    subtitle: "Optique • Région Nouvelle-Aquitaine",
    category: "Commerce Local",
    duration: "5 mois",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    challenge: "Face à la concurrence des opticiens en ligne, ce magasin d'optique devait valoriser ses services personnalisés et attirer une clientèle locale fidèle.",
    solution: [
      "Content marketing sur la santé visuelle",
      "Campagnes de rappels pour renouvellement de lunettes",
      "Partenariats avec cabinets d'ophtalmologie locaux",
      "Programme de fidélité digitalisé"
    ],
    results: {
      metric1: { value: "+200%", label: "Nouveaux clients", color: "primary" },
      metric2: { value: "85%", label: "Taux de fidélisation", color: "purple-600" },
      metric3: { value: "+45%", label: "Chiffre d'affaires", color: "accent" }
    },
    testimonial: {
      quote: "Grâce à RaiseMed.IA, nous avons réussi à créer une vraie relation de proximité avec nos clients. Ils reviennent non seulement pour leurs lunettes, mais aussi pour nos conseils personnalisés.",
      author: "S.M., Directrice magasin"
    },
    timeline: [
      { month: "Mois 1", action: "Audit de la concurrence et positionnement" },
      { month: "Mois 2", action: "Création de contenu santé visuelle" },
      { month: "Mois 3", action: "Partenariats avec ophtalmologistes locaux" },
      { month: "Mois 4", action: "Lancement du programme de fidélité" },
      { month: "Mois 5", action: "Optimisation et campagnes de réactivation" }
    ]
  }
};

export default function CaseStudyDetail() {
  const [match, params] = useRoute("/cas-clients/:id");
  const caseId = params?.id ? parseInt(params.id) : null;
  const caseStudy = caseId ? caseStudies[caseId as keyof typeof caseStudies] : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-dark mb-4">Cas client non trouvé</h1>
            <p className="text-gray-600 mb-8">Le cas client que vous recherchez n'existe pas.</p>
            <Link href="/cas-clients">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux cas clients
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative">
          <img 
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
              <div className="text-white">
                <Link href="/cas-clients">
                  <Button className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-dark mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour aux cas clients
                  </Button>
                </Link>
                <div className="mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {caseStudy.category}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {caseStudy.title}
                </h1>
                <p className="text-xl text-blue-100 mb-6">
                  {caseStudy.subtitle}
                </p>
                <div className="flex items-center text-blue-100 space-x-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>Durée: {caseStudy.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>France</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Challenge */}
              <div>
                <h2 className="text-3xl font-bold text-dark mb-6">Le Défi</h2>
                <div className="bg-red-50 rounded-2xl p-8">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl font-bold text-dark mb-6">Notre Solution</h2>
                <div className="bg-green-50 rounded-2xl p-8">
                  <ul className="space-y-4">
                    {caseStudy.solution.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark mb-4">Résultats Obtenus</h2>
              <p className="text-xl text-gray-600">Des chiffres qui parlent d'eux-mêmes</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`bg-white rounded-xl p-8 shadow-lg text-center border-l-4 border-${caseStudy.results.metric1.color}`}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <div className={`text-4xl font-bold text-${caseStudy.results.metric1.color} mb-2`}>
                  {caseStudy.results.metric1.value}
                </div>
                <div className="text-gray-600">{caseStudy.results.metric1.label}</div>
              </div>
              
              <div className={`bg-white rounded-xl p-8 shadow-lg text-center border-l-4 border-${caseStudy.results.metric2.color}`}>
                <div className={`w-16 h-16 bg-${caseStudy.results.metric2.color} text-white rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className={`text-4xl font-bold text-${caseStudy.results.metric2.color} mb-2`}>
                  {caseStudy.results.metric2.value}
                </div>
                <div className="text-gray-600">{caseStudy.results.metric2.label}</div>
              </div>
              
              <div className={`bg-white rounded-xl p-8 shadow-lg text-center border-l-4 border-${caseStudy.results.metric3.color}`}>
                <div className={`w-16 h-16 bg-${caseStudy.results.metric3.color} text-white rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <DollarSign className="w-8 h-8" />
                </div>
                <div className={`text-4xl font-bold text-${caseStudy.results.metric3.color} mb-2`}>
                  {caseStudy.results.metric3.value}
                </div>
                <div className="text-gray-600">{caseStudy.results.metric3.label}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark mb-4">Déroulement du Projet</h2>
              <p className="text-xl text-gray-600">Une approche méthodique et progressive</p>
            </div>
            
            <div className="space-y-8">
              {caseStudy.timeline.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mr-6 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md flex-grow">
                    <h3 className="text-lg font-bold text-dark mb-2">{step.month}</h3>
                    <p className="text-gray-700">{step.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <div className="text-6xl text-primary mb-6">"</div>
              <blockquote className="text-2xl text-gray-800 italic mb-8 leading-relaxed">
                {caseStudy.testimonial.quote}
              </blockquote>
              <div className="text-lg font-semibold text-dark">
                {caseStudy.testimonial.author}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Prêt à obtenir des résultats similaires ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Découvrez comment nous pouvons transformer votre croissance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://tally.so/r/wvbMdQ" target="_blank" rel="noopener noreferrer">
                <Button className="bg-accent text-white px-8 py-4 text-lg hover:bg-yellow-600">
                  Obtenir un audit gratuit
                </Button>
              </a>
              <Link href="/cas-clients">
                <Button className="bg-white/20 backdrop-blur-sm border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-primary">
                  Voir d'autres cas clients
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}