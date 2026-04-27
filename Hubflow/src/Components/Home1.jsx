import React, { useEffect, useState } from 'react';
import dashboardImg from '../assets/dashboard-mockup.png';
import phoneImg from '../assets/phone-mockup.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

const LandingPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 'home1-main',
      bgClass: 'hero-bg-primary',
      badge: 'Streaming Your Workflow',
      titleTop: 'Organize, Track, And Complete',
      titleBottom: 'Task',
      highlight: 'Efficiently',
      subtext:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or',
      visualType: 'stacked',
      primaryBtn: 'Get Started Now',
      secondaryBtn: 'Download App',
    },
    {
      id: 'home1-image1',
      bgClass: 'hero-bg-insights',
      badge: 'Finance Intelligence',
      titleTop: 'Track Cash Flow',
      titleBottom: 'Control Budgets',
      highlight: 'Precisely',
      subtext:
        'Get complete visibility into expenses, revenue trends, and budget allocation with real-time dashboards built for fast financial decisions.',
      visualType: 'single',
      visualSrc: image1,
      visualAlt: 'Creative planning board',
      visualClass: 'hero-single-image-one',
      primaryBtn: 'View Financials',
      secondaryBtn: 'Download Report',
    },
    {
      id: 'home1-image2',
      bgClass: 'hero-bg-growth',
      badge: 'Operations Control',
      titleTop: 'Streamline Daily Tasks',
      titleBottom: 'And Optimize Team',
      highlight: 'Output',
      subtext:
        'Coordinate workflows, assign ownership, and monitor execution across departments so operations stay efficient, predictable, and scalable.',
      visualType: 'single',
      visualSrc: image2,
      visualAlt: 'Analytics dashboard',
      visualClass: 'hero-single-image-two',
      primaryBtn: 'Manage Operations',
      secondaryBtn: 'See Workflow',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero-section">
      <div className="hero-slider-viewport">
        <div className="hero-slider-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className={`hero-slide ${slide.bgClass}`}>
              <div className="content-grid">
                <div className="text-area">
                  <span className="badge">{slide.badge}</span>
                  <h1 className="title">
                    {slide.titleTop} <br />
                    {slide.titleBottom} <span className="purple-gradient">{slide.highlight}</span>
                  </h1>
                  <p className="subtext">{slide.subtext}</p>
                  <div className="btn-group">
                    <button className="btn-primary">{slide.primaryBtn}</button>
                    <button className="btn-secondary">{slide.secondaryBtn}</button>
                  </div>
                </div>

                <div className="mockup-area">
                  {slide.visualType === 'stacked' ? (
                    <div className="dashboard-offset-container">
                      <img src={dashboardImg} className="dashboard-mockup" alt="Dashboard" />
                      <img src={phoneImg} className="phone-mockup" alt="Phone UI" />
                    </div>
                  ) : (
                    <div className="hero-single-visual">
                      <img src={slide.visualSrc} className={`hero-single-image ${slide.visualClass}`} alt={slide.visualAlt} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
