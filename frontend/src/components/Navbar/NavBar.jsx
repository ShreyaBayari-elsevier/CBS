import React from 'react';
import './Navbar.css'; 


function Navbar() {

  // const [showAccounts, setShowAccounts] = useState(false);

  // const toggleAccounts = () => {
  //   setShowAccounts(!showAccounts);
  // };

  return (
    <div className="navbar">
      <img src="OIP.jpg" alt="Elsevier Logo" className="logo" />
      <h1>Central Banking System</h1>
      <div className="buttons">
        <button type="submit" className='home'>HOME</button>
        <button type="submit" className='accounts'>ACCOUNTS</button>
        <button type="submit" className='transaction'>TRANSACTION</button>
        
        
        <button type="submit" className='profile'><img src="R.png" alt="User Profile" className="user-profile" /></button>
      </div>
     {/* <div> 
        {showAccounts && <AccountCreation/>}
        
  </div>*/}
    </div>
  );
}

export default Navbar;
