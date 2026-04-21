import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ChevronDown, Cookie } from 'lucide-react';
import { StieglLogo } from '../components/StieglLogo';
import { useLocation } from 'react-router-dom';
import '../components/StieglLogo.css';
import './Klassiker.css';

const HERO_BG = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1920";
const BEER_HAND = "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=1200";
const BEER_GLASS = "https://images.unsplash.com/photo-1436018626274-89acd67ae290?auto=format&fit=crop&q=80&w=800";

const CATEGORIES = [
  { id: 'klassiker', name: 'KLASSIKER', img: 'https://picsum.photos/seed/stiegl-klassiker/300/400' },
  { id: 'alkoholfrei', name: 'ALKOHOLFREI', img: 'https://picsum.photos/seed/stiegl-alkoholfrei/300/400' },
  { id: 'sonder', name: 'SONDEREDITIONEN', img: 'https://picsum.photos/seed/stiegl-sonder/300/400' },
  { id: 'bio', name: 'BIO HAUSBIERE', img: 'https://picsum.photos/seed/stiegl-bio/300/400' },
  { id: 'wildshut', name: 'WILDSHUT PRODUKTE', img: 'https://picsum.photos/seed/stiegl-wildshut/300/400' },
  { id: 'stieglitz', name: 'STIEGLITZ', img: 'https://picsum.photos/seed/stiegl-stieglitz/300/400' },
];

const KLASSIKER_BOTTLES = [
  { 
    id: 'goldbräu', 
    name: 'Stiegl-Goldbräu', 
    img: 'https://picsum.photos/seed/sonder1/200/500',
    description: 'Das meistgetrunkene Bier Österreichs. Ein vollmundiges Märzen mit ausgewogenem Malzcharakter und feiner Hopfennote.'
  },
  { 
    id: 'pils', 
    name: 'Stiegl-Pils', 
    img: 'https://picsum.photos/seed/sonder2/200/500',
    description: 'Ein klassisches Pilsener nach böhmischer Brauart. Feinherb im Geschmack mit einer eleganten Hopfenbittere.'
  },
  { 
    id: 'mythen', 
    name: "Stiegl-Sonderedition 'Mythen'", 
    img: 'https://picsum.photos/seed/mythen/200/500',
    description: 'Limitierte Abfüllung: Ein komplexer, dunkler Doppelbock mit Karamellnoten und würzigem Abgang.'
  },
  { 
    id: 'weisse', 
    name: 'Stiegl-Weisse Naturtrüb', 
    img: 'https://picsum.photos/seed/sonder4/200/500',
    description: 'Naturtrübes Weizenbier mit fruchtigen Aromen von Banane und Nelke. Erfrischend und vollmundig zugleich.'
  },
  { 
    id: 'paracelsus', 
    name: 'Stiegl-Paracelsus Bio-Zwickl', 
    img: 'https://picsum.photos/seed/sonder5/200/500',
    description: 'Ungefiltertes Bio-Zwicklbier aus kontrolliert biologischem Anbau. Naturbelassen mit vollem Geschmack.'
  },
  { 
    id: 'columbus', 
    name: 'Stiegl-Columbus 1492', 
    img: 'https://picsum.photos/seed/sonder6/200/500',
    description: 'Kräftiges Festbier zum Jubiläum. Malzbetont mit einer Spur Karamell und ausgewogener Hopfenbittere.'
  },
  { 
    id: 'radler-zitrone', 
    name: 'Stiegl-Radler Zitrone', 
    img: 'https://picsum.photos/seed/sonder7/200/500',
    description: 'Erfrischende Mischung aus Bier und natürlicher Zitronenlimonade. Perfekt für heiße Sommertage.'
  },
  { 
    id: 'radler-grapefruit', 
    name: 'Stiegl-Radler Grapefruit', 
    img: 'https://picsum.photos/seed/sonder8/200/500',
    description: 'Spritzige Kombination aus Bier und Grapefruitsaft. Herb-fruchtig mit einer angenehmen Bitternote.'
  },
];

