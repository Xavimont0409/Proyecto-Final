import style from "./Landing.module.css";
import { Button } from "react-bootstrap";
import video from "../../assets/video/Fondo.mp4";
import MisionVisión from "../../components/MisionVision/MisionVisión";
import NavBar from "../../components/NavBar/NavBar";
import CardsEquipo from "../../components/CardEquipo/CardEquipo";
import { Link } from "react-router-dom";

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
      <div className={style.container}>
        <div className={style.videoDiv}>
          <video loop autoPlay muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className={style.searchDiv}>
          <div className={style.paragraph}>
            <h1 className={style.title}>JobPortalX</h1>
            <p className={style.text}>
              Somos el nuevo portal de trabajo, con mas dinamismo del mercado,
              donde encontrarás las mejores oportunidades laborales
            </p>
          </div>
          <input className={style.input} placeholder="" />
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
    </div>
  );
};

export default Landing;
