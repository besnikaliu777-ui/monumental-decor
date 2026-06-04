import { getDictionary, Locale } from '../../../lib/translations';
import Gallery from '../../../components/Gallery';

interface Props {
  params: { lang: Locale };
}

export default async function RealizationsPage({ params }: Props) {
  const locale = params.lang;
  return (
    <main>
      <Gallery locale={locale} />
    </main>
  );
}