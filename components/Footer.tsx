import Image from 'next/image';
import Link from 'next/link';
import { getDictionary, Locale } from '../lib/translations';
import { LEGAL_NAV } from '../lib/legal';
import NewsletterForm from './NewsletterForm';

interface Props {
  locale: Locale;
}

export default async function Footer({ locale }: Props) {
  const dict = getDictionary(locale);

  return (
    <footer className="mt-16 border-t border-[#d8c6aa] bg-[#efe4d3] py-12 text-[#17130f]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="mb-4">
            <Image
              src="/logo.png"
              alt="Monumental Decor"
              width={900}
              height={705}
              className="h-auto w-40"
            />
          </h3>
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
          <p className="mb-2 text-sm">
            <a href="https://wa.me/41787763292" className="text-[#5f5448] hover:text-[#17130f]">
              +41 78 776 32 92
            </a>
          </p>
          <p className="mb-2 text-sm">
            <a href="mailto:info@monumental-decor.ch" className="text-[#5f5448] hover:text-[#17130f]">
              info@monumental-decor.ch
            </a>
          </p>
          <p className="mb-4 text-sm text-[#5f5448]">1418 Vuarrens, Suisse</p>
          <NewsletterForm locale={locale} />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-[#d8c6aa] px-4 pt-6 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#5f5448]">
          {LEGAL_NAV[locale].map((item) => (
            <li key={item.slug}>
              <Link href={`/${locale}/legal/${item.slug}`} className="hover:text-[#17130f]">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
