import React from "react";
import "../assets/App.css";
import statisticsImg from '../assets/statistics-chart.png';

const Home4 = () => {
  return (
    <section className="home4">
      <div className="container">
        
        <span className="badge">How It Work 🔥</span>

        <h2 className="title">Our Working Process</h2>

        <div className="divider"></div>

        <p className="description">
          There are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which do not look even slightly
        </p>

        <div className="grid">
          
          {/* LEFT */}
          <div className="steps">
            
            <div className="step">
              <div className="number">01</div>
              <div>
                <h4>Research Project</h4>
                <p>There are many variations of passages of Lorem available, but the majority have suffered alteration</p>
              </div>
            </div>

            <div className="step">
              <div className="number">02</div>
              <div>
                <h4>Start Optimize</h4>
                <p>There are many variations of passages of Lorem available, but the majority have suffered alteration</p>
              </div>
            </div>

            <div className="step">
              <div className="number">03</div>
              <div>
                <h4>Find Ideas</h4>
                <p>There are many variations of passages of Lorem available, but the majority have suffered alteration</p>
              </div>
            </div>

            <div className="step">
              <div className="number">04</div>
              <div>
                <h4>Reach Target</h4>
                <p>There are many variations of passages of Lorem available, but the majority have suffered alteration</p>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="chart-box">
            <div className="chart-card">
                 <img src={statisticsImg} className="statistics-chart" alt="statistics" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home4;