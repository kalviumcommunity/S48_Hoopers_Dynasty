import React from 'react';
import './landingpage.css'; 
import { Link } from 'react-router-dom';

function HoopersDynasty() {
  return (
    <div>
      <header>
        <h1>Welcome to Hoopers Dynasty</h1>
        <nav>
          <ul>
            <li><Link to="/Login" className="button">Login</Link></li>
            <li><a href="signup" className="button">Sign Up</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HoopersDynasty;
