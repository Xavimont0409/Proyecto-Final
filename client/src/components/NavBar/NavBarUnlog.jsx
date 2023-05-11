import { Button , Navbar, Container, Form} from "react-bootstrap";

const NavBar = () => {

    return (
        <>
            <Navbar bg="light" expand="sm">
                <Container fluid>
                    <Navbar.Brand href="/">JobPortalX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="ms-auto">
                            <Button variant="outline-secondary" className="ms-auto">Iniciar sesion</Button>
                            <div className="vr" />
                            <Button variant="secondary" className="ms-auto">Registrarme</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;