
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useEffect, useState } from "react";
import { getLoginApplicant } from '../../Redux/Actions/actionsFunction/actionLogin2'
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import style from './inicioSesion.module.css'

const LoginApplicant = ({setValidateState, setCurrentUserStore}) => {
  const clientID = "970075390910-oaut1poeo5kbmti73j5fm8t3mrpi8jk7.apps.googleusercontent.com";
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
  }, []);
  const handlerChange = (event) => {
    setapplicant({
      ...applicant,
      [event.target.name]: event.target.value,
    });

  };
  
  const onSuccess = (response) => {
    const {email, googleId } = response.profileObj;
    dispatch(getLoginApplicant({email, password: googleId}))
    setCurrentUserStore({email, password: googleId})
    setValidateState(true)
    setTimeout(()=>{
      navigate("/applicant")
    },1500)
  };
  const onFailure = () => {
    console.log("Something went wrong");
  };
  const handlerSumit = () =>{
    dispatch(getLoginApplicant(applicant))
    setCurrentUserStore(applicant)
    setValidateState(true)
    setTimeout(()=>{
      navigate("/applicant")
    },1500)
  }

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
          type="password"
          placeholder="Contraseña"
          name="password"
          value={applicant.password}
          onChange={handlerChange}
          className={style.input}
        />
        <button onClick={handlerSumit} className={style.input}>Iniciar sesión</button>
        <div className={style.containerButtons}>
        <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_policy"}
        />
        <Link to='/loginCompany'><button className={style.button}>Iniciar como Empresa</button></Link>
      </div>
      </div>
      </div>
      
    </div>
  );
};
export default LoginApplicant;