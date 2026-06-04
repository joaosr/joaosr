export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-600 text-sm">
        <span className="font-mono text-cyan-400/50 font-semibold">jsr_</span>
        <span>© {new Date().getFullYear()} João Soares</span>
      </div>
    </footer>
  )
}
