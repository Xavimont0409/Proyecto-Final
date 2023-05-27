import style from "./FormEmpresa.module.css"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import NavBar from "../../components/NavBar/NavBar";
import countries from "countries-list";
import cities from "cities.json"



function FormEmpresa({ setValidateState, setCurrentUserStore2 }) {

    
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({
        name: "",
    business_name: "",
    cuit: 0,
    country: "",
    city: "",
    headOffice: "",
    phone: 0,
    email: "",
    website: "",
    worksector: "",
    about: "",
    logo: ""
    
});
const [countrySelect, setCountrySelect] = useState("");

const countriesNames = Object.values(countries.countries).map(
    (country) => country
);

const cityNames = cities.map((city) => city);

const citiesSelect = cityNames.filter((city)=> {
    const letter1 = String.fromCodePoint(city.country[0].codePointAt(0) + 127397);
    const letter2 = String.fromCodePoint(city.country[1].codePointAt(0) + 127397);
    const finalEmoji = letter1 + letter2;
    return finalEmoji === countrySelect;
});

console.log(cityNames);

const handleSubmit = (event) => {
    event.preventDefault();
    const formCheck = event.currentTarget;
    if (formCheck.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    setValidated(true);
  };

  const handlerChange = (event) => {

    const property = event.target.name;
    const value = event.target.value;
    
    setForm({...form, [property] : value});

    if (property === "country"){
        setCountrySelect(event.target.selectedOptions[0].getAttribute("id"))
    };
    
   
};


  return (
      <div className={style.maincontainer1}>
        <NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} ></NavBar>
        <h1 className={style.title}>REGISTRA TU EMPRESA!</h1>
    <div className={style.maincontainer2}>
    <span className={style.textcontainer}>
    <p>
    Encuentra el perfil que estas buscando, consultando y filtrando 
    con nuestra Búsqueda en base. Recomendado para encontrar perfiles 
    específicos o cubrir vacantes de forma rápida.
    </p>
    <p>Encuentra el talento que necesitas, publica hasta 3 avisos gratis al mes 
    y atrae a los mejores candidatos para tu empresa.
    </p>
    </span>
    <div className={style.maincontainer3}>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Nombre de la empresa</Form.Label>
          <Form.Control value={form.name} name="name" onChange={handlerChange} required type="text" placeholder="Razón Social" />
          <Form.Control.Feedback type="invalid">
            Rellena este campo.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" >
          <Form.Label>Nombre Comercial</Form.Label>
          <Form.Control value={form.business_name} name="business_name" onChange={handlerChange} required type="text" placeholder="" />
          <Form.Control.Feedback type="invalid">
          Rellena este campo
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="4" >
          <Form.Label>CUIT</Form.Label>
            <Form.Control value={form.cuit} name="cuit" onChange={handlerChange} type="number" placeholder="Clave Única de Identificación Tributaria" required
            />
            <Form.Control.Feedback type="invalid">
            Rellena este campo
            </Form.Control.Feedback>
        </Form.Group>
      </Row>


      <Row className="mb-3">

        <Form.Group as={Col} md="4" >
        <Form.Label>País</Form.Label>
        <Form.Select name="country" onChange={handlerChange} required>
            {countriesNames.map((count) => <option id={count.emoji} value={count.name}>{count.name}</option>)}
        </Form.Select>
          <Form.Control.Feedback type="invalid">
          Rellena este campo
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4">
        <Form.Label>Ciudad</Form.Label>
        <Form.Select value={form.city} name="city" onChange={handlerChange} required>
           {citiesSelect.map((city) => <option value={city.name}>{city.name}</option>)}
        </Form.Select>
          <Form.Control.Feedback type="invalid">
          Rellena este campo
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Oficina Central</Form.Label>
            <Form.Control value={form.headOffice} name="headOffice" onChange={handlerChange} type="text" placeholder="Dirección" required
            />
            <Form.Control.Feedback type="invalid">
            Rellena este campo
            </Form.Control.Feedback>
        </Form.Group>

      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} md="3">
          <Form.Label>Teléfono</Form.Label>
            <Form.Control value={form.phone} name="phone" onChange={handlerChange} type="number" placeholder="Número de contacto" required
            />
            <Form.Control.Feedback type="invalid">
            Rellena este campo
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Correo electrónico</Form.Label>
            <Form.Control value={form.email} name="email" onChange={handlerChange} type="Email" placeholder="ejemplo@mail.com" required
            />
            <Form.Control.Feedback type="invalid">
            Rellena este campo con el formato correcto de email
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="5">
          <Form.Label>Sitio Web</Form.Label>
            <Form.Control value={form.website} name="website" onChange={handlerChange} type="text" placeholder="www.ejemplo.com" required
            />
            <Form.Control.Feedback type="invalid">
            Rellena este campo
            </Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Row className="mb-3">

        <Form.Group as={Col} md="6">
          <Form.Label>Sector de trabajo</Form.Label>
            <Form.Control value={form.worksector} name="worksector" onChange={handlerChange} type="text" placeholder="ej.: construcción, servicios." required
            />
            <Form.Control.Feedback type="invalid">
            Rellena este campo
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6">
          <Form.Label>Logo</Form.Label>
            <Form.Control value={form.logo} name="logo" onChange={handlerChange} type="text" placeholder="Por ahora colocar un link" required
            />
            <Form.Control.Feedback type="invalid">
            Rellena este campo
            </Form.Control.Feedback>
        </Form.Group>
       
      </Row>

      <Row className="mb-3">

      <Form.Group as={Col} md="12">
      <Form.Label>Descripción</Form.Label>
        <Form.Control value={form.about} name="about" onChange={handlerChange} as="textarea" rows={3}  required placeholder="Escribe una breve descripción de tu empresa"/>
        <Form.Control.Feedback type="invalid">
            Rellena este campo
        </Form.Control.Feedback>
        </Form.Group>

      </Row>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Aceptas proporcionar tus datos a JobPortalX y que este haga un manejo adecuado de los mismos"
          feedback="Debes aceptar los terminos antes de enviar tu formulario"
          feedbackType="invalid"
        />
      </Form.Group>
      
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
    </div>
    </div>
  );
}


export default FormEmpresa