package com.mohitreddy.fileshare.service;

import java.time.Instant;

import javax.management.RuntimeErrorException;

import org.springframework.stereotype.Service;

import com.mohitreddy.fileshare.document.Profile;
import com.mohitreddy.fileshare.dto.ProfileDTO;
import com.mohitreddy.fileshare.repository.ProfileRepo;
import com.mongodb.DuplicateKeyException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProfileService {
    private final ProfileRepo profileRepo;

    public ProfileDTO createProfile(ProfileDTO profileDTO) {
        
        Profile profile = Profile.builder()
            .clerkId(profileDTO.getClerkId())
            .email(profileDTO.getEmail())
            .firstName(profileDTO.getFirstName())
            .lastName(profileDTO.getLastName())
            .photoUrl(profileDTO.getPhotoUrl())
            .credits(5)
            .createdAt(Instant.now())
            .build();

        try {
            profile = profileRepo.save(profile);
        } catch (DuplicateKeyException e) {
            throw new RuntimeException("User Already Exist");
        }
        

        return ProfileDTO.builder()
                .id(profile.getId())
                .clerkId(profile.getClerkId())
                .email(profile.getEmail())
                .firstName(profile.getFirstName())
                .lastName(profile.getLastName())
                .photoUrl(profile.getPhotoUrl())
                .credits(profile.getCredits())
                .createdAt(profile.getCreatedAt())
                .build();
        }
}
