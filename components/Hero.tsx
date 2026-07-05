"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Locale } from '../lib/translations';

interface Props {
  locale: Locale;
}

export default function Hero({ locale }: Props) {
  return (
    <section className="bg-[#f6f0e6] px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative min-h-[58vh] overflow-hidden rounded-sm md:min-h-[68vh]">
          <Image
            src="/images/hero-luxury-vase-v2.png"
            alt="Vase monumental sur terrasse de villa"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f6f0e6]/85 via-[#f6f0e6]/42 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-7 left-0 max-w-xl px-7 text-[#17130f] md:top-1/2 md:-translate-y-1/2 md:px-14"
          >
            <h1 className="max-w-[18rem] text-3xl font-semibold uppercase leading-[0.95] tracking-[-0.02em] sm:text-4xl md:max-w-xl md:text-6xl">
              L’art monumental qui transforme vos espaces
            </h1>
            <p className="mt-4 max-w-[16rem] text-sm leading-6 text-[#2f2822] md:mt-5 md:max-w-md md:text-base">
              Pièces artisanales pour villas, jardins et lieux d’exception.
            </p>
            <Link
              href={`/${locale}/shop`}
              className="mt-5 inline-block rounded-sm bg-[#17130f] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4a3621] md:mt-7 md:px-6"
            >
              Découvrir la collection
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
