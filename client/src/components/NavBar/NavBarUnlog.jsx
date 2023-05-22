import { Button, Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar () {

    
    const { loginWithRedirect } = useAuth0();

    
    const handlerLogin = () => {
        loginWithRedirect()
    }

    return (
        <>
            <Navbar bg="light" expand="sm">
                <Container fluid>
                    <Navbar.Brand href="/">JobPortalX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="ms-auto">
                            <Button onClick={handlerLogin} variant="outline-secondary" className="ms-auto">Iniciar sesion</Button>
                            <div className="vr" />
                            <Button onClick={() => loginWithRedirect({
                                authorizationParams: {
                                    screen_hint: "signup",
                                }
                            })} variant="secondary" className="ms-auto">Registrarme</Button>

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


