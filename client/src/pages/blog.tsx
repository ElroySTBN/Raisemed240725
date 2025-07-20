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
        <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Blog Expert
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
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
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-dark mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                          Lire l'article
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Prêt à transformer votre marketing ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Obtenez un audit gratuit de votre stratégie actuelle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button className="bg-accent text-white px-8 py-4 text-lg hover:bg-yellow-600">
                  Obtenir un audit gratuit
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