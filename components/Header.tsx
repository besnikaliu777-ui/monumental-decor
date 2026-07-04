import Link from 'next/link';
import { getDictionary, Locale } from '../lib/translations';
import CartIcon from './CartIcon';
import WishlistIcon from './WishlistIcon';

interface Props {
  locale: Locale;
}

// Header component. This is a server component because it reads from the
// translation dictionary. It includes navigation links, language switcher and
// icons for the cart and wishlist (client components).
export default async function Header({ locale }: Props) {
  const dict = getDictionary(locale);
  const languages: Locale[] = ['fr', 'de', 'it', 'en'];
  return (
    <header className="sticky top-0 z-50 border-b border-[#d8c6aa] bg-[#f6f0e6]/90 text-[#17130f] backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-4">
          <Link href={`/${locale}`} className="text-xl font-bold text-[#17130f]">
            Monumental Decor
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href={`/${locale}`} className="hover:text-[#8a642f]">
              {dict.nav.home}
            </Link>
            <Link href={`/${locale}/about`} className="hover:text-[#8a642f]">
              {dict.nav.about}
            </Link>
            <Link href={`/${locale}/savoir-faire`} className="hover:text-[#8a642f]">
              Savoir-faire
            </Link>
            <Link href={`/${locale}/shop`} className="hover:text-[#8a642f]">
              {dict.nav.shop}
            </Link>
            <Link href={`/${locale}/b2b`} className="hover:text-[#8a642f]">
              B2B
            </Link>
            <Link href={`/${locale}/realizations`} className="hover:text-[#8a642f]">
              {dict.nav.realizations}
            </Link>
            <Link href={`/${locale}/contact`} className="hover:text-[#8a642f]">
              {dict.nav.contact}
            </Link>
          </nav>
        </div>
        <div className="flex items-center">
          {/* Language switcher */}
          <div className="hidden sm:flex space-x-2 mr-4">
            {languages.map((lang) => (
              <Link
                key={lang}
                href={`/${lang}`}
                className={
                  lang === locale
                    ? 'text-[#8a642f] font-semibold'
                    : 'text-[#716456] hover:text-[#8a642f]'
                }
              >
                {lang.toUpperCase()}
              </Link>
            ))}
          </div>
          {/* Icons (client components) */}
          <CartIcon locale={locale} />
          <WishlistIcon locale={locale} />
        </div>
      </div>
    </header>
  );
}
