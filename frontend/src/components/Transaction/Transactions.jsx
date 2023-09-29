import React, { useEffect, useState } from "react";
import api from "../../services/axios.js";
import './Transaction.css'
import { Link } from "react-router-dom";

const apiURL = "api/gettransactions?";

const Transactions = () => {
    const [transactionData, setTransactionData] = useState([]);
    const [fromDate, setFromDate] = useState(""); // State for "from" date
    const [toDate, setToDate] = useState(""); // State for "to" date
        
    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('userID'));
        fetchTransactions(userId);
    }, [])

    const fetchTransactions = (accountId) => {
        api.get(apiURL, {
            params: {
                id: accountId
            }
        }).then((response) => {
            // console.log(response.data);
            setTransactionData(response.data)
        });
    }

    const handleFromDateChange = (event) => {
        setFromDate(event.target.value);
    };
    
    const handleToDateChange = (event) => {
        setToDate(event.target.value);
    };
    
    const handleFilterTransactions = () => {
        // Call the create PDF API with the selected date range
        const userId = JSON.parse(localStorage.getItem('userID'));
        api.get("api/createPdf?", {
            responseType: 'arraybuffer',
            params: {
                acc_id: userId,
                t1: fromDate,
                t2: toDate

            }
        }).then((response) => {
             // Create a Blob object from the binary response data
            const blob = new Blob([response.data], { type: 'application/pdf' });

            // Create a URL for the Blob object
            const pdfUrl = URL.createObjectURL(blob);

            // Open the generated PDF in a new window or tab
            window.open(pdfUrl);

            alert("Statement PDF Downloaded");
        })
        .catch((error) => {
            console.error("Error:", error);
          });
    };

    
    return (
        <div className="container">
            <Link to='/AddTransaction'>
                <button className="transferFund" >Transfer Fund</button>
            </Link>

             {/* Date input fields */}
            <div className="date-inputs">
                <br /><br />
                <input
                    type="date"
                    placeholder="From Date"
                    value={fromDate}
                    onChange={handleFromDateChange}
                />
                <input
                    type="date"
                    placeholder="To Date"
                    value={toDate}
                    onChange={handleToDateChange}
                />
                <button onClick={handleFilterTransactions}>Download Statement</button>
            </div>
            <br /><br /><br />
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th scope="col">Recipient</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date and Time</th>
                        <th scope="col">Transaction Category</th>
                        <th scope="col">Transaction Type</th>
                        <th scope="col">Balance</th>
                    </tr>
                    {transactionData.map((transaction, index) => {
                        return (
                            <tr key={index}>

                                <td >{transaction.trans_id}</td>
                                <td >{transaction.amount}</td>
                                <td >{transaction.date_time}</td>
                                <td >{transaction.transaction_category}</td>
                                <td >{transaction.transaction_type}</td>
                                <td >{transaction.balance}</td>
                            </tr>
                        );
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}


export default Transactions;