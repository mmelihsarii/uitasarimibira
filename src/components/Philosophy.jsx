import './Philosophy.css';

const Philosophy = () => {
  return (
    <div className="container">
      {/* Philosophy Section */}
      <div className="philosophy-grid">
        <div className="polaroid-wrapper">
          <div className="polaroid">
            <img src="https://picsum.photos/seed/stiegl/800/1000" alt="Familie Kiener" />
          </div>
        </div>
        <div className="content-right">
          <span className="subtitle">Unsere Philosophie</span>
          <h1>Ein Familienunternehmen seit vielen Generationen</h1>
          <div className="body-text">
            <p>
              Wir sind eine Privatbrauerei mit einer langen Tradition in der Bierkultur. 
              Seit rund 530 Jahren stehen bei uns Nachhaltigkeit, Regionalität, Wertschöpfung 
              vor Ort und vor allem die Qualität unserer Biere und Dienstleistungen an erster 
              Stelle. Diese Qualität ist aber nur möglich, weil wir in der Brauerei ausschließlich 
              die besten heimischen Rohstoffe für unser Bier verwenden.
            </p>
            <p>
              In dieser Zeit entwickelte sich Stiegl von einer kleinen regionalen Braustätte zu 
              Österreichs führender Privatbrauerei. Als „freier Unternehmer" übernimmt Heinrich 
              Dieter Kiener Verantwortung, in dem er eine gesunde, regionale Wirtschaftsstruktur 
              mit über 700 sicheren Arbeitsplätzen fördert.
            </p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="quote-section">
        <div className="quote-icon">"</div>
        <div className="quote-text">
          „Als Privatunternehmer kann – und will – ich mir die Freiheit nehmen, genau das zu tun, 
          was ich für richtig und wichtig halte, nämlich auf die Qualitätswünsche unserer Kunden 
          einzugehen ve so das ‚Bier der Österreicher' aus den besten heimischen Rohstoffen zu brauen."
        </div>
        <div className="quote-author">- Dr. Heinrich Dieter Kiener, Stiegl-Eigentümer -</div>
      </div>
    </div>
  );
};

export default Philosophy;
