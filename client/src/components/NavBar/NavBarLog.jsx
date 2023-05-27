import {
  Button,
  Form,
  Container,
  NavDropdown,
  Nav,
  Navbar,
  Col,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { findPerName } from "../../Redux/Actions/actionsFunction/actionsSearchBar";
import { useLocalStorage } from "../../useLocalStorage/useLocalStorage";
import { login } from '../../Redux/Actions/actionsFunction/actionsLogin'

const NavBarCliente = ({ setValidateState, setCurrentUserStore2 }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ name, setName ] = useLocalStorage('name', '')

  const handlerSearchName = (event) =>{
    setName(event.target.value)
  }
  const searchName = (name) =>{
    dispatch(findPerName(name))
  }
  const handlerLogin = () =>{
    setValidateState(false)
    setCurrentUserStore2("")
    navigate("/")
  }

  return (
    <>
      <Navbar bg="light" expand="sm">
        <Container>
          <Navbar.Brand href="/empleos" className="ms-3">
            JobPortalX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar empleo..."
                className="ms-5"
                aria-label="Search"
                value={name}
                onChange={(event)=>handlerSearchName(event)}
              />
              <Button variant="secondary" className="ms-1" onClick={()=>searchName(name)}>
                Buscar
              </Button>
            </Form>
            <Nav
              className="ms-auto"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <NavDropdown title="Cuenta" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/MiPerfil">Mi perfil</NavDropdown.Item>
                <NavDropdown.Item href="/registro-cv">
                  Curriculum vitae
                </NavDropdown.Item>
                <NavDropdown.Item href="/registro-experiencia">
                  Agregar experiencia
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={handlerLogin}
                >
                  cerrar sesion
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarCliente;
