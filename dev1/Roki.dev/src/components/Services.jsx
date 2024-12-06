import React, { useRef, useState, useEffect } from 'react';
import './Services.css';

const Services = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const autoScroll = () => {
      if (scrollContainer && !isHovered) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0; // Reset scroll for infinite effect
        } else {
          scrollContainer.scrollLeft += 1; // Adjust speed here
        }
      }
    };

    const interval = setInterval(autoScroll, 20);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleScroll = (direction) => {
    const scrollContainer = scrollRef.current;
    const scrollAmount = 300; // Adjust scroll amount
    scrollContainer.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
  };

  return (
    <section className="services">
      <h2>Our Heritage</h2>
      <div
        className="service-cards"
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...Array(7)].map((_, index) => (
          <div className="card" key={index}>
            <h3>Piece {index + 1}</h3>
            <p>Description for service {index + 1}.</p>
            <button className="card-btn">Learn More</button>
          </div>
        ))}
      </div>
      <button className="scroll-btn left" onClick={() => handleScroll('left')}>
        &lt;
      </button>
      <button className="scroll-btn right" onClick={() => handleScroll('right')}>
        &gt;
      </button>
    </section>
  );
};

export default Services;
