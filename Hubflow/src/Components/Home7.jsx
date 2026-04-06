import React from 'react';
import '../assets/App.css';
import tabletImg from '../assets/tablet.png';

const Home7 = () => {
  const featureList = [
    {
      title: "Highly Expert Team Members",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    },
    {
      title: "Highly Expert Team Members",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
    }
  ];

  return (
    <section className="home7-section">
      <div className="home7-container">
        
        {/* Left Side: Mockup Image */}
        <div className="home7-image-side">
          <div className="image-wrapper">
            {/* Replace with your actual asset path */}
            <img 
              src={tabletImg} 
              alt="Tablet Dashboard UI" 
              className="tablet-img" 
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="home7-content-side">
          <div className="top-badge">
            <span>What We Do</span>
            <span className="emoji">🔥</span>
          </div>

          <h2 className="section-title">
            We Offer A One-Stop <br /> Shop For All IT Solutions.
          </h2>

          <p className="section-description">
            There are many variations of passages of Lorem Ipsum available, but the 
            majority have suffered alteration in some form
          </p>

          <div className="features-stack">
            {featureList.map((item, index) => (
              <div key={index} className="feature-row">
                <div className="icon-container">
                  <div className="hexagon">
                    <div className="dot"></div>
                  </div>
                </div>
                <div className="text-container">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home7;