import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Nachhaltigkeit.css';

const Nachhaltigkeit = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="nachhaltigkeit-page">
      {/* Hero Section */}
      <section className="nachhaltigkeit-hero">
        <div 
          className="nachhaltigkeit-hero-bg"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2400')` 
          }}
        >
          <div className="nachhaltigkeit-hero-overlay" />
          
          <div className="nachhaltigkeit-hero-content">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="nachhaltigkeit-hero-card"
            >
              <h1 className="nachhaltigkeit-hero-title">Nachhaltigkeit</h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="nachhaltigkeit-hero-subtitle">
                Wir übernehmen Verantwortung
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="nachhaltigkeitsbericht" className="nachhaltigkeit-content">
        <div className="nachhaltigkeit-container">
          <div className="nachhaltigkeit-header">
            <span className="nachhaltigkeit-label">Zukunft gestalten</span>
            <h2 className="nachhaltigkeit-title">Nachhaltigkeitsbericht</h2>
          </div>

          <div className="nachhaltigkeit-text">
            <p>
              Über die umfangreichen Nachhaltigkeitsmaßnahmen und den bewussten Umgang mit den Ressourcen 
              kann man auch im Stiegl-Nachhaltigkeitsbericht, der seit mehr als drei Jahrzehnten jährlich 
              veröffentlicht wird, nachlesen.
            </p>
            <p>
              Im Rahmen unserer Nachhaltigkeitsstrategie setzen wir uns langfristige Ziele und planen unsere 
              Maßnahmen unter dem Gesichtspunkt „Die Qualität unserer Ziele bestimmt die Qualität unserer Zukunft".
            </p>
          </div>

          <div className="nachhaltigkeit-viewer-label">
            <p>Nachhaltigkeitsbericht online durchblättern</p>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="nachhaltigkeit-viewer">
        <div className="nachhaltigkeit-viewer-container">
          <div className="viewer-mockup">
            <div className="viewer-magazine">
              <img 
                src="https://images.unsplash.com/photo-1541873676-a18139722920?auto=format&fit=crop&q=80&w=1200" 
                alt="Nachhaltigkeitsbericht Cover"
                referrerPolicy="no-referrer"
              />
              <div className="viewer-overlay" />
              <div className="viewer-content">
                <h3 className="viewer-content-title">Vielfalt</h3>
                <div className="viewer-content-line" />
                <p className="viewer-content-subtitle">Nachhaltigkeitsbericht 2024</p>
              </div>
            </div>

            <div className="viewer-arrow">
              <button>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>

            <div className="viewer-controls">
              <button className="viewer-control-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                  <path d="M8 11h6"/>
                </svg>
              </button>
              <button className="viewer-control-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                  <path d="M11 8v6"/>
                  <path d="M8 11h6"/>
                </svg>
              </button>
              <button className="viewer-control-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                </svg>
              </button>
              <div className="viewer-pagination">
                <span className="viewer-page-current">1</span>
                <span className="viewer-page-divider">|</span>
                <span className="viewer-page-total">34</span>
              </div>
              <button className="viewer-control-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3"/>
                  <circle cx="6" cy="12" r="3"/>
                  <circle cx="18" cy="19" r="3"/>
                  <path d="m8.59 13.51 6.83 3.98"/>
                  <path d="m15.41 6.51-6.82 3.98"/>
                </svg>
              </button>
              <button className="viewer-control-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6"/>
                  <path d="M9 21H3v-6"/>
                  <path d="M21 3l-7 7"/>
                  <path d="M3 21l7-7"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Download Section */}
          <div className="nachhaltigkeit-download">
            <h4 className="download-title">Nachhaltigkeitsbericht als PDF herunterladen</h4>
            <div className="download-item">
              <span className="download-item-text">Nachhaltigkeitsbericht 2024</span>
              <div className="download-item-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcycling Campaign Section */}
      <section className="upcycling-section">
        <div className="upcycling-container">
          {/* Block 1: Intro */}
          <div className="upcycling-intro">
            <div className="upcycling-intro-text">
              <div className="upcycling-intro-header">
                <span className="upcycling-label">In Kreisläufen denken</span>
                <h2 className="upcycling-title">
                  Vom Schirm zur Tasche – Stiegl setzt auf Upcycling!
                </h2>
              </div>
              <div className="upcycling-intro-content">
                <p className="upcycling-intro-subtitle">
                  Nachhaltig & stylisch: Neue Fan-Artikel aus alten Stiegl-Schirmen
                </p>
                <div className="upcycling-intro-paragraphs">
                  <p>
                    Stiegl setzt mit einem Upcycling-Projekt ein Zeichen für Ressourcenschonung. 
                    In Zusammenarbeit mit den Geschützten Werkstätten Salzburg entstehen aus alten 
                    Stiegl-Schirmen stylische Taschen und Merch-Artikel für echte Fans. So wird 
                    Nachhaltigkeit nicht nur gelebt, sondern auch tragbar!
                  </p>
                  <p>
                    Ressourcenschonung durch Kreislaufwirtschaft steht seit langem im Zentrum der 
                    Stiegl-Nachhaltigkeitsstrategie. Dabei werden nach dem Prinzip der Kaskadennutzung 
                    wertvolle Rohstoffe mehrfach genutzt und so lange wie möglich im Kreislauf gehalten.
                  </p>
                </div>
              </div>
            </div>

            <div className="upcycling-intro-graphic">
              <div className="upcycling-graphic-wrapper">
                <svg viewBox="0 0 100 100" className="upcycling-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 5 L90 75 L10 75 Z" stroke="#2D5A27" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M45 15 L55 15 L55 35 L45 35 Z" fill="#2D5A27" className="upcycling-pulse" />
                  <g transform="translate(65, 55)">
                    <rect x="0" y="15" width="10" height="5" fill="#E31A1C" />
                    <rect x="10" y="10" width="10" height="5" fill="#E31A1C" />
                    <rect x="20" y="5" width="10" height="5" fill="#E31A1C" />
                    <rect x="30" y="0" width="10" height="5" fill="#E31A1C" />
                    <path d="M45 -5 L55 5 L45 15 Z" fill="#E31A1C" />
                  </g>
                  <text x="50" y="90" textAnchor="middle" fill="#8e8e8e" fontSize="4" className="upcycling-text">
                    UPCYCLING
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Block 2: Lifestyle Images */}
          <div className="upcycling-images">
            <div className="upcycling-images-grid">
              <div className="upcycling-image-item">
                <img 
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200" 
                  alt="Upcycling 1"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="upcycling-image-item">
                <img 
                  src="https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&q=80&w=1200" 
                  alt="Upcycling 2"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="upcycling-images-text">
              <h3 className="upcycling-images-title">Jedes Stück ein Unikat</h3>
              <p className="upcycling-images-description">
                Jene Sonnen-Schirme, die beispielsweise wegen eines Lochs nicht mehr den Anforderungen 
                entsprachen, wurden nicht entsorgt, sondern zur Herstellung von Taschen in verschiedener 
                Größe genutzt. Jede Tasche wurde individuell in Handarbeit gefertigt – damit ist jedes 
                Stück ein Unikat und ein Zeichen für gelebte Kreislaufwirtschaft.
              </p>
            </div>
          </div>

          {/* Block 3: Products */}
          <div className="upcycling-products">
            <div className="upcycling-products-grid">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="upcycling-product-item"
              >
                <img 
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600" 
                  alt="Bag 1"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="upcycling-product-item upcycling-product-item-large"
              >
                <img 
                  src="https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&q=80&w=600" 
                  alt="Bag 2"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="upcycling-product-item"
              >
                <img 
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600" 
                  alt="Bag 3"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <div className="upcycling-cta">
              <span className="upcycling-cta-label">Hier sind die Merchandise-Artikel erhältlich:</span>
              <div className="upcycling-cta-buttons">
                <button className="upcycling-cta-button">STIEGL-BRAUSHOP</button>
                <button className="upcycling-cta-button">STIEGL-ONLINESHOP</button>
                <button className="upcycling-cta-button">STIEGL-FREUNDESKREIS</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flora, Fauna & Agriculture Section */}
      <section className="biodiversity-section">
        <div className="biodiversity-container">
          {/* Flora & Fauna */}
          <div className="biodiversity-block">
            <div className="biodiversity-text biodiversity-text-right">
              <span className="biodiversity-label">Förderung der Artenvielfalt</span>
              <h2 className="biodiversity-title">Errichtung von Kleinhabitaten</h2>
              <p className="biodiversity-description">
                Gemeinsam schaffen wir einen Wissens- und Erfahrungsschatz für gesunde Böden.
              </p>
              <button className="biodiversity-button">ZUM VIDEO</button>
            </div>

            <div className="biodiversity-visual">
              <svg viewBox="0 0 200 200" className="biodiversity-svg">
                <circle cx="100" cy="100" r="95" fill="#cae9f5" />
                <clipPath id="cp1">
                  <circle cx="100" cy="100" r="95" />
                </clipPath>
                <g clipPath="url(#cp1)">
                  <circle cx="60" cy="160" r="60" fill="#4a7c59" />
                  <circle cx="140" cy="160" r="70" fill="#3d6349" />
                  <g className="biodiversity-bee">
                    <rect x="130" y="90" width="12" height="8" rx="4" fill="#fbbd08" />
                    <rect x="134" y="90" width="4" height="8" fill="black" />
                  </g>
                </g>
              </svg>
            </div>
          </div>

          {/* Agriculture */}
          <div className="biodiversity-block biodiversity-block-reverse">
            <div className="biodiversity-visual">
              <svg viewBox="0 0 200 200" className="biodiversity-svg">
                <circle cx="100" cy="100" r="95" fill="#cae9f5" />
                <clipPath id="cp2">
                  <circle cx="100" cy="100" r="95" />
                </clipPath>
                <g clipPath="url(#cp2)">
                  <rect x="0" y="140" width="200" height="60" fill="#8b6f47" />
                  <circle cx="50" cy="140" r="8" fill="#4a7c59" />
                  <circle cx="100" cy="135" r="10" fill="#4a7c59" />
                  <circle cx="150" cy="140" r="8" fill="#4a7c59" />
                  <path d="M50 140 L50 120 L45 125 M50 120 L55 125" stroke="#4a7c59" strokeWidth="2" fill="none" />
                  <path d="M100 135 L100 110 L95 118 M100 110 L105 118" stroke="#4a7c59" strokeWidth="2" fill="none" />
                  <path d="M150 140 L150 120 L145 125 M150 120 L155 125" stroke="#4a7c59" strokeWidth="2" fill="none" />
                </g>
              </svg>
            </div>

            <div className="biodiversity-text">
              <span className="biodiversity-label">Verbesserung von Bodengesundheit</span>
              <h2 className="biodiversity-title">Wiederverwertung von Brauerei-Reststoffen</h2>
              <p className="biodiversity-description">
                Unsere Brauerei-Reststoffe werden als wertvoller Dünger in der Landwirtschaft eingesetzt.
              </p>
              <button className="biodiversity-button">ZUM VIDEO</button>
            </div>
          </div>
        </div>
      </section>

      {/* News/Blog Grid Section */}
      <section className="news-grid-section">
        <div className="news-grid-container">
          <div className="news-grid-header">
            <h2 className="news-grid-title">Neues zum Thema Nachhaltigkeit</h2>
          </div>

          <div className="news-grid">
            {[
              {
                title: "Biergenuss aus Österreich",
                date: "26.01.2026",
                time: "3 Min",
                img: "https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Stiegl setzt auf Mehrweg: Kleine Flasche, große Umweltwirkung",
                date: "26.01.2026",
                time: "3 Min",
                img: "https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Nachhaltig brauen – mit Sonne, Wasser und Technik",
                date: "26.01.2026",
                time: "3 Min",
                img: "https://images.unsplash.com/photo-1509391366360-fe58f967be78?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Kreislaufwirtschaft: Bierfiltrat tut Pflanzen gut",
                date: "20.08.2024",
                time: "5 Min",
                img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="news-card"
              >
                <div className="news-card-image">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="news-card-content">
                  <h3 className="news-card-title">{item.title}</h3>
                  <div className="news-card-meta">
                    <span>{item.date}</span>
                    <span>Lesezeit: {item.time}</span>
                  </div>
                  <span className="news-card-link">Weiterlesen</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery 2x2 Grid Section */}
      <section className="discovery-grid-section">
        {[
          {
            title: "Beste Rohstoffe",
            subtitle: "Nachhaltige Produktion",
            img: "https://images.unsplash.com/photo-1597354984706-fac992d9306f?auto=format&fit=crop&q=80&w=1200"
          },
          {
            title: "Slow Brewing",
            subtitle: "Bewusst langsam",
            img: "https://images.unsplash.com/photo-1584221701291-14304bc20d33?auto=format&fit=crop&q=80&w=1200"
          },
          {
            title: "Bierbrauen beginnt im Boden",
            subtitle: "Regionale Partnerschaften",
            img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
          },
          {
            title: "Maßstäbe setzen",
            subtitle: "Zertifikate & Gütesiegel",
            img: "https://images.unsplash.com/photo-1532634896-26909d0d4b89?auto=format&fit=crop&q=80&w=1200"
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="discovery-grid-item"
            style={{ backgroundImage: `url('${item.img}')` }}
          >
            <div className="discovery-grid-overlay" />
            <div className="discovery-grid-card">
              <span className="discovery-grid-subtitle">{item.subtitle}</span>
              <h2 className="discovery-grid-title">{item.title}</h2>
              <button className="discovery-grid-button">MEHR ERFAHREN</button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Responsibility Infographic Section */}
      <section className="responsibility-section">
        <div className="responsibility-container">
          <div className="responsibility-header">
            <h2 className="responsibility-title">Wir tragen Verantwortung</h2>
            <p className="responsibility-description">
              Unsere Privatbrauerei besteht bis heute, weil wir von Beginn an in Kreisläufen denken...
            </p>
          </div>

          <div className="responsibility-infographic">
            <img 
              src="https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&q=80&w=2400" 
              alt="Infographic"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="responsibility-download">
            <span className="responsibility-download-text">Nachhaltigkeitsübersicht als PDF herunterladen</span>
            <div className="responsibility-download-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 60-Second Video Section */}
      <section className="video-section">
        <div className="video-container">
          <div className="video-player">
            <h3 className="video-player-title">Stiegl-Nachhaltigkeit in 60 Sekunden</h3>
            <div className="video-player-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1584221701291-14304bc20d33?auto=format&fit=crop&q=80&w=1600" 
                alt="Video"
                referrerPolicy="no-referrer"
              />
              <div className="video-player-overlay">
                <div className="video-player-button">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="video-content">
            <span className="video-content-label">Kreislauf bei Stiegl</span>
            <h2 className="video-content-title">
              Boden gut.<br />Bier gut.
            </h2>
            <p className="video-content-description">
              #Stieglkreislauf In Kreisläufen denken und handeln.
            </p>
            <button className="video-content-button">NACHHALTIGKEITSBERICHT</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nachhaltigkeit;
