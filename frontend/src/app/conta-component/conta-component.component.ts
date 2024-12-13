import { Component, OnInit } from '@angular/core';
import { ContaService } from '../services/conta.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContaDTO } from '../conta.model';
import { TransacaoDTO } from '../transacao.model';
import { Router } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from '../auth.interceptor';

@Component({
  standalone: true,
  selector: 'app-conta',
  templateUrl: './conta-component.component.html',
  styleUrls: ['./conta-component.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule,
  ],
  providers: [
    ContaService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class ContaComponent implements OnInit {
  contas: ContaDTO[] = [];
  contaSelecionada: ContaDTO | null = null;
  nomeTitular: string = '';
  valor: number = 0;
  mostrarExtrato: boolean = false;
  extrato: TransacaoDTO[] = []; // Tipagem correta para o extrato
  erro: boolean = false;

  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
    // Verifica se o token de autenticação está presente
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }

    this.listarContas();
  }

  listarContas(): void {
    const idUsuario = localStorage.getItem('idUsuario');
    if (!idUsuario) {
      alert('Usuário não autenticado! Faça login para listar as contas.');
      this.router.navigate(['']);
      return;
    }

    this.contaService.listarContasPorUsuario().subscribe({
      next: (dados: ContaDTO | ContaDTO[]) => {
        console.log('Contas retornadas pelo backend:', dados);
        
        if (Array.isArray(dados)) {
          this.contas = dados;
        } else {
          this.contas = [dados];
        }

        this.erro = false;
      },
      error: (err) => {
        console.error('Erro ao listar contas:', err);
        this.erro = true;
        alert('Crie uma conta!');
      },
    });
  }

  selecionarConta(conta: ContaDTO): void {
    this.contaSelecionada = conta;
    this.mostrarExtrato = false;
  }

  criarConta(): void {
    const idUsuario = localStorage.getItem('idUsuario');
    if (!idUsuario) {
      alert('Usuário não autenticado!');
      return;
    }

    if (!this.nomeTitular.trim()) {
      alert('Informe o nome do titular para criar a conta.');
      return;
    }

    this.contaService.criarConta({ nomeTitular: this.nomeTitular }, +idUsuario).subscribe({
      next: (novaConta: ContaDTO) => {
        console.log('Resposta da API (novaConta):', novaConta);
        alert('Conta criada com sucesso!');
        if (novaConta) {
          this.contas.push(novaConta);  // Adiciona a nova conta à lista
          this.selecionarConta(novaConta);  // Seleciona a conta automaticamente
        } else {
          console.error('Erro: A resposta da API não contém uma conta válida.');
        }
      },
      error: (err) => {
        console.error('Erro ao criar conta:', err);
        alert('Erro ao criar a conta.');
      }
    });
  }

  realizarDeposito(): void {
    if (!this.contaSelecionada || this.valor <= 0) {
      alert('Informe um valor válido para depósito.');
      return;
    }

    this.contaService.realizarDeposito(this.contaSelecionada.idConta, this.valor).subscribe({
      next: (contaAtualizada) => {
        alert('Depósito realizado com sucesso!');
        this.contaSelecionada = contaAtualizada;
        this.valor = 0;
      },
      error: (err) => {
        console.error('Erro ao realizar depósito:', err);
        alert('Erro ao realizar depósito. Tente novamente.');
      },
    });
  }

  realizarSaque(): void {
    if (!this.contaSelecionada || this.valor <= 0) {
      alert('Informe um valor válido para saque.');
      return;
    }

    this.contaService.realizarSaque(this.contaSelecionada.idConta, this.valor).subscribe({
      next: (contaAtualizada) => {
        alert('Saque realizado com sucesso!');
        this.contaSelecionada = contaAtualizada;
        this.valor = 0;
      },
      error: (err) => {
        console.error('Erro ao realizar saque:', err);
        alert('Erro ao realizar saque, saldo insuficiente. Tente novamente.');
      },
    });
  }


  carregarExtrato(): void {
    if (!this.contaSelecionada) {
      alert('Selecione uma conta para visualizar o extrato.');
      return;
    }

    this.contaService.getExtrato(this.contaSelecionada.idConta).subscribe({
      next: (extrato) => {
        this.extrato = extrato;
      },
      error: (err) => {
        console.error('Erro ao carregar extrato:', err);
        alert('Erro ao carregar o extrato.');
      },
    });
  }

  carregarDetalhesConta(): void {
    if (!this.contaSelecionada) {
      return;
    }

    this.contaService.obterDetalhesConta(this.contaSelecionada.idConta).subscribe({
      next: (contaAtualizada) => {
        this.contaSelecionada = contaAtualizada;
      },
      error: (err) => {
        console.error('Erro ao carregar detalhes da conta:', err);
        alert('Erro ao carregar detalhes da conta.');
      },
    });
  }
  sair(): void {
    // Limpar as informações do usuário do localStorage
    localStorage.removeItem('idUsuario');

    // Redirecionar para a página de login
    this.router.navigate(['']);
  }

}
