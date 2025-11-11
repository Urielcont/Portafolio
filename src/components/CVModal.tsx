import React from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

const CVModal: React.FC<Props> = ({ open, onClose }) => {
  if (!open) return null

  // The PDF was placed in public/ as "Uriel contreras.pdf" — serve with encoded spaces
  const cvPath = '/Uriel%20contreras.pdf'

  return (
    <div className="cv-modal-overlay" role="dialog" aria-modal="true">
      <div className="cv-modal">
        <header className="cv-modal-header">
          <h3>Currículum Vitae — Uriel</h3>
          <button className="cv-modal-close" onClick={onClose} aria-label="Cerrar CV">✕</button>
        </header>
        <div className="cv-modal-body">
          {/* PDF placed in public/ will be loaded here */}
          <iframe src={cvPath} title="CV" />
          <div className="cv-modal-actions">
            <a href={cvPath} download className="btn primary">Descargar CV</a>
            <button className="btn ghost" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CVModal
