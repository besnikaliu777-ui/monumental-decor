import Link from 'next/link';
import Image from 'next/image';
import { getDictionary, Locale } from '../../lib/translations';
import { products } from '../../lib/products';
import Hero from '../../components/Hero';
import CategoryGrid from '../../components/CategoryGrid';
import ProductCard from '../../components/ProductCard';

interface Props {
  params: { lang: Locale };
}

const reviews = [
  {
    name: 'Client privé, Vaud',
    text: 'Une pièce imposante qui a transformé notre entrée. Conseils précis et livraison organisée avec soin.',
  },
  {
    name: 'Restaurant, Lausanne',
    text: 'Le décor attire immédiatement l’attention des clients. La finition donne une vraie présence à la salle.',
  },
  {
    name: 'Architecte paysagiste',
    text: 'Bon accompagnement sur le choix des volumes, des matières et de l’emplacement.',
  },
];

export default async function Page({ params }: Props) {
  const locale = params.lang;
  const dict = getDictionary(locale);

  return (
    <main>
      <Hero locale={locale} />

      <section className="bg-black py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ['Livraison en Suisse', 'Organisation possible dans toute la Suisse, avec conseil selon l’accès et le poids.'],
            ['Paiement sécurisé', 'Commande accompagnée, échange direct et validation avant expédition.'],
            ['Pièces uniques', 'Chaque création est sélectionnée pour donner du caractère aux jardins, villas et espaces d’accueil.'],
          ].map(([title, text]) => (
            <div key={title} className="border border-yellow-500/30 bg-gray-950 p-6 rounded">
              <h2 className="text-xl font-semibold text-yellow-500">{title}</h2>
              <p className="mt-3 text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-yellow-500 font-semibold">Savoir-faire artisanal</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              Des créations pensées pour les lieux qui doivent marquer les esprits
            </h2>
            <p className="mt-5 text-gray-300">
              Monumental Decor accompagne les particuliers, hôtels, restaurants et architectes
              dans le choix de pièces décoratives fortes. L’objectif est simple : créer un point
              focal élégant, durable et adapté au lieu.
            </p>
            <Link
              href={`/${locale}/savoir-faire`}
              className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 rounded font-medium hover:bg-yellow-400"
            >
              Notre savoir-faire
            </Link>
          </div>
          <div className="relative h-80 rounded overflow-hidden">
            <Image src="/images/dame-amphore-1.jpg" alt="Statue en situation" fill className="object-cover" />
          </div>
        </div>
      </section>

      <CategoryGrid locale={locale} />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {dict.common.shopNow}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Réalisations en situation</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ['/images/lion.png', 'Entrée de villa'],
              ['/images/vase-anges-1.jpg', 'Terrasse et jardin d’hiver'],
              ['/images/dame-amphore-2.jpg', 'Cour et espace extérieur'],
            ].map(([src, title]) => (
              <div key={title} className="bg-black rounded overflow-hidden">
                <div className="relative h-64">
                  <Image src={src} alt={title} fill className="object-cover" />
                </div>
                <p className="p-4 text-white font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-white">Garanties et entretien</h2>
            <div className="mt-6 space-y-4 text-gray-300">
              <p><strong className="text-white">Contrôle qualité :</strong> chaque pièce est vérifiée avant départ atelier.</p>
              <p><strong className="text-white">Conseil d’installation :</strong> nous conseillons l’emplacement selon le poids, l’accès et l’exposition.</p>
              <p><strong className="text-white">Entretien simple :</strong> chiffon doux, eau claire, sans produits abrasifs.</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Avis clients</h2>
            <div className="mt-6 space-y-4">
              {reviews.map((review) => (
                <div key={review.name} className="rounded bg-gray-900 p-5">
                  <div className="text-yellow-400">★★★★★</div>
                  <p className="mt-2 text-gray-200">“{review.text}”</p>
                  <p className="mt-3 text-sm text-gray-400">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ['Hôtels', 'Créer une entrée, un lobby ou une terrasse mémorable.'],
            ['Restaurants', 'Installer une ambiance forte et différenciante.'],
            ['Architectes', 'Trouver des pièces adaptées aux projets premium.'],
          ].map(([title, text]) => (
            <Link key={title} href={`/${locale}/b2b`} className="rounded bg-black p-6 hover:bg-gray-900">
              <h3 className="text-xl font-semibold text-yellow-500">{title}</h3>
              <p className="mt-3 text-gray-300">{text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Conseils, nouveautés et pièces disponibles</h2>
          <p className="mt-4 text-gray-300">
            Recevez les nouvelles pièces, conseils d’entretien et inspirations pour jardins,
            villas, hôtels et restaurants.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 rounded bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="rounded bg-yellow-500 px-6 py-3 font-medium text-black hover:bg-yellow-400">
              S’inscrire
            </button>
          </form>
          <Link href={`/${locale}/blog`} className="mt-5 inline-block text-yellow-500 hover:underline">
            Lire le blog conseil
          </Link>
        </div>
      </section>
    </main>
  );
}
