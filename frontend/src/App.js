import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import AccountDetails from './components/Accounts/accountDetails'; // Import AccountDetails component
// import AccountDetailsEdit from './components/Accounts/accountDetailsEdit'; // Import Edit Account Details component
import Login from './components/Login/Login'; // Import Login component
import NavBar from './components/NavBar/NavBar'; // Import Navbar component
import NavBarHome from './components/NavBarHome/NavBarHome'; //Import Home Nav Bar
import SignUp from './components/SignUp/SignUp'; // Import SignUp component
import Main from './pages/Main';
// import TransactionComponent from './components/Transaction/TransactionComponent'; // Import Transaction component


function App() {
  return (
    <Router>
      <div>
        {/* Define routes for components */}
        <Routes> 
          <Route path="home" element={<Main />} />
          <Route path="login" element={<div> <NavBarHome/> <Login /> </div>} />
          <Route path="signup" element={<div> <NavBarHome/> <SignUp /> </div>} />
          {/* <Route path="accounts" element={<div> <NavBar/><AccountDetails /> </div>} /> */}
          {/* <Route path="accountsedit" element={<div> <NavBar/><AccountDetailsEdit /> </div>} /> */}
          {/* <Route path="transactions" element={<div> <NavBar/> <TransactionComponent /> </div>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
