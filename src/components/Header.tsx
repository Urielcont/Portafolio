import React from 'react'

type HeaderProps = {
  onOpenCV?: () => void
}

const Header: React.FC<HeaderProps> = ({ onOpenCV }) => {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="logo-glow">URIEL</div>
        <div className="brand-sub">Full Stack Developer</div>
      </div>
      <nav className="nav">
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#tools">Herramientas</a>
        <button className="cv-btn" onClick={onOpenCV} aria-label="Ver CV">CV</button>
      </nav>
    </header>
  )
}

export default Header