const ALKOHOLFREI_BOTTLES = [
  { 
    id: 'null-komma-null', 
    name: 'Stiegl 0,0% Alkoholfrei', 
    img: 'https://picsum.photos/seed/stiegl-alkoholfrei/300/400',
    description: 'Vollmundiger Biergenuss ganz ohne Alkohol. Isotonisch und erfrischend nach dem Sport.'
  },
  { 
    id: 'sport-weisse', 
    name: 'Stiegl-Sport Weisse', 
    img: 'https://picsum.photos/seed/stiegl-alkoholfrei/300/400',
    description: 'Alkoholfreies Weizenbier mit natürlicher Isotonie. Ideal zur Regeneration nach sportlicher Betätigung.'
  },
  { 
    id: 'radler-alkoholfrei', 
    name: 'Stiegl-Radler 0,0%', 
    img: 'https://picsum.photos/seed/stiegl-alkoholfrei/300/400',
    description: 'Erfrischender Radler ohne Alkohol. Natürliche Zitrone trifft auf malzigen Biergeschmack.'
  },
];

const SONDER_BOTTLES = [
  { 
    id: 'sonder1', 
    name: 'Stiegl-Mythen Edition', 
    img: 'https://picsum.photos/seed/stiegl-sonder/300/400',
    description: 'Limitierte Sonderedition mit einzigartigem Design. Kräftig im Geschmack mit würzigen Noten.'
  },
  { 
    id: 'sonder2', 
    name: 'Stiegl-Steinbock', 
    img: 'https://picsum.photos/seed/stiegl-sonder/300/400',
    description: 'Starkes Bockbier mit malzigem Charakter. Perfekt für kalte Wintertage.'
  },
  { 
    id: 'sonder3', 
    name: 'Stiegl-Jubiläum', 
    img: 'https://picsum.photos/seed/stiegl-sonder/300/400',
    description: 'Festbier zum Jubiläum gebraut. Vollmundig mit ausgewogener Hopfenbittere.'
  },
];

const BIO_HAUSBIERE = [
  { 
    id: 'bio1', 
    name: 'Stiegl-Hausbier Pale Ale', 
    img: 'https://picsum.photos/seed/stiegl-bio/300/400',
    description: 'Hopfenbetontes Bio-Pale Ale. Fruchtig-herb mit amerikanischen Hopfensorten.'
  },
  { 
    id: 'bio2', 
    name: 'Stiegl-Hausbier IPA', 
    img: 'https://picsum.photos/seed/stiegl-bio/300/400',
    description: 'India Pale Ale aus biologischem Anbau. Intensiv hopfig mit tropischen Aromen.'
  },
  { 
    id: 'bio3', 
    name: 'Stiegl-Hausbier Amber', 
    img: 'https://picsum.photos/seed/stiegl-bio/300/400',
    description: 'Bernsteinfarbenes Bio-Bier. Malzig-süß mit Karamellnoten.'
  },
  { 
    id: 'bio4', 
    name: 'Stiegl-Hausbier Porter', 
    img: 'https://picsum.photos/seed/stiegl-bio/300/400',
    description: 'Dunkles Bio-Porter. Röstaromen von Kaffee und Schokolade.'
  },
  { 
    id: 'bio5', 
    name: 'Stiegl-Hausbier Weizen', 
    img: 'https://picsum.photos/seed/stiegl-bio/300/400',
    description: 'Bio-Weizenbier naturtrüb. Fruchtig-frisch mit Bananennoten.'
  },
  { 
    id: 'bio6', 
    name: 'Stiegl-Hausbier Lager', 
    img: 'https://picsum.photos/seed/stiegl-bio/300/400',
    description: 'Klassisches Bio-Lager. Ausgewogen und bekömmlich.'
  },
];

