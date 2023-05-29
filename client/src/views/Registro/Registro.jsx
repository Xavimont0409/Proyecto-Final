import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonGeneral from "../../components/Button/ButtonGeneral";
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
          <h1 className={style.title}>Selecciona tu perfil</h1>
          <div className={style.cardsContainer}>
            <div className={style.cardContainer1}>
              <ButtonGeneral
                textButton="Soy empresa"
                handlerClick={() => navigate("/newRegistroCompany")}
              ></ButtonGeneral>
            </div>
            <div className={style.cardContainer2}>
              <ButtonGeneral
                textButton="Soy aplicante"
                handlerClick={() => navigate("/newRegistroApplicant")}
              ></ButtonGeneral>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;
