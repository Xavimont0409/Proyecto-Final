import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBarLog"
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getEmail } from "../../Redux/Actions/actionsFunction/FiltersHome";
import { Form, FormLabel, FormSelect, FormGroup, Row, Col, FormCheck, } from "react-bootstrap";
import countries from "countries-list";
import ButtonGeneral from "../../components/Button/ButtonGeneral";
import { getUserDetail, postExpe } from "../../Redux/Actions/actionsFunction/actionsUsers";
import validation from "./validation";
import Swal from 'sweetalert2';
import style from './FormregistroEstudio.module.css'

const FormRegistroEstudio = ({ setCurrentUserStore }) => {


    const countriesNames = Object.values(countries.countries).map(
        (country) => country
    );

    const { user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.dataEmail[0])
    const [validated, setValidated] = useState(false);


    useEffect(() => {
        if (isAuthenticated) {
            if (user && user.email) {
                dispatch(getEmail(user.email));
            }
        }
    }, [dispatch, isAuthenticated, user]);


    const [estudio, setEstudio] = useState({
        title: '',
        country: '',
        study_level:'', 
        study_area:'', 
        institute:'', 
        state:'', 
        start_date:'', 
        end_date:'',
        CvId:'',
    });


    
    useEffect(() => {
        if (currentUser) {
            dispatch(getUserDetail(currentUser.id))
            setEstudio(prevEst => ({
                ...prevEst,
                CvId: currentUser.Cv?.id,
            }));
        }
    }, [currentUser, dispatch]);

    console.log(estudio)


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validation(estudio)) {
            Swal.fire({
                title:'Faltan Datos',
                text:'Completa todos los campos',
                icon:'warning'
              })
        } else {
            setValidated(true);
            dispatch(postExpe(estudio));
            return Swal.fire({
                title: "Registro exitoso",
                icon: 'success'
              })
        }
    };

    const handlerChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setEstudio({ ...estudio, [property]: value });
    }


    const fecharequired = estudio.state==='cursando'? false: true


    return (

        <div className={style.mainContainer}>
            <NavBar setCurrentUserStore={setCurrentUserStore} ></NavBar>
          <h2 style={{ 'margin': '30px' }}>Agrega estudios a tu CV</h2>
        
          <Form className={style.Form} validated={!validated}>
            <Row className="mb-3">
    
              <FormGroup as={Col} md="6">
                <FormLabel>Título / Carrera</FormLabel>
                <Form.Control
                  name='title'
                  placeholder="Profesion"
                  value={estudio.title}
                  onChange={(event) => handlerChange(event)}
                  type="text"
                  required/>
                  <Form.Control.Feedback type="invalid">
                    Rellena este campo.
                  </Form.Control.Feedback>
              </FormGroup>
           
           
              <FormGroup as={Col} md="6" >
                <FormLabel>País donde estudiaste</FormLabel>
                <FormSelect
                  name='country'
                  value={estudio.country}
                  onChange={(event) => handlerChange(event)}
                  required>
                    <option disabled></option>
                   {countriesNames.map((count) => <option id={count.emoji} value={count.name}>{count.name}</option>)}
                </FormSelect>
                <Form.Control.Feedback type="invalid">
                  Seleciona una opcion.
                </Form.Control.Feedback>
              </FormGroup>
           
          </Row>
    
    
          <Row className="mb-3 ">
           
              <FormGroup as={Col} md="6" className="mb-3 ">
                <FormLabel >Tipo de estudio</FormLabel>
                <FormSelect name='study_level'
                  value={estudio.study_level}
                  onChange={(event) => handlerChange(event)}
                  required>
                  <option disabled ></option>
                  <option value="Tecnico">Tecnico</option>
                  <option value="Tecnologico">Tecnologico</option>
                  <option value="Profesional">Profesional</option>
                  <option value="Master">Master</option>
                  <option value="Doctorado">Doctorado</option>
                  <option value="Otro">Otro</option>
    
                </FormSelect>
                <Form.Control.Feedback type="invalid">
                  Seleciona una opcion.
                </Form.Control.Feedback>
              </FormGroup>
    
    
    
              <FormGroup as={Col} md="6" className="mb-3 ">
                <FormLabel >Area de estudio</FormLabel>
                <Form.Control
                  name='study_area'
                  placeholder="Ejm: educación, informatica..."
                  value={estudio.study_area}
                  onChange={(event) => handlerChange(event)}
                  type="text"
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo.
                </Form.Control.Feedback>
              </FormGroup>
           
          </Row>
    
    
          <Row className="mb-3 ">
            
              <FormGroup as={Col} md="6" className="mb-3 ">
                <FormLabel>Institución</FormLabel>
                <Form.Control
                  name='institute'
                  placeholder="Nombre de la institución"
                  value={estudio.institute}
                  type="text"
                  onChange={(event) => handlerChange(event)}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo.
                </Form.Control.Feedback>
              </FormGroup>
              
    
    
            
              <FormGroup as={Col} md="6" className="mb-3 ">
                <FormLabel >Estado</FormLabel>
                <FormSelect
                  name='state'
                  value={estudio.state}
                  onChange={(event) => handlerChange(event)}
                  required>
                  <option disabled ></option>
                  <option value="cursando">En curso</option>
                  <option value="graduado">Graduado</option>
                  <option value="abandonado">Abandonado</option>
                </FormSelect>
                <Form.Control.Feedback type="invalid">
                  Selecciona una opcion.
                </Form.Control.Feedback>
              </FormGroup>
    
            </Row>
    
            <Row className="mb-3 ">
    
              <FormGroup as={Col} md="6" className="mb-3 ">
                <FormLabel>Fecha de inicio</FormLabel>
                <Form.Control
                  name='start_date'
                  value={estudio.start_date}
                  type="date"
                  onChange={(event) => handlerChange(event)}
                  required />
                <Form.Control.Feedback type="invalid">
                  Rellena este campo.
                </Form.Control.Feedback>
              </FormGroup>
    
    
    
    
              <FormGroup as={Col} md="6" className="mb-3 ">
                <FormLabel>Fecha de Finalización</FormLabel>
                <Form.Control
                  name='end_date'
                  value={estudio.end_date}
                  type="date"
                  onChange={(event) => handlerChange(event)}
                  required ={fecharequired}/><Form.Control.Feedback type="invalid">
                  Rellena este campo.
                </Form.Control.Feedback>
              </FormGroup>
            </Row>
          </Form>
    
    
          <FormGroup as={Col} md="6" className="mb-3 ">

            <ButtonGeneral
              textButton="Añadir Estudio"
            />
          </FormGroup>
    
        </div>
      );
  }


export default FormRegistroEstudio;