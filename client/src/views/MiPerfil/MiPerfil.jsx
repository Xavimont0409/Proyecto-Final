import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../components/Loading/Loading"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEmail } from "../../Redux/Actions/actionsFunction/FiltersHome";
import { useState } from "react";
import { getUserDetail } from "../../Redux/Actions/actionsFunction/actionsUsers";
import style from "./MiPerfil.module.css"
import { useNavigate } from "react-router-dom";
import NavBarLog from "../../components/NavBar/NavBarLog"

const MiPerfil = ({ setCurrentUserStore }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.dataEmail[0]);
  const userDetail = useSelector(state => state.UserDetail[0]);
  console.log(userDetail)
  console.log(currentUser.id)

  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  const [perfil, setPerfil] = useState({
    photo: '',
    name: '',
    email: '',
    profile: '',
  });


  useEffect(() => {
    if (user && user.email) {
      dispatch(getEmail(user.email));
    }
  }, [dispatch, user]);


  useEffect(() => {
    if (currentUser) {
      dispatch(getUserDetail(currentUser.id))
    }
  }, [dispatch, currentUser]);



  useEffect(() => {
    if (userDetail) {
      setPerfil(prevCv => ({
        ...prevCv,
        photo: userDetail.Cv?.photo,
        name: userDetail.name,
        email: userDetail.email,
        profile: userDetail.profile
      }));
    }
    // else{
    //     alert('Aun no has creado tu CV')
    //     navigate('/registro-cv')
    // }
  }, [userDetail]);



  if (isAuthenticated) {
    if (!userDetail) {
      return <div><Loading/></div>
    } else {


      return (
        // isAuthenticated && (
        <div className={style.container}>
          <NavBarLog setCurrentUserStore={setCurrentUserStore} ></NavBarLog>

          <h1>Mi Perfil</h1>

          <div className={style.container2}>

            <img className={style.image} src={perfil.photo} alt="Profile" />

            <div>
              <h2>Nombre: {perfil.name}</h2>
              <p>Email: {perfil.email}</p>
              <p>Perfil: {perfil.profile}</p>
              <button onClick={() => logout()}>Logout</button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default MiPerfil;
