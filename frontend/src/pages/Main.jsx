import React from "react";
import Navbar from "../components/Navbar/NavBar";
import Login from "../components/Login/Login";
import Signup from "../components/SignUp/SignUp";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function Main() {
  return (
    <div>
      {/* <Navbar/>
            <Login/> */}
      {/* <p>WELCOME TO CENTRAL BANKING SYSTEM!</p> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Home" element={<Navbar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
