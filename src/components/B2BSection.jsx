import { motion } from 'motion/react';
import './B2BSection.css';

const B2BSection = () => {
  return (
    <section className="b2b-section">
      {/* White Background with Card */}
      <div className="b2b-top-section">
        <div className="b2b-card-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="b2b-card"
          >
            <span className="b2b-label">B2B</span>
            <h2 className="b2b-title">
              Unser Service auf <br /> einen Blick
            </h2>
            <p className="b2b-description">
              Kişisel temas bizim için önemlidir. 200 kişilik dev ekibimizle hizmetinizdeyiz.
            </p>
            <button className="b2b-button">MEHR INFOS</button>
          </motion.div>
        </div>
      </div>

      {/* Background Image */}
      <div 
        className="b2b-background"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=2400')`
        }}
      >
        <div className="b2b-background-overlay" />
      </div>
    </section>
  );
};

export default B2BSection;
