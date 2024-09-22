import { Aula } from "../models/Aula";
import { Usuario } from "../models/Usuario";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";

const retornarDadosUsuario = async (id: number) => {
  if (id === undefined) return {};
  const data = await fetch(`http://localhost:8080/usuario/${id}`);
  const usuario = await data.json();
  return usuario;
};

const retornarTurma = async (codigoAula: number) => {
  if (codigoAula === undefined) return {};
  const data = await fetch(`http://localhost:8080/aula/${codigoAula}`);
  const turma = await data.json();
  return turma;
};

export async function CardTurma(codigoAula: number) {
  const aula = (await retornarTurma(codigoAula)) as Aula;

  aula.professor = (await retornarDadosUsuario(aula.professor_id)) as Usuario;

  const description = aula.conteudo;
  const title = aula.titulo;
  const nomeProfessor = aula.professor.nome;
  const image = aula.professor.link_img;

  return (
    <div className="card" key={codigoAula}>
      <CardHeader
        title={title}
        description={description}
        nomeProfessor={nomeProfessor}
        image={image}
        image_fundo={aula.link_img_fundo}
      />
      <CardBody />
      <CardFooter title={title} description={description} />
    </div>
  );
}
