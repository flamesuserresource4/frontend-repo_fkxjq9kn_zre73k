import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Hubungi Kami</h2>
            <p className="mt-3 text-slate-400 max-w-xl">Sampaikan kebutuhan, timeline, dan anggaran. Kami akan menyusun rencana aksi bernilai tinggi untuk organisasi Anda.</p>

            <div className="mt-8 space-y-3 text-slate-300">
              <div className="flex items-center gap-3"><Mail size={18} className="text-cyan-300" /> hello@tristansolutech.co.id</div>
              <div className="flex items-center gap-3"><Phone size={18} className="text-cyan-300" /> +62 812 3456 7890</div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="bg-slate-800/40 rounded-2xl p-6 border border-white/10">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300">Nama</label>
                <input className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="you@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300">Kategori Layanan</label>
              <select className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option>Cybersecurity</option>
                <option>Infrastructure & Cloud</option>
                <option>Custom Systems</option>
                <option>Managed Services</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300">Pesan</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Ceritakan kebutuhan Anda..." />
            </div>
            <button className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-slate-900 font-semibold hover:-translate-y-0.5 transition-transform">
              <Send size={16} /> Minta Proposal
            </button>
          </form>
        </div>

        <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} PT. Tristan Utama Solutech. All rights reserved.</p>
          <p>Indonesia · Keamanan Berkelas Enterprise</p>
        </footer>
      </div>
    </section>
  );
}
