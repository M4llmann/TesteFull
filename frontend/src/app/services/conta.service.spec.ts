import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Para mockar as requisições HTTP
import { ContaService } from './conta.service';  // Corrigindo a importação

describe('ContaService', () => {
  let service: ContaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Adicionando módulo de teste de HTTP
      providers: [ContaService],  // Fornecendo o serviço correto
    });
    service = TestBed.inject(ContaService);  // Injetando o serviço corretamente
  });

  it('should be created', () => {
    expect(service).toBeTruthy();  // Verifica se o serviço foi criado corretamente
  });
});
