package com.Backend.AppBanco.security;

import java.io.IOException;
import java.security.Key;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.Backend.AppBanco.entity.UsuarioEntity;
import com.Backend.AppBanco.service.UsuarioService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtFilter extends OncePerRequestFilter {
    @Autowired
    private Key secret;
    @Autowired
    private UsuarioService usuarioService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
                try {
                    // Verificar se a requisição é para uma rota que não precisa de autenticação (login ou usuários)
        String uri = request.getRequestURI();
        if (uri.startsWith("/api/usuarios") || uri.equals("/login") || request.getMethod().equals("OPTIONS")) {
            filterChain.doFilter(request, response); // Passa para o próximo filtro sem aplicar o JWT
            return;
        }
        String authorizationHeader = request.getHeader("Authorization");

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            String token = authorizationHeader.substring(7);
            String email = JwtUtil.getSubjectFromToken(token, secret);
            if (!JwtUtil.validateToken(token, email, secret)) {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write("Token inválido ou expirado.");
                return;
            }
            
            UsuarioEntity usuario = usuarioService.buscarUsuarioPorEmail(email);
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(usuario, null,null);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        else{
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Cabeçalho de autorização ausente ou inválido.");
            return;
        }
        
        filterChain.doFilter(request, response);
                        
                } catch (Exception e) {
                    System.out.println(e);
                }

    }
}

