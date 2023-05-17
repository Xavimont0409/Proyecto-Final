import NavBar from "../../components/NavBar/NavBar";
import DatosAuth from "../../components/NavBar/DatosAuth";

import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../components/Loading/Loading"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEmail } from "../../Redux/Actions/actionsFunction/FiltersHome";

const MiPerfil = () => {

   
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.dataEmail[0]);
    
    const { user, isAuthenticated, isLoading, loginWithRedirect, logout   } = useAuth0();
    


    useEffect(() => {
        const handleUserAuthentication = () => {
            if (isAuthenticated && user) {
                dispatch(getEmail(user.email));
            }
        };
        handleUserAuthentication();
    }, [dispatch, isAuthenticated, user]);




    if (isAuthenticated) {
        

    if(isLoading) {
        console.log(currentUser)
        return <div><Loading/></div>



    }



    // { if(currentUser.business_name){

    //     return <p>'Empresa'</p> 
    // } 
    // else{
        
    //     <p>Postulante</p>}
    // } 

        return (
            isAuthenticated && (
                <div>
                    <img src={user.picture} alt="Profile" />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    
                    <button onClick={() => logout()}>Logout</button>
                </div>
            )
        )
    }
}

export default MiPerfil;