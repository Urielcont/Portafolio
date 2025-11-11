import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Tools from './components/Photography'
import About from './components/About'
import Footer from './components/Footer'
import CVModal from './components/CVModal'

function App() {
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <div className="portfolio-root">
      <Header onOpenCV={() => setCvOpen(true)} />
      <main>
        <About />
        <Hero />
        <Projects />
        <Tools />
      </main>
      <Footer />
      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  )
}

export default App
