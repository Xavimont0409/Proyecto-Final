import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Step1FormCv from "../../components/Step1FormCv/Step1FormCv";
import Step2FormCv from "../../components/Step2FormCv/Step2FormCv";
import Step3FormCv from "../../components/Step3FormCv/Step3FormCv";



function FormCv() {
  const [infoPersonal, setInfoPersonal] = useState({
    descripcion:'',
    telefono:'',
    redes:'',
    foto:''


  });
  const [formacion, setFormacion] = useState({
    titulo:'',
    pais:'',
    tipo_estudio:'',
    area_estudio:'',
    institucion:'',
    estado:'',
    fecha_inicio:'',
    fecha_fin:''

  });
  const [experiencia, setExperiencia] = useState({
    empresa:'',
    puesto:'',
    nivel_experiencia:'',
    ubicacion:'',
    fecha_inicio:'',
    fecha_fin:'',
    actualmente:''

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
        <Form>
            {step === 1 && <><h2>Información personal</h2>
                <Step1FormCv
                    infoPersonal={infoPersonal}
                    setInfoPersonal={setInfoPersonal}
                    handlerChange={handlerChange} />
            </>}

            {step === 2 && <><h2>Formación académica</h2>
                <Step2FormCv
                    formacion={formacion}
                    setFormacion={setFormacion}
                    handlerChange={handlerChange} />
            </>}

            {step === 3 && <><h2>Experiencia Profesional</h2>
                <Step3FormCv
                    experiencia={experiencia}
                    setExperiencia={setExperiencia}
                    handlerChange={handlerChange} />
            </>}


            {step !== 1 && (
                <Button variant="secondary" onClick={previousStep}>
                    Anterior
                </Button>
            )}

            {step !== 3 ? (
                <Button variant="primary" onClick={nextStep}>
                    Siguiente
                </Button>
            ) : (
                <Button variant="primary" onClick={submitForm}>
                    Enviar
                </Button>
            )}
        </Form>
    );
}

export default FormCv;


