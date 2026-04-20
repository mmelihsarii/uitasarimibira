import './Management.css';

const Management = () => {
  return (
    <>
      {/* 1. Üst Bölüm: Ekip */}
      <section className="management-section">
        <div className="mgmt-content">
          <h4>Geschäftsführung</h4>
          <h2>Bei Stiegl steht der Mensch im Mittelpunkt</h2>
          <p>
            Die Geschäftsführung des Familienunternehmens Stiegl bildet ein Kleeblatt aus 
            erfahrenen Führungskräften...
          </p>
        </div>
        <div className="mgmt-image">
          <img src="https://picsum.photos/seed/stiegl-team/800/600" alt="Management Team" />
        </div>
      </section>

      {/* 2. Yumuşak Geçiş ve Logo */}
      <div className="transition-wrapper">
        <div className="wildshut-logo">
          STIEGL-GUT<br />WILDSHUT
        </div>
      </div>

      {/* 3. Alt Bölüm: Hero & Overlap */}
      <div className="hero-container">
        <img 
          src="https://picsum.photos/seed/stiegl-gut/1920/1080" 
          className="hero-bg" 
          alt="Wildshut Gut" 
        />
        <div className="overlap-card">
          <h4>Stiegl-Gut Wildshut</h4>
          <h3>Ein Liebesbeweis an unser Bier</h3>
          <p>
            Das Stiegl-Gut Wildshut ist eine Kombination aus Gutshof und Brauerei...
          </p>
          <a href="#" className="website-btn">ZUR WEBSITE</a>
        </div>
      </div>

      {/* Kırmızı Şerit */}
      <div className="red-band">
        <span className="red-band-text">Produkte & Geschenkideen</span>
        <a href="#" className="shop-btn">IM SHOP KAUFEN</a>
      </div>
    </>
  );
};

export default Management;
