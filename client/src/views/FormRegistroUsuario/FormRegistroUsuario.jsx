import Form from 'react-bootstrap/Form';
import { FormGroup, FormLabel, FormSelect, FormControl, Row, Col } from 'react-bootstrap';
import NavBar from "../../components/NavBar/NavBarLog"
import ButtonGeneral from '../../components/Button/ButtonGeneral';
import { useDispatch } from "react-redux";
import validateFormInputs from '../FormVacante/validation';
import Loading from '../../components/Loading/Loading';
import style from './FormRegistroUsuario.module.css';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { postUser } from '../../Redux/Actions/actionsFunction/actionsUsers';

const FormRegistroUsuario = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [newUser, setNewUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    cellphone: "",

  })


  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setNewUser({ ...newUser, [property]: value });
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validateFormInputs(newUser)) {
      alert('Completa todos los campos')
    } else {
      setValidated(true)
      dispatch(postUser(newUser))
      setNewUser({
        name: "",
        lastName: "",
        email: "",
        password: "",
        cellphone: "",
      })
      setValidated(false)
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (

    <div className={style.mainContainer}>

      <NavBar></NavBar>

      <div className={style.container2}>

        <div>
          <h2 style={{ 'margin': '20px' }}>Registro Postulante</h2>
          <Form validated={!validated} className={style.Form}   onSubmit={handleSubmit} >
            <Row>
              <Form.Group as={Col} md='6' className="mb-3"  >
                <FormLabel>Nombre</FormLabel>
                <FormControl
                  name='name'
                  placeholder='Nombre'
                  value={newUser.name}
                  type="text"
                  onChange={handleInputChange}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </Form.Group>


              <Form.Group as={Col} md='6' className="mb-3"  >
                <FormLabel>Apellido</FormLabel>
                <FormControl
                  name='lastName'
                  placeholder='Apellido'
                  value={newUser.lastName}
                  type="text"
                  onChange={handleInputChange}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </Form.Group>
            </Row>


            <Row>
              <Form.Group as={Col} md='6' className="mb-3"  >
                <FormLabel>Email</FormLabel>
                <FormControl
                  name='email'
                  placeholder='Email'
                  value={newUser.email}
                  type="text"
                  onChange={handleInputChange}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </Form.Group>


              <Form.Group as={Col} md='6' className="mb-3"  >
                <FormLabel>Password</FormLabel>
                <FormControl
                  name='password'
                  placeholder='Password'
                  value={newUser.password}
                  type="text"
                  onChange={handleInputChange}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </Form.Group>
            </Row>



            <Form.Group as={Col} md='6' className="mb-3" >
                <FormLabel  >Celular</FormLabel>
                <FormControl
                  name='cellphone'
                  placeholder='Numero de celular'
                  value={newUser.cellphone}
                  type="number"
                  onChange={handleInputChange}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </Form.Group>

          </Form>

          <Link to="/empleos">
            <ButtonGeneral
              textButton='Registrarse'
              type='submit'
              //handlerClick={handleSubmit}
            >
            </ButtonGeneral>
          </Link>
        </div>

        <div className={style.container3}>
          <ButtonGeneral
            textButton='Registrarse como empresa'
            type='submit'
            handlerClick={()=>navigate('/registroini-empresa')}>
          </ButtonGeneral>
          <h5 style={{marginBottom:'-15px', marginTop: '15px'}}>¿Ya estas registrado?</h5>
          <ButtonGeneral
            textButton='Inicia sesion'
            handlerClick={()=>navigate('/iniciarSesion')}>
          </ButtonGeneral>
        </div>

      </div>
    </div>
  )
};

export default FormRegistroUsuario;