import { getDictionary, Locale } from '../../../lib/translations';
import Image from 'next/image';

interface Props {
  params: { lang: Locale };
}

// About page. Presents the company history and craftsmanship.
export default async function AboutPage({ params }: Props) {
  const locale = params.lang;
  const dict = getDictionary(locale);
  return (
    <main className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {dict.about.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-gray-300">
            {dict.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="/images/modern.png"
              alt="Artisan at work"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}