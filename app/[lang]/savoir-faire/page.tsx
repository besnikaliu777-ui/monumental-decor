import Image from 'next/image';
import { Locale } from '../../../lib/translations';

interface Props {
  params: { lang: Locale };
}

export default async function SavoirFairePage({ params }: Props) {
  void params;

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Notre savoir-faire</h1>
        <p className="mt-5 max-w-3xl text-gray-300">
          Monumental Decor sélectionne et prépare des pièces décoratives pensées pour les
          extérieurs, les villas, les hôtels, les restaurants et les projets architecturaux.
          Chaque objet doit créer une présence forte sans perdre son élégance.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 rounded overflow-hidden">
            <Image src="/images/vase-anges-3.jpg" alt="Travail artisanal sur vase" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            {[
              ['Sélection', 'Choix des volumes, des matières et du style selon le lieu.'],
              ['Préparation', 'Contrôle visuel, finition, conseil de pose et préparation avant livraison.'],
              ['Accompagnement', 'Conseil direct par WhatsApp pour choisir une pièce adaptée au projet.'],
              ['Installation', 'Recommandations selon poids, exposition, accès et rendu souhaité.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded bg-gray-900 p-5">
                <h2 className="text-xl font-semibold text-yellow-500">{title}</h2>
                <p className="mt-2 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
