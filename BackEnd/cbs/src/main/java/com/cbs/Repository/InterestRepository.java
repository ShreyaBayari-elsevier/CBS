package com.cbs.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cbs.Document.Transaction;


public interface InterestRepository extends MongoRepository<Transaction, String> {
    
}