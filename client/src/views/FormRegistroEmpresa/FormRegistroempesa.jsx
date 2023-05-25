import Form from 'react-bootstrap/Form';
import { FormGroup, FormLabel, FormSelect, FormControl, Row, Col } from 'react-bootstrap';
import NavBar from "../../components/NavBar/NavBarLog"
import ButtonGeneral from '../../components/Button/ButtonGeneral';
import { useDispatch, useSelector } from "react-redux";
import { postCompany } from '../../Redux/Actions/actionsFunction/actionsCompanys';
import validateFormInputs from '../FormVacante/validation';
import Loading from '../../components/Loading/Loading';
import style from './FormRegistroEmpesa.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import countries from "countries-list";
import { getEmail } from '../../Redux/Actions/actionsFunction/FiltersHome';
import { useAuth0 } from '@auth0/auth0-react';
import Swal from 'sweetalert2';


const FormRegisterEmpresa = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useAuth0();

  const [validated, setValidated] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [newEmpresa, setNewEmpresa] = useState({
    business_name: "",
    cuit: "",
    country: "",
    registed: true,
    name: '',
    email: user.email,
  });



  useEffect(() => {
    const mail = user.email
    dispatch(getEmail(mail))
  }, [])


  const countriesNames = Object.values(countries.countries).map(
    (country) => country
  );

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setNewEmpresa({ ...newEmpresa, [property]: value });
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validateFormInputs(newEmpresa)) {
      Swal.fire({
        title:'Faltan Datos',
        text:'Completa todos los campos',
        icon:'warning'
      })
    } else {
      setValidated(true)
      dispatch(postCompany(newEmpresa))
      setNewEmpresa({
        business_name: "",
        cuit: "",
        country: "",
        registed: true,
        name: '',
        email: user.email,
      })
      setValidated(false)
      return Swal.fire({
        title: "Registro exitoso",
        html: '<a href="/empresa">Ok</a>',
        icon: 'success'
      })
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (

    <div className={style.mainContainer}>

      <NavBar></NavBar>

      <div className={style.container2}>

        <div>

          <h2 style={{ 'margin': '20px' }}>Registro Empresa</h2>
          <Form validated={!validated} className={style.Form} onSubmit={handleSubmit} >


            <Row>
              <FormGroup as={Col} md='6' >
                <FormLabel>Nombre</FormLabel>
                <FormControl
                  name='name'
                  placeholder='Nombre del representante'
                  value={newEmpresa.name}
                  type="text"
                  onChange={handleInputChange}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </FormGroup>

              <FormGroup as={Col} md='6' >
                <FormLabel>Nombre comercial</FormLabel>
                <FormControl
                  name='business_name'
                  placeholder='Nonmbre de la empresa'
                  value={newEmpresa.business_name}
                  type="text"
                  onChange={handleInputChange}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </FormGroup>
            </Row>

            <Row>

              <Form.Group as={Col} md='6' className="mb-3"  >
                <FormLabel>CUIT</FormLabel>
                <FormControl
                  name='cuit'
                  placeholder='Cuit'
                  value={newEmpresa.cuit}
                  type="text"
                  onChange={handleInputChange}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </Form.Group>


              <FormGroup as={Col} md="6" >
                <FormLabel>País</FormLabel>
                <FormSelect
                  name='country'
                  value={newEmpresa.country}
                  onChange={handleInputChange}
                  required>
                  <option disabled></option>
                  {countriesNames.map((count) => <option id={count.emoji} value={count.name}>{count.name}</option>)}
                </FormSelect>
                <Form.Control.Feedback type="invalid">
                  Seleciona una opcion.
                </Form.Control.Feedback>
              </FormGroup>


            </Row>


            <Row>
              <FormGroup as={Col} md='10'  >
                <FormLabel>Email</FormLabel>
                <FormControl
                  name='email'
                  placeholder='Email'
                  value={newEmpresa.email}
                  type="text"
                  onChange={handleInputChange}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </FormGroup>


            </Row>

          </Form>


          <ButtonGeneral
            textButton='Registrarse'
            type='submit'
            handlerClick={handleSubmit}
          >
          </ButtonGeneral>
        </div>


        <div className={style.container3}>
          <ButtonGeneral
            textButton='Registrarse como usuario'
            type='submit'
            handlerClick={() => navigate('/registro-usuario')}>
          </ButtonGeneral>
          <h5 style={{ marginBottom: '-15px', marginTop: '15px' }}>¿Ya estas registrado?</h5>
          <ButtonGeneral
            textButton='Inicia sesion'
            handlerClick={() => navigate('/iniciarSesion')}>
          </ButtonGeneral>
        </div>

      </div>
    </div>
  )
};

export default FormRegisterEmpresa;