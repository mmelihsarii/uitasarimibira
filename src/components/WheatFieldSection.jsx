import './WheatFieldSection.css';

const WheatFieldSection = () => {
  return (
    <section className="wheat-field-section">
      <div
        className="wheat-field-background"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2400')`
        }}
      >
        <div className="wheat-field-overlay" />
      </div>

      <div className="wheat-field-badge">
        <div className="slow-brewing-circle">
          <span className="slow-brewing-text">SLOW BREWING</span>
        </div>
      </div>
    </section>
  );
};

export default WheatFieldSection;
