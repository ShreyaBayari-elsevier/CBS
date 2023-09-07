package com.cbs.Document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document("transaction")
public class Transaction{
	
	@Id
	private String trans_id;
	private String acc_id;
    private Double amount; 
    private Double balance;
    private String date_time;
    private String transaction_category;
	private String transaction_type;
	
	public String getTrans_id() {
		return trans_id;
	}

	public void setTrans_id(String trans_id) {
		this.trans_id = trans_id;
	}

	public String getAcc_id() {
		return acc_id;
	}

	public void setAcc_id(String acc_id) {
		this.acc_id = acc_id;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public Double getBalance() {
		return balance;
	}

	public void setBalance(Double balance) {
		this.balance = balance;
	}

	public String getDate_time() {
		return date_time;
	}

	public void setDate_time(String date_time) {
		this.date_time = date_time;
	}

	public String getTransaction_category() {
		return transaction_category;
	}

	public void setTransaction_category(String transaction_category) {
		this.transaction_category = transaction_category;
	}

	public String getTransaction_type() {
		return transaction_type;
	}

	public void setTransaction_type(String transaction_type) {
		this.transaction_type = transaction_type;
	}

	public Transaction(String trans_id, String acc_id, Double amount, Double balance, String date_time,
			String transaction_category, String transaction_type) {
		super();
		this.trans_id = trans_id;
		this.acc_id = acc_id;
		this.amount = amount;
		this.balance = balance;
		this.date_time = date_time;
		this.transaction_category = transaction_category;
		this.transaction_type = transaction_type;
	}	
}