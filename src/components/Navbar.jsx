import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono font-semibold text-xl text-cyan-400 tracking-tight"
        >
          jsr_
        </button>

        <ul className="hidden md:flex gap-8 text-sm text-zinc-400">
          <li>
            <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors">
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-400 hover:text-white p-1"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-5 flex flex-col gap-5 text-sm text-zinc-400">
          <button onClick={() => scrollTo('projects')} className="text-left hover:text-white transition-colors">
            Projects
          </button>
          <button onClick={() => scrollTo('contact')} className="text-left hover:text-white transition-colors">
            Contact
          </button>
        </div>
      )}
    </nav>
  )
}
