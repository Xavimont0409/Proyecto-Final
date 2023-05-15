import Form from 'react-bootstrap/Form';
import { FormGroup, FormLabel, FormSelect, FormControl, Row, Col } from 'react-bootstrap';
import NavBar from "../../components/NavBar/NavBarLog"
import ButtonGeneral from '../../components/Button/ButtonGeneral';
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanys, postCompany } from '../../Redux/Actions/actionsFunction/actionsCompanys';
import validateFormInputs from '../FormVacante/validation';
import Loading from '../../components/Loading/Loading';
import style from './FormRegistroEmpesa.module.css';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import countries from "countries-list";


const FormRegisterEmpresa = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [newEmpresa, setNewEmpresa] = useState({
    name: "",
    business_name: "",
    ruc: "",
    cuit: "",
    country: "",
    email: "",
    password: ""
  });

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
      alert('Completa todos los campos')
    } else {
      setValidated(true)
      dispatch(postCompany(newEmpresa))
      setNewEmpresa({
        name: "",
        business_name: "",
        ruc:"",
        cuit: "",
        country: "",
        email: "",
        password: ""
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

          <h2 style={{ 'margin': '20px' }}>Registro Empresa</h2>
          <Form validated={!validated} className={style.Form} onSubmit={handleSubmit} >
            <Row>
              <Form.Group as={Col} md='6' className="mb-3"  >
                <FormLabel>Nombre</FormLabel>
                <FormControl
                  name='name'
                  placeholder='Nombre de la empresa'
                  value={newEmpresa.name}
                  type="text"
                  onChange={handleInputChange}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md='6' className="mb-3"  >
                <FormLabel>Nombre comercial</FormLabel>
                <FormControl
                  name='business_name'
                  placeholder='Nonmbre Comercial de la empresa'
                  value={newEmpresa.business_name}
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
                <FormLabel>RUC</FormLabel>
                <FormControl
                  name='ruc'
                  placeholder='RUC'
                  value={newEmpresa.ruc}
                  type="text"
                  onChange={handleInputChange}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </Form.Group>

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
            </Row>


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


            <Row>
              <Form.Group as={Col} md='6' className="mb-3"  >
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
              </Form.Group>


              <Form.Group as={Col} md='6' className="mb-3"  >
                <FormLabel>Password</FormLabel>
                <FormControl
                  name='password'
                  placeholder='Password'
                  value={newEmpresa.password}
                  type="text"
                  onChange={handleInputChange}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

          </Form>

          <Link to="/empresa">
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
            textButton='Registrarse como usuario'
            type='submit'
            handlerClick={() => navigate('/registro-usuario')}>
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

export default FormRegisterEmpresa;