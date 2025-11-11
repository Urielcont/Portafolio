import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">Sobre mí</h2>

      <div className="about-grid">
        <div className="about-text">
          <h3>Perfil</h3>
          <p>
            Apasionado estudiante de Tecnologías de la Información enfocado en el desarrollo de software. Versátil en
            el entendimiento tanto del frontend como del backend. Me encanta explorar JavaScript, aunque también manejo
            otros lenguajes como Python y PHP. Mis frameworks preferidos incluyen ReactJS, React Native y Django. Estoy
            en constante búsqueda de oportunidades para aprender y profundizar en nuevas tecnologías sin temor.
          </p>

          <h3 style={{marginTop:'.8rem'}}>Educación</h3>
          <p className="muted">Universidad Tecnológica de Durango — 2022 - presente</p>

          <h3 style={{marginTop:'.8rem'}}>Habilidades técnicas</h3>
          <ul>
            <li>Trabajo en equipo</li>
            <li>Comunicación efectiva</li>
            <li>Pensamiento crítico</li>
            <li>JavaScript, Python, PHP</li>
            <li>ReactJS, React Native, Django</li>
          </ul>
        </div>

        <div className="about-stats">
          <div className="stat"><strong>2024</strong><span> Periodo activo</span></div>
          <div className="stat"><strong>Proyectos</strong><span> Aquaclyva, El Profe, Demo</span></div>
        </div>
      </div>

      <div className="career" style={{marginTop: '1rem', width: '100%', maxWidth: 1100}}>
        <h3 style={{marginBottom:'.6rem', color:'var(--neon-cyan)'}}>Experiencia</h3>

        <div className="career-list">
          <div className="career-item" style={{padding:'.8rem',borderRadius:8,background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',marginBottom:'.6rem'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <strong>Software Developer</strong> <span style={{color:'var(--muted)',marginLeft:8}}>@ Registro Civil de Durango</span>
              </div>
              <div style={{color:'var(--muted)'}}>Abril 2024 - Agosto 2024</div>
            </div>
            <p style={{marginTop:'.5rem',color:'var(--muted)'}}>
              Desarrollo de un sistema para la administración del registro civil en la Coordinación de Oficinas de Durango.
              Desarrollo de aplicación de escritorio con ElectronJS.
            </p>
          </div>

          <div className="career-item" style={{padding:'.8rem',borderRadius:8,background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',marginBottom:'.6rem'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <strong>Project Management &amp; Software Developer</strong> <span style={{color:'var(--muted)',marginLeft:8}}>@ El Profe</span>
              </div>
              <div style={{color:'var(--muted)'}}>Enero 2024 - Abril 2024</div>
            </div>
            <p style={{marginTop:'.5rem',color:'var(--muted)'}}>
              Proyecto web con conexión a base de datos para la gestión de una imprenta. Implementación de landing page para
              promoción del negocio.
            </p>
          </div>
        
          <div className="career-item" style={{padding:'.8rem',borderRadius:8,background:'linear-gradient(180deg, rgba(255,255,255,0.01), transparent)',marginBottom:'.6rem'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <strong>Project Management &amp; Software Developer</strong> <span style={{color:'var(--muted)',marginLeft:8}}>@ Aquaclyva</span>
              </div>
              <div style={{color:'var(--muted)'}}>IoT Project</div>
            </div>
            <p style={{marginTop:'.5rem',color:'var(--muted)'}}>
              Proyecto IoT para abordar contabilidad y control de calidad de agua en una planta purificadora. Implementación de
              aplicación web y móvil con ReactJS y React Native para la lectura de datos de sensores usando un microcontrolador Raspberry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
