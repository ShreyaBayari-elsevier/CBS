import React, { useEffect, useState } from "react";
import api from "../../services/axios.js";
import './Transaction.css'
import { Link } from "react-router-dom";

const apiURL = "api/gettransactions?";

const Transactions = () => {
    const [transactionData, setTransactionData] = useState([]);
        
    useEffect(() => {
        fetchTransactions(1);
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
    
    return (
        <div className="container">
            <Link to='/AddTransaction'>
                <button className="transferFund" >Transfer Fund</button>
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