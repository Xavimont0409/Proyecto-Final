import Form from 'react-bootstrap/Form';
import { FormLabel, FormControl, Row, Col } from 'react-bootstrap';
import NavBar from "../../components/NavBarLog/NavBarLog"
import ButtonGeneral from '../../components/Button/ButtonGeneral';
import { useDispatch, useSelector } from "react-redux";
import validateFormInputs from '../FormVacante/validation';
import Loading from '../../components/Loading/Loading';
import style from './FormRegistroUsuario.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postUser } from '../../Redux/Actions/actionsFunction/actionsUsers';
import { getEmail } from '../../Redux/Actions/actionsFunction/FiltersHome';
import { useAuth0 } from '@auth0/auth0-react';
import Swal from 'sweetalert2';


const FormRegistroUsuario = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const currentUser = useSelector(state => state.dataEmail[0])

  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const [validated, setValidated] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [newUser, setNewUser] = useState({
    name: "",
    lastName: "",
    email: user.email,
    cellphone: "",
    registed: true,
  })


  useEffect(() => {
    const mail = user.email
    console.log(user)
    console.log(currentUser)
    dispatch(getEmail(mail))
  }, [])



  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setNewUser({ ...newUser, [property]: value });
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validateFormInputs(newUser)) {
      Swal.fire({
        title:'Faltan Datos',
        text:'Completa todos los campos',
        icon:'warning'
      })
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
      setValidated(false);
      return Swal.fire({
        title: "Registro exitoso",
        html: '<a href="/applicant">Ok</a>',
        icon: 'success'
      })
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
          <h2 style={{ 'margin': '20px' }}>Completa tu Registro como Postulante</h2>
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
            </Row>

            

          </Form>

            <ButtonGeneral
              textButton='Registrarse'
              handlerClick={handleSubmit}
              type='submit'
            >
            </ButtonGeneral>
        </div>

       

      </div>
    </div>
  )
};

export default FormRegistroUsuario;