package com.mohitreddy.fileshare.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mohitreddy.fileshare.document.UserCredits;

public interface UserCreditsRepo extends MongoRepository<UserCredits, String> {
    
}
