'use client';

import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Hero />
      <section id="services" className="py-32 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 gradient-text"
          >
            Clutch-Optimized Services
          </motion.h2>
          <ServicesGrid />
        </div>
      </section>
    </>
  );
}
