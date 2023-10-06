import React from 'react';
import './NavBar.css'; 
import { Link } from 'react-router-dom'; 

function NavBar() {

  return (
    <div className="navbar">
      <img src='/logo.png' alt="Elsevier Logo" className="logo" />
      <h1>Core Banking System</h1>
      <div className="buttons">
        <Link to="/home" className='home-link'>
          <button type="submit" className='home'>HOME</button>
        </Link>
        <Link to="/accounts" className='accounts-link'>
          <button type="submit" className='accounts'>ACCOUNTS</button>
        </Link>
        <Link to="/transactions" className='transaction-link'>
         <button type="submit" className='transaction'>TRANSACTION</button>
        </Link>
        
        <Link to="/profile" className='profile-link'>
          <button type="submit" className='profile'>
            <img src="userProfile.png" alt="User Profile" className="user-profile" />
          </button>
        </Link>
      </div>
    </div>
  );
  
}

export default NavBar;

