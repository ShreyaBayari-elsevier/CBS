import React from 'react';
import { Route, Routes, Navigate, Outlet, BrowserRouter } from 'react-router-dom';
import './App.css';
import AccountDetails from './components/Accounts/accountDetails'; // Import AccountDetails component
import AccountDetailsEdit from './components/Accounts/accountDetailsEdit'; // Import Edit Account Details component
import Login from './components/Login/Login'; // Import Login component
import NavBar from './components/NavBar/NavBar'; // Import Navbar component
import NavBarHome from './components/NavBarHome/NavBarHome'; //Import Home Nav Bar
import SignUp from './components/SignUp/SignUp'; // Import SignUp component
import Main from './pages/Main';
import Transactions from './components/Transaction/Transactions';
import Funds from './components/Transaction/TransferFunds';
import CustomRoute from './services/CustomRoute';
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Statement from './components/Statement/statement';

function App() {
  return (
    <div>

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="login" element={<div> <NavBarHome /><div><br /><br /><br /></div> <Login /> </div>} />
            <Route path="signup" element={<div> <NavBarHome /> <SignUp /> </div>} />
            <Route path="forgotpassword" element={<div> <NavBarHome /><div><br /><br /><br /></div> <ForgotPassword /> </div>} />

            <Route path="home" element={<CustomRoute><Main /></CustomRoute>} />
            <Route path="Transactions" element={<><CustomRoute> <NavBar /> <Transactions /> </CustomRoute></>} />
            <Route path="AddTransaction" element={<CustomRoute> <NavBar /> <Funds /> </CustomRoute>} />
            <Route path="accounts" element={<CustomRoute> <NavBar /><AccountDetails /> </CustomRoute>} />
            <Route path="accountsedit" element={<CustomRoute> <NavBar /><AccountDetailsEdit /> </CustomRoute>} />
            <Route path="statement" element={<div><CustomRoute><NavBar/><Statement/></CustomRoute></div>}/>
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