const WILDSHUT_PRODUKTE = [
  { 
    id: 'wild1', 
    name: 'Wildshut Urgetreide Hell', 
    img: 'https://picsum.photos/seed/stiegl-wildshut/300/400',
    description: 'Aus eigenem Bio-Urgetreide. Naturbelassen und ursprünglich im Geschmack.'
  },
  { 
    id: 'wild2', 
    name: 'Wildshut Emmer Bier', 
    img: 'https://picsum.photos/seed/stiegl-wildshut/300/400',
    description: 'Gebraut mit Emmer-Urgetreide. Nussig-würzig mit vollem Körper.'
  },
  { 
    id: 'wild3', 
    name: 'Wildshut Einkorn Ale', 
    img: 'https://picsum.photos/seed/stiegl-wildshut/300/400',
    description: 'Einkorn aus eigenem Anbau. Mild-süßlich mit feiner Hopfennote.'
  },
  { 
    id: 'wild4', 
    name: 'Wildshut Dinkel Weisse', 
    img: 'https://picsum.photos/seed/stiegl-wildshut/300/400',
    description: 'Dinkelweizen vom Biergut. Fruchtig-spritzig und erfrischend.'
  },
  { 
    id: 'wild5', 
    name: 'Wildshut Roggen Bier', 
    img: 'https://picsum.photos/seed/stiegl-wildshut/300/400',
    description: 'Mit Bio-Roggen gebraut. Würzig-kräftig mit rustikalem Charakter.'
  },
  { 
    id: 'wild6', 
    name: 'Wildshut Gerste Pur', 
    img: 'https://picsum.photos/seed/stiegl-wildshut/300/400',
    description: 'Reines Gerstenbier. Malzbetont mit ausgewogener Bittere.'
  },
  { 
    id: 'wild7', 
    name: 'Wildshut Honig Bier', 
    img: 'https://picsum.photos/seed/stiegl-wildshut/300/400',
    description: 'Mit Wildshut-Honig verfeinert. Süßlich-mild und harmonisch.'
  },
  { 
    id: 'wild8', 
    name: 'Wildshut Kräuter Ale', 
    img: 'https://picsum.photos/seed/stiegl-wildshut/300/400',
    description: 'Mit Kräutern aus dem Biergut. Würzig-aromatisch und besonders.'
  },
  { 
    id: 'wild9', 
    name: 'Wildshut Whisky', 
    img: 'https://picsum.photos/seed/stiegl-wildshut/300/400',
    description: 'Aus Bierdestillat gereift. Rauchig-malzig mit Eichenfassnoten.'
  },
  { 
    id: 'wild10', 
    name: 'Wildshut Gin', 
    img: 'https://picsum.photos/seed/stiegl-wildshut/300/400',
    description: 'Mit Wildshut-Botanicals. Wacholder trifft auf heimische Kräuter.'
  },
  { 
    id: 'wild11', 
    name: 'Wildshut Vodka', 
    img: 'https://picsum.photos/seed/stiegl-wildshut/300/400',
    description: 'Aus Bio-Getreide destilliert. Klar und rein im Geschmack.'
  },
  { 
    id: 'wild12', 
    name: 'Wildshut Likör', 
    img: 'https://picsum.photos/seed/stiegl-wildshut/300/400',
    description: 'Mit Früchten vom Biergut. Süß-fruchtig und aromatisch.'
  },
];

const STIEGLITZ_PRODUKTE = [
  { 
    id: 'litz1', 
    name: 'Stieglitz Cola', 
    img: 'https://picsum.photos/seed/stiegl-stieglitz/300/400',
    description: 'Erfrischende Limonade mit Cola-Geschmack. Natürlich und ohne Zusatzstoffe.'
  },
  { 
    id: 'litz2', 
    name: 'Stieglitz Orange', 
    img: 'https://picsum.photos/seed/stiegl-stieglitz/300/400',
    description: 'Spritzige Orangenlimonade. Mit echtem Fruchtsaft und natürlicher Süße.'
  },
  { 
    id: 'litz3', 
    name: 'Stieglitz Zitrone', 
    img: 'https://picsum.photos/seed/stiegl-stieglitz/300/400',
    description: 'Frische Zitronenlimonade. Herb-süß und erfrischend.'
  },
  { 
    id: 'litz4', 
    name: 'Stieglitz Holunder', 
    img: 'https://picsum.photos/seed/stiegl-stieglitz/300/400',
    description: 'Holunderblütenlimonade. Blumig-fruchtig mit feiner Note.'
  },
];

