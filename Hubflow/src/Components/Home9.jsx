import React, { useState } from 'react';
// Ensure these paths match your project structure
import testimonialPerson from '../assets/picture.png'; 

const Home9 = () => {
  const [index, setIndex] = useState(0);
  const [activeDir, setActiveDir] = useState('next');

  const slides = [
    {
      text: "It's a pleasure working with Bunker. They understood our new brand positioning guidelines and translated them beautifully and consistently into our on-going marketing comms. The team is responsive, quick and always willing help winning partnership.",
      name: "Marvin McKinney",
      role: "Senior Director of Marketing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
    },
    {
      text: "Working with this team has been a game-changer for our brand strategy. Their attention to detail and ability to execute complex marketing campaigns is unmatched in the industry.",
      name: "Marvin McKinney",
      role: "Senior Director of Marketing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
    }
  ];

  const nextSlide = () => {
    setActiveDir('next');
    setIndex((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setActiveDir('prev');
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <div className="header-text">
            <span className="testimonial-badge">Testimonial 🔥</span>
            <h2 className="testimonial-title">Testimonials Beloved Clients.</h2>
          </div>
          <div className="slider-controls">
            <button
              className={`control-btn ${activeDir === 'prev' ? 'active' : ''}`}
              onClick={prevSlide}
            >
              &larr;
            </button>
            <button
              className={`control-btn ${activeDir === 'next' ? 'active' : ''}`}
              onClick={nextSlide}
            >
              &rarr;
            </button>
          </div>
        </div>

        <div className="testimonial-card-window">
          <div 
            className="testimonial-track" 
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((item, i) => (
              <div className="testimonial-slide" key={i}>
                <div className="slide-content-left">
                  <p className="testimonial-text">"{item.text}"</p>
                  
                  <div className="slide-footer">
                    <div className="user-meta">
                      <h4 className="user-name">{item.name}</h4>
                      <p className="user-role">{item.role}</p>
                    </div>
                    <div className="company-branding">
                      <img src={item.logo} alt="Company Logo" className="brand-logo" />
                    </div>
                  </div>
                </div>

                <div className="slide-image-right">
                  <img src={testimonialPerson} alt={item.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home9;
