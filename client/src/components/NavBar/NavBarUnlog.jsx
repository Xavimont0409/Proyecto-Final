import { Button, Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const NavBar = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <Navbar bg="light" expand="sm">
                <Container fluid>
                    <Navbar.Brand href="/">JobPortalX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="ms-auto">
                            <Button variant="outline-secondary" className="ms-auto" onClick={() => loginWithRedirect()}>Iniciar sesion</Button>
                            <div className="vr" />
                            <Link to="/registro">
                                <Button variant="secondary" className="ms-auto">Registrarme</Button>    
                            </Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;