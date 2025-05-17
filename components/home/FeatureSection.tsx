import { Shield, Clock, Award, PenTool as Tool } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: "Sécurité garantie",
    description: "Nous nous assurons que vos installations sont aux normes et sécurisées."
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    title: "Intervention rapide",
    description: "Service d'urgence disponible 24h/24 et 7j/7 pour votre tranquillité."
  },
  {
    icon: <Award className="h-10 w-10 text-blue-600" />,
    title: "Expertise confirmée",
    description: "Plus de 15 ans d'expérience dans la maintenance des systèmes de sécurité du gaz."
  },
  {
    icon: <Tool className="h-10 w-10 text-blue-600" />,
    title: "Équipement professionnel",
    description: "Utilisation de matériel de dernière génération pour des diagnostics précis."
  }
];

export default function FeatureSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nous choisir?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre expertise en matière de sécurité du gaz nous permet d'offrir un service fiable et professionnel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}