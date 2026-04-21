import { useRef, useEffect } from 'react'
import Hero from '../components/Hero'
import Philosophy from '../components/Philosophy'
import Independence from '../components/Independence'
import Tradition from '../components/Tradition'
import './Geschaeftsfuehrung.css'

const Geschaeftsfuehrung = () => {
  const bottlesSectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, { threshold: 0.4 })

    if (bottlesSectionRef.current) {
      observer.observe(bottlesSectionRef.current)
    }

    return () => {
      if (bottlesSectionRef.current) {
        observer.unobserve(bottlesSectionRef.current)
      }
    }
  }, [])

  return (
    <div className="geschaeftsfuehrung-page">
      <Hero />
      <Philosophy />
      <Independence />
      <Tradition />
      
      {/* Management Section */}
      <section className="management-section">
        <div className="mgmt-content">
          <h4>Geschäftsführung</h4>
          <h2>Bei Stiegl steht der Mensch im Mittelpunkt</h2>
          <p>Die Geschäftsführung des Familienunternehmens Stiegl bildet ein Kleeblatt aus erfahrenen Führungskräften...</p>
        </div>
        <div className="mgmt-image">
          <img src="https://picsum.photos/seed/stiegl-team/800/600" alt="Management Team" />
        </div>
      </section>

      {/* Transition Wrapper */}
      <div className="transition-wrapper">
        <div className="wildshut-logo">
          STIEGL-GUT<br />WILDSHUT
        </div>
      </div>

      {/* Hero Container */}
      <div className="hero-container">
        <img src="https://picsum.photos/seed/stiegl-gut/1920/1080" className="hero-bg" alt="Wildshut Gut" />
        <div className="overlap-card">
          <h4>Stiegl-Gut Wildshut</h4>
          <h3>Ein Liebesbeweis an unser Bier</h3>
          <p>Das Stiegl-Gut Wildshut ist eine Kombination aus Gutshof und Brauerei...</p>
          <a href="#" className="website-btn">ZUR WEBSITE</a>
        </div>
      </div>

      {/* Red Band */}
      <div className="red-band">
        <span className="red-band-text">Produkte & Geschenkideen</span>
        <a href="#" className="shop-btn">IM SHOP KAUFEN</a>
      </div>

      {/* Bottles Section */}
      <div className="section-container-bottles" id="bottles-section" ref={bottlesSectionRef}>
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
    </div>
  );
};

export default Geschaeftsfuehrung;
