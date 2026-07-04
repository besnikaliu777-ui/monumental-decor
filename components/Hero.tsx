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
    <section className="bg-[#f6f0e6] px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative min-h-[72vh] overflow-hidden rounded-sm md:min-h-[78vh]">
          <Image
            src="/images/vase-anges-1.jpg"
            alt="Vase monumental artisanal"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-x-0 bottom-0 max-w-3xl px-6 pb-10 text-white md:px-12 md:pb-14"
          >
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              L’art monumental qui transforme vos espaces
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/90 md:text-xl">
              Pièces artisanales pour villas, jardins et lieux d’exception.
            </p>
            <Link
              href={`/${locale}/shop`}
              className="mt-7 inline-block rounded-sm bg-[#17130f] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4a3621]"
            >
              Découvrir la collection
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
