import React from 'react';
import './Ansprechpersonen.css';

const Ansprechpersonen = () => {
  const personnel = [
    {
      group: "Geschäftsführung",
      members: [
        { 
          name: "Mag. Herbert Bauer", 
          title: "Geschäftsführer Brauerei- und Getränkegeschäft", 
          phone: "+43 50 1492-2001", 
          email: "office@stiegl.at", 
          img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
        },
        { 
          name: "Dipl. Brmst. Christian Pöpperl", 
          title: "Geschäftsführer Brautechnik & Chefbraumeister", 
          phone: "+43 50 1492-1402", 
          email: "office@stiegl.at", 
          img: "https://images.unsplash.com/photo-1519085166427-f0b8ec42d06c?auto=format&fit=crop&q=80&w=400" 
        },
        { 
          name: "Erwin Huber", 
          title: "Geschäftsführer Finanzen", 
          phone: "+43 50 1492-2002", 
          email: "office@stiegl.at", 
          img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" 
        }
      ]
    },
    {
      group: "Generalrepräsentant",
      members: [
        { 
          name: "Dkfm. Robert Schraml", 
          title: "Generalrepräsentant", 
          phone: "+43 50 1492-1100", 
          email: "office@stiegl.at", 
          img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
        }
      ]
    }
  ];

  const branches = [
    { 
      name: "Niederlassung Asten", 
      address1: "Technologiestraße 3", 
      address2: "4481 Asten", 
      country: "Österreich", 
      phone: "+43 50 1492-2599", 
      email: "asten@stiegl.at" 
    },
    { 
      name: "Niederlassung Bruck", 
      address1: "Franz Ledererstr. 16", 
      address2: "5671 Bruck a. d. Glocknerstraße", 
      country: "Österreich", 
      phone: "+43 50 1492-2299", 
      email: "bruck@stiegl.at" 
    },
    { 
      name: "Niederlassung Flachau", 
      address1: "Reitdorf 95", 
      address2: "5542 Flachau", 
      country: "Österreich", 
      phone: "+43 50 1492-2799", 
      email: "flachau@stiegl.at" 
    },
    { 
      name: "Niederlassung Inzing", 
      address1: "Schießstand 11", 
      address2: "6401 Inzing", 
      country: "Österreich", 
      phone: "+43 50 1492-2699", 
      email: "tirol-west@stiegl.at" 
    },
    { 
      name: "Niederlassung Salzburg", 
      address1: "Kendlerstr. 1", 
      address2: "5020 Salzburg", 
      country: "Österreich", 
      phone: "+43 50 1492-2199", 
      email: "salzburg@stiegl.at" 
    },
    { 
      name: "Niederlassung Wien", 
      address1: "Freudenauer Hafenstraße 20", 
      address2: "1020 Wien", 
      country: "Österreich", 
      phone: "+43 50 1492-2899", 
      email: "wien@stiegl.at" 
    },
    { 
      name: "Niederlassung Wörgl", 
      address1: "Gewerbepark 7", 
      address2: "6300 Wörgl", 
      country: "Österreich", 
      phone: "+43 50 1492-2499", 
      email: "woergl@stiegl.at" 
    }
  ];

  return (
    <div className="ansprechpersonen-page">
      {/* HERO SECTION */}
      <section className="ansprechpersonen-hero">
        <div className="hero-content">
          <div className="hero-title-box">
            <h1>Niederlassungen &<br />Ansprechpersonen</h1>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro-section">
        <span className="intro-label">Kontaktieren Sie unsere Stiegler:innen</span>
        <h2 className="intro-title">
          Finden Sie die richtige<br />Ansprechperson
        </h2>
        <div className="dropdown-wrapper">
          <button className="dropdown-button">
            Bitte wählen Sie einen Bereich aus
            <span className="dropdown-icon">▼</span>
          </button>
        </div>
      </section>

      {/* PERSONNEL SECTION */}
      <section className="personnel-section">
        {personnel.map((section, idx) => (
          <div key={idx} className="personnel-group">
            <h3 className="group-title">{section.group}</h3>
            <div className="personnel-grid">
              {section.members.map((person, pIdx) => (
                <div key={pIdx} className="person-card">
                  <div className="person-image-wrapper">
                    <img 
                      src={person.img} 
                      alt={person.name} 
                      className="person-image"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="person-info">
                    <h4 className="person-name">{person.name}</h4>
                    <p className="person-title">{person.title}</p>
                  </div>
                  <div className="person-contact">
                    <p>{person.phone}</p>
                    <a href={`mailto:${person.email}`}>{person.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* RETAILER BANNER */}
      <section className="retailer-banner">
        <div className="retailer-content">
          <div className="retailer-image">
            <img 
              src="https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=600" 
              alt="Stiegl Beer Crate" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="retailer-text">
            <h2>Sie suchen einen Getränkegroßfachhändler in Ihrer Nähe?</h2>
          </div>
          <div className="retailer-button">
            <button>HÄNDLER FINDEN</button>
          </div>
        </div>
      </section>

      {/* BRANCHES SECTION */}
      <section className="branches-section">
        <div className="branches-header">
          <span className="branches-label">Auf einen Blick</span>
          <h2 className="branches-title">Unsere Niederlassungen</h2>
          <p className="branches-subtitle">Stiegl Getränke & Service GmbH & Co.KG</p>
        </div>

        <div className="branches-grid">
          {branches.map((branch, idx) => (
            <div key={idx} className="branch-card">
              <h4>{branch.name}</h4>
              <div className="branch-address">
                <p>{branch.address1}</p>
                <p>{branch.address2}</p>
                <p>{branch.country}</p>
              </div>
              <div className="branch-contact">
                <a href={`tel:${branch.phone}`}>{branch.phone}</a>
                <a href={`mailto:${branch.email}`}>{branch.email}</a>
              </div>
            </div>
          ))}
        </div>

        {/* CUSTOMER CENTER */}
        <div className="customer-center">
          <h2 className="customer-center-title">Unser Kundencenter</h2>
          <p className="customer-center-subtitle">Stiegl Getränke & Service GmbH & Co.KG</p>
          <div className="customer-center-card">
            <h4>Kundencenter</h4>
            <div className="customer-center-address">
              <p>Kendlerstraße 1</p>
              <p>5017 Salzburg</p>
              <p>Österreich</p>
            </div>
            <div className="customer-center-contact">
              <a href="tel:+435014921111">+43 50 1492 1111</a>
              <a href="mailto:kundenservice@stiegl.at">kundenservice@stiegl.at</a>
            </div>
          </div>
        </div>

        {/* ACTION BUTTON */}
        <div className="action-section">
          <button className="action-button">TECHNISCHER SERVICE</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ansprechpersonen-footer">
        <p>&copy; 2024 Stieglbrauerei zu Salzburg. Braukunst auf höchster Stufe.</p>
      </footer>
    </div>
  );
};

export default Ansprechpersonen;
