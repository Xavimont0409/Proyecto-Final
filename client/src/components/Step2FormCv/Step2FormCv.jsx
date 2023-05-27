import React, { useState } from "react";
import { Form, Row, Col, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import style from "./Step2FormCv.module.css"
import countries from "countries-list";
import ButtonGeneral from "../Button/ButtonGeneral";
import validation from "./validation";
import { useDispatch } from "react-redux";
import { postCv } from "../../Redux/Actions/actionsFunction/actionsUsers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Step2FormCv({ cv, setCv, handlerChange, previousStep, nextStep }) {
  
  const navigate = useNavigate()
  const dispatch = useDispatch();
 
  const enCurso = cv.state === 'cursando' ? true : false
 
  const [validated, setValidated] = useState();

  const handleNext = (event) => {
    event.preventDefault();
    if (!validation(cv)) {
      Swal.fire({
			title: "Faltan Datos",
			text: "Completa todos los campos",
			icon: "warning",
		});
    } else {
      setValidated(true)
      dispatch(postCv(cv))
      setCv({
        dni: '',
        phone: '',
        address: '',
        photo: '',
        linkedin: '',
        skill: '',
        personal_description: '',
        profession: '',
        country: '',
        educational_institution: '',
        state: '',
        initial_date: '',
        finish_date: '',
        ApplicantId: ''
      })
      navigate('/applicant')
    }
  };


  const countriesNames = Object.values(countries.countries).map((country) => country);
  
  
  return (

    <div className={style.mainContainer}>
      <h2 style={{ 'margin': '30px' }}>Información Académica</h2>
    
      <Form className={style.Form} validated={!validated}>
        <Row className="mb-3">

          <FormGroup as={Col} md="6">
            <FormLabel>Título / Profesión</FormLabel>
            <Form.Control
              name='profession'
              placeholder="Profesion"
              value={cv.profession}
              onChange={(event) => handlerChange(event, cv, setCv)}
              type="text"
              required/>
              <Form.Control.Feedback type="invalid">
                Rellena este campo.
              </Form.Control.Feedback>
          </FormGroup>
       
       
          <FormGroup as={Col} md="6" >
            <FormLabel>País donde estudiaste</FormLabel>
            <FormSelect
              name='country'
              value={cv.country}
              onChange={(event) => handlerChange(event, cv, setCv)}
              required>
                <option disabled></option>
               {countriesNames.map((count) => <option id={count.emoji} value={count.name}>{count.name}</option>)}
            </FormSelect>
            <Form.Control.Feedback type="invalid">
              Seleciona una opcion.
            </Form.Control.Feedback>
          </FormGroup>
       
      </Row>


      {/* <Row className="mb-3 ">
       
          <FormGroup as={Col} md="6" className="mb-3 ">
            <FormLabel >Tipo de estudio</FormLabel>
            <FormSelect name='tipo_estudio'
              value={cv.tipo_estudio}
              onChange={(event) => handlerChange(event, cv, setCv)}
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
              value={cv.area_estudio}
              onChange={(event) => handlerChange(event, cv, setCv)}
              type="text"
              required />
            <Form.Control.Feedback type="invalid">
              Rellena este campo.
            </Form.Control.Feedback>
          </FormGroup>
       
      </Row> */}


      <Row className="mb-3 ">
        
          <FormGroup as={Col} md="6" className="mb-3 ">
            <FormLabel>Institución</FormLabel>
            <Form.Control
              name='educational_institution'
              placeholder="Nombre de la institucion"
              value={cv.educational_institution}
              type="text"
              onChange={(event) => handlerChange(event, cv, setCv)}
              required />
            <Form.Control.Feedback type="invalid">
              Rellena este campo.
            </Form.Control.Feedback>
          </FormGroup>
          


        
          <FormGroup as={Col} md="6" className="mb-3 ">
            <FormLabel >Estado</FormLabel>
            <FormSelect
              name='state'
              value={cv.state}
              onChange={(event) => handlerChange(event, cv, setCv)}
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
              name='initial_date'
              value={cv.initial_date}
              type="date"
              onChange={(event) => handlerChange(event, cv, setCv)}
              required />
            <Form.Control.Feedback type="invalid">
              Rellena este campo.
            </Form.Control.Feedback>
          </FormGroup>




          <FormGroup as={Col} md="6" className="mb-3 ">
            <FormLabel>Fecha de Finalización</FormLabel>
            <Form.Control
              name='finish_date'
              value={cv.finish_date}
              type="date"
              onChange={(event) => handlerChange(event, cv, setCv)}
              required ={!enCurso}/><Form.Control.Feedback type="invalid">
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
          textButton="Cargar CV"
          handlerClick={handleNext}
        />
      </FormGroup>

    </div>
  );
}


export default Step2FormCv