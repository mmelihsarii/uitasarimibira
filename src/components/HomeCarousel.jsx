import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HomeCarousel.css';

const SLIDES_COUNT = 3;
const AUTO_PLAY_INTERVAL = 8000;

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Auto-play logic
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES_COUNT);
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % SLIDES_COUNT);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + SLIDES_COUNT) % SLIDES_COUNT);
    resetAutoPlay();
  };

  const setSlide = (i) => {
    setIndex(i);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES_COUNT);
    }, AUTO_PLAY_INTERVAL);
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <>
      {/* Hero Carousel Section */}
      <div className="hero-carousel-sticky">
        <div className="carousel-wrapper">
          {/* Slide 1: Red Background */}
          <div className={`carousel-slide ${index === 0 ? 'active' : ''}`}>
            <div className="slide-red">
              <img
                src="https://images.unsplash.com/photo-1538944513120-5c3fc8068120?auto=format&fit=crop&q=80&w=800"
                alt="Glass of beer"
                className="slide-red-beer"
              />
              <div className="slide-red-content">
                <h1 className="slide-red-title">
                  Unabhängigkeits <br />Tage 2026
                </h1>
                <p className="slide-red-subtitle">DER ÖSTERREICHISCHEN PRIVATBRAUEREIEN</p>
              </div>
              <div className="slide-red-badge">
                <div className="badge-circle">
                  <div className="badge-stripe">
                    <span>PRIVATBRAUEREI</span>
                  </div>
                  <div className="badge-text">
                    ÖSTERREICHISCHE <br />100% UNABHÄNGIG
                  </div>
                </div>
              </div>
              <div className={`slide-button-wrapper ${index === 0 ? 'animate-in' : ''}`}>
                <button className="slide-button-white">MEHR ERFAHREN</button>
              </div>
            </div>
          </div>

          {/* Slide 2: Video Background */}
          <div className={`carousel-slide ${index === 1 ? 'active' : ''}`}>
            <div className="slide-video" onClick={toggleVideo}>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="slide-video-bg"
                src="https://assets.mixkit.co/videos/preview/mixkit-pouring-beer-into-a-glass-in-slow-motion-2384-large.mp4"
              />
              <div className="slide-video-badge">
                <div className="badge-circle-dark">
                  <div className="badge-stripe-dark">
                    <span>Privatbrauerei</span>
                  </div>
                  <div className="badge-text-dark">
                    ÖSTERREICHISCHE <br />100% UNABHÄNGIG
                  </div>
                </div>
              </div>
              <div className={`slide-video-content ${index === 1 ? 'animate-in' : ''}`}>
                <div className="slide-video-text-box">
                  <h2 className="slide-video-title">100% unabhängig!</h2>
                </div>
                <button className="slide-button-red">MEHR ERFAHREN</button>
              </div>
            </div>
          </div>

          {/* Slide 3: Mountain Scene */}
          <div className={`carousel-slide ${index === 2 ? 'active' : ''}`}>
            <div className="slide-mountain">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2400"
                alt="Snowy Mountains"
                className="slide-mountain-bg"
              />
              <div className="slide-mountain-gradient" />
              <div className="slide-mountain-white-panel">
                <div className="slide-mountain-logo">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Evian_logo.svg" alt="Evian Logo" />
                </div>
              </div>
              <div className="slide-mountain-bottles">
                <div className="bottles-group">
                  <img src="https://picsum.photos/seed/evian1/300/800" alt="Bottle 1" className="bottle bottle-1" />
                  <img src="https://picsum.photos/seed/evian2/350/900" alt="Bottle 2" className="bottle bottle-2" />
                  <img src="https://picsum.photos/seed/evian3/300/850" alt="Bottle 3" className="bottle bottle-3" />
                </div>
              </div>
              <div className="slide-mountain-header">
                <h2 className="slide-mountain-header-title">
                  <span className="slide-mountain-header-blue">WELCOME TO THE</span>
                  <span className="slide-mountain-header-red">MOUNTAIN OF YOUTH</span>
                </h2>
              </div>
              <div className={`slide-mountain-content ${index === 2 ? 'animate-in' : ''}`}>
                <div className="slide-mountain-text-box">
                  <h2 className="slide-mountain-title">Exklusiv bei Stiegl</h2>
                </div>
                <button className="slide-button-red">MEHR ERFAHREN</button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button onClick={prevSlide} className="carousel-arrow carousel-arrow-left" aria-label="Previous slide">
            <ChevronLeft size={32} />
          </button>
          <button onClick={nextSlide} className="carousel-arrow carousel-arrow-right" aria-label="Next slide">
            <ChevronRight size={32} />
          </button>

          {/* Pagination Dots */}
          <div className="carousel-dots">
            {[...Array(SLIDES_COUNT)].map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`carousel-dot ${index === i ? 'active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="hero-content-cover">
        {/* This section is intentionally minimal - actual content comes from Home.jsx */}
      </div>
    </>
  );
};

export default HomeCarousel;
