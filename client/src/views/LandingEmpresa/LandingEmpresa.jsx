import style from "./LandingEmpresa.module.css";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

const LandingEmpresa = ({ setValidateState, setCurrentUserStore2 }) => {
  
  const userType2 = JSON.parse(localStorage.getItem("currentUser2"));
  // eslint-disable-next-line no-unused-vars
  const validate = JSON.parse(localStorage.getItem("state"));
  const greeting = `Hola, ${userType2?.name}!`;

  return (
    <>
      <div className={style.container}>
        <div className={style.containerComponents}>
          <NavBar
            setValidateState={setValidateState}
            setCurrentUserStore2={setCurrentUserStore2}
          ></NavBar>
        </div>
        <div className={style.containerPrincipal}>
          <div className={style.saludo}>
            <h1 className={style.titulo}>{greeting}</h1>

            <div>
              <h1 className={style.info}>
                Te damos la bienvenida a JobPortalX
              </h1>
              <div className={style.pregunta}>
                <h4>¿Qué quieres hacer?</h4>
              </div>
            </div>
          </div>
          <div className={style.containerButtons}>
            <Link to="/registro-vacante">
              <button className={style.Button}>Crear vacante</button>
            </Link>
            <Link to="/vacantes">
              <button className={style.Button}>Mis vacantes</button>
            </Link>
            <Link to="/perfil-company">
              <button className={style.Button}>Mi perfil</button>
            </Link>
            <Link to="/ratings">
              <button className={style.Button}>Ratings</button>
            </Link>
            <Link to="/profiles">
              <button className={style.Button}>Postulantes</button>
            </Link>
            <Link to="/profiles-company">
              <button className={style.Button}>Empresas</button>
            </Link>
            <Link to='/PlansAndPrices'>
							<button className={style.Button}>
								<span className={style.ButtonIcon}>
								</span>
								<span className={style.ButtonText}>
									Planes y Precios
								</span>
							</button>
						</Link>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default LandingEmpresa;
