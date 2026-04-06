import React from 'react';
import '../assets/App.css'; 
import logoImg from '../assets/logo-hub.png'; 
import { ChevronDown, MoveRight } from 'lucide-react';


const Header1 = () => {
  const navLinks = [
    { name: 'Home', hasDropdown: false },
    { name: 'Modules', hasDropdown: true },
    { name: 'Workspace', hasDropdown: false },
    { name: 'Contact Us', hasDropdown: false },
  ];

  return (
  
 <header className="niotech-header">
  <div className="header-container">
    
    {/* LEFT GROUP: Logo + Navigation together */}
    <div className="header-left-group">
      <a href="/" className="logo-group">
        <img src={logoImg} alt="Logo" className="header-logo-img" />
      </a>

      <nav className="main-nav">
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href="#" className="nav-item">
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className="dropdown-arrow" />}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    {/* RIGHT GROUP: Action Buttons */}
    <div className="actions-group">
      <button className="login-btn">Log In</button>
      <button className="get-started-btn">
        Book A Demo
      </button>
    </div>

  </div>
</header>
  );
};

export default Header1;