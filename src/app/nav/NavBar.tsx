import { Nav } from "../entities/nav";
import { Menu } from "./Menu";

export function NavBar() {
  const navs: Nav[] = [
    {
      id: 1,
      nome: "Inicio",
      link: "",
      idPai: 0,
      ordem: 1,
      icon: "home",
      subNav: [],
    },
    {
      id: 2,
      nome: "Agenda",
      link: "",
      idPai: 0,
      ordem: 2,
      icon: "agenda",
      subNav: [],
    },
    {
      id: 0,
      nome: "separador",
      link: "",
      idPai: 0,
      ordem: 0,
      icon: "separador",
      subNav: [],
    },
    {
      id: 3,
      nome: "Minhas Inscrições",
      link: "",
      idPai: 0,
      ordem: 3,
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
        },
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
    },
    {
      id: 6,
      nome: "Turmas Arquivadas",
      link: "",
      idPai: 0,
      ordem: 6,
      icon: "turmasArquivadas",
      subNav: [],
    },
    {
      id: 7,
      nome: "Configurações",
      link: "",
      idPai: 0,
      ordem: 7,
      icon: "configuracoes",
      subNav: [],
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
