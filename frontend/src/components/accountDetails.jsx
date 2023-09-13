import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AccountDetails() {
  const [accountData, setAccountData] = useState({});
  const accountId = "ACC123"; // Static ID

  useEffect(() => {
    // Fetch account details from API on page load
    fetchAccountDetails(accountId);
  }, [accountId]);

  const fetchAccountDetails = (accountId) => {
    axios.get(`http://localhost:8080/api/getaccount?id=${accountId}`)
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
    <div className="container bootstrap snippets bootdey">
      <div className="panel-body inf-content">
        <button className="btn btn-primary edit-button">Edit Details</button>
        <div className="row">
          <div className="col-md-6">
            <strong>Account Information</strong>
            <div className="table-responsive">
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
                    <td className="text-primary">{accountData.secondName}</td>
                  </tr>
                  <tr>
                    <td><strong>Phone Number</strong></td>
                    <td className="text-primary">{accountData.phoneNumber}</td>
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
                    <td className="text-primary">{accountData.panCardNumber}</td>
                  </tr>
                  <tr>
                    <td><strong>Aadhar Number</strong></td>
                    <td className="text-primary">{accountData.aadharNumber}</td>
                  </tr>
                  <tr>
                    <td><strong>Balance</strong></td>
                    <td className="text-primary">{accountData.balance}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
