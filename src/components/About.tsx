import React from 'react'

type CareerItem = {
  id: string
  role: string
  company: string
  period: string
  desc: string
}

const career: CareerItem[] = [
  { id: 'c1', role: 'Full Stack Developer', company: 'Acme Labs', period: '2022 - presente', desc: 'Trabajo en proyectos web escalables con React y Node.js, enfocándome en rendimiento y arquitectura.' },
  { id: 'c2', role: 'Frontend Engineer', company: 'Studio Web', period: '2019 - 2022', desc: 'Diseño e implementación de interfaces accesibles y componentes reutilizables.' },
  { id: 'c3', role: 'Junior Developer', company: 'StartupX', period: '2017 - 2019', desc: 'Construcción de MVPs y APIs REST, despliegues en Docker y CI/CD.' },
]

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">Sobre mí</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>Hola, soy Uriel — soy desarrollador Full Stack con foco en aplicaciones web modernas. Me especializo en React, TypeScript y arquitecturas de backend con Node.js.</p>
          <p>Mi objetivo es crear productos robustos que ofrezcan una gran experiencia de usuario sin sacrificar rendimiento o mantenibilidad.</p>
        </div>
        <div className="about-stats">
          <div className="stat"><strong>6+</strong><span> años codificando</span></div>
          <div className="stat"><strong>50+</strong><span> proyectos</span></div>
          <div className="stat"><strong>--</strong><span> certificaciones</span></div>
        </div>
      </div>

      <div className="career" style={{marginTop: '1rem'}}>
        <h3 style={{marginBottom:'.6rem', color:'var(--neon-cyan)'}}>Carrera profesional</h3>
        <div className="career-list">
          {career.map(item => (
            <div key={item.id} className="career-item" style={{padding:'.8rem',borderRadius:8,background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',marginBottom:'.6rem'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div>
                  <strong>{item.role}</strong> <span style={{color:'var(--muted)',marginLeft:8}}>@ {item.company}</span>
                </div>
                <div style={{color:'var(--muted)'}}>{item.period}</div>
              </div>
              <p style={{marginTop:'.5rem',color:'var(--muted)'}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
