const projects = [
  {
    name: 'retrofun',
    description: 'Update this with your project description. What problem does it solve, what tech is it built with?',
    tags: ['Python', 'REST API'],
    url: 'https://github.com/joaosr/retrofun',
  },
  {
    name: 'exposeee',
    description: 'Update this with your project description. What problem does it solve, what tech is it built with?',
    tags: ['React', 'Node.js', 'Full Stack'],
    url: 'https://github.com/joaosr/exposeee-app',
  },
  {
    name: 'sociobooks',
    description: 'Update this with your project description. What problem does it solve, what tech is it built with?',
    tags: ['Django', 'Python', 'Web'],
    url: 'https://github.com/joaosr/sociobooks',
  },
]

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm tracking-[0.2em] mb-2">WORK</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">Projects</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 hover:bg-zinc-800/60 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-mono font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <span className="text-zinc-600 group-hover:text-cyan-400 transition-colors mt-0.5">
                  <ArrowIcon />
                </span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <p className="text-zinc-600 text-sm mt-8">
          More on{' '}
          <a
            href="https://github.com/joaosr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-cyan-400 transition-colors underline underline-offset-4"
          >
            github.com/joaosr
          </a>
        </p>
      </div>
    </section>
  )
}
