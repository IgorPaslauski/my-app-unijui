import { Nav } from "../entities/nav";
import { Aula } from "../models/Aula";

const retornarDadosTurma = async (id: number) => {
  const data = await fetch("http://localhost:8080/aula/" + id);
  const aulas = await data.json();

  return aulas;
};

export async function MenuTurma({ nav }: { nav: Nav }) {
  const aula = (await retornarDadosTurma(nav.TurmaId)) as Aula;

  const primeiraLetra = aula.titulo.charAt(0).toUpperCase();

  return (
    <li className="nav-turma">
      <div
        className="nav-turma-cor"
        style={{ backgroundColor: aula.cor_fundo_nav }}
      >
        {primeiraLetra}
      </div>
      <div className="dotted">
        <div className="nav-turma-label dotted">{aula.titulo}</div>
        <div className="nav-turma-description dotted">{aula.conteudo}</div>
      </div>
    </li>
  );
}
