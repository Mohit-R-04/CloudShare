package com.mohitreddy.fileshare.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mohitreddy.fileshare.dto.ProfileDTO;
import com.mohitreddy.fileshare.service.ProfileService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ProfileController {
    private final ProfileService profileService;
    
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody ProfileDTO profileDTO) {
        HttpStatus status = profileService.existByClerkId(profileDTO.getClerkId()) ? HttpStatus.OK: HttpStatus.CREATED;
        ProfileDTO createdProfile = profileService.createProfile(profileDTO);
        return ResponseEntity.status(status).body(createdProfile);
    }
}
