import Image from 'next/image';

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Gestionnaire d'immeuble",
    content: "L'équipe de SécuriGaz a effectué un travail exceptionnel dans notre résidence. Intervention rapide et professionnelle, je recommande vivement!",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
  },
  {
    name: "Jean Martin",
    role: "Syndic de copropriété",
    content: "Très satisfait du service. Les techniciens sont compétents et ont résolu notre problème de sécurité en un temps record.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    name: "Sophie Lambert",
    role: "Propriétaire",
    content: "Service client exemplaire. Des explications claires et un travail soigné. Je n'hésiterai pas à faire appel à eux à nouveau.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ils nous font confiance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de nos services de réparation et maintenance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="relative h-14 w-14 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}