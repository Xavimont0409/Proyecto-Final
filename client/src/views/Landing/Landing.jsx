import style from "./Landing.module.css";
import MisionVisión from "../../components/MisionVision/MisionVisión";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import cartel from "../../assets/img/cartel.jpg";
import celular from "../../assets/img/celular.jpg";
import texto from "../../assets/img/texto.jpg";
import freelancer3 from "../../assets/img/freelancer3.png";
import { Button } from "react-bootstrap";
import icono from "../../assets/img/icono.png";

const Landing = ({ setValidateState, setCurrentUserStore2 }) => {
  // eslint-disable-next-line
  const user = JSON.parse(localStorage.getItem("currentUser2"));

  return (
    <div className={style.landingDiv}>
      <NavBar
        setValidateState={setValidateState}
        setCurrentUserStore2={setCurrentUserStore2}
      />
      <div className={style.containerFirst}>
        <div className={style.containerBienvenida}>
          <h1 className={style.title}>
            Bienvenido a JobPortalX, el sinónimo de trabajo Perfecto
          </h1>
          <p className={style.parrafo}>
            {" "}
            Somos el nuevo portal de trabajo, con más dinamismo del mercado,
            donde encontrarás las mejores oportunidades laborales
          </p>
        </div>
        <div className={style.containerLogo}>
          <img
            src={cartel}
            alt="Logo de empresa"
            className={style.imageFirst}
          />
        </div>
      </div>

      <div className={style.containerSecond}>
        <div className={style.containerLogo2}>
          <img
            src={celular}
            alt="Foto de celular"
            className={style.imageSecond}
          />
        </div>
        <div className={style.containerText}>
          <h2 className={style.titleSecond}>
            Nuestra misión y visión reflejan lo más profundo de JobPortalX
          </h2>
          <MisionVisión />
        </div>
      </div>

      <div className={style.containerThird}>
        <div className={style.containerText3}>
          <h1 className={style.titleThird}>
            El talento que te pertenece nosotros lo cuidamos
          </h1>
          <h3 className={style.parrafo2}>
            Únetenos y navega entre las mejores oportunidades laborales{" "}
          </h3>
          <Link to="/empleos">
            <Button variant="outline-secondary" className="ms-auto">
              Aplicá ahora
            </Button>
          </Link>
        </div>
        <div className={style.containerLogo3}>
          <img
            src={freelancer3}
            alt="Foto de landing"
            className={style.imageThird}
          />
        </div>
      </div>
      <div className={style.containerOportunidades}>
        <h2 className={style.boxOportunidades}>Mejores contratos Laborales</h2>
        <h2 className={style.boxOportunidades}>Salarios Internacionales</h2>
        <h2 className={style.boxOportunidades}>
          Comunidad de Jobers que apoyará tu talento
        </h2>
        <h2 className={style.boxOportunidades}>
          Fortalecé y desarrolla tus idiomas
        </h2>
      </div>

      <div className={style.containerFourth}>
        <div className={style.containerLogo4}>
          <img src={texto} alt="Foto de landing" className={style.imageFour} />
        </div>
        <div className={style.containerText4}>
          <h1 className={style.titleFourth}>
            En JobPortalX, la responsabilidad sociales es tomada muy en serio{" "}
          </h1>
          <p className={style.parrafo3}>
            Es por eso que nos gustaría mencionar algunos puntos que nos motivan
            día tras día en nuestra mejora continua
          </p>
          <ul className={style.containerLi}>
            <li>
              <img src={icono} alt="logo de lista" className={style.icono} />
              <span className={style.textoIcono} >
                Tenemos un equipo de administradores controlando constantemente publiciones de
                vacantes irregulares
              </span>
            </li>
            <li>
              <img src={icono} alt="logo de lista" className={style.icono} />
              <span className={style.textoIcono} >Creemos y apoyamos la colaboración Inter-empresarial</span>
            </li>
            <li>
              <img src={icono} alt="logo de lista" className={style.icono} />
              <span className={style.textoIcono} >
                Alentamos y controlamos nuestra experiencia de usuario para una mejor fluidez en nuestro portal
              </span>
            </li>
            <li>
              <img src={icono} alt="logo de lista" className={style.icono} />
              <span className={style.textoIcono} >
                Invertimos en una comunidad creciente, cimentada en el respeto y
                la empatía
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Landing;
