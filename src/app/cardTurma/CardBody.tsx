import { Tarefa } from "../models/Tarefa";

export function CardBody({ tarefas }: { tarefas: Tarefa[] }) {
  return (
    <div className="card-body dotted">
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <h3>{tarefa.titulo}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
