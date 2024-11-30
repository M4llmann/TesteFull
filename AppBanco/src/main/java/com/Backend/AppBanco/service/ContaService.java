package com.Backend.AppBanco.service;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Backend.AppBanco.entity.ContaEntity;
import com.Backend.AppBanco.entity.UsuarioEntity;
import com.Backend.AppBanco.repository.ContaRepository;
import com.Backend.AppBanco.repository.UsuarioRepository;

@Service
public class ContaService {

    @Autowired
    private ContaRepository contaRepository;
    @Autowired
private TransacaoService transacaoService;
    @Autowired
    private UsuarioRepository usuarioRepository;

    // Criar uma nova conta
    public ContaEntity criarConta(String nomeTitular, Integer idUsuario) {
        // Encontra o usuário pelo ID fornecido
        UsuarioEntity usuario = usuarioRepository.findById(idUsuario)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        // Cria a conta, associando o usuário encontrado
        ContaEntity conta = new ContaEntity(nomeTitular, usuario);

        // Salva a conta no repositório
        return contaRepository.save(conta);
    }

    // Buscar conta pelo ID
    public ContaEntity buscarContaPorId(Integer idConta) {
        return contaRepository.findById(idConta)
                .orElseThrow(() -> new RuntimeException("Conta não encontrada"));
    }

    // Listar todas as contas
    public List<ContaEntity> listarContas() {
        return contaRepository.findAll();
    }

    // Consultar saldo da conta
    public BigDecimal consultarSaldo(Integer idConta) {
        ContaEntity conta = buscarContaPorId(idConta);
        return conta.getSaldo();
    }

   // Realizar um depósito em uma conta
   public ContaEntity realizarDeposito(Integer idConta, BigDecimal valor) {
    if (valor.compareTo(BigDecimal.ZERO) <= 0) {
        throw new RuntimeException("O valor do depósito deve ser positivo");
    }

    // Buscar a conta para realizar o depósito
    ContaEntity conta = buscarContaPorId(idConta);
    conta.setSaldo(conta.getSaldo().add(valor));

    // Salvar a conta com o novo saldo
    contaRepository.save(conta);

    // Registrar a transação
    transacaoService.criarTransacao(idConta, "DEPÓSITO", valor);

    return conta;
}

// Realizar um saque de uma conta
public ContaEntity realizarSaque(Integer idConta, BigDecimal valor) {
    if (valor.compareTo(BigDecimal.ZERO) <= 0) {
        throw new RuntimeException("O valor do saque deve ser positivo");
    }

    // Buscar a conta
    ContaEntity conta = buscarContaPorId(idConta);

    // Verificar se o saldo é suficiente para o saque
    if (conta.getSaldo().compareTo(valor) < 0) {
        throw new RuntimeException("Saldo insuficiente");
    }

    // Subtrair o valor do saque do saldo da conta
    conta.setSaldo(conta.getSaldo().subtract(valor));

    // Salvar a conta com o saldo atualizado
    contaRepository.save(conta);

    // Registrar a transação
    transacaoService.criarTransacao(idConta, "SAQUE", valor);

    return conta;
}
}
