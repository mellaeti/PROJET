import React, { useState, useEffect } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import './Carrousel.css';

const Carousel = ({ cards }) => {
  const [active, setActive] = useState(0); // Index of the active card
  const count = cards.length;

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + count) % count); // Previous card
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % count); // Next card
  };

  // Trigger the animation whenever the active state changes
  useEffect(() => {
    const points = document.querySelectorAll('.point, .point1, .point2, .point3, .point4, .point5, .point6');
    points.forEach(point => {
      point.classList.add('move'); // Add the move class
      setTimeout(() => {
        point.classList.remove('move'); // Remove the move class after the animation ends
      }, 500); // Match the duration of the animation (0.5s)
    });
  }, [active]); // Run this effect whenever `active` changes

  return (
    <div className="carousel">
      {/* Background dots (indicators) */}
      <div className="background-dots">
        {cards.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === active ? 'active' : ''}`}
          ></div>
        ))}
      </div>

      <button className="nav left" onClick={handlePrev}>
        <TiChevronLeftOutline />
      </button>

      <div className="cards-container">
        {cards.map((card, i) => {
          let offset = (i - active + count) % count;
          if (offset > count / 2) offset -= count;
          const isVisible = Math.abs(offset) <= 1;

          return (
            <div
              key={i}
              className={`card-container ${active === i ? 'active' : 'inactive'} card-${i}`}
              style={{
                '--offset': offset,
                '--abs-offset': Math.abs(offset),
                '--direction': Math.sign(offset),
                'pointer-events': active === i ? 'auto' : 'none',
                'opacity': isVisible ? '1' : '0',
                'display': isVisible ? 'block' : 'none',
                'transition': 'transform 0.60s ease-in-out, opacity 5s ease-in-out',
              }}
            >
              <div className="card">
                <img src={card.image} alt={card.title} className="card-image" />
                <h2>{card.title}</h2>
                {active === i && (
                  <>
                    <p className="card-description">{card.description}</p>
                    <div className="square-decoration"></div> {/* Carré en bas à gauche */}
                  </>
                )}
                {active === i && (
                  <button className="explore-button" onClick={() => alert(`Exploring ${card.title}`)}>
                    Explore
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button className="nav right" onClick={handleNext}>
        <TiChevronRightOutline />
      </button>
    </div>
  );
};

export default Carousel;