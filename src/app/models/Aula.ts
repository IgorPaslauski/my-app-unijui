import { Curso } from "./Curso";
import { Usuario } from "./Usuario";

export interface Aula {
  id: number;
  curso_id: number; // Referencia um Curso
  titulo: string;
  conteudo: string;
  criado_em: Date;
  professor_id: number;
  link_img_fundo: string;
  curso?: Curso; // Informações do curso
  professor?: Usuario; // Informações do professor
}
