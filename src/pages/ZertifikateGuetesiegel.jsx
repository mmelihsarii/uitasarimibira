import { motion } from 'motion/react';
import './ZertifikateGuetesiegel.css';

const ZertifikateGuetesiegel = () => {
  return (
    <div className="zertifikate-page">
      {/* Hero Section */}
      <section className="zertifikate-hero">
        <div 
          className="zertifikate-hero-bg"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&q=80&w=2400')` 
          }}
        >
          <div className="zertifikate-hero-overlay" />
          
          <div className="zertifikate-hero-content">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="zertifikate-hero-title-wrapper"
            >
              <h1 className="zertifikate-hero-title">
                <span className="zertifikate-hero-title-line">Zertifikate</span>
                <span className="zertifikate-hero-title-line">& Gütesiegel</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="zertifikate-hero-subtitle">
                Die Zukunft im Blick
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content & Bulleted List Section */}
      <section className="zertifikate-content">
        <div className="zertifikate-container">
          <div className="zertifikate-header">
            <span className="zertifikate-label">Wir engagieren uns, unterstützen und fördern.</span>
            <h2 className="zertifikate-title">
              Unsere Brauerei<br />setzt Maßstäbe.
            </h2>
          </div>

          <div className="zertifikate-grid">
            {/* Left Column: Bulleted List */}
            <div className="zertifikate-list">
              <ul>
                <li>Höchste Qualitätsstandards über die gesamte Wertschöpfungskette.</li>
                <li>Langjährige Partnerschaften mit regionalen Landwirten.</li>
                <li>Verantwortungsbewusster Umgang mit natürlichen Ressourcen.</li>
                <li>Zertifizierte biologische Landwirtschaft in Wildshut.</li>
                <li>Ständige Kontrolle durch unabhängige Prüfinstanzen.</li>
              </ul>
            </div>

            {/* Right Column: Energy Globe Highlight */}
            <div className="zertifikate-highlight">
              <h3 className="zertifikate-highlight-title">Energy Globe Salzburg 2023</h3>
              <div className="zertifikate-highlight-text">
                <p>
                  Wir sind stolz darauf, für unsere Bemühungen im Bereich der Nachhaltigkeit und 
                  Ressourcenschonung mit dem Energy Globe Salzburg ausgezeichnet worden zu sein. 
                  Dies bestätigt unseren Weg, den wir seit Generationen konsequent verfolgen.
                </p>
                <p>
                  Besonderes Augenmerk liegt dabei auf unseren innovativen Projekten in der 
                  Kreislaufwirtschaft, die zeigen, dass Tradition und modernster ökologischer 
                  Anspruch perfekt harmonieren können.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates & Seals Directory Section */}
      <section className="zertifikate-directory">
        <div className="zertifikate-directory-container">
          <div className="zertifikate-directory-header">
            <span className="zertifikate-directory-label">Zertifikate & Gütesiegel</span>
            <h2 className="zertifikate-directory-title">
              Unsere Garantie<br />auf höchster Stufe.
            </h2>
          </div>

          <div className="zertifikate-directory-list">
            {/* Item 1: BIO-Siegel */}
            <div className="zertifikate-item">
              <div className="zertifikate-item-logo">
                <img 
                  src="https://www.stiegl.at/wp-content/uploads/2021/11/bio_siegel.png" 
                  alt="BIO-Siegel"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="zertifikate-item-content">
                <h3 className="zertifikate-item-title">BIO-Siegel</h3>
                <p className="zertifikate-item-description">
                  Das BIO-Siegel ist ein Güte- und Prüfsiegel, welches Produkte aus ökologischem 
                  Landbau kennzeichnet. Die Genehmigung zur Verwendung des Siegels ist an die 
                  Einhaltung gewisser Standards ve Auflagen geknüpft.
                </p>
              </div>
            </div>

            {/* Item 2: Demeter */}
            <div className="zertifikate-item">
              <div className="zertifikate-item-logo">
                <img 
                  src="https://www.stiegl.at/wp-content/uploads/2021/11/demeter.png" 
                  alt="Demeter Logo"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="zertifikate-item-content">
                <h3 className="zertifikate-item-title">Demeter</h3>
                <p className="zertifikate-item-description">
                  Die Mälzerei am Stiegl-Gut Wildshut ist Demeter-zertifiziert. Demeter steht für 
                  Produkte aus biologisch-dynamischer Wirtschaftsweise.
                </p>
              </div>
            </div>

            {/* Item 3: IFS Food */}
            <div className="zertifikate-item">
              <div className="zertifikate-item-logo">
                <img 
                  src="https://www.stiegl.at/wp-content/uploads/2021/11/ifs_food.png" 
                  alt="IFS Food Logo"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="zertifikate-item-content">
                <h3 className="zertifikate-item-title">IFS Food</h3>
                <p className="zertifikate-item-description">
                  IFS Food steht für „International Featured Standard Food" und ist ein Standard für 
                  die Lebensmittelindustrie, der Sicherheit, Qualität ve Konformität in der Produktion 
                  gewährleistet.
                </p>
              </div>
            </div>

            {/* Item 4: pastus-Zertifikat */}
            <div className="zertifikate-item">
              <div className="zertifikate-item-logo">
                <img 
                  src="https://www.stiegl.at/wp-content/uploads/2021/11/pastus.png" 
                  alt="pastus Logo"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="zertifikate-item-content">
                <h3 className="zertifikate-item-title">pastus-Zertifikat</h3>
                <p className="zertifikate-item-description">
                  Bei der Produktion unserer Biere gibt es keinen Abfall. Wir dürfen Prozessprodukte 
                  wie z.B. unseren Treber als hochwertiges Futtermittel in der Landwirtschaft einsetzen.
                </p>
              </div>
            </div>

            {/* Item 5: Slow Brewing */}
            <div className="zertifikate-item">
              <div className="zertifikate-item-logo">
                <img 
                  src="https://www.stiegl.at/wp-content/uploads/2021/11/slow_brewing.png" 
                  alt="Slow Brewing Gütesiegel"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="zertifikate-item-content">
                <h3 className="zertifikate-item-title">Slow Brewing Gütesiegel</h3>
                <p className="zertifikate-item-description">
                  Das härteste Gütesiegel Europas für die Brauzunft garantiert uns langsame Gärung 
                  ve schonende Reifung. Für den besten Geschmack ohne chemische Beschleuniger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZertifikateGuetesiegel;
