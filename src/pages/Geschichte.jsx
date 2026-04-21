import { useRef, useState } from 'react';
import './Geschichte.css';

const TimelineSection = ({ year, title, contentLeft, contentRight, imageUrl, imagePosition, id, imageTwoUrl }) => (
  <section 
    id={id} 
    className={`timeline-section ${year === '1492' ? 'bg-white' : 'bg-grey'}`}
  >
    <div className="watermark">{year}</div>
    
    <div className="timeline-content">
      <h2 className="timeline-title" dangerouslySetInnerHTML={{ __html: title }} />
      
      <div className={`timeline-layout ${imagePosition === 'left' ? 'reverse' : ''}`}>
        <div className="timeline-text">
          <div className={`text-columns ${contentRight ? 'two-cols' : 'one-col'}`}>
            <div dangerouslySetInnerHTML={{ __html: contentLeft }} />
            {contentRight && <div dangerouslySetInnerHTML={{ __html: contentRight }} />}
          </div>
          
          {imagePosition === 'bottom' && (
            <div className="bottom-images">
              <img src={imageUrl} alt="History 1" referrerPolicy="no-referrer" />
              {imageTwoUrl && <img src={imageTwoUrl} alt="History 2" referrerPolicy="no-referrer" />}
            </div>
          )}
        </div>
        
        {imagePosition !== 'bottom' && (
          <div className="timeline-image">
            <img src={imageUrl} alt={year} referrerPolicy="no-referrer" />
          </div>
        )}
      </div>
    </div>
  </section>
);

const Geschichte = () => {
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
    <div className="geschichte-page">
      <section className="hero-split">
        <div className="hero-left">
          <div className="hero-card">
            Salzburger<br />
            Genusskultur<br />
            seit 1492.
          </div>
        </div>
        <div className="hero-right">
          <div className="play-btn-split" onClick={togglePlay}></div>
        </div>
      </section>

      <nav className="timeline-nav">
        <a href="#year-1492" className="nav-card">
          <img src="https://picsum.photos/seed/1492/600/400" alt="1492" referrerPolicy="no-referrer" />
          <div className="nav-overlay"></div>
          <div className="nav-content">
            <h4>1492</h4>
            <p>Geschichte ansehen</p>
          </div>
        </a>
        <a href="#year-1650" className="nav-card">
          <img src="https://picsum.photos/seed/1650/600/400" alt="1650" referrerPolicy="no-referrer" />
          <div className="nav-overlay"></div>
          <div className="nav-content">
            <h4>1650</h4>
            <p>Geschichte ansehen</p>
          </div>
        </a>
        <a href="#year-1780" className="nav-card">
          <img src="https://picsum.photos/seed/1780/600/400" alt="1780" referrerPolicy="no-referrer" />
          <div className="nav-overlay"></div>
          <div className="nav-content">
            <h4>1780</h4>
            <p>Geschichte ansehen</p>
          </div>
        </a>
        <a href="#year-1820" className="nav-card">
          <img src="https://picsum.photos/seed/1820/600/400" alt="1820" referrerPolicy="no-referrer" />
          <div className="nav-overlay"></div>
          <div className="nav-content">
            <h4>1820</h4>
            <p>Geschichte ansehen</p>
          </div>
        </a>
        <a href="#year-1863" className="nav-card">
          <img src="https://picsum.photos/seed/1863/600/400" alt="1863" referrerPolicy="no-referrer" />
          <div className="nav-overlay"></div>
          <div className="nav-content">
            <h4>1863</h4>
            <p>Geschichte ansehen</p>
          </div>
        </a>
      </nav>

      <TimelineSection
        id="year-1492"
        year="1492"
        title='16. Juni: <br /><span class="red-text">„Das Haus Bey der Stiegen"</span>'
        imageUrl="https://picsum.photos/seed/doc1/600/800"
        imagePosition="right"
        contentLeft="Versetzen wir uns in das Salzburg gegen Ende des 15. Jahrhunderts. Die Erde hat aufgehört eine Scheibe zu sein..."
        contentRight="Das ist das Umfeld, in dem das Bräuhaus an der Gstätten erstmals am 16. Juni 1492 urkundlich erwähnt wird."
      />

      <TimelineSection
        id="year-1650"
        year="1650"
        title='Um 1650: Stiegl wird zur <span class="red-text">größten</span> Brauerei Salzburgs'
        imageUrl="https://picsum.photos/seed/1650/800/600?grayscale"
        imagePosition="left"
        contentLeft="Jahrhundertelang gibt es in der Stadt Salzburg zwölf private Stadtbrauereien..."
        contentRight="Das entspricht ungefähr 100.000 Litern. Eine beachtliche Menge für das 17. Jahrhundert."
      />

      <TimelineSection
        id="year-1780"
        year="1780"
        title='<span class="red-text">Mozart</span> trinkt Stiegl-Bier'
        imageUrl="https://picsum.photos/seed/mozart/600/600"
        imagePosition="right"
        contentLeft="Auch Wolfgang Amadeus Mozart mundet in dieser Zeit das dunkle, würzige Stiegl-Bier."
        contentRight="Im August 1780 schreibt seine Schwester Nannerl in ihr Tagebuch über den Ausflug zum 'Stieglbreü'."
      />

      <div className="intersection-visual">
        <div className="intersection-bg"></div>
        <div className="intersection-container">
          <img src="https://picsum.photos/seed/city/1400/600?sepia=1" alt="City" referrerPolicy="no-referrer" />
        </div>
      </div>

      <div className="bottom-spacer"></div>

      <section className="brauwelt-section">
        <div className="overlap-card">
          <span className="subhead">Stiegl erleben</span>
          <h2>Auf den Genuss gekommen?</h2>
          <p>
            Besuchen Sie doch unser Museum in der Stiegl Brauwelt und erleben Sie die Geschichte hautnah!
          </p>
          <a href="#" className="ghost-btn-red">ZUR BRAUWELT</a>
        </div>

        <div className="staircase-divider">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M0,100 L0,80 L100,80 L100,65 L200,65 L200,50 L350,50 L350,35 L550,35 L550,20 L800,20 L800,0 L1000,0 L1000,100 Z"></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Geschichte;
