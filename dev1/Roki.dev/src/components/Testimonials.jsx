import React, { useState } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { text: "Doing great work i love the art and the history behind it", author: "Patriot" },
    { text: "A piece of My Ancestory in my home, Thank you.", author: "Happy Client" },
    { text: "Great work even in this T_pain era.", author: "Roki" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials">
      <div className="testimonials-left">
        <h2>Feedback</h2>
        <p>This is what people say about us:</p>
      </div>
      <div className="testimonials-right">
        <div className="testimonial-box">
          <p>"{testimonials[currentIndex].text}"</p>
          <span>- {testimonials[currentIndex].author}</span>
        </div>
        <div className="testimonial-controls">
          <button className="prev-btn" onClick={handlePrev}>
            &lt;
          </button>
          <button className="next-btn" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
