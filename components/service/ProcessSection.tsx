import { CircleCheck, CalendarClock, Users, Wrench } from 'lucide-react';

const steps = [
  {
    icon: <CalendarClock className="h-12 w-12 text-blue-600" />,
    title: "Prise de rendez-vous",
    description: "Remplissez notre formulaire en ligne ou appelez-nous pour planifier une intervention."
  },
  {
    icon: <Users className="h-12 w-12 text-blue-600" />,
    title: "Diagnostic gratuit",
    description: "Nos techniciens effectuent une évaluation complète de votre installation."
  },
  {
    icon: <Wrench className="h-12 w-12 text-blue-600" />,
    title: "Intervention",
    description: "Réparation professionnelle avec des pièces de qualité et garantie."
  },
  {
    icon: <CircleCheck className="h-12 w-12 text-blue-600" />,
    title: "Suivi",
    description: "Vérification post-intervention et conseils pour maintenir la sécurité."
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre processus d'intervention</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous suivons une méthodologie éprouvée pour garantir des réparations efficaces et durables.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="flex justify-center mb-6">{step.icon}</div>
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-6">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}