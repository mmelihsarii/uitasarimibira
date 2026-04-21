import { useState } from 'react';
import './Blog.css';

const NEWS_DATA = [
  {
    id: 1,
    title: "100% konzernfrei: Stiegl feiert Unabhängigkeitstag",
    date: "10.04.2026",
    excerpt: "Vom 17. April bis 19. April feiert die Privatbrauerei Stiegl den Unabhängigkeitstag der österreichischen Privatbrauereien mit einem abwechslungsreichen Programm für alle Bierliebhaber:innen. Erleben Sie Tradition und Innovation hautnah.",
    image: "https://images.unsplash.com/photo-1541873676-a18139722920?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Premiere in Österreich: Stiegl bringt erstes alkoholfreies Bier mit 0,0% ins Fass",
    date: "01.04.2026",
    excerpt: "Ab sofort bietet Stiegl als erste österreichische Brauerei mit dem Stiegl 0,0% Freibier ein alkoholfreies Bier vom Fass an. Frisch gezapft, mit vollem Biergeschmack und ohne zugesetzte Aromen. Ein echter Gastro-Gamechanger für alle, die bewussten Genuss suchen.",
    image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Wildshut Bio Hopfen-Gin gewinnt Doppelgold bei internationalem Wettbewerb",
    date: "28.03.2026",
    excerpt: "Unser Wildshut Bio Hopfen-Gin wurde als außergewöhnliches Produkt von Weltklasse mit Doppelgold prämiert. Er zählt damit einmal mehr zu den Spitzen-Spirituosen im internationalen Vergleich. Die feine Hopfennote gepaart mit edlen Botanicals überzeugt Jury wie Kenner.",
    image: "https://images.unsplash.com/photo-1527504448761-5182c14bbad7?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "Hotel Moselebauer in Bad St. Leonhard ist Kärntens Bierwirt 2026",
    date: "24.03.2026",
    excerpt: "In Kärnten fiel die Wahl heuer auf das Erlebnishotel Moselebauer in Bad St. Leonhard. Das wunderschön gelelgene Hotel, eingebettet in eine sanfte Hügellandschaft, umgeben von Wiesen und Wäldern, ist der perfekte Ort für ausgezeichnete Bierkultur.",
    image: "https://images.unsplash.com/photo-1584221701291-14304bc20d33?auto=format&fit=crop&q=80&w=1200",
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayItems, setDisplayItems] = useState(NEWS_DATA);
  const [opacity, setOpacity] = useState(1);

  const handlePageChange = (newPage) => {
    if (isTransitioning || newPage === currentPage) return;
    
    setIsTransitioning(true);
    setOpacity(0);
    
    setTimeout(() => {
      setCurrentPage(newPage);
      const shuffled = [...NEWS_DATA].sort(() => Math.random() - 0.5);
      setDisplayItems(shuffled);
      setOpacity(1);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 400);
  };

  return (
    <div className="blog-page">
      <main className="blog-container">
        <div className="blog-header">
          <h1 className="blog-title">Neues von Stiegl</h1>
        </div>

        <div 
          className="blog-news-list"
          style={{ opacity: opacity }}
        >
          {displayItems.map((item) => (
            <article key={`${item.id}-${currentPage}`} className="blog-news-item">
              <div className="blog-news-image">
                <img 
                  src={item.image} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="blog-news-content">
                <div className="blog-news-header">
                  <h2 className="blog-news-title">{item.title}</h2>
                  <div className="blog-news-meta">
                    <span className="blog-news-category">Presse</span>
                    <span className="blog-news-date"> vom {item.date}</span>
                  </div>
                </div>

                <p className="blog-news-excerpt">{item.excerpt}</p>

                <div className="blog-news-link-wrapper">
                  <a href="#" className="blog-news-link">
                    Weiterlesen
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-pagination">
          <div className="blog-pagination-info">
            Seite {currentPage} von 46
          </div>

          <div className="blog-pagination-controls">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => handlePageChange(num)}
                className={`blog-pagination-btn ${currentPage === num ? 'active' : ''}`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, 46))}
              className="blog-pagination-arrow"
              aria-label="Next Page"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>

            <button
              onClick={() => handlePageChange(46)}
              className="blog-pagination-arrow"
              aria-label="Last Page"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m6 18 6-6-6-6"/>
                <path d="m13 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
