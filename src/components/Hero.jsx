export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-scroll"
        style={{ backgroundImage: "url('/img/bg-masthead.jpg')" }}
      />
      <div className="absolute inset-0 bg-zinc-950/80" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-3xl w-full">
        <p className="font-mono text-cyan-400 text-sm tracking-[0.2em] mb-5">HELLO, WORLD</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          Hi, I'm <span className="text-cyan-400">João</span>.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light mb-6">
          Software Developer
        </p>
        <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
          7+ years of experience building across platforms, based in Berlin.
          Passionate about open data, GIS, and writing software that matters.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-cyan-400 text-zinc-950 font-semibold px-7 py-3 rounded-lg hover:bg-cyan-300 transition-colors"
          >
            Get in touch
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-zinc-700 text-zinc-300 font-medium px-7 py-3 rounded-lg hover:border-zinc-500 hover:text-white transition-colors"
          >
            See my work
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 text-xs font-mono">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  )
}
