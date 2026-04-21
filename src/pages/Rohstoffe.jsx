import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Rohstoffe.css';

// Wavy red arrows for the top of the fermentation diagrams
const WavyArrow = ({ delay = 0 }) => (
  <motion.svg 
    width="16" 
    height="32" 
    viewBox="0 0 16 32" 
    fill="none"
    animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
  >
    <path 
      d="M8,32 C8,32 16,24 8,16 C0,8 8,0 8,0" 
      stroke="#E31A1C" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
    />
  </motion.svg>
);

// Fermentation Diagram Component (untergärig vs obergärig)
const YeastDiagram = ({ type }) => (
  <div className="yeast-diagram">
    {/* 4 Wavy Arrows at the top */}
    <div className="wavy-arrows">
      <WavyArrow delay={0} />
      <WavyArrow delay={0.4} />
      <WavyArrow delay={0.8} />
      <WavyArrow delay={1.2} />
    </div>
    
    {/* Fermentation Tank Silhouette */}
    <div className="fermentation-tank">
      {/* Red Fermentation Zone (Top for obergärig, Bottom for untergärig) */}
      <div className={`fermentation-zone ${type === 'untergärig' ? 'bottom' : 'top'}`}>
        <span className="fermentation-label">{type}</span>
      </div>
      
      {/* Randomized Yeast Dots Illustration */}
      <div className="yeast-dots">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="yeast-dot"
            style={{
              top: `${Math.random() * 55 + (type === 'untergärig' ? 5 : 35)}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{ 
              y: [0, Math.random() * 6 - 3, 0],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{ 
              duration: 2.5 + Math.random() * 1.5, 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

const Rohstoffe = () => {
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
    <div className="rohstoffe-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="white-box">
            <h2>Rohstoffe</h2>
          </div>
          <p className="hero-text">Unser Bier gebraut aus heimischen Rohstoffen</p>
        </div>
      </section>

      {/* Content Section - Beste Rohstoffe */}
      <section className="content-section">
        <div className="image-col">
          <img 
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=800" 
            alt="Copper Brewery Vats" 
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="text-col">
          <span className="subhead">Fair und wertvoll</span>
          <h1>Beste Rohstoffe garantieren das beste Bier</h1>
          <div className="nested-columns">
            <div className="column">
              In ein gutes Bier gehören nur Hopfen, Wasser, Hefe und Malz. So steht es schon im 
              Reinheitsgebot von 1516 geschrieben. Wir schließen mit ausgewählten regionalen Bauern, 
              den EGZ-Bauern, langfristige Verträge und können so die Güte der Rohstoffe auf Jahre 
              hinaus sichern.
            </div>
            <div className="column">
              Das Wasser beziehen wir aus der Region des Salzburger Untersbergs, dem Salzburger 
              Hausberg. Der Großteil des Hopfens stammt aus dem Mühlviertel.
            </div>
          </div>
          <div className="nested-columns">
            <div className="column">
              Das bietet uns Preisstabilität und die Sicherheit, dass wir die Rohstoffe für unsere 
              Biere in der Menge und in der Qualität erhalten, die wir erwarten. Stiegl hilft damit 
              nicht nur heimische Arbeitsplätze zu sichern.
            </div>
            <div className="column">
              Die Braugerste kommt aus dem Weinviertel und von unserer eigenen Bio-Landwirtschaft 
              dem Stiegl-Gut Wildshut. Dort rekultivieren wir fast in Vergessenheit geratenes 
              Urgetreide, vermälzen es zu Malz.
            </div>
          </div>
          <a href="#" className="ghost-btn">ZUM BIERGUT</a>
        </div>
      </section>

      {/* Hopfen Section - Polaroid Style */}
      <section className="generation-section">
        <div className="content-col">
          <span className="subhead">Unvergleichbarer Geschmack</span>
          <h2>Hopfen, die<br />„Seele"<br />des Bieres</h2>
          <div className="body-text">
            <p>
              Er gibt dem Bier die Würze, seine angenehme Bittere, den erfrischenden Charakter und 
              ist die Seele jedes Stiegl-Bieres: der Hopfen. Verwendung finden ausschließlich 
              weibliche Pflanzen mit ihren Hopfendolden.
            </p>
            <p>
              Doch Hopfen hat nicht nur aromagebende Eigenschaften. Er entfaltet zudem eine 
              konservierende Wirkung und setzt dem Bier die „Krone" auf als ganz natürlicher{' '}
              <strong>Schaumstabilisator</strong>.
            </p>
          </div>
        </div>
        
        <div className="visual-col">
          {/* Heat Arrows Animation */}
          <div className="heat-arrows">
            {[1, 2, 3, 4].map((i) => (
              <motion.svg
                key={i}
                width="20"
                height="40"
                viewBox="0 0 20 40"
                animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              >
                <path 
                  d="M10,40 C10,40 20,30 10,20 C0,10 10,0 10,0" 
                  stroke="#E31A1C" 
                  fill="none" 
                  strokeWidth="2" 
                />
              </motion.svg>
            ))}
          </div>

          {/* Temperature Badge */}
          <div className="temp-badge">
            <div className="temp-value">50°</div>
            <div className="temp-label">Schonende Trocknung</div>
          </div>

          <div className="polaroid-frame">
            <img 
              src="https://images.unsplash.com/photo-1597433803274-c21d64380ec9?auto=format&fit=crop&q=80&w=1920" 
              alt="Hop Vines" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Water Section - Premium Bottle */}
      <section className="water-section">
        <div className="water-container">
          {/* LEFT COLUMN: THE PREMIUM RED BOTTLE SILHOUETTE */}
          <div className="bottle-column">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bottle-wrapper"
            >
              {/* Glossy Red Bottle with 3D-like Effect */}
              <div className="bottle-container">
                {/* Main SVG Bottle Silhouette */}
                <svg viewBox="0 0 100 400" className="bottle-svg">
                  <defs>
                    {/* Deep Crimson Gradient */}
                    <linearGradient id="crimsonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9E0B0F" />
                      <stop offset="45%" stopColor="#E31A1C" />
                      <stop offset="55%" stopColor="#E31A1C" />
                      <stop offset="100%" stopColor="#8A080C" />
                    </linearGradient>
                    {/* Subtle Top Highlights for Glossy Glass Look */}
                    <linearGradient id="glossHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.25" />
                      <stop offset="30%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    {/* Vertical Shine */}
                    <linearGradient id="sideShine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="20%" stopColor="white" stopOpacity="0" />
                      <stop offset="25%" stopColor="white" stopOpacity="0.15" />
                      <stop offset="30%" stopColor="white" stopOpacity="0" />
                      <stop offset="70%" stopColor="white" stopOpacity="0" />
                      <stop offset="75%" stopColor="white" stopOpacity="0.1" />
                      <stop offset="80%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Refined Bottle Path */}
                  <path 
                    d="M38,15 L62,15 L62,25 Q62,35 55,40 L55,75 Q85,115 85,185 L85,385 Q85,395 70,395 L30,395 Q15,395 15,385 L15,185 Q15,115 45,75 L45,40 Q38,35 38,25 Z" 
                    fill="url(#crimsonGradient)" 
                  />
                  {/* Shine Overlays */}
                  <path 
                    d="M45,20 Q50,15 60,20 L60,60 Q50,55 40,60 Z" 
                    fill="url(#glossHighlight)" 
                    className="bottle-shine"
                  />
                  {/* Internal Typography */}
                  <g className="bottle-text">
                    <text 
                      x="50" 
                      y="270" 
                      textAnchor="middle" 
                      fill="white" 
                      className="bottle-percentage"
                    >
                      92%
                    </text>
                    <text 
                      x="50" 
                      y="305" 
                      textAnchor="middle" 
                      fill="white" 
                      className="bottle-label"
                    >
                      Wasser
                    </text>
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: TYPOGRAPHY & CONTENT */}
          <div className="water-content">
            {/* Header Group */}
            <div className="water-header">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="subhead"
              >
                Wasser aus der Region
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="water-title"
              >
                Quellwasser des<br />
                Salzburger Untersbergs
              </motion.h2>
            </div>

            {/* Two-Column Text Body */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="water-text-columns"
            >
              {/* Left Column */}
              <div className="water-column">
                <p>
                  Wasser ist nicht nur der Ursprung allen Lebens. Es ist auch ein ganz wesentlicher 
                  Bestandteil unserer Bierspezialitäten. <strong>Denn immerhin besteht ein Stiegl zu 
                  92 % aus Wasser.</strong> Und genau hier genießen wir von Natur aus schon ein 
                  besonderes Privileg.
                </p>
                <p>
                  Denn unser Wasser kommt direkt aus der Region des Salzburger Untersbergs ve damit 
                  von einem ganz besonderen Kraftplatz.
                </p>
              </div>
              {/* Right Column */}
              <div className="water-column">
                <p>
                  Das glasklare Quellwasser versorgt uns seit Jahrhunderten nicht nur mit reinster 
                  Qualität, sondern auch mit der fürs Brauen perfekten Wasserhärte von ca. 10 °dH.
                </p>
                <p>
                  Die unzähligen Gesteinsschichten des Untersbergs filtrieren das Wasser auf 
                  natürliche Weise und garantieren höchste Reinheit unseres Brauwassers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Yeast Section - Fermentation Diagrams */}
      <section className="yeast-section">
        <div className="yeast-container">
          {/* LEFT SECTION: TYPOGRAPHY */}
          <div className="yeast-content">
            {/* Headings Group */}
            <div className="yeast-header">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="subhead"
              >
                Aroma und Geschmack
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="yeast-title"
              >
                Hefe aus eigener<br />
                Reinzucht
              </motion.h2>
            </div>

            {/* 2-Column Text Layout */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="yeast-text-columns"
            >
              {/* Column 1 */}
              <div className="yeast-column">
                <p>
                  Die Hefe ist ein einzelliger Pilz und für die Gärung verantwortlich und 
                  verstoffwechselt dabei den Malzzucker in <strong>Alkohol, Kohlensäure</strong> und 
                  weitere hefetypische Gärungsnebenprodukte, die wesentlich für Aroma und Geschmack sind.
                </p>
                <p>
                  Zum Einsatz kommen je nach Biersorte verschiedene Hefestämme aus unserer eigenen 
                  Hefe-Reinzucht.
                </p>
              </div>
              {/* Column 2 */}
              <div className="yeast-column">
                <p>
                  Wir bei Stiegl züchten unsere Hefestämme selbst, für einen gleichbleibenden Geschmack.
                </p>
                <div className="yeast-types">
                  <p className="yeast-types-title">Es gibt zwei Arten von Bierhefen:</p>
                  <ul className="yeast-list">
                    <li>
                      <span className="yeast-bullet"></span>
                      <span>Obergärige Hefe setzt sich nach dem Gärprozess oben im Gärbottich ab</span>
                    </li>
                    <li>
                      <span className="yeast-bullet"></span>
                      <span>Untergärige Hefe setzt sich am Boden des Gärbottichs ab</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SECTION: INFOGRAPHIC (FERMENTATION DIAGRAMS) */}
          <div className="yeast-diagrams">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, damping: 20, stiffness: 100, type: "spring" }}
              className="diagram-wrapper"
            >
              <YeastDiagram type="untergärig" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, damping: 20, stiffness: 100, type: "spring" }}
              className="diagram-wrapper"
            >
              <YeastDiagram type="obergärig" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Malz Section - Barley */}
      <section className="malz-section">
        <div className="malz-container">
          {/* Left Column (Typography) */}
          <div className="malz-content">
            <div className="malz-header">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="subhead"
              >
                Ursprung in der Tradition
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="malz-title"
              >
                Brauen mit nachhaltiger Braugerste
              </motion.h1>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="malz-text"
            >
              <p>
                Die hochwertige Braugerste, welche die <strong>Basis für unser Malz</strong> ist, 
                stammt aus dem niederösterreichischen Weinviertel und wird für jedes Bier ganz 
                speziell verarbeitet. Malz ist durch Weichen, Keimen und Darren umgewandelte 
                Braugerste, die unserem Bier den Gehalt und die Fülle des Geschmacks verleiht.
              </p>
              <p>
                Alle Stufen der Vermälzung sind wichtige Faktoren für den <strong>Körper und die 
                Farbe</strong> des späteren Bieres. Auch hier ist Stiegl der Wegbereiter einer neuen 
                Sortenvielfalt, die in der eigenen, traditionellen Mälzerei und Rösterei am 
                Stiegl-Gut Wildshut ihren Ursprung hat.
              </p>
            </motion.div>
          </div>

          {/* Right Column (Visuals) */}
          <div className="malz-visual">
            {/* Barley Line Art Illustration */}
            <div className="barley-illustration">
              <svg 
                width="400" 
                height="600" 
                viewBox="0 0 400 600" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M200 600C200 400 250 300 250 200" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
                <path 
                  d="M200 600C200 450 150 350 150 250" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
                <path 
                  d="M250 200L270 170M250 190L280 180M250 180L275 150" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
                <path 
                  d="M150 250L130 220M150 240L120 230M150 230L125 200" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
                <path 
                  d="M250 160L270 130M250 150L280 140M250 140L275 110" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
                <path 
                  d="M150 210L130 180M150 200L120 190M150 190L125 160" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Polaroid Styled Image with slight tilt */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="malz-polaroid"
            >
              <div className="malz-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1530268571015-8fa9449f87c2?auto=format&fit=crop&q=80&w=1200" 
                  alt="Golden wheat field macro" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Lust auf<br />
            regionale<br />
            Rohstoffe?
          </h2>
          <a href="#" className="cta-red-btn">ZUM BIERGUT</a>
        </div>
      </section>
    </div>
  );
};

export default Rohstoffe;
