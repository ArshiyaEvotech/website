import React, { useState } from 'react';
import '../assets/App.css';

const Home5 = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      price: isYearly ? "149.99" : "14.99",
      isPrimary: true,
      features: ["7 days free access", "Maximum of 5 collaborators", "Cloud backup 1GB", "Maximum 50 tasks per week", "Updates for 1 Year"]
    },
    {
      name: "Standard Plan",
      price: isYearly ? "199.99" : "19.99",
      isPrimary: false,
      features: ["7 days free access", "Maximum of 5 collaborators", "Cloud backup 1GB", "Maximum 50 tasks per week", "Updates for 1 Year"]
    },
    {
      name: "Premium Plan",
      price: isYearly ? "249.99" : "24.99",
      isPrimary: false,
      features: ["7 days free access", "Maximum of 5 collaborators", "Cloud backup 1GB", "Maximum 50 tasks per week", "Updates for 1 Year"]
    }
  ];

  return (
    <section className="home5-pricing">
      <div className="pricing-header">
        <span className="p-badge">Our Pricing 🔥</span>
        <h2 className="p-title">Choose The Plans That Suits You!</h2>
        <p className="p-subtitle">There are many variations of passages of Lorem Ipsum available, but the majority have</p>
        
        <div className="toggle-container">
          <button className={!isYearly ? 'active' : ''} onClick={() => setIsYearly(false)}>Monthly</button>
          <button className={isYearly ? 'active' : ''} onClick={() => setIsYearly(true)}>Yearly</button>
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <span className="plan-name">{plan.name}</span>
            <div className="plan-price">
              <span className="currency">$</span>
              {plan.price}
              <span className="period">/ Per Month</span>
            </div>
            <p className="plan-desc">There are many variations of passages of Lorem Ipsum available, but the majority</p>
            <hr className="p-divider" />
            <ul className="feature-list">
              {plan.features.map((feat, i) => (
                <li key={i}>
                  <div className="check-container">
                    <span className="check-icon">✔</span>
                  </div>
                  {feat}
                </li>
              ))}
            </ul>
            <button className={`plan-btn ${plan.isPrimary ? 'btn-primary' : 'btn-dark'}`}>
              Get You Free plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home5;