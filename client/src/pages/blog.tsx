import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { Link } from "wouter";

const blogPosts = [
  {
    id: 1,
    title: "5 Stratégies d'Inbound Marketing pour les Professionnels de Santé",
    excerpt: "Découvrez comment attirer naturellement plus de patients grâce à l'inbound marketing. Des stratégies concrètes adaptées au secteur médical.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    author: "Équipe RaiseMed.IA",
    date: "15 Janvier 2025",
    readTime: "8 min de lecture",
    category: "Santé"
  },
  {
    id: 2,
    title: "Comment Optimiser Votre Fiche Google My Business en 2025",
    excerpt: "Le guide complet pour maximiser votre visibilité locale sur Google. Toutes les bonnes pratiques pour apparaître en premier dans les recherches locales.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    author: "Équipe RaiseMed.IA",
    date: "12 Janvier 2025",
    readTime: "6 min de lecture",
    category: "SEO Local"
  },
  {
    id: 3,
    title: "IA et Marketing : Révolutionner l'Acquisition de Clients",
    excerpt: "Comment l'intelligence artificielle transforme l'inbound marketing. Découvrez les outils et stratégies qui font la différence en 2025.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    author: "Équipe RaiseMed.IA",
    date: "10 Janvier 2025",
    readTime: "10 min de lecture",
    category: "Intelligence Artificielle"
  },
  {
    id: 4,
    title: "Marketing Immobilier : Les Nouveaux Leviers de Croissance",
    excerpt: "Les stratégies inbound qui fonctionnent dans l'immobilier. Comment attirer vendeurs et acquéreurs de manière authentique et durable.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    author: "Équipe RaiseMed.IA",
    date: "8 Janvier 2025",
    readTime: "7 min de lecture",
    category: "Immobilier"
  },
  {
    id: 5,
    title: "Email Marketing B2B : Stratégies qui Convertissent",
    excerpt: "Transformez vos campagnes email en machine à prospects. Techniques avancées de nurturing et personnalisation pour maximiser vos conversions.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    author: "Équipe RaiseMed.IA",
    date: "5 Janvier 2025",
    readTime: "9 min de lecture",
    category: "Email Marketing"
  },
  {
    id: 6,
    title: "Content Marketing Local : Créer du Contenu qui Convertit",
    excerpt: "Comment créer du contenu qui parle vraiment à votre audience locale. Stratégies de contenu hyperlocal pour dominer votre marché.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    author: "Équipe RaiseMed.IA",
    date: "3 Janvier 2025",
    readTime: "11 min de lecture",
    category: "Content Marketing"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float delay-700"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900">
                Blog <span className="text-gradient">Expert</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Stratégies, conseils et insights pour transformer votre marketing digital
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-premium overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 card-hover animate-fade-in-up">
                  <div className="relative">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-slate-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-500 text-sm">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      
                      <Link href={`/blog/${post.id}`}>
                        <button className="btn-premium text-sm group">
                          <span className="relative z-10 flex items-center">
                            Lire l'article
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float delay-1000"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Prêt à transformer votre marketing ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Obtenez un audit gratuit de votre stratégie actuelle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://api.whatsapp.com/send/?phone=33782492124&text=Bonjour%20je%20suis%20int%C3%A9ress%C3%A9%20par%20l%27un%20de%20vos%20services.%20Pourrais-je%20avoir%20plus%20d%27informations%20s%27il%20vous%20pla%C3%AEt%20%3F&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="btn-premium bg-white text-blue-600 hover:bg-blue-50 border border-white/20">
                  <span className="relative z-10">Obtenir un audit gratuit</span>
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}