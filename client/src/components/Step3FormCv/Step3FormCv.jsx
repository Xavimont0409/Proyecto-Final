import React, { useState } from "react";
import { Form, FormLabel, FormSelect, FormGroup, Row, Col, FormCheck, } from "react-bootstrap";
import style from "./Step3FormCv.module.css"
import Button from 'react-bootstrap/Button';

function Step3FormCv({ experiencia, setExperiencia, handlerChange, previousStep }) {
    
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      const formCheck = event.currentTarget;
      if (formCheck.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      }else{
        setValidated(true);
      
       
      }
    };
    
    
    return (

        <div className={style.maincontainer3}>

            <Form noValidate className={style.Form} onSubmit={handleSubmit}>
              
                <Row className="mb-3">
                    <FormGroup as={Col} md='6' className="mb-3">
                        <FormLabel>Empresa</FormLabel>
                        <Form.Control
                            name='empresa'
                            value={experiencia.empresa}
                            type="text"
                            onChange={(event) => handlerChange(event, experiencia, setExperiencia)}
                            required />
                    </FormGroup>

                    <FormGroup as={Col} md='6' className="mb-3">
                        <FormLabel>Puesto</FormLabel>
                        <Form.Control 
                            name='puesto'
                            value={experiencia.puesto}
                            type="text"
                            onChange={(event) => handlerChange(event, experiencia, setExperiencia)}
                            required />
                    </FormGroup>

                </Row>



                <Row className="mb-3">
                    <FormGroup as={Col} md="6" className="mb-5 ">
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
                    </FormGroup>



                    <FormGroup as={Col} md='6' className="mb-5">
                        <FormLabel>Ubicación</FormLabel>
                        <Form.Control name='ubicacion' value={experiencia.ubicacion}
                            type="text"
                            onChange={(event) => handlerChange(event, experiencia, setExperiencia)}
                            required />
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
                    </FormGroup>

                    <FormGroup as={Col} md="6" className="mb-3 ">
                        <FormLabel>Fecha de Finalización</FormLabel>
                        <Form.Control name='fecha_fin'
                            value={experiencia.fecha_fin}
                            type="date"
                            onChange={(event) => handlerChange(event, experiencia, setExperiencia)}
                            required />
                    </FormGroup>

                </Row>

                <FormGroup>
                    <FormLabel>Trabajo actualmente en esta empresa</FormLabel>
                    <FormCheck name='actualmente'
                        onChange={(event) => setExperiencia({ ...experiencia, actualmente: event.target.checked })}
                    />
                </FormGroup>
            </Form>


            <FormGroup as={Col} md="6" className="mb-3">
                <Button style={{ margin: '20px' }} onClick={() => previousStep()} >Anterior </Button>
                <Button style={{ margin: '20px' }} type='submit' >Cargar CV</Button>
            </FormGroup>

        </div>
    );
}

export default Step3FormCv