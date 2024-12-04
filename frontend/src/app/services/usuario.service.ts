import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/usuarios'; // URL base da API

  constructor(private http: HttpClient) {}

  // Método para criar um usuário
  criarUsuario(usuarioDTO: { email: string; senha: string }): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}`, usuarioDTO);
  }

  // Método para buscar um usuário pelo email
  buscarUsuarioPorEmail(email: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${email}`);
  }
  login(usuario: any): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, usuario);
  }
}
