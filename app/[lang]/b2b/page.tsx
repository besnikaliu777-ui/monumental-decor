import type { Metadata } from 'next';
import { Locale } from '../../../lib/translations';
import { frenchOnlyMetadata } from '../../../lib/seo';

interface Props {
  params: { lang: Locale };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return frenchOnlyMetadata('b2b', params.lang);
}

export default async function B2BPage({ params }: Props) {
  void params;

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#17130f]">
          Hôtels, restaurants et architectes
        </h1>
        <p className="mt-5 max-w-3xl text-[#5f5448]">
          Nous accompagnons les projets professionnels qui cherchent une pièce décorative
          forte : entrée, terrasse, lobby, cour intérieure, restaurant ou projet paysager.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ['Hôtels', 'Créer une première impression haut de gamme dès l’arrivée.'],
            ['Restaurants', 'Renforcer l’identité visuelle et l’expérience client.'],
            ['Architectes', 'Sélectionner une pièce cohérente avec les volumes et matériaux du projet.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded bg-[#fbf7ef] border border-[#d8c6aa] p-6">
              <h2 className="text-xl font-semibold text-[#8a642f]">{title}</h2>
              <p className="mt-3 text-[#5f5448]">{text}</p>
            </div>
          ))}
        </div>
        <a
          href="https://wa.me/41787763292?text=Bonjour,%20je%20souhaite%20discuter%20d'un%20projet%20professionnel%20Monumental%20Decor."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded bg-[#25D366] px-6 py-3 font-medium text-white hover:bg-[#1fb457]"
        >
          Parler du projet sur WhatsApp
        </a>
      </div>
    </main>
  );
}
