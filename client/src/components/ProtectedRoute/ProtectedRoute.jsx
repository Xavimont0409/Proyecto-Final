import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectTo="/iniciarSesion"}) => {
    if( isAllowed ) {
        return <Navigate to={redirectTo}/>
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