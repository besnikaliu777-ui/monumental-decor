import type { Metadata } from 'next';
import { getDictionary, Locale } from '../../../lib/translations';
import Gallery from '../../../components/Gallery';
import { pageMetadata } from '../../../lib/seo';

interface Props {
  params: { lang: Locale };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata('realizations', params.lang, 'realizations');
}

export default async function RealizationsPage({ params }: Props) {
  const locale = params.lang;
  return (
    <main>
      <Gallery locale={locale} />
    </main>
  );
}