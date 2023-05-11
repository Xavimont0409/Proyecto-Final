import Form from 'react-bootstrap/Form';
import style from "./FormVacante.module.css"
import { useState } from "react";
import { FormGroup, FormLabel, FormSelect } from 'react-bootstrap';


export default function FormVacante() {

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
        event.preventDefault();
    
    }

    return (

        <Form className={style.Form}>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Titulo de la vacante</Form.Label>
                <Form.Control name='title' 
                value={newVacant.title}
                type="text" 
                onChange={handleInputChange}
                required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripcion de la vacante</Form.Label>
                <Form.Control name='description'
                    value={newVacant.description}
                    as="textarea"
                    rows={5}
                    onChange={handleInputChange}
                    required/>
            </Form.Group>

            <div className="d-flex justify-content-center">
              
                <FormGroup className="form-inline mx-3">
                    <FormLabel className="me-2">Modalidad</FormLabel>
                    <FormSelect name='workMethod'
                    value={newVacant.workMethod}
                    onChange={handleInputChange}
                    required>
                        <option disabled></option>
                        <option value='Presencial'>Presencial</option>
                        <option value='Hibrido' >Hibrido</option>
                        <option  value='Remoto'>Remoto</option>
                    </FormSelect>
                </FormGroup>
                
                <FormGroup className="form-inline mx-3">
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
                </FormGroup>
                <FormGroup className="form-inline mx-3">
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
                </FormGroup>
            </div>
            <div  >
            <button className={style.button} type="submit">Crear Vacante</button>
            </div>
        </Form>
    )
}


