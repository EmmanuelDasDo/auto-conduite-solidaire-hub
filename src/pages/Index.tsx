
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Shield, Clock, Car, Heart, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CostSimulator from '../components/CostSimulator';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Apprends à conduire{' '}
                <span className="text-teal-600">autrement</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Accessible. Inclusif. Sécurisé.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Auto Conduite propose la location de véhicules pédagogiques à double commande 
                pour permettre à tous d'apprendre à conduire avec un proche, à coût réduit et en toute sécurité.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-200"
                >
                  Rejoindre le projet
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/service"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors duration-200"
                >
                  Découvrir le service
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/7a49f7ac-8c66-471c-aa0c-6f5ce5a513b3.png" 
                alt="Auto Conduite Logo" 
                className="w-80 h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Auto Conduite ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche innovante de l'apprentissage de la conduite, centrée sur l'accessibilité et la solidarité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessible à tous</h3>
              <p className="text-gray-600">
                Tarifs solidaires et accompagnement personnalisé pour rendre la conduite accessible à chacun.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-teal-50 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sécurité garantie</h3>
              <p className="text-gray-600">
                Véhicules à double commande et assurance complète pour apprendre en toute tranquillité.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-green-50 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible 24h/24</h3>
              <p className="text-gray-600">
                Réservation en ligne et disponibilité 24h/24 pour s'adapter à votre emploi du temps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Simulator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Découvrez nos tarifs
            </h2>
            <p className="text-xl text-gray-600">
              Des forfaits adaptés à vos besoins et votre budget
            </p>
          </div>
          <CostSimulator />
        </div>
      </section>

      {/* Impact Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Notre impact social
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Chaque kilomètre parcouru contribue à une mobilité plus inclusive
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">xxx</div>
              <div className="text-gray-700">Heures d'apprentissage offertes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">xxx</div>
              <div className="text-gray-700">Personnes accompagnées</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">xxx</div>
              <div className="text-gray-700">Véhicules disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">xxx</div>
              <div className="text-gray-700">Partenaires institutionnels</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/impact"
              className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200"
            >
              Découvrir notre impact complet
              <ChevronRight className="ml-1" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Heart className="text-white" size={48} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à rejoindre l'aventure ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Que vous soyez apprenant, partenaire ou institution, nous avons une place pour vous dans ce projet solidaire.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Commencer maintenant
            </Link>
            <Link
              to="/partenaires"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors duration-200"
            >
              Devenir partenaire
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
