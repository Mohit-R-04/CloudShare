package com.mohitreddy.fileshare.security;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

import java.security.PublicKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

@Component
@RequiredArgsConstructor
public class ClerkJwtAuthFilter extends OncePerRequestFilter{

    @Value("${clerk.issuer}")
    private String issuer;

    private final ClerkJwksProvider clerkJwksProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request,  HttpServletResponse response, jakarta.servlet.FilterChain filterChain) throws jakarta.servlet.ServletException, java.io.IOException {
        if (request.getRequestURI().contains("/webhooks/")) {
            // Skip authentication for webhook endpoints
            filterChain.doFilter(request, response);
            return;
        }
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            String token = authorizationHeader.substring(7);
            try {
                String[] tokenParts = token.split("\\.");
                if (tokenParts.length != 3) {
                    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                }
                String header = tokenParts[0];
                String headerJson = new String(java.util.Base64.getUrlDecoder().decode(header));
                ObjectMapper objectMapper = new ObjectMapper();
                JsonNode headerNode = objectMapper.readTree(headerJson);
                if (!headerNode.has("kid")) {
                    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                    response.getWriter().write("Unauthorized: Missing 'kid' in JWT header");
                    return;
                }
                String keyId = headerNode.get("kid").asText();
                PublicKey publicKey = clerkJwksProvider.getPublicKey(keyId);

                // Verify the JWT signature using the public key
                Claims claims = Jwts.parserBuilder()
                        .setSigningKey(publicKey)
                        .setAllowedClockSkewSeconds(60) // Allow a small clock skew
                        .requireIssuer(issuer)
                        .build()
                        .parseClaimsJws(token)
                        .getBody();

                String clerkId = claims.get("sub", String.class);
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        clerkId, null, java.util.Collections.singletonList(new SimpleGrantedAuthority("ROLE_ADMIN")));
                SecurityContextHolder.getContext().setAuthentication(authentication);
                filterChain.doFilter(request, response);
            } catch (Exception e) {
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized: " + e.getMessage());
                return;
            }
        } else {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized: Missing or invalid Authorization header");
            return;
        }          
    }
}   
