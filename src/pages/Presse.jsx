import './Presse.css';

const Presse = () => {
  return (
    <div className="presse-page">
      {/* Contact & Media Library Section */}
      <section className="presse-contact">
        <div className="presse-contact-container">
          {/* Left Column: Tilted Portrait */}
          <div className="presse-portrait-wrapper">
            <div className="presse-portrait-padding">
              <div className="presse-portrait">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200" 
                  alt="Mag. Alexandra Picker-Rußwurm"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Typography & Actions */}
          <div className="presse-contact-content">
            <div className="presse-contact-header">
              <span className="presse-contact-label">Presse & Downloads</span>
              <h1 className="presse-contact-title">
                Ihr Kontakt &<br />Mediathek
              </h1>
            </div>

            <div className="presse-contact-grid">
              {/* Pressekontakt */}
              <div className="presse-contact-item">
                <p className="presse-contact-description">
                  Wir bei Stiegl in Salzburg haben viel zu erzählen, feiern beachtenswerte Erfolge ve 
                  stoßen natürlich gerne mit einem kühlen Bier darauf an. Ein guter Grund für unser 
                  nächstes „Prost!" könnte die Freude über einen Pressebericht über unsere Stieglbrauerei 
                  in Ihrem geschätzten Medium sein.
                </p>
                <div className="presse-contact-details">
                  <h3 className="presse-contact-details-title">Pressekontakt</h3>
                  <div className="presse-contact-details-text">
                    <p>Stiegl-Pressestelle</p>
                    <p>Mag. Alexandra Picker-Rußwurm</p>
                    <p>Picker PR – talk about taste</p>
                    <p className="presse-contact-phone">Tel. +43(0)664-1102525</p>
                    <p>picker@picker-pr.at</p>
                    <p>www.picker-pr.at</p>
                  </div>
                </div>
              </div>

              {/* Mediathek */}
              <div className="presse-contact-item presse-mediathek">
                <p className="presse-contact-description">
                  Deshalb haben wir Ihnen anbei unsere Neuigkeiten, Presseaussendungen ve 
                  Firmen-Informationen in Bild ve Text zur weiteren Verwendung aufbereitet. Sollten Sie 
                  darüber hinaus noch Fragen haben, dann wenden Sie sich gerne direkt an unsere 
                  Presseabteilung von Picker PR – talk about taste.
                </p>
                <div className="presse-mediathek-content">
                  <h3 className="presse-contact-details-title">Mediathek</h3>
                  <p className="presse-mediathek-text">
                    Hier finden Sie alle verfügbaren Corporate Design Elemente der Stieglbrauerei, sowie 
                    alle Zertifikate.
                  </p>
                  <div className="presse-mediathek-button-wrapper">
                    <button className="presse-mediathek-button">DOWNLOADS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Articles List Section */}
      <section className="presse-articles">
        <div className="presse-articles-container">
          <h2 className="presse-articles-title">Presseartikel</h2>

          <div className="presse-articles-list">
            {/* Article 1 */}
            <article className="presse-article">
              <div className="presse-article-image">
                <img 
                  src="https://images.unsplash.com/photo-1541873676-a18139722920?auto=format&fit=crop&q=80&w=1200" 
                  alt="Stiegl Unabhängigkeitstag"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="presse-article-content">
                <div className="presse-article-header">
                  <h3 className="presse-article-title">
                    100% konzernfrei: Stiegl feiert Unabhängigkeitstag
                  </h3>
                  <div className="presse-article-meta">
                    <span className="presse-article-category">Presse</span>
                    <span className="presse-article-date"> vom 10.04.2026</span>
                  </div>
                </div>
                <p className="presse-article-excerpt">
                  Vom 17. April bis 19. April feiert die Privatbrauerei Stiegl den „Unabhängigkeitstag 
                  der österreichischen Privatbrauereien" mit einem abwechslungsreichen Programm für alle 
                  Bierliebhaber:innen.
                </p>
                <div className="presse-article-link-wrapper">
                  <a href="#" className="presse-article-link">Weiterlesen</a>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="presse-article">
              <div className="presse-article-image">
                <img 
                  src="https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&q=80&w=1200" 
                  alt="Alkoholfreies Bier"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="presse-article-content">
                <div className="presse-article-header">
                  <h3 className="presse-article-title">
                    Premiere in Österreich: Stiegl bringt erstes alkoholfreies Bier mit 0,0% ins Fass
                  </h3>
                  <div className="presse-article-meta">
                    <span className="presse-article-category">Presse</span>
                    <span className="presse-article-date"> vom 01.04.2026</span>
                  </div>
                </div>
                <p className="presse-article-excerpt">
                  Ab sofort bietet Stiegl als erste österreichische Brauerei mit dem „Stiegl 0,0% Freibier" 
                  ein alkoholfreies Bier vom Fass an. Frisch gezapft ve mit vollem Geschmack.
                </p>
                <div className="presse-article-link-wrapper">
                  <a href="#" className="presse-article-link">Weiterlesen</a>
                </div>
              </div>
            </article>
          </div>

          {/* Pagination */}
          <div className="presse-pagination">
            <span className="presse-pagination-info">Seite 1 von 43</span>
            <div className="presse-pagination-controls">
              <button className="presse-pagination-btn active">1</button>
              <button className="presse-pagination-btn">2</button>
              <button className="presse-pagination-btn">3</button>
              <button className="presse-pagination-arrow">{'>'}</button>
              <button className="presse-pagination-arrow">{'>>'}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presse;
