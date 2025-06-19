
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/7a49f7ac-8c66-471c-aa0c-6f5ce5a513b3.png" 
                alt="Auto Conduite Logo" 
                className="h-8 w-8"
              />
              <span className="text-lg font-bold">AUTO-CONDUITE</span>
            </div>
            <p className="text-gray-300 text-sm">
              Apprends à conduire autrement. Accessible. Inclusif. Sécurisé.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors">Accueil</Link></li>
              <li><Link to="/service" className="text-gray-300 hover:text-teal-400 transition-colors">Le Service</Link></li>
              <li><Link to="/impact" className="text-gray-300 hover:text-teal-400 transition-colors">Notre Impact</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-teal-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Partenaires</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Région Grand Est</li>
              <li>France Travail</li>
              <li>Limova</li>
              <li>Tmobility</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Mail size={16} />
                <span>contact@auto-conduite.fr</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Phone size={16} />
                <span>03 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <MapPin size={16} />
                <span>Grand Est, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Auto Conduite. Tous droits réservés. | Projet d'Économie Sociale et Solidaire
            </p>
            <div className="flex items-center space-x-4">
              <Link to="/mentions-legales" className="text-gray-300 hover:text-teal-400 transition-colors text-sm flex items-center space-x-1">
                <FileText size={14} />
                <span>Mentions légales</span>
              </Link>
              <Link to="/cgu" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                CGU
              </Link>
              <Link to="/confidentialite" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
