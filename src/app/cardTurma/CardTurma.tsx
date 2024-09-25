import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Aula } from "../models/Aula";
import { Usuario } from "../models/Usuario";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { Tarefa } from "../models/Tarefa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const retornarTarefas = async (codigoAula: number) => {
  if (codigoAula === undefined) return {};
  const data = await fetch(`http://localhost:8080/tarefas/${codigoAula}`);
  const tarefas = await data.json();
  return tarefas;
};

export async function CardTurma(codigoAula: number) {
  const aula = (await retornarTurma(codigoAula)) as Aula;

  aula.professor = (await retornarDadosUsuario(aula.professor_id)) as Usuario;
  aula.tarefas = await retornarTarefas(codigoAula);

  const description = aula.conteudo;
  const title = aula.titulo;
  const nomeProfessor = aula.professor.nome;
  const image = aula.professor.link_img;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="card" key={codigoAula}>
          <CardHeader
            title={title}
            description={description}
            nomeProfessor={nomeProfessor}
            image={image}
            image_fundo={aula.link_img_fundo}
          />
          <CardBody tarefas={aula.tarefas ?? []} />
          <CardFooter title={title} description={description} />
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Atividades</DialogTitle>
          <DialogDescription>Atividades</DialogDescription>
        </DialogHeader>

        <div>
          {aula.tarefas?.map((tarefa: Tarefa) => (
            <div key={tarefa.id}>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{tarefa.titulo}</AccordionTrigger>
                  <AccordionContent>{tarefa.descricao}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
