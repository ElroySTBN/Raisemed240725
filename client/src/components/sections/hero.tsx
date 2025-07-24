import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float delay-700"></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float delay-300"></div>
      </div>
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-premium animate-fade-in-up">
                <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-700">Marketing Intelligence propulsé par l'IA</span>
              </div>

              {/* Main heading */}
              <div className="space-y-4 animate-fade-in-up delay-200">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-slate-900">Rendez votre</span>
                  <br />
                  <span className="text-gradient">savoir-faire</span>
                  <br />
                  <span className="text-slate-900">accessible à ceux qui en ont le plus besoin !</span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                  Solutions inbound marketing sur mesure pour entreprises locales. 
                  Générez des leads qualifiés grace a nos stratégies data driven.
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 py-4 animate-fade-in-up delay-300">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">+500k€</p>
                    <p className="text-sm text-slate-600">générés pour nos clients</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">4 pays</p>
                    <p className="text-sm text-slate-600">desservis</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">95%</p>
                    <p className="text-sm text-slate-600">clients satisfaits</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
                <a 
                  href="https://api.whatsapp.com/send/?phone=33782492124&text=Bonjour%20je%20suis%20int%C3%A9ress%C3%A9%20par%20l%27un%20de%20vos%20services.%20Pourrais-je%20avoir%20plus%20d%27informations%20s%27il%20vous%20pla%C3%AEt%20%3F&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="btn-premium group">
                    <span className="relative z-10 flex items-center">
                      Démarrer maintenant
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </a>

                <a 
                  href="https://tally.so/r/wvbMdQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="btn-premium bg-white/90 backdrop-blur-sm text-slate-700 border border-slate-200 hover:bg-white hover:shadow-lg group">
                    <span className="relative z-10 flex items-center">
                      <Play className="mr-2 w-4 h-4" />
                      Audit Gratuit
                    </span>
                  </button>
                </a>
              </div>


            </div>

            {/* Right column - Visual */}
            <div className="relative lg:pl-8 animate-fade-in-up delay-300">
              <div className="relative">
                {/* Main image container */}
                <div className="relative z-10 bg-white rounded-3xl shadow-premium p-8 card-premium">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                      alt="Équipe marketing digitale travaillant sur des stratégies inbound" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Floating stats cards */}
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-glow p-4 animate-float delay-500">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-slate-700">Leads en temps réel</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600 mt-1">+50</p>
                  </div>

                  <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-glow p-4 animate-float delay-1000">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-slate-700">Conversion</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 mt-1">87%</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,96C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}