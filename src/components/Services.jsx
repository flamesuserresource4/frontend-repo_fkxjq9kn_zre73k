import { Shield, Server, Code2, Lock } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Cybersecurity & Compliance',
    desc: 'Penilaian risiko, hardening, SOC, SIEM, dan implementasi kontrol keamanan berbasis standar (ISO 27001, NIST).'
  },
  {
    icon: Server,
    title: 'Infrastructure & Cloud',
    desc: 'Perancangan, migrasi, dan pengelolaan cloud/hybrid dengan fokus pada keandalan, performa, dan biaya.'
  },
  {
    icon: Code2,
    title: 'Custom Systems & Integration',
    desc: 'Pengembangan aplikasi, integrasi API, dan automasi proses bisnis yang aman dan skalabel.'
  },
  {
    icon: Lock,
    title: 'Managed Security Services',
    desc: 'Monitoring 24/7, incident response, patch management, dan continuous improvement keamanan.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Solusi Terintegrasi</h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            Kami membantu organisasi mengubah tantangan TI menjadi keunggulan kompetitif melalui pendekatan end-to-end.
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
