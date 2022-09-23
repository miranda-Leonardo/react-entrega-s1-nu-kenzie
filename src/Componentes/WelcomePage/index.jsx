import './style.css'

export const WelcomePage = ({setIsWelcomePage}) => {
  return (
    <>
      <div>
        <h1 className="title-1">
          <span>Nu</span> Kenzie
        </h1>
        <p className="title-1">Centralize o controle das suas finaças</p>
        <p className="headline">de forma rápida e segura</p>
        <div className="containerButton">
          <button type="button" className="buttonOne" onClick={() => setIsWelcomePage(false)}>
            Iniciar
          </button>
        </div>
      </div>
      <img
        src="./Pictures/apresentation.png"
        alt="Foto de apresentação da página web."
      />
    </>
  );
};
