// models/Inscricao.ts
import { Usuario } from "./Usuario";
import { Curso } from "./Curso";

export interface Inscricao {
  id: number;
  usuario_id: number; // Referencia um Usuario
  curso_id: number; // Referencia um Curso
  criado_em: Date;
  usuario?: Usuario; // Informações do usuário
  curso?: Curso; // Informações do curso
}
