import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  localStorage.clear();
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
      await axios
        .get("http://localhost:8090/api/register/login", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            mode: "no-cors",
          },
          params: {
            id: username,
            pass: password,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem(
              "userID",
              JSON.stringify(response.data.acc_id)
            );
            navigate("/home");
          } else alert("Invalid creds");
        });
    } catch (error) {
      // Handle network or other errors.
      console.error("Network error:" + error);
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
            data-testid="Username"
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
            data-testid="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {/* <Link to='/Home'> */}

        <button className="btn btn-success " type="submit" data-testid="login-button">
          {" "}
          Login
        </button>
        {/* </Link> */}
        <Link to="/Signup">
          <button className="btn btn-primary">Signup</button>
        </Link>

        <Link to="/forgotpassword">
          <a>Forgot password?</a>
        </Link>
      </form>
    </div>
  );
}

export default Login;
