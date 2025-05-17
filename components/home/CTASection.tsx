import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Besoin d'une intervention rapide?
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Notre équipe de techniciens qualifiés est prête à intervenir pour assurer la sécurité de vos installations de gaz.
        </p>
        <Link href="/service#formulaire" 
              className="bg-white text-blue-600 hover:bg-gray-100 transition-colors font-bold py-3 px-8 rounded-md inline-block">
          Prendre rendez-vous maintenant
        </Link>
      </div>
    </section>
  );
}