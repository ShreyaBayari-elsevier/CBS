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

    axios.get(`http://localhost:8090/api/register/getaccount?id=${userId}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        return response.data;
      })
      .then((data) => {
        setAccountData(data);
        setPhonum(data.phonum);
        setAddress(data.address)
        
      })
      .catch((error) => {
        console.error('Error fetching account details:', error);
      });
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
    <div class="container mt-5">
      <form>
        <div class="mb-3">
          <label for="acc_id" class="form-label">Account Number</label>
          <input type="text" class="form-control" id="acc_id" placeholder="Enter Account Number" required
            value={accountData.acc_id}
            disabled
          />
        </div>
        <div class="role">
          <div class="mb-3">
            <label for="phonum" class="form-label">Phone Number</label>
            <input type="text" className="form-control" id="phonum" placeholder="Enter Phone Number" required
              value={phonum}
              onChange={(event) => {
                setPhonum(event.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <textarea class="form-control" id="address" rows="3" placeholder="Enter Address" required
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="nominee" class="form-label">Nominee</label>
            <input type="text" class="form-control" id="nominee" placeholder="Enter Nominee Name" required
              value={nominee}
              onChange={(event) => {
                setNominee(event.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary" onClick={update1}>Submit</button>

      </form>
    </div>
  );
}

export default AccountDetailsEdit;
