import { Button, Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar bg="light" expand="sm">
        <Container fluid>
          <Navbar.Brand href="/">JobPortalX</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="ms-auto">
              <Button onClick={()=> navigate("/loginApplicant")} >Iniciar sesion</Button>
              <div className="vr" />
              <Button onClick={()=> navigate('/registro')} >Registrate</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
