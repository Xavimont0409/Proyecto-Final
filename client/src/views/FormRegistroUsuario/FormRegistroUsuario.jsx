import Form from 'react-bootstrap/Form';
import { FormLabel, FormControl, Row, Col } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import Loading from '../../components/Loading/Loading';
import style from './FormRegistroUsuario.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postUser } from '../../Redux/Actions/actionsFunction/actionsUsers';
import { getEmail } from '../../Redux/Actions/actionsFunction/FiltersHome';



const FormRegistroUsuario = ({Applicant, setValidateState, setCurrentUserStore}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [newUserApplicant, setNewUserApplicant] = useState({
    name: Applicant.nombre,
    lastName: Applicant.apellido,
    email: Applicant.email,
    cellphone: "",
    registed: true,
    password: Applicant.contraseña,
  })

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setNewUserApplicant({ ...newUserApplicant, [property]: value });
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    if(
      newUserApplicant.lastName &&
      newUserApplicant.cellphone &&
      newUserApplicant.name &&
      newUserApplicant.email
    ){
      dispatch(postUser(newUserApplicant))
      setTimeout(()=>{
        dispatch(getEmail(newUserApplicant.email))
      },1000)
      setCurrentUserStore(newUserApplicant)
      setValidateState(true)
      setTimeout(()=>{
      navigate("/applicant")
    },1500)
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
      <div className={style.container2}>
        <div>
          <h2 style={{ 'margin': '20px' }}>Completa tu Registro como Postulante</h2>
          <Form >
            <Row>
              <Form.Group as={Col} md='6' className="mb-3"  >
                <FormLabel>Nombre</FormLabel>
                <FormControl
                  name='name'
                  placeholder='Nombre'
                  value={newUserApplicant.name}
                  type="text"
                  onChange={handleInputChange}
                  required 
                  disabled={newUserApplicant.name === Applicant.nombre ? true : false}
                  />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </Form.Group>


              <Form.Group as={Col} md='6' className="mb-3"  >
                <FormLabel>Apellido</FormLabel>
                <FormControl
                  name='lastName'
                  placeholder='Apellido'
                  value={newUserApplicant.lastName}
                  type="text"
                  onChange={handleInputChange}
                  required
                  disabled={newUserApplicant.lastName === Applicant.apellido ? true : false}
                  />
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
                  value={newUserApplicant.email}
                  type="text"
                  onChange={handleInputChange}
                  required
                  disabled={newUserApplicant.email === Applicant.email ? true : false}
                  />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </Form.Group>



              <Form.Group as={Col} md='6' className="mb-3" >
                <FormLabel  >Celular</FormLabel>
                <FormControl
                  name='cellphone'
                  placeholder='Numero de celular'
                  value={newUserApplicant.cellphone}
                  type="number"
                  onChange={handleInputChange}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md='6' className="mb-3" >
                <FormLabel  >Password</FormLabel>
                <FormControl
                  name='password'
                  placeholder='Password'
                  value={newUserApplicant.password}
                  type="password"
                  onChange={handleInputChange}
                  required 
                  disabled={newUserApplicant.password === Applicant.contraseña ? true : false}
                  />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Form>
          <button
            type='submit'
            onClick={(event)=>handleSubmit(event)}
          > registrate
          </button>
        </div>
      </div>
    </div>
  )
};

export default FormRegistroUsuario;