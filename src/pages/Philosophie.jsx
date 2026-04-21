import { useRef, useState } from 'react';
import './Philosophie.css';

const Philosophie = () => {
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
    <div className="philosophie-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="white-box">
            <h2>100% unabhängig</h2>
          </div>
          <p className="hero-text">Österreichische Privatbrauerei</p>
        </div>
      </section>

      <section className="content-section">
        <div className="image-col">
          <img src="https://picsum.photos/seed/barrels/600/600" alt="Brauerei Fässer" />
        </div>
        <div className="text-col">
          <span className="subhead">100% konzernfrei</span>
          <h1>Regionale Braukunst genießen</h1>
          <div className="nested-columns">
            <div className="column">
              Für immer mehr Konsumentinnen und Konsumenten im Bierland Österreich ist es wichtig, durch die eigene Kaufentscheidung eine möglichst hohe Wertschöpfung im eigenen Land zu halten. Mit der Entscheidung für Bier von unabhängigen privaten Brauereien aus Österreich gelingt das.
            </div>
            <div className="column">
              <strong>Gemeinsam mit 30 weiteren Privatbrauereien</strong> hat deshalb die Stieglbrauerei zu Salzburg unter dem Motto „für immer konzernfrei" die Initiative „Österreichische Privatbrauerei" gegründet. Das Herkunftssiegel macht deutlich, wer hinter dem Bier steckt.
            </div>
          </div>
        </div>
      </section>

      <section className="generation-section">
        <div className="content-col">
          <span className="subhead">Generationen</span>
          <h2>Traditionsreicher<br />Genuss statt<br />Einheitsbrei</h2>
          <p>
            Schließlich sind Privatbrauereien das Rückgrat der Österreichischen Brauwirtschaft. Statt an Gewinnmaximierung ausländischer Konzerne, denkt man hier in Generationen. Denn unabhängige Privatbrauereien – wie die Stieglbrauerei – <strong>brauen individuelle und eigenständige Biere, nach überlieferten Rezepturen und nach dem persönlichen Geschmack des jeweiligen Braumeisters.</strong>
          </p>
          <p>
            Einzigartig, echt und regional. Damit schützen diese Privatbrauereien die seit Generationen gewachsene Biervielfalt in unserem Land.
          </p>
        </div>
        <div className="visual-col">
          <img src="https://picsum.photos/seed/stiegl-stamp/200/200" alt="Privatbrauerei Stamp" className="stamp-overlay" />
          <div className="polaroid-frame">
            <img src="https://picsum.photos/seed/brewery-history/800/1000" alt="Vintage Brewery" />
          </div>
        </div>
      </section>

      <section className="hero-video-section">
        <video 
          ref={videoRef}
          id="philosophieVideo"
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
      </section>

      <section className="transparency-wrapper">
        <div className="transparency-container">
          <div className="red-strip">
            <div className="red-strip-content">
              <p className="strip-text">
                Mit dieser Herkunftskennzeichnung „Österreichische Privatbrauerei" wollen wir auf den Etiketten unserer Stiegl-Biere aufzeigen auf den ersten Blick sichtbar machen, dass diese Produkte mit der Braukunst aus Österreichischen Privatbrauereien gebraut wurde.
              </p>
              <a href="#" className="strip-button">PRIVATBRAUEREIEN.AT</a>
            </div>
          </div>
          
          <div className="floating-card">
            <span className="card-label">Mit Vertrauen genießen</span>
            <h2 className="card-title">Stiegl steht für Transparenz</h2>
            <p className="card-text">
              Unsere Konsumentinnen und Konsumenten können durch die Herkunftskennzeichnung mit gutem Gewissen genießen. Nicht mehr und nicht weniger.
            </p>
          </div>
        </div>
      </section>

      <section className="vielfalt-section">
        <div className="vielfalt-container">
          <article className="content-col">
            <span className="subhead">Regionale Vielfalt</span>
            <h2 className="main-title">Wertegemeinschaft <br />für die Bierkultur</h2>
            <div className="body-text">
              <p>
                Die regionale Vielfalt der Privatbrauereien Österreichs ist beachtlich. Neben der Stieglbrauerei rund um Heinrich Dieter Kiener haben sich dem Verband unter anderem auch die <strong>Ottakringer Brauerei</strong> aus Wien sowie die mittelständischen <strong>CulturBrauer</strong> rund um die Braucommune in Freistadt und die <strong>Brauerei Schloss Eggenberg</strong> (beide Oberösterreich), die <strong>Privatbrauerei Hirt</strong> aus Kärnten, die <strong>Mohrenbrauerei</strong> in Vorarlberg, die <strong>Brauerei Murau</strong> aus der Steiermark, die <strong>Trumer Privatbrauerei</strong> rund um Josef Sigl aus Salzburg sowie die beiden <strong>Bierbrauereien Schrems und Zwettl</strong> aus Niederösterreich angeschlossen.
              </p>
            </div>
            <a href="#" className="ghost-btn">VIDEO ANSEHEN</a>
          </article>

          <div className="image-col">
            <img src="https://picsum.photos/seed/stiegl-vielfalt/1000/650" alt="Regionale Vielfalt Stiegl" className="vielfalt-img" />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Lust auf<br />
            unabhängig<br />
            gebrautes Bier?
          </h2>
          <a href="#" className="cta-red-btn">ZUM SHOP</a>
        </div>
      </section>
    </div>
  );
};

export default Philosophie;
