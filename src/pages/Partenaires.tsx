
import React from 'react';
import { Building, Handshake, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Partenaires = () => {
  const institutionalPartners = [
    {
      name: "Région Grand Est",
      role: "Financeur principal",
      description: "Soutien financier et accompagnement stratégique pour le déploiement régional",
      logo: "🏛️"
    },
    {
      name: "France Travail",
      role: "Partenaire insertion",
      description: "Orientation des demandeurs d'emploi et prise en charge des formations",
      logo: "🏢"
    },
    {
      name: "Limova",
      role: "Partenaire technologique",
      description: "Plateforme de réservation et gestion de flotte partagée",
      logo: "🚗"
    },
    {
      name: "Tmobility",
      role: "Partenaire opérationnel",
      description: "Fourniture et maintenance des véhicules à double commande",
      logo: "🔧"
    }
  ];

  const localPartners = [
    "Missions Locales du Grand Est",
    "Centres Communaux d'Action Sociale",
    "Associations d'insertion",
    "Maisons Départementales des Personnes Handicapées",
    "Centres de Formation d'Apprentis",
    "Entreprises d'insertion",
    "Collectivités territoriales",
    "Centres sociaux"
  ];

  const testimonials = [
    {
      quote: "Auto Conduite répond à un vrai besoin de nos bénéficiaires. La mobilité est souvent le premier frein à l'emploi.",
      author: "Marie Dubois",
      role: "Conseillère France Travail",
      location: "Strasbourg"
    },
    {
      quote: "Ce partenariat nous permet d'offrir une solution concrète et immédiate aux jeunes que nous accompagnons.",
      author: "Pierre Martin",
      role: "Directeur Mission Locale",
      location: "Metz"
    },
    {
      quote: "L'approche solidaire d'Auto Conduite s'inscrit parfaitement dans nos valeurs d'inclusion et d'accessibilité.",
      author: "Sophie Lefevre",
      role: "Responsable MDPH",
      location: "Nancy"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos Partenaires
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Un écosystème solide au service de la mobilité inclusive et de l'insertion professionnelle.
          </p>
        </div>
      </section>

      {/* Institutional Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Partenaires institutionnels
            </h2>
            <p className="text-xl text-gray-600">
              Des partenaires de confiance qui soutiennent notre mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {institutionalPartners.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{partner.logo}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                    <div className="text-teal-600 font-medium mb-3">{partner.role}</div>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Structures locales partenaires
            </h2>
            <p className="text-xl text-gray-600">
              Un réseau dense d'acteurs locaux pour une couverture territoriale optimale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localPartners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-teal-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">{partner}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Témoignages de partenaires
            </h2>
            <p className="text-xl text-gray-600">
              Ils nous font confiance et témoignent de l'impact du projet
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-teal-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,17H12L12.5,15H10.5L10,17H8L10.5,9H13.5L14,17M11.25,13H12.75L12,10.75L11.25,13M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-teal-600 text-sm">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Handshake className="text-white" size={48} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Devenir partenaire
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez notre réseau de partenaires et participez à la construction d'une mobilité plus inclusive.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <Building className="mr-2" size={20} />
              Partenariat institutionnel
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors duration-200">
              <Users className="mr-2" size={20} />
              Partenariat local
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partenaires;
