import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import { Outlet, useNavigate } from "react-router-dom";

function AccountCreation() {
  const [confirmPassword, setPassword] = useState("");
  // const signupForm = document.getElementById("signupForm");

  const [formData, setFormData] = useState({
    acc_id: "",
    acc_type: "",
    firstname: "",
    lastname: "",
    phonum: 0,
    address: "",
    nominee: "",
    nationality: "",
    pannum: "",
    aadhar: 0,
    balance: 0,
    password: "",
  });

  const [hasEnteredId, setHasEnteredId] = useState(false);
  const [hasEnteredType, setHasEnteredType] = useState(false);
  const [hasEnteredFirst, setHasEnteredFirst] = useState(false);
  const [hasEnteredLast, setHasEnteredLast] = useState(false);
  const [hasEnteredPhone, setHasEnteredPhone] = useState(false);
  const [hasEnteredAddress, setHasEnteredAddress] = useState(false);
  const [hasEnteredNominee, setHasEnteredNominee] = useState(false);
  const [hasEnteredNationality, setHasEnteredNationality] = useState(false);
  const [hasEnteredPan, setHasEnteredPan] = useState(false);
  const [hasEnteredAadhar, setHasEnteredAadhar] = useState(false);
  const [hasEnteredBalance, setHasEnteredBalance] = useState(false);
  const [hasEnteredPassword, setHasEnteredPassword] = useState(false);
  // const [hasEnteredConfirm, setHasEnteredConfirm] = useState(false);

  const fields = {
    acc_id: { setter: hasEnteredId, getter: setHasEnteredId },
    acc_type: { setter: hasEnteredType, getter: setHasEnteredType },
    firstname: { setter: hasEnteredFirst, getter: setHasEnteredFirst },
    lastname: { setter: hasEnteredLast, getter: setHasEnteredLast },
    phonum: { setter: hasEnteredPhone, getter: setHasEnteredPhone },
    address: { setter: hasEnteredAddress, getter: setHasEnteredAddress },
    nominee: { setter: hasEnteredNominee, getter: setHasEnteredNominee },
    nationality: {
      setter: hasEnteredNationality,
      getter: setHasEnteredNationality,
    },
    pannum: { setter: hasEnteredPan, getter: setHasEnteredPan },
    aadhar: { setter: hasEnteredAadhar, getter: setHasEnteredAadhar },
    balance: { setter: hasEnteredBalance, getter: setHasEnteredBalance },
    password: { setter: hasEnteredPassword, getter: setHasEnteredPassword },
  };

  // const params = new URLSearchParams(formData);
  const apiURL = " http://localhost:8080/api/register/createaccount?"; // + params.toString();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const setter = fields[name]["getter"];
    const isValid = value.trim() !== "";
    setter(isValid);
  };

  const handleConfirmPass = (e) => {
    setPassword(e.target.value);
  };

  async function createAcc() {
    if (formData.password === confirmPassword) {
      await axios.post(apiURL, formData).then((response) => {
        const data = response.data;
        if (data === "Account Created Successfully") {
          console.log("success");
          alert("Account created successfully");
          setFormData({
            acc_id: "",
            acc_type: "",
            firstname: "",
            lastname: "",
            phonum: 0,
            address: "",
            nominee: "",
            nationality: "",
            pannum: "",
            aadhar: 0,
            balance: 0,
            password: "",
          });
        } else {
          console.log("some error");
        }
      });
      navigate("/login");
    } else {
      alert("Password doesnt match!");
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    createAcc();
  };

  return (
    <div className="container mt-5">
      <h2 style={{ textAlign: "center" }}>Account Creation</h2>
      <form
        id="signupForm"
        onSubmit={handleSubmit}
        className="row g-3 "
        style={{ marginTop: "10px" }}
      >
        <div className="col-md-6" style={{ marginTop: "10px" }}>
          <label
            htmlFor="accountId"
            className="form-label "
            style={{ textAlign: "left" }}
          >
            Account ID
          </label>
          <input
            type="text"
            className={`form-control ${
              hasEnteredId ? "is-valid" : "is-invalid"
            }`}
            id="accountId"
            name="acc_id"
            onChange={handleChange}
            value={formData.acc_id}
            placeholder="Enter your account ID"
            required
          />
        </div>

        <div className="col-md-6" style={{ marginTop: "10px" }}>
          <label
            htmlFor="accountType"
            className="form-label"
            style={{ textAlign: "left" }}
          >
            Account Type
          </label>
          <input
            type="text"
            className={`form-control ${
              hasEnteredType ? "is-valid" : "is-invalid"
            }`}
            id="accountType"
            name="acc_type"
            onChange={handleChange}
            value={formData.acc_type}
            placeholder="Enter your account Type"
          />
        </div>

        <div className="col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="firstName" style={{ textAlign: "left" }}>
            First Name
          </label>
          <input
            type="text"
            className={`form-control ${
              hasEnteredFirst ? "is-valid" : "is-invalid"
            }`}
            id="firstName"
            name="firstname"
            onChange={handleChange}
            value={formData.firstname}
            placeholder="Enter your first Name"
          />
        </div>

        <div className="col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="lastName" style={{ textAlign: "left" }}>
            Last Name
          </label>
          <input
            type="text"
            className={`form-control ${
              hasEnteredLast ? "is-valid" : "is-invalid"
            }`}
            id="lastName"
            name="lastname"
            onChange={handleChange}
            value={formData.lastname}
            placeholder="Enter your last Name"
          />
        </div>

        <div className="col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="phoneNo" style={{ textAlign: "left" }}>
            Phone Number
          </label>
          <input
            type="number"
            className={`form-control ${
              hasEnteredPhone ? "is-valid" : "is-invalid"
            }`}
            id="phone number"
            name="phonum"
            onChange={handleChange}
            value={formData.phonum}
            placeholder="Enter your Phone Number"
          />
        </div>

        <div className="col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="address" style={{ textAlign: "left" }}>
            Address
          </label>
          <input
            type="text"
            className={`form-control ${
              hasEnteredAddress ? "is-valid" : "is-invalid"
            }`}
            id="address"
            name="address"
            onChange={handleChange}
            value={formData.address}
            placeholder="Enter your address"
          />
        </div>

        <div className="form-group col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="nominee" style={{ textAlign: "left" }}>
            Nominee
          </label>
          <input
            type="text"
            className={`form-control ${
              hasEnteredNominee ? "is-valid" : "is-invalid"
            }`}
            id="nominee"
            name="nominee"
            onChange={handleChange}
            value={formData.nominee}
            placeholder="Enter your nominee"
          />
        </div>

        <div className="form-group col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="nationality" style={{ textAlign: "left" }}>
            Nationality
          </label>
          <input
            type="text"
            className={`form-control ${
              hasEnteredNationality ? "is-valid" : "is-invalid"
            }`}
            id="natioanlity"
            name="nationality"
            onChange={handleChange}
            value={formData.nationality}
            placeholder="Enter your nationality"
          />
        </div>

        <div className="form-group col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="panno" style={{ textAlign: "left" }}>
            Pan Number
          </label>
          <input
            type="text"
            className={`form-control ${
              hasEnteredPan ? "is-valid" : "is-invalid"
            }`}
            id="panno"
            name="pannum"
            onChange={handleChange}
            value={formData.pannum}
            placeholder="Enter your pan number"
          />
        </div>

        <div className="form-group col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="aadhar" style={{ textAlign: "left" }}>
            Aadhar Number
          </label>
          <input
            type="number"
            className={`form-control ${
              hasEnteredAadhar ? "is-valid" : "is-invalid"
            }`}
            id="aadharno"
            name="aadhar"
            onChange={handleChange}
            value={formData.aadhar}
            placeholder="Enter your aadhar number"
          />
        </div>

        <div className="form-group col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="aadhar" style={{ textAlign: "left" }}>
            Balance
          </label>
          <input
            type="number"
            className={`form-control ${
              hasEnteredBalance ? "is-valid" : "is-invalid"
            }`}
            id="balance"
            name="balance"
            onChange={handleChange}
            value={formData.balance}
            placeholder="Enter the balance amount"
          />
        </div>

        <div className="form-group col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="password" style={{ textAlign: "left" }}>
            Password
          </label>
          <input
            type="password"
            className={`form-control ${
              hasEnteredPassword ? "is-valid" : "is-invalid"
            }`}
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Enter the password"
          />
        </div>

        <div className="form-group col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="password" style={{ textAlign: "left" }}>
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleConfirmPass}
            value={confirmPassword}
            placeholder="Enter the password"
          />
        </div>

        <div style={{ marginTop: "10px", textAlign: "center" }} text-center>
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </div>
      </form>
      <Outlet />
    </div>
  );
}

export default AccountCreation;
