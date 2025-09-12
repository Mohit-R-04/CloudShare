package com.mohitreddy.fileshare.security;

import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.spec.RSAPublicKeySpec;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.math.BigInteger;
import java.net.URI;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class ClerkJwksProvider {
    
    @Value("${clerk.jwks-url}")
    private String jwksUrl;

    private final Map<String, PublicKey> keyCache = new HashMap<>();
    private long lastFetchTime = 0;
    private static final long CACHE_TTL = 60 * 60 * 1000; // 1 hour in milliseconds

    public PublicKey getPublicKey(String keyId) throws Exception {
        long currentTime = System.currentTimeMillis();
        if (currentTime - lastFetchTime > CACHE_TTL || !keyCache.containsKey(keyId)) {
            refreshKeys();
            lastFetchTime = currentTime;
        }
        return keyCache.get(keyId);
    }

    private void refreshKeys() throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jwksNode = objectMapper.readTree(URI.create(jwksUrl).toURL()); 

        JsonNode keys =  jwksNode.get("keys");
        if (keys == null || !keys.isArray()) {
            throw new Exception("Invalid JWKS format: 'keys' not found or not an array");
        }

        for (JsonNode key : keys) {
            String keyId = key.get("kid").asText();
            String algo = key.get("alg").asText();
            String keytype = key.get("kty").asText();
            if (!"RS256".equals(algo) || !"RSA".equals(keytype)) {
                continue; // Skip keys that are not RSA with RS256 algorithm
            }
            String n = key.get("n").asText();
            String e = key.get("e").asText();
            PublicKey publicKey = createPublicKeyFromJwk(n, e);
            if (publicKey != null) {
                keyCache.put(keyId, publicKey);
            } else {
                throw new Exception("Failed to create PublicKey from JWK: " + key.toString());
            }
        }
        lastFetchTime = System.currentTimeMillis();
    }

    private PublicKey createPublicKeyFromJwk(String n, String e) throws Exception {
        Base64.Decoder decoder = Base64.getUrlDecoder();
        byte[] nBytes = decoder.decode(n);
        byte[] eBytes = decoder.decode(e);

        BigInteger modulus = new BigInteger(1, nBytes);
        BigInteger exponent = new BigInteger(1, eBytes);

        RSAPublicKeySpec spec = new RSAPublicKeySpec(modulus, exponent);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        return keyFactory.generatePublic(spec);
    }
}