import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-orange-500/20 mt-20 py-12 bg-slate-900/50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-bold gradient-text mb-4">QORYNTA</h3>
          <p>Boutique AI lab for precision ML & Data Analytics. Clutch-listed for US/UK clients.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><Link href="/services" className="hover:text-orange-400">AI Development</Link></li>
            <li><Link href="/services" className="hover:text-orange-400">Data Analytics</Link></li>
            <li><Link href="/services" className="hover:text-orange-400">Generative AI</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-orange-400">About</Link></li>
            <li><Link href="/portfolio" className="hover:text-orange-400">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="https://github.com/rishvmiyani" className="hover:text-orange-400"><Github size={20} /></a>
            <a href="https://linkedin.com/in/rishv-miyani-914166332" className="hover:text-orange-400"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-orange-400"><Twitter size={20} /></a>
          </div>
          <p className="mt-4 text-xs opacity-75">© 2026 QORYNTA. All rights reserved. GDPR Compliant.</p>
        </div>
      </div>
    </footer>
  );
}
