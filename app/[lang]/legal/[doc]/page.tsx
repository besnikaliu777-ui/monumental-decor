import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale } from '../../../../lib/translations';
import { buildMetadata } from '../../../../lib/seo';
import { getLegalDoc, LEGAL_SLUGS, LEGAL_ENTITY, LegalSlug } from '../../../../lib/legal';

interface Props {
  params: { lang: Locale; doc: string };
}

function isLegalSlug(value: string): value is LegalSlug {
  return (LEGAL_SLUGS as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return LEGAL_SLUGS.map((doc) => ({ doc }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isLegalSlug(params.doc)) {
    return { title: 'Monumental Decor', robots: { index: false, follow: true } };
  }
  const doc = getLegalDoc(params.lang, params.doc);
  return buildMetadata({
    lang: params.lang,
    path: `legal/${params.doc}`,
    title: `${doc.title} | Monumental Decor`,
    description: doc.intro,
  });
}

export default function LegalPage({ params }: Props) {
  if (!isLegalSlug(params.doc)) notFound();

  const doc = getLegalDoc(params.lang, params.doc);

  return (
    <main className="bg-[#f6f0e6] py-16 text-[#17130f]">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{doc.title}</h1>
        <p className="mt-5 text-lg text-[#5f5448]">{doc.intro}</p>

        <div className="mt-12 flex flex-col gap-10">
          {doc.sections.map((section) => (
            <section key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a642f]">
                {section.heading}
              </h2>
              {section.body.map((paragraph, index) => (
                <p key={index} className="max-w-[68ch] leading-relaxed text-[#3b332b]">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <p className="mt-14 border-t border-[#d8c6aa] pt-6 text-sm text-[#6b5d4d]">
          {doc.updatedLabel} : {LEGAL_ENTITY.updated}
        </p>
      </article>
    </main>
  );
}
