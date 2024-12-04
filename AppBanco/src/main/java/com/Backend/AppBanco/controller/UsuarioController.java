package com.Backend.AppBanco.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Backend.AppBanco.entity.UsuarioEntity;
import com.Backend.AppBanco.service.UsuarioService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<?> criarUsuario(@RequestBody UsuarioEntity usuario) {
        try {
            UsuarioEntity usuarioCriado = usuarioService.criarUsuario(usuario.getEmail(), usuario.getSenha());
            return ResponseEntity.status(HttpStatus.CREATED).body(usuarioCriado);
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }
    }

    @GetMapping("/{email}")
    public ResponseEntity<?> buscarUsuario(@PathVariable String email) {
        try {
            UsuarioEntity usuario = usuarioService.buscarUsuarioPorEmail(email);
            return ResponseEntity.ok(usuario);
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UsuarioEntity usuario) {
        try {
            UsuarioEntity usuarioLogado = usuarioService.login(usuario.getEmail(), usuario.getSenha());
            return ResponseEntity.ok(usuarioLogado); // Retorna o usuário logado
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage()); // Retorna erro de login
        }
    }
}
