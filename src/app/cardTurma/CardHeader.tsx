export function CardHeader({
  title,
  description,
  nomeProfessor,
  image,
  image_fundo,
}: {
  title: string;
  description: string;
  nomeProfessor: string;
  image: string;
  image_fundo: string;
}) {
  return (
    <div
      className="card-header"
      style={{ backgroundImage: `url(${image_fundo})` }}
    >
      <div className="card-header-title">
        <h2 style={{ display: "flex" }}>
          <div className="card-header-title-link">
            <div className="card-header-title-title dotted">{title}</div>
            <div className="card-header-title-description">{description}</div>
          </div>
          <div className="card-header-title-icon">
            <svg focusable="false" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </div>
        </h2>
        <div className="card-header-title-name">
          <div className="card-header-title--name-nome dotted">
            {nomeProfessor}
          </div>
          <div className="card-header-title-name-nomeAux"></div>
        </div>
      </div>
      <div className="card-header-btn"></div>
      {image ? (
        <img className="card-header-img" src={image} alt="Imagem da turma" />
      ) : null}
    </div>
  );
}
