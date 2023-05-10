import NavBarCliente from "./NavBarLog";
import Navbar from "./NavBarUnlog";


const NavBarFinal = () => {
    
    const usuarioLogueado = true;

    return (
        <div>
            {
                (usuarioLogueado) ? (<NavBarCliente/>) : (<Navbar/>)
            }
        </div>
    )
}