import './Independence.css';

const Independence = () => {
  return (
    <section className="independence-wrapper">
      <div className="section-container">
        {/* Left Column */}
        <article className="text-content">
          <h4>100% unabhängig</h4>
          <h2>Österreichische Privatbrauereien</h2>
          <p>
            100 Prozent unabhängig und ein durch und durch Österreichisches Familienunternehmen: 
            So grenzt sich die Stieglbrauerei klar von internationalen Konzernen ab.
          </p>
          <a href="#" className="cta-button">JETZT ENTDECKEN</a>
        </article>

        {/* Right Column */}
        <aside className="visual-content">
          <img 
            src="https://via.placeholder.com/320x320/E31A1C/FFFFFF?text=100%25+Unabhängig" 
            alt="100% Unabhängig Stamp" 
            className="stamp-img"
          />
          <img 
            src="https://via.placeholder.com/400x300/FFFFFF/E31A1C?text=Austria+Flag+%26+Hops" 
            alt="Austria Flag and Hops" 
            className="hops-flag-img"
          />
        </aside>
      </div>
    </section>
  );
};

export default Independence;
