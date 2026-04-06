import React, { useState } from 'react';
import '../assets/App.css';

const Home8 = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const techData = {
    frontend: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
    backend: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ]
  };

  return (
    <section className="home8-section">
      <div className="home8-container">
        <h2 className="home8-title">Technologies Behind Our Solutions.</h2>

        <div className="home8-tabs">
          <button
            className={`home8-tab ${activeTab === 'frontend' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            Front End
          </button>
          <button
            className={`home8-tab ${activeTab === 'backend' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            Back End
          </button>
        </div>

        <div className="home8-card">
          <div className="home8-grid">
            {techData[activeTab].map((tech, index) => (
              <div key={index} className="home8-item">
                <div className="home8-icon-box">
                  <img src={tech.icon} alt={tech.name} />
                </div>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home8;
