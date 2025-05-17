import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Image d'arrière-plan avec overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
          alt="Technicien de maintenance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Réparation des boutons de sécurité du gaz
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Spécialistes de la maintenance et de la réparation des systèmes de sécurité du gaz dans les immeubles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/service" 
                  className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-3 px-8 rounded-md text-center">
              Nos services
            </Link>
            <Link href="/service#formulaire" 
                  className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-3 px-8 rounded-md text-center">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}