import Link from 'next/link';
import { getDictionary, Locale } from '../lib/translations';

interface Props {
  locale: Locale;
}

export default async function Footer({ locale }: Props) {
  const dict = getDictionary(locale);

  return (
    <footer className="mt-16 border-t border-[#d8c6aa] bg-[#efe4d3] py-12 text-[#17130f]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="mb-3 text-lg font-semibold">Monumental Decor</h3>
          <p className="mb-4 text-sm text-[#5f5448]">Pièces artisanales pour espaces d’exception.</p>
          <p className="text-sm text-[#5f5448]">
            © {new Date().getFullYear()} Monumental Decor. All rights reserved.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-[#8a642f]">Navigation</h4>
          <ul className="space-y-2 text-sm text-[#5f5448]">
            <li><Link href={`/${locale}`} className="hover:text-[#17130f]">{dict.nav.home}</Link></li>
            <li><Link href={`/${locale}/about`} className="hover:text-[#17130f]">{dict.nav.about}</Link></li>
            <li><Link href={`/${locale}/shop`} className="hover:text-[#17130f]">{dict.nav.shop}</Link></li>
            <li><Link href={`/${locale}/realizations`} className="hover:text-[#17130f]">{dict.nav.realizations}</Link></li>
            <li><Link href={`/${locale}/contact`} className="hover:text-[#17130f]">{dict.nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-[#8a642f]">{dict.contact.title}</h4>
          <p className="mb-2 text-sm text-[#5f5448]">078 776 32 92</p>
          <p className="mb-2 text-sm text-[#5f5448]">info@monumental-decor.ch</p>
          <p className="mb-4 text-sm text-[#5f5448]">Vuarrens, 1418</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Email"
              className="rounded-sm border border-[#d8c6aa] bg-[#f6f0e6] px-3 py-2 text-[#17130f] placeholder-[#8f8170] focus:outline-none focus:ring-2 focus:ring-[#8a642f]"
            />
            <button
              type="submit"
              className="rounded-sm bg-[#17130f] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4a3621]"
            >
              S’inscrire
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
