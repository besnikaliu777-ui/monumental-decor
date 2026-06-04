import Link from 'next/link';
import { getDictionary, Locale } from '../lib/translations';

interface Props {
  locale: Locale;
}

// Footer component. Contains navigation links, contact info and a simple
// newsletter subscription form (non functional). This is a server component.
export default async function Footer({ locale }: Props) {
  const dict = getDictionary(locale);
  return (
    <footer className="bg-black text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-yellow-500 text-lg font-semibold mb-3">Monumental Decor</h3>
          <p className="text-sm mb-4">
            {dict.hero.subtitle}
          </p>
          <p className="text-sm">© {new Date().getFullYear()} Monumental Decor. All rights reserved.</p>
        </div>
        <div>
          <h4 className="text-yellow-500 font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={`/${locale}`} className="hover:text-yellow-400">
                {dict.nav.home}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/about`} className="hover:text-yellow-400">
                {dict.nav.about}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/shop`} className="hover:text-yellow-400">
                {dict.nav.shop}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/realizations`} className="hover:text-yellow-400">
                {dict.nav.realizations}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} className="hover:text-yellow-400">
                {dict.nav.contact}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-yellow-500 font-semibold mb-3">{dict.contact.title}</h4>
          <p className="text-sm mb-2">078 776 32 92</p>
          <p className="text-sm mb-2">info@monumental-decor.ch</p>
          <p className="text-sm mb-4">Zürich, Suisse</p>
          {/* Newsletter form */}
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors text-sm font-medium"
            >
              S’inscrire
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}