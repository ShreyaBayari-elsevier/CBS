import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
       await axios.get('http://localhost:8090/api/login', {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "mode":'no-cors'
        },
        params: {
          id: username,
          pass: password,
        }
      }).then((response)=>{
        console.log("Data : "+response.data);
      });

    
    } catch (error) {
      // Handle network or other errors.
      console.error('Network error:'+ error);
    }
  };

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
        <button className="btn btn-success " type="submit"> Login</button>
      </form>
    </div>
  );
}

export default Login;
