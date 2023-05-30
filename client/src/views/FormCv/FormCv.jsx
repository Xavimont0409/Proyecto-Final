import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBarLog/NavBarLog";
import Step1FormCv from "../../components/Step1FormCv/Step1FormCv";
import Step2FormCv from "../../components/Step2FormCv/Step2FormCv";
import style from "./FormCv.module.css";

function FormCv({ setValidateState, setCurrentUserStore2 }) {
  
  
  const currentUser = JSON.parse(localStorage.getItem("currentUser2"));

  const [step, setStep] = useState(1);

  const [cv, setCv] = useState({
    dni: "",
    phone: "",
    address: "",
    photo: "",
    linkedin: "",
    skill: "",
    personal_description: "",
    profession: "",
    country: "",
    educational_institution: "",
    state: "x",
    initial_date: "",
    finish_date: "x",
    ApplicantId: "",
  });

  useEffect(() => {
    if (currentUser) {
      setCv((prevCv) => ({
        ...prevCv,
        phone: currentUser.cellphone,
        ApplicantId: currentUser.id,
      }));
    }
  }, []);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const handlerChange = (event, state, setState) => {
    const property = event.target.name;
    const value = event.target.value;
    setState({ ...state, [property]: value });
  };

  return (
    <div className={style.containerMain}>
      <div className={style.containerFirst}>
       {/* no quitar */}
      </div>
      <div className={style.containerSecond}>
      <NavBar
        setValidateState={setValidateState}
        setCurrentUserStore2={setCurrentUserStore2}
      ></NavBar>

      <div className={style.circleContainer}>
        <div
          className={`${style.circle} ${step === 1 ? style.highlighted : ""}`}
        />
        <div
          className={`${style.circle} ${step === 2 ? style.highlighted : ""}`}
        />
      </div>

      <div
        className={style.container2}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div style={{ flex: 1 }} className={style.step}>
          {step === 1 && (
            <Step1FormCv
              cv={cv}
              setCv={setCv}
              handlerChange={handlerChange}
              currentUser={currentUser}
              nextStep={nextStep}
            />
          )}

          {step === 2 && (
            <Step2FormCv
              cv={cv}
              setCv={setCv}
              handlerChange={handlerChange}
              previousStep={previousStep}
              nextStep={nextStep}
            />
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default FormCv;