const BottleDisplay = ({ bottles, onHover, activeId }) => {
  return (
    <div className="bottle-display-container">
      {bottles.map((bottle) => (
        <div 
          key={bottle.id} 
          className="bottle-item"
          onMouseEnter={() => onHover && onHover(bottle.id)}
          onMouseLeave={() => onHover && onHover(null)}
        >
          <motion.div
            animate={{ y: activeId === bottle.id ? -45 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bottle-main"
          >
            <img src={bottle.img} alt={bottle.name} referrerPolicy="no-referrer" />
          </motion.div>

          <div className="bottle-reflection">
            <motion.img 
              src={bottle.img} 
              animate={{ y: activeId === bottle.id ? 45 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="reflection-img"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const SectionHeader = ({ subtitle, title }) => (
  <div className="section-header">
    <span className="section-subtitle">{subtitle}</span>
    <h2 className="section-title">{title}</h2>
  </div>
);

const Klassiker = () => {
  const location = useLocation();
  const [hoveredKlassikerId, setHoveredKlassikerId] = useState(null);
  const [hoveredAlkoholfreiId, setHoveredAlkoholfreiId] = useState(null);
  const [hoveredSonderId, setHoveredSonderId] = useState(null);
  const [hoveredBioId, setHoveredBioId] = useState(null);
  const [hoveredWildshutId, setHoveredWildshutId] = useState(null);
  const [hoveredStieglitzId, setHoveredStieglitzId] = useState(null);
  
  // Smooth scroll to section on hash change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);
  
  const activeKlassikerBottle = KLASSIKER_BOTTLES.find(b => b.id === hoveredKlassikerId);
  const activeAlkoholfreiBottle = ALKOHOLFREI_BOTTLES.find(b => b.id === hoveredAlkoholfreiId);
  const activeSonderBottle = SONDER_BOTTLES.find(b => b.id === hoveredSonderId);
  const activeBioBottle = BIO_HAUSBIERE.find(b => b.id === hoveredBioId);
  const activeWildshutBottle = WILDSHUT_PRODUKTE.find(b => b.id === hoveredWildshutId);
  const activeStieglitzBottle = STIEGLITZ_PRODUKTE.find(b => b.id === hoveredStieglitzId);

  return (
    <div className="klassiker-new-page">
      {/* Top Section: Hero */}
      <section className="hero-new">
        <div 
          className="hero-bg"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${HERO_BG})` }}
        />
        
        <div className="hero-logo-area">
          <StieglLogo className="hero-logo-scale" />
          <div className="hero-badge">
            <span>Österreichische Biervielfalt</span>
          </div>
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-beer-image">
            <img src={BEER_HAND} alt="Stiegl Hell" />
          </div>

          <div className="hero-text-play">
            <motion.button 
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="hero-play-btn"
            >
              <Play className="play-icon" size={40} />
            </motion.button>
            <h1 className="hero-title">
              UND<br />
              STOLZ<br />
              DRAUF.
            </h1>
          </div>
        </div>
      </section>

      {/* Middle Section: Product Gallery */}
      <section className="product-gallery">
        <div className="gallery-container">
          <div className="gallery-grid">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="gallery-item">
                {cat.name === 'KLASSIKER' && (
                  <div className="item-logo-top">
                    <StieglLogo className="item-logo-small" />
                  </div>
                )}

                <div className="item-image-wrapper">
                  <div className="item-shadow-line" />
                  <img src={cat.img} alt={cat.name} />
                </div>

                <span className="item-label">{cat.name}</span>
                <ChevronDown size={18} className="item-chevron" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section: Content Area */}
      <section className="content-bottom">
        <div className="content-container">
          <div className="content-grid">
            <div className="content-visual">
              <img src={BEER_GLASS} alt="Brewing Passion" />
            </div>

            <div className="content-text-area">
              <div className="text-columns">
                <p>
                  Braukunst auf höchster Stufe gefällig? Gerne! Und nachdem nicht jeder Tag gleich ist und wir die Feste feiern, wie sie fallen, erfreuen wir uns bei Stiegl an einer großen Sortenvielfalt. Schließlich lassen unser Ideenreichtum und die Leidenschaft für das Brauhandwerk ein breites Spektrum des Genusses entstehen.
                </p>
                <p>
                  Unsere Produktpalette aus der Salzburger Traditions-Brauerei reicht dabei vom Klassiker Stiegl-Goldbräu und Stiegl-Hell über die alkoholfreien Produkte bis zu den Stiegl-Kreativ Bio Hausbieren.
                </p>
              </div>

              <div className="action-buttons">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: '#000' }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  JETZT SHOPPEN
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: '#E31A1C', color: '#fff' }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  ZUR BRAUWELT
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottle Display Sections */}
      <div className="bottles-section-wrapper">
        <div className="red-top-bar" />
        
        <div className="bottles-container">
          {/* KLASSIKER Section */}
          <section id="klassiker" className="bottle-section">
            <SectionHeader subtitle="Allseits bekannt" title="Klassiker" />
            <BottleDisplay 
              bottles={KLASSIKER_BOTTLES} 
              onHover={setHoveredKlassikerId}
              activeId={hoveredKlassikerId}
            />

            <div className="bottle-description-area">
              <AnimatePresence mode="wait">
                {hoveredKlassikerId && activeKlassikerBottle?.description && (
                  <motion.div
                    key={hoveredKlassikerId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.1 }}
                    className="bottle-description"
                  >
                    <h3>{activeKlassikerBottle.name}</h3>
                    <p>{activeKlassikerBottle.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* ALKOHOLFREI Section */}
          <section id="alkoholfrei" className="bottle-section">
            <SectionHeader subtitle="Ohne Alkohol" title="Alkoholfrei" />
            <BottleDisplay 
              bottles={ALKOHOLFREI_BOTTLES} 
              onHover={setHoveredAlkoholfreiId}
              activeId={hoveredAlkoholfreiId}
            />
            <div className="bottle-description-area">
              <AnimatePresence mode="wait">
                {hoveredAlkoholfreiId && activeAlkoholfreiBottle?.description && (
                  <motion.div key={hoveredAlkoholfreiId} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} transition={{ duration: 0.1 }} className="bottle-description">
                    <h3>{activeAlkoholfreiBottle.name}</h3>
                    <p>{activeAlkoholfreiBottle.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          <div className="section-divider" />

          {/* SONDEREDITIONEN Section */}
          <section id="sondereditionen" className="bottle-section">
            <SectionHeader subtitle="Limitiert" title="Sondereditionen" />
            <BottleDisplay 
              bottles={SONDER_BOTTLES} 
              onHover={setHoveredSonderId}
              activeId={hoveredSonderId}
            />
            <div className="bottle-description-area">
              <AnimatePresence mode="wait">
                {hoveredSonderId && activeSonderBottle?.description && (
                  <motion.div key={hoveredSonderId} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} transition={{ duration: 0.1 }} className="bottle-description">
                    <h3>{activeSonderBottle.name}</h3>
                    <p>{activeSonderBottle.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          <div className="section-divider" />

          {/* BIO HAUSBIERE Section */}
          <section id="kreativ-bio-hausbiere" className="bottle-section">
            <SectionHeader subtitle="Kreative Braukunst" title="Kreativ Bio Hausbiere" />
            <BottleDisplay 
              bottles={BIO_HAUSBIERE} 
              onHover={setHoveredBioId}
              activeId={hoveredBioId}
            />
            <div className="bottle-description-area">
              <AnimatePresence mode="wait">
                {hoveredBioId && activeBioBottle?.description && (
                  <motion.div key={hoveredBioId} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} transition={{ duration: 0.1 }} className="bottle-description">
                    <h3>{activeBioBottle.name}</h3>
                    <p>{activeBioBottle.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          <div className="section-divider" />

          {/* WILDSHUT PRODUKTE Section */}
          <section id="wildshut-produkte" className="bottle-section">
            <SectionHeader subtitle="Sortenvielfalt" title="Wildshut Produkte" />
            <BottleDisplay 
              bottles={WILDSHUT_PRODUKTE} 
              onHover={setHoveredWildshutId}
              activeId={hoveredWildshutId}
            />
            <div className="bottle-description-area">
              <AnimatePresence mode="wait">
                {hoveredWildshutId && activeWildshutBottle?.description && (
                  <motion.div key={hoveredWildshutId} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} transition={{ duration: 0.1 }} className="bottle-description">
                    <h3>{activeWildshutBottle.name}</h3>
                    <p>{activeWildshutBottle.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          <div className="section-divider" />

          {/* STIEGLITZ Section */}
          <section id="stieglitz" className="bottle-section">
            <SectionHeader subtitle="Limonade" title="Stieglitz" />
            <BottleDisplay 
              bottles={STIEGLITZ_PRODUKTE} 
              onHover={setHoveredStieglitzId}
              activeId={hoveredStieglitzId}
            />
            <div className="bottle-description-area">
              <AnimatePresence mode="wait">
                {hoveredStieglitzId && activeStieglitzBottle?.description && (
                  <motion.div key={hoveredStieglitzId} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} transition={{ duration: 0.1 }} className="bottle-description">
                    <h3>{activeStieglitzBottle.name}</h3>
                    <p>{activeStieglitzBottle.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </div>

        {/* Final CTA Section */}
        <section className="final-cta-section">
          <div className="final-cta-content">
            <h2 className="final-cta-title">
              Durstig<br />
              geworden?
            </h2>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, backgroundColor: '#000' }}
              whileTap={{ scale: 0.95 }}
              className="final-cta-button"
            >
              ZUM SHOP
            </motion.a>
          </div>
        </section>

        {/* Cookie Icon */}
        <div className="cookie-icon-wrapper">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="cookie-icon"
          >
            <Cookie size={28} />
          </motion.div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="simple-footer">
        <div className="footer-content">
          <StieglLogo className="footer-logo" />
          <p>© 2026 STIEGLBRAUEREI ZU SALZBURG. PRIVATBRAUEREI SEIT 1492.</p>
        </div>
      </footer>
    </div>
  );
};

export default Klassiker;
