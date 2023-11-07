import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function AccountDetailsEdit() {
  const [acc_id, setAcc_id] = useState('');
  const [phonum, setPhonum] = useState('');
  const [address, setAddress] = useState('');
  const [nominee, setNominee] = useState('');

  const [accountData, setAccountData] = useState({});
  const navigate = useNavigate();

  const acc_ID = JSON.parse(localStorage.getItem('userID'));
  
  useEffect (() => {
    const userId = JSON.parse(localStorage.getItem('userID'));
    (async ()=>{
      
      axios.get(`http://localhost:8090/api/register/getaccount?id=${userId}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        return response.data;
      })
      .then((data) => {
        console.log(data)
        setAccountData(data);
        setPhonum(data.phonum);
        setAddress(data.address);
        setNominee(data.nominee)
      })
      .catch((error) => {
        //    console.log('Error fetching account details:'+ error);
      });
    })()
  },[])

  async function update1(event) {


    event.preventDefault();
    try {
      // axios( URL , RequestBody, Config);
      // axios( URL , { id:1, name:" asdas ",}, { params:{ <requestparam_name>: value} } );
      await axios.put("http://localhost:8090/api/register/update",
        {
          phonum: phonum,
          address: address,
          nominee: nominee
        },
        {
          params: { id: acc_ID }
        }).then(()=>{
          alert("successful");
        });
        
        navigate('/accounts');
        setAcc_id("");
        setPhonum("");
        setAddress("");
        setNominee("");
      }
      catch (err) {
        alert("Updation failed");
    }
  }

  return (
    <div className="container mt-5">
      <form onSubmit={update1}>
        <div className="mb-3">
          <label htmlFor="acc_id" className="form-label" aria-label="acc_no">Account Number</label>
          <input type="text" className="form-control" aria-label="acc_id" placeholder="Enter Account Number" required
            value={accountData.acc_id}
            disabled
          />
        </div>
        <div className="role">
          <div className="mb-3">
            <label htmlFor="phonum" className="form-label" >Phone Number</label>
            {/* <label for="phonum" className="form-label">Phone Number</label> */}
            <input type="text" className="form-control" data-testid="phonum" aria-label="phone_no" placeholder="Enter Phone Number" required
              value={phonum}
              onChange={(event) => {
                setPhonum(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea className="form-control" aria-label="address" rows="3" placeholder="Enter Address" required
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nominee" className="form-label">Nominee</label>
            <input type="text" className="form-control" aria-label="nominee" placeholder="Enter Nominee Name" required
              value={nominee}
              onChange={(event) => {
                setNominee(event.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" aria-label="subbtn" data-testid="submit">Submit</button>

      </form>
    </div>
  );
}

export default AccountDetailsEdit;
