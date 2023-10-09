import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
//gopal
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
       await axios.get('http://localhost:8090/api/register/login', {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "mode":'no-cors'
        },
        params: {
          id: username,
          pass: password,
        }
      }).then((response)=>{
        if(response.status === 200)
        {
          localStorage.setItem('userID',JSON.stringify(response.data.acc_id));
          navigate('/home');
        }
      else
      alert("Invalid creds");
      });

    
    } catch (error) {
      // Handle network or other errors.
      console.error('Network error:'+ error);
    }
  };

  useEffect(() => {
    // Apply the CSS class when the component mounts
    document.body.classList.add('body-login');

    // Remove the CSS class when the component unmounts
    return () => {
      document.body.classList.remove('body-login');
    };
  }, []);

  return (
    <div className="login-container">
<h2 className="mb-4">Login</h2>
 

      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {/* <Link to='/Home'> */}
          
        <button className="btn btn-success " type="submit"> Login</button>
        {/* </Link> */}
        <Link to='/Signup'>
          <button className="btn btn-primary">
            Signup
            </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;