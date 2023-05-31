import Form from "react-bootstrap/Form";
import style from "./FormVacante.module.css";
import { useState } from "react";
import { FormGroup, FormLabel, FormSelect, FormControl, Row, Col, } from "react-bootstrap";
import NavBar from "../../components/NavBarLog/NavBarLog";
import ButtonGeneral from "../../components/Button/ButtonGeneral";
import { useDispatch } from "react-redux";
import { postVacant } from "../../Redux/Actions/actionsFunction/axtionsVacants";
import validateFormInputs from "./validation";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function FormVacante({ setValidateState, setCurrentUserStore2 }) {
  const navigate = useNavigate();
  const today = new Date();
  const dateOnly = today.toISOString().slice(0, 10);

  const dispatch = useDispatch();
  const userType2 = JSON.parse(localStorage.getItem("currentUser2"));
  const [validated, setValidated] = useState(false);
  const [newVacant, setNewVacant] = useState({
    title: "",
    description: "",
    CompanyId: userType2.id,
    WorkdayId: "",
    WorkMethodId: "",
    SeniorityId: "",
    creation_date: dateOnly,
    operation:
      userType2.PayMethods.length === 0
        ? "none"
        : userType2.PayMethods[0].Operation.detail,
  });
  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    if (property === 'title') {
      setNewVacant({ ...newVacant, title: value.toUpperCase() })
    } else {
      setNewVacant({ ...newVacant, [property]: value });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateFormInputs(newVacant)) {
      Swal.fire({
        title: "Faltan Datos",
        text: "Completa todos los campos",
        icon: "warning",
      });
    } else {
      dispatch(postVacant(newVacant));
      navigate("/empresa");
    }
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.containerFirst}>{/* no quitar */}</div>
			<div className={style.containerSecond}>
      <NavBar
        setValidateState={setValidateState}
        setCurrentUserStore2={setCurrentUserStore2}
      ></NavBar>
      <div className={style.title}>
      <h2>Crear nueva vacante</h2>
      </div>
      <Form
        validated={!validated}
        className={style.Form}
        onSubmit={handleSubmit}
      >
        <Form.Group as={Col} md="12" className="mb-3">
          <FormLabel>Titulo de la vacante</FormLabel>
          <FormControl
            name="title"
            placeholder="Titulo de tu nuvea vacante"
            value={newVacant.title.toUpperCase()}
            type="text"
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Rellena este campo
          </Form.Control.Feedback>
        </Form.Group>

          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Label>Descripcion de la vacante</Form.Label>
            <Form.Control
              name="description"
              value={newVacant.description}
              placeholder="Realiza una descripción detallada de tu vacante"
              as="textarea"
              rows={5}
              onChange={handleInputChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Rellena este campo
            </Form.Control.Feedback>
          </Form.Group>

          <Row>
            <FormGroup as={Col} md="4">
              <FormLabel className="me-2">Modalidad</FormLabel>
              <FormSelect
                name="WorkMethodId"
                value={newVacant.WorkMethodId}
                onChange={handleInputChange}
                required
              >
                <option disabled></option>
                <option value={1}>Presencial</option>
                <option value={2}>Hibrido</option>
                <option value={3}>Remoto</option>
              </FormSelect>
              <Form.Control.Feedback type="invalid">
                Selecciona una opcion
              </Form.Control.Feedback>
            </FormGroup>

            <FormGroup as={Col} md="4">
              <FormLabel className="me-2">Jornada</FormLabel>
              <FormSelect
                name="WorkdayId"
                value={newVacant.WorkdayId}
                onChange={handleInputChange}
                required
              >
                <option disabled></option>
                <option value={1}>Tiempo completo</option>
                <option value={2}>Medio tiempo</option>
                <option value={3}>Por horas</option>
              </FormSelect>
              <Form.Control.Feedback type="invalid">
                Selecciona una opcion
              </Form.Control.Feedback>
            </FormGroup>

            <FormGroup as={Col} md="4">
              <FormLabel className="me-2">Experiencia</FormLabel>
              <FormSelect
                name="SeniorityId"
                value={newVacant.SeniorityId}
                onChange={handleInputChange}
                required
              >
                <option disabled></option>
                {/* <option value={0}>Sin Experiencia</option> */}
                <option value={4}>Trainee</option>
                <option value={3}>Junior</option>
                <option value={2}>Semi-senior</option>
                <option value={1}>Senior</option>
              </FormSelect>
              <Form.Control.Feedback type="invalid">
                Selecciona una opcion
              </Form.Control.Feedback>
            </FormGroup>
          </Row>
        </Form>
        <div>
          <ButtonGeneral
            textButton="Crear vacante"
            type="submit"
            handlerClick={handleSubmit}
          ></ButtonGeneral>
        </div>
      </div>
    </div>
  );
}
