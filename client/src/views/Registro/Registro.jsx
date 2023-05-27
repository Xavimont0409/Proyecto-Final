import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonGeneral from "../../components/Button/ButtonGeneral";
import NavBarLog from "../../components/NavBarLog/NavBarLog";
import Loading from "../../components/Loading/Loading";
import style from "./Registro.module.css";

const Registro = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.container}>
          <h1>Selecciona tu perfil</h1>
          <div className={style.cardsContainer}>
            <div className={style.cardContainer1}>
              <ButtonGeneral
                textButton="Soy empresa"
                handlerClick={() => navigate("/newRegistroCompany")}
              ></ButtonGeneral>
              <p className={style.parrafo}>
                Encuentra los mejores candidatos para tu empresa
              </p>
            </div>
            <div className={style.cardContainer2}>
              <ButtonGeneral
                textButton="Soy aplicante"
                handlerClick={() => navigate("/newRegistroApplicant")}
              ></ButtonGeneral>
              <p className={style.parrafo}>
                Filtra las miles de vacantes que tenemos disponibles segun tus
                preferencias
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;
