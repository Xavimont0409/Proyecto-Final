import { Button , Form , Container, NavDropdown , Nav , Navbar , Col , Row} from "react-bootstrap";

const NavBarCliente = () => { 
    return (
        <>
            <Navbar bg="light" expand="sm">
                <Container>
                    <Navbar.Brand href="/empleos" className="ms-3">JobPortalX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Buscar empleo..."
                                className="ms-5"
                                aria-label="Search"
                            />
                            <Button variant="secondary" className="ms-1">Buscar</Button>
                        </Form>
                        <Nav
                            className="ms-auto"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            <NavDropdown title="Cuenta" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#miperfil">
                                    Mi perfil
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#CV">
                                    Curriculum vitae
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/landing">
                                    cerrar sesion
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>     
                    </Navbar.Collapse>   
                </Container>
            </Navbar>
        </>
    )
}

export default NavBarCliente;