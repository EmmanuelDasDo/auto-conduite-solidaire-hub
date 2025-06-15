
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, Scale } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqData = [
    {
      question: "Auto Conduite est-il une auto-école ?",
      answer: "Non, Auto Conduite n'est pas une auto-école. Nous proposons un service de location de véhicules pédagogiques à double commande pour permettre l'apprentissage accompagné. Nous sommes un projet d'économie sociale et solidaire qui facilite l'accès à la mobilité."
    },
    {
      question: "La location de véhicules à double commande est-elle légale ?",
      answer: "Oui, la location de véhicules à double commande est parfaitement légale. Elle s'inscrit dans le cadre de l'apprentissage accompagné de la conduite (AAC) ou de la conduite supervisée, prévus par le Code de la route."
    },
    {
      question: "Qui peut m'accompagner pendant l'apprentissage ?",
      answer: "Votre accompagnant doit être titulaire du permis B depuis au moins 5 ans sans interruption, âgé de 28 ans minimum, et avoir l'accord de son assureur. Il peut s'agir d'un proche, d'un parent, d'un ami ou d'un bénévole."
    },
    {
      question: "Faut-il avoir déjà le code de la route ?",
      answer: "Oui, vous devez avoir obtenu l'épreuve théorique générale (code de la route) pour pouvoir utiliser nos véhicules. C'est une obligation légale pour la conduite accompagnée."
    },
    {
      question: "L'assurance est-elle incluse ?",
      answer: "Oui, nos véhicules sont assurés tous risques. L'assurance couvre le conducteur apprenant et l'accompagnant pendant toute la durée de la location."
    },
    {
      question: "Puis-je réserver un véhicule à tout moment ?",
      answer: "Oui, notre service de réservation est disponible 24h/24 via notre plateforme en ligne. Les véhicules peuvent être récupérés de manière autonome grâce à un système de codes d'accès."
    },
    {
      question: "Que se passe-t-il en cas de problème technique ?",
      answer: "Une assistance technique est disponible 7j/7. En cas de panne ou de problème, contactez immédiatement notre service d'assistance qui vous orientera vers la solution la plus rapide."
    },
    {
      question: "Peut-on bénéficier d'une prise en charge financière ?",
      answer: "Oui, selon votre situation (demandeur d'emploi, bénéficiaire RSA, personne en situation de handicap), une prise en charge partielle ou totale peut être possible via nos partenaires institutionnels."
    }
  ];

  const legalInfo = [
    {
      title: "Statut du projet",
      content: "Auto Conduite est un projet d'Économie Sociale et Solidaire (ESS) qui propose un service de location de véhicules pédagogiques. Nous ne dispensons pas de formation à la conduite au sens classique du terme."
    },
    {
      title: "Cadre réglementaire",
      content: "Notre service s'appuie sur les articles R.211-2 et suivants du Code de la route qui encadrent l'apprentissage accompagné de la conduite (AAC) et la conduite supervisée."
    },
    {
      title: "Responsabilités",
      content: "L'accompagnant est responsable de l'apprentissage et du respect des règles de conduite. Auto Conduite fournit le véhicule adapté et l'assurance, mais ne se substitue pas à un enseignant de la conduite."
    },
    {
      title: "Partenariats avec auto-écoles",
      content: "Nous travaillons en complémentarité avec les auto-écoles traditionnelles. Notre service peut intervenir en complément d'une formation classique pour acquérir plus d'expérience de conduite."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            FAQ & Cadre Légal
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Toutes les réponses à vos questions sur Auto Conduite et le cadre juridique de notre service.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Les questions que vous vous posez le plus souvent
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="text-teal-600 flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                    )}
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Scale className="text-teal-600" size={48} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cadre légal
            </h2>
            <p className="text-xl text-gray-600">
              Transparence sur notre statut et le cadre réglementaire
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {legalInfo.map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                <p className="text-gray-700 leading-relaxed">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Important à retenir
                </h3>
                <div className="space-y-2 text-blue-800">
                  <p>• Auto Conduite n'est pas une auto-école mais un service de location solidaire</p>
                  <p>• L'apprentissage se fait avec un accompagnant de votre choix</p>
                  <p>• Le code de la route doit être obtenu avant utilisation</p>
                  <p>• Nous respectons scrupuleusement le cadre légal de l'apprentissage accompagné</p>
                  <p>• Notre mission est de faciliter l'accès à la mobilité pour tous</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
