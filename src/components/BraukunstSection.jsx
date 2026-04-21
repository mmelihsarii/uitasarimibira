import { motion } from 'motion/react';
import './BraukunstSection.css';

const BraukunstSection = () => {
  return (
    <section className="braukunst-section">
      <div className="braukunst-container">
        {/* Sol Sütun: Tipografi */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="braukunst-text"
        >
          <div className="braukunst-header">
            <span className="braukunst-label">Unsere Leidenschaft</span>
            <h1 className="braukunst-title">
              Braukunst auf <br />höchster Stufe.
            </h1>
          </div>
          <p className="braukunst-description">
            Aus besten Rohstoffen und echter Brauhandwerkskunst entstehen Stiegl-Bierspezialitäten 
            mit herausragendem Geschmack und einem guten Gewissen beim Genießen.
          </p>
          <button className="braukunst-button">ZUM SHOP</button>
        </motion.div>

        {/* Sağ Sütun: İnteraktif Ürün Grubu (Ayrılma Efekti) */}
        <div className="braukunst-products">
          <div className="product-group">
            {/* Sol Görsel: Bira Bardağı */}
            <img
              src="https://images.unsplash.com/photo-1538944513120-5c3fc8068120?auto=format&fit=crop&q=80&w=800"
              alt="Tall cold beer glass"
              className="product-glass"
              referrerPolicy="no-referrer"
            />
            {/* Sağ Görsel: Bira Şişesi */}
            <img
              src="https://images.unsplash.com/photo-1621689252320-c0b74088a803?auto=format&fit=crop&q=80&w=800"
              alt="Stiegl Goldbräu Bottle"
              className="product-bottle"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BraukunstSection;
