import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const triggerRefs = useRef({});
  const menuRef = useRef(null);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (menuRef.current) {
        const isOverTrigger = Object.values(triggerRefs.current).some(ref => 
          ref && ref.contains(e.target)
        );
        const isOverMenu = menuRef.current.contains(e.target);
        
        if (!isOverTrigger && !isOverMenu) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  const handleMenuEnter = (menuType) => {
    setActiveDropdown(menuType);
  };

  const renderMegaMenu = () => {
    if (activeDropdown === 'brauerei') {
      return (
        <div className="mega-grid">
          <div className="logo mega-logo">
            <span className="logo-txt mega-txt">Stiegl</span>
          </div>
          <div className="col">
            <h3>PRIVATBRAUEREI</h3>
            <Link to="/philosophie">Unsere Philosophie</Link>
            <Link to="/unabhaengig">100% unabhängig</Link>
            <Link to="/geschichte">Geschichte</Link>
            <Link to="/geschaeftsfuehrung">Geschäftsführung</Link>
            <a href="#">Stiegl-Gut Wildshut</a>
            <Link to="/auszeichnungen">Auszeichnungen</Link>
          </div>
          <div className="col">
            <h3>SORTIMENT</h3>
            <Link to="/klassiker#klassiker">Klassiker</Link>
            <Link to="/klassiker#alkoholfrei">Alkoholfrei</Link>
            <Link to="/klassiker#sondereditionen">Sondereditionen</Link>
            <Link to="/klassiker#kreativ-bio-hausbiere">Kreativ Bio Hausbiere</Link>
            <Link to="/klassiker#wildshut-produkte">Wildshut Produkte</Link>
            <Link to="/klassiker#stieglitz">Stieglitz</Link>
          </div>
          <div className="col">
            <h3>NACHHALTIGKEIT</h3>
            <Link to="/nachhaltigkeit">Nachhaltigkeit</Link>
            <Link to="/rohstoffe">Rohstoffe</Link>
            <Link to="/slow-brewing">Slow Brewing</Link>
            <Link to="/regionale-partnerschaften">Regionale Partnerschaften</Link>
            <Link to="/zertifikate-guetesiegel">Zertifikate & Gütesiegel</Link>
            <Link to="/nachhaltigkeit#nachhaltigkeitsbericht">Nachhaltigkeitsbericht</Link>
          </div>
          <div className="col">
            <h3>SERVICE</h3>
            <Link to="/presse">Presse</Link>
            <Link to="/mediathek-downloads">Mediadeck & Downloads</Link>
            <Link to="/sponsoring">Sponsoring</Link>
            <Link to="/ansprechpersonen">Ansprechpartner</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/newsletter">Newsletter</Link>
            <Link to="/blog">Aktuelles</Link>
          </div>
        </div>
      );
    }
    
    if (activeDropdown === 'erleben') {
      return (
        <div className="mega-grid-erleben">
          <div className="erleben-item">
            <div className="erleben-placeholder"></div>
            <h4>BRAUWELT</h4>
            <p>Die Bier-Erlebniswelt in Salzburg</p>
          </div>
          
          <div className="erleben-item">
            <div className="erleben-placeholder"></div>
            <h4>FREUNDESKREIS</h4>
            <p>Der virtuelle Stiegl-Stammtisch</p>
          </div>
          
          <div className="erleben-item">
            <div className="erleben-placeholder"></div>
            <h4>WILDSHUT</h4>
            <p>Das 1. Biergut Österreichs</p>
          </div>
          
          <div className="erleben-item">
            <div className="erleben-placeholder"></div>
            <h4>ERLEBNISWELTEN</h4>
            <p>Stiegl-Klosterhof Linz<br/>Stiegl Brau Innviertl<br/>Stiegl-Keller Salzburg<br/>Gastronomie Salzburg</p>
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <>
      <header className="stiegl-header">
        <div className="header-content">
          <div className="header-left">
            <Link to="/" className="logo">
              <span className="logo-pre">Salzburger</span>
              <span className="logo-txt">Stiegl</span>
            </Link>
            <nav>
              <ul>
                <li 
                  ref={el => triggerRefs.current.brauerei = el}
                  onMouseEnter={() => handleMenuEnter('brauerei')}
                >
                  <a href="#">Die Brauerei</a>
                </li>
                <li 
                  ref={el => triggerRefs.current.erleben = el}
                  onMouseEnter={() => handleMenuEnter('erleben')}
                >
                  <a href="#">Stiegl Erleben</a>
                </li>
                <li 
                  ref={el => triggerRefs.current.karriere = el}
                >
                  <a href="#">Karriere</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <a href="#" className="shop-btn">ONLINE SHOP</a>
            <div className="lang">DE / EN</div>
          </div>
        </div>
      </header>

      <div 
        ref={menuRef}
        className={`mega-menu ${activeDropdown ? 'show' : ''}`}
      >
        {renderMegaMenu()}
      </div>
    </>
  );
};

export default Header;
