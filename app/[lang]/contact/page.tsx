import type { Metadata } from 'next';
import { getDictionary, Locale } from '../../../lib/translations';
import { pageMetadata } from '../../../lib/seo';
import ContactForm from './ContactForm';

interface Props {
  params: { lang: Locale };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata('contact', params.lang, 'contact');
}

const DETAIL_LABEL =
  'text-xs font-semibold uppercase tracking-[0.18em] text-[#8a642f]';

const MAP_SRC =
  'https://maps.google.com/maps?q=1418%20Vuarrens%2C%20Suisse&z=13&output=embed';

export default async function ContactPage({ params }: Props) {
  const locale = params.lang;
  const dict = getDictionary(locale);

  return (
    <main className="bg-[#f6f0e6] py-16 text-[#17130f]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-8">

        <section>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            {dict.contact.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[#5f5448]">
            {dict.contact.description}
          </p>
          <ContactForm locale={locale} dict={dict} />
        </section>

        <aside className="flex flex-col gap-8">
          <div className="divide-y divide-[#d8c6aa] rounded-sm border border-[#d8c6aa] bg-[#fbf7ef]">
            <a
              href="https://wa.me/41787763292"
              target="_blank"
              rel="noopener"
              className="block px-6 py-5 transition-colors hover:bg-[#efe4d3]"
            >
              <p className={DETAIL_LABEL}>WhatsApp</p>
              <p className="mt-2 text-lg text-[#17130f]">+41 78 776 32 92</p>
            </a>

            <a
              href="mailto:info@monumental-decor.ch"
              className="block px-6 py-5 transition-colors hover:bg-[#efe4d3]"
            >
              <p className={DETAIL_LABEL}>Email</p>
              <p className="mt-2 break-all text-lg text-[#17130f]">info@monumental-decor.ch</p>
            </a>

            <div className="px-6 py-5">
              <p className={DETAIL_LABEL}>Adresse</p>
              <p className="mt-2 text-lg text-[#17130f]">
                1418 Vuarrens
                <span className="block text-base text-[#5f5448]">Canton de Vaud, Suisse</span>
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-[#d8c6aa]">
            <iframe
              title="Monumental Decor — 1418 Vuarrens"
              src={MAP_SRC}
              width="100%"
              height="320"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>

      </div>
    </main>
  );
}
