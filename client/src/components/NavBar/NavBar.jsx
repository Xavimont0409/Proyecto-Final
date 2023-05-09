
const NavBar = () => {
    return (
        <>
            <nav class="navbar bg-body-tertiary">
                <form class="container-fluid justify-content-space-arround">
                    <h2 className="">JobPortalX</h2>
                    <div>
                        <button class="btn btn-outline-success me-2" type="button">Iniciar sesión</button>
                        <button class="btn btn-outline-success me-2" type="button">Registrarme</button>
                    </div>
                    
                </form>
            </nav>
        </>
    )
}

export default NavBar;