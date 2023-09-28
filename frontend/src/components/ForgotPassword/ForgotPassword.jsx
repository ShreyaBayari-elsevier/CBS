import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    password: "",
    pass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        "http://localhost:8080/api/register/updatePassword",
        {},
        {
          params: {
            id: formData.id,
            pass: formData.pass,
          },
        }
      )
      .then((response) => {
        alert(response.data);
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        alert("Error updating password");
      });
  };

  return (
    <div className="login-container">
      <h2 className="mb-4">RESET PASSWORD</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="id">Username:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Enter New Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="pass">Re-Enter New Password:</label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={formData.pass}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
