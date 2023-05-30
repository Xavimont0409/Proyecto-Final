import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useEffect, useState } from "react";
import { getCompany } from '../../Redux/Actions/actionsFunction/actionLogin2'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getAllCompanys } from '../../Redux/Actions/actionsFunction/actionsCompanys'
import Swal from "sweetalert2";
import style from './inicioSesion.module.css';

const LoginCompany = ({setValidateState, setCurrentUserStore}) => {
  const valdiateCompanys = useSelector((state) => state.Company);
  const clientID = "970075390910-oaut1poeo5kbmti73j5fm8t3mrpi8jk7.apps.googleusercontent.com";
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [company, setCompany] = useState({
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
    dispatch(getAllCompanys())
  }, [dispatch]);
  const handlerChange = (event) => {
    setCompany({
      ...company,
      [event.target.name]: event.target.value,
    });

  };
  const filterCompanys = (company) => {
    let filtro = {
      email: company.email,
      password: company.googleId || company.password,
    };
    let filter = valdiateCompanys.filter((users) => {
      return (
        users.email === filtro.email &&
        users.password === filtro.password &&
        users.registed === true
      );
    });
    return filter.length;
  };

  const onSuccess = (response) => {
    const {email, googleId } = response.profileObj;
    if (filterCompanys(response.profileObj) === 0) {
      return Swal.fire({
        title: "Error",
        text: "Empresa no registrada",
        icon: "error",
      });
    } else {
      dispatch(getCompany({ email, password: googleId }));
      setCurrentUserStore({ email, password: googleId });
      setValidateState(true);
      setTimeout(() => {
        navigate("/empresa");
      }, 1500);
    }
  };
  const onFailure = () => {
    console.log("Something went wrong");
  };
  const handlerSumit = () =>{
    if (filterCompanys(company) === 0) {
      return Swal.fire({
        title: "Error",
        text: "Empresa no registrada",
        icon: "error",
      });
    } else {
      dispatch(getCompany(company));
      setCurrentUserStore(company);
      setValidateState(true);
      setTimeout(() => {
        navigate("/empresa");
      }, 2000);
    }
  }

  return (
    <div className={style.container}>
      <div className={style.containerData}>
        <h1 className={style.title}>Login Empresa</h1>
      <div className={style.containerInicio}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={company.email}
          onChange={handlerChange}
          className={style.input}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={company.password}
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
          <Link to='/loginApplicant'><button className={style.button}>Iniciar como Aplicante</button></Link>
        </div>
      </div>
      </div>
      <div className={style.containerRutaAlternativa}>
        <span className={style.textoAlternativa}>
          ¿Aún no te has registrado?
        </span>
        <Link to='/newRegistroCompany'><span className={style.textoLink}>Registrarte</span></Link>
      </div>
    </div>
  );
};
export default LoginCompany;
