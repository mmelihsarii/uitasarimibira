import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { StieglLogo } from '../components/StieglLogo';
import './Unabhaengig.css';

const Unabhaengig = () => {
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
    <div className="unabhaengig-page">
      {/* Top Header Bar */}
      <div className="top-red-bar" />
      
      {/* Stiegl Logo on overlapping tag */}
      <div className="logo-overlay">
        <StieglLogo className="logo-scale" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="unabhaengig-hero">
        {/* Full-width Imagery: Group in Brewery */}
        <img 
          src="https://images.unsplash.com/photo-1597290282695-edc43d0e7129?auto=format&fit=crop&q=80&w=2400" 
          alt="Brewery interior with team" 
          className="unabhaengig-hero-image"
          referrerPolicy="no-referrer"
        />
        
        {/* Subtle Dark Overlay for contrast */}
        <div className="dark-overlay" />
        
        {/* Hero Text Overlay Content */}
        <div className="unabhaengig-hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="unabhaengig-hero-text"
          >
            <div className="unabhaengig-hero-title-box">
              <h1 className="unabhaengig-hero-title">100% unabhängig</h1>
            </div>
            <p className="unabhaengig-hero-subtitle">
              Österreichische Privatbrauerei
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION: UNABHÄNGIGKEIT --- */}
      <section className="unabhaengig-content-section">
        <div className="unabhaengig-content-container">
          {/* Left Visual: Wooden Barrels */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="unabhaengig-visual"
          >
            <div className="unabhaengig-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&q=80&w=1200" 
                alt="Stacked rustic wooden beer barrels" 
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Typography Section */}
          <div className="unabhaengig-text-section">
            <div className="unabhaengig-header">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="subhead"
              >
                100% konzernfrei
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="unabhaengig-content-title"
              >
                Regionale Braukunst<br />
                <span className="italic-span">genießen</span>
              </motion.h2>
            </div>

            {/* 2-Column Body Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="unabhaengig-text-columns"
            >
              {/* Column 1 */}
              <div className="unabhaengig-column">
                <p>
                  Für immer mehr Konsumentinnen und Konsumenten im Bierland Österreich ist es wichtig, 
                  durch die eigene Kaufentscheidung eine möglichst hohe Wertschöpfung im eigenen Land 
                  zu halten. Mit der Entscheidung für Bier von unabhängigen privaten Brauereien aus 
                  Österreich gelingt das.
                </p>
              </div>
              {/* Column 2 */}
              <div className="unabhaengig-column">
                <p>
                  <strong>Gemeinsam mit 30 weiteren Privatbrauereien</strong> hat deshalb die 
                  Stieglbrauerei zu Salzburg unter dem Motto „für immer konzernfrei" die Initiative 
                  „Österreichische Privatbrauerei" gegründet. Das Herkunftssiegel macht deutlich, 
                  wer hinter dem Bier steckt.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- GENERATIONEN SECTION --- */}
      <section className="generationen-section">
        <div className="generationen-container">
          {/* Left Column: Typography */}
          <div className="generationen-text">
            <div className="generationen-header">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="subhead"
              >
                Generationen
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="generationen-title"
              >
                <span>Traditionsreicher</span>
                <span>Genuss statt</span>
                <span>Einheitsbrei</span>
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="generationen-text-content"
            >
              <p>
                Schließlich sind Privatbrauereien das Rückgrat der österreichischen Brauwirtschaft. 
                Statt an Gewinnmaximierung ausländischer Konzerne, denkt man hier in Generationen. 
                Denn unabhängige Privatbrauereien – wie die Stieglbrauerei – brauen individuelle und 
                eigenständige Biere, <strong>nach überlieferten Rezepturen und nach dem persönlichen 
                Geschmack des jeweiligen Braumeisters.</strong>
              </p>
              <p>
                Einzigartig, echt und regional. Damit schützen diese Privatbrauereien die seit 
                Generationen gewachsene Biervielfalt in unserem Land.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Visual Elements */}
          <div className="generationen-visual">
            {/* Stamp Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
              animate={{ opacity: 0.3, scale: 1, rotate: -15 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="generationen-stamp"
            >
              <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 4" />
                <path id="circlePath" d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" fill="none" />
                <text className="stamp-text-circle">
                  <textPath href="#circlePath" startOffset="0%">
                    ÖSTERREICHISCHE • 100% UNABHÄNGIG • 
                  </textPath>
                </text>
                <rect x="25" y="85" width="150" height="30" fill="#1a1a1a" />
                <text x="100" y="105" textAnchor="middle" className="stamp-text-center">
                  PRIVATBRAUEREI
                </text>
              </svg>
            </motion.div>

            {/* Polaroid Styled Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: -5 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="generationen-polaroid"
            >
              <div className="generationen-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80&w=1200" 
                  alt="Vintage brewery barrels historical photo" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="generationen-caption">
                Wildshut, circa 1920
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Video Section */}
      <section className="hero-video-section">
        <video 
          ref={videoRef}
          id="unabhaengigVideo"
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

      {/* Transparency Section */}
      <section className="transparency-wrapper">
        <div className="transparency-container">
          <div className="red-strip">
            <div className="red-strip-content">
              <p className="strip-text">
                Mit dieser Herkunftskennzeichnung „Österreichische Privatbrauerei" wollen wir auf den 
                Etiketten unserer Stiegl-Biere aufzeigen auf den ersten Blick sichtbar machen, dass 
                diese Produkte mit der Braukunst aus Österreichischen Privatbrauereien gebraut wurde.
              </p>
              <a href="#" className="strip-button">PRIVATBRAUEREIEN.AT</a>
            </div>
          </div>
          
          <div className="floating-card">
            <span className="card-label">Mit Vertrauen genießen</span>
            <h2 className="card-title">Stiegl steht für Transparenz</h2>
            <p className="card-text">
              Unsere Konsumentinnen und Konsumenten können durch die Herkunftskennzeichnung mit gutem 
              Gewissen genießen. Nicht mehr und nicht weniger.
            </p>
          </div>
        </div>
      </section>

      {/* --- REGIONALE VIELFALT SECTION --- */}
      <section className="vielfalt-section">
        <div className="vielfalt-container">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="vielfalt-text"
          >
            <div className="vielfalt-header">
              <span className="subhead">Regionale Vielfalt</span>
              <h2 className="vielfalt-title">
                Wertegemeinschaft<br />
                für die Bierkultur
              </h2>
            </div>
            
            <p className="vielfalt-description">
              Die regionale Vielfalt der Privatbrauereien Österreichs ist beachtlich. Neben der 
              Stieglbrauerei rund um Heinrich Dieter Kiener haben sich dem Verband unter anderem auch 
              die <strong>Ottakringer Brauerei</strong> aus Wien sowie die mittelständischen{' '}
              <strong>CulturBrauer</strong> rund um die Braucommune in Freistadt und die{' '}
              <strong>Brauerei Schloss Eggenberg</strong> (beide Oberösterreich), die{' '}
              <strong>Privatbrauerei Hirt</strong> aus Kärnten, die <strong>Mohrenbrauerei</strong> in 
              Vorarlberg, die <strong>Brauerei Murau</strong> aus der Steiermark, die{' '}
              <strong>Trumer Privatbrauerei</strong> rund um Josef Sigl aus Salzburg sowie die beiden{' '}
              <strong>Bierbrauereien Schrems und Zwettl</strong> aus Niederösterreich angeschlossen.
            </p>
            
            <button className="vielfalt-button">VIDEO ANSEHEN</button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="vielfalt-image"
          >
            <img 
              src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=1200" 
              alt="Mature couple in field holding beer glasses" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* --- CALL TO ACTION SECTION --- */}
      <section className="cta-final-section">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="cta-final-content"
        >
          <h2 className="cta-final-title">
            <span>Lust auf</span>
            <span>unabhängig</span>
            <span>gebrautes Bier?</span>
          </h2>
          <button className="cta-final-button">ZUM SHOP</button>
        </motion.div>

        {/* Footer Silhouette */}
        <div className="footer-silhouette">
          <div className="silhouette-wrapper">
            <div 
              className="silhouette-shape"
              style={{
                clipPath: "polygon(100% 100%, 100% 60%, 80% 60%, 80% 65%, 60% 65%, 60% 70%, 40% 70%, 40% 75%, 20% 75%, 20% 80%, 0% 80%, 0% 100%)"
              }}
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER DETAIL --- */}
      <div className="cookie-icon-fixed">
        <div className="cookie-icon-circle">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="2" opacity="0.3"/>
            <path 
              d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 14 26 14 26 14C26 14 24 16 24 16C22.9 16 22 15.1 22 14C22 12.9 22.9 12 24 12C24 12 25.1 12 25.1 11C25.1 10.1 24.3 9.3 23.4 9.3C22.5 9.3 21.7 10.1 21.7 11.2C21.7 11.2 21.7 12.5 20.6 13.6C19.5 14.7 18.2 14.7 18.2 14.7C17.1 14.7 16.2 15.6 16.2 16.7C16.2 17.8 17.1 18.7 18.2 18.7C18.2 18.7 20.1 18.7 21.2 17.6C22.3 16.5 22.3 15.2 22.3 15.2C22.3 15.2 22.3 14 23.4 14C24.5 14 25.4 14.9 25.4 16C25.4 17.1 24.5 18 23.4 18C22.3 18 21.4 17.1 21.4 16" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              className="cookie-path" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Unabhaengig;
