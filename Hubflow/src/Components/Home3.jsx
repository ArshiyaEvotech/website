import React from 'react';
import { RefreshCcw, Globe, CheckCircle } from 'lucide-react';
import '../assets/App.css';

const Home3 = () => {
  const features = [
    { title: "Sales Automation", icon: <RefreshCcw size={32} /> },
    { title: "Contact Management", icon: <Globe size={32} /> },
    { title: "Task Management", icon: <CheckCircle size={32} /> }
  ];

  return (
    <section className="home3-section">
      <div className="h3-header">
        <div className="h-badge center">Our Features 🔥</div>
        <h2 className="h3-heading">We Provide The Best Quality</h2>
        
      </div>
      <div className="home3-grid">
        {features.map((f, i) => (
          <div key={i} className="h3-card">
            <div className="h3-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>This title is versatile and can adapted to fit the specific tone and branding of your website quality.</p>
            <div className="h3-accent" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home3;