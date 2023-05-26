import { Button } from "react-bootstrap"
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./NavBarUnlog.module.css"

export default function NavBar () {
    const { loginWithRedirect } = useAuth0();
    
    const handlerLogin = () => {
        loginWithRedirect()
    }

    return (
        <div className={style.fixed}>
            <div className={style.container}>
                <h2 className={style.title}><a href="/">JobPortalX</a></h2>
                <div className={style.buttonsContainer}>
                    <Button onClick={handlerLogin} variant="outline-secondary" className="ms-auto">Iniciar sesion</Button>
                    <Button onClick={() => loginWithRedirect({
                        authorizationParams: {
                            screen_hint: "signup",
                        }
                    })} variant="secondary" className="ms-auto">Registrarme</Button>
                </div>
            </div>
        </div>
    )
}




//<>
//    <Navbar bg="light" expand="sm">
//        <Container fluid>
//            <Navbar.Brand href="/">JobPortalX</Navbar.Brand>
//            <Navbar.Toggle aria-controls="navbarScroll" />
//            <Navbar.Collapse id="navbarScroll">
//                <Form className="ms-auto">
//                   <Button onClick={handlerLogin} variant="outline-secondary" className="ms-auto">Iniciar sesion</Button>
//                    <div className="vr" />
                    
//                </Form>
//            </Navbar.Collapse>
//        </Container>
//    </Navbar>
//</>