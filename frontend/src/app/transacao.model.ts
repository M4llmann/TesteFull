export interface TransacaoDTO {
    idTransacao: number;
    idConta: number;
    tipo: string;
    valor: number;
    dataTransacao: string; // ou Date, dependendo de como você está tratando a data
  }
  