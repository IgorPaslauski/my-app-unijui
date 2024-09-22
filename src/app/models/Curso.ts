// models/Curso.ts
import { Usuario } from "./Usuario";

export interface Curso {
  id: number;
  titulo: string;
  descricao?: string;
  professor_id: number; // Referencia um Usuario
  criado_em: Date;
  professor?: Usuario; // Informações do professor
}
