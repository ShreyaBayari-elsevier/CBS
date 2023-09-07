package com.cbs.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cbs.Document.Register;

public interface RegisterRepository extends MongoRepository<Register, String> {
    
}