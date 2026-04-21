import { motion } from 'motion/react';
import './BrauweltSection.css';

const BrauweltSection = () => {
  return (
    <section className="brauwelt-section">
      {/* Arka Plan: Rustik Bira Mahzeni */}
      <div 
        className="brauwelt-background"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1597075687490-8f97de967e9f?auto=format&fit=crop&q=80&w=2400')` 
        }}
      >
        {/* Görsel üzerine hafif karanlık katman */}
        <div className="brauwelt-overlay" />
      </div>

      {/* Üst Üste Binen Beyaz Kart Alanı */}
      <div className="brauwelt-content-wrapper">
        <div className="brauwelt-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="brauwelt-card"
          >
            <div className="brauwelt-card-inner">
              <span className="brauwelt-label">Stiegl-Brauwelt</span>
              <h2 className="brauwelt-title">
                Auf ein Bier in die <br />Brauerei
              </h2>
              <p className="brauwelt-description">
                In der Stiegl-Brauwelt kann Bier mit allen Sinnen erlebt werden. 
                Natürlich führt der erste Weg in das Bier-Museum über Stiegen, 
                schließlich trägt die Stieglbrauerei deshalb ihren Namen.
              </p>
              <div className="brauwelt-button-wrapper">
                <button className="brauwelt-button">ZUR BRAUWELT</button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Alt boşluk */}
        <div className="brauwelt-spacer" />
      </div>
    </section>
  );
};

export default BrauweltSection;
