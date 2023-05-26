import NavBarLog from "./NavBarLog";
import NavbarUnlog from "./NavBarUnlog";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";


const NavBar = ({setValidateState, setCurrentUserStore2 }) => {
    const validacion = JSON.parse(localStorage.getItem("state"))
    console.log(validacion);
   // const { isAuthenticated } = useAuth0();

    return (
        <div>
            {
                (validacion === true) ? (<NavBarLog setValidateState={setValidateState} setCurrentUserStore2={ setCurrentUserStore2 } />) : (<NavbarUnlog/>)
            }
        </div>
    )
}

export default NavBar;