import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const services = [
  "Réparation des boutons de sécurité du gaz",
  "Maintenance préventive des systèmes",
  "Mise aux normes des installations",
  "Détection de fuites de gaz",
  "Installation de nouveaux systèmes de sécurité",
  "Conseils personnalisés sur la sécurité"
];

export default function ServiceDescription() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos services de réparation spécialisés</h2>
            <p className="text-lg text-gray-700 mb-8">
              Chez SécuriGaz, nous sommes spécialisés dans la réparation et la maintenance des boutons de sécurité du gaz dans les immeubles. Notre équipe d'experts intervient rapidement pour assurer la sécurité de votre installation.
            </p>
            
            <div className="mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{service}</p>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-gray-700">
              Tous nos travaux sont garantis et respectent les normes de sécurité en vigueur. Nous intervenons dans toute la région parisienne avec des délais rapides pour votre tranquillité.
            </p>
          </div>
          
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg"
              alt="Technicien en réparation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}