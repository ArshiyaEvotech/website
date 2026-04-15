import React from 'react';
import dashboardImg from '../assets/dashboard-mockup.png';
import phoneImg from '../assets/phone-mockup.png';

const LandingPage = () => {
  return (
    <div className="hero-section">
      <div className="content-grid">
        <div className="text-area">
          <span className="badge">Streaming Your Workflow</span>
          <h1 className="title">
            Organize, Track, And Complete <br />
            Task <span className="purple-gradient">Efficiently</span>
          </h1>
          <p className="subtext">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
          </p>
          <div className="btn-group">
            <button className="btn-primary">Get Started Now</button>
            <button className="btn-secondary">Download App</button>
          </div>
        </div>

        <div className="mockup-area">
          <div className="dashboard-offset-container">
            <img src={dashboardImg} className="dashboard-mockup" alt="Dashboard" />
            <img src={phoneImg} className="phone-mockup" alt="Phone UI" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
