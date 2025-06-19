import React from 'react';
import { Clock, Shield, Car, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CostSimulator from '../components/CostSimulator';

const Service = () => {
  const userJourney = [
    {
      step: 1,
      title: "Inscription",
      description: "Créez votre compte et choisissez votre forfait",
      icon: Users
    },
    {
      step: 2,
      title: "Réservation",
      description: "Réservez votre créneau 24h/24 via notre plateforme",
      icon: Clock
    },
    {
      step: 3,
      title: "Conduite",
      description: "Récupérez le véhicule et apprenez avec votre accompagnant",
      icon: Car
    },
    {
      step: 4,
      title: "Suivi",
      description: "Suivez vos progrès grâce à notre carnet de bord numérique",
      icon: CheckCircle
    }
  ];

  const packages = [
    {
      title: "Forfait Découverte",
      hours: "5h",
      price: "170€",
      features: [
        "5 heures de conduite",
        "Véhicule à double commande",
        "Assurance tous risques",
        "Carnet de bord numérique"
      ],
      popular: false
    },
    {
      title: "Forfait Progression",
      hours: "10h",
      price: "320€",
      features: [
        "10 heures de conduite",
        "Véhicule à double commande",
        "Assurance tous risques",
        "Carnet de bord numérique",
        "Bilan intermédiaire"
      ],
      popular: true
    },
    {
      title: "Forfait Complet",
      hours: "20h",
      price: "568€",
      features: [
        "20 heures de conduite",
        "Véhicule à double commande",
        "Assurance tous risques",
        "Carnet de bord numérique",
        "Bilans réguliers"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Le Service Auto Conduite
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Une solution complète pour apprendre à conduire avec un proche, en toute sécurité et à votre rythme.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600">
              Un parcours simple et sécurisé en 4 étapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {userJourney.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-white" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                  {index < userJourney.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-300" style={{ transform: 'translateX(50%)' }}></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fonctionnement détaillé
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Location 24h/24</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-teal-600 mt-1" size={20} />
                  <p className="text-gray-700">Réservation en ligne simple et rapide</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-teal-600 mt-1" size={20} />
                  <p className="text-gray-700">Accès aux véhicules 24h/24, 7j/7</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-teal-600 mt-1" size={20} />
                  <p className="text-gray-700">Récupération autonome avec code d'accès</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-teal-600 mt-1" size={20} />
                  <p className="text-gray-700">Véhicules équipés de double commande</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Assurance & Accompagnement</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="text-blue-600 mt-1" size={20} />
                  <p className="text-gray-700">Assurance tous risques incluse</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="text-blue-600 mt-1" size={20} />
                  <p className="text-gray-700">Support téléphonique 7j/7</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="text-blue-600 mt-1" size={20} />
                  <p className="text-gray-700">Carnet de bord numérique</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="text-blue-600 mt-1" size={20} />
                  <p className="text-gray-700">Bilans de progression réguliers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos forfaits
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le forfait qui correspond à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative rounded-xl p-8 ${pkg.popular ? 'bg-teal-50 border-2 border-teal-600' : 'bg-white border border-gray-200'} shadow-lg`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Le plus populaire
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.title}</h3>
                  <div className="text-4xl font-bold text-teal-600 mb-1">{pkg.price}</div>
                  <div className="text-gray-600">{pkg.hours} de conduite</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="text-teal-600" size={16} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  pkg.popular 
                    ? 'bg-teal-600 text-white hover:bg-teal-700' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Choisir ce forfait
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Simulator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CostSimulator />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Service;
