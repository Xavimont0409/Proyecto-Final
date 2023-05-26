import NavBarLog from "../NavBarLog/NavBarLog";
import NavbarUnlog from "../NavBarUnlog/NavBarUnlog";
import { useAuth0 } from "@auth0/auth0-react";


const NavBar = ({ setCurrentUserStore }) => {
    
    const { isAuthenticated } = useAuth0();

    return (
        <div>
            {
                (isAuthenticated) ? (<NavBarLog setCurrentUserStore={ setCurrentUserStore } />) : (<NavbarUnlog/>)
            }
        </div>
    )
}

export default NavBar;