import React from "react";
import { Form, FormLabel, FormSelect, FormGroup, Row, Col, FormCheck } from "react-bootstrap";
import style from "./Step3FormCv.module.css"

function Step3FormCv({ experiencia, setExperiencia, handlerChange }) {
    return (

        <Form className={style.Form}>

            <Row>
                <Col>
                    <FormGroup>
                        <FormLabel>Empresa</FormLabel>
                        <Form.Control name='empresa'
                            value={experiencia.empresa}
                            type="text"
                            onChange={(event) => handlerChange(event, experiencia, setExperiencia)}
                            required />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <FormLabel>Puesto</FormLabel>
                        <Form.Control name='puesto'
                            value={experiencia.puesto}
                            type="text"
                            onChange={(event) => handlerChange(event, experiencia, setExperiencia)}
                            required />
                    </FormGroup>
                </Col>
            </Row>


            <Row>
                <Col>
                    <FormGroup className="form-inline mx-">
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
                </Col>

                <Col>
                    <FormGroup>
                        <FormLabel>Ubicación</FormLabel>
                        <Form.Control name='ubicacion'
                            value={experiencia.ubicacion}
                            type="text"
                            onChange={(event) => handlerChange(event, experiencia, setExperiencia)}
                            required />
                    </FormGroup>
                </Col>
            </Row>


            <Row>
                <Col>
                    <FormGroup>
                        <FormLabel>Fecha de inicio</FormLabel>
                        <Form.Control name='fecha_inicio'
                            value={experiencia.fecha_inicio}
                            type="date"
                            onChange={(event) => handlerChange(event, experiencia, setExperiencia)}
                            required />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <FormLabel>Fecha de Finalización</FormLabel>
                        <Form.Control name='fecha_fin'
                            value={experiencia.fecha_fin}
                            type="date"
                            onChange={(event) => handlerChange(event, experiencia, setExperiencia)}
                            required />
                    </FormGroup>
                </Col>
            </Row>

            <FormGroup>
                <FormLabel>Trabajo actualmente en esta empresa</FormLabel>
                <FormCheck name='actualmente'
                    onChange={(event) => setExperiencia({ ...experiencia, actualmente: event.target.checked })}
                />
            </FormGroup>
        </Form>
    );
}

export default Step3FormCv