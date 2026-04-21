import './Sponsoring.css';

const Sponsoring = () => {
  return (
    <div className="sponsoring-page">
      {/* HERO */}
      <section className="sponsoring-hero">
        <div className="sponsoring-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2000" 
            alt="Crowd with flags"
            referrerPolicy="no-referrer"
          />
          <div className="sponsoring-hero-overlay" />
        </div>

        <div className="sponsoring-hero-content">
          <div className="sponsoring-hero-title-wrapper">
            <div className="sponsoring-hero-title-card">
              <h1 className="sponsoring-hero-title">Sponsoring</h1>
            </div>
            <div className="sponsoring-hero-subtitle-wrapper">
              <h2 className="sponsoring-hero-subtitle">Teams, Events & Initiativen</h2>
            </div>
          </div>
        </div>
      </section>

      {/* ASYMMETRIC CONTENT BLOCK 1 (OVAL) */}
      <section className="sponsoring-content-block">
        <div className="sponsoring-content-container">
          <div className="sponsoring-oval-image">
            <img 
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200" 
              alt="People at an event"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="sponsoring-content-text">
            <h2 className="sponsoring-content-title">Gemeinsam Lebensfreude schaffen</h2>
            <div className="sponsoring-content-description">
              <p>
                Stiegl steht in Österreich für Qualität, Lebensfreude und gelebte Tradition. Unsere 
                Sponsoring-Partnerschaften verfolgen eine klare Mission: Menschen zusammenbringen, 
                Gemeinschaft fördern und positive Erlebnisse schaffen.
              </p>
              <p className="sponsoring-content-highlight">
                „Wir lieben das Leben und bringen Menschen zusammen."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ASYMMETRIC CONTENT BLOCK 2 (FLAG) */}
      <section className="sponsoring-flag-section">
        <div className="sponsoring-flag-container">
          <div className="sponsoring-flag-header">
            <h2 className="sponsoring-flag-title">
              Stiegl verbindet – Sport, Kultur, Natur und Menschen.
            </h2>
          </div>

          <div className="sponsoring-flag-grid">
            <div className="sponsoring-flag-text">
              <p>
                Wir engagieren uns mit Leidenschaft, Verantwortung und Überzeugung. Seit über 25 Jahren 
                ist Stiegl Partner des ÖFB und zählt zu den Hauptsponsoren der österreichischen 
                Nationalmannschaft. Als langjähriger Unterstützer der nordischen ÖSV-Disziplinen sowie 
                zahlreicher regionaler Sportveranstaltungen schaffen wir rot-weiß-rote Gänsehautmomente – 
                von der Tribüne bis ins Zielgelände.
              </p>
              <p>
                Auch im Kulturbereich setzen wir starke Akzente: Als Sponsor der Salzburger Festspiele, 
                zahlreicher Brauchtumsveranstaltungen und Festivals tragen wir zur Vielfalt österreichischer 
                Kultur bei. Darüber hinaus sind wir auf Messen und Fachveranstaltungen vertreten, um unsere 
                Werte einem breiten wie auch fachspezifischen Publikum näherzubringen.
              </p>
              <p>
                Unsere langfristigen Partnerschaften stehen für unser Bekenntnis zu Tradition, Kreativität 
                und Fortschritt – ebenso wie für unser Engagement für eine intakte Umwelt.
              </p>
            </div>

            <div className="sponsoring-flag-image-wrapper">
              <div className="sponsoring-flag-image">
                <img 
                  src="https://images.unsplash.com/photo-1610444583737-051877413d74?auto=format&fit=crop&q=80&w=800" 
                  alt="Stiegl Flag"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASYMMETRIC CONTENT BLOCK 3 (OVAL 2) */}
      <section className="sponsoring-content-block">
        <div className="sponsoring-content-container sponsoring-content-reverse">
          <div className="sponsoring-oval-image">
            <img 
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200" 
              alt="Individuals enjoying night event"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="sponsoring-content-text">
            <h2 className="sponsoring-content-title">
              Individuelle Lösungen – authentisch & wirkungsvoll
            </h2>
            <div className="sponsoring-content-description">
              <p>
                Jede Partnerschaft ist so individuell wie das Event selbst. Ob als exklusiver Bierpartner, 
                Warensponsor oder über gezieltes Werbesponsoring – gemeinsam mit unseren Partner:innen 
                entwickeln wir maßgeschneiderte Konzepte, die authentisch zu Stiegl passen.
              </p>
              <p>
                Denn nur wenn Werte, Vision und Zielsetzung zusammenpassen, entsteht etwas langfristig 
                Wirksames.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS GALLERY (CAROUSEL) */}
      <section className="sponsoring-highlights">
        <div className="sponsoring-highlights-container">
          <h2 className="sponsoring-highlights-title">Highlights in Bildern</h2>

          <div className="sponsoring-carousel">
            <div className="sponsoring-carousel-image">
              <img 
                src="https://images.unsplash.com/photo-1459749411177-042180ce672c?auto=format&fit=crop&q=80&w=2000" 
                alt="Outdoor festival stage with mountains"
                referrerPolicy="no-referrer"
              />

              <button className="sponsoring-carousel-arrow sponsoring-carousel-arrow-left">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>

              <button className="sponsoring-carousel-arrow sponsoring-carousel-arrow-right">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>

              <div className="sponsoring-carousel-attribution">
                Ötztal Tourismus
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsoring;
