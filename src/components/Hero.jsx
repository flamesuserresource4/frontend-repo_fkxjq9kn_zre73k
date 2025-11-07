import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] max-w-5xl rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="py-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-200 ring-1 ring-white/20">
            Modern Tech Studio
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Build immersive digital experiences that convert
          </h1>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed">
            We craft fast, scalable websites, apps, and 3D interactions for ambitious brands. From idea to launch, our team delivers premium results with measurable impact.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-full bg-white text-slate-900 font-semibold shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 transition-transform">Start a project</a>
            <a href="#work" className="px-5 py-3 rounded-full bg-slate-800 text-white font-semibold ring-1 ring-white/10 hover:bg-slate-700 transition-colors">See our work</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
            <div>
              <span className="text-white font-semibold">50+ </span>projects shipped
            </div>
            <div>
              <span className="text-white font-semibold"><span className="align-super text-[10px]">$</span>10k+ </span>value builds
            </div>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-cyan-500/10">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
