import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">Portafolio — Uriel</h1>
        <p className="hero-sub">Construyo interfaces, capturo momentos y comparto proyectos.</p>
        <div className="hero-ctas">
          <a className="btn primary" href="#projects">Ver proyectos</a>
          <a className="btn ghost" href="#photography">Ver fotografía</a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden>
        <div className="floating-code">{`{ console.log('neon vibes') }`}</div>
      </div>
    </section>
  )
}

export default Hero
