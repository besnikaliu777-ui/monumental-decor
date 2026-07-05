import Image from 'next/image';
import Link from 'next/link';
import { getDictionary, Locale } from '../lib/translations';

interface Props {
  locale: Locale;
}

const categoryImages: Record<keyof ReturnType<typeof getDictionary>['categories'], string> = {
  animal: '/images/chien-statue-6125-02.jpg',
  vaseResine: '/images/vase-anges-floral-modele-a.jpg',
  vaseBeton: '/images/vase-medicis-6125-02.jpg',
  fontaine: '/images/fontaine-dame-modele-a.jpg',
};

export default async function CategoryGrid({ locale }: Props) {
  const dict = getDictionary(locale);
  const categories = dict.categories;

  return (
    <section className="py-10">
      <h2 className="mb-8 text-3xl font-semibold">Catégories</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {Object.keys(categories).map((key) => {
          const catKey = key as keyof typeof categories;
          return (
            <Link
              key={key}
              href={`/${locale}/shop/${key}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e4d6c2]">
                <Image
                  src={categoryImages[catKey]}
                  alt={categories[catKey]}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-[#17130f]">{categories[catKey]}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
