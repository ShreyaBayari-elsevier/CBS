import React, { useEffect, useState } from "react";
import './Transaction.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../services/constants.js";

const apiURL = "api/gettransactions?";

const Transactions = () => {
    const [transactionData, setTransactionData] = useState([]);
        
    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('userID'));
        fetchTransactions(userId);
    }, [])
    const fetchTransactions = (accountId) => {
        axios.get(BASE_URL + apiURL, {
            params: {
                id: accountId
            }
        }).then((response) => {
            // console.log(response.data);
            setTransactionData(response.data)
        });
    }
    
    return (
        <div className="container">
            <Link to='/AddTransaction'>
                <button className="transferFund" aria-label="addButton" >Transfer Fund</button>
            </Link>
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