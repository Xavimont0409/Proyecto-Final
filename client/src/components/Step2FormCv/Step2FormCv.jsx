import React from "react";
import {  Form, Row, Col, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import style from "./Step2FormCv.module.css"


function Step2FormCv({ formacion, setFormacion, handlerChange }) {
  return (
    <Form className={style.Form}>

      <Row>
        <Col>
          <FormGroup>
            <FormLabel>Título / Carrera</FormLabel>
            <Form.Control name='titulo'
              value={formacion.titulo}
              type="text"
              onChange={(event) => handlerChange(event, formacion, setFormacion)}
              required 
              autoComplete="on"/>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <FormLabel>País</FormLabel>
            <Form.Control name='pais'
              value={formacion.pais}
              type="text"
              onChange={(event) => handlerChange(event, formacion, setFormacion)}
              required />
          </FormGroup>
        </Col>
      </Row>


      <Row>
        <Col>
          <FormGroup className="form-inline mx-">
            <FormLabel className="me-2">Tipo de estudio</FormLabel>
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
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <FormLabel>Area de estudio</FormLabel>
            <Form.Control name='area_estudio'
              value={formacion.area_estudio}
              type="text"
              onChange={(event) => handlerChange(event, formacion, setFormacion)}
              required />
          </FormGroup>
        </Col>
      </Row>


      <Row>
        <Col>
          <FormGroup>
            <FormLabel>Institución</FormLabel>
            <Form.Control name='institucion'
              value={formacion.institucion}
              type="text"
              onChange={(event) => handlerChange(event, formacion, setFormacion)}
              required />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="form-inline mx-2">
            <FormLabel className="me-2">Estado</FormLabel>
            <FormSelect name='estado'
              value={formacion.estado}
              onChange={(event) => handlerChange(event, formacion, setFormacion)}
              required>
              <option disabled ></option>
              <option value="cursando">En curso</option>
              <option value="graduado">Graduado</option>
              <option value="abandonado">Abandonado</option>

            </FormSelect>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <FormLabel>Fecha de inicio</FormLabel>
            <Form.Control name='fecha_inicio'
              value={formacion.fecha_inicio}
              type="date"
              onChange={(event) => handlerChange(event, formacion, setFormacion)}
              required />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <FormLabel>Fecha de Finalización</FormLabel>
            <Form.Control name='fecha_fin'
              value={formacion.fecha_fin}
              type="date"
              onChange={(event) => handlerChange(event, formacion, setFormacion)}
              required />
          </FormGroup>
        </Col>

      </Row>

    </Form>
  );
}


export default Step2FormCv