import { motion } from 'motion/react';
import './BottlesFanOut.css';

const BottlesFanOut = () => {
  return (
    <section className="bottles-fanout-section">
      <div className="bottles-fanout-container">
        {/* Sol Sütun: İnteraktif 5 Şişe Yelpaze */}
        <div className="bottles-fanout-visual">
          <div className="bottle-gallery">
            <img 
              src="https://images.unsplash.com/photo-1621689252320-c0b74088a803?auto=format&fit=crop&q=80&w=800" 
              alt="Bottle 1" 
              className="bottle bottle-1" 
              referrerPolicy="no-referrer" 
            />
            <img 
              src="https://images.unsplash.com/photo-1621689252320-c0b74088a803?auto=format&fit=crop&q=80&w=800" 
              alt="Bottle 2" 
              className="bottle bottle-2" 
              referrerPolicy="no-referrer" 
            />
            <img 
              src="https://images.unsplash.com/photo-1621689252320-c0b74088a803?auto=format&fit=crop&q=80&w=800" 
              alt="Bottle 3" 
              className="bottle bottle-3" 
              referrerPolicy="no-referrer" 
            />
            <img 
              src="https://images.unsplash.com/photo-1621689252320-c0b74088a803?auto=format&fit=crop&q=80&w=800" 
              alt="Bottle 4" 
              className="bottle bottle-4" 
              referrerPolicy="no-referrer" 
            />
            <img 
              src="https://images.unsplash.com/photo-1621689252320-c0b74088a803?auto=format&fit=crop&q=80&w=800" 
              alt="Bottle 5" 
              className="bottle bottle-5" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>

        {/* Sağ Sütun: Tipografi */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }} 
          className="bottles-fanout-text"
        >
          <div className="bottles-fanout-header">
            <span className="bottles-fanout-label">Kreative Vielfalt</span>
            <h2 className="bottles-fanout-title">Unsere Biere</h2>
          </div>
          <p className="bottles-fanout-description">
            Ideen und Leidenschaft für das Brauhandwerk lassen ein breites Spektrum des Geschmacks entstehen.
          </p>
          <button className="bottles-fanout-button">ZUM SORTIMENT</button>
        </motion.div>
      </div>
    </section>
  );
};

export default BottlesFanOut;
