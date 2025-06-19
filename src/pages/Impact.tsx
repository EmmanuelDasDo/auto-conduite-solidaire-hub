import React from 'react';
import { Users, Heart, Award, Target, TrendingUp, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Impact = () => {
  const impactData = [
    {
      icon: Users,
      number: "500+",
      label: "Heures d'apprentissage offertes",
      description: "Grâce à nos tarifs solidaires et partenariats"
    },
    {
      icon: Heart,
      number: "150+",
      label: "Personnes accompagnées",
      description: "Vers l'autonomie et l'insertion professionnelle"
    },
    {
      icon: Award,
      number: "75-80%",
      label: "Taux de réussite au permis",
      description: "Un accompagnement personnalisé qui porte ses fruits"
    },
    {
      icon: Target,
      number: "12",
      label: "Véhicules disponibles",
      description: "Répartis sur l'ensemble du Grand Est"
    }
  ];

  const commitments = [
    {
      title: "Solidarité",
      description: "Tarifs adaptés selon les ressources, avec possibilité de prise en charge partielle ou totale pour les publics en insertion.",
      icon: Heart
    },
    {
      title: "Inclusion",
      description: "Adaptation des véhicules et de l'accompagnement pour les personnes en situation de handicap.",
      icon: Users
    },
    {
      title: "Gouvernance partagée",
      description: "Participation active de tous les acteurs : apprenants, partenaires et équipe dans les décisions du projet.",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Notre Impact Social
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Chaque kilomètre parcouru contribue à une mobilité plus inclusive et une société plus solidaire.
          </p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos objectifs
            </h2>
            <p className="text-xl text-gray-600">
              L'impact concret de notre action sur le terrain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactData.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-teal-600 mb-2">{item.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{item.label}</div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos publics prioritaires
            </h2>
            <p className="text-xl text-gray-600">
              Un focus particulier sur l'insertion et l'inclusion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Insertion professionnelle</h3>
              <p className="text-gray-600 mb-4">
                Accompagnement des demandeurs d'emploi et bénéficiaires RSA pour lever le frein de la mobilité.
              </p>
              <div className="text-2xl font-bold text-blue-600">65%</div>
              <div className="text-sm text-gray-500">de nos apprenants</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Handicap</h3>
              <p className="text-gray-600 mb-4">
                Véhicules adaptés et accompagnement spécialisé pour les personnes en situation de handicap.
              </p>
              <div className="text-2xl font-bold text-purple-600">20%</div>
              <div className="text-sm text-gray-500">de nos apprenants</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Jeunes</h3>
              <p className="text-gray-600 mb-4">
                Tarifs préférentiels pour les moins de 25 ans et accompagnement vers l'autonomie.
              </p>
              <div className="text-2xl font-bold text-green-600">40%</div>
              <div className="text-sm text-gray-500">de nos apprenants</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos engagements éthiques
            </h2>
            <p className="text-xl text-gray-600">
              Les valeurs qui guident notre action quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {commitments.map((item, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-lg transition-shadow duration-200">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Déploiement territorial
            </h2>
            <p className="text-xl text-gray-600">
              Une présence croissante sur le Grand Est
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Strasbourg</div>
                    <div className="text-gray-600">3 véhicules - Zone pilote</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Metz</div>
                    <div className="text-gray-600">2 véhicules - Extension 2024</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Nancy</div>
                    <div className="text-gray-600">2 véhicules - Extension 2024</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Autres communes</div>
                    <div className="text-gray-600">5 véhicules - Zones rurales</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="text-teal-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Objectifs 2025</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">Extension à Reims et Colmar</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">20 véhicules en circulation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">300 apprenants accompagnés</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">15 nouveaux partenaires</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
