export class Nav {
  public id: number = 0;
  public nome: string = "";
  public icon: string = "";
  public link: string = "";
  public idPai: number = 0;
  public ordem: number = 0;
  public subNav: Nav[] = [];
}
