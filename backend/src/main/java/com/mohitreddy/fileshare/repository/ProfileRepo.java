package com.mohitreddy.fileshare.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mohitreddy.fileshare.document.Profile;

public interface ProfileRepo extends MongoRepository<Profile, String> {
    
    Optional<Profile> findByEmail(String email);

    Profile findByClerkId(String clerkid);

    boolean existsByClerkId(String clerkid);
    
}
