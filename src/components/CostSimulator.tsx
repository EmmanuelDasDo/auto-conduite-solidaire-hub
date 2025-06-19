
import React, { useState } from 'react';
import { Calculator, Car } from 'lucide-react';

const CostSimulator = () => {
  const [selectedPackage, setSelectedPackage] = useState('5h');
  
  const packages = {
    '5h': { hours: 5, price: 170, description: 'Parfait pour débuter' },
    '10h': { hours: 10, price: 320, description: 'Idéal pour progresser' },
    '20h': { hours: 20, price: 568, description: 'Formation complète' }
  };

  const selectedPkg = packages[selectedPackage as keyof typeof packages];
  const pricePerHour = selectedPkg.price / selectedPkg.hours;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center space-x-2 mb-4">
        <Calculator className="text-teal-600" size={24} />
        <h3 className="text-xl font-semibold text-gray-800">Simulateur de coût</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Choisissez votre forfait :
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {Object.entries(packages).map(([key, pkg]) => (
              <button
                key={key}
                onClick={() => setSelectedPackage(key)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  selectedPackage === key
                    ? 'border-teal-600 bg-teal-50 text-teal-700'
                    : 'border-gray-200 hover:border-teal-300'
                }`}
              >
                <div className="text-center">
                  <div className="font-semibold">{pkg.hours}h</div>
                  <div className="text-sm text-gray-600">{pkg.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-teal-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700">Forfait {selectedPkg.hours}h :</span>
            <span className="text-2xl font-bold text-teal-600">{selectedPkg.price}€</span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Soit {pricePerHour.toFixed(0)}€/heure</span>
            <div className="flex items-center space-x-1">
              <Car size={16} />
              <span>Assurance incluse</span>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-500">
          Tarifs solidaires disponibles selon votre situation. Contactez-nous pour en savoir plus.
        </div>
      </div>
    </div>
  );
};

export default CostSimulator;
