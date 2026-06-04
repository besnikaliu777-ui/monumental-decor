"use client";

import Image from 'next/image';
import Link from 'next/link';
import { getDictionary, Locale } from '../lib/translations';
import { motion } from 'framer-motion';

interface Props {
  locale: Locale;
}

// Hero section for the home page. Displays a large background image, headline,
// subtitle and call‑to‑action buttons. Uses Framer Motion for subtle
// animations.
export default function Hero({ locale }: Props) {
  const dict = getDictionary(locale);
  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero.png"
        alt="Hero background"
        fill
        className="object-cover object-center opacity-70"
        priority
      />
      <div className="relative z-10 max-w-3xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          {dict.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg md:text-2xl text-gray-200"
        >
          {dict.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <Link
            href={`/${locale}/shop`}
            className="bg-yellow-500 text-black px-6 py-3 rounded font-medium hover:bg-yellow-400 transition-colors"
          >
            {dict.hero.buyNow}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded font-medium hover:bg-yellow-500 hover:text-black transition-colors"
          >
            {dict.hero.quote}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}