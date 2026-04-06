import React from 'react';
import '../assets/App.css';
import logoHub from '../assets/logo-hub.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logoHub} alt="Niotech" />
              <span>Hubflow</span>
            </div>
            <p>
              It is a long established fact that from will be distracted by the readable
              from when looking.
            </p>
            <div className="footer-store-buttons">
              <button className="store-btn primary">
                <span className="store-icon"></span>
                App Store
              </button>
              <button className="store-btn">
                <span className="store-icon">▶</span>
                Play Store
              </button>
            </div>
          </div>

          <div className="footer-links">
            <h4>Pages</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Integrations</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Utility Pages</h4>
            <ul>
              <li>Integrations</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Project Details</li>
              <li>Our Team</li>
            </ul>
          </div>

          <div className="footer-contact-card">
            <span className="footer-card-label">Address</span>
            <h3>Ready To Get Started?</h3>
            <p>It is a long established fact that a reader will be distracted layout.</p>

            <div className="footer-contact-row">
              <span className="contact-icon">✉</span>
              <div>
                <p>contact.tech@gmail.com</p>
                <p>info@Niotech.com</p>
              </div>
            </div>
            <div className="footer-contact-row">
              <span className="contact-icon">☎</span>
              <div>
                <p>+880 123 654 789 00</p>
                <p>+001 6520 698 00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © Niotech All Rights Reserved</p>
          <div className="footer-socials">
            <span>f</span>
            <span>t</span>
            <span>in</span>
            <span>p</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
