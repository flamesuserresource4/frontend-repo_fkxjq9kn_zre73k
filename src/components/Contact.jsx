import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something remarkable</h2>
            <p className="mt-3 text-slate-400 max-w-xl">Tell us about your goals, timeline, and budget. We’ll propose a high-impact plan to get you there.</p>

            <div className="mt-8 space-y-3 text-slate-300">
              <div className="flex items-center gap-3"><Mail size={18} className="text-cyan-300" /> hello@solutech.studio</div>
              <div className="flex items-center gap-3"><Phone size={18} className="text-cyan-300" /> +62 812 3456 7890</div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="bg-slate-800/40 rounded-2xl p-6 border border-white/10">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300">Name</label>
                <input className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="you@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300">Project Scope</label>
              <select className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option>Website</option>
                <option>Web App</option>
                <option>Mobile App</option>
                <option>3D/Interactive</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Tell us about your project..." />
            </div>
            <button className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-slate-900 font-semibold hover:-translate-y-0.5 transition-transform">
              <Send size={16} /> Request proposal
            </button>
          </form>
        </div>

        <footer className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Solutech Studio. All rights reserved.</p>
          <p>Built with care in Indonesia.</p>
        </footer>
      </div>
    </section>
  );
}
