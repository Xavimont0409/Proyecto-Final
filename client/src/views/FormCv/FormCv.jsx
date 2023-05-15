import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBarLog"
import Step1FormCv from "../../components/Step1FormCv/Step1FormCv";
import Step2FormCv from "../../components/Step2FormCv/Step2FormCv";
import Step3FormCv from "../../components/Step3FormCv/Step3FormCv";
import style from "./FormCv.module.css"


function FormCv() {

  const [infoPersonal, setInfoPersonal] = useState({
    dni: '',
    telefono: '',
    linkedin: '',
    foto: '',
    skills: '',
    descripcion: ''
  });
  const [formacion, setFormacion] = useState({
    titulo: '',
    pais: '',
    tipo_estudio: '',
    area_estudio: '',
    institucion: '',
    estado: '',
    fecha_inicio: '',
    fecha_fin: ''

  });
  const [experiencia, setExperiencia] = useState({
    empresa: '',
    puesto: '',
    nivel_experiencia: '',
    ubicacion: '',
    fecha_inicio: '',
    fecha_fin: '',
    actualmente: false

  });
  const [step, setStep] = useState(1);

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
  }


  return (

    <div className={style.container}>

      <NavBar></NavBar>

      <div className={style.container2} style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          {step === 1 &&
            <Step1FormCv
              infoPersonal={infoPersonal}
              setInfoPersonal={setInfoPersonal}
              handlerChange={handlerChange}
              nextStep={nextStep} />
          }

          {step === 2 &&
            <Step2FormCv
              formacion={formacion}
              setFormacion={setFormacion}
              handlerChange={handlerChange}
              previousStep={previousStep}
              nextStep={nextStep} />
          }

          {step === 3 &&
            <Step3FormCv
              infoPersonal={infoPersonal}
              setInfoPersonal={setInfoPersonal}
              formacion={formacion}
              setFormacion={setFormacion}
              experiencia={experiencia}
              setExperiencia={setExperiencia}
              handlerChange={handlerChange}
              previousStep={previousStep}
            />
          }
        </div>

        <div style={{ flex: 0.2, marginRight: '100px', marginLeft: '-300px', marginTop: '-300px' }}>
          <h4>Paso {step} de 3</h4>
        </div>
      </div>

    </div>
  );
}

export default FormCv;


