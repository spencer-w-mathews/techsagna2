// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* <img src={logo} height={50} /> */}
        <Link to="/" className="navbar-logo" >TechSagna</Link>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <div onClick={toggleMenu}className='close'></div>
        <li><a href="#/" className="nav-link" onClick={toggleMenu}>Home</a></li>
        <li><a href="#/about" className="nav-link" onClick={toggleMenu}>About</a></li>
        <li><a href="#/services" className="nav-link" onClick={toggleMenu}>Services</a></li>
        <li><a href="#/contact" className="nav-link" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
