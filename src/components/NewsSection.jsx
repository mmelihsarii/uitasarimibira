import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import './NewsSection.css';

const NewsSection = () => {
  const newsData = [
    { 
      title: "Kärntens Bierwirt 2026", 
      excerpt: "Hotel Moselebauer seçildi...", 
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Stieglitz Relaunch", 
      excerpt: "Tazelenmiş lezzet...", 
      image: "https://images.unsplash.com/photo-1621689252320-c0b74088a803?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Wildshut Bio", 
      excerpt: "Yeni küçük şişe boyutu...", 
      image: "https://images.unsplash.com/photo-1538944513120-5c3fc8068120?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Spezialbier 2026", 
      excerpt: "Yeni kreasyon yolda...", 
      image: "https://images.unsplash.com/photo-1597075687490-8f97de967e9f?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const getCurrentNews = () => {
    const start = currentPage * itemsPerPage;
    return newsData.slice(start, start + itemsPerPage);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
      setIsTransitioning(false);
    }, 400);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <section className="news-section">
      <div className="news-container">
        {/* Header */}
        <div className="news-header">
          <span className="news-label">Neues von Stiegl</span>
          <h2 className="news-title">Aktuelles</h2>
        </div>

        {/* News Grid with Navigation */}
        <div className="news-slider-wrapper">
          {/* Previous Button */}
          <button 
            className="news-nav-button news-nav-prev" 
            onClick={handlePrev}
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* News Grid */}
          <div className={`news-grid ${isTransitioning ? 'news-grid-fade' : ''}`}>
            {getCurrentNews().map((item, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="news-card"
              >
                <div className="news-card-image-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="news-card-image"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="news-card-content">
                  <h4 className="news-card-title">{item.title}</h4>
                  <p className="news-card-excerpt">{item.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Next Button */}
          <button 
            className="news-nav-button news-nav-next" 
            onClick={handleNext}
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Page Indicators */}
        <div className="news-indicators">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`news-indicator ${currentPage === index ? 'news-indicator-active' : ''}`}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentPage(index);
                    setIsTransitioning(false);
                  }, 400);
                }
              }}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
