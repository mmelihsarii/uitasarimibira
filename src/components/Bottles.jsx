import { useEffect, useRef } from 'react'
import './Bottles.css'

const Bottles = () => {
  const bottlesRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, { threshold: 0.3 })

    if (bottlesRef.current) {
      observer.observe(bottlesRef.current)
    }

    return () => {
      if (bottlesRef.current) {
        observer.unobserve(bottlesRef.current)
      }
    }
  }, [])

  return (
    <section className="wildshut-section">
      {/* Hero Image */}
      <div className="wildshut-hero">
        <img 
          src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80&w=2000" 
          alt="Stiegl-Gut Wildshut Landscape" 
          className="wildshut-hero-image"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Solid Red Bar */}
      <div className="wildshut-red-bar">
        <div className="red-bar-content">
          <p className="red-bar-text">Produkte & Geschenkideen</p>
          <a href="#" className="red-bar-button">IM SHOP KAUFEN</a>
        </div>
      </div>

      {/* Overlapping White Card */}
      <div className="wildshut-card">
        <span className="card-label">STIEGL-GUT WILDSHUT</span>
        <h2 className="card-title">Ein Liebesbeweis an unser Bier</h2>
        <p className="card-description">
          Das Stiegl-Gut Wildshut ist eine Kombination aus Gutshof und Brauerei 
          nahe der Salzburger Landesgrenze und das 1. Biergut Österreichs.
        </p>
        <a href="#" className="card-button">ZUR WEBSEITE</a>
      </div>

      {/* Product Section */}
      <div className="wildshut-products">
        <div className="products-content">
          {/* Left: Text Content */}
          <div className="products-text">
            <h3>Refugium für Genuss-Suchende</h3>
            <div className="text-columns">
              <div className="text-column">
                <p>
                  Auf unserem Stiegl-Gut Wildshut, dem 1. Biergut Österreichs, betreiben wir 
                  als erste Brauerei Österreichs eine eigene Bio-Landwirtschaft. Wir kümmern 
                  uns um die Böden, forschen auf dem Gebiet des Humusaufbaus, kultivieren in 
                  Vergessenheit geratene Urgetreidesorten, vermehren alte Hopfensorten und 
                  brauen in Österreich selbst und in über daraus hinaus unsere Wildshut 
                  Bio-Spezialitäten. Und so entsteht über die Ernte Salzburg, wie entdecken 
                  wir uns.
                </p>
              </div>
              <div className="text-column">
                <p>
                  Diesem Anspruch werden die ganz besonderen Wildshut Biere in köstlicher 
                  Vollendung gerecht. Und natürlich können die Erzeugnisse aus dem Stiegl-Gut 
                  Wildshut auch in Salzburg Maxglan der Stieglbrauerei zu Salzburg. Rund 30 
                  Kilometer nördlich der Stadt Salzburg – dem im Salzburg übernachten und 
                  Saigurn zusammentreffen – wurde 2012 das „1. Biergut Österreichs" eröffnet. 
                  Selbstverständlich kann das idyllische Refugium auch von Wildshut-Liebhabern 
                  besucht werden und man kann Wildshut-Spezialitäten.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Product Image */}
          <div className="products-visual" ref={bottlesRef}>
            <div className="products-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=800" 
                alt="Wildshut Products" 
                className="products-image"
                referrerPolicy="no-referrer"
              />
              <div className="image-reflection"></div>
            </div>
            <p className="products-info">
              Mehr Informationen über das 1. Biergut finden Sie unter www.wildshut.at!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bottles
