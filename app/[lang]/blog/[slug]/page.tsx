import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Locale } from '../../../../lib/translations';
import { buildMetadata, SITE_URL, urlFor } from '../../../../lib/seo';
import { articles, getArticleBySlug, BLOG_INTRO } from '../../../../lib/articles';

interface Props {
  params: { lang: Locale; slug: string };
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return { title: 'Monumental Decor', robots: { index: false, follow: true } };
  }
  return buildMetadata({
    lang: params.lang,
    path: `blog/${article.slug}`,
    title: `${article.title[params.lang]} | Monumental Decor`,
    description: article.excerpt[params.lang],
    image: article.image,
  });
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const locale = params.lang;
  const body = article.body[locale];

  // Article structured data, so the piece can appear as a rich result.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title[locale],
    description: article.excerpt[locale],
    image: `${SITE_URL}${article.image}`,
    inLanguage: locale,
    mainEntityOfPage: urlFor(locale, `blog/${article.slug}`),
    author: { '@type': 'Organization', name: 'Monumental Decor' },
    publisher: {
      '@type': 'Organization',
      name: 'Monumental Decor',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/hero.png` },
    },
  };

  const others = articles.filter((item) => item.slug !== article.slug);

  return (
    <main className="bg-[#f6f0e6] py-16 text-[#17130f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}/blog`}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a642f] hover:text-[#17130f]"
        >
          ← {BLOG_INTRO[locale].title}
        </Link>

        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
          {article.title[locale]}
        </h1>
        <p className="mt-5 text-lg text-[#5f5448]">{article.excerpt[locale]}</p>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden bg-[#e4d6c2]">
          <Image
            src={article.image}
            alt={article.title[locale]}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-12 flex flex-col gap-6">
          {body.map((block, index) => {
            if (Array.isArray(block)) {
              return (
                <ul key={index} className="flex list-disc flex-col gap-3 pl-5 text-[#3b332b]">
                  {block.map((item, itemIndex) => (
                    <li key={itemIndex} className="max-w-[66ch] leading-relaxed marker:text-[#8a642f]">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            // A short line with no final punctuation is a section heading.
            const isHeading = block.length < 60 && !/[.!?:]$/.test(block.trim());
            return isHeading ? (
              <h2 key={index} className="mt-4 text-2xl font-semibold leading-snug">
                {block}
              </h2>
            ) : (
              <p key={index} className="max-w-[66ch] leading-relaxed text-[#3b332b]">
                {block}
              </p>
            );
          })}
        </div>

        <aside className="mt-16 border-t border-[#d8c6aa] pt-8">
          <ul className="flex flex-col gap-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/${locale}/blog/${item.slug}`}
                  className="text-lg text-[#17130f] underline decoration-[#d8c6aa] underline-offset-4 hover:decoration-[#8a642f]"
                >
                  {item.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </article>
    </main>
  );
}
