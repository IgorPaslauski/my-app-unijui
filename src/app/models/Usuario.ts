export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string; // Em produção, armazene como hash
  tipo: "estudante" | "professor";
  link_img: string;
  criado_em: Date;
}
