import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ user, redirectTo="/iniciarSesion"}) => {
    if( !user ) {
        return <Navigate to={redirectTo}/>
    }

    return <Outlet/>
}

export default ProtectedRoute;