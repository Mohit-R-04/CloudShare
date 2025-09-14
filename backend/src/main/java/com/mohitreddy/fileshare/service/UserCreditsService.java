package com.mohitreddy.fileshare.service;

import org.springframework.stereotype.Service;

import com.mohitreddy.fileshare.document.UserCredits;
import com.mohitreddy.fileshare.repository.UserCreditsRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserCreditsService {
    private final UserCreditsRepo userCreditsRepo;
    public UserCredits createInitialCredits(String clerkId) {
        UserCredits userCredits = UserCredits.builder()
                                    .clerkId(clerkId)
                                    .credits(5)
                                    .plan("BASIC")
                                    .build();
        return userCreditsRepo.save(userCredits);
    }
}
