package com.Backend.AppBanco.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Backend.AppBanco.entity.UsuarioEntity;
import com.Backend.AppBanco.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public UsuarioEntity criarUsuario(String email, String senha) {
        // Verifica se o e-mail já está cadastrado
        Optional<UsuarioEntity> usuarioExistente = usuarioRepository.findByEmail(email);
        if (usuarioExistente.isPresent()) {
            // Lança uma exceção padrão com a mensagem
            throw new RuntimeException("E-mail já cadastrado!");
        }

        // Cria o novo usuário e salva no repositório
        UsuarioEntity usuario = new UsuarioEntity(email, senha);
        return usuarioRepository.save(usuario);
    }

    public UsuarioEntity buscarUsuarioPorEmail(String email) {
        // Tenta encontrar o usuário pelo e-mail
        return usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado!"));
    }
    public UsuarioEntity login(String email, String senha) {
        // Verifica se o usuário existe
        UsuarioEntity usuario = usuarioRepository.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));
        
        // Verifica se a senha está correta
        if (!usuario.getSenha().equals(senha)) {
            throw new RuntimeException("Senha incorreta.");
        }
    
        return usuario;
    }
}
