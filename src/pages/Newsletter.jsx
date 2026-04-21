import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <div className="newsletter-page">
      <main className="newsletter-container">
        {/* Header Image */}
        <div className="newsletter-image">
          <img 
            src="https://images.unsplash.com/photo-1597075091409-5b72e0926487?auto=format&fit=crop&q=80&w=1200" 
            alt="People enjoying Stiegl beer" 
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Heading */}
        <h1 className="newsletter-title">
          Mit dem Stiegl-Newsletter nichts verpassen!
        </h1>

        {/* Form */}
        <form className="newsletter-form" onSubmit={handleSubmit}>
          {/* Anrede */}
          <div className="form-group">
            <label htmlFor="anrede">Anrede</label>
            <input 
              type="text" 
              id="anrede"
              className="form-input"
            />
          </div>

          {/* Vorname & Nachname Row */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="vorname">Vorname *</label>
              <input 
                type="text" 
                id="vorname"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="nachname">Nachname *</label>
              <input 
                type="text" 
                id="nachname"
                required
                className="form-input"
              />
            </div>
          </div>

          {/* E-Mail */}
          <div className="form-group">
            <label htmlFor="email">E-Mail *</label>
            <input 
              type="email" 
              id="email"
              required
              className="form-input"
            />
          </div>

          {/* Geburtstag */}
          <div className="form-group form-group-half">
            <label htmlFor="geburtstag">Geburtstag</label>
            <div className="date-input-wrapper">
              <input 
                type="date" 
                id="geburtstag"
                className="form-input date-input"
              />
              <div className="calendar-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-submit">
            <button type="submit" className="submit-button">
              Absenden
            </button>
          </div>

          {/* Disclaimer */}
          <p className="form-disclaimer">
            Mit dem Absenden dieses Formulars stimme ich der Verarbeitung meiner eingegebenen 
            personenbezogenen Daten gemäß den{' '}
            <a href="#">Datenschutzbestimmungen</a> zu.
          </p>
        </form>
      </main>

      {/* Footer */}
      <footer className="newsletter-footer">
        <div className="footer-divider" />
        <div className="footer-content">
          <p className="footer-title">Stieglbrauerei zu Salzburg GmbH</p>
          <div className="footer-address">
            <p>Kendlerstraße 1</p>
            <p>5017 Salzburg</p>
            <p>Österreich</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Newsletter;
