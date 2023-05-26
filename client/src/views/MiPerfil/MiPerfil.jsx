import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../components/Loading/Loading"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEmail } from "../../Redux/Actions/actionsFunction/FiltersHome";
import { useState } from "react";
import { getUserDetail } from "../../Redux/Actions/actionsFunction/actionsUsers";
import style from "./MiPerfil.module.css"
import { useNavigate } from "react-router-dom";
import NavBarLog from "../../components/NavBarLog/NavBarLog"

const MiPerfil = ({ setCurrentUserStore }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.dataEmail[0]);
  const userDetail = useSelector(state => state.UserDetail);
  console.log(userDetail)
  //console.log(currentUser.id)
  console.log(userDetail);

  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  const [perfil, setPerfil] = useState({
    photo: '',
    name: '',
    email: '',
    celular: '',
    profile: '',
    profesion:'',
    descripcion:'',
    apellido: '',


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
        celular: userDetail.phone,
        profile: userDetail.profile,
        profesion: userDetail.Cv?.profession,
        descripcion: userDetail.Cv?.personal_description,
        apellido: userDetail.lastName
      }));
    }
    // else{
    //     alert('Aun no has creado tu CV')
    //     navigate('/registro-cv')
    // }
  }, [userDetail]);



  if (isAuthenticated) {
    if (!userDetail || !currentUser) {
      return <div><Loading /></div>
    } else {
      return (
        // isAuthenticated && (
        <div className={style.container}>
          <div>
          <NavBarLog setCurrentUserStore={setCurrentUserStore} ></NavBarLog>
          </div>

          <h1>Mi Perfil</h1>

          <div className={style.container2}>

            <div>
              <h1>{perfil.name} {perfil.apellido}</h1>
              <img className={style.image} src={perfil.photo} alt="Profile" />
              <p>{perfil.email}</p>
            </div>

            <div>
              <p>{perfil.profesion}</p>
              <p></p>
              <p>{perfil.descripcion}</p>

              <button onClick={() => logout()}>Logout</button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default MiPerfil;
