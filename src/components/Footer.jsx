import './Footer.css'

const Footer = () => {
  return (
    <>
      <svg className="footer-divider" viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 100 L0 80 L350 80 L350 70 L370 70 L370 60 L390 60 L390 50 L410 50 L410 40 L430 40 L430 30 L450 30 L450 20 L470 20 L470 10 L490 10 L490 0 L1440 0 L1440 100 Z" fill="#333333"/>
      </svg>
      
      <footer>
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Unsere Heimat</h4>
            <ul>
              <li style={{ color: 'white', fontWeight: 'bold' }}>Stieglbrauerei</li>
              <li>Kendlerstrasse 1</li>
              <li>5017 Salzburg</li>
              <br />
              <li>+43 50 1492-0</li>
              <li>office@stiegl.at</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Die Brauwelt</h4>
            <ul>
              <li>Gastronomie</li>
              <li>Museum</li>
              <li>Events</li>
              <li>Braushop</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Karriere</h4>
            <ul>
              <li>Offene Stellen</li>
              <li>Wir Stiegler</li>
              <li>Arbeitswelten</li>
              <li>Benefits</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Vertrieb</h4>
            <ul>
              <li>Handelswaren</li>
              <li>Bestell-App</li>
              <li>Stiegl-Genusstipp</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>B2B</h4>
            <ul>
              <li>Ansprechpersonen</li>
              <li>Drink Modul</li>
              <li>Technischer Service</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Service</h4>
            <ul>
              <li>Mediathek</li>
              <li>Presse</li>
              <li>Sponsoring</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="footer-col footer-col-last">
            <h4>So viel Zeit muss sein.</h4>
            <div className="smile-icon">☺</div>
            <p style={{ fontSize: '13px', color: 'var(--text-grey)' }}>
              Sie haben Fragen? Schreiben Sie uns.
            </p>
            <div className="logo-placeholder">Stiegl</div>
          </div>
        </div>

        <div className="sub-footer">
          <div className="socials">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="legal-links">
            <span>AGB</span>
            <span>Impressum</span>
            <span>Datenschutz</span>
            <span>Barrierefreiheit</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer