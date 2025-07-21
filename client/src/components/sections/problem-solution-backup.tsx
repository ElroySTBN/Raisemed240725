import { X } from "lucide-react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/animations/HoverEffects";
import { ScrollAnimation } from "@/components/animations/ScrollAnimations";

export default function ProblemSolution() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              Vous en avez assez des méthodes d'acquisition de leads traditionnelles ?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <X className="text-red-600 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-2">Publicité intrusive et coûteuse</h3>
                  <p className="text-gray-600">Vos prospects fuient la publicité traditionnelle et vos coûts d'acquisition explosent.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <X className="text-red-600 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-2">Manque de visibilité locale</h3>
                  <p className="text-gray-600">Vos concurrents apparaissent avant vous sur Google Maps et les recherches locales.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <X className="text-red-600 w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-2">Leads non qualifiés</h3>
                  <p className="text-gray-600">Vous perdez du temps avec des prospects qui ne correspondent pas à votre expertise.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Propriétaire d'entreprise locale réfléchissant aux défis marketing" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
