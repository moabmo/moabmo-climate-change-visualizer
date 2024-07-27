// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/impact-stories">Impact Stories</Link>
      <Link to="/mitigation-efforts">Mitigation Efforts</Link>
      <Link to="/educational-resources">Educational Resources</Link>
    </nav>
  );
};

export default Navbar;
