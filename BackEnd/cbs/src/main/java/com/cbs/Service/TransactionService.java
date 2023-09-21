package com.cbs.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.cbs.Document.Register;
import com.cbs.Document.Transaction;
import com.cbs.Repository.RegisterRepository;
import com.cbs.Repository.TransactionRepository;
import com.google.gson.Gson;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
@Service
public class TransactionService {
    private TransactionRepository transactionRepository;
    @Autowired
    private RegisterRepository repository;
    private double balance = 0.0 ; // EXTRACT BALANCE FROM ACCOUNT'S TABLE
    @Autowired
    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }
    @Autowired
 	private MongoTemplate mongoTemplate;

    public Transaction performTransaction(String fromAccountNumber, String toAccountNumber, double amount, String tranId,String date_time, String tc) {
        // Retrieve sender and receiver accounts
    	String msg=null;
    	Query query = new Query(Criteria.where("acc_id").is(fromAccountNumber));
	    List<Register> s = mongoTemplate.find(query, Register.class,"account_info");
	    Register reg=s.get(0);
	    balance=reg.getBalance();
	    Transaction transaction = null;
	    if(balance>amount)
	    {
	    	balance -= amount;
	        reg.setBalance(balance);
	        repository.save(reg);
	        Transaction trs=new Transaction(tranId, fromAccountNumber, amount, balance, date_time, tc, "Debit");
	        transactionRepository.save(trs);	        
	        int t1=Integer.parseInt(tranId);
	        t1=t1+1;
	        String t2=String.valueOf(t1);
	        transaction = performCredit(t2,toAccountNumber,amount,date_time,tc);
	    }
        return transaction;
    }
    
    public Transaction performCredit(String t,String toAccountNumber,Double amount,String date_time,String tc)
    {
    	Query query = new Query(Criteria.where("acc_id").is(toAccountNumber));
	    List<Register> s = mongoTemplate.find(query, Register.class,"account_info");
	    Register reg=s.get(0);
	    balance=reg.getBalance();
	    balance += amount;
	    reg.setBalance(balance);
	    repository.save(reg);
	    Transaction trs=new Transaction(t, toAccountNumber, amount, balance, date_time, tc, "Credit");
	    transactionRepository.save(trs);
    	return trs;
    }
    
    public List<Transaction> getAllTransactions(String id) {
    	
		 List<Transaction> transactions = transactionRepository.findAll();
		 
		 List<Transaction> transactionsById = transactions.stream()
				    .filter(transaction -> id.equals(transaction.getAcc_id()))
				    .collect(Collectors.toList());
		 
//		 Gson gson = new Gson();
//		 String jsonArray = gson.toJson(transactionsById);
//		 return jsonArray;
		 
		 return transactionsById;
	}
}