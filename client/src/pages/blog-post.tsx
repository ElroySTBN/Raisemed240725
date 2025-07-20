import { useRoute } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Link } from "wouter";

const blogPosts = {
  1: {
    title: "5 Stratégies d'Inbound Marketing pour les Professionnels de Santé",
    content: `
L'inbound marketing révolutionne la façon dont les professionnels de santé attirent et fidélisent leurs patients. Contrairement aux méthodes traditionnelles, cette approche mise sur la création de valeur pour attirer naturellement les patients qui ont besoin de vos services.

## Pourquoi l'inbound marketing est-il crucial pour les professionnels de santé ?

Dans un secteur où la confiance est primordiale, l'inbound marketing vous permet de démontrer votre expertise et de créer un lien de confiance avant même la première consultation. Les patients d'aujourd'hui recherchent activement des informations sur leur santé en ligne – autant être là pour les accompagner.

## 1. Créez du contenu éducatif de qualité

### Identifiez les questions récurrentes de vos patients

Transformez les questions que vous entendez quotidiennement en contenu utile :
- Articles sur les symptômes et leurs significations
- Guides de prévention adaptés à votre spécialité
- Explications des procédures médicales
- Conseils d'hygiène de vie

### Respectez la déontologie médicale

Votre contenu doit être informatif sans remplacer une consultation. Incluez toujours des mentions rappelant l'importance du diagnostic médical professionnel.

## 2. Optimisez votre présence locale

### Google My Business : votre vitrine numérique

- Complétez intégralement votre fiche
- Ajoutez des photos de votre cabinet
- Récoltez et répondez aux avis patients
- Publiez régulièrement des actualités

### SEO local spécialisé santé

- Utilisez des mots-clés géolocalisés ("cardiologue Lyon", "dentiste urgence Marseille")
- Créez des pages dédiées à chaque service
- Optimisez pour les recherches vocales ("médecin près de moi")

## 3. Développez l'email marketing médical

### Newsletter d'information santé

Envoyez mensuellement :
- Conseils de prévention saisonniers
- Rappels de dépistages importants
- Actualités médicales vulgarisées
- Témoignages patients (anonymisés)

### Automatisation des rappels

Configurez des emails automatiques pour :
- Les rappels de rendez-vous
- Les suivis post-consultation
- Les campagnes de prévention ciblées

## 4. Utilisez les réseaux sociaux professionnels

### LinkedIn pour le networking professionnel

- Partagez votre expertise
- Participez aux discussions sectorielles
- Créez du contenu B2B (relations avec confrères, laboratoires)

### Facebook/Instagram pour l'éducation patient

- Posts éducatifs avec visuels attrayants
- Stories "Dans les coulisses" du cabinet
- Live Q&A sur des sujets de santé publique

## 5. Implémentez le marketing d'automation

### Parcours patient personnalisé

Créez des séquences automatisées selon :
- Le type de consultation
- L'âge du patient
- Les pathologies suivies
- Les traitements en cours

### Lead scoring médical

Identifiez les patients les plus engagés grâce à :
- Ouverture des emails
- Téléchargement de guides santé
- Interaction avec le contenu
- Prise de rendez-vous en ligne

## Mesurer l'efficacité de votre stratégie inbound

### KPIs essentiels pour les professionnels de santé

- Taux de prise de rendez-vous en ligne
- Origine des nouveaux patients
- Taux d'engagement sur le contenu
- Avis patients et leur évolution
- ROI des campagnes digitales

### Outils de mesure recommandés

- Google Analytics pour le trafic web
- Google My Business Insights pour la visibilité locale
- Plateformes d'email marketing pour l'engagement
- Logiciel de gestion patient pour le suivi conversions

## Conclusion

L'inbound marketing dans le secteur médical demande une approche spécialisée qui respecte les contraintes déontologiques tout en maximisant l'impact. En mettant le patient au centre de votre stratégie et en créant de la valeur à chaque interaction, vous construisez une relation de confiance durable.

**Prêt à transformer votre approche marketing ?** Notre équipe spécialisée dans le secteur médical peut vous accompagner dans la mise en place d'une stratégie inbound sur mesure.
    `,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    author: "Équipe RaiseMed.IA",
    date: "15 Janvier 2025",
    readTime: "8 min de lecture",
    category: "Santé"
  },
  2: {
    title: "Comment Optimiser Votre Fiche Google My Business en 2025",
    content: `
Google My Business (GMB) est devenu l'outil incontournable pour toute entreprise locale. En 2025, les règles du jeu ont évolué, et une optimisation stratégique peut transformer votre visibilité locale du tout au tout.

## L'importance cruciale de GMB en 2025

Avec plus de 5 milliards de recherches quotidiennes sur Google, dont 46% à caractère local, votre fiche GMB est souvent le premier point de contact avec vos prospects. Une fiche bien optimisée peut augmenter vos appels de 70% et vos visites en magasin de 35%.

## Étape 1 : Vérification et réclamation de votre fiche

### Processus de vérification avancé

La vérification par carte postale reste standard, mais Google propose maintenant :
- Vérification par téléphone pour certaines catégories
- Vérification par email pour les entreprises éligibles
- Vérification instantanée via Google Search Console

### Éviter les pièges courants

- Une seule fiche par établissement physique
- Adresse exacte (pas de boîte postale)
- Catégorie principale précise et pertinente
- Heures d'ouverture rigoureusement exactes

## Étape 2 : Optimisation du profil de base

### Nom de l'entreprise

Utilisez votre nom commercial exact. Évitez :
- L'ajout de mots-clés dans le nom
- Les descriptifs dans le titre
- Les caractères spéciaux non autorisés

### Description optimisée

Vos 750 caractères doivent inclure :
- Vos services principaux
- Votre zone de chalandise
- Vos différenciateurs uniques
- Un appel à l'action clair

### Catégories stratégiques

- 1 catégorie principale ultra-précise
- Jusqu'à 9 catégories secondaires complémentaires
- Évitez la sur-catégorisation
- Utilisez les catégories les plus spécifiques possibles

## Étape 3 : Gestion avancée des avis clients

### Stratégie de collecte d'avis

**Timing optimal :**
- Juste après une expérience positive
- Via email de suivi automatisé
- Avec un lien direct vers votre fiche GMB

**Techniques de sollicitation :**
- QR codes sur les reçus
- SMS de suivi personnalisés
- Rappels lors des interactions client

### Réponses aux avis : l'art de la gestion

**Pour les avis positifs :**
- Remerciez personnellement
- Mentionnez des détails spécifiques
- Invitez à revenir ou recommander

**Pour les avis négatifs :**
- Répondez rapidement (moins de 24h)
- Restez professionnel et empathique
- Proposez une solution concrète
- Invitez à poursuivre en privé

## Étape 4 : Le contenu qui fait la différence

### Posts Google My Business

Publiez 2-3 fois par semaine :
- Actualités de l'entreprise
- Promotions et événements
- Contenu éducatif relatif à votre secteur
- Témoignages clients

### Types de posts optimisés

**Posts "Événement" :**
- Portes ouvertes
- Lancements de produits
- Formations clients
- Webinaires

**Posts "Offre" :**
- Promotions limitées
- Codes de réduction
- Packages spéciaux
- Consultations gratuites

### Photos et vidéos stratégiques

**Photos essentielles :**
- Façade et intérieur de qualité professionnelle
- Équipe au travail
- Produits/services en situation
- Clients satisfaits (avec accord)

**Optimisation technique :**
- Format 4:3 ou 16:9
- Résolution minimale 720p
- Noms de fichiers descriptifs
- Balises alt pour l'accessibilité

## Étape 5 : Fonctionnalités avancées 2025

### Google Posts enrichis

Utilisez les nouvelles fonctionnalités :
- Boutons d'action personnalisés
- Liens vers des pages spécifiques
- Intégration avec Google Ads
- Suivi des performances détaillé

### Questions-Réponses proactives

**Anticipez les questions clients :**
- Horaires spéciaux
- Modalités de paiement
- Conditions de service
- Politiques de retour/annulation

### Messagerie instantanée

Activez la messagerie pour :
- Réponses rapides aux demandes
- Prise de rendez-vous simplifiée
- Support client en temps réel
- Génération de leads qualifiés

## Étape 6 : Analyse et optimisation continue

### Métriques clés à surveiller

**Visibilité :**
- Impressions dans les recherches
- Clics vers votre site web
- Demandes d'itinéraire
- Appels téléphoniques

**Engagement :**
- Taux de conversion des impressions
- Temps passé sur la fiche
- Interaction avec les posts
- Téléchargements de photos

### Outils d'analyse recommandés

- Google My Business Insights (natif)
- BirdEye pour la gestion d'avis
- Moz Local pour le suivi de présence
- SEMrush pour l'analyse concurrentielle

## Erreurs à éviter absolument

### Violations courantes des guidelines

- Fausses informations de contact
- Avis factices ou achetés
- Mots-clés dans le nom d'entreprise
- Catégories non pertinentes
- Photos trompeuses ou de mauvaise qualité

### Conséquences des violations

Google peut :
- Suspendre temporairement votre fiche
- Supprimer définitivement votre profil
- Réduire votre visibilité dans les résultats
- Appliquer des pénalités durables

## Plan d'action pour 2025

### Semaine 1 : Audit complet
- Vérification de toutes les informations
- Analyse de la concurrence locale
- Identification des opportunités d'amélioration

### Semaine 2-3 : Optimisation de base
- Mise à jour des informations
- Ajout de toutes les catégories pertinentes
- Upload des photos professionnelles

### Semaine 4 et + : Stratégie de contenu
- Planning de publication régulière
- Système de collecte d'avis
- Monitoring des performances

## Conclusion

Une fiche Google My Business optimisée est un levier de croissance puissant et gratuit. En 2025, les entreprises qui maîtrisent parfaitement cet outil prennent une avance considérable sur leur concurrence locale.

L'optimisation GMB demande de la constance et une veille continue des évolutions de l'algorithme Google. Mais les résultats en valent largement l'investissement : visibilité accrue, leads qualifiés et croissance durable de votre activité locale.
    `,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    author: "Équipe RaiseMed.IA",
    date: "12 Janvier 2025",
    readTime: "6 min de lecture",
    category: "SEO Local"
  }
  // Ajouter plus d'articles selon les besoins
};

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:id");
  const postId = params?.id ? parseInt(params.id) : null;
  const post = postId ? blogPosts[postId as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-dark mb-4">Article non trouvé</h1>
            <p className="text-gray-600 mb-8">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au blog
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
        {/* Hero Article */}
        <section className="relative">
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <div className="text-white">
                <Link href="/blog">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dark mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour au blog
                  </Button>
                </Link>
                <div className="mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center text-blue-100 space-x-6">
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Partager
                </Button>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold text-dark mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold text-dark mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index} className="font-bold text-dark mt-4 mb-2">{paragraph.replace(/\*\*/g, '')}</p>;
                } else if (paragraph.startsWith('- ')) {
                  return <li key={index} className="ml-4 mb-1">{paragraph.replace('- ', '')}</li>;
                } else if (paragraph.trim() !== '') {
                  return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>;
                }
                return null;
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Besoin d'aide pour implémenter ces stratégies ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Notre équipe d'experts peut vous accompagner dans la mise en place de votre stratégie inbound marketing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button className="bg-accent text-white px-8 py-4 text-lg hover:bg-yellow-600">
                  Obtenir un audit gratuit
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-primary">
                  Voir d'autres articles
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