import React, { useState } from "react";
import { Form, Row, Col, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import style from "./Step2FormCv.module.css"
import countries from "countries-list";
import Button from 'react-bootstrap/Button';
import ButtonGeneral from "../Button/ButtonGeneral";


function Step2FormCv({ formacion, setFormacion, handlerChange, previousStep, nextStep }) {
  
  const [validated, setValidated] = useState();

  const handleNextStep = (event) => {
   
    if (event.currentTarget.checkValidity() === true) {
      setValidated(true);
      if(validated) nextStep();
      return;
    }
  }

  const countriesNames = Object.values(countries.countries).map(
    (country) => country
);
  
  
  return (

    <div className={style.mainContainer}>
      <h2 style={{ 'margin': '30px' }}>Información Académica</h2>
      <Form className={style.Form} validated>


      <Row className="mb-3">
      
          <FormGroup as={Col} md="6">
            <FormLabel>Título / Carrera</FormLabel>
            <Form.Control 
              name='titulo'
              placeholder="titulo"
              value={formacion.titulo}
              onChange={(event) => handlerChange(event, formacion, setFormacion)}
              type="text"
              required/>
              <Form.Control.Feedback type="invalid">
                Rellena este campo.
              </Form.Control.Feedback>
          </FormGroup>
       
       
          <FormGroup as={Col} md="6" >
            <FormLabel>País</FormLabel>
            <FormSelect
              name='pais'
              value={formacion.pais}
              onChange={(event) => handlerChange(event, formacion, setFormacion)}
              required>
                <option disabled></option>
               {countriesNames.map((count) => <option id={count.emoji} value={count.name}>{count.name}</option>)}
            </FormSelect>
            <Form.Control.Feedback type="invalid">
              Seleciona una opcion.
            </Form.Control.Feedback>
          </FormGroup>
       
      </Row>


      <Row className="mb-3 ">
       
          <FormGroup as={Col} md="6" className="mb-3 ">
            <FormLabel >Tipo de estudio</FormLabel>
            <FormSelect name='tipo_estudio'
              value={formacion.tipo_estudio}
              onChange={(event) => handlerChange(event, formacion, setFormacion)}
              required>
              <option disabled ></option>
              <option value="Tecnico">Tecnico</option>
              <option value="Tecnologico">Tecnologico</option>
              <option value="Profesional">Profesional</option>
              <option value="Master">Master</option>
              <option value="Doctorado">Doctorado</option>
              <option value="Otro">Otro</option>

            </FormSelect>
            <Form.Control.Feedback type="invalid">
              Seleciona una opcion.
            </Form.Control.Feedback>
          </FormGroup>



          <FormGroup as={Col} md="6" className="mb-3 ">
            <FormLabel >Area de estudio</FormLabel>
            <Form.Control
              name='area_estudio'
              placeholder="area de estudio"
              value={formacion.area_estudio}
              onChange={(event) => handlerChange(event, formacion, setFormacion)}
              type="text"
              required />
            <Form.Control.Feedback type="invalid">
              Rellena este campo.
            </Form.Control.Feedback>
          </FormGroup>
       
      </Row>


      <Row className="mb-3 ">
        
          <FormGroup as={Col} md="6" className="mb-3 ">
            <FormLabel>Institución</FormLabel>
            <Form.Control
              name='institucion'
              placeholder="Nombre de la institucion"
              value={formacion.institucion}
              type="text"
              onChange={(event) => handlerChange(event, formacion, setFormacion)}
              required />
            <Form.Control.Feedback type="invalid">
              Rellena este campo.
            </Form.Control.Feedback>
          </FormGroup>
          


        
          <FormGroup as={Col} md="6" className="mb-3 ">
            <FormLabel >Estado</FormLabel>
            <FormSelect
              name='estado'
              value={formacion.estado}
              onChange={(event) => handlerChange(event, formacion, setFormacion)}
              required>
              <option disabled ></option>
              <option value="cursando">En curso</option>
              <option value="graduado">Graduado</option>
              <option value="abandonado">Abandonado</option>
            </FormSelect>
            <Form.Control.Feedback type="invalid">
              Selecciona una opcion.
            </Form.Control.Feedback>
          </FormGroup>

        </Row>

        <Row className="mb-3 ">

          <FormGroup as={Col} md="6" className="mb-3 ">
            <FormLabel>Fecha de inicio</FormLabel>
            <Form.Control
              name='fecha_inicio'
              value={formacion.fecha_inicio}
              type="date"
              onChange={(event) => handlerChange(event, formacion, setFormacion)}
              required />
            <Form.Control.Feedback type="invalid">
              Rellena este campo.
            </Form.Control.Feedback>
          </FormGroup>




          <FormGroup as={Col} md="6" className="mb-3 ">
            <FormLabel>Fecha de Finalización</FormLabel>
            <Form.Control
              name='fecha_fin'
              value={formacion.fecha_fin}
              type="date"
              onChange={(event) => handlerChange(event, formacion, setFormacion)}
              required /><Form.Control.Feedback type="invalid">
              Rellena este campo.
            </Form.Control.Feedback>
          </FormGroup>


          

      </Row>

      </Form>


      <FormGroup as={Col} md="6" className="mb-3 ">
        <ButtonGeneral
          textButton="Anterior"
          handlerClick={previousStep}
        />
        <ButtonGeneral
          textButton="Siguiente"
          handlerClick={handleNextStep}
        />
      </FormGroup>
     

      
      

    </div>
  );
}


export default Step2FormCv