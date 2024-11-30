package com.Backend.AppBanco.service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Backend.AppBanco.entity.ContaEntity;
import com.Backend.AppBanco.entity.TransacaoEntity;
import com.Backend.AppBanco.repository.ContaRepository;
import com.Backend.AppBanco.repository.TransacaoRepository;

@Service
public class TransacaoService {

    @Autowired
    private TransacaoRepository transacaoRepository;
    @Autowired
    private ContaRepository contaRepository;

    public TransacaoEntity criarTransacao(Integer idConta, String tipo, BigDecimal valor) {
        if (valor.compareTo(BigDecimal.ZERO) <= 0) {
            throw new RuntimeException("O valor da transação deve ser positivo");
        }
    
        // Buscar a conta existente pelo ID
        ContaEntity conta = contaRepository.findById(idConta)
                .orElseThrow(() -> new RuntimeException("Conta não encontrada"));
    
        // Criar a transação com a conta encontrada
        TransacaoEntity transacao = new TransacaoEntity(tipo, valor, conta);
        return transacaoRepository.save(transacao);
    }
    

    public List<TransacaoEntity> obterExtrato(Integer idConta) {
        return transacaoRepository.findByContaIdConta(idConta);
    }

    public void registrarTransacao(ContaEntity conta, String tipo, BigDecimal valor) {
    TransacaoEntity transacao = new TransacaoEntity();
    transacao.setConta(conta);
    transacao.setTipo(tipo); // Ex: "DEPÓSITO", "SAQUE"
    transacao.setValor(valor);
    transacao.setDataTransacao(LocalDateTime.now());
    transacaoRepository.save(transacao);
}
}
