import React from 'react';
import '../assets/App.css';


const StatItem = ({ number, label }) => (
  <div className="stat-item">
    <h2 className="stat-number">{number}</h2>
    <p className="stat-label">{label}</p>
  </div>
);

const Home6 = () => {
  const stats = [
    { number: "56+", label: "Customers visit app every month" },
    { number: "32+", label: "Total downloads of our app" },
    { number: "156k", label: "Total Members of App Users" },
    { number: "42+", label: "Satisfaction rate from our customers" },
  ];

  return (
    <section className="home6-wrapper">
      <div className="home6-container">
        {stats.map((item, index) => (
          <StatItem key={index} number={item.number} label={item.label} />
        ))}
      </div>
    </section>
  );
};

export default Home6;