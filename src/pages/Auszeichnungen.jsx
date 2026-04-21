import { motion } from 'motion/react';
import './Auszeichnungen.css';

const Auszeichnungen = () => {
  const awards = [
    {
      category: 'World Spirits Award',
      link: 'https://worldspiritsaward.com',
      products: [
        {
          name: 'Wildshut Bio Hopfen Gin',
          image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=600',
          medal: 'GOLD'
        },
        {
          name: 'Wildshut Bio Kräuter Gin',
          image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=600',
          medal: 'SILBER'
        }
      ]
    },
    {
      category: 'DLG Prämierung',
      link: 'https://dlg.org',
      products: [
        {
          name: 'Stiegl Goldbräu',
          image: 'https://images.unsplash.com/photo-1621689252320-c0b74088a803?auto=format&fit=crop&q=80&w=600',
          medal: 'GOLD'
        },
        {
          name: 'Stiegl Paracelsus',
          image: 'https://images.unsplash.com/photo-1621689252320-c0b74088a803?auto=format&fit=crop&q=80&w=600',
          medal: 'GOLD'
        }
      ]
    },
    {
      category: 'European Beer Star',
      link: 'https://europeanbeerstar.com',
      products: [
        {
          name: 'Stiegl Weisse',
          image: 'https://images.unsplash.com/photo-1538944513120-5c3fc8068120?auto=format&fit=crop&q=80&w=600',
          medal: 'BRONZE'
        }
      ]
    }
  ];

  return (
    <div className="auszeichnungen-page">
      {/* Hero Section */}
      <section className="auszeichnungen-hero">
        <div 
          className="auszeichnungen-hero-bg"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=2400')` 
          }}
        >
          <div className="auszeichnungen-hero-overlay" />
          
          <div className="auszeichnungen-hero-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="auszeichnungen-hero-card"
            >
              <h1 className="auszeichnungen-hero-title">
                Stiegl-Braukunst mit <br /> Auszeichnung
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="auszeichnungen-hero-subtitle">
                UND STOLZ DRAUF
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="auszeichnungen-content">
        <div className="auszeichnungen-container">
          <div className="auszeichnungen-grid">
            <div className="auszeichnungen-text">
              <h2 className="auszeichnungen-section-title">
                Ausgezeichneter Geschmack <br /> ohne Kompromisse
              </h2>
              <div className="auszeichnungen-paragraphs">
                <p>
                  Qualität steht nämlich bei unserem Stiegl-Bier seit jeher an erster Stelle. 
                  Wir setzen bei unserem Bier auf langsame Gärung und schonende Reifung...
                </p>
                <p>
                  Her bir yudumda o kalite farkını hissedeceksiniz.
                </p>
              </div>
            </div>

            <div className="auszeichnungen-image">
              <img 
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=1200" 
                alt="Hands toasting" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="auszeichnungen-full-text">
            <h3 className="auszeichnungen-final-title">
              National und international ausgezeichnet – <span className="auszeichnungen-emphasis">UND STOLZ DRAUF.</span>
            </h3>
            <p className="auszeichnungen-final-description">
              Stiegl-Bier erfüllt höchste Qualitätsansprüche und wird regelmäßig mit internationalen Auszeichnungen prämiert.
            </p>
            <p className="auszeichnungen-final-statement">
              Stiegl – Braukunst auf höchster Stufe.
            </p>
          </div>
        </div>
      </section>

      {/* Award Showcase Sections */}
      {awards.map((award, index) => (
        <section key={index} className="award-showcase">
          <div className="award-showcase-container">
            <div className="award-showcase-header">
              <h2 className="award-showcase-title">{award.category}</h2>
              <p className="award-showcase-link">
                Mehr zum Award: <a href={award.link} target="_blank" rel="noopener noreferrer">{award.category}</a>
              </p>
            </div>

            <div className="award-products-grid">
              {award.products.map((product, productIndex) => (
                <motion.div
                  key={productIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: productIndex * 0.2 }}
                  className="award-product-card"
                >
                  <div className="award-product-image-wrapper">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="award-product-image"
                      referrerPolicy="no-referrer"
                    />
                    <div className={`award-medal award-medal-${product.medal.toLowerCase()}`}>
                      <span className="award-medal-text">{product.medal}</span>
                    </div>
                  </div>

                  <h3 className="award-product-name">{product.name}</h3>

                  <div className="award-product-buttons">
                    <button className="award-product-button award-product-button-primary">
                      JETZT BESTELLEN
                    </button>
                    <button className="award-product-button award-product-button-secondary">
                      MEHR INFOS
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Auszeichnungen;
