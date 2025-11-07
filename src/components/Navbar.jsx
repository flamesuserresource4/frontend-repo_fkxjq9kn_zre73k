import { ShieldCheck, Phone, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="p-2 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white shadow-md shadow-cyan-500/30">
              <ShieldCheck size={18} />
            </span>
            <span className="font-semibold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
              PT. Tristan Utama Solutech
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-slate-300 hover:text-white transition-colors">Layanan</a>
            <a href="#work" className="text-slate-300 hover:text-white transition-colors">Portofolio</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Kontak</a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <Phone size={16} /> Konsultasi Gratis
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            <a href="#services" className="block text-slate-200 py-2">Layanan</a>
            <a href="#work" className="block text-slate-200 py-2">Portofolio</a>
            <a href="#contact" className="block text-slate-200 py-2">Kontak</a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-medium">
              <Phone size={16} /> Konsultasi Gratis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
