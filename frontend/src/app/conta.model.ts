export interface ContaDTO {
  idConta: number;
  nomeTitular: string;
  saldo: number;
  status: boolean;
  dataCriacao: string; // ou Date, caso queira trabalhar com objetos Date
  idUsuario: number;
}
