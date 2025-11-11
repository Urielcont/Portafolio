import React from 'react'

type Project = {
  id: string
  title: string
  desc: string
  tags: string[]
}

const sampleProjects: Project[] = [
  { id: 'p1', title: 'Dashboard Neon', desc: 'UI admin con gráficas en tiempo real.', tags: ['React', 'TypeScript'] },
  { id: 'p2', title: 'Tienda Minimal', desc: 'E-commerce con animaciones suaves y microinteracciones.', tags: ['Vite', 'CSS'] },
  { id: 'p3', title: 'Juego WebGL', desc: 'Experiencia 3D pequeña para demo de habilidades gráficas.', tags: ['Three.js'] },
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-grid">
        {sampleProjects.map(p => (
          <article key={p.id} className="project-card">
            <div className="card-visual" />
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
