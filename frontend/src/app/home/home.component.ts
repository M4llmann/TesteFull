import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [FormsModule],
})
export class HomeComponent {
  email: string = '';
  senha: string = '';
  erroLogin: string = '';
  erroCadastro: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  // Método para cadastrar usuário
  cadastrar(): void {
    if (!this.email || !this.senha) {
      alert('Preencha todos os campos!');
      return;
    }

    const usuarioDTO = {
      email: this.email,
      senha: this.senha,
    };

    this.usuarioService.criarUsuario(usuarioDTO).subscribe({
      next: (usuario: Usuario) => {
        console.log('Usuário cadastrado:', usuario);
        if (usuario.idUsuario) {
          localStorage.setItem('idUsuario', usuario.idUsuario.toString());
          alert('Cadastro realizado com sucesso!');
          this.router.navigate(['/conta']);
        } else {
          alert('Erro: idUsuario não encontrado na resposta');
        }
      },
      error: (err) => {
        console.error('Erro ao cadastrar usuário', err);
        alert('Erro ao realizar o cadastro. Tente novamente.');
        this.erroCadastro = 'Erro ao cadastrar usuário: ' + err.message;
      },
    });
  }

  // Método para login de usuário
  login(): void {
    if (!this.email || !this.senha) {
      alert('Preencha todos os campos!');
      return;
    }

    const usuarioDTO = {
      email: this.email,
      senha: this.senha,
    };

    this.usuarioService.login(usuarioDTO).subscribe({
      next: (response: any) => {
        const token = response.token;
        const usuario = response.usuario;
        if (token) {
          localStorage.setItem('token', token);
          localStorage.setItem('idUsuario', usuario.idUsuario.toString());
          alert('Login realizado com sucesso!');
          this.router.navigate(['/conta']);
        } else {
          alert('Erro: Token não encontrado na resposta');
        }
      },
      error: (err) => {
        console.error('Erro ao realizar login', err);
        alert('E-mail ou senha incorretos.');
      },
    });

  }
}