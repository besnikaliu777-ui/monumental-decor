import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '../../../lib/translations';
import { pageMetadata } from '../../../lib/seo';
import { articles, BLOG_INTRO } from '../../../lib/articles';

interface Props {
  params: { lang: Locale };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return pageMetadata('blog', params.lang, 'blog');
}

export default async function BlogPage({ params }: Props) {
  const locale = params.lang;
  const intro = BLOG_INTRO[locale];

  return (
    <main className="bg-[#f6f0e6] py-16 text-[#17130f]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{intro.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-[#5f5448]">{intro.lead}</p>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="flex flex-col">
              <Link href={`/${locale}/blog/${article.slug}`} className="group flex flex-col gap-4">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e4d6c2]">
                  <Image
                    src={article.image}
                    alt={article.title[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h2 className="text-xl font-semibold leading-snug group-hover:text-[#8a642f]">
                  {article.title[locale]}
                </h2>
              </Link>
              <p className="mt-3 text-[#5f5448]">{article.excerpt[locale]}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
