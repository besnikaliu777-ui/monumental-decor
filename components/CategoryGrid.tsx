import Image from 'next/image';
import Link from 'next/link';
import { getDictionary, Locale } from '../lib/translations';

interface Props {
  locale: Locale;
}

// Simple mapping from category key to image preview file. We reuse the demo
// images for category thumbnails. In a real project you could choose
// representative thumbnails per category.
const categoryImages: Record<keyof ReturnType<typeof getDictionary>['categories'], string> = {
  animal: '/images/lion.png',
  vaseResine: '/images/vase-anges-1.jpg',
  vaseBeton: '/images/dame-amphore-1.jpg',
};

export default async function CategoryGrid({ locale }: Props) {
  const dict = getDictionary(locale);
  const categories = dict.categories;
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          {dict.nav.shop}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Object.keys(categories).map((key) => {
            const catKey = key as keyof typeof categories;
            return (
              <Link
                key={key}
                href={`/${locale}/shop/${key}`}
                className="relative block rounded-lg overflow-hidden group"
              >
                <div className="h-32 md:h-40">
                  <Image
                    src={categoryImages[catKey]}
                    alt={categories[catKey]}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm md:text-lg font-semibold">
                    {categories[catKey]}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
