import React, { useState } from "react";
import { Form, Col, FormGroup, FormLabel } from "react-bootstrap";
import style from "./Step2FormCv.module.css"
import ButtonGeneral from "../Button/ButtonGeneral";
import validation from "./validation";
import { useDispatch } from "react-redux";
import { postCv } from "../../Redux/Actions/actionsFunction/actionsUsers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Step2FormCv({ cv, setCv, handlerChange, previousStep, nextStep }) {

  const navigate = useNavigate()
  const dispatch = useDispatch();

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
        profession: '',       //Titulo para el perfil
        country: '',        //Nacionalidad
        educational_institution: '', //objetivo laboral
        state: '',         //!
        initial_date: '',  //Fecha de nacimiento
        finish_date: '', //!
        ApplicantId: ''
      })
      navigate('/applicant')
    }
  };

  return (

    <div className={style.mainContainer}>
      <h2 style={{ 'margin': '30px' }}>Perfil profesional</h2>

      <Form className={style.Form} validated={!validated}>
       

          <FormGroup as={Col} md="12" className="mb-3">
            <FormLabel>Título para tu peril</FormLabel>
            <Form.Control
              name='profession'
              placeholder="Ej: Ingeniero civil especialista en diseño"
              value={cv.profession}
              onChange={(event) => handlerChange(event, cv, setCv)}
              type="text"
              required />
            <Form.Control.Feedback type="invalid">
              Rellena este campo.
            </Form.Control.Feedback>
          </FormGroup>
  


      
          <FormGroup as={Col} md="12" className="mb-3">
            <FormLabel>Objetivo laboral</FormLabel>
            <Form.Control
              name='educational_institution'
              placeholder="Cuéntanos cuáles son tus expectativas profesionales"
              value={cv.educational_institution}
              // type="textarea"
              as="textarea"
              rows={2}
              maxLength={60}
              onChange={(event) => handlerChange(event, cv, setCv)}
              required />
            <Form.Control.Feedback type="invalid">
              Rellena este campo.
            </Form.Control.Feedback>
          </FormGroup>


        <FormGroup as={Col} md="12" >
          <FormLabel className="custom-label">Skills</FormLabel>
          <Form.Control
            name="skill"
            placeholder="Escribe tus skills (max. 60 caracteres)"
            value={cv.skill}
            onChange={(event) => handlerChange(event, cv, setCv)}
            as="textarea"
            rows={2}
            maxLength={60}
            required />
          <Form.Control.Feedback type="invalid">
            Rellena este campo
          </Form.Control.Feedback>
        </FormGroup>

        <FormGroup as={Col} md="12" >
          <FormLabel>Descripción</FormLabel>
          <Form.Control
            name="personal_description"
            placeholder="Escribe una breve descripcion de tu perfil profesional (max. 200 caracteres)"
            value={cv.personal_description}
            onChange={(event) => handlerChange(event, cv, setCv)}
            as="textarea" rows={4}
            maxLength={200}
            required />
          <Form.Control.Feedback type="invalid">
            Rellena este campo
          </Form.Control.Feedback>
        </FormGroup>

      </Form>


      <div className={style.containerButton}>
        <ButtonGeneral
          textButton="Anterior"
          handlerClick={previousStep} />
        <ButtonGeneral
          textButton="Cargar CV"
          handlerClick={handleNext} />
      </div>


    </div>
  );
}


export default Step2FormCv