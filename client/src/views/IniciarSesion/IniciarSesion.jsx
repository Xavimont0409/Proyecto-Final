import { Form, Button, Container } from "react-bootstrap";

const IniciarSesion = () => {
    return(
        <div>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Usuario" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div>
                            <Form.Check type="checkbox" label="No cerrar sesion" />
                        </div>
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Iniciar Sesion
                    </Button>
                </Form>
            </Container>   
        </div>
    )
}

export default IniciarSesion