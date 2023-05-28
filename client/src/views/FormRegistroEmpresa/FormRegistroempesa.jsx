import Form from 'react-bootstrap/Form';
import { FormGroup, FormLabel, FormSelect, FormControl, Row, Col } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { postCompany } from '../../Redux/Actions/actionsFunction/actionsCompanys';
import Loading from '../../components/Loading/Loading';
import style from './FormRegistroEmpesa.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import countries from "countries-list";
import { getEmail } from '../../Redux/Actions/actionsFunction/FiltersHome'


const FormRegisterEmpresa = ({ Company, setCurrentUserStore, setValidateState }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [newEmpresa, setNewEmpresa] = useState({
    business_name: "",
    cuit: "",
    country: "",
    registed: true,
    name: Company.nombre,
    email: Company.email,
    password: Company.contraseña
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
    if(
      newEmpresa.business_name &&
      newEmpresa.cuit &&
      newEmpresa.country &&
      newEmpresa.name &&
      newEmpresa.email
    ){
      dispatch(postCompany(newEmpresa))
      setTimeout(()=>{
        dispatch(getEmail(newEmpresa.email))
      },1000)
      setCurrentUserStore(newEmpresa)
      setValidateState(true)
      setTimeout(()=>{
      navigate("/empresa")
    },1500)
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
      <div className={style.container2}>
        <div>
          <h2 style={{ 'margin': '20px' }}>Registro Empresa</h2>
          <Form >
            <Row>
              <FormGroup as={Col} md='6' >
                <FormLabel>Nombre</FormLabel>
                <FormControl
                  name='name'
                  placeholder='Nombre del representante'
                  value={newEmpresa.name}
                  type="text"
                  onChange={handleInputChange}
                  required
                  disabled={newEmpresa.name === Company.nombre ? true : false}
                  />
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
              </Form.Group>
              <FormGroup as={Col} md="6" >
                <FormLabel>País</FormLabel>
                <FormSelect
                  name='country'
                  value={newEmpresa.country}
                  onChange={handleInputChange}
                  required>
                  <option disabled></option>
                  {countriesNames.map((count) => <option key={count.emoji} id={count.emoji} value={count.name}>{count.name}</option>)}
                </FormSelect>
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
                  required
                  disabled={newEmpresa.email === Company.email ? true : false}
                  />
              </FormGroup>
              <FormGroup as={Col} md='10'  >
                <FormLabel>Contraseña</FormLabel>
                <FormControl
                  name='password'
                  placeholder='Password'
                  value={newEmpresa.password}
                  type="password"
                  onChange={handleInputChange}
                  required 
                  disabled={newEmpresa.password === Company.contraseña ? true : false} />
              </FormGroup>
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

export default FormRegisterEmpresa;