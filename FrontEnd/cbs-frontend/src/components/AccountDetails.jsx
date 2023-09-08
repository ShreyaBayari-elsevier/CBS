import React, { useState, useEffect } from 'react';

function AccountDetails() {
  const [accountData, setAccountData] = useState({});
  const accountId = "ACC123"; //Static ID

  useEffect(() => {
    console.log('Fetching account details for account');
    console.log(accountId);
    // Fetch account details from API here
    fetch(`/api/getaccount?id=${accountId}`)
      .then((response) => {
        console.log('Response:', response);
        return response.json();
      })
      .then((data) => {
        console.log('Data:', data);
        setAccountData(data);
      })
      .catch((error) => {
        console.error('Error fetching account details:', error);
      });
  }, [accountId]);  

  return (
    <div>
      <h1>Account Details</h1>
      <p>Account ID: {accountData.acc_id}</p>
      <p>Account Type: {accountData.acc_type}</p>
      <p>First Name: {accountData.firstname}</p>
      <p>Last Name: {accountData.lastname}</p>
      <p>Phone Number: {accountData.phonum}</p>
      <p>Address: {accountData.address}</p>
      <p>Nominee: {accountData.nominee}</p>
      <p>Nationality: {accountData.nationality}</p>
      <p>PAN Number: {accountData.pannum}</p>
      <p>Aadhar Number: {accountData.aadhar}</p>
      <p>Balance: {accountData.balance}</p>
    </div>
  );
}

export default AccountDetails;
