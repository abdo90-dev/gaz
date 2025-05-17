export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SécuriGaz</h3>
            <p className="text-gray-300 mb-4">
              Spécialiste en réparation des boutons de sécurité du gaz dans les immeubles depuis plus de 15 ans.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Téléphone: 01 23 45 67 89</p>
            <p className="text-gray-300 mb-2">Email: contact@securigaz.fr</p>
            <p className="text-gray-300">Adresse: 15 rue de la Sécurité, 75001 Paris</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Horaires</h3>
            <p className="text-gray-300 mb-2">Lundi - Vendredi: 8h30 - 18h00</p>
            <p className="text-gray-300 mb-2">Samedi: 9h00 - 12h00</p>
            <p className="text-gray-300">Urgences 24h/24 et 7j/7</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SécuriGaz. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}