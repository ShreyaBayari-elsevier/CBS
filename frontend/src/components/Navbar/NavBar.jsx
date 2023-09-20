import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src="OIP.jpg" alt="Elsevier Logo" className="logo" />
      <h1>Central Banking System</h1>
      <div className="buttons">
        <button type="submit" className="home">
          HOME
        </button>
        <button type="submit" className="accounts">
          ACCOUNTS
        </button>
        <button type="submit" className="transaction">
          TRANSACTION
        </button>
        <Link to="/">
          <button type="submit" className="profile">
            <img src="R.png" alt="User Profile" className="user-profile" />
          </button>
        </Link>
      </div>
      {/* <div> 
        {showAccounts && <AccountCreation/>}
        
  </div>*/}
    </div>
  );
}

export default Navbar;
