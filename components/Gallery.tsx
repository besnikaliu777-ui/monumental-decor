import Image from 'next/image';
import { getDictionary, Locale } from '../lib/translations';

interface Props {
  locale: Locale;
}

// Simple gallery component used for the Realizations page. Displays a grid
// of images. In a real site you would fetch actual project photos from a CMS.
export default async function Gallery({ locale }: Props) {
  const dict = getDictionary(locale);
  // Use the demonstration images for the gallery
  const images = [
    '/images/lion.png',
    '/images/gorilla.png',
    '/images/eagle.png',
    '/images/horse.png',
    '/images/vase.png',
    '/images/pot.png',
    '/images/modern.png',
    '/images/classical.png',
  ];
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {dict.realizations.title}
        </h2>
        <p className="text-gray-300 mb-8">{dict.realizations.subtitle}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative h-40 md:h-56 overflow-hidden rounded-lg">
              <Image src={src} alt="Gallery image" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}