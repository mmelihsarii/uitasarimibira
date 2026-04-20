import { useState, useRef, useEffect } from 'react';
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
            <a href="#">Philosophie</a>
            <a href="#">Geschichte</a>
          </div>
          <div className="col">
            <h3>SORTIMENT</h3>
            <a href="#">Klassiker</a>
            <a href="#">Alkoholfrei</a>
          </div>
          <div className="col">
            <h3>NACHHALTIGKEIT</h3>
            <a href="#">Rohstoffe</a>
            <a href="#">Slow Brewing</a>
          </div>
          <div className="col">
            <h3>SERVICE</h3>
            <a href="#">FAQ</a>
            <a href="#">Newsletter</a>
          </div>
        </div>
      );
    }
    
    if (activeDropdown === 'erleben') {
      return (
        <div className="mega-grid">
          <div className="logo mega-logo">
            <span className="logo-txt mega-txt">Stiegl</span>
          </div>
          <div className="col">
            <h3>BRAUWELT</h3>
            <a href="#">Museum</a>
            <a href="#">Gastronomie</a>
            <a href="#">Events</a>
          </div>
          <div className="col">
            <h3>FÜHRUNGEN</h3>
            <a href="#">Brauereiführung</a>
            <a href="#">Gruppenführungen</a>
          </div>
          <div className="col">
            <h3>SHOP</h3>
            <a href="#">Online Shop</a>
            <a href="#">Braushop</a>
          </div>
          <div className="col">
            <h3>EVENTS</h3>
            <a href="#">Veranstaltungen</a>
            <a href="#">Vermietung</a>
          </div>
        </div>
      );
    }
    
    if (activeDropdown === 'karriere') {
      return (
        <div className="mega-grid">
          <div className="logo mega-logo">
            <span className="logo-txt mega-txt">Stiegl</span>
          </div>
          <div className="col">
            <h3>JOBS</h3>
            <a href="#">Offene Stellen</a>
            <a href="#">Initiativbewerbung</a>
          </div>
          <div className="col">
            <h3>ÜBER UNS</h3>
            <a href="#">Wir Stiegler</a>
            <a href="#">Arbeitswelten</a>
          </div>
          <div className="col">
            <h3>BENEFITS</h3>
            <a href="#">Mitarbeitervorteile</a>
            <a href="#">Weiterbildung</a>
          </div>
          <div className="col">
            <h3>KONTAKT</h3>
            <a href="#">HR Team</a>
            <a href="#">Bewerbungstipps</a>
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
            <div className="logo">
              <span className="logo-pre">Salzburger</span>
              <span className="logo-txt">Stiegl</span>
            </div>
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
                  onMouseEnter={() => handleMenuEnter('karriere')}
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
        
        {activeDropdown === 'brauerei' && (
          <div className="mega-bottom">
            <div className="bottom-section">
              <div className="bottom-item">
                <div className="bottom-icon brauwelt-icon">
                  <div className="icon-placeholder">🏭</div>
                </div>
                <h4>BRAUWELT</h4>
                <p>Die Bier-Erlebniswelt in Salzburg</p>
              </div>
              
              <div className="bottom-item">
                <div className="bottom-icon freundeskreis-icon">
                  <div className="icon-placeholder">👥</div>
                </div>
                <h4>FREUNDESKREIS</h4>
                <p>Der virtuelle Stiegl-Stammtisch</p>
              </div>
              
              <div className="bottom-item">
                <div className="bottom-icon wildshut-icon">
                  <div className="icon-placeholder">�</div>
                </div>
                <h4>WILDSHUT</h4>
                <p>Das 1. Biergut Österreichs</p>
              </div>
            </div>
            
            <div className="bottom-right">
              <h4>ERLEBNISWELTEN</h4>
              <a href="#">Stiegl-Klosterhof Linz</a>
              <a href="#">Stiegl Brau Innviertl</a>
              <a href="#">Stiegl-Keller Salzburg</a>
              <a href="#">Gastronomie Salzburg</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
