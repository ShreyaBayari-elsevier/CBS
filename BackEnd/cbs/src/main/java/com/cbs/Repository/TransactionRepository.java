package com.cbs.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cbs.Document.Transaction;

import java.util.List;

public interface TransactionRepository extends MongoRepository<Transaction, String> {
//	List<Transaction> findByAcc(String acc_id);
//	List<Transaction> findByTc(String transaction_category);
}