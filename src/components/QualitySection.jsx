import { motion } from 'motion/react';
import './QualitySection.css';

const QualitySection = () => {
  return (
    <section className="quality-section">
      {/* Wheat Field Background */}
      <div 
        className="quality-background"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2400')`
        }}
      >
        <div className="quality-background-overlay" />
        
        {/* Slow Brewing Badge - Top Right */}
        <div className="slow-brewing-badge">
          <span className="slow-brewing-text">SLOW<br/>BREWING</span>
        </div>
      </div>

      {/* Red Strip with Text and Button */}
      <div className="quality-red-strip">
        <div className="quality-strip-content">
          <p className="quality-strip-text">
            Beste Rohstoffe garantieren das beste Bier.
          </p>
          <button className="quality-strip-button">JETZT ENTDECKEN</button>
        </div>
      </div>

      {/* Floating White Card */}
      <div className="quality-floating-card">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="quality-card-inner"
        >
          <span className="quality-card-label">SPITZENQUALITÄT</span>
          <h2 className="quality-card-title">
            Nachhaltige <br />Braukunst
          </h2>
          <p className="quality-card-text">
            Zaman en büyük içeriktir. Biralarımız olgunlaşmak için ihtiyaç duyduğu tam süreyi görür.
          </p>
          <button className="quality-card-button">ERKUNDEN</button>
        </motion.div>
      </div>

      {/* Bottom Spacer */}
      <div className="quality-spacer" />
    </section>
  );
};

export default QualitySection;
