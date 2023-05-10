import NavBarLog from "./NavBarLog";
import NavbarUnlog from "./NavBarUnlog";


const NavBarFinal = () => {
    
    const usuarioLogueado = true;

    return (
        <div>
            {
                (usuarioLogueado) ? (<NavBarLog/>) : (<NavbarUnlog/>)
            }
        </div>
    )
}