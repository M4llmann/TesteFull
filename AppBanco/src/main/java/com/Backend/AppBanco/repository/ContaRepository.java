package com.Backend.AppBanco.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Backend.AppBanco.entity.ContaEntity;


public interface ContaRepository extends JpaRepository<ContaEntity, Integer> {

    // Buscar ContaEntity associada a um UsuarioEntity pelo email
    Optional<ContaEntity> findByUsuario_IdUsuario(Integer idUsuario);

}
