import React, { useState } from "react";
import { Form, FormLabel, FormSelect, FormGroup, Row, Col, FormCheck, } from "react-bootstrap";
import style from "./Step3FormCv.module.css"
import countries from "countries-list";
import ButtonGeneral from "../Button/ButtonGeneral";
import validateFormInputs from "../../views/FormVacante/validation";

function Step3FormCv({ infoPersonal, setInfoPersonal, formacion,setFormacion, experiencia, setExperiencia, handlerChange, previousStep }) {

    const fecharequired = experiencia.actualmente;
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!validateFormInputs(experiencia)){
            alert('Completa todos los campos')
          }else{
            setValidated(true);
          
        }
    };

    const countriesNames = Object.values(countries.countries).map(
        (country) => country
    );


    return (

        <div className={style.mainContainer}>
            <h2 style={{ 'margin': '30px' }}>Experiencia Profesional</h2>
            <Form className={style.Form} validated={!validated}>

                <Row className="mb-3">
                    <FormGroup as={Col} md='6' className="mb-3">
                        <FormLabel>Empresa</FormLabel>
                        <Form.Control
                            name='empresa'
                            value={experiencia.empresa}
                            type="text"
                            onChange={(event) => handlerChange(event, experiencia, setExperiencia)}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Rellena este campo.
                        </Form.Control.Feedback>
                    </FormGroup>

                    <FormGroup as={Col} md='6' className="mb-3">
                        <FormLabel>Puesto</FormLabel>
                        <Form.Control
                            name='puesto'
                            placeholder="Nombre del cargo"
                            value={experiencia.puesto}
                            type="text"
                            onChange={(event) => handlerChange(event, experiencia, setExperiencia)}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Rellena este campo.
                        </Form.Control.Feedback>
                    </FormGroup>

                </Row>



                <Row className="mb-3">
                    <FormGroup as={Col} md="6" className="mb-3">
                        <FormLabel className="me-2">Experiencia</FormLabel>
                        <FormSelect name='nivel_experiencia'
                            value={experiencia.nivel_experiencia}
                            onChange={(event) => handlerChange(event, experiencia, setExperiencia)}
                            required>
                            <option disabled ></option>
                            <option value="Sin Experiencia">Sin Experiencia</option>
                            <option value="Trainee">Trainee</option>
                            <option value="Junior">Junior</option>
                            <option value="Semi-senior">Semi-senior</option>
                            <option value="Senior">Senior</option>
                        </FormSelect>
                        <Form.Control.Feedback type="invalid">
                            Selecciona una opcion.
                        </Form.Control.Feedback>
                    </FormGroup>



                    <FormGroup as={Col} md='6' className="mb-3">
                        <FormLabel>Ubicación</FormLabel>
                        <FormSelect
                            name='ubicacion'
                            value={experiencia.ubicacion}
                            onChange={(event) => handlerChange(event, experiencia, setExperiencia)}
                            required>
                            <option disabled></option>
                            {countriesNames.map((count) => <option id={count.emoji} value={count.name}>{count.name}</option>)}
                        </FormSelect>

                        <Form.Control.Feedback type="invalid">
                            Seleciona una opcion.
                        </Form.Control.Feedback>
                    </FormGroup>

                </Row>

                <Row className="mb-3">

                    <FormGroup as={Col} md="6" className="mb-3 ">
                        <FormLabel>Fecha de inicio</FormLabel>
                        <Form.Control name='fecha_inicio'
                            value={experiencia.fecha_inicio}
                            type="date"
                            onChange={(event) => handlerChange(event, experiencia, setExperiencia)}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Rellena este campo.
                        </Form.Control.Feedback>
                    </FormGroup>

                    <FormGroup as={Col} md="6" className="mb-3 ">
                        <FormLabel>Fecha de Finalización</FormLabel>
                        <Form.Control name='fecha_fin'
                            value={experiencia.fecha_fin}
                            type="date"
                            onChange={(event) => handlerChange(event, experiencia, setExperiencia)}
                            required={!fecharequired}  />
                        <Form.Control.Feedback type="invalid">
                            Rellena este campo.
                        </Form.Control.Feedback>
                    </FormGroup>

                </Row>

                <FormGroup>
                    <FormLabel>Trabajo actualmente en esta empresa</FormLabel>
                    <FormCheck name='actualmente'
                        onChange={(event) => setExperiencia({ ...experiencia, actualmente: event.target.checked })}
                    />
                </FormGroup>
            </Form>


            <FormGroup as={Col} md="6" className="mb-3 ">
                <ButtonGeneral
                    textButton="Anterior"
                    handlerClick={previousStep}
                />
                <ButtonGeneral
                    textButton="Cargar CV"
                    handlerClick={handleSubmit}
                />
            </FormGroup>

        </div>
    );
}

export default Step3FormCv;