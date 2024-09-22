import { CardTurma } from "./cardTurma/CardTurma";
import { Aula } from "./models/Aula";

export async function ListaCardTurma() {
  const data = await fetch("http://localhost:8080/aulas");
  const aulas = await data.json();

  // espera 3 segundos para simular o carregamento
  await new Promise((resolve) => setTimeout(resolve, 3000));
  

  const cards = aulas.map((aula: Aula) => CardTurma(aula.id));

  return <div className="card-container">{cards}</div>;
}
