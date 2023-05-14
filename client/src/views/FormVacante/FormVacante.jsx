import Form from 'react-bootstrap/Form';
import style from "./FormVacante.module.css"
import { useState } from "react";
import { FormGroup, FormLabel, FormSelect, FormControl, Row, Col } from 'react-bootstrap';
import NavBar from "../../components/NavBar/NavBarLog"
import ButtonGeneral from '../../components/Button/ButtonGeneral';
import { useDispatch } from "react-redux";
import { postVacant } from '../../Redux/Actions/actionsFunction/axtionsVacants';
import validateFormInputs from './validation';

export default function FormVacante() {

    const dispatch = useDispatch();

    const [validated, setValidated] = useState(false);

    const [newVacant, setNewVacant] = useState({
        title: "",
        description: "",
        workMethod: "",
        workday: "",
        seniority: "",
    });


    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setNewVacant({ ...newVacant, [property]: value });
    }

   
    const handleSubmit = (event) => {
        event.preventDefault()
        if (!validateFormInputs(newVacant)) {
            alert('Completa todos los campos')
        } else {
            setValidated(true)
            dispatch(postVacant(newVacant))
            setNewVacant({
                title: "",
                description: "",
                workMethod: "",
                workday: "",
                seniority: "",
            })
            setValidated(false)
        }
    };


    return (

        <div className={style.mainContainer}>
            
            <NavBar></NavBar>

            
            <h2 style={{ 'margin': '20px' }}>Crear nueva vacante</h2>
            <Form  validated={!validated}  className={style.Form} onSubmit={handleSubmit} >

                <Form.Group as={Col} md='12' className="mb-3"  >
                    <FormLabel>Titulo de la vacante</FormLabel>
                    <FormControl
                        name='title'
                        placeholder='Titulo de tu nuvea vacante'
                        value={newVacant.title}
                        type="text"
                        onChange={handleInputChange}
                        required />
                    <Form.Control.Feedback type="invalid">
                        Rellena este campo
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md='12' className="mb-3" >
                    <Form.Label>Descripcion de la vacante</Form.Label>
                    <Form.Control
                        name='description'
                        value={newVacant.description}
                        placeholder='Realiza una descripción detallada de tu vacante'
                        as="textarea"
                        rows={5}
                        onChange={handleInputChange}
                        required />
                    <Form.Control.Feedback type="invalid">
                        Rellena este campo
                    </Form.Control.Feedback>
                </Form.Group>

                <Row>

                    <FormGroup as={Col} md='4'>
                        <FormLabel className="me-2">Modalidad</FormLabel>
                        <FormSelect name='workMethod'
                            value={newVacant.workMethod}
                            onChange={handleInputChange}
                            required>
                            <option disabled></option>
                            <option value='Presencial'>Presencial</option>
                            <option value='Hibrido' >Hibrido</option>
                            <option value='Remoto'>Remoto</option>
                        </FormSelect>
                        <Form.Control.Feedback type="invalid">
                            Selecciona una opcion
                        </Form.Control.Feedback>
                    </FormGroup>

                    <FormGroup as={Col} md='4'>
                        <FormLabel className="me-2">Jornada</FormLabel>
                        <FormSelect name='workday'
                            value={newVacant.workday}
                            onChange={handleInputChange}
                            required>
                            <option disabled ></option>
                            <option value="Tiempo completo">Tiempo completo</option>
                            <option value="Medio tiempo">Medio tiempo</option>
                            <option value="Otro">Otro</option>
                        </FormSelect>
                        <Form.Control.Feedback type="invalid">
                            Selecciona una opcion
                        </Form.Control.Feedback>
                    </FormGroup>

                    <FormGroup as={Col} md='4'>
                        <FormLabel className="me-2">Experiencia</FormLabel>
                        <FormSelect name='seniority'
                            value={newVacant.seniority}
                            onChange={handleInputChange}
                            required>
                            <option disabled ></option>
                            <option value="Sin Experiencia">Sin Experiencia</option>
                            <option value="Trainee">Trainee</option>
                            <option value="Junior">Junior</option>
                            <option value="Semi-senior">Semi-senior</option>
                            <option value="Senior">Senior</option>
                        </FormSelect>
                        <Form.Control.Feedback type="invalid">
                            Selecciona una opcion
                        </Form.Control.Feedback>
                    </FormGroup>
                </Row>
            </Form>

            <div>
                <ButtonGeneral
                    textButton='Crear vacante'
                    type='submit'
                    handlerClick={handleSubmit}>
                </ButtonGeneral>
            </div>     

        </div>
    )
}


