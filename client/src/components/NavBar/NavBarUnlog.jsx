import { Button , Stack} from "react-bootstrap";

const NavBar = () => {
    return (
        <>
            <Stack direction="horizontal" gap={3}>
                <h1>JobPortalX</h1>
                <Button variant="secondary">Iniciar Sesion</Button>
                <Button variant="outline-secondary">Registrarme</Button>
            </Stack>
        </>
    )
}

export default NavBar;