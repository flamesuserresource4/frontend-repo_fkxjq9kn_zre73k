import { Star } from 'lucide-react';

const projects = [
  {
    title: 'AI SaaS Dashboard',
    tag: 'Product',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Ecommerce Redesign',
    tag: 'Commerce',
    img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: '3D Interactive Landing',
    tag: 'Experience',
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
            <p className="mt-3 text-slate-400 max-w-xl">A peek into recent builds. High polish, tight UX, and measurable outcomes.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-amber-300/90">
            <Star size={16} /> <span className="text-sm">Clients rate us 5.0</span>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <article key={p.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="p-5">
                <span className="text-xs uppercase tracking-wider text-slate-400">{p.tag}</span>
                <h3 className="mt-1 font-semibold text-white">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
