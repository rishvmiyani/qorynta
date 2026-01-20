'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/Button';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/10 border-b border-orange-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold gradient-text">QORYNTA</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-orange-400 transition">Home</Link>
          <Link href="/services" className="hover:text-orange-400 transition">Services</Link>
          <Link href="/portfolio" className="hover:text-orange-400 transition">Portfolio</Link>
          <Link href="/about" className="hover:text-orange-400 transition">About</Link>
          <Link href="/contact">
            <Button>Get Quote</Button>
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900/95 px-4 py-4 space-y-4">
          <Link href="/" className="block py-2 hover:text-orange-400" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/services" className="block py-2 hover:text-orange-400" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/portfolio" className="block py-2 hover:text-orange-400" onClick={() => setOpen(false)}>Portfolio</Link>
          <Link href="/about" className="block py-2 hover:text-orange-400" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className="block py-2">
            <Button className="w-full" onClick={() => setOpen(false)}>Get Quote</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
