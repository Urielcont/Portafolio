import React from 'react'
import reactIcon from '../assets/react.svg'
import tsIcon from '../assets/icons-typescript.png'
import nodeIcon from '../assets/icons-nodejs.png'
import expressIcon from '../assets/icons-express.png'
import pgIcon from '../assets/icons-postgreSql.png'
import cssIcon from '../assets/css.png'
import dockerIcon from '../assets/icons-javascript.png'
import tailwindIcon from '../assets/icons-tailwind.png'

const tools = [
  { id: 't1', name: 'React', desc: 'UI library', icon: reactIcon },
  { id: 't2', name: 'TypeScript', desc: 'Typed JS', icon: tsIcon },
  { id: 't3', name: 'Node.js', desc: 'Backend', icon: nodeIcon },
  { id: 't4', name: 'Express', desc: 'API', icon: expressIcon },
  { id: 't5', name: 'PostgreSQL', desc: 'DB', icon: pgIcon },
  { id: 't6', name: 'CSS', desc: 'Styling', icon: cssIcon },
  { id: 't7', name: 'JavaScript', desc: 'Language', icon: dockerIcon },
  { id: 't8', name: 'Tailwind', desc: 'Styling', icon: tailwindIcon },
]

const Tools: React.FC = () => {
  return (
    <section id="tools" className="section photography">
      <h2 className="section-title">Herramientas</h2>
      <p className="muted">Tecnologías y herramientas que uso como Full Stack Developer.</p>
      <div className="photo-grid">
        {tools.map(t => (
          <figure key={t.id} className="photo-card" title={`${t.name} — ${t.desc}`}>
            <div className="photo-thumb">
              <img src={t.icon} alt={t.name} className="tool-icon" />
            </div>
            <figcaption>
              <div className="tool-name">{t.name}</div>
              <div className="muted" style={{fontSize:'0.75rem'}}>{t.desc}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Tools
