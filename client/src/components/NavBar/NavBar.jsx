import NavBarLog from "./NavBarLog";
import NavbarUnlog from "./NavBarUnlog";
import { useAuth0 } from "@auth0/auth0-react";


const NavBar = () => {
    
    const { isAuthenticated } = useAuth0()

    return (
        <div>
            {
                (isAuthenticated) ? (<NavBarLog/>) : (<NavbarUnlog/>)
            }
        </div>
    )
}

export default NavBar;