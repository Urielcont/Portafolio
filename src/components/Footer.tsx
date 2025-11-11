import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div>© {new Date().getFullYear()} Uriel • Creado con ❤️ y TypeScript</div>
      <div className="socials"> 
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer
