import React from 'react';
import './NavBar.css'; 
import { Link, useNavigate } from 'react-router-dom'; 

function NavBar() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate('/');
  }
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
            
        <button type="submit" className='profile' onClick={logoutHandler}>
          <img src="userProfile.png" alt="User Profile" className="user-profile" />
        </button>
      </div>
    </div>
  );
  
}

export default NavBar;

