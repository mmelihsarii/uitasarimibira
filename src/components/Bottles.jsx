import { useEffect, useRef } from 'react'
import './Bottles.css'

const Bottles = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, { threshold: 0.4 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div className="section-container" id="bottles-section" ref={sectionRef}>
      <div className="col-title">
        <h3>Refugium für Genuss-Suchende</h3>
        <p>Auf unserem Stiegl-Gut Wildshut, dem 1. Biergut Österreichs, betreiben wir als erste Brauerei Österreichs eine eigene Bio-Landwirtschaft.</p>
      </div>
      <div className="col-text">
        <p>Diesem Anspruch werden die ganz besonderen Wildshut Biere in köstlicher Vollendung gerecht. Wir forschen auf dem Gebiet des Humusaufbaus, kultivieren in Vergessenheit geratene Urgetreidesorten.</p>
      </div>
      <div className="col-visual">
        <div className="bottles-wrapper">
          <img src="/src/assets/beer1.png" alt="Left Bottle" className="bottle left" />
          <img src="/src/assets/beer2.png" alt="Center Bottle" className="bottle center" />
          <img src="/src/assets/beer1.png" alt="Right Bottle" className="bottle right" />
        </div>
        <p style={{ fontSize: '0.8rem', textAlign: 'center' }}>
          Mehr Informationen über das 1. Biergut finden Sie unter www.wildshut.at!
        </p>
      </div>
      <div className="btn-container">
        <a href="#" className="sortiment-btn">ZUM SORTIMENT</a>
      </div>
    </div>
  )
}

export default Bottles