package com.mohitreddy.fileshare.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mohitreddy.fileshare.dto.ProfileDTO;
import com.mohitreddy.fileshare.service.ProfileService;
import com.mohitreddy.fileshare.service.UserCreditsService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/webhooks")
@RequiredArgsConstructor
public class ClerkWebhookController {

    @Value("${clerk.webhook.secret}")
    private String webhookSecret;

    private final ProfileService profileService;
    private final UserCreditsService userCreditsService;
    
    @PostMapping("/clerk")
    public ResponseEntity<?> handleClerkWebhook(@RequestHeader("svix-id") String svixId,
                                                @RequestHeader("svix-timestamp") String svixTimestamp,
                                                @RequestHeader("svix-signature") String svixSignature,
                                                @RequestBody String payload) {
        try {
            boolean isValid = verifyWebhookSignature(svixId ,svixSignature ,svixTimestamp ,payload);
            if (!isValid) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid signature");
            }

            ObjectMapper mapper = new ObjectMapper();
            JsonNode event = mapper.readTree(payload);
            String eventType = event.get("type").asText();

            switch (eventType) {    
                case "user.created":
                    handleUserCreated(event.path("data"));
                    break;
                case "user.updated":
                    handleUserUpdated(event.path("data"));
                    break;
                case "user.deleted":
                    handleUserDeleted(event.path("data"));
                    break;
            }
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, e.getMessage());
        }
    }

    private void handleUserCreated(JsonNode data) {
        String clerkId = data.path("id").asText();
        String email = "";
        JsonNode email_addresses = data.path("email_addresses");
        if (email_addresses.isArray() && email_addresses.size()>0) {
            email = email_addresses.get(0).path("email_address").asText();
        }

        String firstName = data.path("first_name").asText();
        String lastName = data.path("last_name").asText();
        String imageUrl = data.path("image_url").asText();

        ProfileDTO newProfile = ProfileDTO.builder()
            .clerkId(clerkId)
            .email(email)
            .firstName(firstName)
            .lastName(lastName)
            .photoUrl(imageUrl)
            .build();

        profileService.createProfile(newProfile);
        userCreditsService.createInitialCredits(clerkId);
    }

    private void handleUserUpdated(JsonNode data) {
        String clerkId = data.path("id").asText();
        String email = "";

        JsonNode emailAddresses = data.path("email_addresses");
        if (emailAddresses.isArray() && emailAddresses.size() > 0) {
            email = emailAddresses.get(0).path("email_addresses").asText();
        }        
        
        String firstName = data.path("first_name").asText();
        String lastName = data.path("last_name").asText();
        String imageUrl = data.path("image_url").asText();

        ProfileDTO updatedProfile = ProfileDTO.builder()
                                        .clerkId(clerkId)
                                        .email(email)
                                        .firstName(firstName)
                                        .lastName(lastName)
                                        .photoUrl(imageUrl)
                                        .build();

        updatedProfile = profileService.updateProfile(updatedProfile);
        if (updatedProfile == null) {
            handleUserCreated(data);
        }

    }

    private void handleUserDeleted(JsonNode data) {
        String clerkId = data.path("id").asText();
        profileService.deleteProfile(clerkId);
    }

    private boolean verifyWebhookSignature(String svixId, String svixSignature, String svixTimestamp, String payload) {
        // for time being, skip verification
        return true;
    }
}
