import { motion } from 'motion/react';
import './RegionalePartnerschaften.css';

const RegionalePartnerschaften = () => {
  return (
    <div className="regionale-page">
      {/* Hero Section */}
      <section className="regionale-hero">
        <div 
          className="regionale-hero-bg"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1527504448761-5182c14bbad7?auto=format&fit=crop&q=80&w=2400')` 
          }}
        >
          <div className="regionale-hero-overlay" />
          
          <div className="regionale-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="regionale-hero-title-wrapper"
            >
              <h1 className="regionale-hero-title">
                <span className="regionale-hero-title-line">Regionale</span>
                <span className="regionale-hero-title-line">Partnerschaften</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="regionale-hero-subtitle">
                Kooperationen & Bündnisse
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wertschöpfung Content Section */}
      <section className="regionale-content">
        <div className="regionale-container">
          <div className="regionale-header">
            <span className="regionale-label">Wertschöpfung</span>
            <h2 className="regionale-title">
              Wir nehmen alles<br />selbst in die Hand.
            </h2>
          </div>

          <div className="regionale-text-grid">
            <div className="regionale-text-col">
              <p>
                Wir sind stolz darauf, einen Fußabdruck zu hinterlassen. Weil jeder unserer Schritte 
                nachhaltig und zu Ende gedacht ist. Von der Auswahl der Rohstoffe über die Produktion 
                bis hin zur Verpackung – wir übernehmen Verantwortung für die gesamte Wertschöpfungskette.
              </p>
              <p className="regionale-text-bold">
                Ressourcen schonen, faire Arbeitsbedingungen schaffen, sich Zeit nehmen, die Vielfalt 
                der Natur erhalten, qualitätsvoll und regional erzeugen.
              </p>
            </div>

            <div className="regionale-text-col">
              <p>
                Damit gelingt kreatives, offenes und verantwortungsvolles Handeln im ökologischen und 
                sozialen Bereich. Wir arbeiten eng mit regionalen Partnern zusammen, die unsere Werte teilen.
              </p>
              <p>
                Wir kümmern uns um den Boden und forschen, wie wir ihn fruchtbarer machen können. 
                Unsere Landwirte sind dabei unsere wichtigsten Partner.
              </p>
              <p>
                Neben der Sonne nutzen wir auch die Kraft des Wassers. Unsere Wasserkraftwerke 
                versorgen die Brauerei mit sauberer Energie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slow Food & Einfach Slow 3-Column Section */}
      <section className="regionale-slow-food">
        <div className="regionale-slow-food-container">
          <div className="regionale-slow-food-grid">
            {/* Column 1: Typography */}
            <div className="regionale-slow-food-col">
              <div className="regionale-slow-food-header">
                <span className="regionale-slow-food-label">Einfach Slow</span>
                <h2 className="regionale-slow-food-title">Nur ned hudeln.</h2>
              </div>
              <div className="regionale-slow-food-text">
                <p>
                  Wir setzen auf langsame Gärung und schonende Reifung statt auf schnelle Brauverfahren. 
                  Deshalb tragen wir seit 2013 als eine von nur vier Brauereien in Österreich das{' '}
                  <span className="regionale-slow-food-bold">Slow Brewing-Gütesiegel</span>, eines der 
                  härtesten Qualitätssiegel am internationalen Biermarkt. Wir sind Partner von{' '}
                  <span className="regionale-slow-food-bold">Slow Food Salzburg</span>, denn die europaweite 
                  Slow Food-Bewegung steht für...
                </p>
              </div>
            </div>

            {/* Column 2: Logo & Text */}
            <div className="regionale-slow-food-col">
              <div className="regionale-slow-food-header">
                <div className="regionale-slow-food-logo">
                  <svg width="60" height="60" viewBox="0 0 100 100" fill="#E31A1C">
                    <path d="M50 20 C20 20 5 45 5 65 C5 85 25 90 45 80 C65 70 95 60 95 35 C95 10 70 5 50 20 Z" />
                  </svg>
                  <div className="regionale-slow-food-logo-text">
                    <span className="regionale-slow-food-logo-title">Slow Food</span>
                    <span className="regionale-slow-food-logo-subtitle">Österreich</span>
                  </div>
                </div>
              </div>
              <div className="regionale-slow-food-text">
                <p>
                  eine verantwortungsvolle Landwirtschaft, für eine artgerechte Viehzucht, das traditionelle 
                  Lebensmittelhandwerk und die Bewahrung der regionalen Geschmacksvielfalt. Rund um unsere 
                  Brauerei in Salzburg liefern wir unser Bier noch mit unseren{' '}
                  <span className="regionale-slow-food-bold">Tigenoriker-Pferden</span> auf der Kutsche aus. 
                  Und weil uns wichtig ist, Tradition und Moderne...
                </p>
              </div>
            </div>

            {/* Column 3: Image & Text */}
            <div className="regionale-slow-food-col">
              <div className="regionale-slow-food-header">
                <div className="regionale-slow-food-image">
                  <img 
                    src="https://images.unsplash.com/photo-1541873676-a18139722920?auto=format&fit=crop&q=80&w=1200" 
                    alt="Stiegl Draft Horses"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="regionale-slow-food-text">
                <p>
                  miteinander zu verbinden, sind wir auch die erste Brauerei Österreichs, die ihr Bier auch 
                  per E-LKW ausfährt. Für unsere eigenen E-PKW sowie für die Besucher:innen der Brauwelt und 
                  des Bierguts gibt es <span className="regionale-slow-food-bold">kostenlose E-Tankstellen</span>. 
                  Damit wir Ressourcen schonen, bekommen unsere Stiegler:innen regelmäßige Spritspartrainings.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="regionale-slow-food-button-wrapper">
              <button className="regionale-slow-food-button">MEHR ERFAHREN</button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner/Cooperation List Section */}
      <section className="regionale-partners">
        <div className="regionale-partners-container">
          {/* Partner items will be added here */}
        </div>
      </section>

      {/* Z-Pattern Layout (Studie & Sustainability Report) */}
      <section className="regionale-study">
        <div className="regionale-study-container">
          {/* Block 1: Studie (Text Left, Image Right) */}
          <div className="regionale-study-block">
            <div className="regionale-study-text">
              <div className="regionale-study-header">
                <span className="regionale-study-label">Studie</span>
                <h2 className="regionale-study-title">
                  Mehr zum Thema<br />Nachhaltigkeit
                </h2>
              </div>
              <div className="regionale-study-description">
                <p>
                  Unsere Wesentlichkeitsmatrix zeigt die für uns relevanten Nachhaltigkeitsthemen 
                  und deren Bedeutung für unsere Stakeholder. Diese Matrix hilft uns, unsere 
                  Nachhaltigkeitsstrategie kontinuierlich zu verbessern und zu fokussieren.
                </p>
              </div>
            </div>

            <div className="regionale-study-visual">
              <div className="regionale-study-image-wrapper">
                <div className="regionale-study-image">
                  <img 
                    src="https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&q=80&w=1200" 
                    alt="Wesentlichkeitsmatrix Infographic"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="regionale-study-download">
                <span className="regionale-study-download-label">Download PDF:</span>
                <div className="regionale-study-download-item">
                  <span className="regionale-study-download-text">
                    Nachhaltigkeitsbericht Wesentlichkeitsmatrix
                  </span>
                  <div className="regionale-study-download-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Vielfalt (Image Left, Text Right) */}
          <div className="regionale-study-block regionale-study-block-reverse">
            <div className="regionale-study-visual">
              <div className="regionale-study-image-wrapper regionale-study-image-wrapper-reverse">
                <div className="regionale-study-image">
                  <img 
                    src="https://images.unsplash.com/photo-1541873676-a18139722920?auto=format&fit=crop&q=80&w=1200" 
                    alt="Vielfalt Magazine Cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="regionale-study-text">
              <div className="regionale-study-header">
                <span className="regionale-study-label">Nachhaltigkeitsbericht</span>
                <h2 className="regionale-study-title">
                  Wir tragen<br />Verantwortung
                </h2>
              </div>
              <div className="regionale-study-description">
                <p>
                  Im Rahmen unserer Nachhaltigkeitsstrategie setzen wir uns langfristige Ziele 
                  und planen unsere Maßnahmen unter dem Gesichtspunkt „Die Qualität unserer Ziele 
                  bestimmt die Qualität unserer Zukunft".
                </p>
              </div>
              <button className="regionale-study-button">DOWNLOAD</button>
            </div>
          </div>
        </div>

        {/* Bottom Staircase Shape Divider */}
        <div className="regionale-study-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="regionale-study-divider-svg" fill="#1a1a1a">
            <path d="M1200 120L1200 0L1100 0L1100 10L1000 10L1000 20L900 20L900 30L800 30L800 40L700 40L700 50L600 50L600 60L500 60L500 70L400 70L400 80L300 80L300 90L200 90L200 100L100 100L100 110L0 110L0 120Z" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default RegionalePartnerschaften;
