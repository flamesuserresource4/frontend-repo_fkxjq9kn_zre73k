import { Code2, PanelsTopLeft, Boxes, LineChart } from 'lucide-react';

const services = [
  {
    icon: PanelsTopLeft,
    title: 'Websites & Landing Pages',
    desc: 'Conversion-focused sites with premium design, blazing performance, and SEO baked in.'
  },
  {
    icon: Code2,
    title: 'Web & Mobile Apps',
    desc: 'Robust, scalable applications with clean APIs and delightful user experience.'
  },
  {
    icon: Boxes,
    title: '3D & Interactive',
    desc: 'Bring your brand to life with Spline 3D, motion, and playful micro-interactions.'
  },
  {
    icon: LineChart,
    title: 'Growth & Optimization',
    desc: 'Analytics, A/B tests, and experimentation to unlock revenue and retention.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            A multidisciplinary studio blending engineering and design to ship category-defining products.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-cyan-300/30 transition-colors">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-300/20">
                  <Icon size={20} />
                </span>
                <h3 className="font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
