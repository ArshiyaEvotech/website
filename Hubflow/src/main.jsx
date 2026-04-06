import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header'; // Pointing to your actual file
import './assets/App.css';
import Home1 from './Components/Home1';
import Home2 from './Components/Home2';
import Home3 from './Components/Home3';
import Home4 from './Components/Home4';
import Home5 from './Components/Home5';
import Home6 from './Components/Home6';
import Home7 from './Components/Home7';
import Home8 from './Components/Home8';
import Home9 from './Components/Home9';
import Home10 from './Components/Home10';
import Footer from './Components/footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home1 />
    <Home2 />
    <Home3 />
    <Home4 />
    <Home5 />
    <Home6 />
    <Home7 />
    <Home8 />
    <Home9 />
    <Home10 />
    <Footer />
  </React.StrictMode>
);
