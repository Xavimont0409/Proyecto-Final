import React from "react";
import { Form, Row, Col, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import style from "./Step1FormCv.module.css"
import { useState } from "react";



function Step1FormCv({ infoPersonal, setInfoPersonal, handlerChange, nextStep }) {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formCheck = event.currentTarget;
    if (formCheck.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }else{
      setValidated(true);
      nextStep();
     
    }
  };


  return (

    <div className={style.maincontainer3}>

      <Form   validated={validated}  >

          <Row className="mb-3 ">

            <FormGroup as={Col} md="6" >
              <Form.Label>DNI</Form.Label>
              <Form.Control
                name="dni"
                placeholder="dni"
                value={infoPersonal.dni}
                onChange={(event) => handlerChange(event, infoPersonal, setInfoPersonal)}
                type="number"
                required />
              <Form.Control.Feedback type="invalid">
                Rellena este campo.
              </Form.Control.Feedback>
            </FormGroup>

            <FormGroup as={Col} md="6" >
              <FormLabel>Número de celular</FormLabel>
              <Form.Control
                name="telefono"
                placeholder="Número de celular"
                value={infoPersonal.telefono}
                onChange={(event) => handlerChange(event, infoPersonal, setInfoPersonal)}
                type="number"
                required />
              <Form.Control.Feedback type="invalid">
                Rellena este campo
              </Form.Control.Feedback>
            </FormGroup>

          </Row>



          <Row className="mb-3" >

            <FormGroup  as={Col} md="6" >
              <FormLabel>LinkedIn o sitio web</FormLabel>
              <FormControl
                name="linkedin"
                placeholder="LinkedIn o sitio web"
                value={infoPersonal.linkedin}
                onChange={(event) => handlerChange(event, infoPersonal, setInfoPersonal)}
                type="text"
                required />

              <Form.Control.Feedback type="invalid">
                Rellena este campo
              </Form.Control.Feedback>
            </FormGroup>

            <FormGroup as={Col} md="6" >
              <FormLabel>Foto</FormLabel>
              <Form.Control
                name="foto"
                placeholder="Url de tu Foto"
                value={infoPersonal.foto}
                onChange={(event) => handlerChange(event, infoPersonal, setInfoPersonal)}
                type="text"
                required />
              <Form.Control.Feedback type="invalid">
                Rellena este campo
              </Form.Control.Feedback>
            </FormGroup>

          </Row>


          <FormGroup as={Col} md="12" >
            <FormLabel className="custom-label">Skills</FormLabel>
            <Form.Control
              name="skills"
              placeholder="Escribe los skills que consideres"
              value={infoPersonal.skills}
              onChange={(event) => handlerChange(event, infoPersonal, setInfoPersonal)}
              as="textarea"
              rows={3}
              required />
            <Form.Control.Feedback type="invalid">
              Rellena este campo
            </Form.Control.Feedback>
          </FormGroup>

          <FormGroup as={Col} md="12" >
            <FormLabel>Descripción</FormLabel>
            <Form.Control
              name="descripcion"
              placeholder="Escribe una breve descripcion de tu perfil profesional"
              value={infoPersonal.descripcion}
              onChange={(event) => handlerChange(event, infoPersonal, setInfoPersonal)}
              as="textarea" rows={5}
              required />
            <Form.Control.Feedback type="invalid">
              Rellena este campo
            </Form.Control.Feedback>
          </FormGroup>
      

      </Form>




      <Button style={{ margin: '20px' }} type='submit' onClick={handleSubmit}  >
      Siguiente
      </Button>




    </div>
  );
}

export default Step1FormCv