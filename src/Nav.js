import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <div className="logoContainer"><h1>React Routing</h1></div>
        
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  );
}

export default Nav;
