import React,  { useState } from 'react';
import axios from "axios";
import './SignUp.css';
// import DarkMode from './DarkMode';

function AccountCreation() {

 
    const [formData, setFormData] = useState({
        acc_id: '',
        acc_type: '',
        firstname: '',
        lastname: '',
        phonum: 0,
        address: '',
        nominee: '',
        nationality:'',
        pannum: '',
        aadhar: 0,
        balance: 0
    });

    const [hasEnteredText, setHasEnteredText] = useState(false);

    // const params = new URLSearchParams(formData);
    const apiURL =  " http://localhost:8090/api/createaccount?";// + params.toString();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (value.trim() !== ''){
          setHasEnteredText(true);
        }else{
          setHasEnteredText(false);
        }
      }

        // const isNumeric = name === 'amount' ? !isNaN(parseFloat(value)) && isFinite(value) : true;
    //     setIsValid({
    //         ...isValid,
    //         [name]: value.trim() !== ''
    //     });
    // };

    async function createAcc() {
    await axios.post(apiURL, formData, 
      // params: {
      //     acc_id: formData.acc_id,
      //     acc_type: formData.acc_type,
      //     firstname: formData.firstname,
      //     lastname: formData.lastname,
      //     phonum: formData.phonum,
      //     address: formData.address,
      //     nominee: formData.nominee,
      //     nationality: formData.nationality,
      //     pannum: formData.pannum,
      //     aadhar: formData.aadhar,
      //     balance: formData.balance
      // }
  ).then((response) => {
      const data = response.data;
      if (data === 'Account Created Successfully') {
          console.log("success");
          
      }
      else {
        console.log("some error");
      }
  });
}
  const handleSubmit = (e) => {
    e.preventDefault();
    createAcc();
};




  
  return (

    
    <div className="container mt-5">
    
      <h2  style={{textAlign: 'center'}}>Account Creation</h2>
      <form onSubmit={handleSubmit} className="row g-3 " style={{ marginTop: '10px' }}>
      
        <div className="col-md-6" style={{ marginTop: '10px' }} >
          <label htmlFor="accountId" className='form-label ' style={{textAlign: 'left'}} >Account ID</label>
          <input
            type="text"
            className={`form-control ${hasEnteredText ? 'is-valid' : ''}`}
            id="accountId"
            name="acc_id"
            onChange={handleChange}
            value={formData.acc_id}
            placeholder="Enter your account ID"
            required
          />
        </div>

        <div className="col-md-6" style={{ marginTop: '10px' }}>
          <label htmlFor="accountType" className="form-label" style={{textAlign: 'left'}}>Account Type</label>
          <input
            type="text"
            className="form-control"
            id="accountType"
            name="acc_type"
            onChange={handleChange}
            value={formData.acc_type}
            placeholder="Enter your account Type"
          />
        </div>

        

        <div className="col-md-6" style={{ marginTop: '10px' }}>
          <label htmlFor="firstName" style={{textAlign: 'left'}}>First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstname"
            onChange={handleChange}
            value={formData.firstname}
            placeholder="Enter your first Name"
          />
        </div>

        <div className="col-md-6" style={{ marginTop: '10px' }}>
          <label htmlFor="lastName" style={{textAlign: 'left'}}>Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastname"
            onChange={handleChange}
            value={formData.lastname}
            placeholder="Enter your last Name"
          />
        </div>

        <div className="col-md-6" style={{ marginTop: '10px' }}>
          <label htmlFor="phoneNo" style={{textAlign: 'left'}}>Phone Number</label>
          <input
            type="number"
            className="form-control"
            id="phone number"
            name="phonum"
            onChange={handleChange}
            value={formData.phonum}
            placeholder="Enter your Phone Number"
          />
        </div>

        <div className="col-md-6" style={{ marginTop: '10px' }}>
          <label htmlFor="address" style={{textAlign: 'left'}}>Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            onChange={handleChange}
            value={formData.address}
            placeholder="Enter your address"
          />
        </div>

        <div className="form-group col-md-6" style={{ marginTop: '10px' }}>
          <label htmlFor="nominee" style={{textAlign: 'left'}}>Nominee</label>
          <input
            type="text"
            className="form-control"
            id="nominee"
            name="nominee"
            onChange={handleChange}
            value={formData.nominee}
            placeholder="Enter your nominee"
          />
        </div>

        <div className="form-group col-md-6" style={{ marginTop: '10px' }}>
          <label htmlFor="nationality" style={{textAlign: 'left'}}>Nationality</label>
          <input
            type="text"
            className="form-control"
            id="natioanlity"
            name="nationality"
            onChange={handleChange}
            value={formData.nationality}
            placeholder="Enter your nationality"
          />
        </div>

        <div className="form-group col-md-6" style={{ marginTop: '10px' }}>
          <label htmlFor="panno" style={{textAlign: 'left'}}>Pan Number</label>
          <input
            type="text"
            className="form-control"
            id="panno"
            name="pannum"
            onChange={handleChange}
            value={formData.pannum}
            placeholder="Enter your pan number"
          />
        </div>

        <div className="form-group col-md-6" style={{ marginTop: '10px' }}>
          <label htmlFor="aadhar" style={{textAlign: 'left'}}>Aadhar Number</label>
          <input
            type="number"
            className="form-control"
            id="aadharno"
            name="aadhar"
            onChange={handleChange}
            value={formData.aadhar}
            placeholder="Enter your aadhar number"
          />
        </div>

        <div className="form-group" style={{ marginTop: '10px' , textAlign: 'center'}}>
          <label htmlFor="aadhar" style={{textAlign: 'left'}}>Balance</label>
          <input
            type="number"
            className="form-control"
            id="balance"
            name="balance"
            onChange={handleChange}
            value={formData.balance}
            style={{width: '500px', margin: '0 auto'}}
            placeholder="Enter the balance amount"
          />
        </div>



        <div style={{ marginTop: '10px', textAlign: 'center' }} text-center>
        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
        </div>
      </form>
      
    </div>
    

    
  );

//   await axios.post(apiURL, {}, {
//     params: {
//         acc_id: formData.acc_id,
//         acc_type: formData.acc_type,
//         firstname: formData.firstname,
//         lastname: formData.lastname,
//         phonum: formData.phonum,
//         address: formData.address,
//         nominee: formData.nominee,
//         nationality: formData.nationality,
//         pannum: formData.pannum,
//         aadhar: formData.aadhar,
//         balance: formData.balance
//     }
// }).then((response) => {
//     const data = response.data;
//     if (data === 'Data Entered Successfully') {
//         CustomToast(data, 'success');
//     }
//     else {
//         CustomToast(data, 'error');
//     }
// });

}

export default AccountCreation;