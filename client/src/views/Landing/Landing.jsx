import style from "./Landing.module.css";
import MisionVisión from "../../components/MisionVision/MisionVisión";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import cartel from '../../assets/img/cartel.jpg';
import celular from '../../assets/img/celular.jpg';

const Landing = ({
  setValidateState,
  setCurrentUserStore2,
}) => {
  const user = JSON.parse(localStorage.getItem("currentUser2"))


  return (
    <div className={style.landingDiv}>
      <NavBar
        setValidateState={setValidateState}
        setCurrentUserStore2={setCurrentUserStore2}
      />
    <div className={style.containerFirst}>
        <div className={style.containerBienvenida}>
          <h1 className={style.title}>Bienvenido a JobPortalX, el sinónimo de trabajo Perfecto</h1>
          <p className={style.parrafo}> Somos el nuevo portal de trabajo, con más dinamismo del mercado,
              donde encontrarás las mejores oportunidades laborales</p>
        </div>
        <div className={style.containerLogo}>
          <img src={cartel} alt="Logo de empresa" className={style.imageFirst}/>
        </div>
    </div>

    <div className={style.containerSecond}>
        <div className={style.containerLogo2}>
            <img src={celular} alt="Foto de celular" className={style.imageSecond}/>
        </div>
        <div className={style.containerText}>
            <h2 className={style.titleSecond}>Nuestra misión y visión reflejan lo más profundo de JobPortalX</h2>
            <MisionVisión />
        </div>
    </div>

    <div className={style.containerThird}>
        <div></div>
        <div></div>
    </div>

    <div></div>
      
    </div>
  );
};

/* <div className={style.container }>
        <div className={style.searchDiv}>
          <div className={style.paragraph}>
            <h1 className={style.title}>JobPortalX</h1>
            <p className={style.text}>
              Somos el nuevo portal de trabajo, con mas dinamismo del mercado,
              donde encontrarás las mejores oportunidades laborales
            </p>
          </div>
          <div className={style.buttonDiv}>
            <Link to="/empleos">
              <Button variant="outline-secondary" className="ms-auto">
                Busca Tu Trabajo
              </Button>
            </Link>
          </div>
          <div className={style.buttonDiv}>
             {user?.profile === "Admin" ? (
                            <Link to={process.env.ADMIN_PANEL} target='_blank'>
                                <Button variant="outline-secondary" className="ms-auto">Dashboard Admin</Button>
                            </Link>
                        ): (<></>)} 
          </div>
        </div>
      </div> 
      
      <MisionVisión />
      <CardsEquipo />
      
      */

export default Landing;
