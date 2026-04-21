import './MediathekDownloads.css';

const MediathekDownloads = () => {
  const downloadIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="download-icon">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );

  return (
    <div className="mediathek-page">
      <main className="mediathek-container">
        {/* HEADER */}
        <div className="mediathek-header">
          <h1 className="mediathek-main-title">Mediathek & Downloads</h1>
          
          <div className="mediathek-section-header">
            <span className="mediathek-label">Corporate Design</span>
            <h2 className="mediathek-section-title">Stiegl-Gestaltung</h2>
          </div>

          <div className="mediathek-intro-grid">
            <div className="mediathek-intro-left">
              <p className="mediathek-intro-text">
                Die Farbe des Stiegl-Logos ist die Primärfarbe für Stiegl, diese gilt es in allen Fällen der Anwendung zu erreichen.
              </p>

              <div className="mediathek-color-grid">
                <span className="mediathek-color-label">CMYK</span>
                <span className="mediathek-color-value">0 / 100 / 100 / 0</span>
                
                <span className="mediathek-color-label">Sonderfarbe</span>
                <span className="mediathek-color-value">Pantone 1795 c / HKS 23 N</span>
                
                <span className="mediathek-color-label">Lack</span>
                <span className="mediathek-color-value">RAL 3020</span>
              </div>
            </div>

            <div className="mediathek-intro-right">
              <p className="mediathek-intro-text">
                Alle Bilder zu den Etiketten und Verpackungen finden Sie hier übersichtlich zusammengestellt:
              </p>
              <a href="#" className="mediathek-intro-link">
                B2B Downloads – Goldrichtiger Geschmack! – Stiegl
              </a>
            </div>
          </div>
        </div>

        {/* LOGO DOWNLOADS */}
        <section className="mediathek-logo-section">
          <div className="mediathek-logo-grid">
            <div className="mediathek-logo-visual">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Stiegl_Logo.png" 
                alt="Stiegl Logo"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="mediathek-logo-info">
              <div className="mediathek-logo-header">
                <span className="mediathek-label">Downloads</span>
                <h2 className="mediathek-logo-title">Stiegl-Logo</h2>
              </div>

              <ul className="mediathek-logo-list">
                <li>Das Stiegl-Logo wird immer in seiner ganzen Form verwendet.</li>
                <li>Bei einer kleineren Darstellung, kann die Version ohne Wappen verwendet werden. Ab 2 cm oder 200 px.</li>
                <li>Auf unruhigen oder nicht weißen Hintergründen wird das Logo mit der weißen Etikett-Form unterlegt.</li>
                <li>Es ist nicht zulässig das Logo auf einem weißen Quadrat darzustellen oder einzelne Elemente davon zu verwenden.</li>
              </ul>
            </div>
          </div>

          <div className="mediathek-downloads-grid">
            <div className="mediathek-downloads-col">
              <h4 className="mediathek-downloads-title">Druck:</h4>
              <div className="mediathek-downloads-list">
                <a href="#" className="mediathek-download-item">
                  <span>Druckqualität CMYK (4c, .eps, ZIP)</span>
                  {downloadIcon}
                </a>
                <a href="#" className="mediathek-download-item">
                  <span>Druckqualität einfärbig (1c, .eps, .pdf, ZIP)</span>
                  {downloadIcon}
                </a>
                <a href="#" className="mediathek-download-item">
                  <span>Leitfaden in der Druckanwendung (PDF)</span>
                  {downloadIcon}
                </a>
              </div>
            </div>

            <div className="mediathek-downloads-col">
              <h4 className="mediathek-downloads-title">Digital:</h4>
              <div className="mediathek-downloads-list">
                <a href="#" className="mediathek-download-item">
                  <span>Logo für digitale Anwendung (.eps, .png, ZIP)</span>
                  {downloadIcon}
                </a>
                <a href="#" className="mediathek-download-item">
                  <span>Leitfaden in der digitalen Anwendung (PDF)</span>
                  {downloadIcon}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATES HERO */}
        <section className="mediathek-certificates">
          <div className="mediathek-certificates-content">
            <div className="mediathek-certificates-header">
              <span className="mediathek-label">Downloads</span>
              <h2 className="mediathek-certificates-title">Zertifikate</h2>
            </div>

            <div className="mediathek-certificates-image">
              <img 
                src="https://picsum.photos/seed/certificates/800/400" 
                alt="Fanned Certificates"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="mediathek-certificates-footer">
              <p className="mediathek-certificates-text">
                Alle Zertifikate der Stieglbrauerei zu Salzburg GmbH, der Stiegl Getränke & Service GmbH & Co. KG sowie dem Stiegl-Gut Wildshut stehen zum Download bereit.
              </p>
              <button className="mediathek-certificates-button">ALLE DOWNLOADEN</button>
            </div>
          </div>
        </section>

        {/* MASSIVE DOWNLOAD LISTS */}
        <section className="mediathek-lists">
          <div className="mediathek-lists-grid">
            <div className="mediathek-list-col">
              <h3 className="mediathek-list-title">Deutsch:</h3>
              <div className="mediathek-list-items">
                <a href="#" className="mediathek-list-item active">
                  <span>Stiegl Getränke und Service GmbH_BIO_Zertifikat_SLK_bis 31.01.2027</span>
                  {downloadIcon}
                </a>
                {[
                  "Stieglbrauerei_BIO_Zertifikat_SLK_deutsch_bis 31.01.2027",
                  "Stieglbrauerei_BIOS_Glutenfrei_Zertifikat_bis 22.08.2026",
                  "Stieglbrauerei_IFS_Food_Zertifikat_deutsch_bis 21.03.2027",
                  "Stieglbrauerei_Pastus_Zertifikat_bis 11.04.2027",
                  "Hausbrauerei_der_Stieglbrauerei_Slow_Brewing_Gütesiegel_bis 25.05.2026",
                  "Stieglbrauerei_allgemein_Slow_Brewing_Gütesiegel_deutsch_bis 03.03.2027"
                ].map((text, idx) => (
                  <a key={idx} href="#" className="mediathek-list-item">
                    <span>{text}</span>
                    {downloadIcon}
                  </a>
                ))}
              </div>
            </div>

            <div className="mediathek-list-col">
              <h3 className="mediathek-list-title">Englisch:</h3>
              <div className="mediathek-list-items">
                {[
                  "Stiegl Getränke und Service GmbH_BIO_Zertifikat_SLK_bis 31.01.2027",
                  "Stieglbrauerei_BIO_Zertifikat_SLK_englisch_bis 31.01.2027",
                  "Stieglbrauerei_IFS_Food_Zertifikat_englisch_bis 21.03.2027",
                  "Stieglbrauerei_allgemein_Slow_Brewing_Gütesiegel_englisch_bis 03.05.2027",
                  "Stieglbrauerei_Stiegl_Hell_Slow_Brewing_Gütesiegel_englisch_bis 03.05.2027",
                  "Stieglbrauerei_Kosher_englisch_bis 01.04.2026"
                ].map((text, idx) => (
                  <a key={idx} href="#" className="mediathek-list-item">
                    <span>{text}</span>
                    {downloadIcon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MediathekDownloads;
