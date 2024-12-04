import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../usuario.model'; // Certifique-se de que está importando o modelo correto

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [FormsModule],
})
export class HomeComponent {
  email: string = '';
  senha: string = '';
  erroLogin: string = ''; // Para mostrar erros no login
  erroCadastro: string = ''; // Para mostrar erros no cadastro

  constructor(private usuarioService: UsuarioService, private router: Router) {}

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
          localStorage.setItem('idUsuario', usuario.idUsuario.toString()); // Armazenando o idUsuario no localStorage
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

  // Método para realizar login
  login(): void {
    if (!this.email || !this.senha) {
      alert('Preencha todos os campos!');
      return;
    }

    const usuarioDTO = {
      email: this.email,
      senha: this.senha,
    };

    // Usando o método 'login' do serviço ao invés de 'buscarUsuarioPorEmail'
    this.usuarioService.login(usuarioDTO).subscribe({
      next: (usuario: Usuario) => {
        console.log('Usuário logado:', usuario);
        if (usuario.idUsuario) {
          localStorage.setItem('idUsuario', usuario.idUsuario.toString()); // Armazenando o idUsuario no localStorage
          alert('Login realizado com sucesso!');
          this.router.navigate(['/conta']);
        } else {
          alert('Erro: idUsuario não encontrado na resposta');
        }
      },
      error: (err) => {
        console.error('Erro ao realizar login', err);
        alert('E-mail ou senha incorretos.');
      },
    });
  }
}
