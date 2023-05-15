import Form from 'react-bootstrap/Form';
import {FormLabel, FormControl, Col } from 'react-bootstrap';
import NavBar from "../../components/NavBar/NavBar"
import ButtonGeneral from '../../components/Button/ButtonGeneral';
import { useDispatch } from "react-redux";
import validateFormInputs from '../FormVacante/validation';
import Loading from '../../components/Loading/Loading';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./IniciarSesion.module.css"

const IniciarSesion = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [validated, setValidated] = useState(false);
  
  
    const [currentUser, setCurrentUser] = useState({
      email: "",
      password: "",
  
    })
  
  
    const handleInputChange = (event) => {
      const property = event.target.name;
      const value = event.target.value;
      setCurrentUser({ ...currentUser, [property]: value });
    }
  
  
    const handleSubmit = (event) => {
      event.preventDefault()
      if (!validateFormInputs(currentUser)) {
        alert('Completa todos los campos')
      } else {
        setValidated(true)
        //! aqui iria el dispatch de la action que verifique si el usuario realmente esta registrado y despues actualizar un estado global con los datos de CurrentAplicant o currentCompany para de esa forma permitirle navegar por la rutas segun su perfin
      }
    };



    return(
        <div className={style.mainContainer}>

            <NavBar></NavBar>
  
        <div className={style.container2}>
  
          <div>
            <h2 style={{ 'margin': '20px' }}>Inicio de sesion</h2>
            <Form validated={!validated} className={style.Form}   onSubmit={handleSubmit} >
             
                <Form.Group as={Col} md='10' className="mb-3"  >
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    name='email'
                    placeholder='Email'
                    value={currentUser.email}
                    type="text"
                    onChange={handleInputChange}
                    required />
                  <Form.Control.Feedback type="invalid">
                    Rellena este campo
                  </Form.Control.Feedback>
                </Form.Group>
  
  
                <Form.Group as={Col} md='10' className="mb-3"  >
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    name='password'
                    placeholder='Password'
                    value={currentUser.password}
                    type="text"
                    onChange={handleInputChange}
                    required />
                  <Form.Control.Feedback type="invalid">
                    Rellena este campo
                  </Form.Control.Feedback>
                </Form.Group>
              
            </Form>
  
  
            <ButtonGeneral
              textButton='Iniciar sesion'
              type='submit'
              handlerClick={handleSubmit}>
            </ButtonGeneral>
  
          </div>
  
          <div className={style.container3}>
            <ButtonGeneral
              textButton='Registrarse como empresa'
              type='submit'
              handlerClick={()=>navigate('/registroini-empresa')}>
            </ButtonGeneral>
            <ButtonGeneral
              textButton='Registrarse como postulante'
              handlerClick={()=>navigate('/registro-usuario')}>
            </ButtonGeneral>
          </div>
  
        </div>
      </div>
    )
}

export default IniciarSesion