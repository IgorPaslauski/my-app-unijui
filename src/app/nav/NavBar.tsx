import { Nav } from "../entities/nav";
import { Menu } from "./Menu";

const retornarTurmas = async () => {
  const data = await fetch("http://localhost:8080/aulas");
  const aulas = await data.json();

  return aulas;
};

const converteTurmas = async () => {
  const turmas = await retornarTurmas();
  const navsTurma: Nav[] = turmas.map((turma: any) => {
    return {
      id: 0,
      nome: "",
      link: "",
      idPai: 0,
      ordem: 1,
      icon: "",
      subNav: [],
      TurmaId: turma.id,
    };
  });
  return navsTurma;
};

export async function NavBar() {
  const navsTurma: Nav[] = await converteTurmas();

  const navs: Nav[] = [
    {
      id: 1,
      nome: "Inicio",
      link: "",
      idPai: 0,
      ordem: 1,
      icon: "home",
      subNav: [],
      TurmaId: 0,
    },
    {
      id: 2,
      nome: "Agenda",
      link: "",
      idPai: 0,
      ordem: 2,
      icon: "agenda",
      subNav: [],
      TurmaId: 0,
    },
    {
      id: 0,
      nome: "separador",
      link: "",
      idPai: 0,
      ordem: 0,
      icon: "separador",
      subNav: [],
      TurmaId: 0,
    },
    {
      id: 3,
      nome: "Minhas Inscrições",
      link: "",
      idPai: 0,
      ordem: 3,
      TurmaId: 0,
      icon: "minhasInscricoes",
      subNav: [
        {
          id: 4,
          nome: "Pendentes",
          link: "",
          idPai: 0,
          ordem: 4,
          icon: "pendentes",
          subNav: [],
          TurmaId: 0,
        },
        ...navsTurma,
      ],
    },
    {
      id: 0,
      nome: "separador",
      link: "",
      idPai: 0,
      ordem: 0,
      icon: "separador",
      subNav: [],
      TurmaId: 0,
    },
    {
      id: 6,
      nome: "Turmas Arquivadas",
      link: "",
      idPai: 0,
      ordem: 6,
      icon: "turmasArquivadas",
      subNav: [],
      TurmaId: 0,
    },
    {
      id: 7,
      nome: "Configurações",
      link: "",
      idPai: 0,
      ordem: 7,
      icon: "configuracoes",
      subNav: [],
      TurmaId: 0,
    },
  ];

  return (
    <nav className="nav-bar">
      <ul>
        {navs.map((nv: Nav) => (
          <Menu key={nv.id} nav={nv} />
        ))}
      </ul>
    </nav>
  );
}
