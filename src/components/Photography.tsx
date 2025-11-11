import React from 'react'

const tools = [
  { id: 't1', name: 'React', desc: 'UI library', color: '#61dafb' },
  { id: 't2', name: 'TypeScript', desc: 'Typed JS', color: '#3178c6' },
  { id: 't3', name: 'Node.js', desc: 'Backend', color: '#68a063' },
  { id: 't4', name: 'Express', desc: 'API', color: '#000000' },
  { id: 't5', name: 'PostgreSQL', desc: 'DB', color: '#336791' },
  { id: 't6', name: 'Vite', desc: 'Build tool', color: '#646cff' },
  { id: 't7', name: 'Docker', desc: 'Containers', color: '#2496ed' },
  { id: 't8', name: 'Tailwind / CSS', desc: 'Styling', color: '#38b2ac' },
]

const Tools: React.FC = () => {
  return (
    <section id="tools" className="section photography">
      <h2 className="section-title">Herramientas</h2>
      <p className="muted">Tecnologías y herramientas que uso como Full Stack Developer.</p>
      <div className="photo-grid">
        {tools.map(t => (
          <figure key={t.id} className="photo-card" title={`${t.name} — ${t.desc}`}>
            <div className="photo-thumb" style={{ background: `linear-gradient(135deg, ${t.color}22, rgba(255,255,255,0.02))` }}>
              <div className="camera-emoji">{t.name[0]}</div>
            </div>
            <figcaption>{t.name}<div className="muted" style={{fontSize:'0.75rem'}}>{t.desc}</div></figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Tools
