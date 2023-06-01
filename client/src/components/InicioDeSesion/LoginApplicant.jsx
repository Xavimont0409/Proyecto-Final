import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useEffect, useState } from "react";
import { getLoginApplicant } from "../../Redux/Actions/actionsFunction/actionLogin2";
import { getAllUsers } from "../../Redux/Actions/actionsFunction/actionsUsers";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import style from "./inicioSesion.module.css";
import Swal from 'sweetalert2';
import { FiEye, FiEyeOff } from "react-icons/fi"


const LoginApplicant = ({ setValidateState, setCurrentUserStore }) => {
  const valdiateUsers = useSelector((state) => state.Users);
  const [ pass, setPass ] = useState(false)
  const clientID =
    "970075390910-oaut1poeo5kbmti73j5fm8t3mrpi8jk7.apps.googleusercontent.com";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [applicant, setapplicant] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
    dispatch(getAllUsers());
  }, [dispatch]);
  const handlerChange = (event) => {
    setapplicant({
      ...applicant,
      [event.target.name]: event.target.value,
    });
  };

  const onSuccess = (response) => {
    const { email, googleId } = response.profileObj;
    if(filterBaned(response.profileObj) > 0){
      return Swal.fire({
        title: "Error",
        text: 'Usuario Baneado',
        icon: 'error'
      })
    }
    if (filterUsers(response.profileObj) === 0) {
      return Swal.fire({
        title: "Error",
        text: "Usuario no registrado",
        icon: "error",
      });
    } else {
      dispatch(getLoginApplicant({ email, password: googleId }));
      setCurrentUserStore({ email, password: googleId });
      setValidateState(true);
      setTimeout(() => {
        navigate("/applicant");
      }, 1500);
    }
  };
  const onFailure = () => {
    console.log("Something went wrong");
  };
  const filterUsers = (applicant) => {
    let filtro = {
      email: applicant.email,
      password: applicant.googleId || applicant.password
    }
    let filter = valdiateUsers.filter((users) => {
      return (
        users.email === filtro.email && 
        users.password === filtro.password &&
        users.registed === true
      );
    });
    return filter.length;
  };
  const filterBaned = (applicant) =>{
    let filtro = {
      email: applicant.email,
      password: applicant.googleId || applicant.password
    }
    let filter = valdiateUsers.filter((users) => {
      return (
        users.email === filtro.email && 
        users.password === filtro.password &&
        users.registed === false
      );
    });
    return filter.length;
  }
  const handlerSumit = () => {
    if(filterBaned(applicant) > 0){
      return Swal.fire({
        title: "Error",
        text: 'Usuario Baneado',
        icon: 'error'
      })
    }
    if (filterUsers(applicant) === 0) {
      return Swal.fire({
        title: "Error",
        text: 'Usuario no registrado',
        icon: 'error'
      })
    } else {
      dispatch(getLoginApplicant(applicant));
      setCurrentUserStore(applicant);
      setValidateState(true);
      setTimeout(() => {
        navigate("/applicant");
      }, 1500);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.containerData}>
        <h1 className={style.title}>Login Aplicante</h1>
        <div className={style.containerInicio}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={applicant.email}
            onChange={handlerChange}
            className={style.input}
          />
          <input
            type={ pass ? "text" : "password" }
            placeholder="Contraseña"
            name="password"
            value={applicant.password}
            onChange={handlerChange}
            className={style.inputPassword}
          />
					{pass ?	<FiEye className={style.icon} onClick={() => setPass(false)}></FiEye>  : <FiEyeOff className={style.icon} onClick={() => setPass(true)}></FiEyeOff> }

          <button onClick={handlerSumit} className={style.input}>
            Iniciar sesión
          </button>
          <div className={style.containerButtons}>
            <GoogleLogin
              clientId={clientID}
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_policy"}
            />
            <Link to="/loginCompany">
              <button className={style.button}>Iniciar como Empresa</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.containerRutaAlternativa}>
        <span className={style.textoAlternativa}>
          ¿Aún no te has registrado?
        </span>
        <Link to="/newRegistroApplicant">
          <span className={style.textoLink}>Registrarte</span>
        </Link>
      </div>
    </div>
  );
};
export default LoginApplicant;
