package com.cbs.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cbs.Document.LoginRegister;

public interface LoginRepository extends MongoRepository<LoginRegister, String> {
    
}