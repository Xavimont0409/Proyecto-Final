import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBarLog"
import Step1FormCv from "../../components/Step1FormCv/Step1FormCv";
import Step2FormCv from "../../components/Step2FormCv/Step2FormCv";
import Step3FormCv from "../../components/Step3FormCv/Step3FormCv";



function FormCv() {
  
  const [infoPersonal, setInfoPersonal] = useState({
    dni:'',
    telefono:'',
    linkedin:'',
    foto:'',
    skills:'',
    descripcion:''
  });
  const [formacion, setFormacion] = useState({
    titulo:'',
    pais:'',            //! lo deje input pero debe ser Select
    tipo_estudio:'',    //! Select
    area_estudio:'',    //! lo deje input pero deberia ser Select (despues lo podriamos organizar)
    institucion:'',     //! Lo deje input, pero podriamos considerar Select 
    estado:'',          //! Select
    fecha_inicio:'',    
    fecha_fin:''

  });
  const [experiencia, setExperiencia] = useState({
    empresa:'',
    puesto:'',
    nivel_experiencia:'', //! select
    ubicacion:'',         //!   input pero debe ser select
    fecha_inicio:'',
    fecha_fin:'',
    actualmente:''        //! inputcheck

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

  const submitForm = () => {
   
  };

    return (
      <div>

       
            <NavBar></NavBar>
            {step === 1 && 
            <><Step1FormCv
            infoPersonal={infoPersonal}
            setInfoPersonal={setInfoPersonal}
            handlerChange={handlerChange}
            nextStep={nextStep} /></>}

            {step === 2 && <>
                <Step2FormCv
                    formacion={formacion}
                    setFormacion={setFormacion}
                    handlerChange={handlerChange}
                    previousStep={previousStep}
                    nextStep={nextStep}
                     />
            </>}

            {step === 3 && <>
                <Step3FormCv
                    experiencia={experiencia}
                    setExperiencia={setExperiencia}
                    handlerChange={handlerChange}
                    previousStep={previousStep} />
            </>}

      </div>
      
    );
}

export default FormCv;


