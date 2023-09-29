import React from 'react';
import NavBar from '../components/NavBar/NavBar';

function Main(){
    return(
        <div>
            <NavBar/>
            <div className="main-container">
                <h1 className="welcome-text">WELCOME TO CORE BANKING SYSTEM!</h1>
            </div>   
        </div>
    );
}

export default Main;

