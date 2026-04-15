import React, { useState } from 'react';
import html5Icon from '../assets/devicons/html5.svg';
import sassIcon from '../assets/devicons/sass.svg';
import reactIcon from '../assets/devicons/react.svg';
import nextjsIcon from '../assets/devicons/nextjs.svg';
import css3Icon from '../assets/devicons/css3.svg';
import javascriptIcon from '../assets/devicons/javascript.svg';
import typescriptIcon from '../assets/devicons/typescript.svg';
import nodejsIcon from '../assets/devicons/nodejs.svg';
import pythonIcon from '../assets/devicons/python.svg';
import mongodbIcon from '../assets/devicons/mongodb.svg';
import postgresqlIcon from '../assets/devicons/postgresql.svg';
import dockerIcon from '../assets/devicons/docker.svg';

const Home8 = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const techData = {
    frontend: [
      { name: "HTML5", icon: html5Icon },
      { name: "Sass", icon: sassIcon },
      { name: "React", icon: reactIcon },
      { name: "Next.js", icon: nextjsIcon },
      { name: "CSS3", icon: css3Icon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "TypeScript", icon: typescriptIcon },
    ],
    backend: [
      { name: "Node.js", icon: nodejsIcon },
      { name: "Python", icon: pythonIcon },
      { name: "MongoDB", icon: mongodbIcon },
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "Docker", icon: dockerIcon },
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
