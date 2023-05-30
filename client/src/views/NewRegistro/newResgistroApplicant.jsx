import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useEffect, useState } from "react";
import FormRegistroUsuario from "../FormRegistroUsuario/FormRegistroUsuario";
import style from "./NewRegistro.module.css";
import { useNavigate, Link } from "react-router-dom";

const NewRegistroApplicant = ({ setCurrentUserStore2, setValidateState, setCurrentUserStore }) => {
  const navigate = useNavigate()
  const clientID =
    "970075390910-oaut1poeo5kbmti73j5fm8t3mrpi8jk7.apps.googleusercontent.com";
  const [Applicant, setApplicant] = useState({
    imagen: "",
    email: "",
    nombre: "",
    apellido: "",
    contraseña: "",
  });

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    const newUserApplicant = response.profileObj;
    setApplicant({
      imagen: newUserApplicant.imageUrl,
      email: newUserApplicant.email,
      nombre: newUserApplicant.givenName,
      apellido: newUserApplicant.familyName,
      contraseña: newUserApplicant.googleId
    });
  };
  const onFailure = () => {
    console.log("Something went wrong");
  };

  return (
    <div className={style.container}>
      <div className={style.containerData}>
        <h1 className={style.title}>Registro de Applicante</h1>
        <div>
        <button className={style.button} onClick={()=> navigate('/registro-usuario')} >Registrarte con otro correo</button>
        <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_policy"}
        />
      {
        Applicant.nombre.length > 1 ? <FormRegistroUsuario setCurrentUserStore2={setCurrentUserStore2} Applicant={Applicant} setCurrentUserStore={setCurrentUserStore} setValidateState={setValidateState}/> : <div></div>
      }

        </div>
       
      </div>
      <div className={style.containerRutaAlternativa}>
        <span className={style.textoAlternativa}>
        ¿Quieres iniciar sesión?
        </span>
        <Link to='/loginApplicant'><span className={style.textoLink}>Inicio de Sesión</span></Link>
      </div>
    </div>
  );
};

export default NewRegistroApplicant