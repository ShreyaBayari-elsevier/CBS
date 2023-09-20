import React, { useState } from "react";
import api from "../../services/axios.js";
import { useNavigate } from "react-router-dom"; 

const apiURL =  "api/transaction?";
const Funds = () => {
    const [formData, setFormData] = useState({
        fromAcc: '',
        toAcc: '',
        amount: '',
        transId: '',
        dateTime: '',
        transCat: ''
    });

    const [isValid, setIsValid] = useState({
        fromAcc: false,
        toAcc: false,
        amount: false,
        transId: false,
        dateTime: false,
        transCat: false
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        setIsValid({
            ...isValid,
            [name]: value.trim() !== '' && value !=='0'
        });
    };

    const TransferFunds = async (formData) =>{
        try { 
            await api.post(apiURL, {}, {
    
                params: {
                    fromAcc: formData.fromAcc,
                    toAcc: formData.toAcc,
                    amount: formData.amount,
                    transId: formData.transId,
                    dateTime: formData.dateTime,
                    transCat: formData.transCat            
                }
            }
            
            
            ).then((response) => {
                const data = response.status;
                if (data === 200) {
                     alert("Success")
                    navigate('/Transactions');             
                }
                else {
                    alert("Failed")
                    navigate('/Transactions');
                }
            });
        } catch (error) {
            console.log("Error : " + error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        TransferFunds(formData);
        
    };

    return (
        <div className="container">
            <h1 className="text-center">Transfer Funds</h1>
            <form name="transferFundForm" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="from" className="form-label text-start">
                            Sender Account Number :
                        </label>
                        <input type="text" className={`form-control ${isValid.fromAcc ? 'is-valid' : 'is-invalid'}`} id="fromAcc" name="fromAcc" value={formData.fromAcc} onChange={handleChange} placeholder="Senders Account Number" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="from" className="form-label">
                            Recipient Account Number :
                        </label>
                        <input type="text" className={`form-control ${isValid.toAcc ? 'is-valid' : 'is-invalid'}`} id="toAcc" name="toAcc" value={formData.toAcc} onChange={handleChange} placeholder="Receivers Account Number" required />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="from" className="form-label">
                            Amount :
                        </label>
                        <input type="number" className={`form-control ${isValid.amount ? 'is-valid' : 'is-invalid'}`} id="amount" name="amount" value={formData.amount} onChange={handleChange} min={1} placeholder="Amount" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="transactionId" className="form-label">
                            Transaction ID :
                        </label>
                        <input type="text" className={`form-control ${isValid.transId ? 'is-valid' : 'is-invalid'}`} id="transId" name="transId" value={formData.transId} onChange={handleChange} placeholder="Transaction ID" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="dateTime" className="form-label">
                            Date and Time :
                        </label>
                        <input type="datetime-local" className={`form-control ${isValid.dateTime ? 'is-valid' : 'is-invalid'}`} id="dateTime" name="dateTime" value={formData.dateTime} onChange={handleChange} placeholder="Date and Time" required />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="dateTime" className="form-label">
                            Transaction Type:
                        </label>
                        <select className={`form-control ${isValid.transCat ? 'is-valid' : 'is-invalid'}`} id="transCat" value={formData.transCat} onChange={handleChange} name="transCat" required>
                            <option disabled value="">Select a Transaction type</option>
                            <option >UPI</option>
                            <option >NEFT</option>
                            <option >IMPS</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success m-1">Submit</button>
                    </div>
                </div>
            </form >
        </div >

    );
};

export default Funds;