'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/Button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Precision <span className="gradient-text block">ML & Data</span> 
          <br />for Global Leaders
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed"
        >
          Boutique AI lab helping US/UK FinTech, Retail & Healthcare achieve 30%+ efficiency gains through production-grade Machine Learning.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <Link href="/contact">
            <Button className="text-lg px-8">Start Project $5K+</Button>
          </Link>
          <Link href="/portfolio" className="flex items-center gap-2 hover:text-orange-400 transition">
            View Work <ArrowDown className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={32} className="text-orange-400" />
      </div>
    </section>
  );
}
