import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = ({ isAuthenticated, currentUser}) => {
    const { loginWithRedirect } = useAuth0();

    if( !isAuthenticated ) {
        return <Navigate to={loginWithRedirect()}/>
    }

    return <Outlet/>
}

export default ProtectedRoute;


//
// const ProtectedRoute = ({ isAllowed, children, redirectTo="/iniciarSesion", currentUser}) => {
//     if( !isAllowed ) {
//         return <Navigate to={redirectTo}/>
//     }

//     if(currentUser.perfil === 'empresa'){
//      return children ? children : <Outlet/>
//     }

//     return children ? children : <Outlet/>
// }

// <Route element={<ProtectedRoute isAllowed={!!user} currentUser={currentUser}/>}>