import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEmail } from "../../Redux/Actions/actionsFunction/FiltersHome";

const DatosAuth = () => {

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
export default DatosAuth;