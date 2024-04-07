import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../Navbar/logo.png';
import './navbar.css';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bar">
      <div className="logo">
        <HashLink to="/#home">
          <img src={logo} alt="Logo" />
        </HashLink>
      </div>

      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`navlinks ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <HashLink
            to="/#home"
            className="links"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </HashLink>
        </li>
        <li>
          <HashLink
            to="/#about"
            className="links"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About me
          </HashLink>
        </li>
        <li>
          <HashLink
            to="/#skills"
            className="links"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink
            to="/#work"
            className="links"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Work
          </HashLink>
        </li>
        <li>
          <HashLink
            to="/#experience"
            className="links"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Experience
          </HashLink>
        </li>
      </ul>

      <div className="btn-contact">
        <HashLink to="/#contact" className="btn-contact">
          Contact Me
        </HashLink>
      </div>
    </nav>
  );
};
