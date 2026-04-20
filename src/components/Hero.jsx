import { useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="hero">
      <video 
        ref={videoRef}
        id="heroVideo"
        loop
        poster="https://picsum.photos/id/10/1920/1080"
      >
        <source 
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
          type="video/mp4"
        />
      </video>

      <div className="play-btn" onClick={togglePlay}>
        {isPlaying ? '⏸' : '▶'}
      </div>

      <div className="hero-content">
        <div className="text-box">
          <h2>
            Die<br />
            <strong>Privatbrauerei</strong>
          </h2>
        </div>
        <p className="subtitle">Tradition trifft moderne Braukunst</p>
      </div>
    </section>
  );
};

export default Hero;
