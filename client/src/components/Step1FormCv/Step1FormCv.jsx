import React, { useState } from "react";
import { Form, Row, Col, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import style from "./Step1FormCv.module.css"



function Step1FormCv({ infoPersonal, setInfoPersonal, handlerChange }) {
  return (
    <Form className={style.Form}>
      <Row>
        <Col>
          <FormGroup>
            <FormLabel>Descripción</FormLabel>
            <Form.Control name='descripcion'
              value={infoPersonal.descripcion}
              as="textarea"
              rows={5}
              onChange={(event) => handlerChange(event, infoPersonal, setInfoPersonal)}
              required />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <FormLabel>Telefono</FormLabel>
            <Form.Control name='telefono'
              value={infoPersonal.telefono}
              type="text"
              onChange={(event) => handlerChange(event, infoPersonal, setInfoPersonal)}
              required />
          </FormGroup>
        </Col>
      </Row>


      <Row>
        <Col>
          <FormGroup>
            <FormLabel>Redes</FormLabel>
            <Form.Control name='redes'
              value={infoPersonal.redes}
              type="text"
              onChange={(event) => handlerChange(event, infoPersonal, setInfoPersonal)}
              required />
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <FormLabel>Foto</FormLabel>
            <Form.Control name='foto'
              value={infoPersonal.foto}
              type="file"
              onChange={(event) => handlerChange(event, infoPersonal, setInfoPersonal)}
              required />
          </FormGroup>
        </Col>
      </Row>




    </Form>
  );
}

export default Step1FormCv