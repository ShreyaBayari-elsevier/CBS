import React from 'react';
import './NavBarHome.css'; 
import { Link } from 'react-router-dom'; 

function NavBarHome() {

  return (
    <div className="navbar">
      <Link to="/login">
        <img src='/logo.png' alt="Elsevier Logo" className="logo" />
      </Link>
      <h1>Core Banking System</h1>
    </div>
  );
  
}

export default NavBarHome;

