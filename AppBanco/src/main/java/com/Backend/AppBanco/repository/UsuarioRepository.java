package com.Backend.AppBanco.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Backend.AppBanco.entity.UsuarioEntity;

public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Integer> {
    
    Optional<UsuarioEntity> findByEmail(String email);
}
