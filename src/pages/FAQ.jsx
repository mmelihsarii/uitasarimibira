import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Wann wurde die Stieglbrauerei gegründet?",
      answer: "Die Stieglbrauerei zu Salzburg wurde im Jahr 1492 erstmals urkundlich erwähnt. Das war dasselbe Jahr, in dem Christoph Kolumbus Amerika entdeckte. Seitdem wird in Salzburg Braukunst auf höchster Stufe gelebt."
    },
    {
      question: "Woher stammt der Name Stiegl?",
      answer: "Das im Jahre 1492 erstmals urkundlich erwähnte Bräuhaus befand sich noch nicht in Maxglan, sondern inmitten der Salzburger Altstadt. Neben diesem \"Haus bey der Stiegen\" in der Gstättengasse befand sich eine kleine Stiege, der die Stieglbrauerei bis heute ihren Namen verdankt."
    },
    {
      question: "Kann man die Stieglbrauerei besuchen?",
      answer: "Ja, die Stiegl-Brauwelt in Salzburg ist das größte Biererlebnis-Zentrum Europas. Hier können Besucher alles über die Geschichte, die Rohstoffe und die Herstellung unserer Biere erfahren und natürlich auch verkosten."
    },
    {
      question: "Wo kann man Stiegl-Bier kaufen?",
      answer: "Stiegl-Biere sind im gut sortierten Lebensmittelhandel in ganz Österreich sowie in zahlreichen Gastronomiebetrieben erhältlich. Zudem können viele Sorten über unseren Onlineshop direkt nach Hause bestellt werden."
    },
    {
      question: "Wo kann man die Stiegl-Hausbiere kaufen?",
      answer: "Unsere exklusiven Stiegl-Hausbiere sind in der Stiegl-Brauwelt, in ausgewählten Stiegl-Gastronomiebetrieben und natürlich in unserem Stiegl-Onlineshop erhältlich."
    },
    {
      question: "Gibt es einen Stiegl-Onlineshop?",
      answer: "Ja, unter shop.stiegl.at finden Sie eine große Auswahl an unseren Bierspezialitäten, exklusiven Gläsern, Stiegl-Mode und vielen weiteren Fan-Artikeln."
    },
    {
      question: "Was ist das Reinheitsgebot?",
      answer: "Das Reinheitsgebot besagt, dass zum Brauen von Bier nur Wasser, Malz, Hopfen und Hefe verwendet werden dürfen. Stiegl bekennt sich streng zu diesen natürlichen Zutaten und höchster Qualität."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <section className="faq-container">
        {/* Header Section */}
        <div className="faq-header">
          <span className="faq-label">Fragen & Antworten</span>
          <h1 className="faq-title">FAQ</h1>
          <div className="faq-divider" />
        </div>

        {/* Accordion List */}
        <div className="faq-accordion">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-item">
                {/* Question Button */}
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="faq-question"
                  aria-expanded={isOpen}
                >
                  <span className={`question-text ${isOpen ? 'is-open' : ''}`}>
                    {item.question}
                  </span>
                  
                  {/* Icon Container */}
                  <div className="icon-container">
                    {/* Horizontal Line */}
                    <div className="icon-horizontal" />
                    {/* Vertical Line (Plus becomes Minus) */}
                    <div className={`icon-vertical ${isOpen ? 'is-open' : ''}`} />
                  </div>
                </button>

                {/* Answer Panel */}
                <div className={`faq-answer ${isOpen ? 'is-open' : ''}`}>
                  <div className="answer-overflow">
                    <div className="answer-content">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="faq-footer">
        <p>&copy; 2024 Stieglbrauerei zu Salzburg. Braukunst auf höchster Stufe.</p>
      </footer>
    </div>
  );
};

export default FAQ;
