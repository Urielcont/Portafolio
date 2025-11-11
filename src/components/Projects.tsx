import React from 'react'
import img1 from '../assets/Aquaclyva-Proyecto1.png'
import img2 from '../assets/El-Profe-proyecto2.png'

type Project = {
  id: string
  title: string
  desc: string
  tags: string[]
  img?: string
}

const sampleProjects: Project[] = [
  { id: 'p1', title: 'Aquaclyva', desc: 'Plataforma de gestión acuícola con panel de control en tiempo real.', tags: ['React', 'JSX', 'Node.js', 'MongoDB', 'Express'], img: img1 },
  { id: 'p2', title: 'El Profe', desc: 'Plataforma educativa con seguimiento de estudiantes.', tags: ['PHP', 'HTML5', 'CSS3', 'JS', 'MySQL'], img: img2 },
//   { id: 'p3', title: 'Demo WebGL', desc: 'Experiencia 3D pequeña para demo de habilidades gráficas.', tags: ['Three.js'] },
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-grid">
        {sampleProjects.map(p => (
          <article key={p.id} className="project-card">
            <div className="card-visual">
              {p.img ? <img src={p.img} alt={p.title} className="project-thumb" /> : null}
            </div>
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
