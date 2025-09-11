package com.mohitreddy.fileshare.service;

import java.time.Instant;


import org.springframework.stereotype.Service;

import com.mohitreddy.fileshare.document.Profile;
import com.mohitreddy.fileshare.dto.ProfileDTO;
import com.mohitreddy.fileshare.repository.ProfileRepo;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProfileService {
    private final ProfileRepo profileRepo;

    public ProfileDTO createProfile(ProfileDTO profileDTO) {

        if (profileRepo.existsByClerkId(profileDTO.getClerkId())) {
            return updateProfile(profileDTO);
        }
        
        Profile profile = Profile.builder()
            .clerkId(profileDTO.getClerkId())
            .email(profileDTO.getEmail())
            .firstName(profileDTO.getFirstName())
            .lastName(profileDTO.getLastName())
            .photoUrl(profileDTO.getPhotoUrl())
            .credits(5)
            .createdAt(Instant.now())
            .build();

        profile = profileRepo.save(profile);
        
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

    public ProfileDTO updateProfile(ProfileDTO profileDTO) {
        Profile existingProfileDoc = profileRepo.findByClerkId(profileDTO.getClerkId());
        if (existingProfileDoc != null) {
            if (profileDTO.getEmail() != null && !profileDTO.getEmail().isEmpty()) {
                existingProfileDoc.setEmail(profileDTO.getEmail());
            }

            if (profileDTO.getFirstName() != null && !profileDTO.getFirstName().isEmpty()) {
                existingProfileDoc.setFirstName(profileDTO.getFirstName());
            }

            if (profileDTO.getLastName() != null && !profileDTO.getLastName().isEmpty()) {
                existingProfileDoc.setLastName(profileDTO.getLastName());
            }

            if (profileDTO.getPhotoUrl() != null && !profileDTO.getPhotoUrl().isEmpty()) {
                existingProfileDoc.setPhotoUrl(profileDTO.getPhotoUrl());
            }

            
            // Save the updated profile
            existingProfileDoc = profileRepo.save(existingProfileDoc);

            return ProfileDTO.builder()
                    .id(existingProfileDoc.getId())
                    .clerkId(existingProfileDoc.getClerkId())
                    .email(existingProfileDoc.getEmail())
                    .firstName(existingProfileDoc.getFirstName())
                    .lastName(existingProfileDoc.getLastName())
                    .photoUrl(existingProfileDoc.getPhotoUrl())
                    .credits(existingProfileDoc.getCredits())
                    .createdAt(existingProfileDoc.getCreatedAt())
                    .build();
        }
        return null;
    }

    public Boolean existByClerkId(String id) {
        return profileRepo.existsByClerkId(id);
    }

    public void deleteProfile(String clertId) {
        Profile profile = profileRepo.findByClerkId(clertId);
        if (profile != null) {
            profileRepo.delete(profile);
        }
    }
}

