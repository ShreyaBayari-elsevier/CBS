import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './account-details.css';
import { Link } from 'react-router-dom';

function AccountDetails() {
  const [accountData, setAccountData] = useState({});
  const userId = JSON.parse(localStorage.getItem('userID'));
  const accountId = userId; // Static ID

  useEffect(() => {
    // Fetch account details from API on page load
    fetchAccountDetails(accountId);
  }, [accountId]);

  const fetchAccountDetails = (accountId) => {
    axios.get(`http://localhost:8090/api/register/getaccount?id=${accountId}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        return response.data;
      })
      .then((data) => {
        setAccountData(data);
      })
      .catch((error) => {
        console.error('Error fetching account details:', error);
      });
  };

  return (
    <div className="container account-details">
            <br/>    <br/>    <br/>    <br/>    <br/>
      <div className="panel-body inf-content">
        <div className="table-container">
          <strong aria-label="Account_Information">Account Information</strong>
          <table className="table table-user-information">
            <tbody>
            <tr>
                    <td><strong>Account ID</strong></td>
                    <td className="text-primary">{accountData.acc_id}</td>
                  </tr>
                  <tr>
                    <td><strong>Account Type</strong></td>
                    <td className="text-primary">{accountData.acc_type}</td>
                  </tr>
                  <tr>
                    <td><strong>First Name</strong></td>
                    <td className="text-primary">{accountData.firstname}</td>
                  </tr>
                  <tr>
                    <td><strong>Second Name</strong></td>
                    <td className="text-primary">{accountData.lastname}</td>
                  </tr>
                  <tr>
                    <td><strong>Phone Number</strong></td>
                    <td className="text-primary">{accountData.phonum}</td>
                  </tr>
                  <tr>
                    <td><strong>Address</strong></td>
                    <td className="text-primary">{accountData.address}</td>
                  </tr>
                  <tr>
                    <td><strong>Nominee</strong></td>
                    <td className="text-primary">{accountData.nominee}</td>
                  </tr>
                  <tr>
                    <td><strong>Nationality</strong></td>
                    <td className="text-primary">{accountData.nationality}</td>
                  </tr>
                  <tr>
                    <td><strong>PAN Card Number</strong></td>
                    <td className="text-primary">{accountData.pannum}</td>
                  </tr>
                  <tr>
                    <td><strong>Aadhar Number</strong></td>
                    <td className="text-primary">{accountData.aadhar}</td>
                  </tr>
                  <tr>
                    <td><strong>Balance</strong></td>
                    <td className="text-primary">{accountData.balance}</td>
                  </tr>
            </tbody>
          </table>
          <Link to="/accountsedit" className='accountedit-link'>
            <button className="btn btn-primary edit-button">Edit Details</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;

