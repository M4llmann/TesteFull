import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) { }

  criarUsuario(usuarioDTO: { email: string; senha: string }): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}`, usuarioDTO);
  }

  buscarUsuarioPorEmail(email: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${email}`);
  }

  login(usuario: any): Observable<{ token: string, usuario: Usuario }> {
    return this.http.post<{ token: string, usuario: Usuario }>(`${this.apiUrl}/login`, usuario);
  }

}