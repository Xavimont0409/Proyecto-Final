import NavBarLog from "./NavBarLog";
import NavbarUnlog from "./NavBarUnlog";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";


const NavBar = ({ setCurrentUserStore }) => {
    const validacion = useSelector(state => state.login)
    
   // const { isAuthenticated } = useAuth0();

    return (
        <div>
            {
                (validacion === true) ? (<NavBarLog setCurrentUserStore={ setCurrentUserStore } />) : (<NavbarUnlog/>)
            }
        </div>
    )
}

export default NavBar;