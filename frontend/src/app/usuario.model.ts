export interface Usuario {
  idUsuario: number;
  email: string;
  senha: string;
  contas: any[]; // Aqui você pode ajustar para o tipo correto de "contas", caso tenha um tipo mais específico
}
