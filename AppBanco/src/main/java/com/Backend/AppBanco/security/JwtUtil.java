package com.Backend.AppBanco.security;

import java.security.Key;
import java.util.Date;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtil {
        private static final long EXPIRATION_TIME = 86400000;

    public static String generateToken(String email, Key secret) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(secret, SignatureAlgorithm.HS256)
                .compact();
    }

    public static boolean validateToken(String token, String email, Key secret) {
        try {
            String subject = Jwts.parserBuilder()
                    .setSigningKey(secret)
                    .build()
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();
            return subject.equals(email);
        } catch (Exception e) {
            return false; // Token inválido ou expirado
        }
    }

    public static String getSubjectFromToken(String token, Key secret) {
        return Jwts.parserBuilder()
                .setSigningKey(secret)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}

