"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getDictionary, Locale } from '../lib/translations';

interface Props {
  locale: Locale;
}

export default function Hero({ locale }: Props) {
  const dict = getDictionary(locale);
  const trustPoints = [
    "Plus de 15 ans d'expérience",
    'Fabrication artisanale',
    'Livraison dans toute la Suisse',
    'Pièces uniques',
  ];

  return (
    <section className="relative min-h-[82vh] md:min-h-[88vh] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/lion.png"
        alt="Lion monumental devant une villa"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 max-w-4xl px-5 pt-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          {dict.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto"
        >
          {dict.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base"
        >
          {trustPoints.map((point) => (
            <div
              key={point}
              className="bg-black/45 border border-white/20 rounded px-4 py-3 text-white"
            >
              <div className="text-yellow-400 leading-none">★★★★★</div>
              <div className="mt-1 font-medium">{point}</div>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <Link
            href={`/${locale}/shop`}
            className="bg-yellow-500 text-black px-7 py-3 rounded font-medium hover:bg-yellow-400 transition-colors"
          >
            {dict.hero.buyNow}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
