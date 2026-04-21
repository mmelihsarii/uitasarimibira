import { motion } from 'motion/react';
import './HeritageSection.css';

const HeritageSection = () => {
  return (
    <section className="heritage-section">
      <div className="heritage-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="heritage-image-wrapper"
        >
          <img
            src="https://images.unsplash.com/photo-1589987607627-6169741f0121?auto=format&fit=crop&q=80&w=800"
            alt="Tradition"
            className="heritage-image"
            referrerPolicy="no-referrer"
          />
          <div className="heritage-badge">
            <span className="heritage-year">1492</span>
          </div>
        </motion.div>

        <div className="heritage-text">
          <span className="heritage-label">Tradition</span>
          <h2 className="heritage-title">
            In Familienbesitz <br /> seit 1492.
          </h2>
          <p className="heritage-description">
            Mozart'ın döneminden beri süregelen bir aile mirası...
          </p>
          <button className="heritage-button">JETZT ENTDECKEN</button>
        </div>
      </div>

      <div className="heritage-gradient" />
    </section>
  );
};

export default HeritageSection;
