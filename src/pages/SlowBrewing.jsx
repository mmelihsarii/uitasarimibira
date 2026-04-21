import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { StieglLogo } from '../components/StieglLogo';
import './SlowBrewing.css';

const SlowBrewing = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="slow-brewing-page">
      {/* Top Header Bar */}
      <div className="top-red-bar" />
      
      {/* Stiegl Logo on overlapping tag */}
      <div className="logo-overlay">
        <StieglLogo className="logo-scale" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="slow-hero">
        {/* Full-width Landscape Image */}
        <img 
          src="https://images.unsplash.com/photo-1473076588654-da92257d077b?auto=format&fit=crop&q=80&w=2400" 
          alt="Golden wheat field at sunrise" 
          className="slow-hero-image"
          referrerPolicy="no-referrer"
        />
        
        {/* Sun Glow Overlay */}
        <div className="sun-glow-overlay" />
        
        {/* Hero Text Overlay Content */}
        <div className="slow-hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="slow-hero-text"
          >
            <div className="slow-hero-title-box">
              <h1 className="slow-hero-title">Slow Brewing</h1>
            </div>
            <p className="slow-hero-subtitle">
              So viel Zeit muss sein.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- BOTTOM INFORMATIONAL SECTION --- */}
      <section className="slow-info-section">
        <div className="slow-info-grid">
          {/* Column 1: Slow Brewing Seal */}
          <div className="slow-info-column">
            <div className="slow-seal">
              <svg viewBox="0 0 200 200" className="slow-seal-svg">
                <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="1" />
                <text x="100" y="70" textAnchor="middle" className="seal-text-small">Zertifizierte</text>
                <text x="100" y="105" textAnchor="middle" className="seal-text-large">Slow</text>
                <text x="100" y="130" textAnchor="middle" className="seal-text-medium">Brewing</text>
                <text x="100" y="160" textAnchor="middle" className="seal-text-small">Spitzenqualität</text>
              </svg>
            </div>
            
            <div className="slow-info-text">
              <span className="subhead">Das härteste Gütesiegel der Welt</span>
              <h2 className="slow-info-title">Heute genießen wir slow</h2>
              <p className="slow-info-description">
                Schon ein altes Sprichwort sagt „Gut Ding braucht Weile" und das gilt natürlich auch 
                für gutes Bier. Deshalb geben wir unseren Bieren die Zeit, die sie brauchen.{' '}
                <strong>Wir verwenden ausschließlich Rohstoffe, die fair und nachhaltig produziert 
                werden.</strong> Das ist unsere Entscheidung für Qualität und gegen Produktionsdruck. 
                So entstehen Bierspezialitäten mit echtem brauwissenschaftlichem Know-how.
              </p>
            </div>
          </div>

          {/* Column 2: Hourglass Icon */}
          <div className="slow-info-column">
            <div className="hourglass-wrapper">
              <div className="hourglass-circle">
                <svg 
                  width="48" 
                  height="48" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#D4AF37" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 22h14" />
                  <path d="M5 2h14" />
                  <path d="M17 22c0-3.3-3.1-6-5-6s-5 2.7-5 6" />
                  <path d="M17 2c0 3.3-3.1 6-5 6s-5-2.7-5-6" />
                </svg>
                <div className="hourglass-ring" />
              </div>
            </div>
            
            <div className="slow-info-text">
              <span className="subhead">Bewusst langsam</span>
              <h2 className="slow-info-title">Faktor Zeit für Bierqualität</h2>
              <p className="slow-info-description">
                Und was bringt uns Slow Brewing? Durch langsames, schonendes Brauen entsteht ein 
                ausgewogenes Bier mit einem <strong>besonders runden und herausragenden Geschmack 
                und besserer Bekömmlichkeit.</strong> Um das volle Aromaprofil zu erhalten, 
                verzichten Slow Brewer auch ganz bewusst darauf, die Biere nachträglich zu verdünnen. 
                So können wir den reinen Geschmack natürlicher Rohstoffe mit gutem Gewissen genießen.
              </p>
            </div>
          </div>

          {/* Column 3: Interactive Beer Duo */}
          <div className="beer-duo-column">
            <div className="beer-duo-background">
              <svg width="200" height="400" viewBox="0 0 100 200" className="beer-duo-svg">
                <path 
                  d="M50,200 Q40,150 60,100 Q80,50 50,0" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                />
                <path 
                  d="M45,190 Q35,140 55,90 Q75,40 45,0" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                />
              </svg>
            </div>
            
            <div className="beer-duo-container">
              <motion.div 
                initial={{ x: 0 }}
                whileHover={{ x: -60 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="beer-glass"
              >
                <img 
                  src="https://images.unsplash.com/photo-1571767490141-236b2f44009d?auto=format&fit=crop&q=80&w=600" 
                  alt="Glass" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
              
              <motion.div 
                initial={{ x: 0 }}
                whileHover={{ x: 60 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="beer-bottle"
              >
                <img 
                  src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600" 
                  alt="Bottle" 
                  referrerPolicy="no-referrer" 
                />
              </motion.div>
            </div>
            
            <div className="beer-duo-gradient" />
          </div>
        </div>
      </section>

      {/* Hero Video Section */}
      <section className="hero-video-section">
        <video 
          ref={videoRef}
          id="slowBrewingVideo"
          loop
          poster="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=1920"
        >
          <source 
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
            type="video/mp4"
          />
        </video>

        <div className="play-btn" onClick={togglePlay}>
          {isPlaying ? '⏸' : '▶'}
        </div>
      </section>

      {/* Transparency Section with Red Strip and Floating Card */}
      <section className="transparency-wrapper">
        <div className="transparency-container">
          <div className="red-strip">
            <div className="red-strip-content">
              <p className="strip-text">
                Um das Konzept zu vergeben, prüft das Institut mit unabhängigen Experten nicht nur die Qualität des Bieres, sondern auch die Brauerei, die Braukunst aus Österreichischen Privatbrauereien gebraut wurde.
              </p>
              <a href="#" className="strip-button">SLOW BREWING INSTITUT</a>
            </div>
          </div>
          
          <div className="floating-card">
            <span className="card-label">Nachhaltige Produktion</span>
            <h2 className="card-title">Unser Anspruch ist hoch</h2>
            <p className="card-text">
              Wir sind stolz darauf, seit 2013 – als eine von nur vier ausgezeichneten Brauereien in ganz Österreich – das Qualitätssiegel "Slow Brewing" tragen zu dürfen.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Section - Similar to Goldbräu */}
      <section className="quality-section">
        <div className="quality-container">
          {/* Left Column - Text Content */}
          <div className="quality-text">
            <span className="quality-label">Qualität statt Quantität</span>
            <h2 className="quality-title">
              Geschmack geht<br />
              keine Kompromisse ein
            </h2>
            
            <div className="quality-columns">
              <div className="quality-column">
                <p>
                  Das Stiegl-Goldbräu, wird seit mittlerweile über <strong>110 Jahren</strong> mit 
                  12 Grad Stammwürze gebraut. Diese ist ein wesentliches Kriterium für den Geschmack 
                  des Bieres, je höher die Stammwürze, desto runder, voller und weicher präsentiert 
                  sich der Körper des Bieres.
                </p>
                <p>
                  Deshalb gehen wir in punkto Stammwürze von <strong>keiner Kompromisse</strong> ein, 
                  und das ist grundlegend. Die Entscheidung kann man nicht nur schmecken, sondern auch 
                  sehen: Jedes Glas Stiegl-Goldbräu mit seiner speziellen, herrlich goldenen Farbe 
                  spiegelt diese hohe Qualität ganzheitlich wider.
                </p>
              </div>
              
              <div className="quality-column">
                <p>
                  Und steht man von Kritzerzeiten wie dem 11. Weltkrieg ab, wurde das „Stiegl-Goldbräu" 
                  seit seiner Markteinführung 1912 immer mit ganzen 12 Grad Stammwürze gebraut.
                </p>
                <p>
                  Das ist nicht selbstverständlich. Laut europäischen Bestimmungen darf Märzenbier 
                  auch mit weniger als 12 Grad Stammwürze eingebraut werden. Ein Großteil der Brauereien 
                  in Österreich haben diese deshalb gesenkt, was definitiv zu Lasten der Qualität geht.
                </p>
                <p className="quality-highlight">
                  Der Vorteil von weniger Stammwürze: weniger Steuerkosten und geringere Produktionskosten.
                </p>
              </div>
            </div>
            
            <a href="#" className="quality-button">ZUM SORTIMENT</a>
          </div>

          {/* Right Column - Beer Bottle Image */}
          <div className="quality-visual">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="quality-bottle"
            >
              <img 
                src="https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=800" 
                alt="Stiegl Goldbräu" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cookie Icon */}
      <div className="cookie-icon-fixed">
        <div className="cookie-icon-circle">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="2" opacity="0.3"/>
            <path 
              d="M16 4C9.37 4 4 9.37 4 16C16 28 22.3 28 28 16" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SlowBrewing;
