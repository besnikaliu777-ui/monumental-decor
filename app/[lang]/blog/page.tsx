import type { Metadata } from 'next';
import { Locale } from '../../../lib/translations';
import { frenchOnlyMetadata } from '../../../lib/seo';

interface Props {
  params: { lang: Locale };
}

const posts = [
  {
    title: 'Comment choisir une statue pour une entrée de villa',
    text: 'Hauteur, recul, matière et éclairage : les critères qui donnent une vraie présence sans surcharger l’espace.',
  },
  {
    title: 'Résine ou béton : quelle matière choisir ?',
    text: 'La résine permet des détails fins et un poids maîtrisé. Le béton apporte une présence minérale et stable.',
  },
  {
    title: 'Entretenir une pièce décorative extérieure',
    text: 'Un entretien simple et régulier prolonge l’éclat des finitions et protège les détails sculptés.',
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return frenchOnlyMetadata('blog', params.lang);
}

export default async function BlogPage({ params }: Props) {
  void params;

  return (
    <main className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#17130f]">Blog conseil</h1>
        <p className="mt-5 text-[#5f5448]">
          Conseils SEO et contenus utiles pour aider les clients à choisir une pièce adaptée.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="rounded bg-[#fbf7ef] border border-[#d8c6aa] p-6">
              <h2 className="text-xl font-semibold text-[#8a642f]">{post.title}</h2>
              <p className="mt-3 text-[#5f5448]">{post.text}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
